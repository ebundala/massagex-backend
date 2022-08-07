import { AppLogger } from '@mechsoft/app-logger';
import { FirebaseService } from '@mechsoft/firebase-admin';
import { Injectable } from '@nestjs/common';

import { AttachmentType, Prisma } from '@prisma/client'
import { TenantContext } from '@mechsoft/common';

@Injectable()
export class AuthService {

  constructor(
    // private readonly firebaseApp: FirebaseService,
    private readonly logger: AppLogger,
    // private readonly mail: MailService,
  ) { }

  // TODO add server authorization and verification before creating user
  async notifyUserSignup(ctx: TenantContext,data,token:string): Promise<Object> {
    this.logger.debug(`user signup with  ${data}`, AuthService.name)

    try {
      if (ctx.auth != null && ctx.auth.uid) {
        let userArgs: Prisma.UserUpsertArgs = {
          where:{id:ctx.auth.uid},
          update:{                       
              email: {set:ctx.auth.email},
            },
          create: {
            id: ctx.auth.uid,
            displayName: ctx.auth.displayName ?? "guest",
            email: ctx.auth.email,
            phoneNumber: ctx.auth.phoneNumber,
            emailVerified: ctx.auth.emailVerified,
            disabled: ctx.auth.disabled,
            avator: {
              create: {
                path: ctx.auth.photoURL ?? "uploads/placeholder.png",
                attachmentType: AttachmentType.IMAGE
              }
            }
          }
        }
        let profile = await ctx.prisma.user.upsert(userArgs)
        await ctx.enforcer.addRoleForUser(ctx.auth.uid, profile.role)
        return {
          completedPlofile: false
        }
      }
    }
    catch (e) {
      throw e;
    }
   
  }

  async getUserClaims(ctx: TenantContext,uid:string,token:string): Promise<Object> {
    this.logger.debug(`user signin: getting roles for ${uid}`, AuthService.name)

    try {
    if (ctx.auth && ctx.auth.uid) {
       const roles= await ctx.enforcer.getRolesForUser(ctx.auth.uid);
       return {roles};
      }      
    }
    catch (e) {
      throw e;
    }
    return {}
  }

  // async destroySession(token: string, tokenType:AuthTokenType) {
  //   const auth = this.firebaseApp.admin
  //     .auth();
  //   let fn;
  //   if (tokenType == AuthTokenType.sessionToken) {
  //     fn = auth.verifySessionCookie
  //   } else {
  //     fn = auth.verifyIdToken
  //   }


  //   return fn(token).then((decodedClaims) =>
  //     this.firebaseApp.admin.auth().revokeRefreshTokens(decodedClaims.sub),
  //   )
  //     .then(() => ({
  //       status: true,
  //       message: 'Session destroyed successfully',
  //     })).catch(() => {
  //       return {
  //         status: false,
  //         message: 'Failed to destroy session'
  //       }
  //     });
  // }

  // async signup(credentials: SignupInput, prisma: PrismaClient, select,context): Promise<AuthResult> {

  //   const res = await this.signupWithEmail(credentials, prisma, select,context);
  //   if (res && !res.status) {
  //     const link = await this.firebaseApp.admin.auth().generateEmailVerificationLink(credentials.email);
  //     await this.mail.sendWelcomeEmail(res.data, link).catch((e) => { this.logger.debug(e) });
  //   }
  //   return res;
  // }


  // async recoverAccount(email: string, prisma: PrismaClient): Promise<AuthResult> {
  //   const user = await prisma.user.findUnique({ where: { email: email } })
  //   if (!user) return {
  //     status: true,
  //     message: "User account not found"
  //   };
  //   const link = await this.firebaseApp.admin.auth().generatePasswordResetLink(email);
  //   await this.mail.sendPasswordResetLink(user, link).catch((e) => { this.logger.debug(e) });
  //  //Todo send email
  //   return {
  //     message: 'Password resset instructions sent',
  //     status: false,
  //   }
  // }

  // async signupWithEmail(data: SignupInput,
  //   prisma: PrismaClient, select,context:any
  //     ): Promise<AuthResult> {
  //   const { email, password, displayName, phoneNumber, avator, dateOfBirth,gender,business } = data;


  //   try {
  //     if (!isEmail(email)) {
  //       throw new GraphQLError('Invalid Email');
  //     } else if (!isLength(password, 6)) {
  //       throw new GraphQLError('Password must be atleast 6 characters long');
  //     } else if (!isLength(displayName, 3)) {
  //       throw new GraphQLError('Username must be 3 characters or more');
  //     }


  //     try {


  //       const data: Prisma.UserCreateInput = {
  //       displayName: displayName,
  //       disabled: false,
  //       email: email,
  //       emailVerified: false,
  //       }

  //       if(phoneNumber){
  //         data.phoneNumber=phoneNumber;
  //       }
  //       if (avator) {          
  //         data.avator = (avator as any);
  //       }

  //       if(gender){
  //         data.gender = gender;
  //       }
  //       if(business){
  //         data.businessProfile={ create:(business as any)}
  //         data.role=Role.BUSINESS
  //       }

  //       //TODO find better way to pass context args to prisma hooks
  //       data["password"] = password;
  //       //firebase user will be created in prisma hook
  //       const u2 = await prisma.user.create({
  //         data
  //       });
  //       const u3 = await prisma.user.findUnique({ where: { id: u2.id }, select }) as User;
  //       return {
  //         status: true,
  //         data: u3,
  //         message: "Thank you for registering\n you will receive a confimation email shortly when your account is ready",
  //       }
  //     } catch (e) {
  //       throw new GraphQLError(e.message);
  //     }
  //   } catch ({ message }) {


  //     throw new GraphQLError(message)
  //   }


  // }

  // private async cleanUpOnSignUpFailure(uid: string, prisma: PrismaClient) {

  //   const remove1 = await this.firebaseApp.admin
  //     .auth()
  //     .deleteUser(uid)
  //     .then(() => true)
  //     .catch(() => false);
  //   const remove2 = await prisma.user
  //     .delete({ where: { id: uid } })
  //     .then(() => true)
  //     .catch(() => false);
  //   return remove1 || remove2;
  // }

  // async signInWithEmail(credentials: AuthInput, prisma: PrismaClient, select) {
  //   try {
  //     const { email, password } = credentials;

  //     const user = await prisma.user
  //       .findUnique({ where: { email }, select: { id: true, state: true, role: true } });
  //       //TODO move these checks to bussiness rules
  //     if (!user) {
  //       throw new GraphQLError('Signin failed user does not exist');
  //     }
  //     if (user.state === AccountStatus.DISABLED || user.state === AccountStatus.DELETED) {
  //       throw new GraphQLError("Your account is deactivated")
  //     }
  //     // if (user.state === State.PENDING || user.state === State.REVIEW) {
  //     //   throw new GraphQLError("Your account is under review please try again later")
  //     // }
  //     // if (user.role === Role.CONSUMER || user.role === Role.PROVIDER || user.role === Role.MANAGER || user.role === Role.SUPERUSER) {

  //     //   await this._setUserClaims(user.id, user.role);
  //     // }
  //     const returnSecureToken = true;
  //     const buffer = Buffer.from(
  //       JSON.stringify({ email, password, returnSecureToken }),
  //     );

  //     return this.httpService.axiosRef
  //       .post(this.firebaseApp.signInWithEmailPath, buffer)
  //       .then(async ({ status, data }) => {

  //         if (status === 200) {
  //           const { idToken } = data;
  //           const session = await this.createSessionToken(idToken, prisma, select).catch(
  //             (e) => e,
  //           );
  //           if (session instanceof Error) {
  //             const { message } = session;
  //             throw new GraphQLError(message || 'Signin failed something went wrong');
  //           }
  //           return session;
  //         }
  //         throw new GraphQLError(`Network error code ${status}`);

  //       })
  //   } catch ({ message }) {
  //     throw new GraphQLError(`${message}`);
  //   }
  // }

  // async createUserWithEmail(email, password, displayName, phoneNumber?: string, photoURL?: string) {
  //   return this.firebaseApp.admin.auth().createUser({
  //     email,
  //     emailVerified: false,
  //     phoneNumber,
  //     password,
  //     displayName,
  //     photoURL,
  //     disabled: false,
  //   });
  // }
  // async deleteFirebaseUser(uid:string){
  //   return this.firebaseApp.admin.auth().deleteUser(uid)
  // }
  // async sendPasswordResetEmail(user) {
  //   const link = await this.firebaseApp.admin.auth().generatePasswordResetLink(user.email);
  //   await this.mail.sendPasswordResetLink(user, link).catch((e) => { this.logger.debug(e) });
  // }
  // async _setUserClaims(id: string, role: string) {
  //   return this.firebaseApp.admin
  //     .auth()
  //     .setCustomUserClaims(id, { role: role })
  //     .then(() => true)
  //   //.catch(() => false);
  // }

  // async createSessionToken(idToken: string, prisma: PrismaClient, select, expiresIn = 60 * 60 * 5 * 24 * 1000): Promise<any> {
  //   try {
  //     const decodedIdToken = await this.firebaseApp.admin
  //       .auth()
  //       .verifyIdToken(idToken, true);
  //     // Only process if the user just signed in in the last 5 minutes.
  //     if (new Date().getTime() / 1000 - decodedIdToken.auth_time < 5 * 60) {
  //       //   // Create session cookie and return it.
  //       const token = await this.firebaseApp.admin.auth()
  //         .createSessionCookie(idToken, { expiresIn });

  //       const user = prisma.user.findUnique({ where: { id: decodedIdToken.uid }, select });

  //       return {
  //         data: user,
  //         token,
  //         status: true,
  //         message: 'Session created successfully',
  //       };

  //     }
  //     return {
  //       status: false,
  //       message: 'A user that was not recently signed in is trying to set a session',
  //     };
  //   }
  //   catch (e) {
  //     throw new GraphQLError('Failed to create session');

  //   }
  // }





}

/*
linkIdProvider({ idToken, username }) {
  log(idToken);
  log(username);
  if (!idToken) {
    throw new Error('No id token provided');
  } else if (!username) {
    throw new Error('No username provided');
  } else {
    return admin.auth().verifyIdToken(idToken, true)
      .then(async (info) => {
        const {
          role, uid,
        } = info;

        if (role) {
          throw new Error('Provided token is already linked to a user');
        } else if (!isLength(username, 3)) {
          throw new Error('Username must be 3 characters or more');
        } else if (!isAlphanumeric(username)) {
          throw new Error('Username can not contain special characters');
        } else {
          const user = await admin.auth().getUser(uid).catch((error) => error);
          if (user instanceof Error) {
            throw new Error('Failed to get user account');
          } else {
            const {
              email, displayName, photoURL, phoneNumber, disabled, emailVerified,
            } = user;

            const users = DB.collection('Users');
            const exist = await users.firstExample({ email }).catch(() => false);
            const exist2 = await users.firstExample({ username }).catch(() => false);
            if (exist) {
            // Todo handle case were user is in database and firebase but has no claims set
              throw new Error('The email address is already in use by another account');
            } else if (exist2) {
              throw new Error('The Username is already in use by another account');
            } else {
            // link user here
              const auser = await users.save({
                _key: uid,
                username,
                displayName,
                phoneNumber,
                disabled,
                email,
                emailVerified,
                avator: photoURL,
                role: 'SUBSCRIBER',
              }).catch((error) => error);

              if (auser instanceof Error) {
                throw new Error(auser.message || 'Failed to create user account');
              } else {
              // set claims here
                const setClaims = await this._setUserClaims(auser);
                if (setClaims) {
                  const data = await users.document(auser).catch((error) => error);
                  if (data instanceof Error) {
                    throw new Error('Failed to get user info with session');
                  } else {
                    return { user: data, message: 'Account linked successfully' };
                  }
                }
              }
            }
          }
        }
        return null;
      });
  }
}

async updateProfile(user, profile, avatorFile, coverFile) {
  this.isLogedIn(user._id);
  const userData = {};


  if (avatorFile) {
    const {
      createReadStream, filename, mimetype,
    } = await avatorFile;
    const stream = createReadStream();
    const fileUrl = await uploadFile(user._id, `profile/${user._id}/avator/${filename}`, mimetype, stream)
      .catch((e) => {
        const { message } = e;
        throw new Error(message || 'Failed to upload file');
      });
    if (!fileUrl) throw new Error('Failed to upload file');
    log(fileUrl);
    userData.photoURL = fileUrl;
  }
  // todo handle cover file
  if (coverFile) {
    const {
      createReadStream, filename, mimetype,
    } = await coverFile;
    const stream2 = createReadStream();
    const fileUrl2 = await uploadFile(user._id, `profile/${user._id}/cover/${filename}`, mimetype, stream2)
      .catch((e) => {
        const { message } = e;
        throw new Error(message || 'Failed to upload file');
      });
    if (!fileUrl2) throw new Error('Failed to upload file');
    userData.cover = fileUrl2;
  }
  let newUsername;
  if (profile) {
    const {
      username, avator, displayName, email, phoneNumber, cover, bio,
    } = profile;
    if (username) {
      const exist = await this.usersCol.firstExample({ username }).catch((e) => e);
      if (!(exist instanceof Error)) {
        if (exist._key !== user._key) {
          throw new Error('Username already in use with another account');
        }
      }
      newUsername = username;
      if (!isAlphanumeric(newUsername) || !isLength(newUsername, 3)) {
        throw new Error('Username must be 3 characters or more and not contain special characters');
      }
    }
    // const oldInfo = await this.usersCol.document(_id).catch((e) => e);
    // if (oldInfo instanceof Error) throw oldInfo;
    // eslint-disable-next-line prefer-const

    if (bio) userData.bio = bio;
    if (avator) userData.photoURL = avator;
    if (displayName && isLength(displayName, 2)) userData.displayName = displayName;
    if (email) userData.email = email;
    if (phoneNumber) userData.phoneNumber = phoneNumber;
    userData.cover = cover || userData.cover || user.cover;
  }
  const fuser = await admin.auth().updateUser(user._key, userData).catch((e) => e);
  if (fuser instanceof Error) {
    const { message } = fuser;
    throw new Error(message || 'Failed to update firebase user');
  }
  newUsername = newUsername || user.username;
  const data = {
    username: newUsername,
    email: fuser.email,
    phoneNumber: fuser.phoneNumber,
    avator: fuser.photoURL,
    displayName: fuser.displayName,
    disabled: fuser.disabled,
    emailVerified: fuser.emailVerified,
    cover: userData.cover,
  };
  if (userData.bio) data.bio = userData.bio;
  const auser = await this.usersCol.update(user._id, data)
    .then(() => this.usersCol.document(user._id)).catch((e) => e);
  if (auser instanceof Error) {
    throw auser;
  }
  return { user: auser, message: 'Profile updated successfully' };
}
*/
