/* eslint-disable max-len */
import * as functions from "firebase-functions";
import fetch from "node-fetch";
type NotifyUserCreateResult = {mutation:{
  notifyUserSignup:Record<string, unknown>
}};
type UserRoles = {mutation:{
  getUserRoles:string[]
}};
const APP_SERVER_URL:string = process.env.APP_SERVER_URL as string;

export const beforeCreate = functions.auth.user()
    .beforeCreate(async (user, context) => {
      const bearer = context.auth?.token;
      const query = {
        "mutation": `{
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
      const claims = claimsResult.mutation.notifyUserSignup;
      return {
        customClaims: claims,
      };
    });

// TODO implement session claims
export const beforeSignIn = functions.auth.user()
    .onCreate(async (user, context) => {
      const bearer = context.auth?.token;
      functions.logger.debug(bearer);
      const query = {
        "mutation": `{
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
      const claims = claimsResult.mutation.getUserRoles;
      return {
        sessionClaims: claims,
      };
    });
