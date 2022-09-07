import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { TenantContext } from '@mechsoft/common';
import { RegisterDeviceInput } from 'src/models/graphql';

@Injectable()
export class FcmRegistrationService {
  async registerDevice(data: RegisterDeviceInput, ctx: TenantContext, info) {
    const { auth, prisma } = ctx;
    debugger;
    const select = ctx.prisma
      .getSelection(info)
      .valueOf('data', 'Device', { select: {} });

    let args: Prisma.DeviceUpsertArgs = {
      where: { id: data.id },
      create: {
        id: data.id,
      },
      update: {},
    };
    if (data.type) {
      args.create.type = data.type;
      args.update.type = { set: data.type };
    }
    if (data.fcm_id) {
      args.create.fcm_id = data.fcm_id;
      args.update.fcm_id = { set: data.fcm_id };
    }
    if (auth?.uid) {
      args.create.user = { connect: { id: auth.uid } };
      args.update.user = { connect: { id: auth.uid } };
    }

    return prisma.device
      .upsert({ ...args, ...select })
      .then((data) => ({
        status: true,
        data,
        message: 'ok',
      }))
      .catch(({ message }) => ({
        status: false,
        data: null,
        message: message || 'unknown error',
      }));
  }
}
