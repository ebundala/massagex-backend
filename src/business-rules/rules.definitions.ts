import { AccountStatus, RecordStatus } from '@prisma/client';
import { Rule } from 'json-rules-engine';
import { Role } from '../models/graphql';

export const uniqueEmailPerAccount = (email: string) =>
  new Rule({
    name: 'uniqueEmailPerAccount',
    event: {
      type: 'uniqueEmailUsed',
      params: {
        message: 'Email is being used by another account',
      },
    },
    conditions: {
      all: [
        {
          fact: 'email',
          operator: 'equal',
          value: email,
        },
      ],
    },
  });

export const onlyOwnerhasAccess = (id: string) =>
  new Rule({
    name: 'onlyOwnerhasAccess',
    event: {
      type: 'isOwner',
      params: {
        message: "Permission error Your'e not the owner of this record",
      },
    },
    conditions: {
      all: [
        {
          fact: 'uid',
          operator: 'notEqual',
          value: id,
        },
        {
          fact: 'role',
          operator: 'notEqual',
          value: Role.ADMIN,
        },
      ],
    },
  });

export const isUserSensitiveInfo = (userId: string) => {
  const conditions = onlyOwnerhasAccess(userId).conditions;
  return new Rule({
    name: 'isUserSesnsitiveInfo',
    priority: 10,
    event: {
      type: 'isSensitiveInfo',
      params: {
        message: 'You dont have permission to access this user info',
      },
    },
    conditions: {
      any: [
        {
          all: [
            {
              fact: 'email',
              operator: 'equal',
              value: true,
              priority: 10,
            },
            conditions,
          ],
        },
        {
          all: [
            {
              fact: 'phoneNumber',
              operator: 'equal',
              value: true,
            },
            conditions,
          ],
        },
        {
          all: [
            {
              fact: 'orders',
              operator: 'equal',
              value: true,
              path: '$.orders',
            },
            conditions,
          ],
        },
      ],
    },
  });
};

export const onlyConnectOwnerSelf = (uid: string) => {
  return new Rule({
    name: 'onlySelfCanConnectOwner',
    event: {
      type: 'InvalidOwner',
      params: {
        message: 'Invalid owner parameter must be current user',
      },
    },
    conditions: {
      all: [
        {
          fact: 'owner',
          operator: 'notEqual',
          value: uid,
          path: '$.connect.id',
        },
      ],
    },
  });
};

export const onlyConnectActiveOffers = (activeIds: string[]) => {
  return new Rule({
    name: 'only connect active service category',
    event: {
      type: 'onlyActiveServiceCategoryAllowed',
      params: {
        message: 'Service category is not available',
      },
    },
    conditions: {
      all: [
        {
          fact: 'offers',
          operator: 'notIn',
          value: activeIds,
          path: '$.connect.0.id',
        },
        // {
        //     fact: "offers",
        //     operator: "notEqual",
        //     value: 1,
        //     path: "$.connect.length",
        //     priority: 10

        // }
      ],
    },
  });
};

export const canCreateOnlyOneOrganization = () => {
  return new Rule({
    name: 'canCreateOnlyOneOrganization',
    event: {
      type: 'hasOrganization',
      params: {
        message: 'You already have an organization account',
      },
    },
    conditions: {
      all: [
        {
          fact: 'organizations',
          operator: 'greaterThan',
          value: 0,
          path: '$.length',
        },
      ],
    },
  });
};
export const onlyServiceOfferedByOrg = (serviceId, organizationId) => {
  return new Rule({
    name: 'is service offered by organization',
    event: {
      type: 'serviceNotAvailable',
      params: {
        message: 'Service is not available for this Organization',
      },
    },
    conditions: {
      any: [
        {
          fact: 'service',
          operator: 'notEqual',
          value: serviceId,
          path: '$.connect.id',
        },
        /* {
                    fact: "service",
                    operator: "notEqual",
                    value: State.APPROVED,
                    path: "$.connect.id"
                }, */
        {
          fact: 'organization',
          operator: 'notEqual',
          value: organizationId,
          path: '$.connect.id',
        },
      ],
    },
  });
};
/**
 *
 * @fact shape { staff } a user record with id
 * @param staffsId staff id for given organization
 * @returns
 */
export const onlyStaffsAllowed = (staffsId: string[]) => {
  return new Rule({
    name: 'only staff allowed',
    event: {
      type: 'onlyStaffAllowed',
      params: {
        message: 'You are not a staff you cant access this record',
      },
    },
    conditions: {
      all: [
        {
          fact: 'uid',
          operator: 'notIn',
          value: staffsId,
        },
      ],
    },
  });
};
/**
 * @fact shape { role,uid}
 * @param userId current user id
 * @param staffsId staffs ids for given organization
 * @returns
 */
export const onlyOwnerOrProviderOrManagerCanUpdateOrder = (
  orderOwnerId: string,
  organizationManagerId: string,
  staffsId: string[],
) => {
  const staffCondition = onlyStaffsAllowed(staffsId).conditions;

  return new Rule({
    name: 'only owner or provider and manager of organization can update order',
    event: {
      type: 'onlyOwnerAndProviderOrManagerUpdateOrder',
      params: {
        message: "Your'e not owner or service provider for this order",
      },
    },
    conditions: {
      any: [
        {
          fact: 'role',
          operator: 'notIn',
          value: [Role.ADMIN, Role.BUSINESS],
        },
        {
          all: [
            {
              fact: 'uid',
              operator: 'notEqual',
              value: orderOwnerId,
            },
            {
              fact: 'role',
              operator: 'in',
              value: [Role.USER],
            },
            // onlyOwnerhasAccess(orderOwnerId).conditions
          ],
        },

        {
          all: [
            {
              fact: 'uid',
              operator: 'notEqual',
              value: orderOwnerId,
            },
            {
              fact: 'role',
              operator: 'equal',
              value: Role.BUSINESS,
            },
            staffCondition,
          ],
        },
        {
          all: [
            {
              fact: 'uid',
              operator: 'notEqual',
              value: orderOwnerId,
            },
            {
              fact: 'role',
              operator: 'equal',
              value: Role.ADMIN,
            },
            {
              fact: 'uid',
              operator: 'notEqual',
              value: organizationManagerId,
            },
          ],
        },
      ],
    },
  });
};

export const onlyProviderAndManagerCanProcessOrder = (customerId) => {
  return new Rule({
    name: 'only provider and manager can approve order',
    event: {
      type: 'onlyProviderAndManagerCanApproveOrder',
      params: {
        message:
          'You can not process this order only service provider can process the order',
      },
    },
    conditions: {
      all: [
        {
          fact: 'uid',
          operator: 'equal',
          value: customerId,
        },
        {
          fact: 'state',
          operator: 'in',
          value: [AccountStatus.DELETED, AccountStatus.DISABLED],
        },
      ],
    },
  });
};

export const onlyConsumerCanCompleteOrder = (customerId) => {
  return new Rule({
    name: 'only consumer can complete order',
    event: {
      type: 'onlyProviderAndManagerCanApproveOrder',
      params: {
        message: 'You can not complete this order only customer can complete',
      },
    },
    conditions: {
      all: [
        {
          fact: 'uid',
          operator: 'notEqual',
          value: customerId,
        },
        {
          fact: 'state',
          operator: 'in',
          value: [AccountStatus.DISABLED, AccountStatus.DELETED],
        },
        {
          fact: 'recordStatus',
          operator: 'in',
          value: [RecordStatus.DELETED],
        },
      ],
    },
  });
};

export const onlyConsumerWithCompletedOrRejectedOrderCanRateOrganization =
  () => {
    return new Rule({
      name: 'only consumer with a completed/rejected order can rate organization',
      event: {
        type: 'noCompletedOrder',
        params: {
          message:
            'You havent used any of this organization services to rate them',
        },
      },
      conditions: {
        all: [
          {
            fact: 'orders',
            operator: 'lessThan',
            value: 1,
            path: '$.length',
          },
        ],
      },
    });
  };

export const onlyOneRatingPerConsumerOrganizationPair = () => {
  return new Rule({
    name: 'only one rating per consumer per organization',
    event: {
      type: 'alreadyRated',
      params: {
        message:
          'You have already rated this service provider try to update your rating',
      },
    },
    conditions: {
      all: [
        {
          fact: 'ratings',
          operator: 'greaterThanInclusive',
          value: 1,
          path: '$.length',
        },
      ],
    },
  });
};

export const onlyOwnerOfRecordAllowed = (ownerId: string) => {
  return new Rule({
    name: 'only owner of record can perform operation',
    event: {
      type: 'onlyOwnerAllowed',
      params: {
        message: "Your'e not the owner of this record",
      },
    },
    conditions: {
      all: [
        {
          fact: 'owner',
          operator: 'notEqual',
          value: ownerId,
          path: '$.id',
        },
      ],
    },
  });
};
