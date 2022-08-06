/* eslint-disable max-len */
import * as functions from "firebase-functions";
import fetch from "node-fetch";
type NotifyUserCreateResult = {data:{
  notifyUserSignup:Record<string, unknown>
}};
type UserRoles = {data:{
  getUserRoles:string[]
}};
const APP_SERVER_URL:string = process.env.APP_SERVER_URL as string;

export const beforeCreate = functions.auth.user()
    .beforeCreate(async (user, context) => {
      const bearer = context.auth?.token;
      const query = {
        "query": `mutation {
          notifyUserSignup
        }`,
      };
      const claimsResult = await fetch(APP_SERVER_URL, {
        method: "post",
        body: JSON.stringify(query),
        headers: {"Content-Type": "application/json", "Authorization": `Bearer ${bearer}`},
      })
          .then((res) => <Promise<NotifyUserCreateResult>>res.json())
          .catch((e)=>{
            // TODO handle errors from app server
            throw new functions.auth.HttpsError(
                "invalid-argument", `${e?.message??"unkwown error"}`);
          });
      const claims = claimsResult.data.notifyUserSignup;
      if (claims?.notLinked == true) {
        throw new functions.auth.HttpsError(
            "unknown", "Failed to create user profile");
      }
      return {
        customClaims: claims,
      };
    });

// TODO implement session claims
export const beforeSignIn = functions.auth.user()
    .beforeSignIn(async (user, context) => {
      const bearer = context.auth?.token;
      functions.logger.debug(bearer);
      const query = {
        "query": `mutation {
          getUserRoles
        }`,
      };
      const claimsResult = await fetch(APP_SERVER_URL, {
        method: "post",
        body: JSON.stringify(query),
        headers: {"Content-Type": "application/json", "Authorization": `Bearer ${bearer}`},
      })
          .then((res) => <Promise<UserRoles>>res.json())
          .catch((e)=>{
            // TODO handle errors from app server
            throw new functions.auth.HttpsError(
                "invalid-argument", `${e?.message??"unkwown error"}`);
          });
      const claims = claimsResult.data.getUserRoles;
      return {
        sessionClaims: claims,
      };
    });


