
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import axios from "axios";
const APP_SERVER_URL:string = process.env.APP_SERVER_URL as string;
const ADMIN_UID:string = process.env.ADMIN_UID as string;
const SERVICE_AC_ID:string = process.env.SERVICE_AC_ID as string;
admin.initializeApp({
  serviceAccountId: SERVICE_AC_ID,
}
);
type NotifyUserCreateResult = {data:{
  notifyUserSignup:{
    status:boolean,
    data:Record<string, unknown>
}
}};
type UserRoles = {data:{
  getUserClaims:{
    status:boolean,
    data:Record<string, unknown>
}}};

let adminToken:string;
let timer:number;
const createAdminToken = async () => {
  const now = Date.now();
  if (adminToken==null||timer==null || now - timer > 1000*60*50) {
    timer = Date.now();
    await admin.auth().createCustomToken(ADMIN_UID, {cloudFunctions: true})
        .then((v)=> adminToken =v);
  } else {
    return;
  }
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
            headers: {"Content-Type": "application/json",
            },
          }).then((r)=>r).catch((e)=>{
            functions.logger.error(e);
          });

      const {status, data} = claimsResult?.data?.data?.notifyUserSignup??{};
      if (!status) {
        throw new functions.https
            .HttpsError("invalid-argument",
            // eslint-disable-next-line max-len
                "Failed to create account using provided credentials try different credentials");
      }

      if (data!=null) {
        // eslint-disable-next-line max-len
        const claims: Record<string, unknown> = <Record<string, unknown>>data["customClaims"];
        let photoURL = user.photoURL;
        if (data["photoURL"]!=null) {
          photoURL = <string>data["photoURL"];
        }

        return {
          photoURL: photoURL,
          customClaims: claims,
        };
      }
      return user;
    });

// TODO implement session claims
export const beforeSignIn = functions.auth.user()
    .beforeSignIn(async (user, context) => {
      await createAdminToken();

      const query = `mutation claims($uid:String!,$token:String!){
                        getUserClaims(uid:$uid,token:$token)
                       }`;
      const variables={
        uid: user.uid,
        token: adminToken,
      };

      const claimsResult = await axios.post<UserRoles>(APP_SERVER_URL, {
        query,
        variables,
        headers: {"Content-Type": "application/json",
        },
      }).catch((e)=>{
        functions.logger.error(e);
      });
      const {status, data} = claimsResult?.data.data.getUserClaims??{};
      if (status==false) {
        throw new functions.auth.HttpsError(
            "invalid-argument", "Failed to setup session");
      }
      if (data!=null) {
        if (data["roles"]!=null) {
          return {
            sessionClaims: {
              roles: <string[]>data["roles"],
            },
          };
        }
      }
      return user;
    });


