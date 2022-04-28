
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

import { FileUpload } from 'graphql-upload';

export enum AttachmentScalarFieldEnum {
    attachmentType = "attachmentType",
    commentId = "commentId",
    createdAt = "createdAt",
    downloadable = "downloadable",
    duration = "duration",
    encoding = "encoding",
    filename = "filename",
    helpStepId = "helpStepId",
    id = "id",
    mimetype = "mimetype",
    path = "path",
    placement = "placement",
    size = "size",
    updatedAt = "updatedAt"
}

export enum AttachmentType {
    AUDIO = "AUDIO",
    DOCUMENT = "DOCUMENT",
    IMAGE = "IMAGE",
    VIDEO = "VIDEO"
}

export enum AuthMode {
    ANONYMOUS = "ANONYMOUS",
    EMAIL = "EMAIL",
    OAUTH = "OAUTH",
    PHONE = "PHONE"
}

export enum BusinessProfileScalarFieldEnum {
    about = "about",
    coverId = "coverId",
    createdAt = "createdAt",
    id = "id",
    mode = "mode",
    ownerId = "ownerId",
    updatedAt = "updatedAt"
}

export enum BusinnessMode {
    MOBILE_MODE = "MOBILE_MODE",
    OFFICE_MODE = "OFFICE_MODE"
}

export enum CasbinRuleScalarFieldEnum {
    createdAt = "createdAt",
    id = "id",
    ptype = "ptype",
    updatedAt = "updatedAt",
    v0 = "v0",
    v1 = "v1",
    v2 = "v2",
    v3 = "v3",
    v4 = "v4",
    v5 = "v5"
}

export enum CommentScalarFieldEnum {
    authorId = "authorId",
    commentId = "commentId",
    commentsEnabled = "commentsEnabled",
    content = "content",
    createdAt = "createdAt",
    id = "id",
    reviewId = "reviewId",
    state = "state",
    updatedAt = "updatedAt"
}

export enum DeviceScalarFieldEnum {
    fcm_id = "fcm_id",
    id = "id",
    type = "type",
    userId = "userId"
}

export enum HelpScalarFieldEnum {
    audience = "audience",
    createdAt = "createdAt",
    description = "description",
    id = "id",
    state = "state",
    topic = "topic",
    updatedAt = "updatedAt"
}

export enum HelpStepScalarFieldEnum {
    createdAt = "createdAt",
    description = "description",
    helpId = "helpId",
    id = "id",
    state = "state",
    stepNumber = "stepNumber",
    title = "title",
    updatedAt = "updatedAt"
}

export enum ImageSize {
    large = "large",
    largest = "largest",
    medium = "medium",
    small = "small",
    smallest = "smallest"
}

export enum LocationScalarFieldEnum {
    createdAt = "createdAt",
    id = "id",
    lat = "lat",
    lon = "lon",
    name = "name",
    state = "state",
    updatedAt = "updatedAt"
}

export enum MpesaPaymentScalarFieldEnum {
    createdAt = "createdAt",
    id = "id",
    input_Amount = "input_Amount",
    input_Country = "input_Country",
    input_Currency = "input_Currency",
    input_CustomerMSISDN = "input_CustomerMSISDN",
    input_PurchasedItemsDesc = "input_PurchasedItemsDesc",
    input_ServiceProviderCode = "input_ServiceProviderCode",
    input_ThirdPartyConversationID = "input_ThirdPartyConversationID",
    input_TransactionReference = "input_TransactionReference",
    output_ConversationID = "output_ConversationID",
    output_ResponseCode = "output_ResponseCode",
    output_ResponseDesc = "output_ResponseDesc",
    output_ThirdPartyConversationID = "output_ThirdPartyConversationID",
    output_TransactionID = "output_TransactionID",
    state = "state",
    updatedAt = "updatedAt"
}

export enum NotificationType {
    ORDER_ACCEPTED = "ORDER_ACCEPTED",
    ORDER_CANCELLED = "ORDER_CANCELLED",
    ORDER_DELIVERED = "ORDER_DELIVERED",
    ORDER_DISPATCHED = "ORDER_DISPATCHED",
    ORDER_PAYED = "ORDER_PAYED",
    ORDER_RECIEVED = "ORDER_RECIEVED",
    ORDER_UPDATED = "ORDER_UPDATED",
    REVIEW_RECIEVED = "REVIEW_RECIEVED",
    REVIEW_UPDATED = "REVIEW_UPDATED"
}

export enum OrderScalarFieldEnum {
    createdAt = "createdAt",
    id = "id",
    notes = "notes",
    ownerId = "ownerId",
    quantity = "quantity",
    receiptId = "receiptId",
    serviceId = "serviceId",
    state = "state",
    updatedAt = "updatedAt"
}

export enum PaymentMethodScalarFieldEnum {
    attachmentId = "attachmentId",
    code = "code",
    createdAt = "createdAt",
    description = "description",
    id = "id",
    name = "name",
    state = "state",
    updatedAt = "updatedAt"
}

export enum QueryMode {
    "default" = "default",
    insensitive = "insensitive"
}

export enum ReviewScalarFieldEnum {
    authorId = "authorId",
    content = "content",
    createdAt = "createdAt",
    id = "id",
    revieweeId = "revieweeId",
    state = "state",
    updatedAt = "updatedAt",
    value = "value"
}

export enum Role {
    ADMIN = "ADMIN",
    MODERATOR = "MODERATOR",
    ORGANIZATION = "ORGANIZATION",
    USER = "USER"
}

export enum SelcomDisbursementScalarFieldEnum {
    amount = "amount",
    createdAt = "createdAt",
    id = "id",
    reference = "reference",
    resultCode = "resultCode",
    state = "state",
    status = "status",
    transId = "transId",
    updatedAt = "updatedAt",
    userId = "userId",
    utilitycode = "utilitycode",
    utilityref = "utilityref",
    validation = "validation"
}

export enum SelcomPaymentScalarFieldEnum {
    amount = "amount",
    createdAt = "createdAt",
    id = "id",
    msisdn = "msisdn",
    operator = "operator",
    reference = "reference",
    resultCode = "resultCode",
    state = "state",
    status = "status",
    transId = "transId",
    updatedAt = "updatedAt",
    utilityref = "utilityref",
    validation = "validation"
}

export enum SelcomPaymentStatus {
    FAILED = "FAILED",
    PENDING = "PENDING",
    SUCCESS = "SUCCESS"
}

export enum SelcomUtilityCode {
    AMCASHIN = "AMCASHIN",
    EZCASHIN = "EZCASHIN",
    HPCASHIN = "HPCASHIN",
    SPCASHIN = "SPCASHIN",
    TPCASHIN = "TPCASHIN",
    TTCASHIN = "TTCASHIN",
    VMCASHIN = "VMCASHIN"
}

export enum ServiceScalarFieldEnum {
    authorId = "authorId",
    createdAt = "createdAt",
    currency = "currency",
    description = "description",
    id = "id",
    imageId = "imageId",
    name = "name",
    price = "price",
    state = "state",
    updatedAt = "updatedAt"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum State {
    APPROVED = "APPROVED",
    ARCHIVED = "ARCHIVED",
    COMPLETED = "COMPLETED",
    PENDING = "PENDING",
    REJECTED = "REJECTED",
    REVIEW = "REVIEW"
}

export enum TransactionScalarFieldEnum {
    createdAt = "createdAt",
    id = "id",
    mpesaPaymentId = "mpesaPaymentId",
    orderId = "orderId",
    paymentMethodId = "paymentMethodId",
    selcomDisbursementId = "selcomDisbursementId",
    selcomPaymentId = "selcomPaymentId",
    state = "state",
    type = "type",
    updatedAt = "updatedAt"
}

export enum TransactionType {
    DISBURSEMENT = "DISBURSEMENT",
    PAYMENT = "PAYMENT"
}

export enum UserScalarFieldEnum {
    avatorId = "avatorId",
    createdAt = "createdAt",
    disabled = "disabled",
    displayName = "displayName",
    email = "email",
    emailVerified = "emailVerified",
    id = "id",
    locationId = "locationId",
    phoneNumber = "phoneNumber",
    role = "role",
    state = "state",
    updatedAt = "updatedAt"
}

export class AttachmentCreateInput {
    attachmentType?: Nullable<AttachmentType>;
    businessProfiles?: Nullable<BusinessProfileCreateNestedManyWithoutCoverInput>;
    comment?: Nullable<CommentCreateNestedOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    helpStep?: Nullable<HelpStepCreateNestedOneWithoutAttachmentsInput>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateManyCommentInput {
    attachmentType?: Nullable<AttachmentType>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    path: Upload;
    placement?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
}

export class AttachmentCreateManyCommentInputEnvelope {
    data: AttachmentCreateManyCommentInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class AttachmentCreateManyHelpStepInput {
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    path: Upload;
    placement?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
}

export class AttachmentCreateManyHelpStepInputEnvelope {
    data: AttachmentCreateManyHelpStepInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class AttachmentCreateManyInput {
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    path: Upload;
    placement?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
}

export class AttachmentCreateNestedManyWithoutCommentInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutCommentInput[]>;
    create?: Nullable<AttachmentCreateWithoutCommentInput[]>;
    createMany?: Nullable<AttachmentCreateManyCommentInputEnvelope>;
}

export class AttachmentCreateNestedManyWithoutHelpStepInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutHelpStepInput[]>;
    create?: Nullable<AttachmentCreateWithoutHelpStepInput[]>;
    createMany?: Nullable<AttachmentCreateManyHelpStepInputEnvelope>;
}

export class AttachmentCreateNestedOneWithoutBusinessProfilesInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutBusinessProfilesInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutBusinessProfilesInput>;
}

export class AttachmentCreateNestedOneWithoutOrdersInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutOrdersInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutOrdersInput>;
}

export class AttachmentCreateNestedOneWithoutPaymentMethodsInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutPaymentMethodsInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutPaymentMethodsInput>;
}

export class AttachmentCreateNestedOneWithoutServicesInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutServicesInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutServicesInput>;
}

export class AttachmentCreateNestedOneWithoutUserInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutUserInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutUserInput>;
}

export class AttachmentCreateOrConnectWithoutBusinessProfilesInput {
    create: AttachmentUncheckedCreateWithoutBusinessProfilesInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateOrConnectWithoutCommentInput {
    create: AttachmentUncheckedCreateWithoutCommentInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateOrConnectWithoutHelpStepInput {
    create: AttachmentUncheckedCreateWithoutHelpStepInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateOrConnectWithoutOrdersInput {
    create: AttachmentUncheckedCreateWithoutOrdersInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateOrConnectWithoutPaymentMethodsInput {
    create: AttachmentUncheckedCreateWithoutPaymentMethodsInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateOrConnectWithoutServicesInput {
    create: AttachmentUncheckedCreateWithoutServicesInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateOrConnectWithoutUserInput {
    create: AttachmentUncheckedCreateWithoutUserInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateWithoutBusinessProfilesInput {
    attachmentType?: Nullable<AttachmentType>;
    comment?: Nullable<CommentCreateNestedOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    helpStep?: Nullable<HelpStepCreateNestedOneWithoutAttachmentsInput>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutCommentInput {
    attachmentType?: Nullable<AttachmentType>;
    businessProfiles?: Nullable<BusinessProfileCreateNestedManyWithoutCoverInput>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    helpStep?: Nullable<HelpStepCreateNestedOneWithoutAttachmentsInput>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutHelpStepInput {
    attachmentType?: Nullable<AttachmentType>;
    businessProfiles?: Nullable<BusinessProfileCreateNestedManyWithoutCoverInput>;
    comment?: Nullable<CommentCreateNestedOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutOrdersInput {
    attachmentType?: Nullable<AttachmentType>;
    businessProfiles?: Nullable<BusinessProfileCreateNestedManyWithoutCoverInput>;
    comment?: Nullable<CommentCreateNestedOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    helpStep?: Nullable<HelpStepCreateNestedOneWithoutAttachmentsInput>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutPaymentMethodsInput {
    attachmentType?: Nullable<AttachmentType>;
    businessProfiles?: Nullable<BusinessProfileCreateNestedManyWithoutCoverInput>;
    comment?: Nullable<CommentCreateNestedOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    helpStep?: Nullable<HelpStepCreateNestedOneWithoutAttachmentsInput>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    placement?: Nullable<string>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutServicesInput {
    attachmentType?: Nullable<AttachmentType>;
    businessProfiles?: Nullable<BusinessProfileCreateNestedManyWithoutCoverInput>;
    comment?: Nullable<CommentCreateNestedOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    helpStep?: Nullable<HelpStepCreateNestedOneWithoutAttachmentsInput>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutUserInput {
    attachmentType?: Nullable<AttachmentType>;
    businessProfiles?: Nullable<BusinessProfileCreateNestedManyWithoutCoverInput>;
    comment?: Nullable<CommentCreateNestedOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    helpStep?: Nullable<HelpStepCreateNestedOneWithoutAttachmentsInput>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
}

export class AttachmentListRelationFilter {
    every?: Nullable<AttachmentWhereInput>;
    none?: Nullable<AttachmentWhereInput>;
    some?: Nullable<AttachmentWhereInput>;
}

export class AttachmentOrderByInput {
    attachmentType?: Nullable<SortOrder>;
    commentId?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    downloadable?: Nullable<SortOrder>;
    duration?: Nullable<SortOrder>;
    encoding?: Nullable<SortOrder>;
    filename?: Nullable<SortOrder>;
    helpStepId?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    mimetype?: Nullable<SortOrder>;
    path?: Nullable<SortOrder>;
    placement?: Nullable<SortOrder>;
    size?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class AttachmentRelationFilter {
    is?: Nullable<AttachmentWhereInput>;
    isNot?: Nullable<AttachmentWhereInput>;
}

export class AttachmentScalarWhereInput {
    AND?: Nullable<AttachmentScalarWhereInput[]>;
    NOT?: Nullable<AttachmentScalarWhereInput[]>;
    OR?: Nullable<AttachmentScalarWhereInput[]>;
    attachmentType?: Nullable<EnumAttachmentTypeFilter>;
    commentId?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    downloadable?: Nullable<BoolFilter>;
    duration?: Nullable<IntFilter>;
    encoding?: Nullable<StringNullableFilter>;
    filename?: Nullable<StringNullableFilter>;
    helpStepId?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    mimetype?: Nullable<StringNullableFilter>;
    path?: Nullable<StringFilter>;
    placement?: Nullable<StringFilter>;
    size?: Nullable<IntFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class AttachmentScalarWhereWithAggregatesInput {
    AND?: Nullable<AttachmentScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<AttachmentScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<AttachmentScalarWhereWithAggregatesInput[]>;
    attachmentType?: Nullable<EnumAttachmentTypeWithAggregatesFilter>;
    commentId?: Nullable<StringNullableWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    downloadable?: Nullable<BoolWithAggregatesFilter>;
    duration?: Nullable<IntWithAggregatesFilter>;
    encoding?: Nullable<StringNullableWithAggregatesFilter>;
    filename?: Nullable<StringNullableWithAggregatesFilter>;
    helpStepId?: Nullable<StringNullableWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    mimetype?: Nullable<StringNullableWithAggregatesFilter>;
    path?: Nullable<StringWithAggregatesFilter>;
    placement?: Nullable<StringWithAggregatesFilter>;
    size?: Nullable<IntWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class AttachmentUncheckedCreateInput {
    attachmentType?: Nullable<AttachmentType>;
    businessProfiles?: Nullable<BusinessProfileUncheckedCreateNestedManyWithoutCoverInput>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateNestedManyWithoutCommentInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutCommentInput[]>;
    create?: Nullable<AttachmentCreateWithoutCommentInput[]>;
    createMany?: Nullable<AttachmentCreateManyCommentInputEnvelope>;
}

export class AttachmentUncheckedCreateNestedManyWithoutHelpStepInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutHelpStepInput[]>;
    create?: Nullable<AttachmentCreateWithoutHelpStepInput[]>;
    createMany?: Nullable<AttachmentCreateManyHelpStepInputEnvelope>;
}

export class AttachmentUncheckedCreateWithoutBusinessProfilesInput {
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutCommentInput {
    attachmentType?: Nullable<AttachmentType>;
    businessProfiles?: Nullable<BusinessProfileUncheckedCreateNestedManyWithoutCoverInput>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutHelpStepInput {
    attachmentType?: Nullable<AttachmentType>;
    businessProfiles?: Nullable<BusinessProfileUncheckedCreateNestedManyWithoutCoverInput>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutOrdersInput {
    attachmentType?: Nullable<AttachmentType>;
    businessProfiles?: Nullable<BusinessProfileUncheckedCreateNestedManyWithoutCoverInput>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutPaymentMethodsInput {
    attachmentType?: Nullable<AttachmentType>;
    businessProfiles?: Nullable<BusinessProfileUncheckedCreateNestedManyWithoutCoverInput>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    placement?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutServicesInput {
    attachmentType?: Nullable<AttachmentType>;
    businessProfiles?: Nullable<BusinessProfileUncheckedCreateNestedManyWithoutCoverInput>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutUserInput {
    attachmentType?: Nullable<AttachmentType>;
    businessProfiles?: Nullable<BusinessProfileUncheckedCreateNestedManyWithoutCoverInput>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
}

export class AttachmentUncheckedUpdateInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businessProfiles?: Nullable<BusinessProfileUncheckedUpdateManyWithoutCoverInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStepId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateManyInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStepId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AttachmentUncheckedUpdateManyWithoutAttachmentsInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStepId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AttachmentUncheckedUpdateManyWithoutCommentInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutCommentInput[]>;
    create?: Nullable<AttachmentCreateWithoutCommentInput[]>;
    createMany?: Nullable<AttachmentCreateManyCommentInputEnvelope>;
    delete?: Nullable<AttachmentWhereUniqueInput[]>;
    deleteMany?: Nullable<AttachmentScalarWhereInput[]>;
    disconnect?: Nullable<AttachmentWhereUniqueInput[]>;
    set?: Nullable<AttachmentWhereUniqueInput[]>;
    update?: Nullable<AttachmentUpdateWithWhereUniqueWithoutCommentInput[]>;
    updateMany?: Nullable<AttachmentUpdateManyWithWhereWithoutCommentInput[]>;
    upsert?: Nullable<AttachmentUpsertWithWhereUniqueWithoutCommentInput[]>;
}

export class AttachmentUncheckedUpdateManyWithoutHelpStepInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutHelpStepInput[]>;
    create?: Nullable<AttachmentCreateWithoutHelpStepInput[]>;
    createMany?: Nullable<AttachmentCreateManyHelpStepInputEnvelope>;
    delete?: Nullable<AttachmentWhereUniqueInput[]>;
    deleteMany?: Nullable<AttachmentScalarWhereInput[]>;
    disconnect?: Nullable<AttachmentWhereUniqueInput[]>;
    set?: Nullable<AttachmentWhereUniqueInput[]>;
    update?: Nullable<AttachmentUpdateWithWhereUniqueWithoutHelpStepInput[]>;
    updateMany?: Nullable<AttachmentUpdateManyWithWhereWithoutHelpStepInput[]>;
    upsert?: Nullable<AttachmentUpsertWithWhereUniqueWithoutHelpStepInput[]>;
}

export class AttachmentUncheckedUpdateWithoutBusinessProfilesInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStepId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutCommentInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businessProfiles?: Nullable<BusinessProfileUncheckedUpdateManyWithoutCoverInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStepId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutHelpStepInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businessProfiles?: Nullable<BusinessProfileUncheckedUpdateManyWithoutCoverInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutOrdersInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businessProfiles?: Nullable<BusinessProfileUncheckedUpdateManyWithoutCoverInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStepId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutPaymentMethodsInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businessProfiles?: Nullable<BusinessProfileUncheckedUpdateManyWithoutCoverInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStepId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutServicesInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businessProfiles?: Nullable<BusinessProfileUncheckedUpdateManyWithoutCoverInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStepId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutUserInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businessProfiles?: Nullable<BusinessProfileUncheckedUpdateManyWithoutCoverInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStepId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AttachmentUpdateInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businessProfiles?: Nullable<BusinessProfileUpdateManyWithoutCoverInput>;
    comment?: Nullable<CommentUpdateOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStep?: Nullable<HelpStepUpdateOneWithoutAttachmentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateManyMutationInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AttachmentUpdateManyWithWhereWithoutCommentInput {
    data: AttachmentUncheckedUpdateManyWithoutAttachmentsInput;
    where: AttachmentScalarWhereInput;
}

export class AttachmentUpdateManyWithWhereWithoutHelpStepInput {
    data: AttachmentUncheckedUpdateManyWithoutAttachmentsInput;
    where: AttachmentScalarWhereInput;
}

export class AttachmentUpdateManyWithoutCommentInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutCommentInput[]>;
    create?: Nullable<AttachmentCreateWithoutCommentInput[]>;
    createMany?: Nullable<AttachmentCreateManyCommentInputEnvelope>;
    delete?: Nullable<AttachmentWhereUniqueInput[]>;
    deleteMany?: Nullable<AttachmentScalarWhereInput[]>;
    disconnect?: Nullable<AttachmentWhereUniqueInput[]>;
    set?: Nullable<AttachmentWhereUniqueInput[]>;
    update?: Nullable<AttachmentUpdateWithWhereUniqueWithoutCommentInput[]>;
    updateMany?: Nullable<AttachmentUpdateManyWithWhereWithoutCommentInput[]>;
    upsert?: Nullable<AttachmentUpsertWithWhereUniqueWithoutCommentInput[]>;
}

export class AttachmentUpdateManyWithoutHelpStepInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutHelpStepInput[]>;
    create?: Nullable<AttachmentCreateWithoutHelpStepInput[]>;
    createMany?: Nullable<AttachmentCreateManyHelpStepInputEnvelope>;
    delete?: Nullable<AttachmentWhereUniqueInput[]>;
    deleteMany?: Nullable<AttachmentScalarWhereInput[]>;
    disconnect?: Nullable<AttachmentWhereUniqueInput[]>;
    set?: Nullable<AttachmentWhereUniqueInput[]>;
    update?: Nullable<AttachmentUpdateWithWhereUniqueWithoutHelpStepInput[]>;
    updateMany?: Nullable<AttachmentUpdateManyWithWhereWithoutHelpStepInput[]>;
    upsert?: Nullable<AttachmentUpsertWithWhereUniqueWithoutHelpStepInput[]>;
}

export class AttachmentUpdateOneRequiredWithoutBusinessProfilesInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutBusinessProfilesInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutBusinessProfilesInput>;
    update?: Nullable<AttachmentUncheckedUpdateWithoutBusinessProfilesInput>;
    upsert?: Nullable<AttachmentUpsertWithoutBusinessProfilesInput>;
}

export class AttachmentUpdateOneRequiredWithoutPaymentMethodsInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutPaymentMethodsInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutPaymentMethodsInput>;
    update?: Nullable<AttachmentUncheckedUpdateWithoutPaymentMethodsInput>;
    upsert?: Nullable<AttachmentUpsertWithoutPaymentMethodsInput>;
}

export class AttachmentUpdateOneWithoutOrdersInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutOrdersInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutOrdersInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<AttachmentUncheckedUpdateWithoutOrdersInput>;
    upsert?: Nullable<AttachmentUpsertWithoutOrdersInput>;
}

export class AttachmentUpdateOneWithoutServicesInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutServicesInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutServicesInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<AttachmentUncheckedUpdateWithoutServicesInput>;
    upsert?: Nullable<AttachmentUpsertWithoutServicesInput>;
}

export class AttachmentUpdateOneWithoutUserInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutUserInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutUserInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<AttachmentUncheckedUpdateWithoutUserInput>;
    upsert?: Nullable<AttachmentUpsertWithoutUserInput>;
}

export class AttachmentUpdateWithWhereUniqueWithoutCommentInput {
    data: AttachmentUncheckedUpdateWithoutCommentInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpdateWithWhereUniqueWithoutHelpStepInput {
    data: AttachmentUncheckedUpdateWithoutHelpStepInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpdateWithoutBusinessProfilesInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    comment?: Nullable<CommentUpdateOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStep?: Nullable<HelpStepUpdateOneWithoutAttachmentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutCommentInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businessProfiles?: Nullable<BusinessProfileUpdateManyWithoutCoverInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStep?: Nullable<HelpStepUpdateOneWithoutAttachmentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutHelpStepInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businessProfiles?: Nullable<BusinessProfileUpdateManyWithoutCoverInput>;
    comment?: Nullable<CommentUpdateOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutOrdersInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businessProfiles?: Nullable<BusinessProfileUpdateManyWithoutCoverInput>;
    comment?: Nullable<CommentUpdateOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStep?: Nullable<HelpStepUpdateOneWithoutAttachmentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutPaymentMethodsInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businessProfiles?: Nullable<BusinessProfileUpdateManyWithoutCoverInput>;
    comment?: Nullable<CommentUpdateOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStep?: Nullable<HelpStepUpdateOneWithoutAttachmentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutServicesInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businessProfiles?: Nullable<BusinessProfileUpdateManyWithoutCoverInput>;
    comment?: Nullable<CommentUpdateOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStep?: Nullable<HelpStepUpdateOneWithoutAttachmentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutUserInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businessProfiles?: Nullable<BusinessProfileUpdateManyWithoutCoverInput>;
    comment?: Nullable<CommentUpdateOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStep?: Nullable<HelpStepUpdateOneWithoutAttachmentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AttachmentUpsertWithWhereUniqueWithoutCommentInput {
    create: AttachmentUncheckedCreateWithoutCommentInput;
    update: AttachmentUncheckedUpdateWithoutCommentInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpsertWithWhereUniqueWithoutHelpStepInput {
    create: AttachmentUncheckedCreateWithoutHelpStepInput;
    update: AttachmentUncheckedUpdateWithoutHelpStepInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpsertWithoutBusinessProfilesInput {
    create: AttachmentUncheckedCreateWithoutBusinessProfilesInput;
    update: AttachmentUncheckedUpdateWithoutBusinessProfilesInput;
}

export class AttachmentUpsertWithoutOrdersInput {
    create: AttachmentUncheckedCreateWithoutOrdersInput;
    update: AttachmentUncheckedUpdateWithoutOrdersInput;
}

export class AttachmentUpsertWithoutPaymentMethodsInput {
    create: AttachmentUncheckedCreateWithoutPaymentMethodsInput;
    update: AttachmentUncheckedUpdateWithoutPaymentMethodsInput;
}

export class AttachmentUpsertWithoutServicesInput {
    create: AttachmentUncheckedCreateWithoutServicesInput;
    update: AttachmentUncheckedUpdateWithoutServicesInput;
}

export class AttachmentUpsertWithoutUserInput {
    create: AttachmentUncheckedCreateWithoutUserInput;
    update: AttachmentUncheckedUpdateWithoutUserInput;
}

export class AttachmentWhereInput {
    AND?: Nullable<AttachmentWhereInput[]>;
    NOT?: Nullable<AttachmentWhereInput[]>;
    OR?: Nullable<AttachmentWhereInput[]>;
    attachmentType?: Nullable<EnumAttachmentTypeFilter>;
    businessProfiles?: Nullable<BusinessProfileListRelationFilter>;
    comment?: Nullable<CommentWhereInput>;
    commentId?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    downloadable?: Nullable<BoolFilter>;
    duration?: Nullable<IntFilter>;
    encoding?: Nullable<StringNullableFilter>;
    filename?: Nullable<StringNullableFilter>;
    helpStep?: Nullable<HelpStepWhereInput>;
    helpStepId?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    mimetype?: Nullable<StringNullableFilter>;
    orders?: Nullable<OrderListRelationFilter>;
    path?: Nullable<StringFilter>;
    paymentMethods?: Nullable<PaymentMethodListRelationFilter>;
    placement?: Nullable<StringFilter>;
    services?: Nullable<ServiceListRelationFilter>;
    size?: Nullable<IntFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
    user?: Nullable<UserListRelationFilter>;
}

export class AttachmentWhereUniqueInput {
    id?: Nullable<string>;
}

export class AuthInput {
    email: string;
    password: string;
}

export class BoolFieldUpdateOperationsInput {
    set?: Nullable<boolean>;
}

export class BoolFilter {
    equals?: Nullable<boolean>;
    not?: Nullable<NestedBoolFilter>;
}

export class BoolWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedBoolFilter>;
    _min?: Nullable<NestedBoolFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<boolean>;
    max?: Nullable<NestedBoolFilter>;
    min?: Nullable<NestedBoolFilter>;
    not?: Nullable<NestedBoolWithAggregatesFilter>;
}

export class BusinessProfileCreateInput {
    about: string;
    cover: AttachmentCreateNestedOneWithoutBusinessProfilesInput;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mode: BusinnessMode;
    owner: UserCreateNestedOneWithoutBusinessProfileInput;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessProfileCreateManyCoverInput {
    about: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mode: BusinnessMode;
    ownerId: string;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessProfileCreateManyCoverInputEnvelope {
    data: BusinessProfileCreateManyCoverInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class BusinessProfileCreateManyInput {
    about: string;
    coverId: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mode: BusinnessMode;
    ownerId: string;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessProfileCreateNestedManyWithoutCoverInput {
    connect?: Nullable<BusinessProfileWhereUniqueInput[]>;
    connectOrCreate?: Nullable<BusinessProfileCreateOrConnectWithoutCoverInput[]>;
    create?: Nullable<BusinessProfileCreateWithoutCoverInput[]>;
    createMany?: Nullable<BusinessProfileCreateManyCoverInputEnvelope>;
}

export class BusinessProfileCreateNestedOneWithoutOwnerInput {
    connect?: Nullable<BusinessProfileWhereUniqueInput>;
    connectOrCreate?: Nullable<BusinessProfileCreateOrConnectWithoutOwnerInput>;
    create?: Nullable<BusinessProfileUncheckedCreateWithoutOwnerInput>;
}

export class BusinessProfileCreateOrConnectWithoutCoverInput {
    create: BusinessProfileUncheckedCreateWithoutCoverInput;
    where: BusinessProfileWhereUniqueInput;
}

export class BusinessProfileCreateOrConnectWithoutOwnerInput {
    create: BusinessProfileUncheckedCreateWithoutOwnerInput;
    where: BusinessProfileWhereUniqueInput;
}

export class BusinessProfileCreateWithoutCoverInput {
    about: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mode: BusinnessMode;
    owner: UserCreateNestedOneWithoutBusinessProfileInput;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessProfileCreateWithoutOwnerInput {
    about: string;
    cover: AttachmentCreateNestedOneWithoutBusinessProfilesInput;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mode: BusinnessMode;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessProfileListRelationFilter {
    every?: Nullable<BusinessProfileWhereInput>;
    none?: Nullable<BusinessProfileWhereInput>;
    some?: Nullable<BusinessProfileWhereInput>;
}

export class BusinessProfileOrderByInput {
    about?: Nullable<SortOrder>;
    coverId?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    mode?: Nullable<SortOrder>;
    ownerId?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class BusinessProfileRelationFilter {
    is?: Nullable<BusinessProfileWhereInput>;
    isNot?: Nullable<BusinessProfileWhereInput>;
}

export class BusinessProfileScalarWhereInput {
    AND?: Nullable<BusinessProfileScalarWhereInput[]>;
    NOT?: Nullable<BusinessProfileScalarWhereInput[]>;
    OR?: Nullable<BusinessProfileScalarWhereInput[]>;
    about?: Nullable<StringFilter>;
    coverId?: Nullable<StringFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    mode?: Nullable<EnumBusinnessModeFilter>;
    ownerId?: Nullable<StringFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class BusinessProfileScalarWhereWithAggregatesInput {
    AND?: Nullable<BusinessProfileScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<BusinessProfileScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<BusinessProfileScalarWhereWithAggregatesInput[]>;
    about?: Nullable<StringWithAggregatesFilter>;
    coverId?: Nullable<StringWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    mode?: Nullable<EnumBusinnessModeWithAggregatesFilter>;
    ownerId?: Nullable<StringWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class BusinessProfileUncheckedCreateInput {
    about: string;
    coverId: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mode: BusinnessMode;
    ownerId: string;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessProfileUncheckedCreateNestedManyWithoutCoverInput {
    connect?: Nullable<BusinessProfileWhereUniqueInput[]>;
    connectOrCreate?: Nullable<BusinessProfileCreateOrConnectWithoutCoverInput[]>;
    create?: Nullable<BusinessProfileCreateWithoutCoverInput[]>;
    createMany?: Nullable<BusinessProfileCreateManyCoverInputEnvelope>;
}

export class BusinessProfileUncheckedCreateNestedOneWithoutOwnerInput {
    connect?: Nullable<BusinessProfileWhereUniqueInput>;
    connectOrCreate?: Nullable<BusinessProfileCreateOrConnectWithoutOwnerInput>;
    create?: Nullable<BusinessProfileUncheckedCreateWithoutOwnerInput>;
}

export class BusinessProfileUncheckedCreateWithoutCoverInput {
    about: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mode: BusinnessMode;
    ownerId: string;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessProfileUncheckedCreateWithoutOwnerInput {
    about: string;
    coverId: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mode: BusinnessMode;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessProfileUncheckedUpdateInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    coverId?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mode?: Nullable<EnumBusinnessModeFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessProfileUncheckedUpdateManyInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    coverId?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mode?: Nullable<EnumBusinnessModeFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessProfileUncheckedUpdateManyWithoutBusinessProfilesInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mode?: Nullable<EnumBusinnessModeFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessProfileUncheckedUpdateManyWithoutCoverInput {
    connect?: Nullable<BusinessProfileWhereUniqueInput[]>;
    connectOrCreate?: Nullable<BusinessProfileCreateOrConnectWithoutCoverInput[]>;
    create?: Nullable<BusinessProfileCreateWithoutCoverInput[]>;
    createMany?: Nullable<BusinessProfileCreateManyCoverInputEnvelope>;
    delete?: Nullable<BusinessProfileWhereUniqueInput[]>;
    deleteMany?: Nullable<BusinessProfileScalarWhereInput[]>;
    disconnect?: Nullable<BusinessProfileWhereUniqueInput[]>;
    set?: Nullable<BusinessProfileWhereUniqueInput[]>;
    update?: Nullable<BusinessProfileUpdateWithWhereUniqueWithoutCoverInput[]>;
    updateMany?: Nullable<BusinessProfileUpdateManyWithWhereWithoutCoverInput[]>;
    upsert?: Nullable<BusinessProfileUpsertWithWhereUniqueWithoutCoverInput[]>;
}

export class BusinessProfileUncheckedUpdateOneWithoutOwnerInput {
    connect?: Nullable<BusinessProfileWhereUniqueInput>;
    connectOrCreate?: Nullable<BusinessProfileCreateOrConnectWithoutOwnerInput>;
    create?: Nullable<BusinessProfileUncheckedCreateWithoutOwnerInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<BusinessProfileUncheckedUpdateWithoutOwnerInput>;
    upsert?: Nullable<BusinessProfileUpsertWithoutOwnerInput>;
}

export class BusinessProfileUncheckedUpdateWithoutCoverInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mode?: Nullable<EnumBusinnessModeFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessProfileUncheckedUpdateWithoutOwnerInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    coverId?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mode?: Nullable<EnumBusinnessModeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessProfileUpdateInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    cover?: Nullable<AttachmentUpdateOneRequiredWithoutBusinessProfilesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mode?: Nullable<EnumBusinnessModeFieldUpdateOperationsInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutBusinessProfileInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessProfileUpdateManyMutationInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mode?: Nullable<EnumBusinnessModeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessProfileUpdateManyWithWhereWithoutCoverInput {
    data: BusinessProfileUncheckedUpdateManyWithoutBusinessProfilesInput;
    where: BusinessProfileScalarWhereInput;
}

export class BusinessProfileUpdateManyWithoutCoverInput {
    connect?: Nullable<BusinessProfileWhereUniqueInput[]>;
    connectOrCreate?: Nullable<BusinessProfileCreateOrConnectWithoutCoverInput[]>;
    create?: Nullable<BusinessProfileCreateWithoutCoverInput[]>;
    createMany?: Nullable<BusinessProfileCreateManyCoverInputEnvelope>;
    delete?: Nullable<BusinessProfileWhereUniqueInput[]>;
    deleteMany?: Nullable<BusinessProfileScalarWhereInput[]>;
    disconnect?: Nullable<BusinessProfileWhereUniqueInput[]>;
    set?: Nullable<BusinessProfileWhereUniqueInput[]>;
    update?: Nullable<BusinessProfileUpdateWithWhereUniqueWithoutCoverInput[]>;
    updateMany?: Nullable<BusinessProfileUpdateManyWithWhereWithoutCoverInput[]>;
    upsert?: Nullable<BusinessProfileUpsertWithWhereUniqueWithoutCoverInput[]>;
}

export class BusinessProfileUpdateOneWithoutOwnerInput {
    connect?: Nullable<BusinessProfileWhereUniqueInput>;
    connectOrCreate?: Nullable<BusinessProfileCreateOrConnectWithoutOwnerInput>;
    create?: Nullable<BusinessProfileUncheckedCreateWithoutOwnerInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<BusinessProfileUncheckedUpdateWithoutOwnerInput>;
    upsert?: Nullable<BusinessProfileUpsertWithoutOwnerInput>;
}

export class BusinessProfileUpdateWithWhereUniqueWithoutCoverInput {
    data: BusinessProfileUncheckedUpdateWithoutCoverInput;
    where: BusinessProfileWhereUniqueInput;
}

export class BusinessProfileUpdateWithoutCoverInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mode?: Nullable<EnumBusinnessModeFieldUpdateOperationsInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutBusinessProfileInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessProfileUpdateWithoutOwnerInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    cover?: Nullable<AttachmentUpdateOneRequiredWithoutBusinessProfilesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mode?: Nullable<EnumBusinnessModeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessProfileUpsertWithWhereUniqueWithoutCoverInput {
    create: BusinessProfileUncheckedCreateWithoutCoverInput;
    update: BusinessProfileUncheckedUpdateWithoutCoverInput;
    where: BusinessProfileWhereUniqueInput;
}

export class BusinessProfileUpsertWithoutOwnerInput {
    create: BusinessProfileUncheckedCreateWithoutOwnerInput;
    update: BusinessProfileUncheckedUpdateWithoutOwnerInput;
}

export class BusinessProfileWhereInput {
    AND?: Nullable<BusinessProfileWhereInput[]>;
    NOT?: Nullable<BusinessProfileWhereInput[]>;
    OR?: Nullable<BusinessProfileWhereInput[]>;
    about?: Nullable<StringFilter>;
    cover?: Nullable<AttachmentWhereInput>;
    coverId?: Nullable<StringFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    mode?: Nullable<EnumBusinnessModeFilter>;
    owner?: Nullable<UserWhereInput>;
    ownerId?: Nullable<StringFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class BusinessProfileWhereUniqueInput {
    id?: Nullable<string>;
}

export class CasbinRuleCreateInput {
    createdAt?: Nullable<DateTime>;
    ptype: string;
    updatedAt?: Nullable<DateTime>;
    v0?: Nullable<string>;
    v1?: Nullable<string>;
    v2?: Nullable<string>;
    v3?: Nullable<string>;
    v4?: Nullable<string>;
    v5?: Nullable<string>;
}

export class CasbinRuleCreateManyInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<number>;
    ptype: string;
    updatedAt?: Nullable<DateTime>;
    v0?: Nullable<string>;
    v1?: Nullable<string>;
    v2?: Nullable<string>;
    v3?: Nullable<string>;
    v4?: Nullable<string>;
    v5?: Nullable<string>;
}

export class CasbinRuleOrderByInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    ptype?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    v0?: Nullable<SortOrder>;
    v1?: Nullable<SortOrder>;
    v2?: Nullable<SortOrder>;
    v3?: Nullable<SortOrder>;
    v4?: Nullable<SortOrder>;
    v5?: Nullable<SortOrder>;
}

export class CasbinRuleScalarWhereWithAggregatesInput {
    AND?: Nullable<CasbinRuleScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<CasbinRuleScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<CasbinRuleScalarWhereWithAggregatesInput[]>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    id?: Nullable<IntWithAggregatesFilter>;
    ptype?: Nullable<StringWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
    v0?: Nullable<StringNullableWithAggregatesFilter>;
    v1?: Nullable<StringNullableWithAggregatesFilter>;
    v2?: Nullable<StringNullableWithAggregatesFilter>;
    v3?: Nullable<StringNullableWithAggregatesFilter>;
    v4?: Nullable<StringNullableWithAggregatesFilter>;
    v5?: Nullable<StringNullableWithAggregatesFilter>;
}

export class CasbinRuleUncheckedCreateInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<number>;
    ptype: string;
    updatedAt?: Nullable<DateTime>;
    v0?: Nullable<string>;
    v1?: Nullable<string>;
    v2?: Nullable<string>;
    v3?: Nullable<string>;
    v4?: Nullable<string>;
    v5?: Nullable<string>;
}

export class CasbinRuleUncheckedUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<IntFieldUpdateOperationsInput>;
    ptype?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    v0?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v1?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v2?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v3?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v4?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v5?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class CasbinRuleUncheckedUpdateManyInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<IntFieldUpdateOperationsInput>;
    ptype?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    v0?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v1?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v2?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v3?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v4?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v5?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class CasbinRuleUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    ptype?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    v0?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v1?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v2?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v3?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v4?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v5?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class CasbinRuleUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    ptype?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    v0?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v1?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v2?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v3?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v4?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v5?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class CasbinRuleWhereInput {
    AND?: Nullable<CasbinRuleWhereInput[]>;
    NOT?: Nullable<CasbinRuleWhereInput[]>;
    OR?: Nullable<CasbinRuleWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<IntFilter>;
    ptype?: Nullable<StringFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
    v0?: Nullable<StringNullableFilter>;
    v1?: Nullable<StringNullableFilter>;
    v2?: Nullable<StringNullableFilter>;
    v3?: Nullable<StringNullableFilter>;
    v4?: Nullable<StringNullableFilter>;
    v5?: Nullable<StringNullableFilter>;
}

export class CasbinRuleWhereUniqueInput {
    id?: Nullable<number>;
}

export class CommentCreateInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutCommentInput>;
    author: UserCreateNestedOneWithoutCommentsInput;
    comment?: Nullable<CommentCreateNestedOneWithoutCommentsInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    review?: Nullable<ReviewCreateNestedOneWithoutCommentsInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentCreateManyAuthorInput {
    commentId?: Nullable<string>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reviewId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentCreateManyAuthorInputEnvelope {
    data: CommentCreateManyAuthorInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class CommentCreateManyCommentInput {
    authorId: string;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reviewId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentCreateManyCommentInputEnvelope {
    data: CommentCreateManyCommentInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class CommentCreateManyInput {
    authorId: string;
    commentId?: Nullable<string>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reviewId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentCreateManyReviewInput {
    authorId: string;
    commentId?: Nullable<string>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentCreateManyReviewInputEnvelope {
    data: CommentCreateManyReviewInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class CommentCreateNestedManyWithoutAuthorInput {
    connect?: Nullable<CommentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<CommentCreateWithoutAuthorInput[]>;
    createMany?: Nullable<CommentCreateManyAuthorInputEnvelope>;
}

export class CommentCreateNestedManyWithoutCommentInput {
    connect?: Nullable<CommentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutCommentInput[]>;
    create?: Nullable<CommentCreateWithoutCommentInput[]>;
    createMany?: Nullable<CommentCreateManyCommentInputEnvelope>;
}

export class CommentCreateNestedManyWithoutReviewInput {
    connect?: Nullable<CommentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutReviewInput[]>;
    create?: Nullable<CommentCreateWithoutReviewInput[]>;
    createMany?: Nullable<CommentCreateManyReviewInputEnvelope>;
}

export class CommentCreateNestedOneWithoutAttachmentsInput {
    connect?: Nullable<CommentWhereUniqueInput>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutAttachmentsInput>;
    create?: Nullable<CommentUncheckedCreateWithoutAttachmentsInput>;
}

export class CommentCreateNestedOneWithoutCommentsInput {
    connect?: Nullable<CommentWhereUniqueInput>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutCommentsInput>;
    create?: Nullable<CommentUncheckedCreateWithoutCommentsInput>;
}

export class CommentCreateOrConnectWithoutAttachmentsInput {
    create: CommentUncheckedCreateWithoutAttachmentsInput;
    where: CommentWhereUniqueInput;
}

export class CommentCreateOrConnectWithoutAuthorInput {
    create: CommentUncheckedCreateWithoutAuthorInput;
    where: CommentWhereUniqueInput;
}

export class CommentCreateOrConnectWithoutCommentInput {
    create: CommentUncheckedCreateWithoutCommentInput;
    where: CommentWhereUniqueInput;
}

export class CommentCreateOrConnectWithoutCommentsInput {
    create: CommentUncheckedCreateWithoutCommentsInput;
    where: CommentWhereUniqueInput;
}

export class CommentCreateOrConnectWithoutReviewInput {
    create: CommentUncheckedCreateWithoutReviewInput;
    where: CommentWhereUniqueInput;
}

export class CommentCreateWithoutAttachmentsInput {
    author: UserCreateNestedOneWithoutCommentsInput;
    comment?: Nullable<CommentCreateNestedOneWithoutCommentsInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    review?: Nullable<ReviewCreateNestedOneWithoutCommentsInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentCreateWithoutAuthorInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutCommentInput>;
    comment?: Nullable<CommentCreateNestedOneWithoutCommentsInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    review?: Nullable<ReviewCreateNestedOneWithoutCommentsInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentCreateWithoutCommentInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutCommentInput>;
    author: UserCreateNestedOneWithoutCommentsInput;
    comments?: Nullable<CommentCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    review?: Nullable<ReviewCreateNestedOneWithoutCommentsInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentCreateWithoutCommentsInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutCommentInput>;
    author: UserCreateNestedOneWithoutCommentsInput;
    comment?: Nullable<CommentCreateNestedOneWithoutCommentsInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    review?: Nullable<ReviewCreateNestedOneWithoutCommentsInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentCreateWithoutReviewInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutCommentInput>;
    author: UserCreateNestedOneWithoutCommentsInput;
    comment?: Nullable<CommentCreateNestedOneWithoutCommentsInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentListRelationFilter {
    every?: Nullable<CommentWhereInput>;
    none?: Nullable<CommentWhereInput>;
    some?: Nullable<CommentWhereInput>;
}

export class CommentOrderByInput {
    authorId?: Nullable<SortOrder>;
    commentId?: Nullable<SortOrder>;
    commentsEnabled?: Nullable<SortOrder>;
    content?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    reviewId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class CommentRelationFilter {
    is?: Nullable<CommentWhereInput>;
    isNot?: Nullable<CommentWhereInput>;
}

export class CommentScalarWhereInput {
    AND?: Nullable<CommentScalarWhereInput[]>;
    NOT?: Nullable<CommentScalarWhereInput[]>;
    OR?: Nullable<CommentScalarWhereInput[]>;
    authorId?: Nullable<StringFilter>;
    commentId?: Nullable<StringNullableFilter>;
    commentsEnabled?: Nullable<BoolFilter>;
    content?: Nullable<StringFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    reviewId?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class CommentScalarWhereWithAggregatesInput {
    AND?: Nullable<CommentScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<CommentScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<CommentScalarWhereWithAggregatesInput[]>;
    authorId?: Nullable<StringWithAggregatesFilter>;
    commentId?: Nullable<StringNullableWithAggregatesFilter>;
    commentsEnabled?: Nullable<BoolWithAggregatesFilter>;
    content?: Nullable<StringWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    reviewId?: Nullable<StringWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class CommentUncheckedCreateInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutCommentInput>;
    authorId: string;
    commentId?: Nullable<string>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reviewId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentUncheckedCreateNestedManyWithoutAuthorInput {
    connect?: Nullable<CommentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<CommentCreateWithoutAuthorInput[]>;
    createMany?: Nullable<CommentCreateManyAuthorInputEnvelope>;
}

export class CommentUncheckedCreateNestedManyWithoutCommentInput {
    connect?: Nullable<CommentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutCommentInput[]>;
    create?: Nullable<CommentCreateWithoutCommentInput[]>;
    createMany?: Nullable<CommentCreateManyCommentInputEnvelope>;
}

export class CommentUncheckedCreateNestedManyWithoutReviewInput {
    connect?: Nullable<CommentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutReviewInput[]>;
    create?: Nullable<CommentCreateWithoutReviewInput[]>;
    createMany?: Nullable<CommentCreateManyReviewInputEnvelope>;
}

export class CommentUncheckedCreateWithoutAttachmentsInput {
    authorId: string;
    commentId?: Nullable<string>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reviewId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentUncheckedCreateWithoutAuthorInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutCommentInput>;
    commentId?: Nullable<string>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reviewId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentUncheckedCreateWithoutCommentInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutCommentInput>;
    authorId: string;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reviewId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentUncheckedCreateWithoutCommentsInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutCommentInput>;
    authorId: string;
    commentId?: Nullable<string>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reviewId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentUncheckedCreateWithoutReviewInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutCommentInput>;
    authorId: string;
    commentId?: Nullable<string>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentUncheckedUpdateInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutCommentInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    reviewId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUncheckedUpdateManyInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    reviewId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUncheckedUpdateManyWithoutAuthorInput {
    connect?: Nullable<CommentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<CommentCreateWithoutAuthorInput[]>;
    createMany?: Nullable<CommentCreateManyAuthorInputEnvelope>;
    delete?: Nullable<CommentWhereUniqueInput[]>;
    deleteMany?: Nullable<CommentScalarWhereInput[]>;
    disconnect?: Nullable<CommentWhereUniqueInput[]>;
    set?: Nullable<CommentWhereUniqueInput[]>;
    update?: Nullable<CommentUpdateWithWhereUniqueWithoutAuthorInput[]>;
    updateMany?: Nullable<CommentUpdateManyWithWhereWithoutAuthorInput[]>;
    upsert?: Nullable<CommentUpsertWithWhereUniqueWithoutAuthorInput[]>;
}

export class CommentUncheckedUpdateManyWithoutCommentInput {
    connect?: Nullable<CommentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutCommentInput[]>;
    create?: Nullable<CommentCreateWithoutCommentInput[]>;
    createMany?: Nullable<CommentCreateManyCommentInputEnvelope>;
    delete?: Nullable<CommentWhereUniqueInput[]>;
    deleteMany?: Nullable<CommentScalarWhereInput[]>;
    disconnect?: Nullable<CommentWhereUniqueInput[]>;
    set?: Nullable<CommentWhereUniqueInput[]>;
    update?: Nullable<CommentUpdateWithWhereUniqueWithoutCommentInput[]>;
    updateMany?: Nullable<CommentUpdateManyWithWhereWithoutCommentInput[]>;
    upsert?: Nullable<CommentUpsertWithWhereUniqueWithoutCommentInput[]>;
}

export class CommentUncheckedUpdateManyWithoutCommentsInput {
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    reviewId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUncheckedUpdateManyWithoutReviewInput {
    connect?: Nullable<CommentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutReviewInput[]>;
    create?: Nullable<CommentCreateWithoutReviewInput[]>;
    createMany?: Nullable<CommentCreateManyReviewInputEnvelope>;
    delete?: Nullable<CommentWhereUniqueInput[]>;
    deleteMany?: Nullable<CommentScalarWhereInput[]>;
    disconnect?: Nullable<CommentWhereUniqueInput[]>;
    set?: Nullable<CommentWhereUniqueInput[]>;
    update?: Nullable<CommentUpdateWithWhereUniqueWithoutReviewInput[]>;
    updateMany?: Nullable<CommentUpdateManyWithWhereWithoutReviewInput[]>;
    upsert?: Nullable<CommentUpsertWithWhereUniqueWithoutReviewInput[]>;
}

export class CommentUncheckedUpdateWithoutAttachmentsInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    reviewId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUncheckedUpdateWithoutAuthorInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutCommentInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    reviewId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUncheckedUpdateWithoutCommentInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutCommentInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    reviewId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUncheckedUpdateWithoutCommentsInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutCommentInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    reviewId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUncheckedUpdateWithoutReviewInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutCommentInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUpdateInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutCommentInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutCommentsInput>;
    comment?: Nullable<CommentUpdateOneWithoutCommentsInput>;
    comments?: Nullable<CommentUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    review?: Nullable<ReviewUpdateOneWithoutCommentsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUpdateManyMutationInput {
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUpdateManyWithWhereWithoutAuthorInput {
    data: CommentUncheckedUpdateManyWithoutCommentsInput;
    where: CommentScalarWhereInput;
}

export class CommentUpdateManyWithWhereWithoutCommentInput {
    data: CommentUncheckedUpdateManyWithoutCommentsInput;
    where: CommentScalarWhereInput;
}

export class CommentUpdateManyWithWhereWithoutReviewInput {
    data: CommentUncheckedUpdateManyWithoutCommentsInput;
    where: CommentScalarWhereInput;
}

export class CommentUpdateManyWithoutAuthorInput {
    connect?: Nullable<CommentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<CommentCreateWithoutAuthorInput[]>;
    createMany?: Nullable<CommentCreateManyAuthorInputEnvelope>;
    delete?: Nullable<CommentWhereUniqueInput[]>;
    deleteMany?: Nullable<CommentScalarWhereInput[]>;
    disconnect?: Nullable<CommentWhereUniqueInput[]>;
    set?: Nullable<CommentWhereUniqueInput[]>;
    update?: Nullable<CommentUpdateWithWhereUniqueWithoutAuthorInput[]>;
    updateMany?: Nullable<CommentUpdateManyWithWhereWithoutAuthorInput[]>;
    upsert?: Nullable<CommentUpsertWithWhereUniqueWithoutAuthorInput[]>;
}

export class CommentUpdateManyWithoutCommentInput {
    connect?: Nullable<CommentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutCommentInput[]>;
    create?: Nullable<CommentCreateWithoutCommentInput[]>;
    createMany?: Nullable<CommentCreateManyCommentInputEnvelope>;
    delete?: Nullable<CommentWhereUniqueInput[]>;
    deleteMany?: Nullable<CommentScalarWhereInput[]>;
    disconnect?: Nullable<CommentWhereUniqueInput[]>;
    set?: Nullable<CommentWhereUniqueInput[]>;
    update?: Nullable<CommentUpdateWithWhereUniqueWithoutCommentInput[]>;
    updateMany?: Nullable<CommentUpdateManyWithWhereWithoutCommentInput[]>;
    upsert?: Nullable<CommentUpsertWithWhereUniqueWithoutCommentInput[]>;
}

export class CommentUpdateManyWithoutReviewInput {
    connect?: Nullable<CommentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutReviewInput[]>;
    create?: Nullable<CommentCreateWithoutReviewInput[]>;
    createMany?: Nullable<CommentCreateManyReviewInputEnvelope>;
    delete?: Nullable<CommentWhereUniqueInput[]>;
    deleteMany?: Nullable<CommentScalarWhereInput[]>;
    disconnect?: Nullable<CommentWhereUniqueInput[]>;
    set?: Nullable<CommentWhereUniqueInput[]>;
    update?: Nullable<CommentUpdateWithWhereUniqueWithoutReviewInput[]>;
    updateMany?: Nullable<CommentUpdateManyWithWhereWithoutReviewInput[]>;
    upsert?: Nullable<CommentUpsertWithWhereUniqueWithoutReviewInput[]>;
}

export class CommentUpdateOneWithoutAttachmentsInput {
    connect?: Nullable<CommentWhereUniqueInput>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutAttachmentsInput>;
    create?: Nullable<CommentUncheckedCreateWithoutAttachmentsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<CommentUncheckedUpdateWithoutAttachmentsInput>;
    upsert?: Nullable<CommentUpsertWithoutAttachmentsInput>;
}

export class CommentUpdateOneWithoutCommentsInput {
    connect?: Nullable<CommentWhereUniqueInput>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutCommentsInput>;
    create?: Nullable<CommentUncheckedCreateWithoutCommentsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<CommentUncheckedUpdateWithoutCommentsInput>;
    upsert?: Nullable<CommentUpsertWithoutCommentsInput>;
}

export class CommentUpdateWithWhereUniqueWithoutAuthorInput {
    data: CommentUncheckedUpdateWithoutAuthorInput;
    where: CommentWhereUniqueInput;
}

export class CommentUpdateWithWhereUniqueWithoutCommentInput {
    data: CommentUncheckedUpdateWithoutCommentInput;
    where: CommentWhereUniqueInput;
}

export class CommentUpdateWithWhereUniqueWithoutReviewInput {
    data: CommentUncheckedUpdateWithoutReviewInput;
    where: CommentWhereUniqueInput;
}

export class CommentUpdateWithoutAttachmentsInput {
    author?: Nullable<UserUpdateOneRequiredWithoutCommentsInput>;
    comment?: Nullable<CommentUpdateOneWithoutCommentsInput>;
    comments?: Nullable<CommentUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    review?: Nullable<ReviewUpdateOneWithoutCommentsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUpdateWithoutAuthorInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutCommentInput>;
    comment?: Nullable<CommentUpdateOneWithoutCommentsInput>;
    comments?: Nullable<CommentUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    review?: Nullable<ReviewUpdateOneWithoutCommentsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUpdateWithoutCommentInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutCommentInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutCommentsInput>;
    comments?: Nullable<CommentUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    review?: Nullable<ReviewUpdateOneWithoutCommentsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUpdateWithoutCommentsInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutCommentInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutCommentsInput>;
    comment?: Nullable<CommentUpdateOneWithoutCommentsInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    review?: Nullable<ReviewUpdateOneWithoutCommentsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUpdateWithoutReviewInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutCommentInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutCommentsInput>;
    comment?: Nullable<CommentUpdateOneWithoutCommentsInput>;
    comments?: Nullable<CommentUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUpsertWithWhereUniqueWithoutAuthorInput {
    create: CommentUncheckedCreateWithoutAuthorInput;
    update: CommentUncheckedUpdateWithoutAuthorInput;
    where: CommentWhereUniqueInput;
}

export class CommentUpsertWithWhereUniqueWithoutCommentInput {
    create: CommentUncheckedCreateWithoutCommentInput;
    update: CommentUncheckedUpdateWithoutCommentInput;
    where: CommentWhereUniqueInput;
}

export class CommentUpsertWithWhereUniqueWithoutReviewInput {
    create: CommentUncheckedCreateWithoutReviewInput;
    update: CommentUncheckedUpdateWithoutReviewInput;
    where: CommentWhereUniqueInput;
}

export class CommentUpsertWithoutAttachmentsInput {
    create: CommentUncheckedCreateWithoutAttachmentsInput;
    update: CommentUncheckedUpdateWithoutAttachmentsInput;
}

export class CommentUpsertWithoutCommentsInput {
    create: CommentUncheckedCreateWithoutCommentsInput;
    update: CommentUncheckedUpdateWithoutCommentsInput;
}

export class CommentWhereInput {
    AND?: Nullable<CommentWhereInput[]>;
    NOT?: Nullable<CommentWhereInput[]>;
    OR?: Nullable<CommentWhereInput[]>;
    attachments?: Nullable<AttachmentListRelationFilter>;
    author?: Nullable<UserWhereInput>;
    authorId?: Nullable<StringFilter>;
    comment?: Nullable<CommentWhereInput>;
    commentId?: Nullable<StringNullableFilter>;
    comments?: Nullable<CommentListRelationFilter>;
    commentsEnabled?: Nullable<BoolFilter>;
    content?: Nullable<StringFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    review?: Nullable<ReviewWhereInput>;
    reviewId?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class CommentWhereUniqueInput {
    id?: Nullable<string>;
}

export class DateTimeFieldUpdateOperationsInput {
    set?: Nullable<DateTime>;
}

export class DateTimeFilter {
    equals?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    not?: Nullable<NestedDateTimeFilter>;
    notIn?: Nullable<DateTime[]>;
}

export class DateTimeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedDateTimeFilter>;
    _min?: Nullable<NestedDateTimeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    max?: Nullable<NestedDateTimeFilter>;
    min?: Nullable<NestedDateTimeFilter>;
    not?: Nullable<NestedDateTimeWithAggregatesFilter>;
    notIn?: Nullable<DateTime[]>;
}

export class DeviceCreateInput {
    fcm_id?: Nullable<string>;
    id: string;
    type?: Nullable<string>;
    user?: Nullable<UserCreateNestedOneWithoutDeviceInput>;
}

export class DeviceCreateManyInput {
    fcm_id?: Nullable<string>;
    id: string;
    type?: Nullable<string>;
    userId?: Nullable<string>;
}

export class DeviceCreateNestedOneWithoutUserInput {
    connect?: Nullable<DeviceWhereUniqueInput>;
    connectOrCreate?: Nullable<DeviceCreateOrConnectWithoutUserInput>;
    create?: Nullable<DeviceUncheckedCreateWithoutUserInput>;
}

export class DeviceCreateOrConnectWithoutUserInput {
    create: DeviceUncheckedCreateWithoutUserInput;
    where: DeviceWhereUniqueInput;
}

export class DeviceCreateWithoutUserInput {
    fcm_id?: Nullable<string>;
    id: string;
    type?: Nullable<string>;
}

export class DeviceOrderByInput {
    fcm_id?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    type?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
}

export class DeviceRelationFilter {
    is?: Nullable<DeviceWhereInput>;
    isNot?: Nullable<DeviceWhereInput>;
}

export class DeviceScalarWhereWithAggregatesInput {
    AND?: Nullable<DeviceScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<DeviceScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<DeviceScalarWhereWithAggregatesInput[]>;
    fcm_id?: Nullable<StringNullableWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    type?: Nullable<StringWithAggregatesFilter>;
    userId?: Nullable<StringNullableWithAggregatesFilter>;
}

export class DeviceUncheckedCreateInput {
    fcm_id?: Nullable<string>;
    id: string;
    type?: Nullable<string>;
    userId?: Nullable<string>;
}

export class DeviceUncheckedCreateNestedOneWithoutUserInput {
    connect?: Nullable<DeviceWhereUniqueInput>;
    connectOrCreate?: Nullable<DeviceCreateOrConnectWithoutUserInput>;
    create?: Nullable<DeviceUncheckedCreateWithoutUserInput>;
}

export class DeviceUncheckedCreateWithoutUserInput {
    fcm_id?: Nullable<string>;
    id: string;
    type?: Nullable<string>;
}

export class DeviceUncheckedUpdateInput {
    fcm_id?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    type?: Nullable<StringFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class DeviceUncheckedUpdateManyInput {
    fcm_id?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    type?: Nullable<StringFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class DeviceUncheckedUpdateOneWithoutUserInput {
    connect?: Nullable<DeviceWhereUniqueInput>;
    connectOrCreate?: Nullable<DeviceCreateOrConnectWithoutUserInput>;
    create?: Nullable<DeviceUncheckedCreateWithoutUserInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<DeviceUncheckedUpdateWithoutUserInput>;
    upsert?: Nullable<DeviceUpsertWithoutUserInput>;
}

export class DeviceUncheckedUpdateWithoutUserInput {
    fcm_id?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    type?: Nullable<StringFieldUpdateOperationsInput>;
}

export class DeviceUpdateInput {
    fcm_id?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    type?: Nullable<StringFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateOneWithoutDeviceInput>;
}

export class DeviceUpdateManyMutationInput {
    fcm_id?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    type?: Nullable<StringFieldUpdateOperationsInput>;
}

export class DeviceUpdateOneWithoutUserInput {
    connect?: Nullable<DeviceWhereUniqueInput>;
    connectOrCreate?: Nullable<DeviceCreateOrConnectWithoutUserInput>;
    create?: Nullable<DeviceUncheckedCreateWithoutUserInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<DeviceUncheckedUpdateWithoutUserInput>;
    upsert?: Nullable<DeviceUpsertWithoutUserInput>;
}

export class DeviceUpdateWithoutUserInput {
    fcm_id?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    type?: Nullable<StringFieldUpdateOperationsInput>;
}

export class DeviceUpsertWithoutUserInput {
    create: DeviceUncheckedCreateWithoutUserInput;
    update: DeviceUncheckedUpdateWithoutUserInput;
}

export class DeviceWhereInput {
    AND?: Nullable<DeviceWhereInput[]>;
    NOT?: Nullable<DeviceWhereInput[]>;
    OR?: Nullable<DeviceWhereInput[]>;
    fcm_id?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    type?: Nullable<StringFilter>;
    user?: Nullable<UserWhereInput>;
    userId?: Nullable<StringNullableFilter>;
}

export class DeviceWhereUniqueInput {
    id?: Nullable<string>;
}

export class EnumAttachmentTypeFieldUpdateOperationsInput {
    set?: Nullable<AttachmentType>;
}

export class EnumAttachmentTypeFilter {
    equals?: Nullable<AttachmentType>;
    in?: Nullable<AttachmentType[]>;
    not?: Nullable<NestedEnumAttachmentTypeFilter>;
    notIn?: Nullable<AttachmentType[]>;
}

export class EnumAttachmentTypeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumAttachmentTypeFilter>;
    _min?: Nullable<NestedEnumAttachmentTypeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<AttachmentType>;
    in?: Nullable<AttachmentType[]>;
    max?: Nullable<NestedEnumAttachmentTypeFilter>;
    min?: Nullable<NestedEnumAttachmentTypeFilter>;
    not?: Nullable<NestedEnumAttachmentTypeWithAggregatesFilter>;
    notIn?: Nullable<AttachmentType[]>;
}

export class EnumBusinnessModeFieldUpdateOperationsInput {
    set?: Nullable<BusinnessMode>;
}

export class EnumBusinnessModeFilter {
    equals?: Nullable<BusinnessMode>;
    in?: Nullable<BusinnessMode[]>;
    not?: Nullable<NestedEnumBusinnessModeFilter>;
    notIn?: Nullable<BusinnessMode[]>;
}

export class EnumBusinnessModeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumBusinnessModeFilter>;
    _min?: Nullable<NestedEnumBusinnessModeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<BusinnessMode>;
    in?: Nullable<BusinnessMode[]>;
    max?: Nullable<NestedEnumBusinnessModeFilter>;
    min?: Nullable<NestedEnumBusinnessModeFilter>;
    not?: Nullable<NestedEnumBusinnessModeWithAggregatesFilter>;
    notIn?: Nullable<BusinnessMode[]>;
}

export class EnumRoleFieldUpdateOperationsInput {
    set?: Nullable<Role>;
}

export class EnumRoleFilter {
    equals?: Nullable<Role>;
    in?: Nullable<Role[]>;
    not?: Nullable<NestedEnumRoleFilter>;
    notIn?: Nullable<Role[]>;
}

export class EnumRoleWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumRoleFilter>;
    _min?: Nullable<NestedEnumRoleFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<Role>;
    in?: Nullable<Role[]>;
    max?: Nullable<NestedEnumRoleFilter>;
    min?: Nullable<NestedEnumRoleFilter>;
    not?: Nullable<NestedEnumRoleWithAggregatesFilter>;
    notIn?: Nullable<Role[]>;
}

export class EnumSelcomPaymentStatusFieldUpdateOperationsInput {
    set?: Nullable<SelcomPaymentStatus>;
}

export class EnumSelcomPaymentStatusFilter {
    equals?: Nullable<SelcomPaymentStatus>;
    in?: Nullable<SelcomPaymentStatus[]>;
    not?: Nullable<NestedEnumSelcomPaymentStatusFilter>;
    notIn?: Nullable<SelcomPaymentStatus[]>;
}

export class EnumSelcomPaymentStatusWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumSelcomPaymentStatusFilter>;
    _min?: Nullable<NestedEnumSelcomPaymentStatusFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<SelcomPaymentStatus>;
    in?: Nullable<SelcomPaymentStatus[]>;
    max?: Nullable<NestedEnumSelcomPaymentStatusFilter>;
    min?: Nullable<NestedEnumSelcomPaymentStatusFilter>;
    not?: Nullable<NestedEnumSelcomPaymentStatusWithAggregatesFilter>;
    notIn?: Nullable<SelcomPaymentStatus[]>;
}

export class EnumSelcomUtilityCodeFieldUpdateOperationsInput {
    set?: Nullable<SelcomUtilityCode>;
}

export class EnumSelcomUtilityCodeFilter {
    equals?: Nullable<SelcomUtilityCode>;
    in?: Nullable<SelcomUtilityCode[]>;
    not?: Nullable<NestedEnumSelcomUtilityCodeFilter>;
    notIn?: Nullable<SelcomUtilityCode[]>;
}

export class EnumSelcomUtilityCodeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumSelcomUtilityCodeFilter>;
    _min?: Nullable<NestedEnumSelcomUtilityCodeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<SelcomUtilityCode>;
    in?: Nullable<SelcomUtilityCode[]>;
    max?: Nullable<NestedEnumSelcomUtilityCodeFilter>;
    min?: Nullable<NestedEnumSelcomUtilityCodeFilter>;
    not?: Nullable<NestedEnumSelcomUtilityCodeWithAggregatesFilter>;
    notIn?: Nullable<SelcomUtilityCode[]>;
}

export class EnumStateFieldUpdateOperationsInput {
    set?: Nullable<State>;
}

export class EnumStateFilter {
    equals?: Nullable<State>;
    in?: Nullable<State[]>;
    not?: Nullable<NestedEnumStateFilter>;
    notIn?: Nullable<State[]>;
}

export class EnumStateWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumStateFilter>;
    _min?: Nullable<NestedEnumStateFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<State>;
    in?: Nullable<State[]>;
    max?: Nullable<NestedEnumStateFilter>;
    min?: Nullable<NestedEnumStateFilter>;
    not?: Nullable<NestedEnumStateWithAggregatesFilter>;
    notIn?: Nullable<State[]>;
}

export class EnumTransactionTypeFieldUpdateOperationsInput {
    set?: Nullable<TransactionType>;
}

export class EnumTransactionTypeFilter {
    equals?: Nullable<TransactionType>;
    in?: Nullable<TransactionType[]>;
    not?: Nullable<NestedEnumTransactionTypeFilter>;
    notIn?: Nullable<TransactionType[]>;
}

export class EnumTransactionTypeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumTransactionTypeFilter>;
    _min?: Nullable<NestedEnumTransactionTypeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<TransactionType>;
    in?: Nullable<TransactionType[]>;
    max?: Nullable<NestedEnumTransactionTypeFilter>;
    min?: Nullable<NestedEnumTransactionTypeFilter>;
    not?: Nullable<NestedEnumTransactionTypeWithAggregatesFilter>;
    notIn?: Nullable<TransactionType[]>;
}

export class FloatFieldUpdateOperationsInput {
    decrement?: Nullable<number>;
    divide?: Nullable<number>;
    increment?: Nullable<number>;
    multiply?: Nullable<number>;
    set?: Nullable<number>;
}

export class FloatFilter {
    equals?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    in?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    not?: Nullable<NestedFloatFilter>;
    notIn?: Nullable<number[]>;
}

export class FloatWithAggregatesFilter {
    _avg?: Nullable<NestedFloatFilter>;
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedFloatFilter>;
    _min?: Nullable<NestedFloatFilter>;
    _sum?: Nullable<NestedFloatFilter>;
    avg?: Nullable<NestedFloatFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    in?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    max?: Nullable<NestedFloatFilter>;
    min?: Nullable<NestedFloatFilter>;
    not?: Nullable<NestedFloatWithAggregatesFilter>;
    notIn?: Nullable<number[]>;
    sum?: Nullable<NestedFloatFilter>;
}

export class HelpCreateInput {
    audience?: Nullable<Role>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    steps?: Nullable<HelpStepCreateNestedManyWithoutHelpInput>;
    topic: string;
    updatedAt?: Nullable<DateTime>;
}

export class HelpCreateManyInput {
    audience?: Nullable<Role>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    topic: string;
    updatedAt?: Nullable<DateTime>;
}

export class HelpCreateNestedOneWithoutStepsInput {
    connect?: Nullable<HelpWhereUniqueInput>;
    connectOrCreate?: Nullable<HelpCreateOrConnectWithoutStepsInput>;
    create?: Nullable<HelpUncheckedCreateWithoutStepsInput>;
}

export class HelpCreateOrConnectWithoutStepsInput {
    create: HelpUncheckedCreateWithoutStepsInput;
    where: HelpWhereUniqueInput;
}

export class HelpCreateWithoutStepsInput {
    audience?: Nullable<Role>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    topic: string;
    updatedAt?: Nullable<DateTime>;
}

export class HelpOrderByInput {
    audience?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    topic?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class HelpRelationFilter {
    is?: Nullable<HelpWhereInput>;
    isNot?: Nullable<HelpWhereInput>;
}

export class HelpScalarWhereWithAggregatesInput {
    AND?: Nullable<HelpScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<HelpScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<HelpScalarWhereWithAggregatesInput[]>;
    audience?: Nullable<EnumRoleWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    description?: Nullable<StringNullableWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    topic?: Nullable<StringWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class HelpStepCreateInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutHelpStepInput>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    help: HelpCreateNestedOneWithoutStepsInput;
    id?: Nullable<string>;
    state?: Nullable<State>;
    stepNumber: number;
    title: string;
    updatedAt?: Nullable<DateTime>;
}

export class HelpStepCreateManyHelpInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    stepNumber: number;
    title: string;
    updatedAt?: Nullable<DateTime>;
}

export class HelpStepCreateManyHelpInputEnvelope {
    data: HelpStepCreateManyHelpInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class HelpStepCreateManyInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    helpId: string;
    id?: Nullable<string>;
    state?: Nullable<State>;
    stepNumber: number;
    title: string;
    updatedAt?: Nullable<DateTime>;
}

export class HelpStepCreateNestedManyWithoutHelpInput {
    connect?: Nullable<HelpStepWhereUniqueInput[]>;
    connectOrCreate?: Nullable<HelpStepCreateOrConnectWithoutHelpInput[]>;
    create?: Nullable<HelpStepCreateWithoutHelpInput[]>;
    createMany?: Nullable<HelpStepCreateManyHelpInputEnvelope>;
}

export class HelpStepCreateNestedOneWithoutAttachmentsInput {
    connect?: Nullable<HelpStepWhereUniqueInput>;
    connectOrCreate?: Nullable<HelpStepCreateOrConnectWithoutAttachmentsInput>;
    create?: Nullable<HelpStepUncheckedCreateWithoutAttachmentsInput>;
}

export class HelpStepCreateOrConnectWithoutAttachmentsInput {
    create: HelpStepUncheckedCreateWithoutAttachmentsInput;
    where: HelpStepWhereUniqueInput;
}

export class HelpStepCreateOrConnectWithoutHelpInput {
    create: HelpStepUncheckedCreateWithoutHelpInput;
    where: HelpStepWhereUniqueInput;
}

export class HelpStepCreateWithoutAttachmentsInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    help: HelpCreateNestedOneWithoutStepsInput;
    id?: Nullable<string>;
    state?: Nullable<State>;
    stepNumber: number;
    title: string;
    updatedAt?: Nullable<DateTime>;
}

export class HelpStepCreateWithoutHelpInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutHelpStepInput>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    stepNumber: number;
    title: string;
    updatedAt?: Nullable<DateTime>;
}

export class HelpStepListRelationFilter {
    every?: Nullable<HelpStepWhereInput>;
    none?: Nullable<HelpStepWhereInput>;
    some?: Nullable<HelpStepWhereInput>;
}

export class HelpStepOrderByInput {
    createdAt?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    helpId?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    stepNumber?: Nullable<SortOrder>;
    title?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class HelpStepRelationFilter {
    is?: Nullable<HelpStepWhereInput>;
    isNot?: Nullable<HelpStepWhereInput>;
}

export class HelpStepScalarWhereInput {
    AND?: Nullable<HelpStepScalarWhereInput[]>;
    NOT?: Nullable<HelpStepScalarWhereInput[]>;
    OR?: Nullable<HelpStepScalarWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    description?: Nullable<StringNullableFilter>;
    helpId?: Nullable<StringFilter>;
    id?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    stepNumber?: Nullable<IntFilter>;
    title?: Nullable<StringFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class HelpStepScalarWhereWithAggregatesInput {
    AND?: Nullable<HelpStepScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<HelpStepScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<HelpStepScalarWhereWithAggregatesInput[]>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    description?: Nullable<StringNullableWithAggregatesFilter>;
    helpId?: Nullable<StringWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    stepNumber?: Nullable<IntWithAggregatesFilter>;
    title?: Nullable<StringWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class HelpStepUncheckedCreateInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutHelpStepInput>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    helpId: string;
    id?: Nullable<string>;
    state?: Nullable<State>;
    stepNumber: number;
    title: string;
    updatedAt?: Nullable<DateTime>;
}

export class HelpStepUncheckedCreateNestedManyWithoutHelpInput {
    connect?: Nullable<HelpStepWhereUniqueInput[]>;
    connectOrCreate?: Nullable<HelpStepCreateOrConnectWithoutHelpInput[]>;
    create?: Nullable<HelpStepCreateWithoutHelpInput[]>;
    createMany?: Nullable<HelpStepCreateManyHelpInputEnvelope>;
}

export class HelpStepUncheckedCreateWithoutAttachmentsInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    helpId: string;
    id?: Nullable<string>;
    state?: Nullable<State>;
    stepNumber: number;
    title: string;
    updatedAt?: Nullable<DateTime>;
}

export class HelpStepUncheckedCreateWithoutHelpInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutHelpStepInput>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    stepNumber: number;
    title: string;
    updatedAt?: Nullable<DateTime>;
}

export class HelpStepUncheckedUpdateInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutHelpStepInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpId?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    stepNumber?: Nullable<IntFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpStepUncheckedUpdateManyInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpId?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    stepNumber?: Nullable<IntFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpStepUncheckedUpdateManyWithoutHelpInput {
    connect?: Nullable<HelpStepWhereUniqueInput[]>;
    connectOrCreate?: Nullable<HelpStepCreateOrConnectWithoutHelpInput[]>;
    create?: Nullable<HelpStepCreateWithoutHelpInput[]>;
    createMany?: Nullable<HelpStepCreateManyHelpInputEnvelope>;
    delete?: Nullable<HelpStepWhereUniqueInput[]>;
    deleteMany?: Nullable<HelpStepScalarWhereInput[]>;
    disconnect?: Nullable<HelpStepWhereUniqueInput[]>;
    set?: Nullable<HelpStepWhereUniqueInput[]>;
    update?: Nullable<HelpStepUpdateWithWhereUniqueWithoutHelpInput[]>;
    updateMany?: Nullable<HelpStepUpdateManyWithWhereWithoutHelpInput[]>;
    upsert?: Nullable<HelpStepUpsertWithWhereUniqueWithoutHelpInput[]>;
}

export class HelpStepUncheckedUpdateManyWithoutStepsInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    stepNumber?: Nullable<IntFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpStepUncheckedUpdateWithoutAttachmentsInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpId?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    stepNumber?: Nullable<IntFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpStepUncheckedUpdateWithoutHelpInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutHelpStepInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    stepNumber?: Nullable<IntFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpStepUpdateInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutHelpStepInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    help?: Nullable<HelpUpdateOneRequiredWithoutStepsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    stepNumber?: Nullable<IntFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpStepUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    stepNumber?: Nullable<IntFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpStepUpdateManyWithWhereWithoutHelpInput {
    data: HelpStepUncheckedUpdateManyWithoutStepsInput;
    where: HelpStepScalarWhereInput;
}

export class HelpStepUpdateManyWithoutHelpInput {
    connect?: Nullable<HelpStepWhereUniqueInput[]>;
    connectOrCreate?: Nullable<HelpStepCreateOrConnectWithoutHelpInput[]>;
    create?: Nullable<HelpStepCreateWithoutHelpInput[]>;
    createMany?: Nullable<HelpStepCreateManyHelpInputEnvelope>;
    delete?: Nullable<HelpStepWhereUniqueInput[]>;
    deleteMany?: Nullable<HelpStepScalarWhereInput[]>;
    disconnect?: Nullable<HelpStepWhereUniqueInput[]>;
    set?: Nullable<HelpStepWhereUniqueInput[]>;
    update?: Nullable<HelpStepUpdateWithWhereUniqueWithoutHelpInput[]>;
    updateMany?: Nullable<HelpStepUpdateManyWithWhereWithoutHelpInput[]>;
    upsert?: Nullable<HelpStepUpsertWithWhereUniqueWithoutHelpInput[]>;
}

export class HelpStepUpdateOneWithoutAttachmentsInput {
    connect?: Nullable<HelpStepWhereUniqueInput>;
    connectOrCreate?: Nullable<HelpStepCreateOrConnectWithoutAttachmentsInput>;
    create?: Nullable<HelpStepUncheckedCreateWithoutAttachmentsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<HelpStepUncheckedUpdateWithoutAttachmentsInput>;
    upsert?: Nullable<HelpStepUpsertWithoutAttachmentsInput>;
}

export class HelpStepUpdateWithWhereUniqueWithoutHelpInput {
    data: HelpStepUncheckedUpdateWithoutHelpInput;
    where: HelpStepWhereUniqueInput;
}

export class HelpStepUpdateWithoutAttachmentsInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    help?: Nullable<HelpUpdateOneRequiredWithoutStepsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    stepNumber?: Nullable<IntFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpStepUpdateWithoutHelpInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutHelpStepInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    stepNumber?: Nullable<IntFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpStepUpsertWithWhereUniqueWithoutHelpInput {
    create: HelpStepUncheckedCreateWithoutHelpInput;
    update: HelpStepUncheckedUpdateWithoutHelpInput;
    where: HelpStepWhereUniqueInput;
}

export class HelpStepUpsertWithoutAttachmentsInput {
    create: HelpStepUncheckedCreateWithoutAttachmentsInput;
    update: HelpStepUncheckedUpdateWithoutAttachmentsInput;
}

export class HelpStepWhereInput {
    AND?: Nullable<HelpStepWhereInput[]>;
    NOT?: Nullable<HelpStepWhereInput[]>;
    OR?: Nullable<HelpStepWhereInput[]>;
    attachments?: Nullable<AttachmentListRelationFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    description?: Nullable<StringNullableFilter>;
    help?: Nullable<HelpWhereInput>;
    helpId?: Nullable<StringFilter>;
    id?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    stepNumber?: Nullable<IntFilter>;
    title?: Nullable<StringFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class HelpStepWhereUniqueInput {
    id?: Nullable<string>;
}

export class HelpUncheckedCreateInput {
    audience?: Nullable<Role>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    steps?: Nullable<HelpStepUncheckedCreateNestedManyWithoutHelpInput>;
    topic: string;
    updatedAt?: Nullable<DateTime>;
}

export class HelpUncheckedCreateWithoutStepsInput {
    audience?: Nullable<Role>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    topic: string;
    updatedAt?: Nullable<DateTime>;
}

export class HelpUncheckedUpdateInput {
    audience?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    steps?: Nullable<HelpStepUncheckedUpdateManyWithoutHelpInput>;
    topic?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpUncheckedUpdateManyInput {
    audience?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    topic?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpUncheckedUpdateWithoutStepsInput {
    audience?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    topic?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpUpdateInput {
    audience?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    steps?: Nullable<HelpStepUpdateManyWithoutHelpInput>;
    topic?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpUpdateManyMutationInput {
    audience?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    topic?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpUpdateOneRequiredWithoutStepsInput {
    connect?: Nullable<HelpWhereUniqueInput>;
    connectOrCreate?: Nullable<HelpCreateOrConnectWithoutStepsInput>;
    create?: Nullable<HelpUncheckedCreateWithoutStepsInput>;
    update?: Nullable<HelpUncheckedUpdateWithoutStepsInput>;
    upsert?: Nullable<HelpUpsertWithoutStepsInput>;
}

export class HelpUpdateWithoutStepsInput {
    audience?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    topic?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpUpsertWithoutStepsInput {
    create: HelpUncheckedCreateWithoutStepsInput;
    update: HelpUncheckedUpdateWithoutStepsInput;
}

export class HelpWhereInput {
    AND?: Nullable<HelpWhereInput[]>;
    NOT?: Nullable<HelpWhereInput[]>;
    OR?: Nullable<HelpWhereInput[]>;
    audience?: Nullable<EnumRoleFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    description?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    steps?: Nullable<HelpStepListRelationFilter>;
    topic?: Nullable<StringFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class HelpWhereUniqueInput {
    id?: Nullable<string>;
}

export class IntFieldUpdateOperationsInput {
    decrement?: Nullable<number>;
    divide?: Nullable<number>;
    increment?: Nullable<number>;
    multiply?: Nullable<number>;
    set?: Nullable<number>;
}

export class IntFilter {
    equals?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    in?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    not?: Nullable<NestedIntFilter>;
    notIn?: Nullable<number[]>;
}

export class IntWithAggregatesFilter {
    _avg?: Nullable<NestedFloatFilter>;
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedIntFilter>;
    _min?: Nullable<NestedIntFilter>;
    _sum?: Nullable<NestedIntFilter>;
    avg?: Nullable<NestedFloatFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    in?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    max?: Nullable<NestedIntFilter>;
    min?: Nullable<NestedIntFilter>;
    not?: Nullable<NestedIntWithAggregatesFilter>;
    notIn?: Nullable<number[]>;
    sum?: Nullable<NestedIntFilter>;
}

export class LocationCreateInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lat: number;
    lon: number;
    name?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedManyWithoutLocationInput>;
}

export class LocationCreateManyInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lat: number;
    lon: number;
    name?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class LocationCreateNestedOneWithoutUsersInput {
    connect?: Nullable<LocationWhereUniqueInput>;
    connectOrCreate?: Nullable<LocationCreateOrConnectWithoutUsersInput>;
    create?: Nullable<LocationUncheckedCreateWithoutUsersInput>;
}

export class LocationCreateOrConnectWithoutUsersInput {
    create: LocationUncheckedCreateWithoutUsersInput;
    where: LocationWhereUniqueInput;
}

export class LocationCreateWithoutUsersInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lat: number;
    lon: number;
    name?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class LocationOrderByInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    lat?: Nullable<SortOrder>;
    lon?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class LocationRelationFilter {
    is?: Nullable<LocationWhereInput>;
    isNot?: Nullable<LocationWhereInput>;
}

export class LocationScalarWhereWithAggregatesInput {
    AND?: Nullable<LocationScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<LocationScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<LocationScalarWhereWithAggregatesInput[]>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    lat?: Nullable<FloatWithAggregatesFilter>;
    lon?: Nullable<FloatWithAggregatesFilter>;
    name?: Nullable<StringWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class LocationUncheckedCreateInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lat: number;
    lon: number;
    name?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserUncheckedCreateNestedManyWithoutLocationInput>;
}

export class LocationUncheckedCreateWithoutUsersInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lat: number;
    lon: number;
    name?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class LocationUncheckedUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    lat?: Nullable<FloatFieldUpdateOperationsInput>;
    lon?: Nullable<FloatFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUncheckedUpdateManyWithoutLocationInput>;
}

export class LocationUncheckedUpdateManyInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    lat?: Nullable<FloatFieldUpdateOperationsInput>;
    lon?: Nullable<FloatFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class LocationUncheckedUpdateWithoutUsersInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    lat?: Nullable<FloatFieldUpdateOperationsInput>;
    lon?: Nullable<FloatFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class LocationUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    lat?: Nullable<FloatFieldUpdateOperationsInput>;
    lon?: Nullable<FloatFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateManyWithoutLocationInput>;
}

export class LocationUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    lat?: Nullable<FloatFieldUpdateOperationsInput>;
    lon?: Nullable<FloatFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class LocationUpdateOneRequiredWithoutUsersInput {
    connect?: Nullable<LocationWhereUniqueInput>;
    connectOrCreate?: Nullable<LocationCreateOrConnectWithoutUsersInput>;
    create?: Nullable<LocationUncheckedCreateWithoutUsersInput>;
    update?: Nullable<LocationUncheckedUpdateWithoutUsersInput>;
    upsert?: Nullable<LocationUpsertWithoutUsersInput>;
}

export class LocationUpdateWithoutUsersInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    lat?: Nullable<FloatFieldUpdateOperationsInput>;
    lon?: Nullable<FloatFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class LocationUpsertWithoutUsersInput {
    create: LocationUncheckedCreateWithoutUsersInput;
    update: LocationUncheckedUpdateWithoutUsersInput;
}

export class LocationWhereInput {
    AND?: Nullable<LocationWhereInput[]>;
    NOT?: Nullable<LocationWhereInput[]>;
    OR?: Nullable<LocationWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    lat?: Nullable<FloatFilter>;
    lon?: Nullable<FloatFilter>;
    name?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
    users?: Nullable<UserListRelationFilter>;
}

export class LocationWhereUniqueInput {
    id?: Nullable<string>;
}

export class MpesaPaymentCreateInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    input_Amount: string;
    input_Country?: Nullable<string>;
    input_Currency?: Nullable<string>;
    input_CustomerMSISDN: string;
    input_PurchasedItemsDesc: string;
    input_ServiceProviderCode: string;
    input_ThirdPartyConversationID: string;
    input_TransactionReference: string;
    output_ConversationID?: Nullable<string>;
    output_ResponseCode?: Nullable<string>;
    output_ResponseDesc?: Nullable<string>;
    output_ThirdPartyConversationID?: Nullable<string>;
    output_TransactionID?: Nullable<string>;
    state?: Nullable<State>;
    transaction?: Nullable<TransactionCreateNestedOneWithoutMpesaPaymentInput>;
    updatedAt?: Nullable<DateTime>;
}

export class MpesaPaymentCreateManyInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    input_Amount: string;
    input_Country?: Nullable<string>;
    input_Currency?: Nullable<string>;
    input_CustomerMSISDN: string;
    input_PurchasedItemsDesc: string;
    input_ServiceProviderCode: string;
    input_ThirdPartyConversationID: string;
    input_TransactionReference: string;
    output_ConversationID?: Nullable<string>;
    output_ResponseCode?: Nullable<string>;
    output_ResponseDesc?: Nullable<string>;
    output_ThirdPartyConversationID?: Nullable<string>;
    output_TransactionID?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class MpesaPaymentCreateNestedOneWithoutTransactionInput {
    connect?: Nullable<MpesaPaymentWhereUniqueInput>;
    connectOrCreate?: Nullable<MpesaPaymentCreateOrConnectWithoutTransactionInput>;
    create?: Nullable<MpesaPaymentUncheckedCreateWithoutTransactionInput>;
}

export class MpesaPaymentCreateOrConnectWithoutTransactionInput {
    create: MpesaPaymentUncheckedCreateWithoutTransactionInput;
    where: MpesaPaymentWhereUniqueInput;
}

export class MpesaPaymentCreateWithoutTransactionInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    input_Amount: string;
    input_Country?: Nullable<string>;
    input_Currency?: Nullable<string>;
    input_CustomerMSISDN: string;
    input_PurchasedItemsDesc: string;
    input_ServiceProviderCode: string;
    input_ThirdPartyConversationID: string;
    input_TransactionReference: string;
    output_ConversationID?: Nullable<string>;
    output_ResponseCode?: Nullable<string>;
    output_ResponseDesc?: Nullable<string>;
    output_ThirdPartyConversationID?: Nullable<string>;
    output_TransactionID?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class MpesaPaymentOrderByInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    input_Amount?: Nullable<SortOrder>;
    input_Country?: Nullable<SortOrder>;
    input_Currency?: Nullable<SortOrder>;
    input_CustomerMSISDN?: Nullable<SortOrder>;
    input_PurchasedItemsDesc?: Nullable<SortOrder>;
    input_ServiceProviderCode?: Nullable<SortOrder>;
    input_ThirdPartyConversationID?: Nullable<SortOrder>;
    input_TransactionReference?: Nullable<SortOrder>;
    output_ConversationID?: Nullable<SortOrder>;
    output_ResponseCode?: Nullable<SortOrder>;
    output_ResponseDesc?: Nullable<SortOrder>;
    output_ThirdPartyConversationID?: Nullable<SortOrder>;
    output_TransactionID?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class MpesaPaymentRelationFilter {
    is?: Nullable<MpesaPaymentWhereInput>;
    isNot?: Nullable<MpesaPaymentWhereInput>;
}

export class MpesaPaymentScalarWhereWithAggregatesInput {
    AND?: Nullable<MpesaPaymentScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<MpesaPaymentScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<MpesaPaymentScalarWhereWithAggregatesInput[]>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    input_Amount?: Nullable<StringWithAggregatesFilter>;
    input_Country?: Nullable<StringWithAggregatesFilter>;
    input_Currency?: Nullable<StringWithAggregatesFilter>;
    input_CustomerMSISDN?: Nullable<StringWithAggregatesFilter>;
    input_PurchasedItemsDesc?: Nullable<StringWithAggregatesFilter>;
    input_ServiceProviderCode?: Nullable<StringWithAggregatesFilter>;
    input_ThirdPartyConversationID?: Nullable<StringWithAggregatesFilter>;
    input_TransactionReference?: Nullable<StringWithAggregatesFilter>;
    output_ConversationID?: Nullable<StringNullableWithAggregatesFilter>;
    output_ResponseCode?: Nullable<StringNullableWithAggregatesFilter>;
    output_ResponseDesc?: Nullable<StringNullableWithAggregatesFilter>;
    output_ThirdPartyConversationID?: Nullable<StringNullableWithAggregatesFilter>;
    output_TransactionID?: Nullable<StringNullableWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class MpesaPaymentUncheckedCreateInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    input_Amount: string;
    input_Country?: Nullable<string>;
    input_Currency?: Nullable<string>;
    input_CustomerMSISDN: string;
    input_PurchasedItemsDesc: string;
    input_ServiceProviderCode: string;
    input_ThirdPartyConversationID: string;
    input_TransactionReference: string;
    output_ConversationID?: Nullable<string>;
    output_ResponseCode?: Nullable<string>;
    output_ResponseDesc?: Nullable<string>;
    output_ThirdPartyConversationID?: Nullable<string>;
    output_TransactionID?: Nullable<string>;
    state?: Nullable<State>;
    transaction?: Nullable<TransactionUncheckedCreateNestedOneWithoutMpesaPaymentInput>;
    updatedAt?: Nullable<DateTime>;
}

export class MpesaPaymentUncheckedCreateWithoutTransactionInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    input_Amount: string;
    input_Country?: Nullable<string>;
    input_Currency?: Nullable<string>;
    input_CustomerMSISDN: string;
    input_PurchasedItemsDesc: string;
    input_ServiceProviderCode: string;
    input_ThirdPartyConversationID: string;
    input_TransactionReference: string;
    output_ConversationID?: Nullable<string>;
    output_ResponseCode?: Nullable<string>;
    output_ResponseDesc?: Nullable<string>;
    output_ThirdPartyConversationID?: Nullable<string>;
    output_TransactionID?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class MpesaPaymentUncheckedUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    input_Amount?: Nullable<StringFieldUpdateOperationsInput>;
    input_Country?: Nullable<StringFieldUpdateOperationsInput>;
    input_Currency?: Nullable<StringFieldUpdateOperationsInput>;
    input_CustomerMSISDN?: Nullable<StringFieldUpdateOperationsInput>;
    input_PurchasedItemsDesc?: Nullable<StringFieldUpdateOperationsInput>;
    input_ServiceProviderCode?: Nullable<StringFieldUpdateOperationsInput>;
    input_ThirdPartyConversationID?: Nullable<StringFieldUpdateOperationsInput>;
    input_TransactionReference?: Nullable<StringFieldUpdateOperationsInput>;
    output_ConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseDesc?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ThirdPartyConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_TransactionID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transaction?: Nullable<TransactionUncheckedUpdateOneWithoutMpesaPaymentInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class MpesaPaymentUncheckedUpdateManyInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    input_Amount?: Nullable<StringFieldUpdateOperationsInput>;
    input_Country?: Nullable<StringFieldUpdateOperationsInput>;
    input_Currency?: Nullable<StringFieldUpdateOperationsInput>;
    input_CustomerMSISDN?: Nullable<StringFieldUpdateOperationsInput>;
    input_PurchasedItemsDesc?: Nullable<StringFieldUpdateOperationsInput>;
    input_ServiceProviderCode?: Nullable<StringFieldUpdateOperationsInput>;
    input_ThirdPartyConversationID?: Nullable<StringFieldUpdateOperationsInput>;
    input_TransactionReference?: Nullable<StringFieldUpdateOperationsInput>;
    output_ConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseDesc?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ThirdPartyConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_TransactionID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class MpesaPaymentUncheckedUpdateWithoutTransactionInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    input_Amount?: Nullable<StringFieldUpdateOperationsInput>;
    input_Country?: Nullable<StringFieldUpdateOperationsInput>;
    input_Currency?: Nullable<StringFieldUpdateOperationsInput>;
    input_CustomerMSISDN?: Nullable<StringFieldUpdateOperationsInput>;
    input_PurchasedItemsDesc?: Nullable<StringFieldUpdateOperationsInput>;
    input_ServiceProviderCode?: Nullable<StringFieldUpdateOperationsInput>;
    input_ThirdPartyConversationID?: Nullable<StringFieldUpdateOperationsInput>;
    input_TransactionReference?: Nullable<StringFieldUpdateOperationsInput>;
    output_ConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseDesc?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ThirdPartyConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_TransactionID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class MpesaPaymentUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    input_Amount?: Nullable<StringFieldUpdateOperationsInput>;
    input_Country?: Nullable<StringFieldUpdateOperationsInput>;
    input_Currency?: Nullable<StringFieldUpdateOperationsInput>;
    input_CustomerMSISDN?: Nullable<StringFieldUpdateOperationsInput>;
    input_PurchasedItemsDesc?: Nullable<StringFieldUpdateOperationsInput>;
    input_ServiceProviderCode?: Nullable<StringFieldUpdateOperationsInput>;
    input_ThirdPartyConversationID?: Nullable<StringFieldUpdateOperationsInput>;
    input_TransactionReference?: Nullable<StringFieldUpdateOperationsInput>;
    output_ConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseDesc?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ThirdPartyConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_TransactionID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transaction?: Nullable<TransactionUpdateOneWithoutMpesaPaymentInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class MpesaPaymentUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    input_Amount?: Nullable<StringFieldUpdateOperationsInput>;
    input_Country?: Nullable<StringFieldUpdateOperationsInput>;
    input_Currency?: Nullable<StringFieldUpdateOperationsInput>;
    input_CustomerMSISDN?: Nullable<StringFieldUpdateOperationsInput>;
    input_PurchasedItemsDesc?: Nullable<StringFieldUpdateOperationsInput>;
    input_ServiceProviderCode?: Nullable<StringFieldUpdateOperationsInput>;
    input_ThirdPartyConversationID?: Nullable<StringFieldUpdateOperationsInput>;
    input_TransactionReference?: Nullable<StringFieldUpdateOperationsInput>;
    output_ConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseDesc?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ThirdPartyConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_TransactionID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class MpesaPaymentUpdateOneWithoutTransactionInput {
    connect?: Nullable<MpesaPaymentWhereUniqueInput>;
    connectOrCreate?: Nullable<MpesaPaymentCreateOrConnectWithoutTransactionInput>;
    create?: Nullable<MpesaPaymentUncheckedCreateWithoutTransactionInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<MpesaPaymentUncheckedUpdateWithoutTransactionInput>;
    upsert?: Nullable<MpesaPaymentUpsertWithoutTransactionInput>;
}

export class MpesaPaymentUpdateWithoutTransactionInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    input_Amount?: Nullable<StringFieldUpdateOperationsInput>;
    input_Country?: Nullable<StringFieldUpdateOperationsInput>;
    input_Currency?: Nullable<StringFieldUpdateOperationsInput>;
    input_CustomerMSISDN?: Nullable<StringFieldUpdateOperationsInput>;
    input_PurchasedItemsDesc?: Nullable<StringFieldUpdateOperationsInput>;
    input_ServiceProviderCode?: Nullable<StringFieldUpdateOperationsInput>;
    input_ThirdPartyConversationID?: Nullable<StringFieldUpdateOperationsInput>;
    input_TransactionReference?: Nullable<StringFieldUpdateOperationsInput>;
    output_ConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseDesc?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ThirdPartyConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_TransactionID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class MpesaPaymentUpsertWithoutTransactionInput {
    create: MpesaPaymentUncheckedCreateWithoutTransactionInput;
    update: MpesaPaymentUncheckedUpdateWithoutTransactionInput;
}

export class MpesaPaymentWhereInput {
    AND?: Nullable<MpesaPaymentWhereInput[]>;
    NOT?: Nullable<MpesaPaymentWhereInput[]>;
    OR?: Nullable<MpesaPaymentWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    input_Amount?: Nullable<StringFilter>;
    input_Country?: Nullable<StringFilter>;
    input_Currency?: Nullable<StringFilter>;
    input_CustomerMSISDN?: Nullable<StringFilter>;
    input_PurchasedItemsDesc?: Nullable<StringFilter>;
    input_ServiceProviderCode?: Nullable<StringFilter>;
    input_ThirdPartyConversationID?: Nullable<StringFilter>;
    input_TransactionReference?: Nullable<StringFilter>;
    output_ConversationID?: Nullable<StringNullableFilter>;
    output_ResponseCode?: Nullable<StringNullableFilter>;
    output_ResponseDesc?: Nullable<StringNullableFilter>;
    output_ThirdPartyConversationID?: Nullable<StringNullableFilter>;
    output_TransactionID?: Nullable<StringNullableFilter>;
    state?: Nullable<EnumStateFilter>;
    transaction?: Nullable<TransactionWhereInput>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class MpesaPaymentWhereUniqueInput {
    id?: Nullable<string>;
}

export class NestedBoolFilter {
    equals?: Nullable<boolean>;
    not?: Nullable<NestedBoolFilter>;
}

export class NestedBoolWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedBoolFilter>;
    _min?: Nullable<NestedBoolFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<boolean>;
    max?: Nullable<NestedBoolFilter>;
    min?: Nullable<NestedBoolFilter>;
    not?: Nullable<NestedBoolWithAggregatesFilter>;
}

export class NestedDateTimeFilter {
    equals?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    not?: Nullable<NestedDateTimeFilter>;
    notIn?: Nullable<DateTime[]>;
}

export class NestedDateTimeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedDateTimeFilter>;
    _min?: Nullable<NestedDateTimeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    max?: Nullable<NestedDateTimeFilter>;
    min?: Nullable<NestedDateTimeFilter>;
    not?: Nullable<NestedDateTimeWithAggregatesFilter>;
    notIn?: Nullable<DateTime[]>;
}

export class NestedEnumAttachmentTypeFilter {
    equals?: Nullable<AttachmentType>;
    in?: Nullable<AttachmentType[]>;
    not?: Nullable<NestedEnumAttachmentTypeFilter>;
    notIn?: Nullable<AttachmentType[]>;
}

export class NestedEnumAttachmentTypeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumAttachmentTypeFilter>;
    _min?: Nullable<NestedEnumAttachmentTypeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<AttachmentType>;
    in?: Nullable<AttachmentType[]>;
    max?: Nullable<NestedEnumAttachmentTypeFilter>;
    min?: Nullable<NestedEnumAttachmentTypeFilter>;
    not?: Nullable<NestedEnumAttachmentTypeWithAggregatesFilter>;
    notIn?: Nullable<AttachmentType[]>;
}

export class NestedEnumBusinnessModeFilter {
    equals?: Nullable<BusinnessMode>;
    in?: Nullable<BusinnessMode[]>;
    not?: Nullable<NestedEnumBusinnessModeFilter>;
    notIn?: Nullable<BusinnessMode[]>;
}

export class NestedEnumBusinnessModeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumBusinnessModeFilter>;
    _min?: Nullable<NestedEnumBusinnessModeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<BusinnessMode>;
    in?: Nullable<BusinnessMode[]>;
    max?: Nullable<NestedEnumBusinnessModeFilter>;
    min?: Nullable<NestedEnumBusinnessModeFilter>;
    not?: Nullable<NestedEnumBusinnessModeWithAggregatesFilter>;
    notIn?: Nullable<BusinnessMode[]>;
}

export class NestedEnumRoleFilter {
    equals?: Nullable<Role>;
    in?: Nullable<Role[]>;
    not?: Nullable<NestedEnumRoleFilter>;
    notIn?: Nullable<Role[]>;
}

export class NestedEnumRoleWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumRoleFilter>;
    _min?: Nullable<NestedEnumRoleFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<Role>;
    in?: Nullable<Role[]>;
    max?: Nullable<NestedEnumRoleFilter>;
    min?: Nullable<NestedEnumRoleFilter>;
    not?: Nullable<NestedEnumRoleWithAggregatesFilter>;
    notIn?: Nullable<Role[]>;
}

export class NestedEnumSelcomPaymentStatusFilter {
    equals?: Nullable<SelcomPaymentStatus>;
    in?: Nullable<SelcomPaymentStatus[]>;
    not?: Nullable<NestedEnumSelcomPaymentStatusFilter>;
    notIn?: Nullable<SelcomPaymentStatus[]>;
}

export class NestedEnumSelcomPaymentStatusWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumSelcomPaymentStatusFilter>;
    _min?: Nullable<NestedEnumSelcomPaymentStatusFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<SelcomPaymentStatus>;
    in?: Nullable<SelcomPaymentStatus[]>;
    max?: Nullable<NestedEnumSelcomPaymentStatusFilter>;
    min?: Nullable<NestedEnumSelcomPaymentStatusFilter>;
    not?: Nullable<NestedEnumSelcomPaymentStatusWithAggregatesFilter>;
    notIn?: Nullable<SelcomPaymentStatus[]>;
}

export class NestedEnumSelcomUtilityCodeFilter {
    equals?: Nullable<SelcomUtilityCode>;
    in?: Nullable<SelcomUtilityCode[]>;
    not?: Nullable<NestedEnumSelcomUtilityCodeFilter>;
    notIn?: Nullable<SelcomUtilityCode[]>;
}

export class NestedEnumSelcomUtilityCodeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumSelcomUtilityCodeFilter>;
    _min?: Nullable<NestedEnumSelcomUtilityCodeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<SelcomUtilityCode>;
    in?: Nullable<SelcomUtilityCode[]>;
    max?: Nullable<NestedEnumSelcomUtilityCodeFilter>;
    min?: Nullable<NestedEnumSelcomUtilityCodeFilter>;
    not?: Nullable<NestedEnumSelcomUtilityCodeWithAggregatesFilter>;
    notIn?: Nullable<SelcomUtilityCode[]>;
}

export class NestedEnumStateFilter {
    equals?: Nullable<State>;
    in?: Nullable<State[]>;
    not?: Nullable<NestedEnumStateFilter>;
    notIn?: Nullable<State[]>;
}

export class NestedEnumStateWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumStateFilter>;
    _min?: Nullable<NestedEnumStateFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<State>;
    in?: Nullable<State[]>;
    max?: Nullable<NestedEnumStateFilter>;
    min?: Nullable<NestedEnumStateFilter>;
    not?: Nullable<NestedEnumStateWithAggregatesFilter>;
    notIn?: Nullable<State[]>;
}

export class NestedEnumTransactionTypeFilter {
    equals?: Nullable<TransactionType>;
    in?: Nullable<TransactionType[]>;
    not?: Nullable<NestedEnumTransactionTypeFilter>;
    notIn?: Nullable<TransactionType[]>;
}

export class NestedEnumTransactionTypeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumTransactionTypeFilter>;
    _min?: Nullable<NestedEnumTransactionTypeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<TransactionType>;
    in?: Nullable<TransactionType[]>;
    max?: Nullable<NestedEnumTransactionTypeFilter>;
    min?: Nullable<NestedEnumTransactionTypeFilter>;
    not?: Nullable<NestedEnumTransactionTypeWithAggregatesFilter>;
    notIn?: Nullable<TransactionType[]>;
}

export class NestedFloatFilter {
    equals?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    in?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    not?: Nullable<NestedFloatFilter>;
    notIn?: Nullable<number[]>;
}

export class NestedFloatWithAggregatesFilter {
    _avg?: Nullable<NestedFloatFilter>;
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedFloatFilter>;
    _min?: Nullable<NestedFloatFilter>;
    _sum?: Nullable<NestedFloatFilter>;
    avg?: Nullable<NestedFloatFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    in?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    max?: Nullable<NestedFloatFilter>;
    min?: Nullable<NestedFloatFilter>;
    not?: Nullable<NestedFloatWithAggregatesFilter>;
    notIn?: Nullable<number[]>;
    sum?: Nullable<NestedFloatFilter>;
}

export class NestedIntFilter {
    equals?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    in?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    not?: Nullable<NestedIntFilter>;
    notIn?: Nullable<number[]>;
}

export class NestedIntNullableFilter {
    equals?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    in?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    not?: Nullable<NestedIntNullableFilter>;
    notIn?: Nullable<number[]>;
}

export class NestedIntWithAggregatesFilter {
    _avg?: Nullable<NestedFloatFilter>;
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedIntFilter>;
    _min?: Nullable<NestedIntFilter>;
    _sum?: Nullable<NestedIntFilter>;
    avg?: Nullable<NestedFloatFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    in?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    max?: Nullable<NestedIntFilter>;
    min?: Nullable<NestedIntFilter>;
    not?: Nullable<NestedIntWithAggregatesFilter>;
    notIn?: Nullable<number[]>;
    sum?: Nullable<NestedIntFilter>;
}

export class NestedStringFilter {
    contains?: Nullable<string>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    not?: Nullable<NestedStringFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class NestedStringNullableFilter {
    contains?: Nullable<string>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    not?: Nullable<NestedStringNullableFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class NestedStringNullableWithAggregatesFilter {
    _count?: Nullable<NestedIntNullableFilter>;
    _max?: Nullable<NestedStringNullableFilter>;
    _min?: Nullable<NestedStringNullableFilter>;
    contains?: Nullable<string>;
    count?: Nullable<NestedIntNullableFilter>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    max?: Nullable<NestedStringNullableFilter>;
    min?: Nullable<NestedStringNullableFilter>;
    not?: Nullable<NestedStringNullableWithAggregatesFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class NestedStringWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedStringFilter>;
    _min?: Nullable<NestedStringFilter>;
    contains?: Nullable<string>;
    count?: Nullable<NestedIntFilter>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    max?: Nullable<NestedStringFilter>;
    min?: Nullable<NestedStringFilter>;
    not?: Nullable<NestedStringWithAggregatesFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class NullableStringFieldUpdateOperationsInput {
    set?: Nullable<string>;
}

export class OrderCreateInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    owner: UserCreateNestedOneWithoutOrdersInput;
    quantity: number;
    receipt?: Nullable<AttachmentCreateNestedOneWithoutOrdersInput>;
    service: ServiceCreateNestedOneWithoutOrdersInput;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateManyInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    ownerId: string;
    quantity: number;
    receiptId?: Nullable<string>;
    serviceId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateManyOwnerInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    quantity: number;
    receiptId?: Nullable<string>;
    serviceId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateManyOwnerInputEnvelope {
    data: OrderCreateManyOwnerInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class OrderCreateManyReceiptInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    ownerId: string;
    quantity: number;
    serviceId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateManyReceiptInputEnvelope {
    data: OrderCreateManyReceiptInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class OrderCreateManyServiceInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    ownerId: string;
    quantity: number;
    receiptId?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateManyServiceInputEnvelope {
    data: OrderCreateManyServiceInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class OrderCreateNestedManyWithoutOwnerInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutOwnerInput[]>;
    create?: Nullable<OrderCreateWithoutOwnerInput[]>;
    createMany?: Nullable<OrderCreateManyOwnerInputEnvelope>;
}

export class OrderCreateNestedManyWithoutReceiptInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutReceiptInput[]>;
    create?: Nullable<OrderCreateWithoutReceiptInput[]>;
    createMany?: Nullable<OrderCreateManyReceiptInputEnvelope>;
}

export class OrderCreateNestedManyWithoutServiceInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutServiceInput[]>;
    create?: Nullable<OrderCreateWithoutServiceInput[]>;
    createMany?: Nullable<OrderCreateManyServiceInputEnvelope>;
}

export class OrderCreateNestedOneWithoutTransactionsInput {
    connect?: Nullable<OrderWhereUniqueInput>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutTransactionsInput>;
    create?: Nullable<OrderUncheckedCreateWithoutTransactionsInput>;
}

export class OrderCreateOrConnectWithoutOwnerInput {
    create: OrderUncheckedCreateWithoutOwnerInput;
    where: OrderWhereUniqueInput;
}

export class OrderCreateOrConnectWithoutReceiptInput {
    create: OrderUncheckedCreateWithoutReceiptInput;
    where: OrderWhereUniqueInput;
}

export class OrderCreateOrConnectWithoutServiceInput {
    create: OrderUncheckedCreateWithoutServiceInput;
    where: OrderWhereUniqueInput;
}

export class OrderCreateOrConnectWithoutTransactionsInput {
    create: OrderUncheckedCreateWithoutTransactionsInput;
    where: OrderWhereUniqueInput;
}

export class OrderCreateWithoutOwnerInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    quantity: number;
    receipt?: Nullable<AttachmentCreateNestedOneWithoutOrdersInput>;
    service: ServiceCreateNestedOneWithoutOrdersInput;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateWithoutReceiptInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    owner: UserCreateNestedOneWithoutOrdersInput;
    quantity: number;
    service: ServiceCreateNestedOneWithoutOrdersInput;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateWithoutServiceInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    owner: UserCreateNestedOneWithoutOrdersInput;
    quantity: number;
    receipt?: Nullable<AttachmentCreateNestedOneWithoutOrdersInput>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateWithoutTransactionsInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    owner: UserCreateNestedOneWithoutOrdersInput;
    quantity: number;
    receipt?: Nullable<AttachmentCreateNestedOneWithoutOrdersInput>;
    service: ServiceCreateNestedOneWithoutOrdersInput;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderListRelationFilter {
    every?: Nullable<OrderWhereInput>;
    none?: Nullable<OrderWhereInput>;
    some?: Nullable<OrderWhereInput>;
}

export class OrderOrderByInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    notes?: Nullable<SortOrder>;
    ownerId?: Nullable<SortOrder>;
    quantity?: Nullable<SortOrder>;
    receiptId?: Nullable<SortOrder>;
    serviceId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class OrderRelationFilter {
    is?: Nullable<OrderWhereInput>;
    isNot?: Nullable<OrderWhereInput>;
}

export class OrderScalarWhereInput {
    AND?: Nullable<OrderScalarWhereInput[]>;
    NOT?: Nullable<OrderScalarWhereInput[]>;
    OR?: Nullable<OrderScalarWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    notes?: Nullable<StringNullableFilter>;
    ownerId?: Nullable<StringFilter>;
    quantity?: Nullable<IntFilter>;
    receiptId?: Nullable<StringNullableFilter>;
    serviceId?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class OrderScalarWhereWithAggregatesInput {
    AND?: Nullable<OrderScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<OrderScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<OrderScalarWhereWithAggregatesInput[]>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    notes?: Nullable<StringNullableWithAggregatesFilter>;
    ownerId?: Nullable<StringWithAggregatesFilter>;
    quantity?: Nullable<IntWithAggregatesFilter>;
    receiptId?: Nullable<StringNullableWithAggregatesFilter>;
    serviceId?: Nullable<StringWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class OrderUncheckedCreateInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    ownerId: string;
    quantity: number;
    receiptId?: Nullable<string>;
    serviceId: string;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderUncheckedCreateNestedManyWithoutOwnerInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutOwnerInput[]>;
    create?: Nullable<OrderCreateWithoutOwnerInput[]>;
    createMany?: Nullable<OrderCreateManyOwnerInputEnvelope>;
}

export class OrderUncheckedCreateNestedManyWithoutReceiptInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutReceiptInput[]>;
    create?: Nullable<OrderCreateWithoutReceiptInput[]>;
    createMany?: Nullable<OrderCreateManyReceiptInputEnvelope>;
}

export class OrderUncheckedCreateNestedManyWithoutServiceInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutServiceInput[]>;
    create?: Nullable<OrderCreateWithoutServiceInput[]>;
    createMany?: Nullable<OrderCreateManyServiceInputEnvelope>;
}

export class OrderUncheckedCreateWithoutOwnerInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    quantity: number;
    receiptId?: Nullable<string>;
    serviceId: string;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderUncheckedCreateWithoutReceiptInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    ownerId: string;
    quantity: number;
    serviceId: string;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderUncheckedCreateWithoutServiceInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    ownerId: string;
    quantity: number;
    receiptId?: Nullable<string>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderUncheckedCreateWithoutTransactionsInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    ownerId: string;
    quantity: number;
    receiptId?: Nullable<string>;
    serviceId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderUncheckedUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUncheckedUpdateManyInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUncheckedUpdateManyWithoutOrdersInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUncheckedUpdateManyWithoutOwnerInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutOwnerInput[]>;
    create?: Nullable<OrderCreateWithoutOwnerInput[]>;
    createMany?: Nullable<OrderCreateManyOwnerInputEnvelope>;
    delete?: Nullable<OrderWhereUniqueInput[]>;
    deleteMany?: Nullable<OrderScalarWhereInput[]>;
    disconnect?: Nullable<OrderWhereUniqueInput[]>;
    set?: Nullable<OrderWhereUniqueInput[]>;
    update?: Nullable<OrderUpdateWithWhereUniqueWithoutOwnerInput[]>;
    updateMany?: Nullable<OrderUpdateManyWithWhereWithoutOwnerInput[]>;
    upsert?: Nullable<OrderUpsertWithWhereUniqueWithoutOwnerInput[]>;
}

export class OrderUncheckedUpdateManyWithoutReceiptInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutReceiptInput[]>;
    create?: Nullable<OrderCreateWithoutReceiptInput[]>;
    createMany?: Nullable<OrderCreateManyReceiptInputEnvelope>;
    delete?: Nullable<OrderWhereUniqueInput[]>;
    deleteMany?: Nullable<OrderScalarWhereInput[]>;
    disconnect?: Nullable<OrderWhereUniqueInput[]>;
    set?: Nullable<OrderWhereUniqueInput[]>;
    update?: Nullable<OrderUpdateWithWhereUniqueWithoutReceiptInput[]>;
    updateMany?: Nullable<OrderUpdateManyWithWhereWithoutReceiptInput[]>;
    upsert?: Nullable<OrderUpsertWithWhereUniqueWithoutReceiptInput[]>;
}

export class OrderUncheckedUpdateManyWithoutServiceInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutServiceInput[]>;
    create?: Nullable<OrderCreateWithoutServiceInput[]>;
    createMany?: Nullable<OrderCreateManyServiceInputEnvelope>;
    delete?: Nullable<OrderWhereUniqueInput[]>;
    deleteMany?: Nullable<OrderScalarWhereInput[]>;
    disconnect?: Nullable<OrderWhereUniqueInput[]>;
    set?: Nullable<OrderWhereUniqueInput[]>;
    update?: Nullable<OrderUpdateWithWhereUniqueWithoutServiceInput[]>;
    updateMany?: Nullable<OrderUpdateManyWithWhereWithoutServiceInput[]>;
    upsert?: Nullable<OrderUpsertWithWhereUniqueWithoutServiceInput[]>;
}

export class OrderUncheckedUpdateWithoutOwnerInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUncheckedUpdateWithoutReceiptInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUncheckedUpdateWithoutServiceInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUncheckedUpdateWithoutTransactionsInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrdersInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receipt?: Nullable<AttachmentUpdateOneWithoutOrdersInput>;
    service?: Nullable<ServiceUpdateOneRequiredWithoutOrdersInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpdateManyWithWhereWithoutOwnerInput {
    data: OrderUncheckedUpdateManyWithoutOrdersInput;
    where: OrderScalarWhereInput;
}

export class OrderUpdateManyWithWhereWithoutReceiptInput {
    data: OrderUncheckedUpdateManyWithoutOrdersInput;
    where: OrderScalarWhereInput;
}

export class OrderUpdateManyWithWhereWithoutServiceInput {
    data: OrderUncheckedUpdateManyWithoutOrdersInput;
    where: OrderScalarWhereInput;
}

export class OrderUpdateManyWithoutOwnerInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutOwnerInput[]>;
    create?: Nullable<OrderCreateWithoutOwnerInput[]>;
    createMany?: Nullable<OrderCreateManyOwnerInputEnvelope>;
    delete?: Nullable<OrderWhereUniqueInput[]>;
    deleteMany?: Nullable<OrderScalarWhereInput[]>;
    disconnect?: Nullable<OrderWhereUniqueInput[]>;
    set?: Nullable<OrderWhereUniqueInput[]>;
    update?: Nullable<OrderUpdateWithWhereUniqueWithoutOwnerInput[]>;
    updateMany?: Nullable<OrderUpdateManyWithWhereWithoutOwnerInput[]>;
    upsert?: Nullable<OrderUpsertWithWhereUniqueWithoutOwnerInput[]>;
}

export class OrderUpdateManyWithoutReceiptInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutReceiptInput[]>;
    create?: Nullable<OrderCreateWithoutReceiptInput[]>;
    createMany?: Nullable<OrderCreateManyReceiptInputEnvelope>;
    delete?: Nullable<OrderWhereUniqueInput[]>;
    deleteMany?: Nullable<OrderScalarWhereInput[]>;
    disconnect?: Nullable<OrderWhereUniqueInput[]>;
    set?: Nullable<OrderWhereUniqueInput[]>;
    update?: Nullable<OrderUpdateWithWhereUniqueWithoutReceiptInput[]>;
    updateMany?: Nullable<OrderUpdateManyWithWhereWithoutReceiptInput[]>;
    upsert?: Nullable<OrderUpsertWithWhereUniqueWithoutReceiptInput[]>;
}

export class OrderUpdateManyWithoutServiceInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutServiceInput[]>;
    create?: Nullable<OrderCreateWithoutServiceInput[]>;
    createMany?: Nullable<OrderCreateManyServiceInputEnvelope>;
    delete?: Nullable<OrderWhereUniqueInput[]>;
    deleteMany?: Nullable<OrderScalarWhereInput[]>;
    disconnect?: Nullable<OrderWhereUniqueInput[]>;
    set?: Nullable<OrderWhereUniqueInput[]>;
    update?: Nullable<OrderUpdateWithWhereUniqueWithoutServiceInput[]>;
    updateMany?: Nullable<OrderUpdateManyWithWhereWithoutServiceInput[]>;
    upsert?: Nullable<OrderUpsertWithWhereUniqueWithoutServiceInput[]>;
}

export class OrderUpdateOneRequiredWithoutTransactionsInput {
    connect?: Nullable<OrderWhereUniqueInput>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutTransactionsInput>;
    create?: Nullable<OrderUncheckedCreateWithoutTransactionsInput>;
    update?: Nullable<OrderUncheckedUpdateWithoutTransactionsInput>;
    upsert?: Nullable<OrderUpsertWithoutTransactionsInput>;
}

export class OrderUpdateWithWhereUniqueWithoutOwnerInput {
    data: OrderUncheckedUpdateWithoutOwnerInput;
    where: OrderWhereUniqueInput;
}

export class OrderUpdateWithWhereUniqueWithoutReceiptInput {
    data: OrderUncheckedUpdateWithoutReceiptInput;
    where: OrderWhereUniqueInput;
}

export class OrderUpdateWithWhereUniqueWithoutServiceInput {
    data: OrderUncheckedUpdateWithoutServiceInput;
    where: OrderWhereUniqueInput;
}

export class OrderUpdateWithoutOwnerInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receipt?: Nullable<AttachmentUpdateOneWithoutOrdersInput>;
    service?: Nullable<ServiceUpdateOneRequiredWithoutOrdersInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpdateWithoutReceiptInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrdersInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    service?: Nullable<ServiceUpdateOneRequiredWithoutOrdersInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpdateWithoutServiceInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrdersInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receipt?: Nullable<AttachmentUpdateOneWithoutOrdersInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpdateWithoutTransactionsInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrdersInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receipt?: Nullable<AttachmentUpdateOneWithoutOrdersInput>;
    service?: Nullable<ServiceUpdateOneRequiredWithoutOrdersInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpsertWithWhereUniqueWithoutOwnerInput {
    create: OrderUncheckedCreateWithoutOwnerInput;
    update: OrderUncheckedUpdateWithoutOwnerInput;
    where: OrderWhereUniqueInput;
}

export class OrderUpsertWithWhereUniqueWithoutReceiptInput {
    create: OrderUncheckedCreateWithoutReceiptInput;
    update: OrderUncheckedUpdateWithoutReceiptInput;
    where: OrderWhereUniqueInput;
}

export class OrderUpsertWithWhereUniqueWithoutServiceInput {
    create: OrderUncheckedCreateWithoutServiceInput;
    update: OrderUncheckedUpdateWithoutServiceInput;
    where: OrderWhereUniqueInput;
}

export class OrderUpsertWithoutTransactionsInput {
    create: OrderUncheckedCreateWithoutTransactionsInput;
    update: OrderUncheckedUpdateWithoutTransactionsInput;
}

export class OrderWhereInput {
    AND?: Nullable<OrderWhereInput[]>;
    NOT?: Nullable<OrderWhereInput[]>;
    OR?: Nullable<OrderWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    notes?: Nullable<StringNullableFilter>;
    owner?: Nullable<UserWhereInput>;
    ownerId?: Nullable<StringFilter>;
    quantity?: Nullable<IntFilter>;
    receipt?: Nullable<AttachmentWhereInput>;
    receiptId?: Nullable<StringNullableFilter>;
    service?: Nullable<ServiceWhereInput>;
    serviceId?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    transactions?: Nullable<TransactionListRelationFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class OrderWhereUniqueInput {
    id?: Nullable<string>;
}

export class PaybillRequest {
    currency?: Nullable<string>;
    method?: Nullable<string>;
    msisdn: string;
    orderId: string;
}

export class PaymentMethodCreateInput {
    code: SelcomUtilityCode;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    logo: AttachmentCreateNestedOneWithoutPaymentMethodsInput;
    name: string;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutPaymentMethodInput>;
    updatedAt?: Nullable<DateTime>;
}

export class PaymentMethodCreateManyInput {
    attachmentId: string;
    code: SelcomUtilityCode;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class PaymentMethodCreateManyLogoInput {
    code: SelcomUtilityCode;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class PaymentMethodCreateManyLogoInputEnvelope {
    data: PaymentMethodCreateManyLogoInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class PaymentMethodCreateNestedManyWithoutLogoInput {
    connect?: Nullable<PaymentMethodWhereUniqueInput[]>;
    connectOrCreate?: Nullable<PaymentMethodCreateOrConnectWithoutLogoInput[]>;
    create?: Nullable<PaymentMethodCreateWithoutLogoInput[]>;
    createMany?: Nullable<PaymentMethodCreateManyLogoInputEnvelope>;
}

export class PaymentMethodCreateNestedOneWithoutTransactionsInput {
    connect?: Nullable<PaymentMethodWhereUniqueInput>;
    connectOrCreate?: Nullable<PaymentMethodCreateOrConnectWithoutTransactionsInput>;
    create?: Nullable<PaymentMethodUncheckedCreateWithoutTransactionsInput>;
}

export class PaymentMethodCreateOrConnectWithoutLogoInput {
    create: PaymentMethodUncheckedCreateWithoutLogoInput;
    where: PaymentMethodWhereUniqueInput;
}

export class PaymentMethodCreateOrConnectWithoutTransactionsInput {
    create: PaymentMethodUncheckedCreateWithoutTransactionsInput;
    where: PaymentMethodWhereUniqueInput;
}

export class PaymentMethodCreateWithoutLogoInput {
    code: SelcomUtilityCode;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutPaymentMethodInput>;
    updatedAt?: Nullable<DateTime>;
}

export class PaymentMethodCreateWithoutTransactionsInput {
    code: SelcomUtilityCode;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    logo: AttachmentCreateNestedOneWithoutPaymentMethodsInput;
    name: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class PaymentMethodListRelationFilter {
    every?: Nullable<PaymentMethodWhereInput>;
    none?: Nullable<PaymentMethodWhereInput>;
    some?: Nullable<PaymentMethodWhereInput>;
}

export class PaymentMethodOrderByInput {
    attachmentId?: Nullable<SortOrder>;
    code?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class PaymentMethodRelationFilter {
    is?: Nullable<PaymentMethodWhereInput>;
    isNot?: Nullable<PaymentMethodWhereInput>;
}

export class PaymentMethodScalarWhereInput {
    AND?: Nullable<PaymentMethodScalarWhereInput[]>;
    NOT?: Nullable<PaymentMethodScalarWhereInput[]>;
    OR?: Nullable<PaymentMethodScalarWhereInput[]>;
    attachmentId?: Nullable<StringFilter>;
    code?: Nullable<EnumSelcomUtilityCodeFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    description?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    name?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class PaymentMethodScalarWhereWithAggregatesInput {
    AND?: Nullable<PaymentMethodScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<PaymentMethodScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<PaymentMethodScalarWhereWithAggregatesInput[]>;
    attachmentId?: Nullable<StringWithAggregatesFilter>;
    code?: Nullable<EnumSelcomUtilityCodeWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    description?: Nullable<StringNullableWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    name?: Nullable<StringWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class PaymentMethodUncheckedCreateInput {
    attachmentId: string;
    code: SelcomUtilityCode;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutPaymentMethodInput>;
    updatedAt?: Nullable<DateTime>;
}

export class PaymentMethodUncheckedCreateNestedManyWithoutLogoInput {
    connect?: Nullable<PaymentMethodWhereUniqueInput[]>;
    connectOrCreate?: Nullable<PaymentMethodCreateOrConnectWithoutLogoInput[]>;
    create?: Nullable<PaymentMethodCreateWithoutLogoInput[]>;
    createMany?: Nullable<PaymentMethodCreateManyLogoInputEnvelope>;
}

export class PaymentMethodUncheckedCreateWithoutLogoInput {
    code: SelcomUtilityCode;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutPaymentMethodInput>;
    updatedAt?: Nullable<DateTime>;
}

export class PaymentMethodUncheckedCreateWithoutTransactionsInput {
    attachmentId: string;
    code: SelcomUtilityCode;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class PaymentMethodUncheckedUpdateInput {
    attachmentId?: Nullable<StringFieldUpdateOperationsInput>;
    code?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutPaymentMethodInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class PaymentMethodUncheckedUpdateManyInput {
    attachmentId?: Nullable<StringFieldUpdateOperationsInput>;
    code?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class PaymentMethodUncheckedUpdateManyWithoutLogoInput {
    connect?: Nullable<PaymentMethodWhereUniqueInput[]>;
    connectOrCreate?: Nullable<PaymentMethodCreateOrConnectWithoutLogoInput[]>;
    create?: Nullable<PaymentMethodCreateWithoutLogoInput[]>;
    createMany?: Nullable<PaymentMethodCreateManyLogoInputEnvelope>;
    delete?: Nullable<PaymentMethodWhereUniqueInput[]>;
    deleteMany?: Nullable<PaymentMethodScalarWhereInput[]>;
    disconnect?: Nullable<PaymentMethodWhereUniqueInput[]>;
    set?: Nullable<PaymentMethodWhereUniqueInput[]>;
    update?: Nullable<PaymentMethodUpdateWithWhereUniqueWithoutLogoInput[]>;
    updateMany?: Nullable<PaymentMethodUpdateManyWithWhereWithoutLogoInput[]>;
    upsert?: Nullable<PaymentMethodUpsertWithWhereUniqueWithoutLogoInput[]>;
}

export class PaymentMethodUncheckedUpdateManyWithoutPaymentMethodsInput {
    code?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class PaymentMethodUncheckedUpdateWithoutLogoInput {
    code?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutPaymentMethodInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class PaymentMethodUncheckedUpdateWithoutTransactionsInput {
    attachmentId?: Nullable<StringFieldUpdateOperationsInput>;
    code?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class PaymentMethodUpdateInput {
    code?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    logo?: Nullable<AttachmentUpdateOneRequiredWithoutPaymentMethodsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutPaymentMethodInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class PaymentMethodUpdateManyMutationInput {
    code?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class PaymentMethodUpdateManyWithWhereWithoutLogoInput {
    data: PaymentMethodUncheckedUpdateManyWithoutPaymentMethodsInput;
    where: PaymentMethodScalarWhereInput;
}

export class PaymentMethodUpdateManyWithoutLogoInput {
    connect?: Nullable<PaymentMethodWhereUniqueInput[]>;
    connectOrCreate?: Nullable<PaymentMethodCreateOrConnectWithoutLogoInput[]>;
    create?: Nullable<PaymentMethodCreateWithoutLogoInput[]>;
    createMany?: Nullable<PaymentMethodCreateManyLogoInputEnvelope>;
    delete?: Nullable<PaymentMethodWhereUniqueInput[]>;
    deleteMany?: Nullable<PaymentMethodScalarWhereInput[]>;
    disconnect?: Nullable<PaymentMethodWhereUniqueInput[]>;
    set?: Nullable<PaymentMethodWhereUniqueInput[]>;
    update?: Nullable<PaymentMethodUpdateWithWhereUniqueWithoutLogoInput[]>;
    updateMany?: Nullable<PaymentMethodUpdateManyWithWhereWithoutLogoInput[]>;
    upsert?: Nullable<PaymentMethodUpsertWithWhereUniqueWithoutLogoInput[]>;
}

export class PaymentMethodUpdateOneRequiredWithoutTransactionsInput {
    connect?: Nullable<PaymentMethodWhereUniqueInput>;
    connectOrCreate?: Nullable<PaymentMethodCreateOrConnectWithoutTransactionsInput>;
    create?: Nullable<PaymentMethodUncheckedCreateWithoutTransactionsInput>;
    update?: Nullable<PaymentMethodUncheckedUpdateWithoutTransactionsInput>;
    upsert?: Nullable<PaymentMethodUpsertWithoutTransactionsInput>;
}

export class PaymentMethodUpdateWithWhereUniqueWithoutLogoInput {
    data: PaymentMethodUncheckedUpdateWithoutLogoInput;
    where: PaymentMethodWhereUniqueInput;
}

export class PaymentMethodUpdateWithoutLogoInput {
    code?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutPaymentMethodInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class PaymentMethodUpdateWithoutTransactionsInput {
    code?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    logo?: Nullable<AttachmentUpdateOneRequiredWithoutPaymentMethodsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class PaymentMethodUpsertWithWhereUniqueWithoutLogoInput {
    create: PaymentMethodUncheckedCreateWithoutLogoInput;
    update: PaymentMethodUncheckedUpdateWithoutLogoInput;
    where: PaymentMethodWhereUniqueInput;
}

export class PaymentMethodUpsertWithoutTransactionsInput {
    create: PaymentMethodUncheckedCreateWithoutTransactionsInput;
    update: PaymentMethodUncheckedUpdateWithoutTransactionsInput;
}

export class PaymentMethodWhereInput {
    AND?: Nullable<PaymentMethodWhereInput[]>;
    NOT?: Nullable<PaymentMethodWhereInput[]>;
    OR?: Nullable<PaymentMethodWhereInput[]>;
    attachmentId?: Nullable<StringFilter>;
    code?: Nullable<EnumSelcomUtilityCodeFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    description?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    logo?: Nullable<AttachmentWhereInput>;
    name?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    transactions?: Nullable<TransactionListRelationFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class PaymentMethodWhereUniqueInput {
    id?: Nullable<string>;
}

export class RegisterDeviceInput {
    fcm_id?: Nullable<string>;
    id: string;
    type?: Nullable<string>;
    userId?: Nullable<string>;
}

export class ReviewCreateInput {
    author: UserCreateNestedOneWithoutReviewsInput;
    comments?: Nullable<CommentCreateNestedManyWithoutReviewInput>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reviewee: UserCreateNestedOneWithoutReviewedInput;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewCreateManyAuthorInput {
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    revieweeId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewCreateManyAuthorInputEnvelope {
    data: ReviewCreateManyAuthorInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class ReviewCreateManyInput {
    authorId: string;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    revieweeId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewCreateManyRevieweeInput {
    authorId: string;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewCreateManyRevieweeInputEnvelope {
    data: ReviewCreateManyRevieweeInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class ReviewCreateNestedManyWithoutAuthorInput {
    connect?: Nullable<ReviewWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ReviewCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<ReviewCreateWithoutAuthorInput[]>;
    createMany?: Nullable<ReviewCreateManyAuthorInputEnvelope>;
}

export class ReviewCreateNestedManyWithoutRevieweeInput {
    connect?: Nullable<ReviewWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ReviewCreateOrConnectWithoutRevieweeInput[]>;
    create?: Nullable<ReviewCreateWithoutRevieweeInput[]>;
    createMany?: Nullable<ReviewCreateManyRevieweeInputEnvelope>;
}

export class ReviewCreateNestedOneWithoutCommentsInput {
    connect?: Nullable<ReviewWhereUniqueInput>;
    connectOrCreate?: Nullable<ReviewCreateOrConnectWithoutCommentsInput>;
    create?: Nullable<ReviewUncheckedCreateWithoutCommentsInput>;
}

export class ReviewCreateOrConnectWithoutAuthorInput {
    create: ReviewUncheckedCreateWithoutAuthorInput;
    where: ReviewWhereUniqueInput;
}

export class ReviewCreateOrConnectWithoutCommentsInput {
    create: ReviewUncheckedCreateWithoutCommentsInput;
    where: ReviewWhereUniqueInput;
}

export class ReviewCreateOrConnectWithoutRevieweeInput {
    create: ReviewUncheckedCreateWithoutRevieweeInput;
    where: ReviewWhereUniqueInput;
}

export class ReviewCreateWithoutAuthorInput {
    comments?: Nullable<CommentCreateNestedManyWithoutReviewInput>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reviewee: UserCreateNestedOneWithoutReviewedInput;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewCreateWithoutCommentsInput {
    author: UserCreateNestedOneWithoutReviewsInput;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reviewee: UserCreateNestedOneWithoutReviewedInput;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewCreateWithoutRevieweeInput {
    author: UserCreateNestedOneWithoutReviewsInput;
    comments?: Nullable<CommentCreateNestedManyWithoutReviewInput>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewListRelationFilter {
    every?: Nullable<ReviewWhereInput>;
    none?: Nullable<ReviewWhereInput>;
    some?: Nullable<ReviewWhereInput>;
}

export class ReviewOrderByInput {
    authorId?: Nullable<SortOrder>;
    content?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    revieweeId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    value?: Nullable<SortOrder>;
}

export class ReviewRelationFilter {
    is?: Nullable<ReviewWhereInput>;
    isNot?: Nullable<ReviewWhereInput>;
}

export class ReviewScalarWhereInput {
    AND?: Nullable<ReviewScalarWhereInput[]>;
    NOT?: Nullable<ReviewScalarWhereInput[]>;
    OR?: Nullable<ReviewScalarWhereInput[]>;
    authorId?: Nullable<StringFilter>;
    content?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    revieweeId?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
    value?: Nullable<IntFilter>;
}

export class ReviewScalarWhereWithAggregatesInput {
    AND?: Nullable<ReviewScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<ReviewScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<ReviewScalarWhereWithAggregatesInput[]>;
    authorId?: Nullable<StringWithAggregatesFilter>;
    content?: Nullable<StringNullableWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    revieweeId?: Nullable<StringWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
    value?: Nullable<IntWithAggregatesFilter>;
}

export class ReviewUncheckedCreateInput {
    authorId: string;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutReviewInput>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    revieweeId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewUncheckedCreateNestedManyWithoutAuthorInput {
    connect?: Nullable<ReviewWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ReviewCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<ReviewCreateWithoutAuthorInput[]>;
    createMany?: Nullable<ReviewCreateManyAuthorInputEnvelope>;
}

export class ReviewUncheckedCreateNestedManyWithoutRevieweeInput {
    connect?: Nullable<ReviewWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ReviewCreateOrConnectWithoutRevieweeInput[]>;
    create?: Nullable<ReviewCreateWithoutRevieweeInput[]>;
    createMany?: Nullable<ReviewCreateManyRevieweeInputEnvelope>;
}

export class ReviewUncheckedCreateWithoutAuthorInput {
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutReviewInput>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    revieweeId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewUncheckedCreateWithoutCommentsInput {
    authorId: string;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    revieweeId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewUncheckedCreateWithoutRevieweeInput {
    authorId: string;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutReviewInput>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewUncheckedUpdateInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutReviewInput>;
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    revieweeId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class ReviewUncheckedUpdateManyInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    revieweeId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class ReviewUncheckedUpdateManyWithoutAuthorInput {
    connect?: Nullable<ReviewWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ReviewCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<ReviewCreateWithoutAuthorInput[]>;
    createMany?: Nullable<ReviewCreateManyAuthorInputEnvelope>;
    delete?: Nullable<ReviewWhereUniqueInput[]>;
    deleteMany?: Nullable<ReviewScalarWhereInput[]>;
    disconnect?: Nullable<ReviewWhereUniqueInput[]>;
    set?: Nullable<ReviewWhereUniqueInput[]>;
    update?: Nullable<ReviewUpdateWithWhereUniqueWithoutAuthorInput[]>;
    updateMany?: Nullable<ReviewUpdateManyWithWhereWithoutAuthorInput[]>;
    upsert?: Nullable<ReviewUpsertWithWhereUniqueWithoutAuthorInput[]>;
}

export class ReviewUncheckedUpdateManyWithoutReviewedInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class ReviewUncheckedUpdateManyWithoutRevieweeInput {
    connect?: Nullable<ReviewWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ReviewCreateOrConnectWithoutRevieweeInput[]>;
    create?: Nullable<ReviewCreateWithoutRevieweeInput[]>;
    createMany?: Nullable<ReviewCreateManyRevieweeInputEnvelope>;
    delete?: Nullable<ReviewWhereUniqueInput[]>;
    deleteMany?: Nullable<ReviewScalarWhereInput[]>;
    disconnect?: Nullable<ReviewWhereUniqueInput[]>;
    set?: Nullable<ReviewWhereUniqueInput[]>;
    update?: Nullable<ReviewUpdateWithWhereUniqueWithoutRevieweeInput[]>;
    updateMany?: Nullable<ReviewUpdateManyWithWhereWithoutRevieweeInput[]>;
    upsert?: Nullable<ReviewUpsertWithWhereUniqueWithoutRevieweeInput[]>;
}

export class ReviewUncheckedUpdateManyWithoutReviewsInput {
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    revieweeId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class ReviewUncheckedUpdateWithoutAuthorInput {
    comments?: Nullable<CommentUncheckedUpdateManyWithoutReviewInput>;
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    revieweeId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class ReviewUncheckedUpdateWithoutCommentsInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    revieweeId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class ReviewUncheckedUpdateWithoutRevieweeInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutReviewInput>;
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class ReviewUpdateInput {
    author?: Nullable<UserUpdateOneRequiredWithoutReviewsInput>;
    comments?: Nullable<CommentUpdateManyWithoutReviewInput>;
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    reviewee?: Nullable<UserUpdateOneRequiredWithoutReviewedInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class ReviewUpdateManyMutationInput {
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class ReviewUpdateManyWithWhereWithoutAuthorInput {
    data: ReviewUncheckedUpdateManyWithoutReviewsInput;
    where: ReviewScalarWhereInput;
}

export class ReviewUpdateManyWithWhereWithoutRevieweeInput {
    data: ReviewUncheckedUpdateManyWithoutReviewedInput;
    where: ReviewScalarWhereInput;
}

export class ReviewUpdateManyWithoutAuthorInput {
    connect?: Nullable<ReviewWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ReviewCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<ReviewCreateWithoutAuthorInput[]>;
    createMany?: Nullable<ReviewCreateManyAuthorInputEnvelope>;
    delete?: Nullable<ReviewWhereUniqueInput[]>;
    deleteMany?: Nullable<ReviewScalarWhereInput[]>;
    disconnect?: Nullable<ReviewWhereUniqueInput[]>;
    set?: Nullable<ReviewWhereUniqueInput[]>;
    update?: Nullable<ReviewUpdateWithWhereUniqueWithoutAuthorInput[]>;
    updateMany?: Nullable<ReviewUpdateManyWithWhereWithoutAuthorInput[]>;
    upsert?: Nullable<ReviewUpsertWithWhereUniqueWithoutAuthorInput[]>;
}

export class ReviewUpdateManyWithoutRevieweeInput {
    connect?: Nullable<ReviewWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ReviewCreateOrConnectWithoutRevieweeInput[]>;
    create?: Nullable<ReviewCreateWithoutRevieweeInput[]>;
    createMany?: Nullable<ReviewCreateManyRevieweeInputEnvelope>;
    delete?: Nullable<ReviewWhereUniqueInput[]>;
    deleteMany?: Nullable<ReviewScalarWhereInput[]>;
    disconnect?: Nullable<ReviewWhereUniqueInput[]>;
    set?: Nullable<ReviewWhereUniqueInput[]>;
    update?: Nullable<ReviewUpdateWithWhereUniqueWithoutRevieweeInput[]>;
    updateMany?: Nullable<ReviewUpdateManyWithWhereWithoutRevieweeInput[]>;
    upsert?: Nullable<ReviewUpsertWithWhereUniqueWithoutRevieweeInput[]>;
}

export class ReviewUpdateOneWithoutCommentsInput {
    connect?: Nullable<ReviewWhereUniqueInput>;
    connectOrCreate?: Nullable<ReviewCreateOrConnectWithoutCommentsInput>;
    create?: Nullable<ReviewUncheckedCreateWithoutCommentsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<ReviewUncheckedUpdateWithoutCommentsInput>;
    upsert?: Nullable<ReviewUpsertWithoutCommentsInput>;
}

export class ReviewUpdateWithWhereUniqueWithoutAuthorInput {
    data: ReviewUncheckedUpdateWithoutAuthorInput;
    where: ReviewWhereUniqueInput;
}

export class ReviewUpdateWithWhereUniqueWithoutRevieweeInput {
    data: ReviewUncheckedUpdateWithoutRevieweeInput;
    where: ReviewWhereUniqueInput;
}

export class ReviewUpdateWithoutAuthorInput {
    comments?: Nullable<CommentUpdateManyWithoutReviewInput>;
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    reviewee?: Nullable<UserUpdateOneRequiredWithoutReviewedInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class ReviewUpdateWithoutCommentsInput {
    author?: Nullable<UserUpdateOneRequiredWithoutReviewsInput>;
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    reviewee?: Nullable<UserUpdateOneRequiredWithoutReviewedInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class ReviewUpdateWithoutRevieweeInput {
    author?: Nullable<UserUpdateOneRequiredWithoutReviewsInput>;
    comments?: Nullable<CommentUpdateManyWithoutReviewInput>;
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class ReviewUpsertWithWhereUniqueWithoutAuthorInput {
    create: ReviewUncheckedCreateWithoutAuthorInput;
    update: ReviewUncheckedUpdateWithoutAuthorInput;
    where: ReviewWhereUniqueInput;
}

export class ReviewUpsertWithWhereUniqueWithoutRevieweeInput {
    create: ReviewUncheckedCreateWithoutRevieweeInput;
    update: ReviewUncheckedUpdateWithoutRevieweeInput;
    where: ReviewWhereUniqueInput;
}

export class ReviewUpsertWithoutCommentsInput {
    create: ReviewUncheckedCreateWithoutCommentsInput;
    update: ReviewUncheckedUpdateWithoutCommentsInput;
}

export class ReviewWhereInput {
    AND?: Nullable<ReviewWhereInput[]>;
    NOT?: Nullable<ReviewWhereInput[]>;
    OR?: Nullable<ReviewWhereInput[]>;
    author?: Nullable<UserWhereInput>;
    authorId?: Nullable<StringFilter>;
    comments?: Nullable<CommentListRelationFilter>;
    content?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    reviewee?: Nullable<UserWhereInput>;
    revieweeId?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
    value?: Nullable<IntFilter>;
}

export class ReviewWhereUniqueInput {
    id?: Nullable<string>;
}

export class SelcomDisbursementCreateInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId: string;
    transaction?: Nullable<TransactionCreateNestedOneWithoutSelcomDisbursementInput>;
    updatedAt?: Nullable<DateTime>;
    userId: number;
    utilitycode: SelcomUtilityCode;
    utilityref: string;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomDisbursementCreateManyInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId: string;
    updatedAt?: Nullable<DateTime>;
    userId: number;
    utilitycode: SelcomUtilityCode;
    utilityref: string;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomDisbursementCreateNestedOneWithoutTransactionInput {
    connect?: Nullable<SelcomDisbursementWhereUniqueInput>;
    connectOrCreate?: Nullable<SelcomDisbursementCreateOrConnectWithoutTransactionInput>;
    create?: Nullable<SelcomDisbursementUncheckedCreateWithoutTransactionInput>;
}

export class SelcomDisbursementCreateOrConnectWithoutTransactionInput {
    create: SelcomDisbursementUncheckedCreateWithoutTransactionInput;
    where: SelcomDisbursementWhereUniqueInput;
}

export class SelcomDisbursementCreateWithoutTransactionInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId: string;
    updatedAt?: Nullable<DateTime>;
    userId: number;
    utilitycode: SelcomUtilityCode;
    utilityref: string;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomDisbursementOrderByInput {
    amount?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    reference?: Nullable<SortOrder>;
    resultCode?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    status?: Nullable<SortOrder>;
    transId?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
    utilitycode?: Nullable<SortOrder>;
    utilityref?: Nullable<SortOrder>;
    validation?: Nullable<SortOrder>;
}

export class SelcomDisbursementRelationFilter {
    is?: Nullable<SelcomDisbursementWhereInput>;
    isNot?: Nullable<SelcomDisbursementWhereInput>;
}

export class SelcomDisbursementScalarWhereWithAggregatesInput {
    AND?: Nullable<SelcomDisbursementScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<SelcomDisbursementScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<SelcomDisbursementScalarWhereWithAggregatesInput[]>;
    amount?: Nullable<IntWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    reference?: Nullable<StringNullableWithAggregatesFilter>;
    resultCode?: Nullable<StringNullableWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    status?: Nullable<EnumSelcomPaymentStatusWithAggregatesFilter>;
    transId?: Nullable<StringWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
    userId?: Nullable<IntWithAggregatesFilter>;
    utilitycode?: Nullable<EnumSelcomUtilityCodeWithAggregatesFilter>;
    utilityref?: Nullable<StringWithAggregatesFilter>;
    validation?: Nullable<EnumSelcomPaymentStatusWithAggregatesFilter>;
}

export class SelcomDisbursementUncheckedCreateInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId: string;
    transaction?: Nullable<TransactionUncheckedCreateNestedOneWithoutSelcomDisbursementInput>;
    updatedAt?: Nullable<DateTime>;
    userId: number;
    utilitycode: SelcomUtilityCode;
    utilityref: string;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomDisbursementUncheckedCreateWithoutTransactionInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId: string;
    updatedAt?: Nullable<DateTime>;
    userId: number;
    utilitycode: SelcomUtilityCode;
    utilityref: string;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomDisbursementUncheckedUpdateInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    status?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    transaction?: Nullable<TransactionUncheckedUpdateOneWithoutSelcomDisbursementInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<IntFieldUpdateOperationsInput>;
    utilitycode?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    utilityref?: Nullable<StringFieldUpdateOperationsInput>;
    validation?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomDisbursementUncheckedUpdateManyInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    status?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<IntFieldUpdateOperationsInput>;
    utilitycode?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    utilityref?: Nullable<StringFieldUpdateOperationsInput>;
    validation?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomDisbursementUncheckedUpdateWithoutTransactionInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    status?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<IntFieldUpdateOperationsInput>;
    utilitycode?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    utilityref?: Nullable<StringFieldUpdateOperationsInput>;
    validation?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomDisbursementUpdateInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    status?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    transaction?: Nullable<TransactionUpdateOneWithoutSelcomDisbursementInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<IntFieldUpdateOperationsInput>;
    utilitycode?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    utilityref?: Nullable<StringFieldUpdateOperationsInput>;
    validation?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomDisbursementUpdateManyMutationInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    status?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<IntFieldUpdateOperationsInput>;
    utilitycode?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    utilityref?: Nullable<StringFieldUpdateOperationsInput>;
    validation?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomDisbursementUpdateOneWithoutTransactionInput {
    connect?: Nullable<SelcomDisbursementWhereUniqueInput>;
    connectOrCreate?: Nullable<SelcomDisbursementCreateOrConnectWithoutTransactionInput>;
    create?: Nullable<SelcomDisbursementUncheckedCreateWithoutTransactionInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<SelcomDisbursementUncheckedUpdateWithoutTransactionInput>;
    upsert?: Nullable<SelcomDisbursementUpsertWithoutTransactionInput>;
}

export class SelcomDisbursementUpdateWithoutTransactionInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    status?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<IntFieldUpdateOperationsInput>;
    utilitycode?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    utilityref?: Nullable<StringFieldUpdateOperationsInput>;
    validation?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomDisbursementUpsertWithoutTransactionInput {
    create: SelcomDisbursementUncheckedCreateWithoutTransactionInput;
    update: SelcomDisbursementUncheckedUpdateWithoutTransactionInput;
}

export class SelcomDisbursementWhereInput {
    AND?: Nullable<SelcomDisbursementWhereInput[]>;
    NOT?: Nullable<SelcomDisbursementWhereInput[]>;
    OR?: Nullable<SelcomDisbursementWhereInput[]>;
    amount?: Nullable<IntFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    reference?: Nullable<StringNullableFilter>;
    resultCode?: Nullable<StringNullableFilter>;
    state?: Nullable<EnumStateFilter>;
    status?: Nullable<EnumSelcomPaymentStatusFilter>;
    transId?: Nullable<StringFilter>;
    transaction?: Nullable<TransactionWhereInput>;
    updatedAt?: Nullable<DateTimeFilter>;
    userId?: Nullable<IntFilter>;
    utilitycode?: Nullable<EnumSelcomUtilityCodeFilter>;
    utilityref?: Nullable<StringFilter>;
    validation?: Nullable<EnumSelcomPaymentStatusFilter>;
}

export class SelcomDisbursementWhereUniqueInput {
    id?: Nullable<string>;
}

export class SelcomPaymentCreateInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    msisdn: string;
    operator?: Nullable<string>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId: string;
    transaction?: Nullable<TransactionCreateNestedOneWithoutSelcomPaymentInput>;
    updatedAt?: Nullable<DateTime>;
    utilityref: number;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomPaymentCreateManyInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    msisdn: string;
    operator?: Nullable<string>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId: string;
    updatedAt?: Nullable<DateTime>;
    utilityref: number;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomPaymentCreateNestedOneWithoutTransactionInput {
    connect?: Nullable<SelcomPaymentWhereUniqueInput>;
    connectOrCreate?: Nullable<SelcomPaymentCreateOrConnectWithoutTransactionInput>;
    create?: Nullable<SelcomPaymentUncheckedCreateWithoutTransactionInput>;
}

export class SelcomPaymentCreateOrConnectWithoutTransactionInput {
    create: SelcomPaymentUncheckedCreateWithoutTransactionInput;
    where: SelcomPaymentWhereUniqueInput;
}

export class SelcomPaymentCreateWithoutTransactionInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    msisdn: string;
    operator?: Nullable<string>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId: string;
    updatedAt?: Nullable<DateTime>;
    utilityref: number;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomPaymentOrderByInput {
    amount?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    msisdn?: Nullable<SortOrder>;
    operator?: Nullable<SortOrder>;
    reference?: Nullable<SortOrder>;
    resultCode?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    status?: Nullable<SortOrder>;
    transId?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    utilityref?: Nullable<SortOrder>;
    validation?: Nullable<SortOrder>;
}

export class SelcomPaymentRelationFilter {
    is?: Nullable<SelcomPaymentWhereInput>;
    isNot?: Nullable<SelcomPaymentWhereInput>;
}

export class SelcomPaymentScalarWhereWithAggregatesInput {
    AND?: Nullable<SelcomPaymentScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<SelcomPaymentScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<SelcomPaymentScalarWhereWithAggregatesInput[]>;
    amount?: Nullable<IntWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    msisdn?: Nullable<StringWithAggregatesFilter>;
    operator?: Nullable<StringNullableWithAggregatesFilter>;
    reference?: Nullable<StringNullableWithAggregatesFilter>;
    resultCode?: Nullable<StringNullableWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    status?: Nullable<EnumSelcomPaymentStatusWithAggregatesFilter>;
    transId?: Nullable<StringWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
    utilityref?: Nullable<IntWithAggregatesFilter>;
    validation?: Nullable<EnumSelcomPaymentStatusWithAggregatesFilter>;
}

export class SelcomPaymentUncheckedCreateInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    msisdn: string;
    operator?: Nullable<string>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId: string;
    transaction?: Nullable<TransactionUncheckedCreateNestedOneWithoutSelcomPaymentInput>;
    updatedAt?: Nullable<DateTime>;
    utilityref: number;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomPaymentUncheckedCreateWithoutTransactionInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    msisdn: string;
    operator?: Nullable<string>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId: string;
    updatedAt?: Nullable<DateTime>;
    utilityref: number;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomPaymentUncheckedUpdateInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    msisdn?: Nullable<StringFieldUpdateOperationsInput>;
    operator?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    status?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    transaction?: Nullable<TransactionUncheckedUpdateOneWithoutSelcomPaymentInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    utilityref?: Nullable<IntFieldUpdateOperationsInput>;
    validation?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomPaymentUncheckedUpdateManyInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    msisdn?: Nullable<StringFieldUpdateOperationsInput>;
    operator?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    status?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    utilityref?: Nullable<IntFieldUpdateOperationsInput>;
    validation?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomPaymentUncheckedUpdateWithoutTransactionInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    msisdn?: Nullable<StringFieldUpdateOperationsInput>;
    operator?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    status?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    utilityref?: Nullable<IntFieldUpdateOperationsInput>;
    validation?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomPaymentUpdateInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    msisdn?: Nullable<StringFieldUpdateOperationsInput>;
    operator?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    status?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    transaction?: Nullable<TransactionUpdateOneWithoutSelcomPaymentInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    utilityref?: Nullable<IntFieldUpdateOperationsInput>;
    validation?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomPaymentUpdateManyMutationInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    msisdn?: Nullable<StringFieldUpdateOperationsInput>;
    operator?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    status?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    utilityref?: Nullable<IntFieldUpdateOperationsInput>;
    validation?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomPaymentUpdateOneWithoutTransactionInput {
    connect?: Nullable<SelcomPaymentWhereUniqueInput>;
    connectOrCreate?: Nullable<SelcomPaymentCreateOrConnectWithoutTransactionInput>;
    create?: Nullable<SelcomPaymentUncheckedCreateWithoutTransactionInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<SelcomPaymentUncheckedUpdateWithoutTransactionInput>;
    upsert?: Nullable<SelcomPaymentUpsertWithoutTransactionInput>;
}

export class SelcomPaymentUpdateWithoutTransactionInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    msisdn?: Nullable<StringFieldUpdateOperationsInput>;
    operator?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    status?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    utilityref?: Nullable<IntFieldUpdateOperationsInput>;
    validation?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomPaymentUpsertWithoutTransactionInput {
    create: SelcomPaymentUncheckedCreateWithoutTransactionInput;
    update: SelcomPaymentUncheckedUpdateWithoutTransactionInput;
}

export class SelcomPaymentWhereInput {
    AND?: Nullable<SelcomPaymentWhereInput[]>;
    NOT?: Nullable<SelcomPaymentWhereInput[]>;
    OR?: Nullable<SelcomPaymentWhereInput[]>;
    amount?: Nullable<IntFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    msisdn?: Nullable<StringFilter>;
    operator?: Nullable<StringNullableFilter>;
    reference?: Nullable<StringNullableFilter>;
    resultCode?: Nullable<StringNullableFilter>;
    state?: Nullable<EnumStateFilter>;
    status?: Nullable<EnumSelcomPaymentStatusFilter>;
    transId?: Nullable<StringFilter>;
    transaction?: Nullable<TransactionWhereInput>;
    updatedAt?: Nullable<DateTimeFilter>;
    utilityref?: Nullable<IntFilter>;
    validation?: Nullable<EnumSelcomPaymentStatusFilter>;
}

export class SelcomPaymentWhereUniqueInput {
    id?: Nullable<string>;
}

export class ServiceCreateInput {
    author: UserCreateNestedOneWithoutServicesInput;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    image?: Nullable<AttachmentCreateNestedOneWithoutServicesInput>;
    name: string;
    orders?: Nullable<OrderCreateNestedManyWithoutServiceInput>;
    price: number;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCreateManyAuthorInput {
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId?: Nullable<string>;
    name: string;
    price: number;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCreateManyAuthorInputEnvelope {
    data: ServiceCreateManyAuthorInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class ServiceCreateManyImageInput {
    authorId: string;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    price: number;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCreateManyImageInputEnvelope {
    data: ServiceCreateManyImageInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class ServiceCreateManyInput {
    authorId: string;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId?: Nullable<string>;
    name: string;
    price: number;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCreateNestedManyWithoutAuthorInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<ServiceCreateWithoutAuthorInput[]>;
    createMany?: Nullable<ServiceCreateManyAuthorInputEnvelope>;
}

export class ServiceCreateNestedManyWithoutImageInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutImageInput[]>;
    create?: Nullable<ServiceCreateWithoutImageInput[]>;
    createMany?: Nullable<ServiceCreateManyImageInputEnvelope>;
}

export class ServiceCreateNestedOneWithoutOrdersInput {
    connect?: Nullable<ServiceWhereUniqueInput>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutOrdersInput>;
    create?: Nullable<ServiceUncheckedCreateWithoutOrdersInput>;
}

export class ServiceCreateOrConnectWithoutAuthorInput {
    create: ServiceUncheckedCreateWithoutAuthorInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceCreateOrConnectWithoutImageInput {
    create: ServiceUncheckedCreateWithoutImageInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceCreateOrConnectWithoutOrdersInput {
    create: ServiceUncheckedCreateWithoutOrdersInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceCreateWithoutAuthorInput {
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    image?: Nullable<AttachmentCreateNestedOneWithoutServicesInput>;
    name: string;
    orders?: Nullable<OrderCreateNestedManyWithoutServiceInput>;
    price: number;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCreateWithoutImageInput {
    author: UserCreateNestedOneWithoutServicesInput;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    orders?: Nullable<OrderCreateNestedManyWithoutServiceInput>;
    price: number;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCreateWithoutOrdersInput {
    author: UserCreateNestedOneWithoutServicesInput;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    image?: Nullable<AttachmentCreateNestedOneWithoutServicesInput>;
    name: string;
    price: number;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceListRelationFilter {
    every?: Nullable<ServiceWhereInput>;
    none?: Nullable<ServiceWhereInput>;
    some?: Nullable<ServiceWhereInput>;
}

export class ServiceOrderByInput {
    authorId?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    currency?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    imageId?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    price?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class ServiceRelationFilter {
    is?: Nullable<ServiceWhereInput>;
    isNot?: Nullable<ServiceWhereInput>;
}

export class ServiceScalarWhereInput {
    AND?: Nullable<ServiceScalarWhereInput[]>;
    NOT?: Nullable<ServiceScalarWhereInput[]>;
    OR?: Nullable<ServiceScalarWhereInput[]>;
    authorId?: Nullable<StringFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    currency?: Nullable<StringFilter>;
    description?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    imageId?: Nullable<StringNullableFilter>;
    name?: Nullable<StringFilter>;
    price?: Nullable<FloatFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class ServiceScalarWhereWithAggregatesInput {
    AND?: Nullable<ServiceScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<ServiceScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<ServiceScalarWhereWithAggregatesInput[]>;
    authorId?: Nullable<StringWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    currency?: Nullable<StringWithAggregatesFilter>;
    description?: Nullable<StringNullableWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    imageId?: Nullable<StringNullableWithAggregatesFilter>;
    name?: Nullable<StringWithAggregatesFilter>;
    price?: Nullable<FloatWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class ServiceUncheckedCreateInput {
    authorId: string;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId?: Nullable<string>;
    name: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutServiceInput>;
    price: number;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceUncheckedCreateNestedManyWithoutAuthorInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<ServiceCreateWithoutAuthorInput[]>;
    createMany?: Nullable<ServiceCreateManyAuthorInputEnvelope>;
}

export class ServiceUncheckedCreateNestedManyWithoutImageInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutImageInput[]>;
    create?: Nullable<ServiceCreateWithoutImageInput[]>;
    createMany?: Nullable<ServiceCreateManyImageInputEnvelope>;
}

export class ServiceUncheckedCreateWithoutAuthorInput {
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId?: Nullable<string>;
    name: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutServiceInput>;
    price: number;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceUncheckedCreateWithoutImageInput {
    authorId: string;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutServiceInput>;
    price: number;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceUncheckedCreateWithoutOrdersInput {
    authorId: string;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId?: Nullable<string>;
    name: string;
    price: number;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceUncheckedUpdateInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    imageId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutServiceInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUncheckedUpdateManyInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    imageId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUncheckedUpdateManyWithoutAuthorInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<ServiceCreateWithoutAuthorInput[]>;
    createMany?: Nullable<ServiceCreateManyAuthorInputEnvelope>;
    delete?: Nullable<ServiceWhereUniqueInput[]>;
    deleteMany?: Nullable<ServiceScalarWhereInput[]>;
    disconnect?: Nullable<ServiceWhereUniqueInput[]>;
    set?: Nullable<ServiceWhereUniqueInput[]>;
    update?: Nullable<ServiceUpdateWithWhereUniqueWithoutAuthorInput[]>;
    updateMany?: Nullable<ServiceUpdateManyWithWhereWithoutAuthorInput[]>;
    upsert?: Nullable<ServiceUpsertWithWhereUniqueWithoutAuthorInput[]>;
}

export class ServiceUncheckedUpdateManyWithoutImageInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutImageInput[]>;
    create?: Nullable<ServiceCreateWithoutImageInput[]>;
    createMany?: Nullable<ServiceCreateManyImageInputEnvelope>;
    delete?: Nullable<ServiceWhereUniqueInput[]>;
    deleteMany?: Nullable<ServiceScalarWhereInput[]>;
    disconnect?: Nullable<ServiceWhereUniqueInput[]>;
    set?: Nullable<ServiceWhereUniqueInput[]>;
    update?: Nullable<ServiceUpdateWithWhereUniqueWithoutImageInput[]>;
    updateMany?: Nullable<ServiceUpdateManyWithWhereWithoutImageInput[]>;
    upsert?: Nullable<ServiceUpsertWithWhereUniqueWithoutImageInput[]>;
}

export class ServiceUncheckedUpdateManyWithoutServicesInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    imageId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUncheckedUpdateWithoutAuthorInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    imageId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutServiceInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUncheckedUpdateWithoutImageInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutServiceInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUncheckedUpdateWithoutOrdersInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    imageId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUpdateInput {
    author?: Nullable<UserUpdateOneRequiredWithoutServicesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    image?: Nullable<AttachmentUpdateOneWithoutServicesInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutServiceInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUpdateManyWithWhereWithoutAuthorInput {
    data: ServiceUncheckedUpdateManyWithoutServicesInput;
    where: ServiceScalarWhereInput;
}

export class ServiceUpdateManyWithWhereWithoutImageInput {
    data: ServiceUncheckedUpdateManyWithoutServicesInput;
    where: ServiceScalarWhereInput;
}

export class ServiceUpdateManyWithoutAuthorInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<ServiceCreateWithoutAuthorInput[]>;
    createMany?: Nullable<ServiceCreateManyAuthorInputEnvelope>;
    delete?: Nullable<ServiceWhereUniqueInput[]>;
    deleteMany?: Nullable<ServiceScalarWhereInput[]>;
    disconnect?: Nullable<ServiceWhereUniqueInput[]>;
    set?: Nullable<ServiceWhereUniqueInput[]>;
    update?: Nullable<ServiceUpdateWithWhereUniqueWithoutAuthorInput[]>;
    updateMany?: Nullable<ServiceUpdateManyWithWhereWithoutAuthorInput[]>;
    upsert?: Nullable<ServiceUpsertWithWhereUniqueWithoutAuthorInput[]>;
}

export class ServiceUpdateManyWithoutImageInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutImageInput[]>;
    create?: Nullable<ServiceCreateWithoutImageInput[]>;
    createMany?: Nullable<ServiceCreateManyImageInputEnvelope>;
    delete?: Nullable<ServiceWhereUniqueInput[]>;
    deleteMany?: Nullable<ServiceScalarWhereInput[]>;
    disconnect?: Nullable<ServiceWhereUniqueInput[]>;
    set?: Nullable<ServiceWhereUniqueInput[]>;
    update?: Nullable<ServiceUpdateWithWhereUniqueWithoutImageInput[]>;
    updateMany?: Nullable<ServiceUpdateManyWithWhereWithoutImageInput[]>;
    upsert?: Nullable<ServiceUpsertWithWhereUniqueWithoutImageInput[]>;
}

export class ServiceUpdateOneRequiredWithoutOrdersInput {
    connect?: Nullable<ServiceWhereUniqueInput>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutOrdersInput>;
    create?: Nullable<ServiceUncheckedCreateWithoutOrdersInput>;
    update?: Nullable<ServiceUncheckedUpdateWithoutOrdersInput>;
    upsert?: Nullable<ServiceUpsertWithoutOrdersInput>;
}

export class ServiceUpdateWithWhereUniqueWithoutAuthorInput {
    data: ServiceUncheckedUpdateWithoutAuthorInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceUpdateWithWhereUniqueWithoutImageInput {
    data: ServiceUncheckedUpdateWithoutImageInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceUpdateWithoutAuthorInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    image?: Nullable<AttachmentUpdateOneWithoutServicesInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutServiceInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUpdateWithoutImageInput {
    author?: Nullable<UserUpdateOneRequiredWithoutServicesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutServiceInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUpdateWithoutOrdersInput {
    author?: Nullable<UserUpdateOneRequiredWithoutServicesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    image?: Nullable<AttachmentUpdateOneWithoutServicesInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUpsertWithWhereUniqueWithoutAuthorInput {
    create: ServiceUncheckedCreateWithoutAuthorInput;
    update: ServiceUncheckedUpdateWithoutAuthorInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceUpsertWithWhereUniqueWithoutImageInput {
    create: ServiceUncheckedCreateWithoutImageInput;
    update: ServiceUncheckedUpdateWithoutImageInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceUpsertWithoutOrdersInput {
    create: ServiceUncheckedCreateWithoutOrdersInput;
    update: ServiceUncheckedUpdateWithoutOrdersInput;
}

export class ServiceWhereInput {
    AND?: Nullable<ServiceWhereInput[]>;
    NOT?: Nullable<ServiceWhereInput[]>;
    OR?: Nullable<ServiceWhereInput[]>;
    author?: Nullable<UserWhereInput>;
    authorId?: Nullable<StringFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    currency?: Nullable<StringFilter>;
    description?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    image?: Nullable<AttachmentWhereInput>;
    imageId?: Nullable<StringNullableFilter>;
    name?: Nullable<StringFilter>;
    orders?: Nullable<OrderListRelationFilter>;
    price?: Nullable<FloatFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class ServiceWhereUniqueInput {
    id?: Nullable<string>;
}

export class SignupInput {
    avator?: Nullable<Upload>;
    dateOfBirth?: Nullable<DateTime>;
    displayName: string;
    email: string;
    password: string;
    phoneNumber?: Nullable<string>;
}

export class StringFieldUpdateOperationsInput {
    set?: Nullable<string>;
}

export class StringFilter {
    contains?: Nullable<string>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    mode?: Nullable<QueryMode>;
    not?: Nullable<NestedStringFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class StringNullableFilter {
    contains?: Nullable<string>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    mode?: Nullable<QueryMode>;
    not?: Nullable<NestedStringNullableFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class StringNullableWithAggregatesFilter {
    _count?: Nullable<NestedIntNullableFilter>;
    _max?: Nullable<NestedStringNullableFilter>;
    _min?: Nullable<NestedStringNullableFilter>;
    contains?: Nullable<string>;
    count?: Nullable<NestedIntNullableFilter>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    max?: Nullable<NestedStringNullableFilter>;
    min?: Nullable<NestedStringNullableFilter>;
    mode?: Nullable<QueryMode>;
    not?: Nullable<NestedStringNullableWithAggregatesFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class StringWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedStringFilter>;
    _min?: Nullable<NestedStringFilter>;
    contains?: Nullable<string>;
    count?: Nullable<NestedIntFilter>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    max?: Nullable<NestedStringFilter>;
    min?: Nullable<NestedStringFilter>;
    mode?: Nullable<QueryMode>;
    not?: Nullable<NestedStringWithAggregatesFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class TransactionCreateInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPayment?: Nullable<MpesaPaymentCreateNestedOneWithoutTransactionInput>;
    order: OrderCreateNestedOneWithoutTransactionsInput;
    paymentMethod: PaymentMethodCreateNestedOneWithoutTransactionsInput;
    selcomDisbursement?: Nullable<SelcomDisbursementCreateNestedOneWithoutTransactionInput>;
    selcomPayment?: Nullable<SelcomPaymentCreateNestedOneWithoutTransactionInput>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionCreateManyInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPaymentId?: Nullable<string>;
    orderId: string;
    paymentMethodId: string;
    selcomDisbursementId?: Nullable<string>;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionCreateManyOrderInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPaymentId?: Nullable<string>;
    paymentMethodId: string;
    selcomDisbursementId?: Nullable<string>;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionCreateManyOrderInputEnvelope {
    data: TransactionCreateManyOrderInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class TransactionCreateManyPaymentMethodInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPaymentId?: Nullable<string>;
    orderId: string;
    selcomDisbursementId?: Nullable<string>;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionCreateManyPaymentMethodInputEnvelope {
    data: TransactionCreateManyPaymentMethodInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class TransactionCreateNestedManyWithoutOrderInput {
    connect?: Nullable<TransactionWhereUniqueInput[]>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutOrderInput[]>;
    create?: Nullable<TransactionCreateWithoutOrderInput[]>;
    createMany?: Nullable<TransactionCreateManyOrderInputEnvelope>;
}

export class TransactionCreateNestedManyWithoutPaymentMethodInput {
    connect?: Nullable<TransactionWhereUniqueInput[]>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutPaymentMethodInput[]>;
    create?: Nullable<TransactionCreateWithoutPaymentMethodInput[]>;
    createMany?: Nullable<TransactionCreateManyPaymentMethodInputEnvelope>;
}

export class TransactionCreateNestedOneWithoutMpesaPaymentInput {
    connect?: Nullable<TransactionWhereUniqueInput>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutMpesaPaymentInput>;
    create?: Nullable<TransactionUncheckedCreateWithoutMpesaPaymentInput>;
}

export class TransactionCreateNestedOneWithoutSelcomDisbursementInput {
    connect?: Nullable<TransactionWhereUniqueInput>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutSelcomDisbursementInput>;
    create?: Nullable<TransactionUncheckedCreateWithoutSelcomDisbursementInput>;
}

export class TransactionCreateNestedOneWithoutSelcomPaymentInput {
    connect?: Nullable<TransactionWhereUniqueInput>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutSelcomPaymentInput>;
    create?: Nullable<TransactionUncheckedCreateWithoutSelcomPaymentInput>;
}

export class TransactionCreateOrConnectWithoutMpesaPaymentInput {
    create: TransactionUncheckedCreateWithoutMpesaPaymentInput;
    where: TransactionWhereUniqueInput;
}

export class TransactionCreateOrConnectWithoutOrderInput {
    create: TransactionUncheckedCreateWithoutOrderInput;
    where: TransactionWhereUniqueInput;
}

export class TransactionCreateOrConnectWithoutPaymentMethodInput {
    create: TransactionUncheckedCreateWithoutPaymentMethodInput;
    where: TransactionWhereUniqueInput;
}

export class TransactionCreateOrConnectWithoutSelcomDisbursementInput {
    create: TransactionUncheckedCreateWithoutSelcomDisbursementInput;
    where: TransactionWhereUniqueInput;
}

export class TransactionCreateOrConnectWithoutSelcomPaymentInput {
    create: TransactionUncheckedCreateWithoutSelcomPaymentInput;
    where: TransactionWhereUniqueInput;
}

export class TransactionCreateWithoutMpesaPaymentInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    order: OrderCreateNestedOneWithoutTransactionsInput;
    paymentMethod: PaymentMethodCreateNestedOneWithoutTransactionsInput;
    selcomDisbursement?: Nullable<SelcomDisbursementCreateNestedOneWithoutTransactionInput>;
    selcomPayment?: Nullable<SelcomPaymentCreateNestedOneWithoutTransactionInput>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionCreateWithoutOrderInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPayment?: Nullable<MpesaPaymentCreateNestedOneWithoutTransactionInput>;
    paymentMethod: PaymentMethodCreateNestedOneWithoutTransactionsInput;
    selcomDisbursement?: Nullable<SelcomDisbursementCreateNestedOneWithoutTransactionInput>;
    selcomPayment?: Nullable<SelcomPaymentCreateNestedOneWithoutTransactionInput>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionCreateWithoutPaymentMethodInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPayment?: Nullable<MpesaPaymentCreateNestedOneWithoutTransactionInput>;
    order: OrderCreateNestedOneWithoutTransactionsInput;
    selcomDisbursement?: Nullable<SelcomDisbursementCreateNestedOneWithoutTransactionInput>;
    selcomPayment?: Nullable<SelcomPaymentCreateNestedOneWithoutTransactionInput>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionCreateWithoutSelcomDisbursementInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPayment?: Nullable<MpesaPaymentCreateNestedOneWithoutTransactionInput>;
    order: OrderCreateNestedOneWithoutTransactionsInput;
    paymentMethod: PaymentMethodCreateNestedOneWithoutTransactionsInput;
    selcomPayment?: Nullable<SelcomPaymentCreateNestedOneWithoutTransactionInput>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionCreateWithoutSelcomPaymentInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPayment?: Nullable<MpesaPaymentCreateNestedOneWithoutTransactionInput>;
    order: OrderCreateNestedOneWithoutTransactionsInput;
    paymentMethod: PaymentMethodCreateNestedOneWithoutTransactionsInput;
    selcomDisbursement?: Nullable<SelcomDisbursementCreateNestedOneWithoutTransactionInput>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionListRelationFilter {
    every?: Nullable<TransactionWhereInput>;
    none?: Nullable<TransactionWhereInput>;
    some?: Nullable<TransactionWhereInput>;
}

export class TransactionOrderByInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    mpesaPaymentId?: Nullable<SortOrder>;
    orderId?: Nullable<SortOrder>;
    paymentMethodId?: Nullable<SortOrder>;
    selcomDisbursementId?: Nullable<SortOrder>;
    selcomPaymentId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    type?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class TransactionRelationFilter {
    is?: Nullable<TransactionWhereInput>;
    isNot?: Nullable<TransactionWhereInput>;
}

export class TransactionScalarWhereInput {
    AND?: Nullable<TransactionScalarWhereInput[]>;
    NOT?: Nullable<TransactionScalarWhereInput[]>;
    OR?: Nullable<TransactionScalarWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    mpesaPaymentId?: Nullable<StringNullableFilter>;
    orderId?: Nullable<StringFilter>;
    paymentMethodId?: Nullable<StringFilter>;
    selcomDisbursementId?: Nullable<StringNullableFilter>;
    selcomPaymentId?: Nullable<StringNullableFilter>;
    state?: Nullable<EnumStateFilter>;
    type?: Nullable<EnumTransactionTypeFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class TransactionScalarWhereWithAggregatesInput {
    AND?: Nullable<TransactionScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<TransactionScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<TransactionScalarWhereWithAggregatesInput[]>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    mpesaPaymentId?: Nullable<StringNullableWithAggregatesFilter>;
    orderId?: Nullable<StringWithAggregatesFilter>;
    paymentMethodId?: Nullable<StringWithAggregatesFilter>;
    selcomDisbursementId?: Nullable<StringNullableWithAggregatesFilter>;
    selcomPaymentId?: Nullable<StringNullableWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    type?: Nullable<EnumTransactionTypeWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class TransactionUncheckedCreateInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPaymentId?: Nullable<string>;
    orderId: string;
    paymentMethodId: string;
    selcomDisbursementId?: Nullable<string>;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionUncheckedCreateNestedManyWithoutOrderInput {
    connect?: Nullable<TransactionWhereUniqueInput[]>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutOrderInput[]>;
    create?: Nullable<TransactionCreateWithoutOrderInput[]>;
    createMany?: Nullable<TransactionCreateManyOrderInputEnvelope>;
}

export class TransactionUncheckedCreateNestedManyWithoutPaymentMethodInput {
    connect?: Nullable<TransactionWhereUniqueInput[]>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutPaymentMethodInput[]>;
    create?: Nullable<TransactionCreateWithoutPaymentMethodInput[]>;
    createMany?: Nullable<TransactionCreateManyPaymentMethodInputEnvelope>;
}

export class TransactionUncheckedCreateNestedOneWithoutMpesaPaymentInput {
    connect?: Nullable<TransactionWhereUniqueInput>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutMpesaPaymentInput>;
    create?: Nullable<TransactionUncheckedCreateWithoutMpesaPaymentInput>;
}

export class TransactionUncheckedCreateNestedOneWithoutSelcomDisbursementInput {
    connect?: Nullable<TransactionWhereUniqueInput>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutSelcomDisbursementInput>;
    create?: Nullable<TransactionUncheckedCreateWithoutSelcomDisbursementInput>;
}

export class TransactionUncheckedCreateNestedOneWithoutSelcomPaymentInput {
    connect?: Nullable<TransactionWhereUniqueInput>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutSelcomPaymentInput>;
    create?: Nullable<TransactionUncheckedCreateWithoutSelcomPaymentInput>;
}

export class TransactionUncheckedCreateWithoutMpesaPaymentInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orderId: string;
    paymentMethodId: string;
    selcomDisbursementId?: Nullable<string>;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionUncheckedCreateWithoutOrderInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPaymentId?: Nullable<string>;
    paymentMethodId: string;
    selcomDisbursementId?: Nullable<string>;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionUncheckedCreateWithoutPaymentMethodInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPaymentId?: Nullable<string>;
    orderId: string;
    selcomDisbursementId?: Nullable<string>;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionUncheckedCreateWithoutSelcomDisbursementInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPaymentId?: Nullable<string>;
    orderId: string;
    paymentMethodId: string;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionUncheckedCreateWithoutSelcomPaymentInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPaymentId?: Nullable<string>;
    orderId: string;
    paymentMethodId: string;
    selcomDisbursementId?: Nullable<string>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionUncheckedUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderId?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethodId?: Nullable<StringFieldUpdateOperationsInput>;
    selcomDisbursementId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    selcomPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUncheckedUpdateManyInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderId?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethodId?: Nullable<StringFieldUpdateOperationsInput>;
    selcomDisbursementId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    selcomPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUncheckedUpdateManyWithoutOrderInput {
    connect?: Nullable<TransactionWhereUniqueInput[]>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutOrderInput[]>;
    create?: Nullable<TransactionCreateWithoutOrderInput[]>;
    createMany?: Nullable<TransactionCreateManyOrderInputEnvelope>;
    delete?: Nullable<TransactionWhereUniqueInput[]>;
    deleteMany?: Nullable<TransactionScalarWhereInput[]>;
    disconnect?: Nullable<TransactionWhereUniqueInput[]>;
    set?: Nullable<TransactionWhereUniqueInput[]>;
    update?: Nullable<TransactionUpdateWithWhereUniqueWithoutOrderInput[]>;
    updateMany?: Nullable<TransactionUpdateManyWithWhereWithoutOrderInput[]>;
    upsert?: Nullable<TransactionUpsertWithWhereUniqueWithoutOrderInput[]>;
}

export class TransactionUncheckedUpdateManyWithoutPaymentMethodInput {
    connect?: Nullable<TransactionWhereUniqueInput[]>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutPaymentMethodInput[]>;
    create?: Nullable<TransactionCreateWithoutPaymentMethodInput[]>;
    createMany?: Nullable<TransactionCreateManyPaymentMethodInputEnvelope>;
    delete?: Nullable<TransactionWhereUniqueInput[]>;
    deleteMany?: Nullable<TransactionScalarWhereInput[]>;
    disconnect?: Nullable<TransactionWhereUniqueInput[]>;
    set?: Nullable<TransactionWhereUniqueInput[]>;
    update?: Nullable<TransactionUpdateWithWhereUniqueWithoutPaymentMethodInput[]>;
    updateMany?: Nullable<TransactionUpdateManyWithWhereWithoutPaymentMethodInput[]>;
    upsert?: Nullable<TransactionUpsertWithWhereUniqueWithoutPaymentMethodInput[]>;
}

export class TransactionUncheckedUpdateManyWithoutTransactionsInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    paymentMethodId?: Nullable<StringFieldUpdateOperationsInput>;
    selcomDisbursementId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    selcomPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUncheckedUpdateOneWithoutMpesaPaymentInput {
    connect?: Nullable<TransactionWhereUniqueInput>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutMpesaPaymentInput>;
    create?: Nullable<TransactionUncheckedCreateWithoutMpesaPaymentInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<TransactionUncheckedUpdateWithoutMpesaPaymentInput>;
    upsert?: Nullable<TransactionUpsertWithoutMpesaPaymentInput>;
}

export class TransactionUncheckedUpdateOneWithoutSelcomDisbursementInput {
    connect?: Nullable<TransactionWhereUniqueInput>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutSelcomDisbursementInput>;
    create?: Nullable<TransactionUncheckedCreateWithoutSelcomDisbursementInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<TransactionUncheckedUpdateWithoutSelcomDisbursementInput>;
    upsert?: Nullable<TransactionUpsertWithoutSelcomDisbursementInput>;
}

export class TransactionUncheckedUpdateOneWithoutSelcomPaymentInput {
    connect?: Nullable<TransactionWhereUniqueInput>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutSelcomPaymentInput>;
    create?: Nullable<TransactionUncheckedCreateWithoutSelcomPaymentInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<TransactionUncheckedUpdateWithoutSelcomPaymentInput>;
    upsert?: Nullable<TransactionUpsertWithoutSelcomPaymentInput>;
}

export class TransactionUncheckedUpdateWithoutMpesaPaymentInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orderId?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethodId?: Nullable<StringFieldUpdateOperationsInput>;
    selcomDisbursementId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    selcomPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUncheckedUpdateWithoutOrderInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    paymentMethodId?: Nullable<StringFieldUpdateOperationsInput>;
    selcomDisbursementId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    selcomPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUncheckedUpdateWithoutPaymentMethodInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderId?: Nullable<StringFieldUpdateOperationsInput>;
    selcomDisbursementId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    selcomPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUncheckedUpdateWithoutSelcomDisbursementInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderId?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethodId?: Nullable<StringFieldUpdateOperationsInput>;
    selcomPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUncheckedUpdateWithoutSelcomPaymentInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderId?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethodId?: Nullable<StringFieldUpdateOperationsInput>;
    selcomDisbursementId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPayment?: Nullable<MpesaPaymentUpdateOneWithoutTransactionInput>;
    order?: Nullable<OrderUpdateOneRequiredWithoutTransactionsInput>;
    paymentMethod?: Nullable<PaymentMethodUpdateOneRequiredWithoutTransactionsInput>;
    selcomDisbursement?: Nullable<SelcomDisbursementUpdateOneWithoutTransactionInput>;
    selcomPayment?: Nullable<SelcomPaymentUpdateOneWithoutTransactionInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUpdateManyWithWhereWithoutOrderInput {
    data: TransactionUncheckedUpdateManyWithoutTransactionsInput;
    where: TransactionScalarWhereInput;
}

export class TransactionUpdateManyWithWhereWithoutPaymentMethodInput {
    data: TransactionUncheckedUpdateManyWithoutTransactionsInput;
    where: TransactionScalarWhereInput;
}

export class TransactionUpdateManyWithoutOrderInput {
    connect?: Nullable<TransactionWhereUniqueInput[]>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutOrderInput[]>;
    create?: Nullable<TransactionCreateWithoutOrderInput[]>;
    createMany?: Nullable<TransactionCreateManyOrderInputEnvelope>;
    delete?: Nullable<TransactionWhereUniqueInput[]>;
    deleteMany?: Nullable<TransactionScalarWhereInput[]>;
    disconnect?: Nullable<TransactionWhereUniqueInput[]>;
    set?: Nullable<TransactionWhereUniqueInput[]>;
    update?: Nullable<TransactionUpdateWithWhereUniqueWithoutOrderInput[]>;
    updateMany?: Nullable<TransactionUpdateManyWithWhereWithoutOrderInput[]>;
    upsert?: Nullable<TransactionUpsertWithWhereUniqueWithoutOrderInput[]>;
}

export class TransactionUpdateManyWithoutPaymentMethodInput {
    connect?: Nullable<TransactionWhereUniqueInput[]>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutPaymentMethodInput[]>;
    create?: Nullable<TransactionCreateWithoutPaymentMethodInput[]>;
    createMany?: Nullable<TransactionCreateManyPaymentMethodInputEnvelope>;
    delete?: Nullable<TransactionWhereUniqueInput[]>;
    deleteMany?: Nullable<TransactionScalarWhereInput[]>;
    disconnect?: Nullable<TransactionWhereUniqueInput[]>;
    set?: Nullable<TransactionWhereUniqueInput[]>;
    update?: Nullable<TransactionUpdateWithWhereUniqueWithoutPaymentMethodInput[]>;
    updateMany?: Nullable<TransactionUpdateManyWithWhereWithoutPaymentMethodInput[]>;
    upsert?: Nullable<TransactionUpsertWithWhereUniqueWithoutPaymentMethodInput[]>;
}

export class TransactionUpdateOneWithoutMpesaPaymentInput {
    connect?: Nullable<TransactionWhereUniqueInput>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutMpesaPaymentInput>;
    create?: Nullable<TransactionUncheckedCreateWithoutMpesaPaymentInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<TransactionUncheckedUpdateWithoutMpesaPaymentInput>;
    upsert?: Nullable<TransactionUpsertWithoutMpesaPaymentInput>;
}

export class TransactionUpdateOneWithoutSelcomDisbursementInput {
    connect?: Nullable<TransactionWhereUniqueInput>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutSelcomDisbursementInput>;
    create?: Nullable<TransactionUncheckedCreateWithoutSelcomDisbursementInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<TransactionUncheckedUpdateWithoutSelcomDisbursementInput>;
    upsert?: Nullable<TransactionUpsertWithoutSelcomDisbursementInput>;
}

export class TransactionUpdateOneWithoutSelcomPaymentInput {
    connect?: Nullable<TransactionWhereUniqueInput>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutSelcomPaymentInput>;
    create?: Nullable<TransactionUncheckedCreateWithoutSelcomPaymentInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<TransactionUncheckedUpdateWithoutSelcomPaymentInput>;
    upsert?: Nullable<TransactionUpsertWithoutSelcomPaymentInput>;
}

export class TransactionUpdateWithWhereUniqueWithoutOrderInput {
    data: TransactionUncheckedUpdateWithoutOrderInput;
    where: TransactionWhereUniqueInput;
}

export class TransactionUpdateWithWhereUniqueWithoutPaymentMethodInput {
    data: TransactionUncheckedUpdateWithoutPaymentMethodInput;
    where: TransactionWhereUniqueInput;
}

export class TransactionUpdateWithoutMpesaPaymentInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    order?: Nullable<OrderUpdateOneRequiredWithoutTransactionsInput>;
    paymentMethod?: Nullable<PaymentMethodUpdateOneRequiredWithoutTransactionsInput>;
    selcomDisbursement?: Nullable<SelcomDisbursementUpdateOneWithoutTransactionInput>;
    selcomPayment?: Nullable<SelcomPaymentUpdateOneWithoutTransactionInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUpdateWithoutOrderInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPayment?: Nullable<MpesaPaymentUpdateOneWithoutTransactionInput>;
    paymentMethod?: Nullable<PaymentMethodUpdateOneRequiredWithoutTransactionsInput>;
    selcomDisbursement?: Nullable<SelcomDisbursementUpdateOneWithoutTransactionInput>;
    selcomPayment?: Nullable<SelcomPaymentUpdateOneWithoutTransactionInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUpdateWithoutPaymentMethodInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPayment?: Nullable<MpesaPaymentUpdateOneWithoutTransactionInput>;
    order?: Nullable<OrderUpdateOneRequiredWithoutTransactionsInput>;
    selcomDisbursement?: Nullable<SelcomDisbursementUpdateOneWithoutTransactionInput>;
    selcomPayment?: Nullable<SelcomPaymentUpdateOneWithoutTransactionInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUpdateWithoutSelcomDisbursementInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPayment?: Nullable<MpesaPaymentUpdateOneWithoutTransactionInput>;
    order?: Nullable<OrderUpdateOneRequiredWithoutTransactionsInput>;
    paymentMethod?: Nullable<PaymentMethodUpdateOneRequiredWithoutTransactionsInput>;
    selcomPayment?: Nullable<SelcomPaymentUpdateOneWithoutTransactionInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUpdateWithoutSelcomPaymentInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPayment?: Nullable<MpesaPaymentUpdateOneWithoutTransactionInput>;
    order?: Nullable<OrderUpdateOneRequiredWithoutTransactionsInput>;
    paymentMethod?: Nullable<PaymentMethodUpdateOneRequiredWithoutTransactionsInput>;
    selcomDisbursement?: Nullable<SelcomDisbursementUpdateOneWithoutTransactionInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUpsertWithWhereUniqueWithoutOrderInput {
    create: TransactionUncheckedCreateWithoutOrderInput;
    update: TransactionUncheckedUpdateWithoutOrderInput;
    where: TransactionWhereUniqueInput;
}

export class TransactionUpsertWithWhereUniqueWithoutPaymentMethodInput {
    create: TransactionUncheckedCreateWithoutPaymentMethodInput;
    update: TransactionUncheckedUpdateWithoutPaymentMethodInput;
    where: TransactionWhereUniqueInput;
}

export class TransactionUpsertWithoutMpesaPaymentInput {
    create: TransactionUncheckedCreateWithoutMpesaPaymentInput;
    update: TransactionUncheckedUpdateWithoutMpesaPaymentInput;
}

export class TransactionUpsertWithoutSelcomDisbursementInput {
    create: TransactionUncheckedCreateWithoutSelcomDisbursementInput;
    update: TransactionUncheckedUpdateWithoutSelcomDisbursementInput;
}

export class TransactionUpsertWithoutSelcomPaymentInput {
    create: TransactionUncheckedCreateWithoutSelcomPaymentInput;
    update: TransactionUncheckedUpdateWithoutSelcomPaymentInput;
}

export class TransactionWhereInput {
    AND?: Nullable<TransactionWhereInput[]>;
    NOT?: Nullable<TransactionWhereInput[]>;
    OR?: Nullable<TransactionWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    mpesaPayment?: Nullable<MpesaPaymentWhereInput>;
    mpesaPaymentId?: Nullable<StringNullableFilter>;
    order?: Nullable<OrderWhereInput>;
    orderId?: Nullable<StringFilter>;
    paymentMethod?: Nullable<PaymentMethodWhereInput>;
    paymentMethodId?: Nullable<StringFilter>;
    selcomDisbursement?: Nullable<SelcomDisbursementWhereInput>;
    selcomDisbursementId?: Nullable<StringNullableFilter>;
    selcomPayment?: Nullable<SelcomPaymentWhereInput>;
    selcomPaymentId?: Nullable<StringNullableFilter>;
    state?: Nullable<EnumStateFilter>;
    type?: Nullable<EnumTransactionTypeFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class TransactionWhereUniqueInput {
    id?: Nullable<string>;
}

export class UserCreateInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUserInput>;
    businessProfile?: Nullable<BusinessProfileCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    id?: Nullable<string>;
    location: LocationCreateNestedOneWithoutUsersInput;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    reviewed?: Nullable<ReviewCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    services?: Nullable<ServiceCreateNestedManyWithoutAuthorInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateManyAvatorInput {
    createdAt?: Nullable<DateTime>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    id?: Nullable<string>;
    locationId: string;
    phoneNumber?: Nullable<string>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateManyAvatorInputEnvelope {
    data: UserCreateManyAvatorInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class UserCreateManyInput {
    avatorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    id?: Nullable<string>;
    locationId: string;
    phoneNumber?: Nullable<string>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateManyLocationInput {
    avatorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    id?: Nullable<string>;
    phoneNumber?: Nullable<string>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateManyLocationInputEnvelope {
    data: UserCreateManyLocationInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class UserCreateNestedManyWithoutAvatorInput {
    connect?: Nullable<UserWhereUniqueInput[]>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutAvatorInput[]>;
    create?: Nullable<UserCreateWithoutAvatorInput[]>;
    createMany?: Nullable<UserCreateManyAvatorInputEnvelope>;
}

export class UserCreateNestedManyWithoutLocationInput {
    connect?: Nullable<UserWhereUniqueInput[]>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutLocationInput[]>;
    create?: Nullable<UserCreateWithoutLocationInput[]>;
    createMany?: Nullable<UserCreateManyLocationInputEnvelope>;
}

export class UserCreateNestedOneWithoutBusinessProfileInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutBusinessProfileInput>;
    create?: Nullable<UserUncheckedCreateWithoutBusinessProfileInput>;
}

export class UserCreateNestedOneWithoutCommentsInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutCommentsInput>;
    create?: Nullable<UserUncheckedCreateWithoutCommentsInput>;
}

export class UserCreateNestedOneWithoutDeviceInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutDeviceInput>;
    create?: Nullable<UserUncheckedCreateWithoutDeviceInput>;
}

export class UserCreateNestedOneWithoutOrdersInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutOrdersInput>;
    create?: Nullable<UserUncheckedCreateWithoutOrdersInput>;
}

export class UserCreateNestedOneWithoutReviewedInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutReviewedInput>;
    create?: Nullable<UserUncheckedCreateWithoutReviewedInput>;
}

export class UserCreateNestedOneWithoutReviewsInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutReviewsInput>;
    create?: Nullable<UserUncheckedCreateWithoutReviewsInput>;
}

export class UserCreateNestedOneWithoutServicesInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutServicesInput>;
    create?: Nullable<UserUncheckedCreateWithoutServicesInput>;
}

export class UserCreateOrConnectWithoutAvatorInput {
    create: UserUncheckedCreateWithoutAvatorInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutBusinessProfileInput {
    create: UserUncheckedCreateWithoutBusinessProfileInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutCommentsInput {
    create: UserUncheckedCreateWithoutCommentsInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutDeviceInput {
    create: UserUncheckedCreateWithoutDeviceInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutLocationInput {
    create: UserUncheckedCreateWithoutLocationInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutOrdersInput {
    create: UserUncheckedCreateWithoutOrdersInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutReviewedInput {
    create: UserUncheckedCreateWithoutReviewedInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutReviewsInput {
    create: UserUncheckedCreateWithoutReviewsInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutServicesInput {
    create: UserUncheckedCreateWithoutServicesInput;
    where: UserWhereUniqueInput;
}

export class UserCreateWithoutAvatorInput {
    businessProfile?: Nullable<BusinessProfileCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    id?: Nullable<string>;
    location: LocationCreateNestedOneWithoutUsersInput;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    reviewed?: Nullable<ReviewCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    services?: Nullable<ServiceCreateNestedManyWithoutAuthorInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutBusinessProfileInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUserInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    id?: Nullable<string>;
    location: LocationCreateNestedOneWithoutUsersInput;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    reviewed?: Nullable<ReviewCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    services?: Nullable<ServiceCreateNestedManyWithoutAuthorInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutCommentsInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUserInput>;
    businessProfile?: Nullable<BusinessProfileCreateNestedOneWithoutOwnerInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    id?: Nullable<string>;
    location: LocationCreateNestedOneWithoutUsersInput;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    reviewed?: Nullable<ReviewCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    services?: Nullable<ServiceCreateNestedManyWithoutAuthorInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutDeviceInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUserInput>;
    businessProfile?: Nullable<BusinessProfileCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    id?: Nullable<string>;
    location: LocationCreateNestedOneWithoutUsersInput;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    reviewed?: Nullable<ReviewCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    services?: Nullable<ServiceCreateNestedManyWithoutAuthorInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutLocationInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUserInput>;
    businessProfile?: Nullable<BusinessProfileCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    id?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    reviewed?: Nullable<ReviewCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    services?: Nullable<ServiceCreateNestedManyWithoutAuthorInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutOrdersInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUserInput>;
    businessProfile?: Nullable<BusinessProfileCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    id?: Nullable<string>;
    location: LocationCreateNestedOneWithoutUsersInput;
    phoneNumber?: Nullable<string>;
    reviewed?: Nullable<ReviewCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    services?: Nullable<ServiceCreateNestedManyWithoutAuthorInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutReviewedInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUserInput>;
    businessProfile?: Nullable<BusinessProfileCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    id?: Nullable<string>;
    location: LocationCreateNestedOneWithoutUsersInput;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    reviews?: Nullable<ReviewCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    services?: Nullable<ServiceCreateNestedManyWithoutAuthorInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutReviewsInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUserInput>;
    businessProfile?: Nullable<BusinessProfileCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    id?: Nullable<string>;
    location: LocationCreateNestedOneWithoutUsersInput;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    reviewed?: Nullable<ReviewCreateNestedManyWithoutRevieweeInput>;
    role?: Nullable<Role>;
    services?: Nullable<ServiceCreateNestedManyWithoutAuthorInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutServicesInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUserInput>;
    businessProfile?: Nullable<BusinessProfileCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    id?: Nullable<string>;
    location: LocationCreateNestedOneWithoutUsersInput;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    reviewed?: Nullable<ReviewCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserListRelationFilter {
    every?: Nullable<UserWhereInput>;
    none?: Nullable<UserWhereInput>;
    some?: Nullable<UserWhereInput>;
}

export class UserOrderByInput {
    avatorId?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    disabled?: Nullable<SortOrder>;
    displayName?: Nullable<SortOrder>;
    email?: Nullable<SortOrder>;
    emailVerified?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    locationId?: Nullable<SortOrder>;
    phoneNumber?: Nullable<SortOrder>;
    role?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class UserRelationFilter {
    is?: Nullable<UserWhereInput>;
    isNot?: Nullable<UserWhereInput>;
}

export class UserScalarWhereInput {
    AND?: Nullable<UserScalarWhereInput[]>;
    NOT?: Nullable<UserScalarWhereInput[]>;
    OR?: Nullable<UserScalarWhereInput[]>;
    avatorId?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    disabled?: Nullable<BoolFilter>;
    displayName?: Nullable<StringFilter>;
    email?: Nullable<StringFilter>;
    emailVerified?: Nullable<BoolFilter>;
    id?: Nullable<StringFilter>;
    locationId?: Nullable<StringFilter>;
    phoneNumber?: Nullable<StringNullableFilter>;
    role?: Nullable<EnumRoleFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class UserScalarWhereWithAggregatesInput {
    AND?: Nullable<UserScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<UserScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<UserScalarWhereWithAggregatesInput[]>;
    avatorId?: Nullable<StringNullableWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    disabled?: Nullable<BoolWithAggregatesFilter>;
    displayName?: Nullable<StringWithAggregatesFilter>;
    email?: Nullable<StringWithAggregatesFilter>;
    emailVerified?: Nullable<BoolWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    locationId?: Nullable<StringWithAggregatesFilter>;
    phoneNumber?: Nullable<StringNullableWithAggregatesFilter>;
    role?: Nullable<EnumRoleWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class UserUncheckedCreateInput {
    avatorId?: Nullable<string>;
    businessProfile?: Nullable<BusinessProfileUncheckedCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    id?: Nullable<string>;
    locationId: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    reviewed?: Nullable<ReviewUncheckedCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutAuthorInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateNestedManyWithoutAvatorInput {
    connect?: Nullable<UserWhereUniqueInput[]>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutAvatorInput[]>;
    create?: Nullable<UserCreateWithoutAvatorInput[]>;
    createMany?: Nullable<UserCreateManyAvatorInputEnvelope>;
}

export class UserUncheckedCreateNestedManyWithoutLocationInput {
    connect?: Nullable<UserWhereUniqueInput[]>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutLocationInput[]>;
    create?: Nullable<UserCreateWithoutLocationInput[]>;
    createMany?: Nullable<UserCreateManyLocationInputEnvelope>;
}

export class UserUncheckedCreateWithoutAvatorInput {
    businessProfile?: Nullable<BusinessProfileUncheckedCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    id?: Nullable<string>;
    locationId: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    reviewed?: Nullable<ReviewUncheckedCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutAuthorInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutBusinessProfileInput {
    avatorId?: Nullable<string>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    id?: Nullable<string>;
    locationId: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    reviewed?: Nullable<ReviewUncheckedCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutAuthorInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutCommentsInput {
    avatorId?: Nullable<string>;
    businessProfile?: Nullable<BusinessProfileUncheckedCreateNestedOneWithoutOwnerInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    id?: Nullable<string>;
    locationId: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    reviewed?: Nullable<ReviewUncheckedCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutAuthorInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutDeviceInput {
    avatorId?: Nullable<string>;
    businessProfile?: Nullable<BusinessProfileUncheckedCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    id?: Nullable<string>;
    locationId: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    reviewed?: Nullable<ReviewUncheckedCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutAuthorInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutLocationInput {
    avatorId?: Nullable<string>;
    businessProfile?: Nullable<BusinessProfileUncheckedCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    id?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    reviewed?: Nullable<ReviewUncheckedCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutAuthorInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutOrdersInput {
    avatorId?: Nullable<string>;
    businessProfile?: Nullable<BusinessProfileUncheckedCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    id?: Nullable<string>;
    locationId: string;
    phoneNumber?: Nullable<string>;
    reviewed?: Nullable<ReviewUncheckedCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutAuthorInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutReviewedInput {
    avatorId?: Nullable<string>;
    businessProfile?: Nullable<BusinessProfileUncheckedCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    id?: Nullable<string>;
    locationId: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    reviews?: Nullable<ReviewUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutAuthorInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutReviewsInput {
    avatorId?: Nullable<string>;
    businessProfile?: Nullable<BusinessProfileUncheckedCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    id?: Nullable<string>;
    locationId: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    reviewed?: Nullable<ReviewUncheckedCreateNestedManyWithoutRevieweeInput>;
    role?: Nullable<Role>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutAuthorInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutServicesInput {
    avatorId?: Nullable<string>;
    businessProfile?: Nullable<BusinessProfileUncheckedCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    id?: Nullable<string>;
    locationId: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    reviewed?: Nullable<ReviewUncheckedCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedUpdateInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businessProfile?: Nullable<BusinessProfileUncheckedUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUncheckedUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutAuthorInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateManyInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<StringFieldUpdateOperationsInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateManyWithoutAvatorInput {
    connect?: Nullable<UserWhereUniqueInput[]>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutAvatorInput[]>;
    create?: Nullable<UserCreateWithoutAvatorInput[]>;
    createMany?: Nullable<UserCreateManyAvatorInputEnvelope>;
    delete?: Nullable<UserWhereUniqueInput[]>;
    deleteMany?: Nullable<UserScalarWhereInput[]>;
    disconnect?: Nullable<UserWhereUniqueInput[]>;
    set?: Nullable<UserWhereUniqueInput[]>;
    update?: Nullable<UserUpdateWithWhereUniqueWithoutAvatorInput[]>;
    updateMany?: Nullable<UserUpdateManyWithWhereWithoutAvatorInput[]>;
    upsert?: Nullable<UserUpsertWithWhereUniqueWithoutAvatorInput[]>;
}

export class UserUncheckedUpdateManyWithoutLocationInput {
    connect?: Nullable<UserWhereUniqueInput[]>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutLocationInput[]>;
    create?: Nullable<UserCreateWithoutLocationInput[]>;
    createMany?: Nullable<UserCreateManyLocationInputEnvelope>;
    delete?: Nullable<UserWhereUniqueInput[]>;
    deleteMany?: Nullable<UserScalarWhereInput[]>;
    disconnect?: Nullable<UserWhereUniqueInput[]>;
    set?: Nullable<UserWhereUniqueInput[]>;
    update?: Nullable<UserUpdateWithWhereUniqueWithoutLocationInput[]>;
    updateMany?: Nullable<UserUpdateManyWithWhereWithoutLocationInput[]>;
    upsert?: Nullable<UserUpsertWithWhereUniqueWithoutLocationInput[]>;
}

export class UserUncheckedUpdateManyWithoutUserInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<StringFieldUpdateOperationsInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateManyWithoutUsersInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutAvatorInput {
    businessProfile?: Nullable<BusinessProfileUncheckedUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUncheckedUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutAuthorInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutBusinessProfileInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUncheckedUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutAuthorInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutCommentsInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businessProfile?: Nullable<BusinessProfileUncheckedUpdateOneWithoutOwnerInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUncheckedUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutAuthorInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutDeviceInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businessProfile?: Nullable<BusinessProfileUncheckedUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUncheckedUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutAuthorInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutLocationInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businessProfile?: Nullable<BusinessProfileUncheckedUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUncheckedUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutAuthorInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutOrdersInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businessProfile?: Nullable<BusinessProfileUncheckedUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<StringFieldUpdateOperationsInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUncheckedUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutAuthorInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutReviewedInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businessProfile?: Nullable<BusinessProfileUncheckedUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutAuthorInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutReviewsInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businessProfile?: Nullable<BusinessProfileUncheckedUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUncheckedUpdateManyWithoutRevieweeInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutAuthorInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutServicesInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businessProfile?: Nullable<BusinessProfileUncheckedUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUncheckedUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUserInput>;
    businessProfile?: Nullable<BusinessProfileUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneRequiredWithoutUsersInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutAuthorInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateManyWithWhereWithoutAvatorInput {
    data: UserUncheckedUpdateManyWithoutUserInput;
    where: UserScalarWhereInput;
}

export class UserUpdateManyWithWhereWithoutLocationInput {
    data: UserUncheckedUpdateManyWithoutUsersInput;
    where: UserScalarWhereInput;
}

export class UserUpdateManyWithoutAvatorInput {
    connect?: Nullable<UserWhereUniqueInput[]>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutAvatorInput[]>;
    create?: Nullable<UserCreateWithoutAvatorInput[]>;
    createMany?: Nullable<UserCreateManyAvatorInputEnvelope>;
    delete?: Nullable<UserWhereUniqueInput[]>;
    deleteMany?: Nullable<UserScalarWhereInput[]>;
    disconnect?: Nullable<UserWhereUniqueInput[]>;
    set?: Nullable<UserWhereUniqueInput[]>;
    update?: Nullable<UserUpdateWithWhereUniqueWithoutAvatorInput[]>;
    updateMany?: Nullable<UserUpdateManyWithWhereWithoutAvatorInput[]>;
    upsert?: Nullable<UserUpsertWithWhereUniqueWithoutAvatorInput[]>;
}

export class UserUpdateManyWithoutLocationInput {
    connect?: Nullable<UserWhereUniqueInput[]>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutLocationInput[]>;
    create?: Nullable<UserCreateWithoutLocationInput[]>;
    createMany?: Nullable<UserCreateManyLocationInputEnvelope>;
    delete?: Nullable<UserWhereUniqueInput[]>;
    deleteMany?: Nullable<UserScalarWhereInput[]>;
    disconnect?: Nullable<UserWhereUniqueInput[]>;
    set?: Nullable<UserWhereUniqueInput[]>;
    update?: Nullable<UserUpdateWithWhereUniqueWithoutLocationInput[]>;
    updateMany?: Nullable<UserUpdateManyWithWhereWithoutLocationInput[]>;
    upsert?: Nullable<UserUpsertWithWhereUniqueWithoutLocationInput[]>;
}

export class UserUpdateOneRequiredWithoutBusinessProfileInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutBusinessProfileInput>;
    create?: Nullable<UserUncheckedCreateWithoutBusinessProfileInput>;
    update?: Nullable<UserUncheckedUpdateWithoutBusinessProfileInput>;
    upsert?: Nullable<UserUpsertWithoutBusinessProfileInput>;
}

export class UserUpdateOneRequiredWithoutCommentsInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutCommentsInput>;
    create?: Nullable<UserUncheckedCreateWithoutCommentsInput>;
    update?: Nullable<UserUncheckedUpdateWithoutCommentsInput>;
    upsert?: Nullable<UserUpsertWithoutCommentsInput>;
}

export class UserUpdateOneRequiredWithoutOrdersInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutOrdersInput>;
    create?: Nullable<UserUncheckedCreateWithoutOrdersInput>;
    update?: Nullable<UserUncheckedUpdateWithoutOrdersInput>;
    upsert?: Nullable<UserUpsertWithoutOrdersInput>;
}

export class UserUpdateOneRequiredWithoutReviewedInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutReviewedInput>;
    create?: Nullable<UserUncheckedCreateWithoutReviewedInput>;
    update?: Nullable<UserUncheckedUpdateWithoutReviewedInput>;
    upsert?: Nullable<UserUpsertWithoutReviewedInput>;
}

export class UserUpdateOneRequiredWithoutReviewsInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutReviewsInput>;
    create?: Nullable<UserUncheckedCreateWithoutReviewsInput>;
    update?: Nullable<UserUncheckedUpdateWithoutReviewsInput>;
    upsert?: Nullable<UserUpsertWithoutReviewsInput>;
}

export class UserUpdateOneRequiredWithoutServicesInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutServicesInput>;
    create?: Nullable<UserUncheckedCreateWithoutServicesInput>;
    update?: Nullable<UserUncheckedUpdateWithoutServicesInput>;
    upsert?: Nullable<UserUpsertWithoutServicesInput>;
}

export class UserUpdateOneWithoutDeviceInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutDeviceInput>;
    create?: Nullable<UserUncheckedCreateWithoutDeviceInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<UserUncheckedUpdateWithoutDeviceInput>;
    upsert?: Nullable<UserUpsertWithoutDeviceInput>;
}

export class UserUpdateWithWhereUniqueWithoutAvatorInput {
    data: UserUncheckedUpdateWithoutAvatorInput;
    where: UserWhereUniqueInput;
}

export class UserUpdateWithWhereUniqueWithoutLocationInput {
    data: UserUncheckedUpdateWithoutLocationInput;
    where: UserWhereUniqueInput;
}

export class UserUpdateWithoutAvatorInput {
    businessProfile?: Nullable<BusinessProfileUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneRequiredWithoutUsersInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutAuthorInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutBusinessProfileInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUserInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneRequiredWithoutUsersInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutAuthorInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutCommentsInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUserInput>;
    businessProfile?: Nullable<BusinessProfileUpdateOneWithoutOwnerInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneRequiredWithoutUsersInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutAuthorInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutDeviceInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUserInput>;
    businessProfile?: Nullable<BusinessProfileUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneRequiredWithoutUsersInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutAuthorInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutLocationInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUserInput>;
    businessProfile?: Nullable<BusinessProfileUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutAuthorInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutOrdersInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUserInput>;
    businessProfile?: Nullable<BusinessProfileUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneRequiredWithoutUsersInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutAuthorInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutReviewedInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUserInput>;
    businessProfile?: Nullable<BusinessProfileUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneRequiredWithoutUsersInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutAuthorInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutReviewsInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUserInput>;
    businessProfile?: Nullable<BusinessProfileUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneRequiredWithoutUsersInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUpdateManyWithoutRevieweeInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutAuthorInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutServicesInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUserInput>;
    businessProfile?: Nullable<BusinessProfileUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneRequiredWithoutUsersInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpsertWithWhereUniqueWithoutAvatorInput {
    create: UserUncheckedCreateWithoutAvatorInput;
    update: UserUncheckedUpdateWithoutAvatorInput;
    where: UserWhereUniqueInput;
}

export class UserUpsertWithWhereUniqueWithoutLocationInput {
    create: UserUncheckedCreateWithoutLocationInput;
    update: UserUncheckedUpdateWithoutLocationInput;
    where: UserWhereUniqueInput;
}

export class UserUpsertWithoutBusinessProfileInput {
    create: UserUncheckedCreateWithoutBusinessProfileInput;
    update: UserUncheckedUpdateWithoutBusinessProfileInput;
}

export class UserUpsertWithoutCommentsInput {
    create: UserUncheckedCreateWithoutCommentsInput;
    update: UserUncheckedUpdateWithoutCommentsInput;
}

export class UserUpsertWithoutDeviceInput {
    create: UserUncheckedCreateWithoutDeviceInput;
    update: UserUncheckedUpdateWithoutDeviceInput;
}

export class UserUpsertWithoutOrdersInput {
    create: UserUncheckedCreateWithoutOrdersInput;
    update: UserUncheckedUpdateWithoutOrdersInput;
}

export class UserUpsertWithoutReviewedInput {
    create: UserUncheckedCreateWithoutReviewedInput;
    update: UserUncheckedUpdateWithoutReviewedInput;
}

export class UserUpsertWithoutReviewsInput {
    create: UserUncheckedCreateWithoutReviewsInput;
    update: UserUncheckedUpdateWithoutReviewsInput;
}

export class UserUpsertWithoutServicesInput {
    create: UserUncheckedCreateWithoutServicesInput;
    update: UserUncheckedUpdateWithoutServicesInput;
}

export class UserWhereInput {
    AND?: Nullable<UserWhereInput[]>;
    NOT?: Nullable<UserWhereInput[]>;
    OR?: Nullable<UserWhereInput[]>;
    avator?: Nullable<AttachmentWhereInput>;
    avatorId?: Nullable<StringNullableFilter>;
    businessProfile?: Nullable<BusinessProfileWhereInput>;
    comments?: Nullable<CommentListRelationFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    device?: Nullable<DeviceWhereInput>;
    disabled?: Nullable<BoolFilter>;
    displayName?: Nullable<StringFilter>;
    email?: Nullable<StringFilter>;
    emailVerified?: Nullable<BoolFilter>;
    id?: Nullable<StringFilter>;
    location?: Nullable<LocationWhereInput>;
    locationId?: Nullable<StringFilter>;
    orders?: Nullable<OrderListRelationFilter>;
    phoneNumber?: Nullable<StringNullableFilter>;
    reviewed?: Nullable<ReviewListRelationFilter>;
    reviews?: Nullable<ReviewListRelationFilter>;
    role?: Nullable<EnumRoleFilter>;
    services?: Nullable<ServiceListRelationFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class UserWhereUniqueInput {
    email?: Nullable<string>;
    id?: Nullable<string>;
}

export class AggregateAttachment {
    _avg?: Nullable<AttachmentAvgAggregateOutputType>;
    _count?: Nullable<AttachmentCountAggregateOutputType>;
    _max?: Nullable<AttachmentMaxAggregateOutputType>;
    _min?: Nullable<AttachmentMinAggregateOutputType>;
    _sum?: Nullable<AttachmentSumAggregateOutputType>;
    avg?: Nullable<AttachmentAvgAggregateOutputType>;
    count?: Nullable<AttachmentCountAggregateOutputType>;
    max?: Nullable<AttachmentMaxAggregateOutputType>;
    min?: Nullable<AttachmentMinAggregateOutputType>;
    sum?: Nullable<AttachmentSumAggregateOutputType>;
}

export class AggregateAttachmentResponse {
    data?: Nullable<AggregateAttachment>;
    message: string;
    status: boolean;
}

export class AggregateBusinessProfile {
    _count?: Nullable<BusinessProfileCountAggregateOutputType>;
    _max?: Nullable<BusinessProfileMaxAggregateOutputType>;
    _min?: Nullable<BusinessProfileMinAggregateOutputType>;
    count?: Nullable<BusinessProfileCountAggregateOutputType>;
    max?: Nullable<BusinessProfileMaxAggregateOutputType>;
    min?: Nullable<BusinessProfileMinAggregateOutputType>;
}

export class AggregateBusinessProfileResponse {
    data?: Nullable<AggregateBusinessProfile>;
    message: string;
    status: boolean;
}

export class AggregateCasbinRule {
    _avg?: Nullable<CasbinRuleAvgAggregateOutputType>;
    _count?: Nullable<CasbinRuleCountAggregateOutputType>;
    _max?: Nullable<CasbinRuleMaxAggregateOutputType>;
    _min?: Nullable<CasbinRuleMinAggregateOutputType>;
    _sum?: Nullable<CasbinRuleSumAggregateOutputType>;
    avg?: Nullable<CasbinRuleAvgAggregateOutputType>;
    count?: Nullable<CasbinRuleCountAggregateOutputType>;
    max?: Nullable<CasbinRuleMaxAggregateOutputType>;
    min?: Nullable<CasbinRuleMinAggregateOutputType>;
    sum?: Nullable<CasbinRuleSumAggregateOutputType>;
}

export class AggregateCasbinRuleResponse {
    data?: Nullable<AggregateCasbinRule>;
    message: string;
    status: boolean;
}

export class AggregateComment {
    _count?: Nullable<CommentCountAggregateOutputType>;
    _max?: Nullable<CommentMaxAggregateOutputType>;
    _min?: Nullable<CommentMinAggregateOutputType>;
    count?: Nullable<CommentCountAggregateOutputType>;
    max?: Nullable<CommentMaxAggregateOutputType>;
    min?: Nullable<CommentMinAggregateOutputType>;
}

export class AggregateCommentResponse {
    data?: Nullable<AggregateComment>;
    message: string;
    status: boolean;
}

export class AggregateDevice {
    _count?: Nullable<DeviceCountAggregateOutputType>;
    _max?: Nullable<DeviceMaxAggregateOutputType>;
    _min?: Nullable<DeviceMinAggregateOutputType>;
    count?: Nullable<DeviceCountAggregateOutputType>;
    max?: Nullable<DeviceMaxAggregateOutputType>;
    min?: Nullable<DeviceMinAggregateOutputType>;
}

export class AggregateDeviceResponse {
    data?: Nullable<AggregateDevice>;
    message: string;
    status: boolean;
}

export class AggregateHelp {
    _count?: Nullable<HelpCountAggregateOutputType>;
    _max?: Nullable<HelpMaxAggregateOutputType>;
    _min?: Nullable<HelpMinAggregateOutputType>;
    count?: Nullable<HelpCountAggregateOutputType>;
    max?: Nullable<HelpMaxAggregateOutputType>;
    min?: Nullable<HelpMinAggregateOutputType>;
}

export class AggregateHelpResponse {
    data?: Nullable<AggregateHelp>;
    message: string;
    status: boolean;
}

export class AggregateHelpStep {
    _avg?: Nullable<HelpStepAvgAggregateOutputType>;
    _count?: Nullable<HelpStepCountAggregateOutputType>;
    _max?: Nullable<HelpStepMaxAggregateOutputType>;
    _min?: Nullable<HelpStepMinAggregateOutputType>;
    _sum?: Nullable<HelpStepSumAggregateOutputType>;
    avg?: Nullable<HelpStepAvgAggregateOutputType>;
    count?: Nullable<HelpStepCountAggregateOutputType>;
    max?: Nullable<HelpStepMaxAggregateOutputType>;
    min?: Nullable<HelpStepMinAggregateOutputType>;
    sum?: Nullable<HelpStepSumAggregateOutputType>;
}

export class AggregateHelpStepResponse {
    data?: Nullable<AggregateHelpStep>;
    message: string;
    status: boolean;
}

export class AggregateLocation {
    _avg?: Nullable<LocationAvgAggregateOutputType>;
    _count?: Nullable<LocationCountAggregateOutputType>;
    _max?: Nullable<LocationMaxAggregateOutputType>;
    _min?: Nullable<LocationMinAggregateOutputType>;
    _sum?: Nullable<LocationSumAggregateOutputType>;
    avg?: Nullable<LocationAvgAggregateOutputType>;
    count?: Nullable<LocationCountAggregateOutputType>;
    max?: Nullable<LocationMaxAggregateOutputType>;
    min?: Nullable<LocationMinAggregateOutputType>;
    sum?: Nullable<LocationSumAggregateOutputType>;
}

export class AggregateLocationResponse {
    data?: Nullable<AggregateLocation>;
    message: string;
    status: boolean;
}

export class AggregateMpesaPayment {
    _count?: Nullable<MpesaPaymentCountAggregateOutputType>;
    _max?: Nullable<MpesaPaymentMaxAggregateOutputType>;
    _min?: Nullable<MpesaPaymentMinAggregateOutputType>;
    count?: Nullable<MpesaPaymentCountAggregateOutputType>;
    max?: Nullable<MpesaPaymentMaxAggregateOutputType>;
    min?: Nullable<MpesaPaymentMinAggregateOutputType>;
}

export class AggregateMpesaPaymentResponse {
    data?: Nullable<AggregateMpesaPayment>;
    message: string;
    status: boolean;
}

export class AggregateOrder {
    _avg?: Nullable<OrderAvgAggregateOutputType>;
    _count?: Nullable<OrderCountAggregateOutputType>;
    _max?: Nullable<OrderMaxAggregateOutputType>;
    _min?: Nullable<OrderMinAggregateOutputType>;
    _sum?: Nullable<OrderSumAggregateOutputType>;
    avg?: Nullable<OrderAvgAggregateOutputType>;
    count?: Nullable<OrderCountAggregateOutputType>;
    max?: Nullable<OrderMaxAggregateOutputType>;
    min?: Nullable<OrderMinAggregateOutputType>;
    sum?: Nullable<OrderSumAggregateOutputType>;
}

export class AggregateOrderResponse {
    data?: Nullable<AggregateOrder>;
    message: string;
    status: boolean;
}

export class AggregatePaymentMethod {
    _count?: Nullable<PaymentMethodCountAggregateOutputType>;
    _max?: Nullable<PaymentMethodMaxAggregateOutputType>;
    _min?: Nullable<PaymentMethodMinAggregateOutputType>;
    count?: Nullable<PaymentMethodCountAggregateOutputType>;
    max?: Nullable<PaymentMethodMaxAggregateOutputType>;
    min?: Nullable<PaymentMethodMinAggregateOutputType>;
}

export class AggregatePaymentMethodResponse {
    data?: Nullable<AggregatePaymentMethod>;
    message: string;
    status: boolean;
}

export class AggregateReview {
    _avg?: Nullable<ReviewAvgAggregateOutputType>;
    _count?: Nullable<ReviewCountAggregateOutputType>;
    _max?: Nullable<ReviewMaxAggregateOutputType>;
    _min?: Nullable<ReviewMinAggregateOutputType>;
    _sum?: Nullable<ReviewSumAggregateOutputType>;
    avg?: Nullable<ReviewAvgAggregateOutputType>;
    count?: Nullable<ReviewCountAggregateOutputType>;
    max?: Nullable<ReviewMaxAggregateOutputType>;
    min?: Nullable<ReviewMinAggregateOutputType>;
    sum?: Nullable<ReviewSumAggregateOutputType>;
}

export class AggregateReviewResponse {
    data?: Nullable<AggregateReview>;
    message: string;
    status: boolean;
}

export class AggregateSelcomDisbursement {
    _avg?: Nullable<SelcomDisbursementAvgAggregateOutputType>;
    _count?: Nullable<SelcomDisbursementCountAggregateOutputType>;
    _max?: Nullable<SelcomDisbursementMaxAggregateOutputType>;
    _min?: Nullable<SelcomDisbursementMinAggregateOutputType>;
    _sum?: Nullable<SelcomDisbursementSumAggregateOutputType>;
    avg?: Nullable<SelcomDisbursementAvgAggregateOutputType>;
    count?: Nullable<SelcomDisbursementCountAggregateOutputType>;
    max?: Nullable<SelcomDisbursementMaxAggregateOutputType>;
    min?: Nullable<SelcomDisbursementMinAggregateOutputType>;
    sum?: Nullable<SelcomDisbursementSumAggregateOutputType>;
}

export class AggregateSelcomDisbursementResponse {
    data?: Nullable<AggregateSelcomDisbursement>;
    message: string;
    status: boolean;
}

export class AggregateSelcomPayment {
    _avg?: Nullable<SelcomPaymentAvgAggregateOutputType>;
    _count?: Nullable<SelcomPaymentCountAggregateOutputType>;
    _max?: Nullable<SelcomPaymentMaxAggregateOutputType>;
    _min?: Nullable<SelcomPaymentMinAggregateOutputType>;
    _sum?: Nullable<SelcomPaymentSumAggregateOutputType>;
    avg?: Nullable<SelcomPaymentAvgAggregateOutputType>;
    count?: Nullable<SelcomPaymentCountAggregateOutputType>;
    max?: Nullable<SelcomPaymentMaxAggregateOutputType>;
    min?: Nullable<SelcomPaymentMinAggregateOutputType>;
    sum?: Nullable<SelcomPaymentSumAggregateOutputType>;
}

export class AggregateSelcomPaymentResponse {
    data?: Nullable<AggregateSelcomPayment>;
    message: string;
    status: boolean;
}

export class AggregateService {
    _avg?: Nullable<ServiceAvgAggregateOutputType>;
    _count?: Nullable<ServiceCountAggregateOutputType>;
    _max?: Nullable<ServiceMaxAggregateOutputType>;
    _min?: Nullable<ServiceMinAggregateOutputType>;
    _sum?: Nullable<ServiceSumAggregateOutputType>;
    avg?: Nullable<ServiceAvgAggregateOutputType>;
    count?: Nullable<ServiceCountAggregateOutputType>;
    max?: Nullable<ServiceMaxAggregateOutputType>;
    min?: Nullable<ServiceMinAggregateOutputType>;
    sum?: Nullable<ServiceSumAggregateOutputType>;
}

export class AggregateServiceResponse {
    data?: Nullable<AggregateService>;
    message: string;
    status: boolean;
}

export class AggregateTransaction {
    _count?: Nullable<TransactionCountAggregateOutputType>;
    _max?: Nullable<TransactionMaxAggregateOutputType>;
    _min?: Nullable<TransactionMinAggregateOutputType>;
    count?: Nullable<TransactionCountAggregateOutputType>;
    max?: Nullable<TransactionMaxAggregateOutputType>;
    min?: Nullable<TransactionMinAggregateOutputType>;
}

export class AggregateTransactionResponse {
    data?: Nullable<AggregateTransaction>;
    message: string;
    status: boolean;
}

export class AggregateUser {
    _count?: Nullable<UserCountAggregateOutputType>;
    _max?: Nullable<UserMaxAggregateOutputType>;
    _min?: Nullable<UserMinAggregateOutputType>;
    count?: Nullable<UserCountAggregateOutputType>;
    max?: Nullable<UserMaxAggregateOutputType>;
    min?: Nullable<UserMinAggregateOutputType>;
}

export class AggregateUserResponse {
    data?: Nullable<AggregateUser>;
    message: string;
    status: boolean;
}

export class Attachment {
    attachmentType: AttachmentType;
    businessProfiles: BusinessProfile[];
    comment?: Nullable<Comment>;
    commentId?: Nullable<string>;
    createdAt: DateTime;
    downloadable: boolean;
    duration: number;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    helpStep?: Nullable<HelpStep>;
    helpStepId?: Nullable<string>;
    id: string;
    mimetype?: Nullable<string>;
    orders: Order[];
    path: string;
    paymentMethods: PaymentMethod[];
    placement: string;
    services: Service[];
    size: number;
    updatedAt: DateTime;
    user: User[];
}

export class AttachmentAvgAggregateOutputType {
    duration?: Nullable<number>;
    size?: Nullable<number>;
}

export class AttachmentBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class AttachmentCountAggregateOutputType {
    _all: number;
    attachmentType: number;
    commentId: number;
    createdAt: number;
    downloadable: number;
    duration: number;
    encoding: number;
    filename: number;
    helpStepId: number;
    id: number;
    mimetype: number;
    path: number;
    placement: number;
    size: number;
    updatedAt: number;
}

export class AttachmentCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class AttachmentListResponse {
    data?: Nullable<Attachment[]>;
    message: string;
    status: boolean;
}

export class AttachmentMaxAggregateOutputType {
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    path?: Nullable<string>;
    placement?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
}

export class AttachmentMinAggregateOutputType {
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    path?: Nullable<string>;
    placement?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
}

export class AttachmentResponse {
    data?: Nullable<Attachment>;
    message: string;
    status: boolean;
}

export class AttachmentSumAggregateOutputType {
    duration?: Nullable<number>;
    size?: Nullable<number>;
}

export class AuthResult {
    data?: Nullable<User>;
    message: string;
    status: boolean;
    token?: Nullable<string>;
}

export class BatchPayload {
    count: number;
}

export class BusinessProfile {
    about: string;
    cover: Attachment;
    coverId: string;
    createdAt: DateTime;
    id: string;
    mode: BusinnessMode;
    owner: User;
    ownerId: string;
    updatedAt: DateTime;
}

export class BusinessProfileBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class BusinessProfileCountAggregateOutputType {
    _all: number;
    about: number;
    coverId: number;
    createdAt: number;
    id: number;
    mode: number;
    ownerId: number;
    updatedAt: number;
}

export class BusinessProfileCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class BusinessProfileListResponse {
    data?: Nullable<BusinessProfile[]>;
    message: string;
    status: boolean;
}

export class BusinessProfileMaxAggregateOutputType {
    about?: Nullable<string>;
    coverId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mode?: Nullable<BusinnessMode>;
    ownerId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessProfileMinAggregateOutputType {
    about?: Nullable<string>;
    coverId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mode?: Nullable<BusinnessMode>;
    ownerId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessProfileResponse {
    data?: Nullable<BusinessProfile>;
    message: string;
    status: boolean;
}

export class CasbinRule {
    createdAt: DateTime;
    id: number;
    ptype: string;
    updatedAt: DateTime;
    v0?: Nullable<string>;
    v1?: Nullable<string>;
    v2?: Nullable<string>;
    v3?: Nullable<string>;
    v4?: Nullable<string>;
    v5?: Nullable<string>;
}

export class CasbinRuleAvgAggregateOutputType {
    id?: Nullable<number>;
}

export class CasbinRuleBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class CasbinRuleCountAggregateOutputType {
    _all: number;
    createdAt: number;
    id: number;
    ptype: number;
    updatedAt: number;
    v0: number;
    v1: number;
    v2: number;
    v3: number;
    v4: number;
    v5: number;
}

export class CasbinRuleCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class CasbinRuleListResponse {
    data?: Nullable<CasbinRule[]>;
    message: string;
    status: boolean;
}

export class CasbinRuleMaxAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<number>;
    ptype?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    v0?: Nullable<string>;
    v1?: Nullable<string>;
    v2?: Nullable<string>;
    v3?: Nullable<string>;
    v4?: Nullable<string>;
    v5?: Nullable<string>;
}

export class CasbinRuleMinAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<number>;
    ptype?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    v0?: Nullable<string>;
    v1?: Nullable<string>;
    v2?: Nullable<string>;
    v3?: Nullable<string>;
    v4?: Nullable<string>;
    v5?: Nullable<string>;
}

export class CasbinRuleResponse {
    data?: Nullable<CasbinRule>;
    message: string;
    status: boolean;
}

export class CasbinRuleSumAggregateOutputType {
    id?: Nullable<number>;
}

export class Comment {
    attachments: Attachment[];
    author: User;
    authorId: string;
    comment?: Nullable<Comment>;
    commentId?: Nullable<string>;
    comments: Comment[];
    commentsEnabled: boolean;
    content: string;
    createdAt: DateTime;
    id: string;
    review?: Nullable<Review>;
    reviewId: string;
    state: State;
    updatedAt: DateTime;
}

export class CommentBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class CommentCountAggregateOutputType {
    _all: number;
    authorId: number;
    commentId: number;
    commentsEnabled: number;
    content: number;
    createdAt: number;
    id: number;
    reviewId: number;
    state: number;
    updatedAt: number;
}

export class CommentCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class CommentListResponse {
    data?: Nullable<Comment[]>;
    message: string;
    status: boolean;
}

export class CommentMaxAggregateOutputType {
    authorId?: Nullable<string>;
    commentId?: Nullable<string>;
    commentsEnabled?: Nullable<boolean>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reviewId?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentMinAggregateOutputType {
    authorId?: Nullable<string>;
    commentId?: Nullable<string>;
    commentsEnabled?: Nullable<boolean>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reviewId?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentResponse {
    data?: Nullable<Comment>;
    message: string;
    status: boolean;
}

export class Device {
    fcm_id?: Nullable<string>;
    id: string;
    type: string;
    user?: Nullable<User>;
    userId?: Nullable<string>;
}

export class DeviceBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class DeviceCountAggregateOutputType {
    _all: number;
    fcm_id: number;
    id: number;
    type: number;
    userId: number;
}

export class DeviceCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class DeviceListResponse {
    data?: Nullable<Device[]>;
    message: string;
    status: boolean;
}

export class DeviceMaxAggregateOutputType {
    fcm_id?: Nullable<string>;
    id?: Nullable<string>;
    type?: Nullable<string>;
    userId?: Nullable<string>;
}

export class DeviceMinAggregateOutputType {
    fcm_id?: Nullable<string>;
    id?: Nullable<string>;
    type?: Nullable<string>;
    userId?: Nullable<string>;
}

export class DeviceResponse {
    data?: Nullable<Device>;
    message: string;
    status: boolean;
}

export class Help {
    audience: Role;
    createdAt: DateTime;
    description?: Nullable<string>;
    id: string;
    state: State;
    steps: HelpStep[];
    topic: string;
    updatedAt: DateTime;
}

export class HelpBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class HelpCountAggregateOutputType {
    _all: number;
    audience: number;
    createdAt: number;
    description: number;
    id: number;
    state: number;
    topic: number;
    updatedAt: number;
}

export class HelpCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class HelpListResponse {
    data?: Nullable<Help[]>;
    message: string;
    status: boolean;
}

export class HelpMaxAggregateOutputType {
    audience?: Nullable<Role>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    topic?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class HelpMinAggregateOutputType {
    audience?: Nullable<Role>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    topic?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class HelpResponse {
    data?: Nullable<Help>;
    message: string;
    status: boolean;
}

export class HelpStep {
    attachments: Attachment[];
    createdAt: DateTime;
    description?: Nullable<string>;
    help: Help;
    helpId: string;
    id: string;
    state: State;
    stepNumber: number;
    title: string;
    updatedAt: DateTime;
}

export class HelpStepAvgAggregateOutputType {
    stepNumber?: Nullable<number>;
}

export class HelpStepBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class HelpStepCountAggregateOutputType {
    _all: number;
    createdAt: number;
    description: number;
    helpId: number;
    id: number;
    state: number;
    stepNumber: number;
    title: number;
    updatedAt: number;
}

export class HelpStepCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class HelpStepListResponse {
    data?: Nullable<HelpStep[]>;
    message: string;
    status: boolean;
}

export class HelpStepMaxAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    helpId?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    stepNumber?: Nullable<number>;
    title?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class HelpStepMinAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    helpId?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    stepNumber?: Nullable<number>;
    title?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class HelpStepResponse {
    data?: Nullable<HelpStep>;
    message: string;
    status: boolean;
}

export class HelpStepSumAggregateOutputType {
    stepNumber?: Nullable<number>;
}

export class Location {
    createdAt: DateTime;
    id: string;
    lat: number;
    lon: number;
    name: string;
    state: State;
    updatedAt: DateTime;
    users: User[];
}

export class LocationAvgAggregateOutputType {
    lat?: Nullable<number>;
    lon?: Nullable<number>;
}

export class LocationBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class LocationCountAggregateOutputType {
    _all: number;
    createdAt: number;
    id: number;
    lat: number;
    lon: number;
    name: number;
    state: number;
    updatedAt: number;
}

export class LocationCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class LocationListResponse {
    data?: Nullable<Location[]>;
    message: string;
    status: boolean;
}

export class LocationMaxAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lat?: Nullable<number>;
    lon?: Nullable<number>;
    name?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class LocationMinAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lat?: Nullable<number>;
    lon?: Nullable<number>;
    name?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class LocationResponse {
    data?: Nullable<Location>;
    message: string;
    status: boolean;
}

export class LocationSumAggregateOutputType {
    lat?: Nullable<number>;
    lon?: Nullable<number>;
}

export class MpesaPayment {
    createdAt: DateTime;
    id: string;
    input_Amount: string;
    input_Country: string;
    input_Currency: string;
    input_CustomerMSISDN: string;
    input_PurchasedItemsDesc: string;
    input_ServiceProviderCode: string;
    input_ThirdPartyConversationID: string;
    input_TransactionReference: string;
    output_ConversationID?: Nullable<string>;
    output_ResponseCode?: Nullable<string>;
    output_ResponseDesc?: Nullable<string>;
    output_ThirdPartyConversationID?: Nullable<string>;
    output_TransactionID?: Nullable<string>;
    state: State;
    transaction?: Nullable<Transaction>;
    updatedAt: DateTime;
}

export class MpesaPaymentBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class MpesaPaymentCountAggregateOutputType {
    _all: number;
    createdAt: number;
    id: number;
    input_Amount: number;
    input_Country: number;
    input_Currency: number;
    input_CustomerMSISDN: number;
    input_PurchasedItemsDesc: number;
    input_ServiceProviderCode: number;
    input_ThirdPartyConversationID: number;
    input_TransactionReference: number;
    output_ConversationID: number;
    output_ResponseCode: number;
    output_ResponseDesc: number;
    output_ThirdPartyConversationID: number;
    output_TransactionID: number;
    state: number;
    updatedAt: number;
}

export class MpesaPaymentCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class MpesaPaymentListResponse {
    data?: Nullable<MpesaPayment[]>;
    message: string;
    status: boolean;
}

export class MpesaPaymentMaxAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    input_Amount?: Nullable<string>;
    input_Country?: Nullable<string>;
    input_Currency?: Nullable<string>;
    input_CustomerMSISDN?: Nullable<string>;
    input_PurchasedItemsDesc?: Nullable<string>;
    input_ServiceProviderCode?: Nullable<string>;
    input_ThirdPartyConversationID?: Nullable<string>;
    input_TransactionReference?: Nullable<string>;
    output_ConversationID?: Nullable<string>;
    output_ResponseCode?: Nullable<string>;
    output_ResponseDesc?: Nullable<string>;
    output_ThirdPartyConversationID?: Nullable<string>;
    output_TransactionID?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class MpesaPaymentMinAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    input_Amount?: Nullable<string>;
    input_Country?: Nullable<string>;
    input_Currency?: Nullable<string>;
    input_CustomerMSISDN?: Nullable<string>;
    input_PurchasedItemsDesc?: Nullable<string>;
    input_ServiceProviderCode?: Nullable<string>;
    input_ThirdPartyConversationID?: Nullable<string>;
    input_TransactionReference?: Nullable<string>;
    output_ConversationID?: Nullable<string>;
    output_ResponseCode?: Nullable<string>;
    output_ResponseDesc?: Nullable<string>;
    output_ThirdPartyConversationID?: Nullable<string>;
    output_TransactionID?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class MpesaPaymentResponse {
    data?: Nullable<MpesaPayment>;
    message: string;
    status: boolean;
}

export abstract class IMutation {
    abstract createOneComment(data: CommentCreateInput): CommentResponse | Promise<CommentResponse>;

    abstract createOneHelp(data: HelpCreateInput): HelpResponse | Promise<HelpResponse>;

    abstract createOneOrder(data: OrderCreateInput): OrderResponse | Promise<OrderResponse>;

    abstract createOnePaymentMethod(data: PaymentMethodCreateInput): PaymentMethodResponse | Promise<PaymentMethodResponse>;

    abstract createOneReview(data: ReviewCreateInput): ReviewResponse | Promise<ReviewResponse>;

    abstract createOneService(data: ServiceCreateInput): ServiceResponse | Promise<ServiceResponse>;

    abstract createOneUser(data: UserCreateInput): UserResponse | Promise<UserResponse>;

    abstract paybill(data?: Nullable<PaybillRequest>): PaybillResponse | Promise<PaybillResponse>;

    abstract recoverAccount(email: string): AuthResult | Promise<AuthResult>;

    abstract registerDevice(data: RegisterDeviceInput): DeviceResponse | Promise<DeviceResponse>;

    abstract signin(credentials: AuthInput): AuthResult | Promise<AuthResult>;

    abstract signout(): SignOutResult | Promise<SignOutResult>;

    abstract signup(credentials: SignupInput): AuthResult | Promise<AuthResult>;

    abstract updateOneComment(data: CommentUpdateInput, where: CommentWhereUniqueInput): CommentResponse | Promise<CommentResponse>;

    abstract updateOneHelp(data: HelpUpdateInput, where: HelpWhereUniqueInput): HelpResponse | Promise<HelpResponse>;

    abstract updateOneOrder(data: OrderUpdateInput, where: OrderWhereUniqueInput): OrderResponse | Promise<OrderResponse>;

    abstract updateOnePaymentMethod(data: PaymentMethodUpdateInput, where: PaymentMethodWhereUniqueInput): PaymentMethodResponse | Promise<PaymentMethodResponse>;

    abstract updateOneReview(data: ReviewUpdateInput, where: ReviewWhereUniqueInput): ReviewResponse | Promise<ReviewResponse>;

    abstract updateOneService(data: ServiceUpdateInput, where: ServiceWhereUniqueInput): ServiceResponse | Promise<ServiceResponse>;

    abstract updateOneUser(data: UserUpdateInput, where: UserWhereUniqueInput): UserResponse | Promise<UserResponse>;

    abstract version(): Nullable<string> | Promise<Nullable<string>>;
}

export class Notification {
    message?: Nullable<string>;
    notificationType: NotificationType;
    payload?: Nullable<JSONObject>;
}

export class Order {
    createdAt: DateTime;
    id: string;
    notes?: Nullable<string>;
    owner: User;
    ownerId: string;
    quantity: number;
    receipt?: Nullable<Attachment>;
    receiptId?: Nullable<string>;
    service: Service;
    serviceId: string;
    state: State;
    transactions: Transaction[];
    updatedAt: DateTime;
}

export class OrderAvgAggregateOutputType {
    quantity?: Nullable<number>;
}

export class OrderBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class OrderCountAggregateOutputType {
    _all: number;
    createdAt: number;
    id: number;
    notes: number;
    ownerId: number;
    quantity: number;
    receiptId: number;
    serviceId: number;
    state: number;
    updatedAt: number;
}

export class OrderCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class OrderListResponse {
    data?: Nullable<Order[]>;
    message: string;
    status: boolean;
}

export class OrderMaxAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    ownerId?: Nullable<string>;
    quantity?: Nullable<number>;
    receiptId?: Nullable<string>;
    serviceId?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderMinAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    ownerId?: Nullable<string>;
    quantity?: Nullable<number>;
    receiptId?: Nullable<string>;
    serviceId?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderResponse {
    data?: Nullable<Order>;
    message: string;
    status: boolean;
}

export class OrderSumAggregateOutputType {
    quantity?: Nullable<number>;
}

export class PaybillResponse {
    data?: Nullable<Transaction>;
    message: string;
    status: boolean;
}

export class PaymentMethod {
    attachmentId: string;
    code: SelcomUtilityCode;
    createdAt: DateTime;
    description?: Nullable<string>;
    id: string;
    logo: Attachment;
    name: string;
    state: State;
    transactions: Transaction[];
    updatedAt: DateTime;
}

export class PaymentMethodBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class PaymentMethodCountAggregateOutputType {
    _all: number;
    attachmentId: number;
    code: number;
    createdAt: number;
    description: number;
    id: number;
    name: number;
    state: number;
    updatedAt: number;
}

export class PaymentMethodCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class PaymentMethodListResponse {
    data?: Nullable<PaymentMethod[]>;
    message: string;
    status: boolean;
}

export class PaymentMethodMaxAggregateOutputType {
    attachmentId?: Nullable<string>;
    code?: Nullable<SelcomUtilityCode>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class PaymentMethodMinAggregateOutputType {
    attachmentId?: Nullable<string>;
    code?: Nullable<SelcomUtilityCode>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class PaymentMethodResponse {
    data?: Nullable<PaymentMethod>;
    message: string;
    status: boolean;
}

export abstract class IQuery {
    abstract findManyComment(cursor?: Nullable<CommentWhereUniqueInput>, distinct?: Nullable<CommentScalarFieldEnum[]>, orderBy?: Nullable<CommentOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<CommentWhereInput>): CommentListResponse | Promise<CommentListResponse>;

    abstract findManyHelp(cursor?: Nullable<HelpWhereUniqueInput>, distinct?: Nullable<HelpScalarFieldEnum[]>, orderBy?: Nullable<HelpOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<HelpWhereInput>): HelpListResponse | Promise<HelpListResponse>;

    abstract findManyOrder(cursor?: Nullable<OrderWhereUniqueInput>, distinct?: Nullable<OrderScalarFieldEnum[]>, orderBy?: Nullable<OrderOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<OrderWhereInput>): OrderListResponse | Promise<OrderListResponse>;

    abstract findManyPaymentMethod(cursor?: Nullable<PaymentMethodWhereUniqueInput>, distinct?: Nullable<PaymentMethodScalarFieldEnum[]>, orderBy?: Nullable<PaymentMethodOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<PaymentMethodWhereInput>): PaymentMethodListResponse | Promise<PaymentMethodListResponse>;

    abstract findManyReview(cursor?: Nullable<ReviewWhereUniqueInput>, distinct?: Nullable<ReviewScalarFieldEnum[]>, orderBy?: Nullable<ReviewOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<ReviewWhereInput>): ReviewListResponse | Promise<ReviewListResponse>;

    abstract findManyService(cursor?: Nullable<ServiceWhereUniqueInput>, distinct?: Nullable<ServiceScalarFieldEnum[]>, orderBy?: Nullable<ServiceOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<ServiceWhereInput>): ServiceListResponse | Promise<ServiceListResponse>;

    abstract findManyUser(cursor?: Nullable<UserWhereUniqueInput>, distinct?: Nullable<UserScalarFieldEnum[]>, orderBy?: Nullable<UserOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<UserWhereInput>): UserListResponse | Promise<UserListResponse>;

    abstract findUniqueComment(where: CommentWhereUniqueInput): CommentResponse | Promise<CommentResponse>;

    abstract findUniqueHelp(where: HelpWhereUniqueInput): HelpResponse | Promise<HelpResponse>;

    abstract findUniqueOrder(where: OrderWhereUniqueInput): OrderResponse | Promise<OrderResponse>;

    abstract findUniquePaymentMethod(where: PaymentMethodWhereUniqueInput): PaymentMethodResponse | Promise<PaymentMethodResponse>;

    abstract findUniqueReview(where: ReviewWhereUniqueInput): ReviewResponse | Promise<ReviewResponse>;

    abstract findUniqueService(where: ServiceWhereUniqueInput): ServiceResponse | Promise<ServiceResponse>;

    abstract findUniqueUser(where: UserWhereUniqueInput): UserResponse | Promise<UserResponse>;

    abstract version(): Nullable<string> | Promise<Nullable<string>>;
}

export class Review {
    author: User;
    authorId: string;
    comments: Comment[];
    content?: Nullable<string>;
    createdAt: DateTime;
    id: string;
    reviewee: User;
    revieweeId: string;
    state: State;
    updatedAt: DateTime;
    value: number;
}

export class ReviewAvgAggregateOutputType {
    value?: Nullable<number>;
}

export class ReviewBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class ReviewCountAggregateOutputType {
    _all: number;
    authorId: number;
    content: number;
    createdAt: number;
    id: number;
    revieweeId: number;
    state: number;
    updatedAt: number;
    value: number;
}

export class ReviewCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class ReviewListResponse {
    data?: Nullable<Review[]>;
    message: string;
    status: boolean;
}

export class ReviewMaxAggregateOutputType {
    authorId?: Nullable<string>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    revieweeId?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewMinAggregateOutputType {
    authorId?: Nullable<string>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    revieweeId?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewResponse {
    data?: Nullable<Review>;
    message: string;
    status: boolean;
}

export class ReviewSumAggregateOutputType {
    value?: Nullable<number>;
}

export class SelcomDisbursement {
    amount: number;
    createdAt: DateTime;
    id: string;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state: State;
    status: SelcomPaymentStatus;
    transId: string;
    transaction?: Nullable<Transaction>;
    updatedAt: DateTime;
    userId: number;
    utilitycode: SelcomUtilityCode;
    utilityref: string;
    validation: SelcomPaymentStatus;
}

export class SelcomDisbursementAvgAggregateOutputType {
    amount?: Nullable<number>;
    userId?: Nullable<number>;
}

export class SelcomDisbursementBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class SelcomDisbursementCountAggregateOutputType {
    _all: number;
    amount: number;
    createdAt: number;
    id: number;
    reference: number;
    resultCode: number;
    state: number;
    status: number;
    transId: number;
    updatedAt: number;
    userId: number;
    utilitycode: number;
    utilityref: number;
    validation: number;
}

export class SelcomDisbursementCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class SelcomDisbursementListResponse {
    data?: Nullable<SelcomDisbursement[]>;
    message: string;
    status: boolean;
}

export class SelcomDisbursementMaxAggregateOutputType {
    amount?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<number>;
    utilitycode?: Nullable<SelcomUtilityCode>;
    utilityref?: Nullable<string>;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomDisbursementMinAggregateOutputType {
    amount?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<number>;
    utilitycode?: Nullable<SelcomUtilityCode>;
    utilityref?: Nullable<string>;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomDisbursementResponse {
    data?: Nullable<SelcomDisbursement>;
    message: string;
    status: boolean;
}

export class SelcomDisbursementSumAggregateOutputType {
    amount?: Nullable<number>;
    userId?: Nullable<number>;
}

export class SelcomPayment {
    amount: number;
    createdAt: DateTime;
    id: string;
    msisdn: string;
    operator?: Nullable<string>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state: State;
    status: SelcomPaymentStatus;
    transId: string;
    transaction?: Nullable<Transaction>;
    updatedAt: DateTime;
    utilityref: number;
    validation: SelcomPaymentStatus;
}

export class SelcomPaymentAvgAggregateOutputType {
    amount?: Nullable<number>;
    utilityref?: Nullable<number>;
}

export class SelcomPaymentBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class SelcomPaymentCountAggregateOutputType {
    _all: number;
    amount: number;
    createdAt: number;
    id: number;
    msisdn: number;
    operator: number;
    reference: number;
    resultCode: number;
    state: number;
    status: number;
    transId: number;
    updatedAt: number;
    utilityref: number;
    validation: number;
}

export class SelcomPaymentCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class SelcomPaymentListResponse {
    data?: Nullable<SelcomPayment[]>;
    message: string;
    status: boolean;
}

export class SelcomPaymentMaxAggregateOutputType {
    amount?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    msisdn?: Nullable<string>;
    operator?: Nullable<string>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    utilityref?: Nullable<number>;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomPaymentMinAggregateOutputType {
    amount?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    msisdn?: Nullable<string>;
    operator?: Nullable<string>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    utilityref?: Nullable<number>;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomPaymentResponse {
    data?: Nullable<SelcomPayment>;
    message: string;
    status: boolean;
}

export class SelcomPaymentSumAggregateOutputType {
    amount?: Nullable<number>;
    utilityref?: Nullable<number>;
}

export class Service {
    author: User;
    authorId: string;
    createdAt: DateTime;
    currency: string;
    description?: Nullable<string>;
    id: string;
    image?: Nullable<Attachment>;
    imageId?: Nullable<string>;
    name: string;
    orders: Order[];
    price: number;
    state: State;
    updatedAt: DateTime;
}

export class ServiceAvgAggregateOutputType {
    price?: Nullable<number>;
}

export class ServiceBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class ServiceCountAggregateOutputType {
    _all: number;
    authorId: number;
    createdAt: number;
    currency: number;
    description: number;
    id: number;
    imageId: number;
    name: number;
    price: number;
    state: number;
    updatedAt: number;
}

export class ServiceCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class ServiceListResponse {
    data?: Nullable<Service[]>;
    message: string;
    status: boolean;
}

export class ServiceMaxAggregateOutputType {
    authorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId?: Nullable<string>;
    name?: Nullable<string>;
    price?: Nullable<number>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceMinAggregateOutputType {
    authorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId?: Nullable<string>;
    name?: Nullable<string>;
    price?: Nullable<number>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceResponse {
    data?: Nullable<Service>;
    message: string;
    status: boolean;
}

export class ServiceSumAggregateOutputType {
    price?: Nullable<number>;
}

export class SignOutResult {
    message?: Nullable<string>;
    status?: Nullable<boolean>;
}

export class Transaction {
    createdAt: DateTime;
    id: string;
    mpesaPayment?: Nullable<MpesaPayment>;
    mpesaPaymentId?: Nullable<string>;
    order: Order;
    orderId: string;
    paymentMethod: PaymentMethod;
    paymentMethodId: string;
    selcomDisbursement?: Nullable<SelcomDisbursement>;
    selcomDisbursementId?: Nullable<string>;
    selcomPayment?: Nullable<SelcomPayment>;
    selcomPaymentId?: Nullable<string>;
    state: State;
    type: TransactionType;
    updatedAt: DateTime;
}

export class TransactionBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class TransactionCountAggregateOutputType {
    _all: number;
    createdAt: number;
    id: number;
    mpesaPaymentId: number;
    orderId: number;
    paymentMethodId: number;
    selcomDisbursementId: number;
    selcomPaymentId: number;
    state: number;
    type: number;
    updatedAt: number;
}

export class TransactionCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class TransactionListResponse {
    data?: Nullable<Transaction[]>;
    message: string;
    status: boolean;
}

export class TransactionMaxAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPaymentId?: Nullable<string>;
    orderId?: Nullable<string>;
    paymentMethodId?: Nullable<string>;
    selcomDisbursementId?: Nullable<string>;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<State>;
    type?: Nullable<TransactionType>;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionMinAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPaymentId?: Nullable<string>;
    orderId?: Nullable<string>;
    paymentMethodId?: Nullable<string>;
    selcomDisbursementId?: Nullable<string>;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<State>;
    type?: Nullable<TransactionType>;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionResponse {
    data?: Nullable<Transaction>;
    message: string;
    status: boolean;
}

export class User {
    avator?: Nullable<Attachment>;
    avatorId?: Nullable<string>;
    businessProfile?: Nullable<BusinessProfile>;
    comments: Comment[];
    createdAt: DateTime;
    device?: Nullable<Device>;
    disabled: boolean;
    displayName: string;
    email: string;
    emailVerified: boolean;
    id: string;
    lastSeen?: Nullable<DateTime>;
    location: Location;
    locationId: string;
    orders: Order[];
    phoneNumber?: Nullable<string>;
    reviewed: Review[];
    reviews: Review[];
    role: Role;
    services: Service[];
    state: State;
    updatedAt: DateTime;
}

export class UserBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class UserCountAggregateOutputType {
    _all: number;
    avatorId: number;
    createdAt: number;
    disabled: number;
    displayName: number;
    email: number;
    emailVerified: number;
    id: number;
    locationId: number;
    phoneNumber: number;
    role: number;
    state: number;
    updatedAt: number;
}

export class UserCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class UserListResponse {
    data?: Nullable<User[]>;
    message: string;
    status: boolean;
}

export class UserMaxAggregateOutputType {
    avatorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    disabled?: Nullable<boolean>;
    displayName?: Nullable<string>;
    email?: Nullable<string>;
    emailVerified?: Nullable<boolean>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    phoneNumber?: Nullable<string>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserMinAggregateOutputType {
    avatorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    disabled?: Nullable<boolean>;
    displayName?: Nullable<string>;
    email?: Nullable<string>;
    emailVerified?: Nullable<boolean>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    phoneNumber?: Nullable<string>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserResponse {
    data?: Nullable<User>;
    message: string;
    status: boolean;
}

export type DateTime = string;
export type JSONObject = any;
export type Upload = Promise < FileUpload >;
type Nullable<T> = T | null;
