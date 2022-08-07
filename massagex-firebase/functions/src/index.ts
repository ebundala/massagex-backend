
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import axios from "axios";


type NotifyUserCreateResult = {data:{
  notifyUserSignup:Record<string, unknown>
}};
type UserRoles = {data:{
  getUserClaims:Record<string, unknown>
}};
const APP_SERVER_URL:string = process.env.APP_SERVER_URL as string;
const ADMIN_UID:string = process.env.ADMIN_UID as string;
let adminToken:string;
const createAdminToken = async () => {
  if (adminToken!=undefined) return;
  await admin.auth().createCustomToken(ADMIN_UID).then((v)=> adminToken =v);
};
export const beforeCreate = functions.auth.user()
    .beforeCreate(async (user, context) => {
      // const bearer = context.auth?.token;
      // TODO return photourl if not present here
      await createAdminToken();
      functions.logger.debug("claims", user.uid);

      const query = `mutation notify($data:Json!, $token:String!) {
        notifyUserSignup(data:$data,token:$token)
        }`;
      const variables={
        data: user,
        token: adminToken,
      };
      const claimsResult = await axios
          .post<NotifyUserCreateResult>(APP_SERVER_URL, {
            query, variables,
            headers: {"Content-Type": "application/json"},
          }).catch((e)=>{
            functions.logger.debug("error", e?.message);
            throw new functions.auth.HttpsError(
                "invalid-argument", `${e?.message??"unkwown error"}`);
          });

      const claims = claimsResult.data?.data?.notifyUserSignup;
      functions.logger.debug("claims", claims);
    });

// TODO implement session claims
export const beforeSignIn = functions.auth.user()
    .beforeSignIn(async (user, context) => {
      await createAdminToken();
      const bearer = context.auth?.token;
      functions.logger.debug("token ", bearer);
      // TODO return users profile state here
      const query = `mutation claims($uid:String!,$token:String!){
                        getUserClaims(uid:$uid,token:$token)
                       }`;
      const variables={
        uid: user.uid, token: adminToken,
      };

      const claimsResult = await axios.post<UserRoles>(APP_SERVER_URL, {
        query,
        variables,
        headers: {"Content-Type": "application/json"},
      }).catch((e)=>{
        functions.logger.debug("error", e?.message);
        throw new functions.auth.HttpsError(
            "invalid-argument", `${e?.message??"unkwown error"}`);
      });

      const claims = claimsResult?.data?.data?.getUserClaims;
      functions.logger.debug("claims", claims);
      return {
        sessionClaims: claims,
      };
    });


