
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

import { FileUpload } from 'graphql-upload';

export enum AnswerScalarFieldEnum {
    booleanValue = "booleanValue",
    createdAt = "createdAt",
    id = "id",
    questionId = "questionId",
    responseId = "responseId",
    textValue = "textValue",
    updatedAt = "updatedAt"
}

export enum AttachmentScalarFieldEnum {
    answerId = "answerId",
    attachmentType = "attachmentType",
    commentId = "commentId",
    createdAt = "createdAt",
    downloadable = "downloadable",
    duration = "duration",
    encoding = "encoding",
    filename = "filename",
    formId = "formId",
    forumAnswerId = "forumAnswerId",
    forumId = "forumId",
    gradeId = "gradeId",
    helpStepId = "helpStepId",
    id = "id",
    mimetype = "mimetype",
    path = "path",
    placement = "placement",
    questionId = "questionId",
    recommendationId = "recommendationId",
    responseId = "responseId",
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
    forumAnswerId = "forumAnswerId",
    forumId = "forumId",
    id = "id",
    state = "state",
    updatedAt = "updatedAt"
}

export enum DeviceScalarFieldEnum {
    fcm_id = "fcm_id",
    id = "id",
    type = "type",
    userId = "userId"
}

export enum FormScalarFieldEnum {
    authorId = "authorId",
    createdAt = "createdAt",
    description = "description",
    id = "id",
    state = "state",
    tagId = "tagId",
    title = "title",
    updatedAt = "updatedAt"
}

export enum ForumAnswerScalarFieldEnum {
    authorId = "authorId",
    commentsEnabled = "commentsEnabled",
    content = "content",
    createdAt = "createdAt",
    forumId = "forumId",
    id = "id",
    state = "state",
    updatedAt = "updatedAt"
}

export enum ForumScalarFieldEnum {
    authorId = "authorId",
    commentsEnabled = "commentsEnabled",
    createdAt = "createdAt",
    description = "description",
    id = "id",
    question = "question",
    state = "state",
    type = "type",
    updatedAt = "updatedAt"
}

export enum ForumType {
    FAQ = "FAQ",
    NORMAL = "NORMAL"
}

export enum GradeScalarFieldEnum {
    createdAt = "createdAt",
    description = "description",
    formId = "formId",
    id = "id",
    maxInclusive = "maxInclusive",
    maxValue = "maxValue",
    minInclusive = "minInclusive",
    minValue = "minValue",
    name = "name",
    updatedAt = "updatedAt"
}

export enum HelpScalarFieldEnum {
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
    ANSWER_RECIEVED = "ANSWER_RECIEVED",
    ORDER_ACCEPTED = "ORDER_ACCEPTED",
    ORDER_CANCELLED = "ORDER_CANCELLED",
    ORDER_DELIVERED = "ORDER_DELIVERED",
    ORDER_DISPATCHED = "ORDER_DISPATCHED",
    ORDER_PAYED = "ORDER_PAYED",
    ORDER_RECIEVED = "ORDER_RECIEVED",
    ORDER_UPDATED = "ORDER_UPDATED",
    QUESTION_ACCEPTED = "QUESTION_ACCEPTED",
    QUESTION_REJECTED = "QUESTION_REJECTED",
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

export enum QuestionScalarFieldEnum {
    createdAt = "createdAt",
    gradeId = "gradeId",
    id = "id",
    instruction = "instruction",
    question = "question",
    questionNumber = "questionNumber",
    questionType = "questionType",
    updatedAt = "updatedAt",
    weight = "weight"
}

export enum QuestionType {
    BOOLEAN = "BOOLEAN",
    TEXT = "TEXT"
}

export enum RecommendationScalarFieldEnum {
    content = "content",
    createdAt = "createdAt",
    gradeId = "gradeId",
    id = "id",
    type = "type",
    updatedAt = "updatedAt"
}

export enum RecommendationType {
    INORGANIC = "INORGANIC",
    ORGANIC = "ORGANIC"
}

export enum ResponseScalarFieldEnum {
    authorId = "authorId",
    createdAt = "createdAt",
    formId = "formId",
    gradeId = "gradeId",
    id = "id",
    state = "state",
    updatedAt = "updatedAt"
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
    createdAt = "createdAt",
    description = "description",
    id = "id",
    imageId = "imageId",
    name = "name",
    price = "price",
    state = "state",
    updatedAt = "updatedAt",
    value = "value"
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

export enum TagScalarFieldEnum {
    attachmentId = "attachmentId",
    createdAt = "createdAt",
    description = "description",
    id = "id",
    name = "name",
    state = "state",
    updatedAt = "updatedAt"
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
    updatedAt = "updatedAt",
    userId = "userId"
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
    phoneNumber = "phoneNumber",
    role = "role",
    state = "state",
    updatedAt = "updatedAt"
}

export class AnswerCreateInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutAnswerInput>;
    booleanValue?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    question: QuestionCreateNestedOneWithoutAnswersInput;
    response: ResponseCreateNestedOneWithoutAnswersInput;
    textValue?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class AnswerCreateManyInput {
    booleanValue?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    questionId: string;
    responseId: string;
    textValue?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class AnswerCreateManyQuestionInput {
    booleanValue?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    responseId: string;
    textValue?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class AnswerCreateManyQuestionInputEnvelope {
    data: AnswerCreateManyQuestionInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class AnswerCreateManyResponseInput {
    booleanValue?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    questionId: string;
    textValue?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class AnswerCreateManyResponseInputEnvelope {
    data: AnswerCreateManyResponseInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class AnswerCreateNestedManyWithoutQuestionInput {
    connect?: Nullable<AnswerWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AnswerCreateOrConnectWithoutQuestionInput[]>;
    create?: Nullable<AnswerCreateWithoutQuestionInput[]>;
    createMany?: Nullable<AnswerCreateManyQuestionInputEnvelope>;
}

export class AnswerCreateNestedManyWithoutResponseInput {
    connect?: Nullable<AnswerWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AnswerCreateOrConnectWithoutResponseInput[]>;
    create?: Nullable<AnswerCreateWithoutResponseInput[]>;
    createMany?: Nullable<AnswerCreateManyResponseInputEnvelope>;
}

export class AnswerCreateNestedOneWithoutAttachmentsInput {
    connect?: Nullable<AnswerWhereUniqueInput>;
    connectOrCreate?: Nullable<AnswerCreateOrConnectWithoutAttachmentsInput>;
    create?: Nullable<AnswerUncheckedCreateWithoutAttachmentsInput>;
}

export class AnswerCreateOrConnectWithoutAttachmentsInput {
    create: AnswerUncheckedCreateWithoutAttachmentsInput;
    where: AnswerWhereUniqueInput;
}

export class AnswerCreateOrConnectWithoutQuestionInput {
    create: AnswerUncheckedCreateWithoutQuestionInput;
    where: AnswerWhereUniqueInput;
}

export class AnswerCreateOrConnectWithoutResponseInput {
    create: AnswerUncheckedCreateWithoutResponseInput;
    where: AnswerWhereUniqueInput;
}

export class AnswerCreateWithoutAttachmentsInput {
    booleanValue?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    question: QuestionCreateNestedOneWithoutAnswersInput;
    response: ResponseCreateNestedOneWithoutAnswersInput;
    textValue?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class AnswerCreateWithoutQuestionInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutAnswerInput>;
    booleanValue?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    response: ResponseCreateNestedOneWithoutAnswersInput;
    textValue?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class AnswerCreateWithoutResponseInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutAnswerInput>;
    booleanValue?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    question: QuestionCreateNestedOneWithoutAnswersInput;
    textValue?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class AnswerListRelationFilter {
    every?: Nullable<AnswerWhereInput>;
    none?: Nullable<AnswerWhereInput>;
    some?: Nullable<AnswerWhereInput>;
}

export class AnswerOrderByInput {
    booleanValue?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    questionId?: Nullable<SortOrder>;
    responseId?: Nullable<SortOrder>;
    textValue?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class AnswerRelationFilter {
    is?: Nullable<AnswerWhereInput>;
    isNot?: Nullable<AnswerWhereInput>;
}

export class AnswerScalarWhereInput {
    AND?: Nullable<AnswerScalarWhereInput[]>;
    NOT?: Nullable<AnswerScalarWhereInput[]>;
    OR?: Nullable<AnswerScalarWhereInput[]>;
    booleanValue?: Nullable<BoolNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    questionId?: Nullable<StringFilter>;
    responseId?: Nullable<StringFilter>;
    textValue?: Nullable<StringNullableFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class AnswerScalarWhereWithAggregatesInput {
    AND?: Nullable<AnswerScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<AnswerScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<AnswerScalarWhereWithAggregatesInput[]>;
    booleanValue?: Nullable<BoolNullableWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    questionId?: Nullable<StringWithAggregatesFilter>;
    responseId?: Nullable<StringWithAggregatesFilter>;
    textValue?: Nullable<StringNullableWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class AnswerUncheckedCreateInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutAnswerInput>;
    booleanValue?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    questionId: string;
    responseId: string;
    textValue?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class AnswerUncheckedCreateNestedManyWithoutQuestionInput {
    connect?: Nullable<AnswerWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AnswerCreateOrConnectWithoutQuestionInput[]>;
    create?: Nullable<AnswerCreateWithoutQuestionInput[]>;
    createMany?: Nullable<AnswerCreateManyQuestionInputEnvelope>;
}

export class AnswerUncheckedCreateNestedManyWithoutResponseInput {
    connect?: Nullable<AnswerWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AnswerCreateOrConnectWithoutResponseInput[]>;
    create?: Nullable<AnswerCreateWithoutResponseInput[]>;
    createMany?: Nullable<AnswerCreateManyResponseInputEnvelope>;
}

export class AnswerUncheckedCreateWithoutAttachmentsInput {
    booleanValue?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    questionId: string;
    responseId: string;
    textValue?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class AnswerUncheckedCreateWithoutQuestionInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutAnswerInput>;
    booleanValue?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    responseId: string;
    textValue?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class AnswerUncheckedCreateWithoutResponseInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutAnswerInput>;
    booleanValue?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    questionId: string;
    textValue?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class AnswerUncheckedUpdateInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutAnswerInput>;
    booleanValue?: Nullable<NullableBoolFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    questionId?: Nullable<StringFieldUpdateOperationsInput>;
    responseId?: Nullable<StringFieldUpdateOperationsInput>;
    textValue?: Nullable<NullableStringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AnswerUncheckedUpdateManyInput {
    booleanValue?: Nullable<NullableBoolFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    questionId?: Nullable<StringFieldUpdateOperationsInput>;
    responseId?: Nullable<StringFieldUpdateOperationsInput>;
    textValue?: Nullable<NullableStringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AnswerUncheckedUpdateManyWithoutAnswersInput {
    booleanValue?: Nullable<NullableBoolFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    questionId?: Nullable<StringFieldUpdateOperationsInput>;
    textValue?: Nullable<NullableStringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AnswerUncheckedUpdateManyWithoutQuestionInput {
    connect?: Nullable<AnswerWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AnswerCreateOrConnectWithoutQuestionInput[]>;
    create?: Nullable<AnswerCreateWithoutQuestionInput[]>;
    createMany?: Nullable<AnswerCreateManyQuestionInputEnvelope>;
    delete?: Nullable<AnswerWhereUniqueInput[]>;
    deleteMany?: Nullable<AnswerScalarWhereInput[]>;
    disconnect?: Nullable<AnswerWhereUniqueInput[]>;
    set?: Nullable<AnswerWhereUniqueInput[]>;
    update?: Nullable<AnswerUpdateWithWhereUniqueWithoutQuestionInput[]>;
    updateMany?: Nullable<AnswerUpdateManyWithWhereWithoutQuestionInput[]>;
    upsert?: Nullable<AnswerUpsertWithWhereUniqueWithoutQuestionInput[]>;
}

export class AnswerUncheckedUpdateManyWithoutResponseInput {
    connect?: Nullable<AnswerWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AnswerCreateOrConnectWithoutResponseInput[]>;
    create?: Nullable<AnswerCreateWithoutResponseInput[]>;
    createMany?: Nullable<AnswerCreateManyResponseInputEnvelope>;
    delete?: Nullable<AnswerWhereUniqueInput[]>;
    deleteMany?: Nullable<AnswerScalarWhereInput[]>;
    disconnect?: Nullable<AnswerWhereUniqueInput[]>;
    set?: Nullable<AnswerWhereUniqueInput[]>;
    update?: Nullable<AnswerUpdateWithWhereUniqueWithoutResponseInput[]>;
    updateMany?: Nullable<AnswerUpdateManyWithWhereWithoutResponseInput[]>;
    upsert?: Nullable<AnswerUpsertWithWhereUniqueWithoutResponseInput[]>;
}

export class AnswerUncheckedUpdateWithoutAttachmentsInput {
    booleanValue?: Nullable<NullableBoolFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    questionId?: Nullable<StringFieldUpdateOperationsInput>;
    responseId?: Nullable<StringFieldUpdateOperationsInput>;
    textValue?: Nullable<NullableStringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AnswerUncheckedUpdateWithoutQuestionInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutAnswerInput>;
    booleanValue?: Nullable<NullableBoolFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    responseId?: Nullable<StringFieldUpdateOperationsInput>;
    textValue?: Nullable<NullableStringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AnswerUncheckedUpdateWithoutResponseInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutAnswerInput>;
    booleanValue?: Nullable<NullableBoolFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    questionId?: Nullable<StringFieldUpdateOperationsInput>;
    textValue?: Nullable<NullableStringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AnswerUpdateInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutAnswerInput>;
    booleanValue?: Nullable<NullableBoolFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<QuestionUpdateOneRequiredWithoutAnswersInput>;
    response?: Nullable<ResponseUpdateOneRequiredWithoutAnswersInput>;
    textValue?: Nullable<NullableStringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AnswerUpdateManyMutationInput {
    booleanValue?: Nullable<NullableBoolFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    textValue?: Nullable<NullableStringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AnswerUpdateManyWithWhereWithoutQuestionInput {
    data: AnswerUncheckedUpdateManyWithoutAnswersInput;
    where: AnswerScalarWhereInput;
}

export class AnswerUpdateManyWithWhereWithoutResponseInput {
    data: AnswerUncheckedUpdateManyWithoutAnswersInput;
    where: AnswerScalarWhereInput;
}

export class AnswerUpdateManyWithoutQuestionInput {
    connect?: Nullable<AnswerWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AnswerCreateOrConnectWithoutQuestionInput[]>;
    create?: Nullable<AnswerCreateWithoutQuestionInput[]>;
    createMany?: Nullable<AnswerCreateManyQuestionInputEnvelope>;
    delete?: Nullable<AnswerWhereUniqueInput[]>;
    deleteMany?: Nullable<AnswerScalarWhereInput[]>;
    disconnect?: Nullable<AnswerWhereUniqueInput[]>;
    set?: Nullable<AnswerWhereUniqueInput[]>;
    update?: Nullable<AnswerUpdateWithWhereUniqueWithoutQuestionInput[]>;
    updateMany?: Nullable<AnswerUpdateManyWithWhereWithoutQuestionInput[]>;
    upsert?: Nullable<AnswerUpsertWithWhereUniqueWithoutQuestionInput[]>;
}

export class AnswerUpdateManyWithoutResponseInput {
    connect?: Nullable<AnswerWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AnswerCreateOrConnectWithoutResponseInput[]>;
    create?: Nullable<AnswerCreateWithoutResponseInput[]>;
    createMany?: Nullable<AnswerCreateManyResponseInputEnvelope>;
    delete?: Nullable<AnswerWhereUniqueInput[]>;
    deleteMany?: Nullable<AnswerScalarWhereInput[]>;
    disconnect?: Nullable<AnswerWhereUniqueInput[]>;
    set?: Nullable<AnswerWhereUniqueInput[]>;
    update?: Nullable<AnswerUpdateWithWhereUniqueWithoutResponseInput[]>;
    updateMany?: Nullable<AnswerUpdateManyWithWhereWithoutResponseInput[]>;
    upsert?: Nullable<AnswerUpsertWithWhereUniqueWithoutResponseInput[]>;
}

export class AnswerUpdateOneWithoutAttachmentsInput {
    connect?: Nullable<AnswerWhereUniqueInput>;
    connectOrCreate?: Nullable<AnswerCreateOrConnectWithoutAttachmentsInput>;
    create?: Nullable<AnswerUncheckedCreateWithoutAttachmentsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<AnswerUncheckedUpdateWithoutAttachmentsInput>;
    upsert?: Nullable<AnswerUpsertWithoutAttachmentsInput>;
}

export class AnswerUpdateWithWhereUniqueWithoutQuestionInput {
    data: AnswerUncheckedUpdateWithoutQuestionInput;
    where: AnswerWhereUniqueInput;
}

export class AnswerUpdateWithWhereUniqueWithoutResponseInput {
    data: AnswerUncheckedUpdateWithoutResponseInput;
    where: AnswerWhereUniqueInput;
}

export class AnswerUpdateWithoutAttachmentsInput {
    booleanValue?: Nullable<NullableBoolFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<QuestionUpdateOneRequiredWithoutAnswersInput>;
    response?: Nullable<ResponseUpdateOneRequiredWithoutAnswersInput>;
    textValue?: Nullable<NullableStringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AnswerUpdateWithoutQuestionInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutAnswerInput>;
    booleanValue?: Nullable<NullableBoolFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    response?: Nullable<ResponseUpdateOneRequiredWithoutAnswersInput>;
    textValue?: Nullable<NullableStringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AnswerUpdateWithoutResponseInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutAnswerInput>;
    booleanValue?: Nullable<NullableBoolFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<QuestionUpdateOneRequiredWithoutAnswersInput>;
    textValue?: Nullable<NullableStringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AnswerUpsertWithWhereUniqueWithoutQuestionInput {
    create: AnswerUncheckedCreateWithoutQuestionInput;
    update: AnswerUncheckedUpdateWithoutQuestionInput;
    where: AnswerWhereUniqueInput;
}

export class AnswerUpsertWithWhereUniqueWithoutResponseInput {
    create: AnswerUncheckedCreateWithoutResponseInput;
    update: AnswerUncheckedUpdateWithoutResponseInput;
    where: AnswerWhereUniqueInput;
}

export class AnswerUpsertWithoutAttachmentsInput {
    create: AnswerUncheckedCreateWithoutAttachmentsInput;
    update: AnswerUncheckedUpdateWithoutAttachmentsInput;
}

export class AnswerWhereInput {
    AND?: Nullable<AnswerWhereInput[]>;
    NOT?: Nullable<AnswerWhereInput[]>;
    OR?: Nullable<AnswerWhereInput[]>;
    attachments?: Nullable<AttachmentListRelationFilter>;
    booleanValue?: Nullable<BoolNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    question?: Nullable<QuestionWhereInput>;
    questionId?: Nullable<StringFilter>;
    response?: Nullable<ResponseWhereInput>;
    responseId?: Nullable<StringFilter>;
    textValue?: Nullable<StringNullableFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class AnswerWhereUniqueInput {
    id?: Nullable<string>;
}

export class AttachmentCreateInput {
    answer?: Nullable<AnswerCreateNestedOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<AttachmentType>;
    comment?: Nullable<CommentCreateNestedOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    form?: Nullable<FormCreateNestedOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumCreateNestedOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerCreateNestedOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeCreateNestedOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepCreateNestedOneWithoutAttachmentsInput>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    question?: Nullable<QuestionCreateNestedOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationCreateNestedOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseCreateNestedOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateManyAnswerInput {
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    gradeId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    path: Upload;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    recommendationId?: Nullable<string>;
    responseId?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
}

export class AttachmentCreateManyAnswerInputEnvelope {
    data: AttachmentCreateManyAnswerInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class AttachmentCreateManyCommentInput {
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    gradeId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    path: Upload;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    recommendationId?: Nullable<string>;
    responseId?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
}

export class AttachmentCreateManyCommentInputEnvelope {
    data: AttachmentCreateManyCommentInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class AttachmentCreateManyFormInput {
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    gradeId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    path: Upload;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    recommendationId?: Nullable<string>;
    responseId?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
}

export class AttachmentCreateManyFormInputEnvelope {
    data: AttachmentCreateManyFormInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class AttachmentCreateManyForumAnswerInput {
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumId?: Nullable<string>;
    gradeId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    path: Upload;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    recommendationId?: Nullable<string>;
    responseId?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
}

export class AttachmentCreateManyForumAnswerInputEnvelope {
    data: AttachmentCreateManyForumAnswerInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class AttachmentCreateManyForumInput {
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    gradeId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    path: Upload;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    recommendationId?: Nullable<string>;
    responseId?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
}

export class AttachmentCreateManyForumInputEnvelope {
    data: AttachmentCreateManyForumInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class AttachmentCreateManyGradeInput {
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    path: Upload;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    recommendationId?: Nullable<string>;
    responseId?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
}

export class AttachmentCreateManyGradeInputEnvelope {
    data: AttachmentCreateManyGradeInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class AttachmentCreateManyHelpStepInput {
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    gradeId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    path: Upload;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    recommendationId?: Nullable<string>;
    responseId?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
}

export class AttachmentCreateManyHelpStepInputEnvelope {
    data: AttachmentCreateManyHelpStepInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class AttachmentCreateManyInput {
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    gradeId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    path: Upload;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    recommendationId?: Nullable<string>;
    responseId?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
}

export class AttachmentCreateManyQuestionInput {
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    gradeId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    path: Upload;
    placement?: Nullable<string>;
    recommendationId?: Nullable<string>;
    responseId?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
}

export class AttachmentCreateManyQuestionInputEnvelope {
    data: AttachmentCreateManyQuestionInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class AttachmentCreateManyRecommendationInput {
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    gradeId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    path: Upload;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    responseId?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
}

export class AttachmentCreateManyRecommendationInputEnvelope {
    data: AttachmentCreateManyRecommendationInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class AttachmentCreateManyResponseInput {
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    gradeId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    path: Upload;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    recommendationId?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
}

export class AttachmentCreateManyResponseInputEnvelope {
    data: AttachmentCreateManyResponseInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class AttachmentCreateNestedManyWithoutAnswerInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutAnswerInput[]>;
    create?: Nullable<AttachmentCreateWithoutAnswerInput[]>;
    createMany?: Nullable<AttachmentCreateManyAnswerInputEnvelope>;
}

export class AttachmentCreateNestedManyWithoutCommentInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutCommentInput[]>;
    create?: Nullable<AttachmentCreateWithoutCommentInput[]>;
    createMany?: Nullable<AttachmentCreateManyCommentInputEnvelope>;
}

export class AttachmentCreateNestedManyWithoutFormInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutFormInput[]>;
    create?: Nullable<AttachmentCreateWithoutFormInput[]>;
    createMany?: Nullable<AttachmentCreateManyFormInputEnvelope>;
}

export class AttachmentCreateNestedManyWithoutForumAnswerInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutForumAnswerInput[]>;
    create?: Nullable<AttachmentCreateWithoutForumAnswerInput[]>;
    createMany?: Nullable<AttachmentCreateManyForumAnswerInputEnvelope>;
}

export class AttachmentCreateNestedManyWithoutForumInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutForumInput[]>;
    create?: Nullable<AttachmentCreateWithoutForumInput[]>;
    createMany?: Nullable<AttachmentCreateManyForumInputEnvelope>;
}

export class AttachmentCreateNestedManyWithoutGradeInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutGradeInput[]>;
    create?: Nullable<AttachmentCreateWithoutGradeInput[]>;
    createMany?: Nullable<AttachmentCreateManyGradeInputEnvelope>;
}

export class AttachmentCreateNestedManyWithoutHelpStepInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutHelpStepInput[]>;
    create?: Nullable<AttachmentCreateWithoutHelpStepInput[]>;
    createMany?: Nullable<AttachmentCreateManyHelpStepInputEnvelope>;
}

export class AttachmentCreateNestedManyWithoutQuestionInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutQuestionInput[]>;
    create?: Nullable<AttachmentCreateWithoutQuestionInput[]>;
    createMany?: Nullable<AttachmentCreateManyQuestionInputEnvelope>;
}

export class AttachmentCreateNestedManyWithoutRecommendationInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutRecommendationInput[]>;
    create?: Nullable<AttachmentCreateWithoutRecommendationInput[]>;
    createMany?: Nullable<AttachmentCreateManyRecommendationInputEnvelope>;
}

export class AttachmentCreateNestedManyWithoutResponseInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutResponseInput[]>;
    create?: Nullable<AttachmentCreateWithoutResponseInput[]>;
    createMany?: Nullable<AttachmentCreateManyResponseInputEnvelope>;
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

export class AttachmentCreateNestedOneWithoutTagsInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutTagsInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutTagsInput>;
}

export class AttachmentCreateNestedOneWithoutUserInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutUserInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutUserInput>;
}

export class AttachmentCreateOrConnectWithoutAnswerInput {
    create: AttachmentUncheckedCreateWithoutAnswerInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateOrConnectWithoutCommentInput {
    create: AttachmentUncheckedCreateWithoutCommentInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateOrConnectWithoutFormInput {
    create: AttachmentUncheckedCreateWithoutFormInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateOrConnectWithoutForumAnswerInput {
    create: AttachmentUncheckedCreateWithoutForumAnswerInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateOrConnectWithoutForumInput {
    create: AttachmentUncheckedCreateWithoutForumInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateOrConnectWithoutGradeInput {
    create: AttachmentUncheckedCreateWithoutGradeInput;
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

export class AttachmentCreateOrConnectWithoutQuestionInput {
    create: AttachmentUncheckedCreateWithoutQuestionInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateOrConnectWithoutRecommendationInput {
    create: AttachmentUncheckedCreateWithoutRecommendationInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateOrConnectWithoutResponseInput {
    create: AttachmentUncheckedCreateWithoutResponseInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateOrConnectWithoutServicesInput {
    create: AttachmentUncheckedCreateWithoutServicesInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateOrConnectWithoutTagsInput {
    create: AttachmentUncheckedCreateWithoutTagsInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateOrConnectWithoutUserInput {
    create: AttachmentUncheckedCreateWithoutUserInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateWithoutAnswerInput {
    attachmentType?: Nullable<AttachmentType>;
    comment?: Nullable<CommentCreateNestedOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    form?: Nullable<FormCreateNestedOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumCreateNestedOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerCreateNestedOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeCreateNestedOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepCreateNestedOneWithoutAttachmentsInput>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    question?: Nullable<QuestionCreateNestedOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationCreateNestedOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseCreateNestedOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutCommentInput {
    answer?: Nullable<AnswerCreateNestedOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<AttachmentType>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    form?: Nullable<FormCreateNestedOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumCreateNestedOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerCreateNestedOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeCreateNestedOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepCreateNestedOneWithoutAttachmentsInput>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    question?: Nullable<QuestionCreateNestedOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationCreateNestedOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseCreateNestedOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutFormInput {
    answer?: Nullable<AnswerCreateNestedOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<AttachmentType>;
    comment?: Nullable<CommentCreateNestedOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    forum?: Nullable<ForumCreateNestedOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerCreateNestedOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeCreateNestedOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepCreateNestedOneWithoutAttachmentsInput>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    question?: Nullable<QuestionCreateNestedOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationCreateNestedOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseCreateNestedOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutForumAnswerInput {
    answer?: Nullable<AnswerCreateNestedOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<AttachmentType>;
    comment?: Nullable<CommentCreateNestedOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    form?: Nullable<FormCreateNestedOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumCreateNestedOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeCreateNestedOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepCreateNestedOneWithoutAttachmentsInput>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    question?: Nullable<QuestionCreateNestedOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationCreateNestedOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseCreateNestedOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutForumInput {
    answer?: Nullable<AnswerCreateNestedOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<AttachmentType>;
    comment?: Nullable<CommentCreateNestedOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    form?: Nullable<FormCreateNestedOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerCreateNestedOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeCreateNestedOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepCreateNestedOneWithoutAttachmentsInput>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    question?: Nullable<QuestionCreateNestedOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationCreateNestedOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseCreateNestedOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutGradeInput {
    answer?: Nullable<AnswerCreateNestedOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<AttachmentType>;
    comment?: Nullable<CommentCreateNestedOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    form?: Nullable<FormCreateNestedOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumCreateNestedOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerCreateNestedOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepCreateNestedOneWithoutAttachmentsInput>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    question?: Nullable<QuestionCreateNestedOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationCreateNestedOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseCreateNestedOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutHelpStepInput {
    answer?: Nullable<AnswerCreateNestedOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<AttachmentType>;
    comment?: Nullable<CommentCreateNestedOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    form?: Nullable<FormCreateNestedOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumCreateNestedOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerCreateNestedOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeCreateNestedOneWithoutAttachmentsInput>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    question?: Nullable<QuestionCreateNestedOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationCreateNestedOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseCreateNestedOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutOrdersInput {
    answer?: Nullable<AnswerCreateNestedOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<AttachmentType>;
    comment?: Nullable<CommentCreateNestedOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    form?: Nullable<FormCreateNestedOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumCreateNestedOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerCreateNestedOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeCreateNestedOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepCreateNestedOneWithoutAttachmentsInput>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    question?: Nullable<QuestionCreateNestedOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationCreateNestedOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseCreateNestedOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutPaymentMethodsInput {
    answer?: Nullable<AnswerCreateNestedOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<AttachmentType>;
    comment?: Nullable<CommentCreateNestedOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    form?: Nullable<FormCreateNestedOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumCreateNestedOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerCreateNestedOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeCreateNestedOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepCreateNestedOneWithoutAttachmentsInput>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    placement?: Nullable<string>;
    question?: Nullable<QuestionCreateNestedOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationCreateNestedOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseCreateNestedOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutQuestionInput {
    answer?: Nullable<AnswerCreateNestedOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<AttachmentType>;
    comment?: Nullable<CommentCreateNestedOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    form?: Nullable<FormCreateNestedOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumCreateNestedOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerCreateNestedOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeCreateNestedOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepCreateNestedOneWithoutAttachmentsInput>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    recommendation?: Nullable<RecommendationCreateNestedOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseCreateNestedOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutRecommendationInput {
    answer?: Nullable<AnswerCreateNestedOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<AttachmentType>;
    comment?: Nullable<CommentCreateNestedOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    form?: Nullable<FormCreateNestedOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumCreateNestedOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerCreateNestedOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeCreateNestedOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepCreateNestedOneWithoutAttachmentsInput>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    question?: Nullable<QuestionCreateNestedOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseCreateNestedOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutResponseInput {
    answer?: Nullable<AnswerCreateNestedOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<AttachmentType>;
    comment?: Nullable<CommentCreateNestedOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    form?: Nullable<FormCreateNestedOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumCreateNestedOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerCreateNestedOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeCreateNestedOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepCreateNestedOneWithoutAttachmentsInput>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    question?: Nullable<QuestionCreateNestedOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationCreateNestedOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutServicesInput {
    answer?: Nullable<AnswerCreateNestedOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<AttachmentType>;
    comment?: Nullable<CommentCreateNestedOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    form?: Nullable<FormCreateNestedOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumCreateNestedOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerCreateNestedOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeCreateNestedOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepCreateNestedOneWithoutAttachmentsInput>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    question?: Nullable<QuestionCreateNestedOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationCreateNestedOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseCreateNestedOneWithoutAttachmentsInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutTagsInput {
    answer?: Nullable<AnswerCreateNestedOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<AttachmentType>;
    comment?: Nullable<CommentCreateNestedOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    form?: Nullable<FormCreateNestedOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumCreateNestedOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerCreateNestedOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeCreateNestedOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepCreateNestedOneWithoutAttachmentsInput>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    question?: Nullable<QuestionCreateNestedOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationCreateNestedOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseCreateNestedOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutUserInput {
    answer?: Nullable<AnswerCreateNestedOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<AttachmentType>;
    comment?: Nullable<CommentCreateNestedOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    form?: Nullable<FormCreateNestedOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumCreateNestedOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerCreateNestedOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeCreateNestedOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepCreateNestedOneWithoutAttachmentsInput>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    question?: Nullable<QuestionCreateNestedOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationCreateNestedOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseCreateNestedOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
}

export class AttachmentListRelationFilter {
    every?: Nullable<AttachmentWhereInput>;
    none?: Nullable<AttachmentWhereInput>;
    some?: Nullable<AttachmentWhereInput>;
}

export class AttachmentOrderByInput {
    answerId?: Nullable<SortOrder>;
    attachmentType?: Nullable<SortOrder>;
    commentId?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    downloadable?: Nullable<SortOrder>;
    duration?: Nullable<SortOrder>;
    encoding?: Nullable<SortOrder>;
    filename?: Nullable<SortOrder>;
    formId?: Nullable<SortOrder>;
    forumAnswerId?: Nullable<SortOrder>;
    forumId?: Nullable<SortOrder>;
    gradeId?: Nullable<SortOrder>;
    helpStepId?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    mimetype?: Nullable<SortOrder>;
    path?: Nullable<SortOrder>;
    placement?: Nullable<SortOrder>;
    questionId?: Nullable<SortOrder>;
    recommendationId?: Nullable<SortOrder>;
    responseId?: Nullable<SortOrder>;
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
    answerId?: Nullable<StringNullableFilter>;
    attachmentType?: Nullable<EnumAttachmentTypeFilter>;
    commentId?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    downloadable?: Nullable<BoolFilter>;
    duration?: Nullable<IntFilter>;
    encoding?: Nullable<StringNullableFilter>;
    filename?: Nullable<StringNullableFilter>;
    formId?: Nullable<StringNullableFilter>;
    forumAnswerId?: Nullable<StringNullableFilter>;
    forumId?: Nullable<StringNullableFilter>;
    gradeId?: Nullable<StringNullableFilter>;
    helpStepId?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    mimetype?: Nullable<StringNullableFilter>;
    path?: Nullable<StringFilter>;
    placement?: Nullable<StringFilter>;
    questionId?: Nullable<StringNullableFilter>;
    recommendationId?: Nullable<StringNullableFilter>;
    responseId?: Nullable<StringNullableFilter>;
    size?: Nullable<IntFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class AttachmentScalarWhereWithAggregatesInput {
    AND?: Nullable<AttachmentScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<AttachmentScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<AttachmentScalarWhereWithAggregatesInput[]>;
    answerId?: Nullable<StringNullableWithAggregatesFilter>;
    attachmentType?: Nullable<EnumAttachmentTypeWithAggregatesFilter>;
    commentId?: Nullable<StringNullableWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    downloadable?: Nullable<BoolWithAggregatesFilter>;
    duration?: Nullable<IntWithAggregatesFilter>;
    encoding?: Nullable<StringNullableWithAggregatesFilter>;
    filename?: Nullable<StringNullableWithAggregatesFilter>;
    formId?: Nullable<StringNullableWithAggregatesFilter>;
    forumAnswerId?: Nullable<StringNullableWithAggregatesFilter>;
    forumId?: Nullable<StringNullableWithAggregatesFilter>;
    gradeId?: Nullable<StringNullableWithAggregatesFilter>;
    helpStepId?: Nullable<StringNullableWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    mimetype?: Nullable<StringNullableWithAggregatesFilter>;
    path?: Nullable<StringWithAggregatesFilter>;
    placement?: Nullable<StringWithAggregatesFilter>;
    questionId?: Nullable<StringNullableWithAggregatesFilter>;
    recommendationId?: Nullable<StringNullableWithAggregatesFilter>;
    responseId?: Nullable<StringNullableWithAggregatesFilter>;
    size?: Nullable<IntWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class AttachmentUncheckedCreateInput {
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    gradeId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    recommendationId?: Nullable<string>;
    responseId?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagUncheckedCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateNestedManyWithoutAnswerInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutAnswerInput[]>;
    create?: Nullable<AttachmentCreateWithoutAnswerInput[]>;
    createMany?: Nullable<AttachmentCreateManyAnswerInputEnvelope>;
}

export class AttachmentUncheckedCreateNestedManyWithoutCommentInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutCommentInput[]>;
    create?: Nullable<AttachmentCreateWithoutCommentInput[]>;
    createMany?: Nullable<AttachmentCreateManyCommentInputEnvelope>;
}

export class AttachmentUncheckedCreateNestedManyWithoutFormInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutFormInput[]>;
    create?: Nullable<AttachmentCreateWithoutFormInput[]>;
    createMany?: Nullable<AttachmentCreateManyFormInputEnvelope>;
}

export class AttachmentUncheckedCreateNestedManyWithoutForumAnswerInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutForumAnswerInput[]>;
    create?: Nullable<AttachmentCreateWithoutForumAnswerInput[]>;
    createMany?: Nullable<AttachmentCreateManyForumAnswerInputEnvelope>;
}

export class AttachmentUncheckedCreateNestedManyWithoutForumInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutForumInput[]>;
    create?: Nullable<AttachmentCreateWithoutForumInput[]>;
    createMany?: Nullable<AttachmentCreateManyForumInputEnvelope>;
}

export class AttachmentUncheckedCreateNestedManyWithoutGradeInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutGradeInput[]>;
    create?: Nullable<AttachmentCreateWithoutGradeInput[]>;
    createMany?: Nullable<AttachmentCreateManyGradeInputEnvelope>;
}

export class AttachmentUncheckedCreateNestedManyWithoutHelpStepInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutHelpStepInput[]>;
    create?: Nullable<AttachmentCreateWithoutHelpStepInput[]>;
    createMany?: Nullable<AttachmentCreateManyHelpStepInputEnvelope>;
}

export class AttachmentUncheckedCreateNestedManyWithoutQuestionInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutQuestionInput[]>;
    create?: Nullable<AttachmentCreateWithoutQuestionInput[]>;
    createMany?: Nullable<AttachmentCreateManyQuestionInputEnvelope>;
}

export class AttachmentUncheckedCreateNestedManyWithoutRecommendationInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutRecommendationInput[]>;
    create?: Nullable<AttachmentCreateWithoutRecommendationInput[]>;
    createMany?: Nullable<AttachmentCreateManyRecommendationInputEnvelope>;
}

export class AttachmentUncheckedCreateNestedManyWithoutResponseInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutResponseInput[]>;
    create?: Nullable<AttachmentCreateWithoutResponseInput[]>;
    createMany?: Nullable<AttachmentCreateManyResponseInputEnvelope>;
}

export class AttachmentUncheckedCreateWithoutAnswerInput {
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    gradeId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    recommendationId?: Nullable<string>;
    responseId?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagUncheckedCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutCommentInput {
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    gradeId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    recommendationId?: Nullable<string>;
    responseId?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagUncheckedCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutFormInput {
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    gradeId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    recommendationId?: Nullable<string>;
    responseId?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagUncheckedCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutForumAnswerInput {
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumId?: Nullable<string>;
    gradeId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    recommendationId?: Nullable<string>;
    responseId?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagUncheckedCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutForumInput {
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    gradeId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    recommendationId?: Nullable<string>;
    responseId?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagUncheckedCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutGradeInput {
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    recommendationId?: Nullable<string>;
    responseId?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagUncheckedCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutHelpStepInput {
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    gradeId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    recommendationId?: Nullable<string>;
    responseId?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagUncheckedCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutOrdersInput {
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    gradeId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    recommendationId?: Nullable<string>;
    responseId?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagUncheckedCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutPaymentMethodsInput {
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    gradeId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    recommendationId?: Nullable<string>;
    responseId?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagUncheckedCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutQuestionInput {
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    gradeId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    recommendationId?: Nullable<string>;
    responseId?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagUncheckedCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutRecommendationInput {
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    gradeId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    responseId?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagUncheckedCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutResponseInput {
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    gradeId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    recommendationId?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagUncheckedCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutServicesInput {
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    gradeId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    recommendationId?: Nullable<string>;
    responseId?: Nullable<string>;
    size?: Nullable<number>;
    tags?: Nullable<TagUncheckedCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutTagsInput {
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    gradeId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    recommendationId?: Nullable<string>;
    responseId?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutUserInput {
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    gradeId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedManyWithoutLogoInput>;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    recommendationId?: Nullable<string>;
    responseId?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    tags?: Nullable<TagUncheckedCreateNestedManyWithoutImageInput>;
    updatedAt?: Nullable<DateTime>;
}

export class AttachmentUncheckedUpdateInput {
    answerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    formId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumAnswerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    gradeId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStepId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    questionId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recommendationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responseId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUncheckedUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateManyInput {
    answerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    formId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumAnswerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    gradeId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStepId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    questionId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recommendationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responseId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AttachmentUncheckedUpdateManyWithoutAnswerInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutAnswerInput[]>;
    create?: Nullable<AttachmentCreateWithoutAnswerInput[]>;
    createMany?: Nullable<AttachmentCreateManyAnswerInputEnvelope>;
    delete?: Nullable<AttachmentWhereUniqueInput[]>;
    deleteMany?: Nullable<AttachmentScalarWhereInput[]>;
    disconnect?: Nullable<AttachmentWhereUniqueInput[]>;
    set?: Nullable<AttachmentWhereUniqueInput[]>;
    update?: Nullable<AttachmentUpdateWithWhereUniqueWithoutAnswerInput[]>;
    updateMany?: Nullable<AttachmentUpdateManyWithWhereWithoutAnswerInput[]>;
    upsert?: Nullable<AttachmentUpsertWithWhereUniqueWithoutAnswerInput[]>;
}

export class AttachmentUncheckedUpdateManyWithoutAttachmentsInput {
    answerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumAnswerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    gradeId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStepId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    questionId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recommendationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responseId?: Nullable<NullableStringFieldUpdateOperationsInput>;
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

export class AttachmentUncheckedUpdateManyWithoutFormInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutFormInput[]>;
    create?: Nullable<AttachmentCreateWithoutFormInput[]>;
    createMany?: Nullable<AttachmentCreateManyFormInputEnvelope>;
    delete?: Nullable<AttachmentWhereUniqueInput[]>;
    deleteMany?: Nullable<AttachmentScalarWhereInput[]>;
    disconnect?: Nullable<AttachmentWhereUniqueInput[]>;
    set?: Nullable<AttachmentWhereUniqueInput[]>;
    update?: Nullable<AttachmentUpdateWithWhereUniqueWithoutFormInput[]>;
    updateMany?: Nullable<AttachmentUpdateManyWithWhereWithoutFormInput[]>;
    upsert?: Nullable<AttachmentUpsertWithWhereUniqueWithoutFormInput[]>;
}

export class AttachmentUncheckedUpdateManyWithoutForumAnswerInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutForumAnswerInput[]>;
    create?: Nullable<AttachmentCreateWithoutForumAnswerInput[]>;
    createMany?: Nullable<AttachmentCreateManyForumAnswerInputEnvelope>;
    delete?: Nullable<AttachmentWhereUniqueInput[]>;
    deleteMany?: Nullable<AttachmentScalarWhereInput[]>;
    disconnect?: Nullable<AttachmentWhereUniqueInput[]>;
    set?: Nullable<AttachmentWhereUniqueInput[]>;
    update?: Nullable<AttachmentUpdateWithWhereUniqueWithoutForumAnswerInput[]>;
    updateMany?: Nullable<AttachmentUpdateManyWithWhereWithoutForumAnswerInput[]>;
    upsert?: Nullable<AttachmentUpsertWithWhereUniqueWithoutForumAnswerInput[]>;
}

export class AttachmentUncheckedUpdateManyWithoutForumInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutForumInput[]>;
    create?: Nullable<AttachmentCreateWithoutForumInput[]>;
    createMany?: Nullable<AttachmentCreateManyForumInputEnvelope>;
    delete?: Nullable<AttachmentWhereUniqueInput[]>;
    deleteMany?: Nullable<AttachmentScalarWhereInput[]>;
    disconnect?: Nullable<AttachmentWhereUniqueInput[]>;
    set?: Nullable<AttachmentWhereUniqueInput[]>;
    update?: Nullable<AttachmentUpdateWithWhereUniqueWithoutForumInput[]>;
    updateMany?: Nullable<AttachmentUpdateManyWithWhereWithoutForumInput[]>;
    upsert?: Nullable<AttachmentUpsertWithWhereUniqueWithoutForumInput[]>;
}

export class AttachmentUncheckedUpdateManyWithoutGradeInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutGradeInput[]>;
    create?: Nullable<AttachmentCreateWithoutGradeInput[]>;
    createMany?: Nullable<AttachmentCreateManyGradeInputEnvelope>;
    delete?: Nullable<AttachmentWhereUniqueInput[]>;
    deleteMany?: Nullable<AttachmentScalarWhereInput[]>;
    disconnect?: Nullable<AttachmentWhereUniqueInput[]>;
    set?: Nullable<AttachmentWhereUniqueInput[]>;
    update?: Nullable<AttachmentUpdateWithWhereUniqueWithoutGradeInput[]>;
    updateMany?: Nullable<AttachmentUpdateManyWithWhereWithoutGradeInput[]>;
    upsert?: Nullable<AttachmentUpsertWithWhereUniqueWithoutGradeInput[]>;
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

export class AttachmentUncheckedUpdateManyWithoutQuestionInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutQuestionInput[]>;
    create?: Nullable<AttachmentCreateWithoutQuestionInput[]>;
    createMany?: Nullable<AttachmentCreateManyQuestionInputEnvelope>;
    delete?: Nullable<AttachmentWhereUniqueInput[]>;
    deleteMany?: Nullable<AttachmentScalarWhereInput[]>;
    disconnect?: Nullable<AttachmentWhereUniqueInput[]>;
    set?: Nullable<AttachmentWhereUniqueInput[]>;
    update?: Nullable<AttachmentUpdateWithWhereUniqueWithoutQuestionInput[]>;
    updateMany?: Nullable<AttachmentUpdateManyWithWhereWithoutQuestionInput[]>;
    upsert?: Nullable<AttachmentUpsertWithWhereUniqueWithoutQuestionInput[]>;
}

export class AttachmentUncheckedUpdateManyWithoutRecommendationInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutRecommendationInput[]>;
    create?: Nullable<AttachmentCreateWithoutRecommendationInput[]>;
    createMany?: Nullable<AttachmentCreateManyRecommendationInputEnvelope>;
    delete?: Nullable<AttachmentWhereUniqueInput[]>;
    deleteMany?: Nullable<AttachmentScalarWhereInput[]>;
    disconnect?: Nullable<AttachmentWhereUniqueInput[]>;
    set?: Nullable<AttachmentWhereUniqueInput[]>;
    update?: Nullable<AttachmentUpdateWithWhereUniqueWithoutRecommendationInput[]>;
    updateMany?: Nullable<AttachmentUpdateManyWithWhereWithoutRecommendationInput[]>;
    upsert?: Nullable<AttachmentUpsertWithWhereUniqueWithoutRecommendationInput[]>;
}

export class AttachmentUncheckedUpdateManyWithoutResponseInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutResponseInput[]>;
    create?: Nullable<AttachmentCreateWithoutResponseInput[]>;
    createMany?: Nullable<AttachmentCreateManyResponseInputEnvelope>;
    delete?: Nullable<AttachmentWhereUniqueInput[]>;
    deleteMany?: Nullable<AttachmentScalarWhereInput[]>;
    disconnect?: Nullable<AttachmentWhereUniqueInput[]>;
    set?: Nullable<AttachmentWhereUniqueInput[]>;
    update?: Nullable<AttachmentUpdateWithWhereUniqueWithoutResponseInput[]>;
    updateMany?: Nullable<AttachmentUpdateManyWithWhereWithoutResponseInput[]>;
    upsert?: Nullable<AttachmentUpsertWithWhereUniqueWithoutResponseInput[]>;
}

export class AttachmentUncheckedUpdateWithoutAnswerInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    formId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumAnswerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    gradeId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStepId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    questionId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recommendationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responseId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUncheckedUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutCommentInput {
    answerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    formId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumAnswerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    gradeId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStepId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    questionId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recommendationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responseId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUncheckedUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutFormInput {
    answerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumAnswerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    gradeId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStepId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    questionId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recommendationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responseId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUncheckedUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutForumAnswerInput {
    answerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    formId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    gradeId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStepId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    questionId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recommendationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responseId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUncheckedUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutForumInput {
    answerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    formId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumAnswerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    gradeId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStepId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    questionId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recommendationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responseId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUncheckedUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutGradeInput {
    answerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    formId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumAnswerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStepId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    questionId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recommendationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responseId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUncheckedUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutHelpStepInput {
    answerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    formId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumAnswerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    gradeId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    questionId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recommendationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responseId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUncheckedUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutOrdersInput {
    answerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    formId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumAnswerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    gradeId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStepId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    questionId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recommendationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responseId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUncheckedUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutPaymentMethodsInput {
    answerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    formId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumAnswerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    gradeId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStepId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    questionId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recommendationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responseId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUncheckedUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutQuestionInput {
    answerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    formId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumAnswerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    gradeId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStepId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    recommendationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responseId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUncheckedUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutRecommendationInput {
    answerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    formId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumAnswerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    gradeId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStepId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    questionId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responseId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUncheckedUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutResponseInput {
    answerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    formId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumAnswerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    gradeId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStepId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    questionId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recommendationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUncheckedUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutServicesInput {
    answerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    formId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumAnswerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    gradeId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStepId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    questionId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recommendationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responseId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUncheckedUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutTagsInput {
    answerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    formId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumAnswerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    gradeId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStepId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    questionId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recommendationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responseId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutUserInput {
    answerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    formId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumAnswerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    gradeId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpStepId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    questionId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recommendationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responseId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUncheckedUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AttachmentUpdateInput {
    answer?: Nullable<AnswerUpdateOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    comment?: Nullable<CommentUpdateOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    form?: Nullable<FormUpdateOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumUpdateOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerUpdateOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeUpdateOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepUpdateOneWithoutAttachmentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<QuestionUpdateOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationUpdateOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseUpdateOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUpdateManyWithoutImageInput>;
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

export class AttachmentUpdateManyWithWhereWithoutAnswerInput {
    data: AttachmentUncheckedUpdateManyWithoutAttachmentsInput;
    where: AttachmentScalarWhereInput;
}

export class AttachmentUpdateManyWithWhereWithoutCommentInput {
    data: AttachmentUncheckedUpdateManyWithoutAttachmentsInput;
    where: AttachmentScalarWhereInput;
}

export class AttachmentUpdateManyWithWhereWithoutFormInput {
    data: AttachmentUncheckedUpdateManyWithoutAttachmentsInput;
    where: AttachmentScalarWhereInput;
}

export class AttachmentUpdateManyWithWhereWithoutForumAnswerInput {
    data: AttachmentUncheckedUpdateManyWithoutAttachmentsInput;
    where: AttachmentScalarWhereInput;
}

export class AttachmentUpdateManyWithWhereWithoutForumInput {
    data: AttachmentUncheckedUpdateManyWithoutAttachmentsInput;
    where: AttachmentScalarWhereInput;
}

export class AttachmentUpdateManyWithWhereWithoutGradeInput {
    data: AttachmentUncheckedUpdateManyWithoutAttachmentsInput;
    where: AttachmentScalarWhereInput;
}

export class AttachmentUpdateManyWithWhereWithoutHelpStepInput {
    data: AttachmentUncheckedUpdateManyWithoutAttachmentsInput;
    where: AttachmentScalarWhereInput;
}

export class AttachmentUpdateManyWithWhereWithoutQuestionInput {
    data: AttachmentUncheckedUpdateManyWithoutAttachmentsInput;
    where: AttachmentScalarWhereInput;
}

export class AttachmentUpdateManyWithWhereWithoutRecommendationInput {
    data: AttachmentUncheckedUpdateManyWithoutAttachmentsInput;
    where: AttachmentScalarWhereInput;
}

export class AttachmentUpdateManyWithWhereWithoutResponseInput {
    data: AttachmentUncheckedUpdateManyWithoutAttachmentsInput;
    where: AttachmentScalarWhereInput;
}

export class AttachmentUpdateManyWithoutAnswerInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutAnswerInput[]>;
    create?: Nullable<AttachmentCreateWithoutAnswerInput[]>;
    createMany?: Nullable<AttachmentCreateManyAnswerInputEnvelope>;
    delete?: Nullable<AttachmentWhereUniqueInput[]>;
    deleteMany?: Nullable<AttachmentScalarWhereInput[]>;
    disconnect?: Nullable<AttachmentWhereUniqueInput[]>;
    set?: Nullable<AttachmentWhereUniqueInput[]>;
    update?: Nullable<AttachmentUpdateWithWhereUniqueWithoutAnswerInput[]>;
    updateMany?: Nullable<AttachmentUpdateManyWithWhereWithoutAnswerInput[]>;
    upsert?: Nullable<AttachmentUpsertWithWhereUniqueWithoutAnswerInput[]>;
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

export class AttachmentUpdateManyWithoutFormInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutFormInput[]>;
    create?: Nullable<AttachmentCreateWithoutFormInput[]>;
    createMany?: Nullable<AttachmentCreateManyFormInputEnvelope>;
    delete?: Nullable<AttachmentWhereUniqueInput[]>;
    deleteMany?: Nullable<AttachmentScalarWhereInput[]>;
    disconnect?: Nullable<AttachmentWhereUniqueInput[]>;
    set?: Nullable<AttachmentWhereUniqueInput[]>;
    update?: Nullable<AttachmentUpdateWithWhereUniqueWithoutFormInput[]>;
    updateMany?: Nullable<AttachmentUpdateManyWithWhereWithoutFormInput[]>;
    upsert?: Nullable<AttachmentUpsertWithWhereUniqueWithoutFormInput[]>;
}

export class AttachmentUpdateManyWithoutForumAnswerInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutForumAnswerInput[]>;
    create?: Nullable<AttachmentCreateWithoutForumAnswerInput[]>;
    createMany?: Nullable<AttachmentCreateManyForumAnswerInputEnvelope>;
    delete?: Nullable<AttachmentWhereUniqueInput[]>;
    deleteMany?: Nullable<AttachmentScalarWhereInput[]>;
    disconnect?: Nullable<AttachmentWhereUniqueInput[]>;
    set?: Nullable<AttachmentWhereUniqueInput[]>;
    update?: Nullable<AttachmentUpdateWithWhereUniqueWithoutForumAnswerInput[]>;
    updateMany?: Nullable<AttachmentUpdateManyWithWhereWithoutForumAnswerInput[]>;
    upsert?: Nullable<AttachmentUpsertWithWhereUniqueWithoutForumAnswerInput[]>;
}

export class AttachmentUpdateManyWithoutForumInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutForumInput[]>;
    create?: Nullable<AttachmentCreateWithoutForumInput[]>;
    createMany?: Nullable<AttachmentCreateManyForumInputEnvelope>;
    delete?: Nullable<AttachmentWhereUniqueInput[]>;
    deleteMany?: Nullable<AttachmentScalarWhereInput[]>;
    disconnect?: Nullable<AttachmentWhereUniqueInput[]>;
    set?: Nullable<AttachmentWhereUniqueInput[]>;
    update?: Nullable<AttachmentUpdateWithWhereUniqueWithoutForumInput[]>;
    updateMany?: Nullable<AttachmentUpdateManyWithWhereWithoutForumInput[]>;
    upsert?: Nullable<AttachmentUpsertWithWhereUniqueWithoutForumInput[]>;
}

export class AttachmentUpdateManyWithoutGradeInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutGradeInput[]>;
    create?: Nullable<AttachmentCreateWithoutGradeInput[]>;
    createMany?: Nullable<AttachmentCreateManyGradeInputEnvelope>;
    delete?: Nullable<AttachmentWhereUniqueInput[]>;
    deleteMany?: Nullable<AttachmentScalarWhereInput[]>;
    disconnect?: Nullable<AttachmentWhereUniqueInput[]>;
    set?: Nullable<AttachmentWhereUniqueInput[]>;
    update?: Nullable<AttachmentUpdateWithWhereUniqueWithoutGradeInput[]>;
    updateMany?: Nullable<AttachmentUpdateManyWithWhereWithoutGradeInput[]>;
    upsert?: Nullable<AttachmentUpsertWithWhereUniqueWithoutGradeInput[]>;
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

export class AttachmentUpdateManyWithoutQuestionInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutQuestionInput[]>;
    create?: Nullable<AttachmentCreateWithoutQuestionInput[]>;
    createMany?: Nullable<AttachmentCreateManyQuestionInputEnvelope>;
    delete?: Nullable<AttachmentWhereUniqueInput[]>;
    deleteMany?: Nullable<AttachmentScalarWhereInput[]>;
    disconnect?: Nullable<AttachmentWhereUniqueInput[]>;
    set?: Nullable<AttachmentWhereUniqueInput[]>;
    update?: Nullable<AttachmentUpdateWithWhereUniqueWithoutQuestionInput[]>;
    updateMany?: Nullable<AttachmentUpdateManyWithWhereWithoutQuestionInput[]>;
    upsert?: Nullable<AttachmentUpsertWithWhereUniqueWithoutQuestionInput[]>;
}

export class AttachmentUpdateManyWithoutRecommendationInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutRecommendationInput[]>;
    create?: Nullable<AttachmentCreateWithoutRecommendationInput[]>;
    createMany?: Nullable<AttachmentCreateManyRecommendationInputEnvelope>;
    delete?: Nullable<AttachmentWhereUniqueInput[]>;
    deleteMany?: Nullable<AttachmentScalarWhereInput[]>;
    disconnect?: Nullable<AttachmentWhereUniqueInput[]>;
    set?: Nullable<AttachmentWhereUniqueInput[]>;
    update?: Nullable<AttachmentUpdateWithWhereUniqueWithoutRecommendationInput[]>;
    updateMany?: Nullable<AttachmentUpdateManyWithWhereWithoutRecommendationInput[]>;
    upsert?: Nullable<AttachmentUpsertWithWhereUniqueWithoutRecommendationInput[]>;
}

export class AttachmentUpdateManyWithoutResponseInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutResponseInput[]>;
    create?: Nullable<AttachmentCreateWithoutResponseInput[]>;
    createMany?: Nullable<AttachmentCreateManyResponseInputEnvelope>;
    delete?: Nullable<AttachmentWhereUniqueInput[]>;
    deleteMany?: Nullable<AttachmentScalarWhereInput[]>;
    disconnect?: Nullable<AttachmentWhereUniqueInput[]>;
    set?: Nullable<AttachmentWhereUniqueInput[]>;
    update?: Nullable<AttachmentUpdateWithWhereUniqueWithoutResponseInput[]>;
    updateMany?: Nullable<AttachmentUpdateManyWithWhereWithoutResponseInput[]>;
    upsert?: Nullable<AttachmentUpsertWithWhereUniqueWithoutResponseInput[]>;
}

export class AttachmentUpdateOneRequiredWithoutPaymentMethodsInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutPaymentMethodsInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutPaymentMethodsInput>;
    update?: Nullable<AttachmentUncheckedUpdateWithoutPaymentMethodsInput>;
    upsert?: Nullable<AttachmentUpsertWithoutPaymentMethodsInput>;
}

export class AttachmentUpdateOneRequiredWithoutServicesInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutServicesInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutServicesInput>;
    update?: Nullable<AttachmentUncheckedUpdateWithoutServicesInput>;
    upsert?: Nullable<AttachmentUpsertWithoutServicesInput>;
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

export class AttachmentUpdateOneWithoutTagsInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutTagsInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutTagsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<AttachmentUncheckedUpdateWithoutTagsInput>;
    upsert?: Nullable<AttachmentUpsertWithoutTagsInput>;
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

export class AttachmentUpdateWithWhereUniqueWithoutAnswerInput {
    data: AttachmentUncheckedUpdateWithoutAnswerInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpdateWithWhereUniqueWithoutCommentInput {
    data: AttachmentUncheckedUpdateWithoutCommentInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpdateWithWhereUniqueWithoutFormInput {
    data: AttachmentUncheckedUpdateWithoutFormInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpdateWithWhereUniqueWithoutForumAnswerInput {
    data: AttachmentUncheckedUpdateWithoutForumAnswerInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpdateWithWhereUniqueWithoutForumInput {
    data: AttachmentUncheckedUpdateWithoutForumInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpdateWithWhereUniqueWithoutGradeInput {
    data: AttachmentUncheckedUpdateWithoutGradeInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpdateWithWhereUniqueWithoutHelpStepInput {
    data: AttachmentUncheckedUpdateWithoutHelpStepInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpdateWithWhereUniqueWithoutQuestionInput {
    data: AttachmentUncheckedUpdateWithoutQuestionInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpdateWithWhereUniqueWithoutRecommendationInput {
    data: AttachmentUncheckedUpdateWithoutRecommendationInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpdateWithWhereUniqueWithoutResponseInput {
    data: AttachmentUncheckedUpdateWithoutResponseInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpdateWithoutAnswerInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    comment?: Nullable<CommentUpdateOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    form?: Nullable<FormUpdateOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumUpdateOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerUpdateOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeUpdateOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepUpdateOneWithoutAttachmentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<QuestionUpdateOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationUpdateOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseUpdateOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutCommentInput {
    answer?: Nullable<AnswerUpdateOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    form?: Nullable<FormUpdateOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumUpdateOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerUpdateOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeUpdateOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepUpdateOneWithoutAttachmentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<QuestionUpdateOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationUpdateOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseUpdateOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutFormInput {
    answer?: Nullable<AnswerUpdateOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    comment?: Nullable<CommentUpdateOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forum?: Nullable<ForumUpdateOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerUpdateOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeUpdateOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepUpdateOneWithoutAttachmentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<QuestionUpdateOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationUpdateOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseUpdateOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutForumAnswerInput {
    answer?: Nullable<AnswerUpdateOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    comment?: Nullable<CommentUpdateOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    form?: Nullable<FormUpdateOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumUpdateOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeUpdateOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepUpdateOneWithoutAttachmentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<QuestionUpdateOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationUpdateOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseUpdateOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutForumInput {
    answer?: Nullable<AnswerUpdateOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    comment?: Nullable<CommentUpdateOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    form?: Nullable<FormUpdateOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerUpdateOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeUpdateOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepUpdateOneWithoutAttachmentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<QuestionUpdateOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationUpdateOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseUpdateOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutGradeInput {
    answer?: Nullable<AnswerUpdateOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    comment?: Nullable<CommentUpdateOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    form?: Nullable<FormUpdateOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumUpdateOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerUpdateOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepUpdateOneWithoutAttachmentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<QuestionUpdateOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationUpdateOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseUpdateOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutHelpStepInput {
    answer?: Nullable<AnswerUpdateOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    comment?: Nullable<CommentUpdateOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    form?: Nullable<FormUpdateOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumUpdateOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerUpdateOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeUpdateOneWithoutAttachmentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<QuestionUpdateOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationUpdateOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseUpdateOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutOrdersInput {
    answer?: Nullable<AnswerUpdateOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    comment?: Nullable<CommentUpdateOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    form?: Nullable<FormUpdateOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumUpdateOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerUpdateOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeUpdateOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepUpdateOneWithoutAttachmentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<QuestionUpdateOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationUpdateOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseUpdateOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutPaymentMethodsInput {
    answer?: Nullable<AnswerUpdateOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    comment?: Nullable<CommentUpdateOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    form?: Nullable<FormUpdateOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumUpdateOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerUpdateOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeUpdateOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepUpdateOneWithoutAttachmentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<QuestionUpdateOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationUpdateOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseUpdateOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutQuestionInput {
    answer?: Nullable<AnswerUpdateOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    comment?: Nullable<CommentUpdateOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    form?: Nullable<FormUpdateOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumUpdateOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerUpdateOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeUpdateOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepUpdateOneWithoutAttachmentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    recommendation?: Nullable<RecommendationUpdateOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseUpdateOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutRecommendationInput {
    answer?: Nullable<AnswerUpdateOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    comment?: Nullable<CommentUpdateOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    form?: Nullable<FormUpdateOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumUpdateOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerUpdateOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeUpdateOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepUpdateOneWithoutAttachmentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<QuestionUpdateOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseUpdateOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutResponseInput {
    answer?: Nullable<AnswerUpdateOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    comment?: Nullable<CommentUpdateOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    form?: Nullable<FormUpdateOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumUpdateOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerUpdateOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeUpdateOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepUpdateOneWithoutAttachmentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<QuestionUpdateOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationUpdateOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutServicesInput {
    answer?: Nullable<AnswerUpdateOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    comment?: Nullable<CommentUpdateOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    form?: Nullable<FormUpdateOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumUpdateOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerUpdateOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeUpdateOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepUpdateOneWithoutAttachmentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<QuestionUpdateOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationUpdateOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseUpdateOneWithoutAttachmentsInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutTagsInput {
    answer?: Nullable<AnswerUpdateOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    comment?: Nullable<CommentUpdateOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    form?: Nullable<FormUpdateOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumUpdateOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerUpdateOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeUpdateOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepUpdateOneWithoutAttachmentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<QuestionUpdateOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationUpdateOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseUpdateOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutUserInput {
    answer?: Nullable<AnswerUpdateOneWithoutAttachmentsInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    comment?: Nullable<CommentUpdateOneWithoutAttachmentsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    form?: Nullable<FormUpdateOneWithoutAttachmentsInput>;
    forum?: Nullable<ForumUpdateOneWithoutAttachmentsInput>;
    forumAnswer?: Nullable<ForumAnswerUpdateOneWithoutAttachmentsInput>;
    grade?: Nullable<GradeUpdateOneWithoutAttachmentsInput>;
    helpStep?: Nullable<HelpStepUpdateOneWithoutAttachmentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateManyWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<QuestionUpdateOneWithoutAttachmentsInput>;
    recommendation?: Nullable<RecommendationUpdateOneWithoutAttachmentsInput>;
    response?: Nullable<ResponseUpdateOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    tags?: Nullable<TagUpdateManyWithoutImageInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AttachmentUpsertWithWhereUniqueWithoutAnswerInput {
    create: AttachmentUncheckedCreateWithoutAnswerInput;
    update: AttachmentUncheckedUpdateWithoutAnswerInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpsertWithWhereUniqueWithoutCommentInput {
    create: AttachmentUncheckedCreateWithoutCommentInput;
    update: AttachmentUncheckedUpdateWithoutCommentInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpsertWithWhereUniqueWithoutFormInput {
    create: AttachmentUncheckedCreateWithoutFormInput;
    update: AttachmentUncheckedUpdateWithoutFormInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpsertWithWhereUniqueWithoutForumAnswerInput {
    create: AttachmentUncheckedCreateWithoutForumAnswerInput;
    update: AttachmentUncheckedUpdateWithoutForumAnswerInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpsertWithWhereUniqueWithoutForumInput {
    create: AttachmentUncheckedCreateWithoutForumInput;
    update: AttachmentUncheckedUpdateWithoutForumInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpsertWithWhereUniqueWithoutGradeInput {
    create: AttachmentUncheckedCreateWithoutGradeInput;
    update: AttachmentUncheckedUpdateWithoutGradeInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpsertWithWhereUniqueWithoutHelpStepInput {
    create: AttachmentUncheckedCreateWithoutHelpStepInput;
    update: AttachmentUncheckedUpdateWithoutHelpStepInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpsertWithWhereUniqueWithoutQuestionInput {
    create: AttachmentUncheckedCreateWithoutQuestionInput;
    update: AttachmentUncheckedUpdateWithoutQuestionInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpsertWithWhereUniqueWithoutRecommendationInput {
    create: AttachmentUncheckedCreateWithoutRecommendationInput;
    update: AttachmentUncheckedUpdateWithoutRecommendationInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpsertWithWhereUniqueWithoutResponseInput {
    create: AttachmentUncheckedCreateWithoutResponseInput;
    update: AttachmentUncheckedUpdateWithoutResponseInput;
    where: AttachmentWhereUniqueInput;
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

export class AttachmentUpsertWithoutTagsInput {
    create: AttachmentUncheckedCreateWithoutTagsInput;
    update: AttachmentUncheckedUpdateWithoutTagsInput;
}

export class AttachmentUpsertWithoutUserInput {
    create: AttachmentUncheckedCreateWithoutUserInput;
    update: AttachmentUncheckedUpdateWithoutUserInput;
}

export class AttachmentWhereInput {
    AND?: Nullable<AttachmentWhereInput[]>;
    NOT?: Nullable<AttachmentWhereInput[]>;
    OR?: Nullable<AttachmentWhereInput[]>;
    answer?: Nullable<AnswerWhereInput>;
    answerId?: Nullable<StringNullableFilter>;
    attachmentType?: Nullable<EnumAttachmentTypeFilter>;
    comment?: Nullable<CommentWhereInput>;
    commentId?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    downloadable?: Nullable<BoolFilter>;
    duration?: Nullable<IntFilter>;
    encoding?: Nullable<StringNullableFilter>;
    filename?: Nullable<StringNullableFilter>;
    form?: Nullable<FormWhereInput>;
    formId?: Nullable<StringNullableFilter>;
    forum?: Nullable<ForumWhereInput>;
    forumAnswer?: Nullable<ForumAnswerWhereInput>;
    forumAnswerId?: Nullable<StringNullableFilter>;
    forumId?: Nullable<StringNullableFilter>;
    grade?: Nullable<GradeWhereInput>;
    gradeId?: Nullable<StringNullableFilter>;
    helpStep?: Nullable<HelpStepWhereInput>;
    helpStepId?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    mimetype?: Nullable<StringNullableFilter>;
    orders?: Nullable<OrderListRelationFilter>;
    path?: Nullable<StringFilter>;
    paymentMethods?: Nullable<PaymentMethodListRelationFilter>;
    placement?: Nullable<StringFilter>;
    question?: Nullable<QuestionWhereInput>;
    questionId?: Nullable<StringNullableFilter>;
    recommendation?: Nullable<RecommendationWhereInput>;
    recommendationId?: Nullable<StringNullableFilter>;
    response?: Nullable<ResponseWhereInput>;
    responseId?: Nullable<StringNullableFilter>;
    services?: Nullable<ServiceListRelationFilter>;
    size?: Nullable<IntFilter>;
    tags?: Nullable<TagListRelationFilter>;
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

export class BoolNullableFilter {
    equals?: Nullable<boolean>;
    not?: Nullable<NestedBoolNullableFilter>;
}

export class BoolNullableWithAggregatesFilter {
    _count?: Nullable<NestedIntNullableFilter>;
    _max?: Nullable<NestedBoolNullableFilter>;
    _min?: Nullable<NestedBoolNullableFilter>;
    count?: Nullable<NestedIntNullableFilter>;
    equals?: Nullable<boolean>;
    max?: Nullable<NestedBoolNullableFilter>;
    min?: Nullable<NestedBoolNullableFilter>;
    not?: Nullable<NestedBoolNullableWithAggregatesFilter>;
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
    forum?: Nullable<ForumCreateNestedOneWithoutCommentsInput>;
    forumAnswer?: Nullable<ForumAnswerCreateNestedOneWithoutCommentsInput>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentCreateManyAuthorInput {
    commentId?: Nullable<string>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    id?: Nullable<string>;
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
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentCreateManyCommentInputEnvelope {
    data: CommentCreateManyCommentInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class CommentCreateManyForumAnswerInput {
    authorId: string;
    commentId?: Nullable<string>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    forumId?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentCreateManyForumAnswerInputEnvelope {
    data: CommentCreateManyForumAnswerInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class CommentCreateManyForumInput {
    authorId: string;
    commentId?: Nullable<string>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    forumAnswerId?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentCreateManyForumInputEnvelope {
    data: CommentCreateManyForumInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class CommentCreateManyInput {
    authorId: string;
    commentId?: Nullable<string>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
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

export class CommentCreateNestedManyWithoutForumAnswerInput {
    connect?: Nullable<CommentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutForumAnswerInput[]>;
    create?: Nullable<CommentCreateWithoutForumAnswerInput[]>;
    createMany?: Nullable<CommentCreateManyForumAnswerInputEnvelope>;
}

export class CommentCreateNestedManyWithoutForumInput {
    connect?: Nullable<CommentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutForumInput[]>;
    create?: Nullable<CommentCreateWithoutForumInput[]>;
    createMany?: Nullable<CommentCreateManyForumInputEnvelope>;
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

export class CommentCreateOrConnectWithoutForumAnswerInput {
    create: CommentUncheckedCreateWithoutForumAnswerInput;
    where: CommentWhereUniqueInput;
}

export class CommentCreateOrConnectWithoutForumInput {
    create: CommentUncheckedCreateWithoutForumInput;
    where: CommentWhereUniqueInput;
}

export class CommentCreateWithoutAttachmentsInput {
    author: UserCreateNestedOneWithoutCommentsInput;
    comment?: Nullable<CommentCreateNestedOneWithoutCommentsInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    forum?: Nullable<ForumCreateNestedOneWithoutCommentsInput>;
    forumAnswer?: Nullable<ForumAnswerCreateNestedOneWithoutCommentsInput>;
    id?: Nullable<string>;
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
    forum?: Nullable<ForumCreateNestedOneWithoutCommentsInput>;
    forumAnswer?: Nullable<ForumAnswerCreateNestedOneWithoutCommentsInput>;
    id?: Nullable<string>;
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
    forum?: Nullable<ForumCreateNestedOneWithoutCommentsInput>;
    forumAnswer?: Nullable<ForumAnswerCreateNestedOneWithoutCommentsInput>;
    id?: Nullable<string>;
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
    forum?: Nullable<ForumCreateNestedOneWithoutCommentsInput>;
    forumAnswer?: Nullable<ForumAnswerCreateNestedOneWithoutCommentsInput>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentCreateWithoutForumAnswerInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutCommentInput>;
    author: UserCreateNestedOneWithoutCommentsInput;
    comment?: Nullable<CommentCreateNestedOneWithoutCommentsInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    forum?: Nullable<ForumCreateNestedOneWithoutCommentsInput>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentCreateWithoutForumInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutCommentInput>;
    author: UserCreateNestedOneWithoutCommentsInput;
    comment?: Nullable<CommentCreateNestedOneWithoutCommentsInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    forumAnswer?: Nullable<ForumAnswerCreateNestedOneWithoutCommentsInput>;
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
    forumAnswerId?: Nullable<SortOrder>;
    forumId?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
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
    forumAnswerId?: Nullable<StringNullableFilter>;
    forumId?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
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
    forumAnswerId?: Nullable<StringNullableWithAggregatesFilter>;
    forumId?: Nullable<StringNullableWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
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
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    id?: Nullable<string>;
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

export class CommentUncheckedCreateNestedManyWithoutForumAnswerInput {
    connect?: Nullable<CommentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutForumAnswerInput[]>;
    create?: Nullable<CommentCreateWithoutForumAnswerInput[]>;
    createMany?: Nullable<CommentCreateManyForumAnswerInputEnvelope>;
}

export class CommentUncheckedCreateNestedManyWithoutForumInput {
    connect?: Nullable<CommentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutForumInput[]>;
    create?: Nullable<CommentCreateWithoutForumInput[]>;
    createMany?: Nullable<CommentCreateManyForumInputEnvelope>;
}

export class CommentUncheckedCreateWithoutAttachmentsInput {
    authorId: string;
    commentId?: Nullable<string>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    id?: Nullable<string>;
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
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    id?: Nullable<string>;
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
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    id?: Nullable<string>;
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
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentUncheckedCreateWithoutForumAnswerInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutCommentInput>;
    authorId: string;
    commentId?: Nullable<string>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    forumId?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentUncheckedCreateWithoutForumInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutCommentInput>;
    authorId: string;
    commentId?: Nullable<string>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    forumAnswerId?: Nullable<string>;
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
    forumAnswerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUncheckedUpdateManyInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    forumAnswerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
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
    forumAnswerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUncheckedUpdateManyWithoutForumAnswerInput {
    connect?: Nullable<CommentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutForumAnswerInput[]>;
    create?: Nullable<CommentCreateWithoutForumAnswerInput[]>;
    createMany?: Nullable<CommentCreateManyForumAnswerInputEnvelope>;
    delete?: Nullable<CommentWhereUniqueInput[]>;
    deleteMany?: Nullable<CommentScalarWhereInput[]>;
    disconnect?: Nullable<CommentWhereUniqueInput[]>;
    set?: Nullable<CommentWhereUniqueInput[]>;
    update?: Nullable<CommentUpdateWithWhereUniqueWithoutForumAnswerInput[]>;
    updateMany?: Nullable<CommentUpdateManyWithWhereWithoutForumAnswerInput[]>;
    upsert?: Nullable<CommentUpsertWithWhereUniqueWithoutForumAnswerInput[]>;
}

export class CommentUncheckedUpdateManyWithoutForumInput {
    connect?: Nullable<CommentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutForumInput[]>;
    create?: Nullable<CommentCreateWithoutForumInput[]>;
    createMany?: Nullable<CommentCreateManyForumInputEnvelope>;
    delete?: Nullable<CommentWhereUniqueInput[]>;
    deleteMany?: Nullable<CommentScalarWhereInput[]>;
    disconnect?: Nullable<CommentWhereUniqueInput[]>;
    set?: Nullable<CommentWhereUniqueInput[]>;
    update?: Nullable<CommentUpdateWithWhereUniqueWithoutForumInput[]>;
    updateMany?: Nullable<CommentUpdateManyWithWhereWithoutForumInput[]>;
    upsert?: Nullable<CommentUpsertWithWhereUniqueWithoutForumInput[]>;
}

export class CommentUncheckedUpdateWithoutAttachmentsInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    forumAnswerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
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
    forumAnswerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
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
    forumAnswerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
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
    forumAnswerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forumId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUncheckedUpdateWithoutForumAnswerInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutCommentInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    forumId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUncheckedUpdateWithoutForumInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutCommentInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    forumAnswerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
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
    forum?: Nullable<ForumUpdateOneWithoutCommentsInput>;
    forumAnswer?: Nullable<ForumAnswerUpdateOneWithoutCommentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
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

export class CommentUpdateManyWithWhereWithoutForumAnswerInput {
    data: CommentUncheckedUpdateManyWithoutCommentsInput;
    where: CommentScalarWhereInput;
}

export class CommentUpdateManyWithWhereWithoutForumInput {
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

export class CommentUpdateManyWithoutForumAnswerInput {
    connect?: Nullable<CommentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutForumAnswerInput[]>;
    create?: Nullable<CommentCreateWithoutForumAnswerInput[]>;
    createMany?: Nullable<CommentCreateManyForumAnswerInputEnvelope>;
    delete?: Nullable<CommentWhereUniqueInput[]>;
    deleteMany?: Nullable<CommentScalarWhereInput[]>;
    disconnect?: Nullable<CommentWhereUniqueInput[]>;
    set?: Nullable<CommentWhereUniqueInput[]>;
    update?: Nullable<CommentUpdateWithWhereUniqueWithoutForumAnswerInput[]>;
    updateMany?: Nullable<CommentUpdateManyWithWhereWithoutForumAnswerInput[]>;
    upsert?: Nullable<CommentUpsertWithWhereUniqueWithoutForumAnswerInput[]>;
}

export class CommentUpdateManyWithoutForumInput {
    connect?: Nullable<CommentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutForumInput[]>;
    create?: Nullable<CommentCreateWithoutForumInput[]>;
    createMany?: Nullable<CommentCreateManyForumInputEnvelope>;
    delete?: Nullable<CommentWhereUniqueInput[]>;
    deleteMany?: Nullable<CommentScalarWhereInput[]>;
    disconnect?: Nullable<CommentWhereUniqueInput[]>;
    set?: Nullable<CommentWhereUniqueInput[]>;
    update?: Nullable<CommentUpdateWithWhereUniqueWithoutForumInput[]>;
    updateMany?: Nullable<CommentUpdateManyWithWhereWithoutForumInput[]>;
    upsert?: Nullable<CommentUpsertWithWhereUniqueWithoutForumInput[]>;
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

export class CommentUpdateWithWhereUniqueWithoutForumAnswerInput {
    data: CommentUncheckedUpdateWithoutForumAnswerInput;
    where: CommentWhereUniqueInput;
}

export class CommentUpdateWithWhereUniqueWithoutForumInput {
    data: CommentUncheckedUpdateWithoutForumInput;
    where: CommentWhereUniqueInput;
}

export class CommentUpdateWithoutAttachmentsInput {
    author?: Nullable<UserUpdateOneRequiredWithoutCommentsInput>;
    comment?: Nullable<CommentUpdateOneWithoutCommentsInput>;
    comments?: Nullable<CommentUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    forum?: Nullable<ForumUpdateOneWithoutCommentsInput>;
    forumAnswer?: Nullable<ForumAnswerUpdateOneWithoutCommentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
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
    forum?: Nullable<ForumUpdateOneWithoutCommentsInput>;
    forumAnswer?: Nullable<ForumAnswerUpdateOneWithoutCommentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
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
    forum?: Nullable<ForumUpdateOneWithoutCommentsInput>;
    forumAnswer?: Nullable<ForumAnswerUpdateOneWithoutCommentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
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
    forum?: Nullable<ForumUpdateOneWithoutCommentsInput>;
    forumAnswer?: Nullable<ForumAnswerUpdateOneWithoutCommentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUpdateWithoutForumAnswerInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutCommentInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutCommentsInput>;
    comment?: Nullable<CommentUpdateOneWithoutCommentsInput>;
    comments?: Nullable<CommentUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    forum?: Nullable<ForumUpdateOneWithoutCommentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUpdateWithoutForumInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutCommentInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutCommentsInput>;
    comment?: Nullable<CommentUpdateOneWithoutCommentsInput>;
    comments?: Nullable<CommentUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    forumAnswer?: Nullable<ForumAnswerUpdateOneWithoutCommentsInput>;
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

export class CommentUpsertWithWhereUniqueWithoutForumAnswerInput {
    create: CommentUncheckedCreateWithoutForumAnswerInput;
    update: CommentUncheckedUpdateWithoutForumAnswerInput;
    where: CommentWhereUniqueInput;
}

export class CommentUpsertWithWhereUniqueWithoutForumInput {
    create: CommentUncheckedCreateWithoutForumInput;
    update: CommentUncheckedUpdateWithoutForumInput;
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
    forum?: Nullable<ForumWhereInput>;
    forumAnswer?: Nullable<ForumAnswerWhereInput>;
    forumAnswerId?: Nullable<StringNullableFilter>;
    forumId?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
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

export class EnumForumTypeFieldUpdateOperationsInput {
    set?: Nullable<ForumType>;
}

export class EnumForumTypeFilter {
    equals?: Nullable<ForumType>;
    in?: Nullable<ForumType[]>;
    not?: Nullable<NestedEnumForumTypeFilter>;
    notIn?: Nullable<ForumType[]>;
}

export class EnumForumTypeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumForumTypeFilter>;
    _min?: Nullable<NestedEnumForumTypeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<ForumType>;
    in?: Nullable<ForumType[]>;
    max?: Nullable<NestedEnumForumTypeFilter>;
    min?: Nullable<NestedEnumForumTypeFilter>;
    not?: Nullable<NestedEnumForumTypeWithAggregatesFilter>;
    notIn?: Nullable<ForumType[]>;
}

export class EnumQuestionTypeFieldUpdateOperationsInput {
    set?: Nullable<QuestionType>;
}

export class EnumQuestionTypeFilter {
    equals?: Nullable<QuestionType>;
    in?: Nullable<QuestionType[]>;
    not?: Nullable<NestedEnumQuestionTypeFilter>;
    notIn?: Nullable<QuestionType[]>;
}

export class EnumQuestionTypeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumQuestionTypeFilter>;
    _min?: Nullable<NestedEnumQuestionTypeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<QuestionType>;
    in?: Nullable<QuestionType[]>;
    max?: Nullable<NestedEnumQuestionTypeFilter>;
    min?: Nullable<NestedEnumQuestionTypeFilter>;
    not?: Nullable<NestedEnumQuestionTypeWithAggregatesFilter>;
    notIn?: Nullable<QuestionType[]>;
}

export class EnumRecommendationTypeFieldUpdateOperationsInput {
    set?: Nullable<RecommendationType>;
}

export class EnumRecommendationTypeFilter {
    equals?: Nullable<RecommendationType>;
    in?: Nullable<RecommendationType[]>;
    not?: Nullable<NestedEnumRecommendationTypeFilter>;
    notIn?: Nullable<RecommendationType[]>;
}

export class EnumRecommendationTypeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumRecommendationTypeFilter>;
    _min?: Nullable<NestedEnumRecommendationTypeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<RecommendationType>;
    in?: Nullable<RecommendationType[]>;
    max?: Nullable<NestedEnumRecommendationTypeFilter>;
    min?: Nullable<NestedEnumRecommendationTypeFilter>;
    not?: Nullable<NestedEnumRecommendationTypeWithAggregatesFilter>;
    notIn?: Nullable<RecommendationType[]>;
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

export class FormCreateInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutFormInput>;
    author: UserCreateNestedOneWithoutFormsInput;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    grades?: Nullable<GradeCreateNestedManyWithoutFormInput>;
    id?: Nullable<string>;
    responses?: Nullable<ResponseCreateNestedManyWithoutFormInput>;
    state?: Nullable<State>;
    tagId?: Nullable<string>;
    tags?: Nullable<TagCreateNestedManyWithoutFormsInput>;
    title: string;
    updatedAt?: Nullable<DateTime>;
}

export class FormCreateManyAuthorInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    tagId?: Nullable<string>;
    title: string;
    updatedAt?: Nullable<DateTime>;
}

export class FormCreateManyAuthorInputEnvelope {
    data: FormCreateManyAuthorInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class FormCreateManyInput {
    authorId: string;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    tagId?: Nullable<string>;
    title: string;
    updatedAt?: Nullable<DateTime>;
}

export class FormCreateNestedManyWithoutAuthorInput {
    connect?: Nullable<FormWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FormCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<FormCreateWithoutAuthorInput[]>;
    createMany?: Nullable<FormCreateManyAuthorInputEnvelope>;
}

export class FormCreateNestedManyWithoutTagsInput {
    connect?: Nullable<FormWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FormCreateOrConnectWithoutTagsInput[]>;
    create?: Nullable<FormCreateWithoutTagsInput[]>;
}

export class FormCreateNestedOneWithoutAttachmentsInput {
    connect?: Nullable<FormWhereUniqueInput>;
    connectOrCreate?: Nullable<FormCreateOrConnectWithoutAttachmentsInput>;
    create?: Nullable<FormUncheckedCreateWithoutAttachmentsInput>;
}

export class FormCreateNestedOneWithoutGradesInput {
    connect?: Nullable<FormWhereUniqueInput>;
    connectOrCreate?: Nullable<FormCreateOrConnectWithoutGradesInput>;
    create?: Nullable<FormUncheckedCreateWithoutGradesInput>;
}

export class FormCreateNestedOneWithoutResponsesInput {
    connect?: Nullable<FormWhereUniqueInput>;
    connectOrCreate?: Nullable<FormCreateOrConnectWithoutResponsesInput>;
    create?: Nullable<FormUncheckedCreateWithoutResponsesInput>;
}

export class FormCreateOrConnectWithoutAttachmentsInput {
    create: FormUncheckedCreateWithoutAttachmentsInput;
    where: FormWhereUniqueInput;
}

export class FormCreateOrConnectWithoutAuthorInput {
    create: FormUncheckedCreateWithoutAuthorInput;
    where: FormWhereUniqueInput;
}

export class FormCreateOrConnectWithoutGradesInput {
    create: FormUncheckedCreateWithoutGradesInput;
    where: FormWhereUniqueInput;
}

export class FormCreateOrConnectWithoutResponsesInput {
    create: FormUncheckedCreateWithoutResponsesInput;
    where: FormWhereUniqueInput;
}

export class FormCreateOrConnectWithoutTagsInput {
    create: FormUncheckedCreateWithoutTagsInput;
    where: FormWhereUniqueInput;
}

export class FormCreateWithoutAttachmentsInput {
    author: UserCreateNestedOneWithoutFormsInput;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    grades?: Nullable<GradeCreateNestedManyWithoutFormInput>;
    id?: Nullable<string>;
    responses?: Nullable<ResponseCreateNestedManyWithoutFormInput>;
    state?: Nullable<State>;
    tagId?: Nullable<string>;
    tags?: Nullable<TagCreateNestedManyWithoutFormsInput>;
    title: string;
    updatedAt?: Nullable<DateTime>;
}

export class FormCreateWithoutAuthorInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutFormInput>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    grades?: Nullable<GradeCreateNestedManyWithoutFormInput>;
    id?: Nullable<string>;
    responses?: Nullable<ResponseCreateNestedManyWithoutFormInput>;
    state?: Nullable<State>;
    tagId?: Nullable<string>;
    tags?: Nullable<TagCreateNestedManyWithoutFormsInput>;
    title: string;
    updatedAt?: Nullable<DateTime>;
}

export class FormCreateWithoutGradesInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutFormInput>;
    author: UserCreateNestedOneWithoutFormsInput;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    responses?: Nullable<ResponseCreateNestedManyWithoutFormInput>;
    state?: Nullable<State>;
    tagId?: Nullable<string>;
    tags?: Nullable<TagCreateNestedManyWithoutFormsInput>;
    title: string;
    updatedAt?: Nullable<DateTime>;
}

export class FormCreateWithoutResponsesInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutFormInput>;
    author: UserCreateNestedOneWithoutFormsInput;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    grades?: Nullable<GradeCreateNestedManyWithoutFormInput>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    tagId?: Nullable<string>;
    tags?: Nullable<TagCreateNestedManyWithoutFormsInput>;
    title: string;
    updatedAt?: Nullable<DateTime>;
}

export class FormCreateWithoutTagsInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutFormInput>;
    author: UserCreateNestedOneWithoutFormsInput;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    grades?: Nullable<GradeCreateNestedManyWithoutFormInput>;
    id?: Nullable<string>;
    responses?: Nullable<ResponseCreateNestedManyWithoutFormInput>;
    state?: Nullable<State>;
    tagId?: Nullable<string>;
    title: string;
    updatedAt?: Nullable<DateTime>;
}

export class FormListRelationFilter {
    every?: Nullable<FormWhereInput>;
    none?: Nullable<FormWhereInput>;
    some?: Nullable<FormWhereInput>;
}

export class FormOrderByInput {
    authorId?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    tagId?: Nullable<SortOrder>;
    title?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class FormRelationFilter {
    is?: Nullable<FormWhereInput>;
    isNot?: Nullable<FormWhereInput>;
}

export class FormScalarWhereInput {
    AND?: Nullable<FormScalarWhereInput[]>;
    NOT?: Nullable<FormScalarWhereInput[]>;
    OR?: Nullable<FormScalarWhereInput[]>;
    authorId?: Nullable<StringFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    description?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    tagId?: Nullable<StringNullableFilter>;
    title?: Nullable<StringFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class FormScalarWhereWithAggregatesInput {
    AND?: Nullable<FormScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<FormScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<FormScalarWhereWithAggregatesInput[]>;
    authorId?: Nullable<StringWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    description?: Nullable<StringNullableWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    tagId?: Nullable<StringNullableWithAggregatesFilter>;
    title?: Nullable<StringWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class FormUncheckedCreateInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutFormInput>;
    authorId: string;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    grades?: Nullable<GradeUncheckedCreateNestedManyWithoutFormInput>;
    id?: Nullable<string>;
    responses?: Nullable<ResponseUncheckedCreateNestedManyWithoutFormInput>;
    state?: Nullable<State>;
    tagId?: Nullable<string>;
    title: string;
    updatedAt?: Nullable<DateTime>;
}

export class FormUncheckedCreateNestedManyWithoutAuthorInput {
    connect?: Nullable<FormWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FormCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<FormCreateWithoutAuthorInput[]>;
    createMany?: Nullable<FormCreateManyAuthorInputEnvelope>;
}

export class FormUncheckedCreateWithoutAttachmentsInput {
    authorId: string;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    grades?: Nullable<GradeUncheckedCreateNestedManyWithoutFormInput>;
    id?: Nullable<string>;
    responses?: Nullable<ResponseUncheckedCreateNestedManyWithoutFormInput>;
    state?: Nullable<State>;
    tagId?: Nullable<string>;
    title: string;
    updatedAt?: Nullable<DateTime>;
}

export class FormUncheckedCreateWithoutAuthorInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutFormInput>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    grades?: Nullable<GradeUncheckedCreateNestedManyWithoutFormInput>;
    id?: Nullable<string>;
    responses?: Nullable<ResponseUncheckedCreateNestedManyWithoutFormInput>;
    state?: Nullable<State>;
    tagId?: Nullable<string>;
    title: string;
    updatedAt?: Nullable<DateTime>;
}

export class FormUncheckedCreateWithoutGradesInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutFormInput>;
    authorId: string;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    responses?: Nullable<ResponseUncheckedCreateNestedManyWithoutFormInput>;
    state?: Nullable<State>;
    tagId?: Nullable<string>;
    title: string;
    updatedAt?: Nullable<DateTime>;
}

export class FormUncheckedCreateWithoutResponsesInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutFormInput>;
    authorId: string;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    grades?: Nullable<GradeUncheckedCreateNestedManyWithoutFormInput>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    tagId?: Nullable<string>;
    title: string;
    updatedAt?: Nullable<DateTime>;
}

export class FormUncheckedCreateWithoutTagsInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutFormInput>;
    authorId: string;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    grades?: Nullable<GradeUncheckedCreateNestedManyWithoutFormInput>;
    id?: Nullable<string>;
    responses?: Nullable<ResponseUncheckedCreateNestedManyWithoutFormInput>;
    state?: Nullable<State>;
    tagId?: Nullable<string>;
    title: string;
    updatedAt?: Nullable<DateTime>;
}

export class FormUncheckedUpdateInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutFormInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    grades?: Nullable<GradeUncheckedUpdateManyWithoutFormInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUncheckedUpdateManyWithoutFormInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    tagId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class FormUncheckedUpdateManyInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    tagId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class FormUncheckedUpdateManyWithoutAuthorInput {
    connect?: Nullable<FormWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FormCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<FormCreateWithoutAuthorInput[]>;
    createMany?: Nullable<FormCreateManyAuthorInputEnvelope>;
    delete?: Nullable<FormWhereUniqueInput[]>;
    deleteMany?: Nullable<FormScalarWhereInput[]>;
    disconnect?: Nullable<FormWhereUniqueInput[]>;
    set?: Nullable<FormWhereUniqueInput[]>;
    update?: Nullable<FormUpdateWithWhereUniqueWithoutAuthorInput[]>;
    updateMany?: Nullable<FormUpdateManyWithWhereWithoutAuthorInput[]>;
    upsert?: Nullable<FormUpsertWithWhereUniqueWithoutAuthorInput[]>;
}

export class FormUncheckedUpdateManyWithoutFormsInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    tagId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class FormUncheckedUpdateWithoutAttachmentsInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    grades?: Nullable<GradeUncheckedUpdateManyWithoutFormInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUncheckedUpdateManyWithoutFormInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    tagId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class FormUncheckedUpdateWithoutAuthorInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutFormInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    grades?: Nullable<GradeUncheckedUpdateManyWithoutFormInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUncheckedUpdateManyWithoutFormInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    tagId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class FormUncheckedUpdateWithoutGradesInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutFormInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUncheckedUpdateManyWithoutFormInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    tagId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class FormUncheckedUpdateWithoutResponsesInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutFormInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    grades?: Nullable<GradeUncheckedUpdateManyWithoutFormInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    tagId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class FormUncheckedUpdateWithoutTagsInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutFormInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    grades?: Nullable<GradeUncheckedUpdateManyWithoutFormInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUncheckedUpdateManyWithoutFormInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    tagId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class FormUpdateInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutFormInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutFormsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    grades?: Nullable<GradeUpdateManyWithoutFormInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUpdateManyWithoutFormInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    tagId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    tags?: Nullable<TagUpdateManyWithoutFormsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class FormUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    tagId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class FormUpdateManyWithWhereWithoutAuthorInput {
    data: FormUncheckedUpdateManyWithoutFormsInput;
    where: FormScalarWhereInput;
}

export class FormUpdateManyWithWhereWithoutTagsInput {
    data: FormUncheckedUpdateManyWithoutFormsInput;
    where: FormScalarWhereInput;
}

export class FormUpdateManyWithoutAuthorInput {
    connect?: Nullable<FormWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FormCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<FormCreateWithoutAuthorInput[]>;
    createMany?: Nullable<FormCreateManyAuthorInputEnvelope>;
    delete?: Nullable<FormWhereUniqueInput[]>;
    deleteMany?: Nullable<FormScalarWhereInput[]>;
    disconnect?: Nullable<FormWhereUniqueInput[]>;
    set?: Nullable<FormWhereUniqueInput[]>;
    update?: Nullable<FormUpdateWithWhereUniqueWithoutAuthorInput[]>;
    updateMany?: Nullable<FormUpdateManyWithWhereWithoutAuthorInput[]>;
    upsert?: Nullable<FormUpsertWithWhereUniqueWithoutAuthorInput[]>;
}

export class FormUpdateManyWithoutTagsInput {
    connect?: Nullable<FormWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FormCreateOrConnectWithoutTagsInput[]>;
    create?: Nullable<FormCreateWithoutTagsInput[]>;
    delete?: Nullable<FormWhereUniqueInput[]>;
    deleteMany?: Nullable<FormScalarWhereInput[]>;
    disconnect?: Nullable<FormWhereUniqueInput[]>;
    set?: Nullable<FormWhereUniqueInput[]>;
    update?: Nullable<FormUpdateWithWhereUniqueWithoutTagsInput[]>;
    updateMany?: Nullable<FormUpdateManyWithWhereWithoutTagsInput[]>;
    upsert?: Nullable<FormUpsertWithWhereUniqueWithoutTagsInput[]>;
}

export class FormUpdateOneRequiredWithoutResponsesInput {
    connect?: Nullable<FormWhereUniqueInput>;
    connectOrCreate?: Nullable<FormCreateOrConnectWithoutResponsesInput>;
    create?: Nullable<FormUncheckedCreateWithoutResponsesInput>;
    update?: Nullable<FormUncheckedUpdateWithoutResponsesInput>;
    upsert?: Nullable<FormUpsertWithoutResponsesInput>;
}

export class FormUpdateOneWithoutAttachmentsInput {
    connect?: Nullable<FormWhereUniqueInput>;
    connectOrCreate?: Nullable<FormCreateOrConnectWithoutAttachmentsInput>;
    create?: Nullable<FormUncheckedCreateWithoutAttachmentsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<FormUncheckedUpdateWithoutAttachmentsInput>;
    upsert?: Nullable<FormUpsertWithoutAttachmentsInput>;
}

export class FormUpdateOneWithoutGradesInput {
    connect?: Nullable<FormWhereUniqueInput>;
    connectOrCreate?: Nullable<FormCreateOrConnectWithoutGradesInput>;
    create?: Nullable<FormUncheckedCreateWithoutGradesInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<FormUncheckedUpdateWithoutGradesInput>;
    upsert?: Nullable<FormUpsertWithoutGradesInput>;
}

export class FormUpdateWithWhereUniqueWithoutAuthorInput {
    data: FormUncheckedUpdateWithoutAuthorInput;
    where: FormWhereUniqueInput;
}

export class FormUpdateWithWhereUniqueWithoutTagsInput {
    data: FormUncheckedUpdateWithoutTagsInput;
    where: FormWhereUniqueInput;
}

export class FormUpdateWithoutAttachmentsInput {
    author?: Nullable<UserUpdateOneRequiredWithoutFormsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    grades?: Nullable<GradeUpdateManyWithoutFormInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUpdateManyWithoutFormInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    tagId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    tags?: Nullable<TagUpdateManyWithoutFormsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class FormUpdateWithoutAuthorInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutFormInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    grades?: Nullable<GradeUpdateManyWithoutFormInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUpdateManyWithoutFormInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    tagId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    tags?: Nullable<TagUpdateManyWithoutFormsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class FormUpdateWithoutGradesInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutFormInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutFormsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUpdateManyWithoutFormInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    tagId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    tags?: Nullable<TagUpdateManyWithoutFormsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class FormUpdateWithoutResponsesInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutFormInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutFormsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    grades?: Nullable<GradeUpdateManyWithoutFormInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    tagId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    tags?: Nullable<TagUpdateManyWithoutFormsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class FormUpdateWithoutTagsInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutFormInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutFormsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    grades?: Nullable<GradeUpdateManyWithoutFormInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUpdateManyWithoutFormInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    tagId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class FormUpsertWithWhereUniqueWithoutAuthorInput {
    create: FormUncheckedCreateWithoutAuthorInput;
    update: FormUncheckedUpdateWithoutAuthorInput;
    where: FormWhereUniqueInput;
}

export class FormUpsertWithWhereUniqueWithoutTagsInput {
    create: FormUncheckedCreateWithoutTagsInput;
    update: FormUncheckedUpdateWithoutTagsInput;
    where: FormWhereUniqueInput;
}

export class FormUpsertWithoutAttachmentsInput {
    create: FormUncheckedCreateWithoutAttachmentsInput;
    update: FormUncheckedUpdateWithoutAttachmentsInput;
}

export class FormUpsertWithoutGradesInput {
    create: FormUncheckedCreateWithoutGradesInput;
    update: FormUncheckedUpdateWithoutGradesInput;
}

export class FormUpsertWithoutResponsesInput {
    create: FormUncheckedCreateWithoutResponsesInput;
    update: FormUncheckedUpdateWithoutResponsesInput;
}

export class FormWhereInput {
    AND?: Nullable<FormWhereInput[]>;
    NOT?: Nullable<FormWhereInput[]>;
    OR?: Nullable<FormWhereInput[]>;
    attachments?: Nullable<AttachmentListRelationFilter>;
    author?: Nullable<UserWhereInput>;
    authorId?: Nullable<StringFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    description?: Nullable<StringNullableFilter>;
    grades?: Nullable<GradeListRelationFilter>;
    id?: Nullable<StringFilter>;
    responses?: Nullable<ResponseListRelationFilter>;
    state?: Nullable<EnumStateFilter>;
    tagId?: Nullable<StringNullableFilter>;
    tags?: Nullable<TagListRelationFilter>;
    title?: Nullable<StringFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class FormWhereUniqueInput {
    id?: Nullable<string>;
}

export class ForumAnswerCreateInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutForumAnswerInput>;
    author: UserCreateNestedOneWithoutForumAnswersInput;
    comments?: Nullable<CommentCreateNestedManyWithoutForumAnswerInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    forum: ForumCreateNestedOneWithoutForumAnswersInput;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumAnswerCreateManyAuthorInput {
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    forumId: string;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumAnswerCreateManyAuthorInputEnvelope {
    data: ForumAnswerCreateManyAuthorInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class ForumAnswerCreateManyForumInput {
    authorId: string;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumAnswerCreateManyForumInputEnvelope {
    data: ForumAnswerCreateManyForumInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class ForumAnswerCreateManyInput {
    authorId: string;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    forumId: string;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumAnswerCreateNestedManyWithoutAuthorInput {
    connect?: Nullable<ForumAnswerWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ForumAnswerCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<ForumAnswerCreateWithoutAuthorInput[]>;
    createMany?: Nullable<ForumAnswerCreateManyAuthorInputEnvelope>;
}

export class ForumAnswerCreateNestedManyWithoutForumInput {
    connect?: Nullable<ForumAnswerWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ForumAnswerCreateOrConnectWithoutForumInput[]>;
    create?: Nullable<ForumAnswerCreateWithoutForumInput[]>;
    createMany?: Nullable<ForumAnswerCreateManyForumInputEnvelope>;
}

export class ForumAnswerCreateNestedOneWithoutAttachmentsInput {
    connect?: Nullable<ForumAnswerWhereUniqueInput>;
    connectOrCreate?: Nullable<ForumAnswerCreateOrConnectWithoutAttachmentsInput>;
    create?: Nullable<ForumAnswerUncheckedCreateWithoutAttachmentsInput>;
}

export class ForumAnswerCreateNestedOneWithoutCommentsInput {
    connect?: Nullable<ForumAnswerWhereUniqueInput>;
    connectOrCreate?: Nullable<ForumAnswerCreateOrConnectWithoutCommentsInput>;
    create?: Nullable<ForumAnswerUncheckedCreateWithoutCommentsInput>;
}

export class ForumAnswerCreateOrConnectWithoutAttachmentsInput {
    create: ForumAnswerUncheckedCreateWithoutAttachmentsInput;
    where: ForumAnswerWhereUniqueInput;
}

export class ForumAnswerCreateOrConnectWithoutAuthorInput {
    create: ForumAnswerUncheckedCreateWithoutAuthorInput;
    where: ForumAnswerWhereUniqueInput;
}

export class ForumAnswerCreateOrConnectWithoutCommentsInput {
    create: ForumAnswerUncheckedCreateWithoutCommentsInput;
    where: ForumAnswerWhereUniqueInput;
}

export class ForumAnswerCreateOrConnectWithoutForumInput {
    create: ForumAnswerUncheckedCreateWithoutForumInput;
    where: ForumAnswerWhereUniqueInput;
}

export class ForumAnswerCreateWithoutAttachmentsInput {
    author: UserCreateNestedOneWithoutForumAnswersInput;
    comments?: Nullable<CommentCreateNestedManyWithoutForumAnswerInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    forum: ForumCreateNestedOneWithoutForumAnswersInput;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumAnswerCreateWithoutAuthorInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutForumAnswerInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutForumAnswerInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    forum: ForumCreateNestedOneWithoutForumAnswersInput;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumAnswerCreateWithoutCommentsInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutForumAnswerInput>;
    author: UserCreateNestedOneWithoutForumAnswersInput;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    forum: ForumCreateNestedOneWithoutForumAnswersInput;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumAnswerCreateWithoutForumInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutForumAnswerInput>;
    author: UserCreateNestedOneWithoutForumAnswersInput;
    comments?: Nullable<CommentCreateNestedManyWithoutForumAnswerInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumAnswerListRelationFilter {
    every?: Nullable<ForumAnswerWhereInput>;
    none?: Nullable<ForumAnswerWhereInput>;
    some?: Nullable<ForumAnswerWhereInput>;
}

export class ForumAnswerOrderByInput {
    authorId?: Nullable<SortOrder>;
    commentsEnabled?: Nullable<SortOrder>;
    content?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    forumId?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class ForumAnswerRelationFilter {
    is?: Nullable<ForumAnswerWhereInput>;
    isNot?: Nullable<ForumAnswerWhereInput>;
}

export class ForumAnswerScalarWhereInput {
    AND?: Nullable<ForumAnswerScalarWhereInput[]>;
    NOT?: Nullable<ForumAnswerScalarWhereInput[]>;
    OR?: Nullable<ForumAnswerScalarWhereInput[]>;
    authorId?: Nullable<StringFilter>;
    commentsEnabled?: Nullable<BoolFilter>;
    content?: Nullable<StringFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    forumId?: Nullable<StringFilter>;
    id?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class ForumAnswerScalarWhereWithAggregatesInput {
    AND?: Nullable<ForumAnswerScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<ForumAnswerScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<ForumAnswerScalarWhereWithAggregatesInput[]>;
    authorId?: Nullable<StringWithAggregatesFilter>;
    commentsEnabled?: Nullable<BoolWithAggregatesFilter>;
    content?: Nullable<StringWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    forumId?: Nullable<StringWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class ForumAnswerUncheckedCreateInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutForumAnswerInput>;
    authorId: string;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutForumAnswerInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    forumId: string;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumAnswerUncheckedCreateNestedManyWithoutAuthorInput {
    connect?: Nullable<ForumAnswerWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ForumAnswerCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<ForumAnswerCreateWithoutAuthorInput[]>;
    createMany?: Nullable<ForumAnswerCreateManyAuthorInputEnvelope>;
}

export class ForumAnswerUncheckedCreateNestedManyWithoutForumInput {
    connect?: Nullable<ForumAnswerWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ForumAnswerCreateOrConnectWithoutForumInput[]>;
    create?: Nullable<ForumAnswerCreateWithoutForumInput[]>;
    createMany?: Nullable<ForumAnswerCreateManyForumInputEnvelope>;
}

export class ForumAnswerUncheckedCreateWithoutAttachmentsInput {
    authorId: string;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutForumAnswerInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    forumId: string;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumAnswerUncheckedCreateWithoutAuthorInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutForumAnswerInput>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutForumAnswerInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    forumId: string;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumAnswerUncheckedCreateWithoutCommentsInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutForumAnswerInput>;
    authorId: string;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    forumId: string;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumAnswerUncheckedCreateWithoutForumInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutForumAnswerInput>;
    authorId: string;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutForumAnswerInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumAnswerUncheckedUpdateInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutForumAnswerInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutForumAnswerInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    forumId?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumAnswerUncheckedUpdateManyInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    forumId?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumAnswerUncheckedUpdateManyWithoutAuthorInput {
    connect?: Nullable<ForumAnswerWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ForumAnswerCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<ForumAnswerCreateWithoutAuthorInput[]>;
    createMany?: Nullable<ForumAnswerCreateManyAuthorInputEnvelope>;
    delete?: Nullable<ForumAnswerWhereUniqueInput[]>;
    deleteMany?: Nullable<ForumAnswerScalarWhereInput[]>;
    disconnect?: Nullable<ForumAnswerWhereUniqueInput[]>;
    set?: Nullable<ForumAnswerWhereUniqueInput[]>;
    update?: Nullable<ForumAnswerUpdateWithWhereUniqueWithoutAuthorInput[]>;
    updateMany?: Nullable<ForumAnswerUpdateManyWithWhereWithoutAuthorInput[]>;
    upsert?: Nullable<ForumAnswerUpsertWithWhereUniqueWithoutAuthorInput[]>;
}

export class ForumAnswerUncheckedUpdateManyWithoutForumAnswersInput {
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    forumId?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumAnswerUncheckedUpdateManyWithoutForumInput {
    connect?: Nullable<ForumAnswerWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ForumAnswerCreateOrConnectWithoutForumInput[]>;
    create?: Nullable<ForumAnswerCreateWithoutForumInput[]>;
    createMany?: Nullable<ForumAnswerCreateManyForumInputEnvelope>;
    delete?: Nullable<ForumAnswerWhereUniqueInput[]>;
    deleteMany?: Nullable<ForumAnswerScalarWhereInput[]>;
    disconnect?: Nullable<ForumAnswerWhereUniqueInput[]>;
    set?: Nullable<ForumAnswerWhereUniqueInput[]>;
    update?: Nullable<ForumAnswerUpdateWithWhereUniqueWithoutForumInput[]>;
    updateMany?: Nullable<ForumAnswerUpdateManyWithWhereWithoutForumInput[]>;
    upsert?: Nullable<ForumAnswerUpsertWithWhereUniqueWithoutForumInput[]>;
}

export class ForumAnswerUncheckedUpdateWithoutAttachmentsInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutForumAnswerInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    forumId?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumAnswerUncheckedUpdateWithoutAuthorInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutForumAnswerInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutForumAnswerInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    forumId?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumAnswerUncheckedUpdateWithoutCommentsInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutForumAnswerInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    forumId?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumAnswerUncheckedUpdateWithoutForumInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutForumAnswerInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutForumAnswerInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumAnswerUpdateInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutForumAnswerInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutForumAnswersInput>;
    comments?: Nullable<CommentUpdateManyWithoutForumAnswerInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    forum?: Nullable<ForumUpdateOneRequiredWithoutForumAnswersInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumAnswerUpdateManyMutationInput {
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumAnswerUpdateManyWithWhereWithoutAuthorInput {
    data: ForumAnswerUncheckedUpdateManyWithoutForumAnswersInput;
    where: ForumAnswerScalarWhereInput;
}

export class ForumAnswerUpdateManyWithWhereWithoutForumInput {
    data: ForumAnswerUncheckedUpdateManyWithoutForumAnswersInput;
    where: ForumAnswerScalarWhereInput;
}

export class ForumAnswerUpdateManyWithoutAuthorInput {
    connect?: Nullable<ForumAnswerWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ForumAnswerCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<ForumAnswerCreateWithoutAuthorInput[]>;
    createMany?: Nullable<ForumAnswerCreateManyAuthorInputEnvelope>;
    delete?: Nullable<ForumAnswerWhereUniqueInput[]>;
    deleteMany?: Nullable<ForumAnswerScalarWhereInput[]>;
    disconnect?: Nullable<ForumAnswerWhereUniqueInput[]>;
    set?: Nullable<ForumAnswerWhereUniqueInput[]>;
    update?: Nullable<ForumAnswerUpdateWithWhereUniqueWithoutAuthorInput[]>;
    updateMany?: Nullable<ForumAnswerUpdateManyWithWhereWithoutAuthorInput[]>;
    upsert?: Nullable<ForumAnswerUpsertWithWhereUniqueWithoutAuthorInput[]>;
}

export class ForumAnswerUpdateManyWithoutForumInput {
    connect?: Nullable<ForumAnswerWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ForumAnswerCreateOrConnectWithoutForumInput[]>;
    create?: Nullable<ForumAnswerCreateWithoutForumInput[]>;
    createMany?: Nullable<ForumAnswerCreateManyForumInputEnvelope>;
    delete?: Nullable<ForumAnswerWhereUniqueInput[]>;
    deleteMany?: Nullable<ForumAnswerScalarWhereInput[]>;
    disconnect?: Nullable<ForumAnswerWhereUniqueInput[]>;
    set?: Nullable<ForumAnswerWhereUniqueInput[]>;
    update?: Nullable<ForumAnswerUpdateWithWhereUniqueWithoutForumInput[]>;
    updateMany?: Nullable<ForumAnswerUpdateManyWithWhereWithoutForumInput[]>;
    upsert?: Nullable<ForumAnswerUpsertWithWhereUniqueWithoutForumInput[]>;
}

export class ForumAnswerUpdateOneWithoutAttachmentsInput {
    connect?: Nullable<ForumAnswerWhereUniqueInput>;
    connectOrCreate?: Nullable<ForumAnswerCreateOrConnectWithoutAttachmentsInput>;
    create?: Nullable<ForumAnswerUncheckedCreateWithoutAttachmentsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<ForumAnswerUncheckedUpdateWithoutAttachmentsInput>;
    upsert?: Nullable<ForumAnswerUpsertWithoutAttachmentsInput>;
}

export class ForumAnswerUpdateOneWithoutCommentsInput {
    connect?: Nullable<ForumAnswerWhereUniqueInput>;
    connectOrCreate?: Nullable<ForumAnswerCreateOrConnectWithoutCommentsInput>;
    create?: Nullable<ForumAnswerUncheckedCreateWithoutCommentsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<ForumAnswerUncheckedUpdateWithoutCommentsInput>;
    upsert?: Nullable<ForumAnswerUpsertWithoutCommentsInput>;
}

export class ForumAnswerUpdateWithWhereUniqueWithoutAuthorInput {
    data: ForumAnswerUncheckedUpdateWithoutAuthorInput;
    where: ForumAnswerWhereUniqueInput;
}

export class ForumAnswerUpdateWithWhereUniqueWithoutForumInput {
    data: ForumAnswerUncheckedUpdateWithoutForumInput;
    where: ForumAnswerWhereUniqueInput;
}

export class ForumAnswerUpdateWithoutAttachmentsInput {
    author?: Nullable<UserUpdateOneRequiredWithoutForumAnswersInput>;
    comments?: Nullable<CommentUpdateManyWithoutForumAnswerInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    forum?: Nullable<ForumUpdateOneRequiredWithoutForumAnswersInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumAnswerUpdateWithoutAuthorInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutForumAnswerInput>;
    comments?: Nullable<CommentUpdateManyWithoutForumAnswerInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    forum?: Nullable<ForumUpdateOneRequiredWithoutForumAnswersInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumAnswerUpdateWithoutCommentsInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutForumAnswerInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutForumAnswersInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    forum?: Nullable<ForumUpdateOneRequiredWithoutForumAnswersInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumAnswerUpdateWithoutForumInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutForumAnswerInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutForumAnswersInput>;
    comments?: Nullable<CommentUpdateManyWithoutForumAnswerInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumAnswerUpsertWithWhereUniqueWithoutAuthorInput {
    create: ForumAnswerUncheckedCreateWithoutAuthorInput;
    update: ForumAnswerUncheckedUpdateWithoutAuthorInput;
    where: ForumAnswerWhereUniqueInput;
}

export class ForumAnswerUpsertWithWhereUniqueWithoutForumInput {
    create: ForumAnswerUncheckedCreateWithoutForumInput;
    update: ForumAnswerUncheckedUpdateWithoutForumInput;
    where: ForumAnswerWhereUniqueInput;
}

export class ForumAnswerUpsertWithoutAttachmentsInput {
    create: ForumAnswerUncheckedCreateWithoutAttachmentsInput;
    update: ForumAnswerUncheckedUpdateWithoutAttachmentsInput;
}

export class ForumAnswerUpsertWithoutCommentsInput {
    create: ForumAnswerUncheckedCreateWithoutCommentsInput;
    update: ForumAnswerUncheckedUpdateWithoutCommentsInput;
}

export class ForumAnswerWhereInput {
    AND?: Nullable<ForumAnswerWhereInput[]>;
    NOT?: Nullable<ForumAnswerWhereInput[]>;
    OR?: Nullable<ForumAnswerWhereInput[]>;
    attachments?: Nullable<AttachmentListRelationFilter>;
    author?: Nullable<UserWhereInput>;
    authorId?: Nullable<StringFilter>;
    comments?: Nullable<CommentListRelationFilter>;
    commentsEnabled?: Nullable<BoolFilter>;
    content?: Nullable<StringFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    forum?: Nullable<ForumWhereInput>;
    forumId?: Nullable<StringFilter>;
    id?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class ForumAnswerWhereUniqueInput {
    id?: Nullable<string>;
}

export class ForumCreateInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutForumInput>;
    author: UserCreateNestedOneWithoutForumsInput;
    comments?: Nullable<CommentCreateNestedManyWithoutForumInput>;
    commentsEnabled?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    description: string;
    forumAnswers?: Nullable<ForumAnswerCreateNestedManyWithoutForumInput>;
    id?: Nullable<string>;
    question: string;
    state?: Nullable<State>;
    tags?: Nullable<TagCreateNestedManyWithoutForumsInput>;
    type?: Nullable<ForumType>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumCreateManyAuthorInput {
    commentsEnabled?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    description: string;
    id?: Nullable<string>;
    question: string;
    state?: Nullable<State>;
    type?: Nullable<ForumType>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumCreateManyAuthorInputEnvelope {
    data: ForumCreateManyAuthorInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class ForumCreateManyInput {
    authorId: string;
    commentsEnabled?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    description: string;
    id?: Nullable<string>;
    question: string;
    state?: Nullable<State>;
    type?: Nullable<ForumType>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumCreateNestedManyWithoutAuthorInput {
    connect?: Nullable<ForumWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ForumCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<ForumCreateWithoutAuthorInput[]>;
    createMany?: Nullable<ForumCreateManyAuthorInputEnvelope>;
}

export class ForumCreateNestedManyWithoutTagsInput {
    connect?: Nullable<ForumWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ForumCreateOrConnectWithoutTagsInput[]>;
    create?: Nullable<ForumCreateWithoutTagsInput[]>;
}

export class ForumCreateNestedOneWithoutAttachmentsInput {
    connect?: Nullable<ForumWhereUniqueInput>;
    connectOrCreate?: Nullable<ForumCreateOrConnectWithoutAttachmentsInput>;
    create?: Nullable<ForumUncheckedCreateWithoutAttachmentsInput>;
}

export class ForumCreateNestedOneWithoutCommentsInput {
    connect?: Nullable<ForumWhereUniqueInput>;
    connectOrCreate?: Nullable<ForumCreateOrConnectWithoutCommentsInput>;
    create?: Nullable<ForumUncheckedCreateWithoutCommentsInput>;
}

export class ForumCreateNestedOneWithoutForumAnswersInput {
    connect?: Nullable<ForumWhereUniqueInput>;
    connectOrCreate?: Nullable<ForumCreateOrConnectWithoutForumAnswersInput>;
    create?: Nullable<ForumUncheckedCreateWithoutForumAnswersInput>;
}

export class ForumCreateOrConnectWithoutAttachmentsInput {
    create: ForumUncheckedCreateWithoutAttachmentsInput;
    where: ForumWhereUniqueInput;
}

export class ForumCreateOrConnectWithoutAuthorInput {
    create: ForumUncheckedCreateWithoutAuthorInput;
    where: ForumWhereUniqueInput;
}

export class ForumCreateOrConnectWithoutCommentsInput {
    create: ForumUncheckedCreateWithoutCommentsInput;
    where: ForumWhereUniqueInput;
}

export class ForumCreateOrConnectWithoutForumAnswersInput {
    create: ForumUncheckedCreateWithoutForumAnswersInput;
    where: ForumWhereUniqueInput;
}

export class ForumCreateOrConnectWithoutTagsInput {
    create: ForumUncheckedCreateWithoutTagsInput;
    where: ForumWhereUniqueInput;
}

export class ForumCreateWithoutAttachmentsInput {
    author: UserCreateNestedOneWithoutForumsInput;
    comments?: Nullable<CommentCreateNestedManyWithoutForumInput>;
    commentsEnabled?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    description: string;
    forumAnswers?: Nullable<ForumAnswerCreateNestedManyWithoutForumInput>;
    id?: Nullable<string>;
    question: string;
    state?: Nullable<State>;
    tags?: Nullable<TagCreateNestedManyWithoutForumsInput>;
    type?: Nullable<ForumType>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumCreateWithoutAuthorInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutForumInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutForumInput>;
    commentsEnabled?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    description: string;
    forumAnswers?: Nullable<ForumAnswerCreateNestedManyWithoutForumInput>;
    id?: Nullable<string>;
    question: string;
    state?: Nullable<State>;
    tags?: Nullable<TagCreateNestedManyWithoutForumsInput>;
    type?: Nullable<ForumType>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumCreateWithoutCommentsInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutForumInput>;
    author: UserCreateNestedOneWithoutForumsInput;
    commentsEnabled?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    description: string;
    forumAnswers?: Nullable<ForumAnswerCreateNestedManyWithoutForumInput>;
    id?: Nullable<string>;
    question: string;
    state?: Nullable<State>;
    tags?: Nullable<TagCreateNestedManyWithoutForumsInput>;
    type?: Nullable<ForumType>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumCreateWithoutForumAnswersInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutForumInput>;
    author: UserCreateNestedOneWithoutForumsInput;
    comments?: Nullable<CommentCreateNestedManyWithoutForumInput>;
    commentsEnabled?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    description: string;
    id?: Nullable<string>;
    question: string;
    state?: Nullable<State>;
    tags?: Nullable<TagCreateNestedManyWithoutForumsInput>;
    type?: Nullable<ForumType>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumCreateWithoutTagsInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutForumInput>;
    author: UserCreateNestedOneWithoutForumsInput;
    comments?: Nullable<CommentCreateNestedManyWithoutForumInput>;
    commentsEnabled?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    description: string;
    forumAnswers?: Nullable<ForumAnswerCreateNestedManyWithoutForumInput>;
    id?: Nullable<string>;
    question: string;
    state?: Nullable<State>;
    type?: Nullable<ForumType>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumListRelationFilter {
    every?: Nullable<ForumWhereInput>;
    none?: Nullable<ForumWhereInput>;
    some?: Nullable<ForumWhereInput>;
}

export class ForumOrderByInput {
    authorId?: Nullable<SortOrder>;
    commentsEnabled?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    question?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    type?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class ForumRelationFilter {
    is?: Nullable<ForumWhereInput>;
    isNot?: Nullable<ForumWhereInput>;
}

export class ForumScalarWhereInput {
    AND?: Nullable<ForumScalarWhereInput[]>;
    NOT?: Nullable<ForumScalarWhereInput[]>;
    OR?: Nullable<ForumScalarWhereInput[]>;
    authorId?: Nullable<StringFilter>;
    commentsEnabled?: Nullable<BoolFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    description?: Nullable<StringFilter>;
    id?: Nullable<StringFilter>;
    question?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    type?: Nullable<EnumForumTypeFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class ForumScalarWhereWithAggregatesInput {
    AND?: Nullable<ForumScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<ForumScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<ForumScalarWhereWithAggregatesInput[]>;
    authorId?: Nullable<StringWithAggregatesFilter>;
    commentsEnabled?: Nullable<BoolWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    description?: Nullable<StringWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    question?: Nullable<StringWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    type?: Nullable<EnumForumTypeWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class ForumUncheckedCreateInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutForumInput>;
    authorId: string;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutForumInput>;
    commentsEnabled?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    description: string;
    forumAnswers?: Nullable<ForumAnswerUncheckedCreateNestedManyWithoutForumInput>;
    id?: Nullable<string>;
    question: string;
    state?: Nullable<State>;
    type?: Nullable<ForumType>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumUncheckedCreateNestedManyWithoutAuthorInput {
    connect?: Nullable<ForumWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ForumCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<ForumCreateWithoutAuthorInput[]>;
    createMany?: Nullable<ForumCreateManyAuthorInputEnvelope>;
}

export class ForumUncheckedCreateWithoutAttachmentsInput {
    authorId: string;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutForumInput>;
    commentsEnabled?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    description: string;
    forumAnswers?: Nullable<ForumAnswerUncheckedCreateNestedManyWithoutForumInput>;
    id?: Nullable<string>;
    question: string;
    state?: Nullable<State>;
    type?: Nullable<ForumType>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumUncheckedCreateWithoutAuthorInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutForumInput>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutForumInput>;
    commentsEnabled?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    description: string;
    forumAnswers?: Nullable<ForumAnswerUncheckedCreateNestedManyWithoutForumInput>;
    id?: Nullable<string>;
    question: string;
    state?: Nullable<State>;
    type?: Nullable<ForumType>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumUncheckedCreateWithoutCommentsInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutForumInput>;
    authorId: string;
    commentsEnabled?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    description: string;
    forumAnswers?: Nullable<ForumAnswerUncheckedCreateNestedManyWithoutForumInput>;
    id?: Nullable<string>;
    question: string;
    state?: Nullable<State>;
    type?: Nullable<ForumType>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumUncheckedCreateWithoutForumAnswersInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutForumInput>;
    authorId: string;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutForumInput>;
    commentsEnabled?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    description: string;
    id?: Nullable<string>;
    question: string;
    state?: Nullable<State>;
    type?: Nullable<ForumType>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumUncheckedCreateWithoutTagsInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutForumInput>;
    authorId: string;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutForumInput>;
    commentsEnabled?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    description: string;
    forumAnswers?: Nullable<ForumAnswerUncheckedCreateNestedManyWithoutForumInput>;
    id?: Nullable<string>;
    question: string;
    state?: Nullable<State>;
    type?: Nullable<ForumType>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumUncheckedUpdateInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutForumInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutForumInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    forumAnswers?: Nullable<ForumAnswerUncheckedUpdateManyWithoutForumInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumForumTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumUncheckedUpdateManyInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumForumTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumUncheckedUpdateManyWithoutAuthorInput {
    connect?: Nullable<ForumWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ForumCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<ForumCreateWithoutAuthorInput[]>;
    createMany?: Nullable<ForumCreateManyAuthorInputEnvelope>;
    delete?: Nullable<ForumWhereUniqueInput[]>;
    deleteMany?: Nullable<ForumScalarWhereInput[]>;
    disconnect?: Nullable<ForumWhereUniqueInput[]>;
    set?: Nullable<ForumWhereUniqueInput[]>;
    update?: Nullable<ForumUpdateWithWhereUniqueWithoutAuthorInput[]>;
    updateMany?: Nullable<ForumUpdateManyWithWhereWithoutAuthorInput[]>;
    upsert?: Nullable<ForumUpsertWithWhereUniqueWithoutAuthorInput[]>;
}

export class ForumUncheckedUpdateManyWithoutForumsInput {
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumForumTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumUncheckedUpdateWithoutAttachmentsInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutForumInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    forumAnswers?: Nullable<ForumAnswerUncheckedUpdateManyWithoutForumInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumForumTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumUncheckedUpdateWithoutAuthorInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutForumInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutForumInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    forumAnswers?: Nullable<ForumAnswerUncheckedUpdateManyWithoutForumInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumForumTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumUncheckedUpdateWithoutCommentsInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutForumInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    forumAnswers?: Nullable<ForumAnswerUncheckedUpdateManyWithoutForumInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumForumTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumUncheckedUpdateWithoutForumAnswersInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutForumInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutForumInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumForumTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumUncheckedUpdateWithoutTagsInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutForumInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutForumInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    forumAnswers?: Nullable<ForumAnswerUncheckedUpdateManyWithoutForumInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumForumTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumUpdateInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutForumInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutForumsInput>;
    comments?: Nullable<CommentUpdateManyWithoutForumInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    forumAnswers?: Nullable<ForumAnswerUpdateManyWithoutForumInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    tags?: Nullable<TagUpdateManyWithoutForumsInput>;
    type?: Nullable<EnumForumTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumUpdateManyMutationInput {
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumForumTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumUpdateManyWithWhereWithoutAuthorInput {
    data: ForumUncheckedUpdateManyWithoutForumsInput;
    where: ForumScalarWhereInput;
}

export class ForumUpdateManyWithWhereWithoutTagsInput {
    data: ForumUncheckedUpdateManyWithoutForumsInput;
    where: ForumScalarWhereInput;
}

export class ForumUpdateManyWithoutAuthorInput {
    connect?: Nullable<ForumWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ForumCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<ForumCreateWithoutAuthorInput[]>;
    createMany?: Nullable<ForumCreateManyAuthorInputEnvelope>;
    delete?: Nullable<ForumWhereUniqueInput[]>;
    deleteMany?: Nullable<ForumScalarWhereInput[]>;
    disconnect?: Nullable<ForumWhereUniqueInput[]>;
    set?: Nullable<ForumWhereUniqueInput[]>;
    update?: Nullable<ForumUpdateWithWhereUniqueWithoutAuthorInput[]>;
    updateMany?: Nullable<ForumUpdateManyWithWhereWithoutAuthorInput[]>;
    upsert?: Nullable<ForumUpsertWithWhereUniqueWithoutAuthorInput[]>;
}

export class ForumUpdateManyWithoutTagsInput {
    connect?: Nullable<ForumWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ForumCreateOrConnectWithoutTagsInput[]>;
    create?: Nullable<ForumCreateWithoutTagsInput[]>;
    delete?: Nullable<ForumWhereUniqueInput[]>;
    deleteMany?: Nullable<ForumScalarWhereInput[]>;
    disconnect?: Nullable<ForumWhereUniqueInput[]>;
    set?: Nullable<ForumWhereUniqueInput[]>;
    update?: Nullable<ForumUpdateWithWhereUniqueWithoutTagsInput[]>;
    updateMany?: Nullable<ForumUpdateManyWithWhereWithoutTagsInput[]>;
    upsert?: Nullable<ForumUpsertWithWhereUniqueWithoutTagsInput[]>;
}

export class ForumUpdateOneRequiredWithoutForumAnswersInput {
    connect?: Nullable<ForumWhereUniqueInput>;
    connectOrCreate?: Nullable<ForumCreateOrConnectWithoutForumAnswersInput>;
    create?: Nullable<ForumUncheckedCreateWithoutForumAnswersInput>;
    update?: Nullable<ForumUncheckedUpdateWithoutForumAnswersInput>;
    upsert?: Nullable<ForumUpsertWithoutForumAnswersInput>;
}

export class ForumUpdateOneWithoutAttachmentsInput {
    connect?: Nullable<ForumWhereUniqueInput>;
    connectOrCreate?: Nullable<ForumCreateOrConnectWithoutAttachmentsInput>;
    create?: Nullable<ForumUncheckedCreateWithoutAttachmentsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<ForumUncheckedUpdateWithoutAttachmentsInput>;
    upsert?: Nullable<ForumUpsertWithoutAttachmentsInput>;
}

export class ForumUpdateOneWithoutCommentsInput {
    connect?: Nullable<ForumWhereUniqueInput>;
    connectOrCreate?: Nullable<ForumCreateOrConnectWithoutCommentsInput>;
    create?: Nullable<ForumUncheckedCreateWithoutCommentsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<ForumUncheckedUpdateWithoutCommentsInput>;
    upsert?: Nullable<ForumUpsertWithoutCommentsInput>;
}

export class ForumUpdateWithWhereUniqueWithoutAuthorInput {
    data: ForumUncheckedUpdateWithoutAuthorInput;
    where: ForumWhereUniqueInput;
}

export class ForumUpdateWithWhereUniqueWithoutTagsInput {
    data: ForumUncheckedUpdateWithoutTagsInput;
    where: ForumWhereUniqueInput;
}

export class ForumUpdateWithoutAttachmentsInput {
    author?: Nullable<UserUpdateOneRequiredWithoutForumsInput>;
    comments?: Nullable<CommentUpdateManyWithoutForumInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    forumAnswers?: Nullable<ForumAnswerUpdateManyWithoutForumInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    tags?: Nullable<TagUpdateManyWithoutForumsInput>;
    type?: Nullable<EnumForumTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumUpdateWithoutAuthorInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutForumInput>;
    comments?: Nullable<CommentUpdateManyWithoutForumInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    forumAnswers?: Nullable<ForumAnswerUpdateManyWithoutForumInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    tags?: Nullable<TagUpdateManyWithoutForumsInput>;
    type?: Nullable<EnumForumTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumUpdateWithoutCommentsInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutForumInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutForumsInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    forumAnswers?: Nullable<ForumAnswerUpdateManyWithoutForumInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    tags?: Nullable<TagUpdateManyWithoutForumsInput>;
    type?: Nullable<EnumForumTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumUpdateWithoutForumAnswersInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutForumInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutForumsInput>;
    comments?: Nullable<CommentUpdateManyWithoutForumInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    tags?: Nullable<TagUpdateManyWithoutForumsInput>;
    type?: Nullable<EnumForumTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumUpdateWithoutTagsInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutForumInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutForumsInput>;
    comments?: Nullable<CommentUpdateManyWithoutForumInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    forumAnswers?: Nullable<ForumAnswerUpdateManyWithoutForumInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    question?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumForumTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ForumUpsertWithWhereUniqueWithoutAuthorInput {
    create: ForumUncheckedCreateWithoutAuthorInput;
    update: ForumUncheckedUpdateWithoutAuthorInput;
    where: ForumWhereUniqueInput;
}

export class ForumUpsertWithWhereUniqueWithoutTagsInput {
    create: ForumUncheckedCreateWithoutTagsInput;
    update: ForumUncheckedUpdateWithoutTagsInput;
    where: ForumWhereUniqueInput;
}

export class ForumUpsertWithoutAttachmentsInput {
    create: ForumUncheckedCreateWithoutAttachmentsInput;
    update: ForumUncheckedUpdateWithoutAttachmentsInput;
}

export class ForumUpsertWithoutCommentsInput {
    create: ForumUncheckedCreateWithoutCommentsInput;
    update: ForumUncheckedUpdateWithoutCommentsInput;
}

export class ForumUpsertWithoutForumAnswersInput {
    create: ForumUncheckedCreateWithoutForumAnswersInput;
    update: ForumUncheckedUpdateWithoutForumAnswersInput;
}

export class ForumWhereInput {
    AND?: Nullable<ForumWhereInput[]>;
    NOT?: Nullable<ForumWhereInput[]>;
    OR?: Nullable<ForumWhereInput[]>;
    attachments?: Nullable<AttachmentListRelationFilter>;
    author?: Nullable<UserWhereInput>;
    authorId?: Nullable<StringFilter>;
    comments?: Nullable<CommentListRelationFilter>;
    commentsEnabled?: Nullable<BoolFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    description?: Nullable<StringFilter>;
    forumAnswers?: Nullable<ForumAnswerListRelationFilter>;
    id?: Nullable<StringFilter>;
    question?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    tags?: Nullable<TagListRelationFilter>;
    type?: Nullable<EnumForumTypeFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class ForumWhereUniqueInput {
    id?: Nullable<string>;
}

export class GradeCreateInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutGradeInput>;
    createdAt?: Nullable<DateTime>;
    description: string;
    form?: Nullable<FormCreateNestedOneWithoutGradesInput>;
    id?: Nullable<string>;
    maxInclusive?: Nullable<boolean>;
    maxValue?: Nullable<number>;
    minInclusive?: Nullable<boolean>;
    minValue?: Nullable<number>;
    name: string;
    questions?: Nullable<QuestionCreateNestedManyWithoutGradeInput>;
    recommendations?: Nullable<RecommendationCreateNestedManyWithoutGradeInput>;
    responses?: Nullable<ResponseCreateNestedManyWithoutGradeInput>;
    updatedAt?: Nullable<DateTime>;
}

export class GradeCreateManyFormInput {
    createdAt?: Nullable<DateTime>;
    description: string;
    id?: Nullable<string>;
    maxInclusive?: Nullable<boolean>;
    maxValue?: Nullable<number>;
    minInclusive?: Nullable<boolean>;
    minValue?: Nullable<number>;
    name: string;
    updatedAt?: Nullable<DateTime>;
}

export class GradeCreateManyFormInputEnvelope {
    data: GradeCreateManyFormInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class GradeCreateManyInput {
    createdAt?: Nullable<DateTime>;
    description: string;
    formId?: Nullable<string>;
    id?: Nullable<string>;
    maxInclusive?: Nullable<boolean>;
    maxValue?: Nullable<number>;
    minInclusive?: Nullable<boolean>;
    minValue?: Nullable<number>;
    name: string;
    updatedAt?: Nullable<DateTime>;
}

export class GradeCreateNestedManyWithoutFormInput {
    connect?: Nullable<GradeWhereUniqueInput[]>;
    connectOrCreate?: Nullable<GradeCreateOrConnectWithoutFormInput[]>;
    create?: Nullable<GradeCreateWithoutFormInput[]>;
    createMany?: Nullable<GradeCreateManyFormInputEnvelope>;
}

export class GradeCreateNestedOneWithoutAttachmentsInput {
    connect?: Nullable<GradeWhereUniqueInput>;
    connectOrCreate?: Nullable<GradeCreateOrConnectWithoutAttachmentsInput>;
    create?: Nullable<GradeUncheckedCreateWithoutAttachmentsInput>;
}

export class GradeCreateNestedOneWithoutQuestionsInput {
    connect?: Nullable<GradeWhereUniqueInput>;
    connectOrCreate?: Nullable<GradeCreateOrConnectWithoutQuestionsInput>;
    create?: Nullable<GradeUncheckedCreateWithoutQuestionsInput>;
}

export class GradeCreateNestedOneWithoutRecommendationsInput {
    connect?: Nullable<GradeWhereUniqueInput>;
    connectOrCreate?: Nullable<GradeCreateOrConnectWithoutRecommendationsInput>;
    create?: Nullable<GradeUncheckedCreateWithoutRecommendationsInput>;
}

export class GradeCreateNestedOneWithoutResponsesInput {
    connect?: Nullable<GradeWhereUniqueInput>;
    connectOrCreate?: Nullable<GradeCreateOrConnectWithoutResponsesInput>;
    create?: Nullable<GradeUncheckedCreateWithoutResponsesInput>;
}

export class GradeCreateOrConnectWithoutAttachmentsInput {
    create: GradeUncheckedCreateWithoutAttachmentsInput;
    where: GradeWhereUniqueInput;
}

export class GradeCreateOrConnectWithoutFormInput {
    create: GradeUncheckedCreateWithoutFormInput;
    where: GradeWhereUniqueInput;
}

export class GradeCreateOrConnectWithoutQuestionsInput {
    create: GradeUncheckedCreateWithoutQuestionsInput;
    where: GradeWhereUniqueInput;
}

export class GradeCreateOrConnectWithoutRecommendationsInput {
    create: GradeUncheckedCreateWithoutRecommendationsInput;
    where: GradeWhereUniqueInput;
}

export class GradeCreateOrConnectWithoutResponsesInput {
    create: GradeUncheckedCreateWithoutResponsesInput;
    where: GradeWhereUniqueInput;
}

export class GradeCreateWithoutAttachmentsInput {
    createdAt?: Nullable<DateTime>;
    description: string;
    form?: Nullable<FormCreateNestedOneWithoutGradesInput>;
    id?: Nullable<string>;
    maxInclusive?: Nullable<boolean>;
    maxValue?: Nullable<number>;
    minInclusive?: Nullable<boolean>;
    minValue?: Nullable<number>;
    name: string;
    questions?: Nullable<QuestionCreateNestedManyWithoutGradeInput>;
    recommendations?: Nullable<RecommendationCreateNestedManyWithoutGradeInput>;
    responses?: Nullable<ResponseCreateNestedManyWithoutGradeInput>;
    updatedAt?: Nullable<DateTime>;
}

export class GradeCreateWithoutFormInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutGradeInput>;
    createdAt?: Nullable<DateTime>;
    description: string;
    id?: Nullable<string>;
    maxInclusive?: Nullable<boolean>;
    maxValue?: Nullable<number>;
    minInclusive?: Nullable<boolean>;
    minValue?: Nullable<number>;
    name: string;
    questions?: Nullable<QuestionCreateNestedManyWithoutGradeInput>;
    recommendations?: Nullable<RecommendationCreateNestedManyWithoutGradeInput>;
    responses?: Nullable<ResponseCreateNestedManyWithoutGradeInput>;
    updatedAt?: Nullable<DateTime>;
}

export class GradeCreateWithoutQuestionsInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutGradeInput>;
    createdAt?: Nullable<DateTime>;
    description: string;
    form?: Nullable<FormCreateNestedOneWithoutGradesInput>;
    id?: Nullable<string>;
    maxInclusive?: Nullable<boolean>;
    maxValue?: Nullable<number>;
    minInclusive?: Nullable<boolean>;
    minValue?: Nullable<number>;
    name: string;
    recommendations?: Nullable<RecommendationCreateNestedManyWithoutGradeInput>;
    responses?: Nullable<ResponseCreateNestedManyWithoutGradeInput>;
    updatedAt?: Nullable<DateTime>;
}

export class GradeCreateWithoutRecommendationsInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutGradeInput>;
    createdAt?: Nullable<DateTime>;
    description: string;
    form?: Nullable<FormCreateNestedOneWithoutGradesInput>;
    id?: Nullable<string>;
    maxInclusive?: Nullable<boolean>;
    maxValue?: Nullable<number>;
    minInclusive?: Nullable<boolean>;
    minValue?: Nullable<number>;
    name: string;
    questions?: Nullable<QuestionCreateNestedManyWithoutGradeInput>;
    responses?: Nullable<ResponseCreateNestedManyWithoutGradeInput>;
    updatedAt?: Nullable<DateTime>;
}

export class GradeCreateWithoutResponsesInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutGradeInput>;
    createdAt?: Nullable<DateTime>;
    description: string;
    form?: Nullable<FormCreateNestedOneWithoutGradesInput>;
    id?: Nullable<string>;
    maxInclusive?: Nullable<boolean>;
    maxValue?: Nullable<number>;
    minInclusive?: Nullable<boolean>;
    minValue?: Nullable<number>;
    name: string;
    questions?: Nullable<QuestionCreateNestedManyWithoutGradeInput>;
    recommendations?: Nullable<RecommendationCreateNestedManyWithoutGradeInput>;
    updatedAt?: Nullable<DateTime>;
}

export class GradeListRelationFilter {
    every?: Nullable<GradeWhereInput>;
    none?: Nullable<GradeWhereInput>;
    some?: Nullable<GradeWhereInput>;
}

export class GradeOrderByInput {
    createdAt?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    formId?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    maxInclusive?: Nullable<SortOrder>;
    maxValue?: Nullable<SortOrder>;
    minInclusive?: Nullable<SortOrder>;
    minValue?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class GradeRelationFilter {
    is?: Nullable<GradeWhereInput>;
    isNot?: Nullable<GradeWhereInput>;
}

export class GradeScalarWhereInput {
    AND?: Nullable<GradeScalarWhereInput[]>;
    NOT?: Nullable<GradeScalarWhereInput[]>;
    OR?: Nullable<GradeScalarWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    description?: Nullable<StringFilter>;
    formId?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    maxInclusive?: Nullable<BoolFilter>;
    maxValue?: Nullable<IntNullableFilter>;
    minInclusive?: Nullable<BoolFilter>;
    minValue?: Nullable<IntNullableFilter>;
    name?: Nullable<StringFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class GradeScalarWhereWithAggregatesInput {
    AND?: Nullable<GradeScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<GradeScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<GradeScalarWhereWithAggregatesInput[]>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    description?: Nullable<StringWithAggregatesFilter>;
    formId?: Nullable<StringNullableWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    maxInclusive?: Nullable<BoolWithAggregatesFilter>;
    maxValue?: Nullable<IntNullableWithAggregatesFilter>;
    minInclusive?: Nullable<BoolWithAggregatesFilter>;
    minValue?: Nullable<IntNullableWithAggregatesFilter>;
    name?: Nullable<StringWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class GradeUncheckedCreateInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutGradeInput>;
    createdAt?: Nullable<DateTime>;
    description: string;
    formId?: Nullable<string>;
    id?: Nullable<string>;
    maxInclusive?: Nullable<boolean>;
    maxValue?: Nullable<number>;
    minInclusive?: Nullable<boolean>;
    minValue?: Nullable<number>;
    name: string;
    questions?: Nullable<QuestionUncheckedCreateNestedManyWithoutGradeInput>;
    recommendations?: Nullable<RecommendationUncheckedCreateNestedManyWithoutGradeInput>;
    responses?: Nullable<ResponseUncheckedCreateNestedManyWithoutGradeInput>;
    updatedAt?: Nullable<DateTime>;
}

export class GradeUncheckedCreateNestedManyWithoutFormInput {
    connect?: Nullable<GradeWhereUniqueInput[]>;
    connectOrCreate?: Nullable<GradeCreateOrConnectWithoutFormInput[]>;
    create?: Nullable<GradeCreateWithoutFormInput[]>;
    createMany?: Nullable<GradeCreateManyFormInputEnvelope>;
}

export class GradeUncheckedCreateWithoutAttachmentsInput {
    createdAt?: Nullable<DateTime>;
    description: string;
    formId?: Nullable<string>;
    id?: Nullable<string>;
    maxInclusive?: Nullable<boolean>;
    maxValue?: Nullable<number>;
    minInclusive?: Nullable<boolean>;
    minValue?: Nullable<number>;
    name: string;
    questions?: Nullable<QuestionUncheckedCreateNestedManyWithoutGradeInput>;
    recommendations?: Nullable<RecommendationUncheckedCreateNestedManyWithoutGradeInput>;
    responses?: Nullable<ResponseUncheckedCreateNestedManyWithoutGradeInput>;
    updatedAt?: Nullable<DateTime>;
}

export class GradeUncheckedCreateWithoutFormInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutGradeInput>;
    createdAt?: Nullable<DateTime>;
    description: string;
    id?: Nullable<string>;
    maxInclusive?: Nullable<boolean>;
    maxValue?: Nullable<number>;
    minInclusive?: Nullable<boolean>;
    minValue?: Nullable<number>;
    name: string;
    questions?: Nullable<QuestionUncheckedCreateNestedManyWithoutGradeInput>;
    recommendations?: Nullable<RecommendationUncheckedCreateNestedManyWithoutGradeInput>;
    responses?: Nullable<ResponseUncheckedCreateNestedManyWithoutGradeInput>;
    updatedAt?: Nullable<DateTime>;
}

export class GradeUncheckedCreateWithoutQuestionsInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutGradeInput>;
    createdAt?: Nullable<DateTime>;
    description: string;
    formId?: Nullable<string>;
    id?: Nullable<string>;
    maxInclusive?: Nullable<boolean>;
    maxValue?: Nullable<number>;
    minInclusive?: Nullable<boolean>;
    minValue?: Nullable<number>;
    name: string;
    recommendations?: Nullable<RecommendationUncheckedCreateNestedManyWithoutGradeInput>;
    responses?: Nullable<ResponseUncheckedCreateNestedManyWithoutGradeInput>;
    updatedAt?: Nullable<DateTime>;
}

export class GradeUncheckedCreateWithoutRecommendationsInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutGradeInput>;
    createdAt?: Nullable<DateTime>;
    description: string;
    formId?: Nullable<string>;
    id?: Nullable<string>;
    maxInclusive?: Nullable<boolean>;
    maxValue?: Nullable<number>;
    minInclusive?: Nullable<boolean>;
    minValue?: Nullable<number>;
    name: string;
    questions?: Nullable<QuestionUncheckedCreateNestedManyWithoutGradeInput>;
    responses?: Nullable<ResponseUncheckedCreateNestedManyWithoutGradeInput>;
    updatedAt?: Nullable<DateTime>;
}

export class GradeUncheckedCreateWithoutResponsesInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutGradeInput>;
    createdAt?: Nullable<DateTime>;
    description: string;
    formId?: Nullable<string>;
    id?: Nullable<string>;
    maxInclusive?: Nullable<boolean>;
    maxValue?: Nullable<number>;
    minInclusive?: Nullable<boolean>;
    minValue?: Nullable<number>;
    name: string;
    questions?: Nullable<QuestionUncheckedCreateNestedManyWithoutGradeInput>;
    recommendations?: Nullable<RecommendationUncheckedCreateNestedManyWithoutGradeInput>;
    updatedAt?: Nullable<DateTime>;
}

export class GradeUncheckedUpdateInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutGradeInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    formId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    maxInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    maxValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    minInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    minValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    questions?: Nullable<QuestionUncheckedUpdateManyWithoutGradeInput>;
    recommendations?: Nullable<RecommendationUncheckedUpdateManyWithoutGradeInput>;
    responses?: Nullable<ResponseUncheckedUpdateManyWithoutGradeInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class GradeUncheckedUpdateManyInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    formId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    maxInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    maxValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    minInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    minValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class GradeUncheckedUpdateManyWithoutFormInput {
    connect?: Nullable<GradeWhereUniqueInput[]>;
    connectOrCreate?: Nullable<GradeCreateOrConnectWithoutFormInput[]>;
    create?: Nullable<GradeCreateWithoutFormInput[]>;
    createMany?: Nullable<GradeCreateManyFormInputEnvelope>;
    delete?: Nullable<GradeWhereUniqueInput[]>;
    deleteMany?: Nullable<GradeScalarWhereInput[]>;
    disconnect?: Nullable<GradeWhereUniqueInput[]>;
    set?: Nullable<GradeWhereUniqueInput[]>;
    update?: Nullable<GradeUpdateWithWhereUniqueWithoutFormInput[]>;
    updateMany?: Nullable<GradeUpdateManyWithWhereWithoutFormInput[]>;
    upsert?: Nullable<GradeUpsertWithWhereUniqueWithoutFormInput[]>;
}

export class GradeUncheckedUpdateManyWithoutGradesInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    maxInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    maxValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    minInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    minValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class GradeUncheckedUpdateWithoutAttachmentsInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    formId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    maxInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    maxValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    minInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    minValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    questions?: Nullable<QuestionUncheckedUpdateManyWithoutGradeInput>;
    recommendations?: Nullable<RecommendationUncheckedUpdateManyWithoutGradeInput>;
    responses?: Nullable<ResponseUncheckedUpdateManyWithoutGradeInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class GradeUncheckedUpdateWithoutFormInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutGradeInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    maxInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    maxValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    minInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    minValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    questions?: Nullable<QuestionUncheckedUpdateManyWithoutGradeInput>;
    recommendations?: Nullable<RecommendationUncheckedUpdateManyWithoutGradeInput>;
    responses?: Nullable<ResponseUncheckedUpdateManyWithoutGradeInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class GradeUncheckedUpdateWithoutQuestionsInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutGradeInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    formId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    maxInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    maxValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    minInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    minValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    recommendations?: Nullable<RecommendationUncheckedUpdateManyWithoutGradeInput>;
    responses?: Nullable<ResponseUncheckedUpdateManyWithoutGradeInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class GradeUncheckedUpdateWithoutRecommendationsInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutGradeInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    formId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    maxInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    maxValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    minInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    minValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    questions?: Nullable<QuestionUncheckedUpdateManyWithoutGradeInput>;
    responses?: Nullable<ResponseUncheckedUpdateManyWithoutGradeInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class GradeUncheckedUpdateWithoutResponsesInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutGradeInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    formId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    maxInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    maxValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    minInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    minValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    questions?: Nullable<QuestionUncheckedUpdateManyWithoutGradeInput>;
    recommendations?: Nullable<RecommendationUncheckedUpdateManyWithoutGradeInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class GradeUpdateInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutGradeInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    form?: Nullable<FormUpdateOneWithoutGradesInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    maxInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    maxValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    minInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    minValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    questions?: Nullable<QuestionUpdateManyWithoutGradeInput>;
    recommendations?: Nullable<RecommendationUpdateManyWithoutGradeInput>;
    responses?: Nullable<ResponseUpdateManyWithoutGradeInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class GradeUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    maxInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    maxValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    minInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    minValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class GradeUpdateManyWithWhereWithoutFormInput {
    data: GradeUncheckedUpdateManyWithoutGradesInput;
    where: GradeScalarWhereInput;
}

export class GradeUpdateManyWithoutFormInput {
    connect?: Nullable<GradeWhereUniqueInput[]>;
    connectOrCreate?: Nullable<GradeCreateOrConnectWithoutFormInput[]>;
    create?: Nullable<GradeCreateWithoutFormInput[]>;
    createMany?: Nullable<GradeCreateManyFormInputEnvelope>;
    delete?: Nullable<GradeWhereUniqueInput[]>;
    deleteMany?: Nullable<GradeScalarWhereInput[]>;
    disconnect?: Nullable<GradeWhereUniqueInput[]>;
    set?: Nullable<GradeWhereUniqueInput[]>;
    update?: Nullable<GradeUpdateWithWhereUniqueWithoutFormInput[]>;
    updateMany?: Nullable<GradeUpdateManyWithWhereWithoutFormInput[]>;
    upsert?: Nullable<GradeUpsertWithWhereUniqueWithoutFormInput[]>;
}

export class GradeUpdateOneRequiredWithoutQuestionsInput {
    connect?: Nullable<GradeWhereUniqueInput>;
    connectOrCreate?: Nullable<GradeCreateOrConnectWithoutQuestionsInput>;
    create?: Nullable<GradeUncheckedCreateWithoutQuestionsInput>;
    update?: Nullable<GradeUncheckedUpdateWithoutQuestionsInput>;
    upsert?: Nullable<GradeUpsertWithoutQuestionsInput>;
}

export class GradeUpdateOneRequiredWithoutResponsesInput {
    connect?: Nullable<GradeWhereUniqueInput>;
    connectOrCreate?: Nullable<GradeCreateOrConnectWithoutResponsesInput>;
    create?: Nullable<GradeUncheckedCreateWithoutResponsesInput>;
    update?: Nullable<GradeUncheckedUpdateWithoutResponsesInput>;
    upsert?: Nullable<GradeUpsertWithoutResponsesInput>;
}

export class GradeUpdateOneWithoutAttachmentsInput {
    connect?: Nullable<GradeWhereUniqueInput>;
    connectOrCreate?: Nullable<GradeCreateOrConnectWithoutAttachmentsInput>;
    create?: Nullable<GradeUncheckedCreateWithoutAttachmentsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<GradeUncheckedUpdateWithoutAttachmentsInput>;
    upsert?: Nullable<GradeUpsertWithoutAttachmentsInput>;
}

export class GradeUpdateOneWithoutRecommendationsInput {
    connect?: Nullable<GradeWhereUniqueInput>;
    connectOrCreate?: Nullable<GradeCreateOrConnectWithoutRecommendationsInput>;
    create?: Nullable<GradeUncheckedCreateWithoutRecommendationsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<GradeUncheckedUpdateWithoutRecommendationsInput>;
    upsert?: Nullable<GradeUpsertWithoutRecommendationsInput>;
}

export class GradeUpdateWithWhereUniqueWithoutFormInput {
    data: GradeUncheckedUpdateWithoutFormInput;
    where: GradeWhereUniqueInput;
}

export class GradeUpdateWithoutAttachmentsInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    form?: Nullable<FormUpdateOneWithoutGradesInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    maxInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    maxValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    minInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    minValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    questions?: Nullable<QuestionUpdateManyWithoutGradeInput>;
    recommendations?: Nullable<RecommendationUpdateManyWithoutGradeInput>;
    responses?: Nullable<ResponseUpdateManyWithoutGradeInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class GradeUpdateWithoutFormInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutGradeInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    maxInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    maxValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    minInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    minValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    questions?: Nullable<QuestionUpdateManyWithoutGradeInput>;
    recommendations?: Nullable<RecommendationUpdateManyWithoutGradeInput>;
    responses?: Nullable<ResponseUpdateManyWithoutGradeInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class GradeUpdateWithoutQuestionsInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutGradeInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    form?: Nullable<FormUpdateOneWithoutGradesInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    maxInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    maxValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    minInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    minValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    recommendations?: Nullable<RecommendationUpdateManyWithoutGradeInput>;
    responses?: Nullable<ResponseUpdateManyWithoutGradeInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class GradeUpdateWithoutRecommendationsInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutGradeInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    form?: Nullable<FormUpdateOneWithoutGradesInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    maxInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    maxValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    minInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    minValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    questions?: Nullable<QuestionUpdateManyWithoutGradeInput>;
    responses?: Nullable<ResponseUpdateManyWithoutGradeInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class GradeUpdateWithoutResponsesInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutGradeInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<StringFieldUpdateOperationsInput>;
    form?: Nullable<FormUpdateOneWithoutGradesInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    maxInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    maxValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    minInclusive?: Nullable<BoolFieldUpdateOperationsInput>;
    minValue?: Nullable<NullableIntFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    questions?: Nullable<QuestionUpdateManyWithoutGradeInput>;
    recommendations?: Nullable<RecommendationUpdateManyWithoutGradeInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class GradeUpsertWithWhereUniqueWithoutFormInput {
    create: GradeUncheckedCreateWithoutFormInput;
    update: GradeUncheckedUpdateWithoutFormInput;
    where: GradeWhereUniqueInput;
}

export class GradeUpsertWithoutAttachmentsInput {
    create: GradeUncheckedCreateWithoutAttachmentsInput;
    update: GradeUncheckedUpdateWithoutAttachmentsInput;
}

export class GradeUpsertWithoutQuestionsInput {
    create: GradeUncheckedCreateWithoutQuestionsInput;
    update: GradeUncheckedUpdateWithoutQuestionsInput;
}

export class GradeUpsertWithoutRecommendationsInput {
    create: GradeUncheckedCreateWithoutRecommendationsInput;
    update: GradeUncheckedUpdateWithoutRecommendationsInput;
}

export class GradeUpsertWithoutResponsesInput {
    create: GradeUncheckedCreateWithoutResponsesInput;
    update: GradeUncheckedUpdateWithoutResponsesInput;
}

export class GradeWhereInput {
    AND?: Nullable<GradeWhereInput[]>;
    NOT?: Nullable<GradeWhereInput[]>;
    OR?: Nullable<GradeWhereInput[]>;
    attachments?: Nullable<AttachmentListRelationFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    description?: Nullable<StringFilter>;
    form?: Nullable<FormWhereInput>;
    formId?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    maxInclusive?: Nullable<BoolFilter>;
    maxValue?: Nullable<IntNullableFilter>;
    minInclusive?: Nullable<BoolFilter>;
    minValue?: Nullable<IntNullableFilter>;
    name?: Nullable<StringFilter>;
    questions?: Nullable<QuestionListRelationFilter>;
    recommendations?: Nullable<RecommendationListRelationFilter>;
    responses?: Nullable<ResponseListRelationFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class GradeWhereUniqueInput {
    id?: Nullable<string>;
}

export class HelpCreateInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    steps?: Nullable<HelpStepCreateNestedManyWithoutHelpInput>;
    topic: string;
    updatedAt?: Nullable<DateTime>;
}

export class HelpCreateManyInput {
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
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    topic: string;
    updatedAt?: Nullable<DateTime>;
}

export class HelpOrderByInput {
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
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    steps?: Nullable<HelpStepUncheckedCreateNestedManyWithoutHelpInput>;
    topic: string;
    updatedAt?: Nullable<DateTime>;
}

export class HelpUncheckedCreateWithoutStepsInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    topic: string;
    updatedAt?: Nullable<DateTime>;
}

export class HelpUncheckedUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    steps?: Nullable<HelpStepUncheckedUpdateManyWithoutHelpInput>;
    topic?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpUncheckedUpdateManyInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    topic?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpUncheckedUpdateWithoutStepsInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    topic?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    steps?: Nullable<HelpStepUpdateManyWithoutHelpInput>;
    topic?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpUpdateManyMutationInput {
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

export class IntNullableFilter {
    equals?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    in?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    not?: Nullable<NestedIntNullableFilter>;
    notIn?: Nullable<number[]>;
}

export class IntNullableWithAggregatesFilter {
    _avg?: Nullable<NestedFloatNullableFilter>;
    _count?: Nullable<NestedIntNullableFilter>;
    _max?: Nullable<NestedIntNullableFilter>;
    _min?: Nullable<NestedIntNullableFilter>;
    _sum?: Nullable<NestedIntNullableFilter>;
    avg?: Nullable<NestedFloatNullableFilter>;
    count?: Nullable<NestedIntNullableFilter>;
    equals?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    in?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    max?: Nullable<NestedIntNullableFilter>;
    min?: Nullable<NestedIntNullableFilter>;
    not?: Nullable<NestedIntNullableWithAggregatesFilter>;
    notIn?: Nullable<number[]>;
    sum?: Nullable<NestedIntNullableFilter>;
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

export class NestedBoolNullableFilter {
    equals?: Nullable<boolean>;
    not?: Nullable<NestedBoolNullableFilter>;
}

export class NestedBoolNullableWithAggregatesFilter {
    _count?: Nullable<NestedIntNullableFilter>;
    _max?: Nullable<NestedBoolNullableFilter>;
    _min?: Nullable<NestedBoolNullableFilter>;
    count?: Nullable<NestedIntNullableFilter>;
    equals?: Nullable<boolean>;
    max?: Nullable<NestedBoolNullableFilter>;
    min?: Nullable<NestedBoolNullableFilter>;
    not?: Nullable<NestedBoolNullableWithAggregatesFilter>;
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

export class NestedEnumForumTypeFilter {
    equals?: Nullable<ForumType>;
    in?: Nullable<ForumType[]>;
    not?: Nullable<NestedEnumForumTypeFilter>;
    notIn?: Nullable<ForumType[]>;
}

export class NestedEnumForumTypeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumForumTypeFilter>;
    _min?: Nullable<NestedEnumForumTypeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<ForumType>;
    in?: Nullable<ForumType[]>;
    max?: Nullable<NestedEnumForumTypeFilter>;
    min?: Nullable<NestedEnumForumTypeFilter>;
    not?: Nullable<NestedEnumForumTypeWithAggregatesFilter>;
    notIn?: Nullable<ForumType[]>;
}

export class NestedEnumQuestionTypeFilter {
    equals?: Nullable<QuestionType>;
    in?: Nullable<QuestionType[]>;
    not?: Nullable<NestedEnumQuestionTypeFilter>;
    notIn?: Nullable<QuestionType[]>;
}

export class NestedEnumQuestionTypeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumQuestionTypeFilter>;
    _min?: Nullable<NestedEnumQuestionTypeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<QuestionType>;
    in?: Nullable<QuestionType[]>;
    max?: Nullable<NestedEnumQuestionTypeFilter>;
    min?: Nullable<NestedEnumQuestionTypeFilter>;
    not?: Nullable<NestedEnumQuestionTypeWithAggregatesFilter>;
    notIn?: Nullable<QuestionType[]>;
}

export class NestedEnumRecommendationTypeFilter {
    equals?: Nullable<RecommendationType>;
    in?: Nullable<RecommendationType[]>;
    not?: Nullable<NestedEnumRecommendationTypeFilter>;
    notIn?: Nullable<RecommendationType[]>;
}

export class NestedEnumRecommendationTypeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumRecommendationTypeFilter>;
    _min?: Nullable<NestedEnumRecommendationTypeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<RecommendationType>;
    in?: Nullable<RecommendationType[]>;
    max?: Nullable<NestedEnumRecommendationTypeFilter>;
    min?: Nullable<NestedEnumRecommendationTypeFilter>;
    not?: Nullable<NestedEnumRecommendationTypeWithAggregatesFilter>;
    notIn?: Nullable<RecommendationType[]>;
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

export class NestedFloatNullableFilter {
    equals?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    in?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    not?: Nullable<NestedFloatNullableFilter>;
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

export class NestedIntNullableWithAggregatesFilter {
    _avg?: Nullable<NestedFloatNullableFilter>;
    _count?: Nullable<NestedIntNullableFilter>;
    _max?: Nullable<NestedIntNullableFilter>;
    _min?: Nullable<NestedIntNullableFilter>;
    _sum?: Nullable<NestedIntNullableFilter>;
    avg?: Nullable<NestedFloatNullableFilter>;
    count?: Nullable<NestedIntNullableFilter>;
    equals?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    in?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    max?: Nullable<NestedIntNullableFilter>;
    min?: Nullable<NestedIntNullableFilter>;
    not?: Nullable<NestedIntNullableWithAggregatesFilter>;
    notIn?: Nullable<number[]>;
    sum?: Nullable<NestedIntNullableFilter>;
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

export class NullableBoolFieldUpdateOperationsInput {
    set?: Nullable<boolean>;
}

export class NullableIntFieldUpdateOperationsInput {
    decrement?: Nullable<number>;
    divide?: Nullable<number>;
    increment?: Nullable<number>;
    multiply?: Nullable<number>;
    set?: Nullable<number>;
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

export class QuestionCreateInput {
    answers?: Nullable<AnswerCreateNestedManyWithoutQuestionInput>;
    attachments?: Nullable<AttachmentCreateNestedManyWithoutQuestionInput>;
    createdAt?: Nullable<DateTime>;
    grade: GradeCreateNestedOneWithoutQuestionsInput;
    id?: Nullable<string>;
    instruction?: Nullable<string>;
    question: string;
    questionNumber: number;
    questionType?: Nullable<QuestionType>;
    updatedAt?: Nullable<DateTime>;
    weight?: Nullable<number>;
}

export class QuestionCreateManyGradeInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    instruction?: Nullable<string>;
    question: string;
    questionNumber: number;
    questionType?: Nullable<QuestionType>;
    updatedAt?: Nullable<DateTime>;
    weight?: Nullable<number>;
}

export class QuestionCreateManyGradeInputEnvelope {
    data: QuestionCreateManyGradeInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class QuestionCreateManyInput {
    createdAt?: Nullable<DateTime>;
    gradeId: string;
    id?: Nullable<string>;
    instruction?: Nullable<string>;
    question: string;
    questionNumber: number;
    questionType?: Nullable<QuestionType>;
    updatedAt?: Nullable<DateTime>;
    weight?: Nullable<number>;
}

export class QuestionCreateNestedManyWithoutGradeInput {
    connect?: Nullable<QuestionWhereUniqueInput[]>;
    connectOrCreate?: Nullable<QuestionCreateOrConnectWithoutGradeInput[]>;
    create?: Nullable<QuestionCreateWithoutGradeInput[]>;
    createMany?: Nullable<QuestionCreateManyGradeInputEnvelope>;
}

export class QuestionCreateNestedOneWithoutAnswersInput {
    connect?: Nullable<QuestionWhereUniqueInput>;
    connectOrCreate?: Nullable<QuestionCreateOrConnectWithoutAnswersInput>;
    create?: Nullable<QuestionUncheckedCreateWithoutAnswersInput>;
}

export class QuestionCreateNestedOneWithoutAttachmentsInput {
    connect?: Nullable<QuestionWhereUniqueInput>;
    connectOrCreate?: Nullable<QuestionCreateOrConnectWithoutAttachmentsInput>;
    create?: Nullable<QuestionUncheckedCreateWithoutAttachmentsInput>;
}

export class QuestionCreateOrConnectWithoutAnswersInput {
    create: QuestionUncheckedCreateWithoutAnswersInput;
    where: QuestionWhereUniqueInput;
}

export class QuestionCreateOrConnectWithoutAttachmentsInput {
    create: QuestionUncheckedCreateWithoutAttachmentsInput;
    where: QuestionWhereUniqueInput;
}

export class QuestionCreateOrConnectWithoutGradeInput {
    create: QuestionUncheckedCreateWithoutGradeInput;
    where: QuestionWhereUniqueInput;
}

export class QuestionCreateWithoutAnswersInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutQuestionInput>;
    createdAt?: Nullable<DateTime>;
    grade: GradeCreateNestedOneWithoutQuestionsInput;
    id?: Nullable<string>;
    instruction?: Nullable<string>;
    question: string;
    questionNumber: number;
    questionType?: Nullable<QuestionType>;
    updatedAt?: Nullable<DateTime>;
    weight?: Nullable<number>;
}

export class QuestionCreateWithoutAttachmentsInput {
    answers?: Nullable<AnswerCreateNestedManyWithoutQuestionInput>;
    createdAt?: Nullable<DateTime>;
    grade: GradeCreateNestedOneWithoutQuestionsInput;
    id?: Nullable<string>;
    instruction?: Nullable<string>;
    question: string;
    questionNumber: number;
    questionType?: Nullable<QuestionType>;
    updatedAt?: Nullable<DateTime>;
    weight?: Nullable<number>;
}

export class QuestionCreateWithoutGradeInput {
    answers?: Nullable<AnswerCreateNestedManyWithoutQuestionInput>;
    attachments?: Nullable<AttachmentCreateNestedManyWithoutQuestionInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    instruction?: Nullable<string>;
    question: string;
    questionNumber: number;
    questionType?: Nullable<QuestionType>;
    updatedAt?: Nullable<DateTime>;
    weight?: Nullable<number>;
}

export class QuestionListRelationFilter {
    every?: Nullable<QuestionWhereInput>;
    none?: Nullable<QuestionWhereInput>;
    some?: Nullable<QuestionWhereInput>;
}

export class QuestionOrderByInput {
    createdAt?: Nullable<SortOrder>;
    gradeId?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    instruction?: Nullable<SortOrder>;
    question?: Nullable<SortOrder>;
    questionNumber?: Nullable<SortOrder>;
    questionType?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    weight?: Nullable<SortOrder>;
}

export class QuestionRelationFilter {
    is?: Nullable<QuestionWhereInput>;
    isNot?: Nullable<QuestionWhereInput>;
}

export class QuestionScalarWhereInput {
    AND?: Nullable<QuestionScalarWhereInput[]>;
    NOT?: Nullable<QuestionScalarWhereInput[]>;
    OR?: Nullable<QuestionScalarWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    gradeId?: Nullable<StringFilter>;
    id?: Nullable<StringFilter>;
    instruction?: Nullable<StringNullableFilter>;
    question?: Nullable<StringFilter>;
    questionNumber?: Nullable<IntFilter>;
    questionType?: Nullable<EnumQuestionTypeFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
    weight?: Nullable<FloatFilter>;
}

export class QuestionScalarWhereWithAggregatesInput {
    AND?: Nullable<QuestionScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<QuestionScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<QuestionScalarWhereWithAggregatesInput[]>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    gradeId?: Nullable<StringWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    instruction?: Nullable<StringNullableWithAggregatesFilter>;
    question?: Nullable<StringWithAggregatesFilter>;
    questionNumber?: Nullable<IntWithAggregatesFilter>;
    questionType?: Nullable<EnumQuestionTypeWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
    weight?: Nullable<FloatWithAggregatesFilter>;
}

export class QuestionUncheckedCreateInput {
    answers?: Nullable<AnswerUncheckedCreateNestedManyWithoutQuestionInput>;
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutQuestionInput>;
    createdAt?: Nullable<DateTime>;
    gradeId: string;
    id?: Nullable<string>;
    instruction?: Nullable<string>;
    question: string;
    questionNumber: number;
    questionType?: Nullable<QuestionType>;
    updatedAt?: Nullable<DateTime>;
    weight?: Nullable<number>;
}

export class QuestionUncheckedCreateNestedManyWithoutGradeInput {
    connect?: Nullable<QuestionWhereUniqueInput[]>;
    connectOrCreate?: Nullable<QuestionCreateOrConnectWithoutGradeInput[]>;
    create?: Nullable<QuestionCreateWithoutGradeInput[]>;
    createMany?: Nullable<QuestionCreateManyGradeInputEnvelope>;
}

export class QuestionUncheckedCreateWithoutAnswersInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutQuestionInput>;
    createdAt?: Nullable<DateTime>;
    gradeId: string;
    id?: Nullable<string>;
    instruction?: Nullable<string>;
    question: string;
    questionNumber: number;
    questionType?: Nullable<QuestionType>;
    updatedAt?: Nullable<DateTime>;
    weight?: Nullable<number>;
}

export class QuestionUncheckedCreateWithoutAttachmentsInput {
    answers?: Nullable<AnswerUncheckedCreateNestedManyWithoutQuestionInput>;
    createdAt?: Nullable<DateTime>;
    gradeId: string;
    id?: Nullable<string>;
    instruction?: Nullable<string>;
    question: string;
    questionNumber: number;
    questionType?: Nullable<QuestionType>;
    updatedAt?: Nullable<DateTime>;
    weight?: Nullable<number>;
}

export class QuestionUncheckedCreateWithoutGradeInput {
    answers?: Nullable<AnswerUncheckedCreateNestedManyWithoutQuestionInput>;
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutQuestionInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    instruction?: Nullable<string>;
    question: string;
    questionNumber: number;
    questionType?: Nullable<QuestionType>;
    updatedAt?: Nullable<DateTime>;
    weight?: Nullable<number>;
}

export class QuestionUncheckedUpdateInput {
    answers?: Nullable<AnswerUncheckedUpdateManyWithoutQuestionInput>;
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutQuestionInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    gradeId?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    instruction?: Nullable<NullableStringFieldUpdateOperationsInput>;
    question?: Nullable<StringFieldUpdateOperationsInput>;
    questionNumber?: Nullable<IntFieldUpdateOperationsInput>;
    questionType?: Nullable<EnumQuestionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    weight?: Nullable<FloatFieldUpdateOperationsInput>;
}

export class QuestionUncheckedUpdateManyInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    gradeId?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    instruction?: Nullable<NullableStringFieldUpdateOperationsInput>;
    question?: Nullable<StringFieldUpdateOperationsInput>;
    questionNumber?: Nullable<IntFieldUpdateOperationsInput>;
    questionType?: Nullable<EnumQuestionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    weight?: Nullable<FloatFieldUpdateOperationsInput>;
}

export class QuestionUncheckedUpdateManyWithoutGradeInput {
    connect?: Nullable<QuestionWhereUniqueInput[]>;
    connectOrCreate?: Nullable<QuestionCreateOrConnectWithoutGradeInput[]>;
    create?: Nullable<QuestionCreateWithoutGradeInput[]>;
    createMany?: Nullable<QuestionCreateManyGradeInputEnvelope>;
    delete?: Nullable<QuestionWhereUniqueInput[]>;
    deleteMany?: Nullable<QuestionScalarWhereInput[]>;
    disconnect?: Nullable<QuestionWhereUniqueInput[]>;
    set?: Nullable<QuestionWhereUniqueInput[]>;
    update?: Nullable<QuestionUpdateWithWhereUniqueWithoutGradeInput[]>;
    updateMany?: Nullable<QuestionUpdateManyWithWhereWithoutGradeInput[]>;
    upsert?: Nullable<QuestionUpsertWithWhereUniqueWithoutGradeInput[]>;
}

export class QuestionUncheckedUpdateManyWithoutQuestionsInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    instruction?: Nullable<NullableStringFieldUpdateOperationsInput>;
    question?: Nullable<StringFieldUpdateOperationsInput>;
    questionNumber?: Nullable<IntFieldUpdateOperationsInput>;
    questionType?: Nullable<EnumQuestionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    weight?: Nullable<FloatFieldUpdateOperationsInput>;
}

export class QuestionUncheckedUpdateWithoutAnswersInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutQuestionInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    gradeId?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    instruction?: Nullable<NullableStringFieldUpdateOperationsInput>;
    question?: Nullable<StringFieldUpdateOperationsInput>;
    questionNumber?: Nullable<IntFieldUpdateOperationsInput>;
    questionType?: Nullable<EnumQuestionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    weight?: Nullable<FloatFieldUpdateOperationsInput>;
}

export class QuestionUncheckedUpdateWithoutAttachmentsInput {
    answers?: Nullable<AnswerUncheckedUpdateManyWithoutQuestionInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    gradeId?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    instruction?: Nullable<NullableStringFieldUpdateOperationsInput>;
    question?: Nullable<StringFieldUpdateOperationsInput>;
    questionNumber?: Nullable<IntFieldUpdateOperationsInput>;
    questionType?: Nullable<EnumQuestionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    weight?: Nullable<FloatFieldUpdateOperationsInput>;
}

export class QuestionUncheckedUpdateWithoutGradeInput {
    answers?: Nullable<AnswerUncheckedUpdateManyWithoutQuestionInput>;
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutQuestionInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    instruction?: Nullable<NullableStringFieldUpdateOperationsInput>;
    question?: Nullable<StringFieldUpdateOperationsInput>;
    questionNumber?: Nullable<IntFieldUpdateOperationsInput>;
    questionType?: Nullable<EnumQuestionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    weight?: Nullable<FloatFieldUpdateOperationsInput>;
}

export class QuestionUpdateInput {
    answers?: Nullable<AnswerUpdateManyWithoutQuestionInput>;
    attachments?: Nullable<AttachmentUpdateManyWithoutQuestionInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    grade?: Nullable<GradeUpdateOneRequiredWithoutQuestionsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    instruction?: Nullable<NullableStringFieldUpdateOperationsInput>;
    question?: Nullable<StringFieldUpdateOperationsInput>;
    questionNumber?: Nullable<IntFieldUpdateOperationsInput>;
    questionType?: Nullable<EnumQuestionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    weight?: Nullable<FloatFieldUpdateOperationsInput>;
}

export class QuestionUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    instruction?: Nullable<NullableStringFieldUpdateOperationsInput>;
    question?: Nullable<StringFieldUpdateOperationsInput>;
    questionNumber?: Nullable<IntFieldUpdateOperationsInput>;
    questionType?: Nullable<EnumQuestionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    weight?: Nullable<FloatFieldUpdateOperationsInput>;
}

export class QuestionUpdateManyWithWhereWithoutGradeInput {
    data: QuestionUncheckedUpdateManyWithoutQuestionsInput;
    where: QuestionScalarWhereInput;
}

export class QuestionUpdateManyWithoutGradeInput {
    connect?: Nullable<QuestionWhereUniqueInput[]>;
    connectOrCreate?: Nullable<QuestionCreateOrConnectWithoutGradeInput[]>;
    create?: Nullable<QuestionCreateWithoutGradeInput[]>;
    createMany?: Nullable<QuestionCreateManyGradeInputEnvelope>;
    delete?: Nullable<QuestionWhereUniqueInput[]>;
    deleteMany?: Nullable<QuestionScalarWhereInput[]>;
    disconnect?: Nullable<QuestionWhereUniqueInput[]>;
    set?: Nullable<QuestionWhereUniqueInput[]>;
    update?: Nullable<QuestionUpdateWithWhereUniqueWithoutGradeInput[]>;
    updateMany?: Nullable<QuestionUpdateManyWithWhereWithoutGradeInput[]>;
    upsert?: Nullable<QuestionUpsertWithWhereUniqueWithoutGradeInput[]>;
}

export class QuestionUpdateOneRequiredWithoutAnswersInput {
    connect?: Nullable<QuestionWhereUniqueInput>;
    connectOrCreate?: Nullable<QuestionCreateOrConnectWithoutAnswersInput>;
    create?: Nullable<QuestionUncheckedCreateWithoutAnswersInput>;
    update?: Nullable<QuestionUncheckedUpdateWithoutAnswersInput>;
    upsert?: Nullable<QuestionUpsertWithoutAnswersInput>;
}

export class QuestionUpdateOneWithoutAttachmentsInput {
    connect?: Nullable<QuestionWhereUniqueInput>;
    connectOrCreate?: Nullable<QuestionCreateOrConnectWithoutAttachmentsInput>;
    create?: Nullable<QuestionUncheckedCreateWithoutAttachmentsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<QuestionUncheckedUpdateWithoutAttachmentsInput>;
    upsert?: Nullable<QuestionUpsertWithoutAttachmentsInput>;
}

export class QuestionUpdateWithWhereUniqueWithoutGradeInput {
    data: QuestionUncheckedUpdateWithoutGradeInput;
    where: QuestionWhereUniqueInput;
}

export class QuestionUpdateWithoutAnswersInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutQuestionInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    grade?: Nullable<GradeUpdateOneRequiredWithoutQuestionsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    instruction?: Nullable<NullableStringFieldUpdateOperationsInput>;
    question?: Nullable<StringFieldUpdateOperationsInput>;
    questionNumber?: Nullable<IntFieldUpdateOperationsInput>;
    questionType?: Nullable<EnumQuestionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    weight?: Nullable<FloatFieldUpdateOperationsInput>;
}

export class QuestionUpdateWithoutAttachmentsInput {
    answers?: Nullable<AnswerUpdateManyWithoutQuestionInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    grade?: Nullable<GradeUpdateOneRequiredWithoutQuestionsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    instruction?: Nullable<NullableStringFieldUpdateOperationsInput>;
    question?: Nullable<StringFieldUpdateOperationsInput>;
    questionNumber?: Nullable<IntFieldUpdateOperationsInput>;
    questionType?: Nullable<EnumQuestionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    weight?: Nullable<FloatFieldUpdateOperationsInput>;
}

export class QuestionUpdateWithoutGradeInput {
    answers?: Nullable<AnswerUpdateManyWithoutQuestionInput>;
    attachments?: Nullable<AttachmentUpdateManyWithoutQuestionInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    instruction?: Nullable<NullableStringFieldUpdateOperationsInput>;
    question?: Nullable<StringFieldUpdateOperationsInput>;
    questionNumber?: Nullable<IntFieldUpdateOperationsInput>;
    questionType?: Nullable<EnumQuestionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    weight?: Nullable<FloatFieldUpdateOperationsInput>;
}

export class QuestionUpsertWithWhereUniqueWithoutGradeInput {
    create: QuestionUncheckedCreateWithoutGradeInput;
    update: QuestionUncheckedUpdateWithoutGradeInput;
    where: QuestionWhereUniqueInput;
}

export class QuestionUpsertWithoutAnswersInput {
    create: QuestionUncheckedCreateWithoutAnswersInput;
    update: QuestionUncheckedUpdateWithoutAnswersInput;
}

export class QuestionUpsertWithoutAttachmentsInput {
    create: QuestionUncheckedCreateWithoutAttachmentsInput;
    update: QuestionUncheckedUpdateWithoutAttachmentsInput;
}

export class QuestionWhereInput {
    AND?: Nullable<QuestionWhereInput[]>;
    NOT?: Nullable<QuestionWhereInput[]>;
    OR?: Nullable<QuestionWhereInput[]>;
    answers?: Nullable<AnswerListRelationFilter>;
    attachments?: Nullable<AttachmentListRelationFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    grade?: Nullable<GradeWhereInput>;
    gradeId?: Nullable<StringFilter>;
    id?: Nullable<StringFilter>;
    instruction?: Nullable<StringNullableFilter>;
    question?: Nullable<StringFilter>;
    questionNumber?: Nullable<IntFilter>;
    questionType?: Nullable<EnumQuestionTypeFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
    weight?: Nullable<FloatFilter>;
}

export class QuestionWhereUniqueInput {
    id?: Nullable<string>;
}

export class RecommendationCreateInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutRecommendationInput>;
    content: string;
    createdAt?: Nullable<DateTime>;
    grade?: Nullable<GradeCreateNestedOneWithoutRecommendationsInput>;
    id?: Nullable<string>;
    type?: Nullable<RecommendationType>;
    updatedAt?: Nullable<DateTime>;
}

export class RecommendationCreateManyGradeInput {
    content: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    type?: Nullable<RecommendationType>;
    updatedAt?: Nullable<DateTime>;
}

export class RecommendationCreateManyGradeInputEnvelope {
    data: RecommendationCreateManyGradeInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class RecommendationCreateManyInput {
    content: string;
    createdAt?: Nullable<DateTime>;
    gradeId?: Nullable<string>;
    id?: Nullable<string>;
    type?: Nullable<RecommendationType>;
    updatedAt?: Nullable<DateTime>;
}

export class RecommendationCreateNestedManyWithoutGradeInput {
    connect?: Nullable<RecommendationWhereUniqueInput[]>;
    connectOrCreate?: Nullable<RecommendationCreateOrConnectWithoutGradeInput[]>;
    create?: Nullable<RecommendationCreateWithoutGradeInput[]>;
    createMany?: Nullable<RecommendationCreateManyGradeInputEnvelope>;
}

export class RecommendationCreateNestedOneWithoutAttachmentsInput {
    connect?: Nullable<RecommendationWhereUniqueInput>;
    connectOrCreate?: Nullable<RecommendationCreateOrConnectWithoutAttachmentsInput>;
    create?: Nullable<RecommendationUncheckedCreateWithoutAttachmentsInput>;
}

export class RecommendationCreateOrConnectWithoutAttachmentsInput {
    create: RecommendationUncheckedCreateWithoutAttachmentsInput;
    where: RecommendationWhereUniqueInput;
}

export class RecommendationCreateOrConnectWithoutGradeInput {
    create: RecommendationUncheckedCreateWithoutGradeInput;
    where: RecommendationWhereUniqueInput;
}

export class RecommendationCreateWithoutAttachmentsInput {
    content: string;
    createdAt?: Nullable<DateTime>;
    grade?: Nullable<GradeCreateNestedOneWithoutRecommendationsInput>;
    id?: Nullable<string>;
    type?: Nullable<RecommendationType>;
    updatedAt?: Nullable<DateTime>;
}

export class RecommendationCreateWithoutGradeInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutRecommendationInput>;
    content: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    type?: Nullable<RecommendationType>;
    updatedAt?: Nullable<DateTime>;
}

export class RecommendationListRelationFilter {
    every?: Nullable<RecommendationWhereInput>;
    none?: Nullable<RecommendationWhereInput>;
    some?: Nullable<RecommendationWhereInput>;
}

export class RecommendationOrderByInput {
    content?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    gradeId?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    type?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class RecommendationRelationFilter {
    is?: Nullable<RecommendationWhereInput>;
    isNot?: Nullable<RecommendationWhereInput>;
}

export class RecommendationScalarWhereInput {
    AND?: Nullable<RecommendationScalarWhereInput[]>;
    NOT?: Nullable<RecommendationScalarWhereInput[]>;
    OR?: Nullable<RecommendationScalarWhereInput[]>;
    content?: Nullable<StringFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    gradeId?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    type?: Nullable<EnumRecommendationTypeFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class RecommendationScalarWhereWithAggregatesInput {
    AND?: Nullable<RecommendationScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<RecommendationScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<RecommendationScalarWhereWithAggregatesInput[]>;
    content?: Nullable<StringWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    gradeId?: Nullable<StringNullableWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    type?: Nullable<EnumRecommendationTypeWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class RecommendationUncheckedCreateInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutRecommendationInput>;
    content: string;
    createdAt?: Nullable<DateTime>;
    gradeId?: Nullable<string>;
    id?: Nullable<string>;
    type?: Nullable<RecommendationType>;
    updatedAt?: Nullable<DateTime>;
}

export class RecommendationUncheckedCreateNestedManyWithoutGradeInput {
    connect?: Nullable<RecommendationWhereUniqueInput[]>;
    connectOrCreate?: Nullable<RecommendationCreateOrConnectWithoutGradeInput[]>;
    create?: Nullable<RecommendationCreateWithoutGradeInput[]>;
    createMany?: Nullable<RecommendationCreateManyGradeInputEnvelope>;
}

export class RecommendationUncheckedCreateWithoutAttachmentsInput {
    content: string;
    createdAt?: Nullable<DateTime>;
    gradeId?: Nullable<string>;
    id?: Nullable<string>;
    type?: Nullable<RecommendationType>;
    updatedAt?: Nullable<DateTime>;
}

export class RecommendationUncheckedCreateWithoutGradeInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutRecommendationInput>;
    content: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    type?: Nullable<RecommendationType>;
    updatedAt?: Nullable<DateTime>;
}

export class RecommendationUncheckedUpdateInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutRecommendationInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    gradeId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    type?: Nullable<EnumRecommendationTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class RecommendationUncheckedUpdateManyInput {
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    gradeId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    type?: Nullable<EnumRecommendationTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class RecommendationUncheckedUpdateManyWithoutGradeInput {
    connect?: Nullable<RecommendationWhereUniqueInput[]>;
    connectOrCreate?: Nullable<RecommendationCreateOrConnectWithoutGradeInput[]>;
    create?: Nullable<RecommendationCreateWithoutGradeInput[]>;
    createMany?: Nullable<RecommendationCreateManyGradeInputEnvelope>;
    delete?: Nullable<RecommendationWhereUniqueInput[]>;
    deleteMany?: Nullable<RecommendationScalarWhereInput[]>;
    disconnect?: Nullable<RecommendationWhereUniqueInput[]>;
    set?: Nullable<RecommendationWhereUniqueInput[]>;
    update?: Nullable<RecommendationUpdateWithWhereUniqueWithoutGradeInput[]>;
    updateMany?: Nullable<RecommendationUpdateManyWithWhereWithoutGradeInput[]>;
    upsert?: Nullable<RecommendationUpsertWithWhereUniqueWithoutGradeInput[]>;
}

export class RecommendationUncheckedUpdateManyWithoutRecommendationsInput {
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    type?: Nullable<EnumRecommendationTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class RecommendationUncheckedUpdateWithoutAttachmentsInput {
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    gradeId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    type?: Nullable<EnumRecommendationTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class RecommendationUncheckedUpdateWithoutGradeInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutRecommendationInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    type?: Nullable<EnumRecommendationTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class RecommendationUpdateInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutRecommendationInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    grade?: Nullable<GradeUpdateOneWithoutRecommendationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    type?: Nullable<EnumRecommendationTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class RecommendationUpdateManyMutationInput {
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    type?: Nullable<EnumRecommendationTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class RecommendationUpdateManyWithWhereWithoutGradeInput {
    data: RecommendationUncheckedUpdateManyWithoutRecommendationsInput;
    where: RecommendationScalarWhereInput;
}

export class RecommendationUpdateManyWithoutGradeInput {
    connect?: Nullable<RecommendationWhereUniqueInput[]>;
    connectOrCreate?: Nullable<RecommendationCreateOrConnectWithoutGradeInput[]>;
    create?: Nullable<RecommendationCreateWithoutGradeInput[]>;
    createMany?: Nullable<RecommendationCreateManyGradeInputEnvelope>;
    delete?: Nullable<RecommendationWhereUniqueInput[]>;
    deleteMany?: Nullable<RecommendationScalarWhereInput[]>;
    disconnect?: Nullable<RecommendationWhereUniqueInput[]>;
    set?: Nullable<RecommendationWhereUniqueInput[]>;
    update?: Nullable<RecommendationUpdateWithWhereUniqueWithoutGradeInput[]>;
    updateMany?: Nullable<RecommendationUpdateManyWithWhereWithoutGradeInput[]>;
    upsert?: Nullable<RecommendationUpsertWithWhereUniqueWithoutGradeInput[]>;
}

export class RecommendationUpdateOneWithoutAttachmentsInput {
    connect?: Nullable<RecommendationWhereUniqueInput>;
    connectOrCreate?: Nullable<RecommendationCreateOrConnectWithoutAttachmentsInput>;
    create?: Nullable<RecommendationUncheckedCreateWithoutAttachmentsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<RecommendationUncheckedUpdateWithoutAttachmentsInput>;
    upsert?: Nullable<RecommendationUpsertWithoutAttachmentsInput>;
}

export class RecommendationUpdateWithWhereUniqueWithoutGradeInput {
    data: RecommendationUncheckedUpdateWithoutGradeInput;
    where: RecommendationWhereUniqueInput;
}

export class RecommendationUpdateWithoutAttachmentsInput {
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    grade?: Nullable<GradeUpdateOneWithoutRecommendationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    type?: Nullable<EnumRecommendationTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class RecommendationUpdateWithoutGradeInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutRecommendationInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    type?: Nullable<EnumRecommendationTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class RecommendationUpsertWithWhereUniqueWithoutGradeInput {
    create: RecommendationUncheckedCreateWithoutGradeInput;
    update: RecommendationUncheckedUpdateWithoutGradeInput;
    where: RecommendationWhereUniqueInput;
}

export class RecommendationUpsertWithoutAttachmentsInput {
    create: RecommendationUncheckedCreateWithoutAttachmentsInput;
    update: RecommendationUncheckedUpdateWithoutAttachmentsInput;
}

export class RecommendationWhereInput {
    AND?: Nullable<RecommendationWhereInput[]>;
    NOT?: Nullable<RecommendationWhereInput[]>;
    OR?: Nullable<RecommendationWhereInput[]>;
    attachments?: Nullable<AttachmentListRelationFilter>;
    content?: Nullable<StringFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    grade?: Nullable<GradeWhereInput>;
    gradeId?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    type?: Nullable<EnumRecommendationTypeFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class RecommendationWhereUniqueInput {
    id?: Nullable<string>;
}

export class RegisterDeviceInput {
    fcm_id?: Nullable<string>;
    id: string;
    type?: Nullable<string>;
    userId?: Nullable<string>;
}

export class ResponseCreateInput {
    answers?: Nullable<AnswerCreateNestedManyWithoutResponseInput>;
    attachments?: Nullable<AttachmentCreateNestedManyWithoutResponseInput>;
    author?: Nullable<UserCreateNestedOneWithoutResponsesInput>;
    createdAt?: Nullable<DateTime>;
    form: FormCreateNestedOneWithoutResponsesInput;
    grade: GradeCreateNestedOneWithoutResponsesInput;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ResponseCreateManyAuthorInput {
    createdAt?: Nullable<DateTime>;
    formId: string;
    gradeId: string;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ResponseCreateManyAuthorInputEnvelope {
    data: ResponseCreateManyAuthorInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class ResponseCreateManyFormInput {
    authorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    gradeId: string;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ResponseCreateManyFormInputEnvelope {
    data: ResponseCreateManyFormInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class ResponseCreateManyGradeInput {
    authorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    formId: string;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ResponseCreateManyGradeInputEnvelope {
    data: ResponseCreateManyGradeInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class ResponseCreateManyInput {
    authorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    formId: string;
    gradeId: string;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ResponseCreateNestedManyWithoutAuthorInput {
    connect?: Nullable<ResponseWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ResponseCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<ResponseCreateWithoutAuthorInput[]>;
    createMany?: Nullable<ResponseCreateManyAuthorInputEnvelope>;
}

export class ResponseCreateNestedManyWithoutFormInput {
    connect?: Nullable<ResponseWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ResponseCreateOrConnectWithoutFormInput[]>;
    create?: Nullable<ResponseCreateWithoutFormInput[]>;
    createMany?: Nullable<ResponseCreateManyFormInputEnvelope>;
}

export class ResponseCreateNestedManyWithoutGradeInput {
    connect?: Nullable<ResponseWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ResponseCreateOrConnectWithoutGradeInput[]>;
    create?: Nullable<ResponseCreateWithoutGradeInput[]>;
    createMany?: Nullable<ResponseCreateManyGradeInputEnvelope>;
}

export class ResponseCreateNestedOneWithoutAnswersInput {
    connect?: Nullable<ResponseWhereUniqueInput>;
    connectOrCreate?: Nullable<ResponseCreateOrConnectWithoutAnswersInput>;
    create?: Nullable<ResponseUncheckedCreateWithoutAnswersInput>;
}

export class ResponseCreateNestedOneWithoutAttachmentsInput {
    connect?: Nullable<ResponseWhereUniqueInput>;
    connectOrCreate?: Nullable<ResponseCreateOrConnectWithoutAttachmentsInput>;
    create?: Nullable<ResponseUncheckedCreateWithoutAttachmentsInput>;
}

export class ResponseCreateOrConnectWithoutAnswersInput {
    create: ResponseUncheckedCreateWithoutAnswersInput;
    where: ResponseWhereUniqueInput;
}

export class ResponseCreateOrConnectWithoutAttachmentsInput {
    create: ResponseUncheckedCreateWithoutAttachmentsInput;
    where: ResponseWhereUniqueInput;
}

export class ResponseCreateOrConnectWithoutAuthorInput {
    create: ResponseUncheckedCreateWithoutAuthorInput;
    where: ResponseWhereUniqueInput;
}

export class ResponseCreateOrConnectWithoutFormInput {
    create: ResponseUncheckedCreateWithoutFormInput;
    where: ResponseWhereUniqueInput;
}

export class ResponseCreateOrConnectWithoutGradeInput {
    create: ResponseUncheckedCreateWithoutGradeInput;
    where: ResponseWhereUniqueInput;
}

export class ResponseCreateWithoutAnswersInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutResponseInput>;
    author?: Nullable<UserCreateNestedOneWithoutResponsesInput>;
    createdAt?: Nullable<DateTime>;
    form: FormCreateNestedOneWithoutResponsesInput;
    grade: GradeCreateNestedOneWithoutResponsesInput;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ResponseCreateWithoutAttachmentsInput {
    answers?: Nullable<AnswerCreateNestedManyWithoutResponseInput>;
    author?: Nullable<UserCreateNestedOneWithoutResponsesInput>;
    createdAt?: Nullable<DateTime>;
    form: FormCreateNestedOneWithoutResponsesInput;
    grade: GradeCreateNestedOneWithoutResponsesInput;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ResponseCreateWithoutAuthorInput {
    answers?: Nullable<AnswerCreateNestedManyWithoutResponseInput>;
    attachments?: Nullable<AttachmentCreateNestedManyWithoutResponseInput>;
    createdAt?: Nullable<DateTime>;
    form: FormCreateNestedOneWithoutResponsesInput;
    grade: GradeCreateNestedOneWithoutResponsesInput;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ResponseCreateWithoutFormInput {
    answers?: Nullable<AnswerCreateNestedManyWithoutResponseInput>;
    attachments?: Nullable<AttachmentCreateNestedManyWithoutResponseInput>;
    author?: Nullable<UserCreateNestedOneWithoutResponsesInput>;
    createdAt?: Nullable<DateTime>;
    grade: GradeCreateNestedOneWithoutResponsesInput;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ResponseCreateWithoutGradeInput {
    answers?: Nullable<AnswerCreateNestedManyWithoutResponseInput>;
    attachments?: Nullable<AttachmentCreateNestedManyWithoutResponseInput>;
    author?: Nullable<UserCreateNestedOneWithoutResponsesInput>;
    createdAt?: Nullable<DateTime>;
    form: FormCreateNestedOneWithoutResponsesInput;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ResponseListRelationFilter {
    every?: Nullable<ResponseWhereInput>;
    none?: Nullable<ResponseWhereInput>;
    some?: Nullable<ResponseWhereInput>;
}

export class ResponseOrderByInput {
    authorId?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    formId?: Nullable<SortOrder>;
    gradeId?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class ResponseRelationFilter {
    is?: Nullable<ResponseWhereInput>;
    isNot?: Nullable<ResponseWhereInput>;
}

export class ResponseScalarWhereInput {
    AND?: Nullable<ResponseScalarWhereInput[]>;
    NOT?: Nullable<ResponseScalarWhereInput[]>;
    OR?: Nullable<ResponseScalarWhereInput[]>;
    authorId?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    formId?: Nullable<StringFilter>;
    gradeId?: Nullable<StringFilter>;
    id?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class ResponseScalarWhereWithAggregatesInput {
    AND?: Nullable<ResponseScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<ResponseScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<ResponseScalarWhereWithAggregatesInput[]>;
    authorId?: Nullable<StringNullableWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    formId?: Nullable<StringWithAggregatesFilter>;
    gradeId?: Nullable<StringWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class ResponseUncheckedCreateInput {
    answers?: Nullable<AnswerUncheckedCreateNestedManyWithoutResponseInput>;
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutResponseInput>;
    authorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    formId: string;
    gradeId: string;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ResponseUncheckedCreateNestedManyWithoutAuthorInput {
    connect?: Nullable<ResponseWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ResponseCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<ResponseCreateWithoutAuthorInput[]>;
    createMany?: Nullable<ResponseCreateManyAuthorInputEnvelope>;
}

export class ResponseUncheckedCreateNestedManyWithoutFormInput {
    connect?: Nullable<ResponseWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ResponseCreateOrConnectWithoutFormInput[]>;
    create?: Nullable<ResponseCreateWithoutFormInput[]>;
    createMany?: Nullable<ResponseCreateManyFormInputEnvelope>;
}

export class ResponseUncheckedCreateNestedManyWithoutGradeInput {
    connect?: Nullable<ResponseWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ResponseCreateOrConnectWithoutGradeInput[]>;
    create?: Nullable<ResponseCreateWithoutGradeInput[]>;
    createMany?: Nullable<ResponseCreateManyGradeInputEnvelope>;
}

export class ResponseUncheckedCreateWithoutAnswersInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutResponseInput>;
    authorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    formId: string;
    gradeId: string;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ResponseUncheckedCreateWithoutAttachmentsInput {
    answers?: Nullable<AnswerUncheckedCreateNestedManyWithoutResponseInput>;
    authorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    formId: string;
    gradeId: string;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ResponseUncheckedCreateWithoutAuthorInput {
    answers?: Nullable<AnswerUncheckedCreateNestedManyWithoutResponseInput>;
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutResponseInput>;
    createdAt?: Nullable<DateTime>;
    formId: string;
    gradeId: string;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ResponseUncheckedCreateWithoutFormInput {
    answers?: Nullable<AnswerUncheckedCreateNestedManyWithoutResponseInput>;
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutResponseInput>;
    authorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    gradeId: string;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ResponseUncheckedCreateWithoutGradeInput {
    answers?: Nullable<AnswerUncheckedCreateNestedManyWithoutResponseInput>;
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutResponseInput>;
    authorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    formId: string;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ResponseUncheckedUpdateInput {
    answers?: Nullable<AnswerUncheckedUpdateManyWithoutResponseInput>;
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutResponseInput>;
    authorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    formId?: Nullable<StringFieldUpdateOperationsInput>;
    gradeId?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ResponseUncheckedUpdateManyInput {
    authorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    formId?: Nullable<StringFieldUpdateOperationsInput>;
    gradeId?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ResponseUncheckedUpdateManyWithoutAuthorInput {
    connect?: Nullable<ResponseWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ResponseCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<ResponseCreateWithoutAuthorInput[]>;
    createMany?: Nullable<ResponseCreateManyAuthorInputEnvelope>;
    delete?: Nullable<ResponseWhereUniqueInput[]>;
    deleteMany?: Nullable<ResponseScalarWhereInput[]>;
    disconnect?: Nullable<ResponseWhereUniqueInput[]>;
    set?: Nullable<ResponseWhereUniqueInput[]>;
    update?: Nullable<ResponseUpdateWithWhereUniqueWithoutAuthorInput[]>;
    updateMany?: Nullable<ResponseUpdateManyWithWhereWithoutAuthorInput[]>;
    upsert?: Nullable<ResponseUpsertWithWhereUniqueWithoutAuthorInput[]>;
}

export class ResponseUncheckedUpdateManyWithoutFormInput {
    connect?: Nullable<ResponseWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ResponseCreateOrConnectWithoutFormInput[]>;
    create?: Nullable<ResponseCreateWithoutFormInput[]>;
    createMany?: Nullable<ResponseCreateManyFormInputEnvelope>;
    delete?: Nullable<ResponseWhereUniqueInput[]>;
    deleteMany?: Nullable<ResponseScalarWhereInput[]>;
    disconnect?: Nullable<ResponseWhereUniqueInput[]>;
    set?: Nullable<ResponseWhereUniqueInput[]>;
    update?: Nullable<ResponseUpdateWithWhereUniqueWithoutFormInput[]>;
    updateMany?: Nullable<ResponseUpdateManyWithWhereWithoutFormInput[]>;
    upsert?: Nullable<ResponseUpsertWithWhereUniqueWithoutFormInput[]>;
}

export class ResponseUncheckedUpdateManyWithoutGradeInput {
    connect?: Nullable<ResponseWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ResponseCreateOrConnectWithoutGradeInput[]>;
    create?: Nullable<ResponseCreateWithoutGradeInput[]>;
    createMany?: Nullable<ResponseCreateManyGradeInputEnvelope>;
    delete?: Nullable<ResponseWhereUniqueInput[]>;
    deleteMany?: Nullable<ResponseScalarWhereInput[]>;
    disconnect?: Nullable<ResponseWhereUniqueInput[]>;
    set?: Nullable<ResponseWhereUniqueInput[]>;
    update?: Nullable<ResponseUpdateWithWhereUniqueWithoutGradeInput[]>;
    updateMany?: Nullable<ResponseUpdateManyWithWhereWithoutGradeInput[]>;
    upsert?: Nullable<ResponseUpsertWithWhereUniqueWithoutGradeInput[]>;
}

export class ResponseUncheckedUpdateManyWithoutResponsesInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    formId?: Nullable<StringFieldUpdateOperationsInput>;
    gradeId?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ResponseUncheckedUpdateWithoutAnswersInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutResponseInput>;
    authorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    formId?: Nullable<StringFieldUpdateOperationsInput>;
    gradeId?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ResponseUncheckedUpdateWithoutAttachmentsInput {
    answers?: Nullable<AnswerUncheckedUpdateManyWithoutResponseInput>;
    authorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    formId?: Nullable<StringFieldUpdateOperationsInput>;
    gradeId?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ResponseUncheckedUpdateWithoutAuthorInput {
    answers?: Nullable<AnswerUncheckedUpdateManyWithoutResponseInput>;
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutResponseInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    formId?: Nullable<StringFieldUpdateOperationsInput>;
    gradeId?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ResponseUncheckedUpdateWithoutFormInput {
    answers?: Nullable<AnswerUncheckedUpdateManyWithoutResponseInput>;
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutResponseInput>;
    authorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    gradeId?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ResponseUncheckedUpdateWithoutGradeInput {
    answers?: Nullable<AnswerUncheckedUpdateManyWithoutResponseInput>;
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutResponseInput>;
    authorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    formId?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ResponseUpdateInput {
    answers?: Nullable<AnswerUpdateManyWithoutResponseInput>;
    attachments?: Nullable<AttachmentUpdateManyWithoutResponseInput>;
    author?: Nullable<UserUpdateOneWithoutResponsesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    form?: Nullable<FormUpdateOneRequiredWithoutResponsesInput>;
    grade?: Nullable<GradeUpdateOneRequiredWithoutResponsesInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ResponseUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ResponseUpdateManyWithWhereWithoutAuthorInput {
    data: ResponseUncheckedUpdateManyWithoutResponsesInput;
    where: ResponseScalarWhereInput;
}

export class ResponseUpdateManyWithWhereWithoutFormInput {
    data: ResponseUncheckedUpdateManyWithoutResponsesInput;
    where: ResponseScalarWhereInput;
}

export class ResponseUpdateManyWithWhereWithoutGradeInput {
    data: ResponseUncheckedUpdateManyWithoutResponsesInput;
    where: ResponseScalarWhereInput;
}

export class ResponseUpdateManyWithoutAuthorInput {
    connect?: Nullable<ResponseWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ResponseCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<ResponseCreateWithoutAuthorInput[]>;
    createMany?: Nullable<ResponseCreateManyAuthorInputEnvelope>;
    delete?: Nullable<ResponseWhereUniqueInput[]>;
    deleteMany?: Nullable<ResponseScalarWhereInput[]>;
    disconnect?: Nullable<ResponseWhereUniqueInput[]>;
    set?: Nullable<ResponseWhereUniqueInput[]>;
    update?: Nullable<ResponseUpdateWithWhereUniqueWithoutAuthorInput[]>;
    updateMany?: Nullable<ResponseUpdateManyWithWhereWithoutAuthorInput[]>;
    upsert?: Nullable<ResponseUpsertWithWhereUniqueWithoutAuthorInput[]>;
}

export class ResponseUpdateManyWithoutFormInput {
    connect?: Nullable<ResponseWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ResponseCreateOrConnectWithoutFormInput[]>;
    create?: Nullable<ResponseCreateWithoutFormInput[]>;
    createMany?: Nullable<ResponseCreateManyFormInputEnvelope>;
    delete?: Nullable<ResponseWhereUniqueInput[]>;
    deleteMany?: Nullable<ResponseScalarWhereInput[]>;
    disconnect?: Nullable<ResponseWhereUniqueInput[]>;
    set?: Nullable<ResponseWhereUniqueInput[]>;
    update?: Nullable<ResponseUpdateWithWhereUniqueWithoutFormInput[]>;
    updateMany?: Nullable<ResponseUpdateManyWithWhereWithoutFormInput[]>;
    upsert?: Nullable<ResponseUpsertWithWhereUniqueWithoutFormInput[]>;
}

export class ResponseUpdateManyWithoutGradeInput {
    connect?: Nullable<ResponseWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ResponseCreateOrConnectWithoutGradeInput[]>;
    create?: Nullable<ResponseCreateWithoutGradeInput[]>;
    createMany?: Nullable<ResponseCreateManyGradeInputEnvelope>;
    delete?: Nullable<ResponseWhereUniqueInput[]>;
    deleteMany?: Nullable<ResponseScalarWhereInput[]>;
    disconnect?: Nullable<ResponseWhereUniqueInput[]>;
    set?: Nullable<ResponseWhereUniqueInput[]>;
    update?: Nullable<ResponseUpdateWithWhereUniqueWithoutGradeInput[]>;
    updateMany?: Nullable<ResponseUpdateManyWithWhereWithoutGradeInput[]>;
    upsert?: Nullable<ResponseUpsertWithWhereUniqueWithoutGradeInput[]>;
}

export class ResponseUpdateOneRequiredWithoutAnswersInput {
    connect?: Nullable<ResponseWhereUniqueInput>;
    connectOrCreate?: Nullable<ResponseCreateOrConnectWithoutAnswersInput>;
    create?: Nullable<ResponseUncheckedCreateWithoutAnswersInput>;
    update?: Nullable<ResponseUncheckedUpdateWithoutAnswersInput>;
    upsert?: Nullable<ResponseUpsertWithoutAnswersInput>;
}

export class ResponseUpdateOneWithoutAttachmentsInput {
    connect?: Nullable<ResponseWhereUniqueInput>;
    connectOrCreate?: Nullable<ResponseCreateOrConnectWithoutAttachmentsInput>;
    create?: Nullable<ResponseUncheckedCreateWithoutAttachmentsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<ResponseUncheckedUpdateWithoutAttachmentsInput>;
    upsert?: Nullable<ResponseUpsertWithoutAttachmentsInput>;
}

export class ResponseUpdateWithWhereUniqueWithoutAuthorInput {
    data: ResponseUncheckedUpdateWithoutAuthorInput;
    where: ResponseWhereUniqueInput;
}

export class ResponseUpdateWithWhereUniqueWithoutFormInput {
    data: ResponseUncheckedUpdateWithoutFormInput;
    where: ResponseWhereUniqueInput;
}

export class ResponseUpdateWithWhereUniqueWithoutGradeInput {
    data: ResponseUncheckedUpdateWithoutGradeInput;
    where: ResponseWhereUniqueInput;
}

export class ResponseUpdateWithoutAnswersInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutResponseInput>;
    author?: Nullable<UserUpdateOneWithoutResponsesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    form?: Nullable<FormUpdateOneRequiredWithoutResponsesInput>;
    grade?: Nullable<GradeUpdateOneRequiredWithoutResponsesInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ResponseUpdateWithoutAttachmentsInput {
    answers?: Nullable<AnswerUpdateManyWithoutResponseInput>;
    author?: Nullable<UserUpdateOneWithoutResponsesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    form?: Nullable<FormUpdateOneRequiredWithoutResponsesInput>;
    grade?: Nullable<GradeUpdateOneRequiredWithoutResponsesInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ResponseUpdateWithoutAuthorInput {
    answers?: Nullable<AnswerUpdateManyWithoutResponseInput>;
    attachments?: Nullable<AttachmentUpdateManyWithoutResponseInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    form?: Nullable<FormUpdateOneRequiredWithoutResponsesInput>;
    grade?: Nullable<GradeUpdateOneRequiredWithoutResponsesInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ResponseUpdateWithoutFormInput {
    answers?: Nullable<AnswerUpdateManyWithoutResponseInput>;
    attachments?: Nullable<AttachmentUpdateManyWithoutResponseInput>;
    author?: Nullable<UserUpdateOneWithoutResponsesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    grade?: Nullable<GradeUpdateOneRequiredWithoutResponsesInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ResponseUpdateWithoutGradeInput {
    answers?: Nullable<AnswerUpdateManyWithoutResponseInput>;
    attachments?: Nullable<AttachmentUpdateManyWithoutResponseInput>;
    author?: Nullable<UserUpdateOneWithoutResponsesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    form?: Nullable<FormUpdateOneRequiredWithoutResponsesInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ResponseUpsertWithWhereUniqueWithoutAuthorInput {
    create: ResponseUncheckedCreateWithoutAuthorInput;
    update: ResponseUncheckedUpdateWithoutAuthorInput;
    where: ResponseWhereUniqueInput;
}

export class ResponseUpsertWithWhereUniqueWithoutFormInput {
    create: ResponseUncheckedCreateWithoutFormInput;
    update: ResponseUncheckedUpdateWithoutFormInput;
    where: ResponseWhereUniqueInput;
}

export class ResponseUpsertWithWhereUniqueWithoutGradeInput {
    create: ResponseUncheckedCreateWithoutGradeInput;
    update: ResponseUncheckedUpdateWithoutGradeInput;
    where: ResponseWhereUniqueInput;
}

export class ResponseUpsertWithoutAnswersInput {
    create: ResponseUncheckedCreateWithoutAnswersInput;
    update: ResponseUncheckedUpdateWithoutAnswersInput;
}

export class ResponseUpsertWithoutAttachmentsInput {
    create: ResponseUncheckedCreateWithoutAttachmentsInput;
    update: ResponseUncheckedUpdateWithoutAttachmentsInput;
}

export class ResponseWhereInput {
    AND?: Nullable<ResponseWhereInput[]>;
    NOT?: Nullable<ResponseWhereInput[]>;
    OR?: Nullable<ResponseWhereInput[]>;
    answers?: Nullable<AnswerListRelationFilter>;
    attachments?: Nullable<AttachmentListRelationFilter>;
    author?: Nullable<UserWhereInput>;
    authorId?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    form?: Nullable<FormWhereInput>;
    formId?: Nullable<StringFilter>;
    grade?: Nullable<GradeWhereInput>;
    gradeId?: Nullable<StringFilter>;
    id?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class ResponseWhereUniqueInput {
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
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    image: AttachmentCreateNestedOneWithoutServicesInput;
    name: string;
    orders?: Nullable<OrderCreateNestedManyWithoutServiceInput>;
    price: number;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    value: number;
}

export class ServiceCreateManyImageInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    price: number;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    value: number;
}

export class ServiceCreateManyImageInputEnvelope {
    data: ServiceCreateManyImageInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class ServiceCreateManyInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId: string;
    name: string;
    price: number;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    value: number;
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

export class ServiceCreateOrConnectWithoutImageInput {
    create: ServiceUncheckedCreateWithoutImageInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceCreateOrConnectWithoutOrdersInput {
    create: ServiceUncheckedCreateWithoutOrdersInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceCreateWithoutImageInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    orders?: Nullable<OrderCreateNestedManyWithoutServiceInput>;
    price: number;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    value: number;
}

export class ServiceCreateWithoutOrdersInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    image: AttachmentCreateNestedOneWithoutServicesInput;
    name: string;
    price: number;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    value: number;
}

export class ServiceListRelationFilter {
    every?: Nullable<ServiceWhereInput>;
    none?: Nullable<ServiceWhereInput>;
    some?: Nullable<ServiceWhereInput>;
}

export class ServiceOrderByInput {
    createdAt?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    imageId?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    price?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    value?: Nullable<SortOrder>;
}

export class ServiceRelationFilter {
    is?: Nullable<ServiceWhereInput>;
    isNot?: Nullable<ServiceWhereInput>;
}

export class ServiceScalarWhereInput {
    AND?: Nullable<ServiceScalarWhereInput[]>;
    NOT?: Nullable<ServiceScalarWhereInput[]>;
    OR?: Nullable<ServiceScalarWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    description?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    imageId?: Nullable<StringFilter>;
    name?: Nullable<StringFilter>;
    price?: Nullable<FloatFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
    value?: Nullable<FloatFilter>;
}

export class ServiceScalarWhereWithAggregatesInput {
    AND?: Nullable<ServiceScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<ServiceScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<ServiceScalarWhereWithAggregatesInput[]>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    description?: Nullable<StringNullableWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    imageId?: Nullable<StringWithAggregatesFilter>;
    name?: Nullable<StringWithAggregatesFilter>;
    price?: Nullable<FloatWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
    value?: Nullable<FloatWithAggregatesFilter>;
}

export class ServiceUncheckedCreateInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId: string;
    name: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutServiceInput>;
    price: number;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    value: number;
}

export class ServiceUncheckedCreateNestedManyWithoutImageInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutImageInput[]>;
    create?: Nullable<ServiceCreateWithoutImageInput[]>;
    createMany?: Nullable<ServiceCreateManyImageInputEnvelope>;
}

export class ServiceUncheckedCreateWithoutImageInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutServiceInput>;
    price: number;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    value: number;
}

export class ServiceUncheckedCreateWithoutOrdersInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId: string;
    name: string;
    price: number;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    value: number;
}

export class ServiceUncheckedUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    imageId?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutServiceInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<FloatFieldUpdateOperationsInput>;
}

export class ServiceUncheckedUpdateManyInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    imageId?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<FloatFieldUpdateOperationsInput>;
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
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<FloatFieldUpdateOperationsInput>;
}

export class ServiceUncheckedUpdateWithoutImageInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutServiceInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<FloatFieldUpdateOperationsInput>;
}

export class ServiceUncheckedUpdateWithoutOrdersInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    imageId?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<FloatFieldUpdateOperationsInput>;
}

export class ServiceUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    image?: Nullable<AttachmentUpdateOneRequiredWithoutServicesInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutServiceInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<FloatFieldUpdateOperationsInput>;
}

export class ServiceUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<FloatFieldUpdateOperationsInput>;
}

export class ServiceUpdateManyWithWhereWithoutImageInput {
    data: ServiceUncheckedUpdateManyWithoutServicesInput;
    where: ServiceScalarWhereInput;
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

export class ServiceUpdateWithWhereUniqueWithoutImageInput {
    data: ServiceUncheckedUpdateWithoutImageInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceUpdateWithoutImageInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutServiceInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<FloatFieldUpdateOperationsInput>;
}

export class ServiceUpdateWithoutOrdersInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    image?: Nullable<AttachmentUpdateOneRequiredWithoutServicesInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<FloatFieldUpdateOperationsInput>;
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
    createdAt?: Nullable<DateTimeFilter>;
    description?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    image?: Nullable<AttachmentWhereInput>;
    imageId?: Nullable<StringFilter>;
    name?: Nullable<StringFilter>;
    orders?: Nullable<OrderListRelationFilter>;
    price?: Nullable<FloatFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
    value?: Nullable<FloatFilter>;
}

export class ServiceWhereUniqueInput {
    id?: Nullable<string>;
}

export class SignupInput {
    avator?: Nullable<Upload>;
    dateOfBirth: DateTime;
    displayName: string;
    email: string;
    password: string;
    phoneNumber: string;
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

export class TagCreateInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    forms?: Nullable<FormCreateNestedManyWithoutTagsInput>;
    forums?: Nullable<ForumCreateNestedManyWithoutTagsInput>;
    id?: Nullable<string>;
    image?: Nullable<AttachmentCreateNestedOneWithoutTagsInput>;
    name: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class TagCreateManyImageInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class TagCreateManyImageInputEnvelope {
    data: TagCreateManyImageInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class TagCreateManyInput {
    attachmentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class TagCreateNestedManyWithoutFormsInput {
    connect?: Nullable<TagWhereUniqueInput[]>;
    connectOrCreate?: Nullable<TagCreateOrConnectWithoutFormsInput[]>;
    create?: Nullable<TagCreateWithoutFormsInput[]>;
}

export class TagCreateNestedManyWithoutForumsInput {
    connect?: Nullable<TagWhereUniqueInput[]>;
    connectOrCreate?: Nullable<TagCreateOrConnectWithoutForumsInput[]>;
    create?: Nullable<TagCreateWithoutForumsInput[]>;
}

export class TagCreateNestedManyWithoutImageInput {
    connect?: Nullable<TagWhereUniqueInput[]>;
    connectOrCreate?: Nullable<TagCreateOrConnectWithoutImageInput[]>;
    create?: Nullable<TagCreateWithoutImageInput[]>;
    createMany?: Nullable<TagCreateManyImageInputEnvelope>;
}

export class TagCreateOrConnectWithoutFormsInput {
    create: TagUncheckedCreateWithoutFormsInput;
    where: TagWhereUniqueInput;
}

export class TagCreateOrConnectWithoutForumsInput {
    create: TagUncheckedCreateWithoutForumsInput;
    where: TagWhereUniqueInput;
}

export class TagCreateOrConnectWithoutImageInput {
    create: TagUncheckedCreateWithoutImageInput;
    where: TagWhereUniqueInput;
}

export class TagCreateWithoutFormsInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    forums?: Nullable<ForumCreateNestedManyWithoutTagsInput>;
    id?: Nullable<string>;
    image?: Nullable<AttachmentCreateNestedOneWithoutTagsInput>;
    name: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class TagCreateWithoutForumsInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    forms?: Nullable<FormCreateNestedManyWithoutTagsInput>;
    id?: Nullable<string>;
    image?: Nullable<AttachmentCreateNestedOneWithoutTagsInput>;
    name: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class TagCreateWithoutImageInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    forms?: Nullable<FormCreateNestedManyWithoutTagsInput>;
    forums?: Nullable<ForumCreateNestedManyWithoutTagsInput>;
    id?: Nullable<string>;
    name: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class TagListRelationFilter {
    every?: Nullable<TagWhereInput>;
    none?: Nullable<TagWhereInput>;
    some?: Nullable<TagWhereInput>;
}

export class TagOrderByInput {
    attachmentId?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class TagScalarWhereInput {
    AND?: Nullable<TagScalarWhereInput[]>;
    NOT?: Nullable<TagScalarWhereInput[]>;
    OR?: Nullable<TagScalarWhereInput[]>;
    attachmentId?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    description?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    name?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class TagScalarWhereWithAggregatesInput {
    AND?: Nullable<TagScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<TagScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<TagScalarWhereWithAggregatesInput[]>;
    attachmentId?: Nullable<StringNullableWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    description?: Nullable<StringNullableWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    name?: Nullable<StringWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class TagUncheckedCreateInput {
    attachmentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class TagUncheckedCreateNestedManyWithoutImageInput {
    connect?: Nullable<TagWhereUniqueInput[]>;
    connectOrCreate?: Nullable<TagCreateOrConnectWithoutImageInput[]>;
    create?: Nullable<TagCreateWithoutImageInput[]>;
    createMany?: Nullable<TagCreateManyImageInputEnvelope>;
}

export class TagUncheckedCreateWithoutFormsInput {
    attachmentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class TagUncheckedCreateWithoutForumsInput {
    attachmentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class TagUncheckedCreateWithoutImageInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class TagUncheckedUpdateInput {
    attachmentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TagUncheckedUpdateManyInput {
    attachmentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TagUncheckedUpdateManyWithoutImageInput {
    connect?: Nullable<TagWhereUniqueInput[]>;
    connectOrCreate?: Nullable<TagCreateOrConnectWithoutImageInput[]>;
    create?: Nullable<TagCreateWithoutImageInput[]>;
    createMany?: Nullable<TagCreateManyImageInputEnvelope>;
    delete?: Nullable<TagWhereUniqueInput[]>;
    deleteMany?: Nullable<TagScalarWhereInput[]>;
    disconnect?: Nullable<TagWhereUniqueInput[]>;
    set?: Nullable<TagWhereUniqueInput[]>;
    update?: Nullable<TagUpdateWithWhereUniqueWithoutImageInput[]>;
    updateMany?: Nullable<TagUpdateManyWithWhereWithoutImageInput[]>;
    upsert?: Nullable<TagUpsertWithWhereUniqueWithoutImageInput[]>;
}

export class TagUncheckedUpdateManyWithoutTagsInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TagUncheckedUpdateWithoutFormsInput {
    attachmentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TagUncheckedUpdateWithoutForumsInput {
    attachmentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TagUncheckedUpdateWithoutImageInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TagUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forms?: Nullable<FormUpdateManyWithoutTagsInput>;
    forums?: Nullable<ForumUpdateManyWithoutTagsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    image?: Nullable<AttachmentUpdateOneWithoutTagsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TagUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TagUpdateManyWithWhereWithoutFormsInput {
    data: TagUncheckedUpdateManyWithoutTagsInput;
    where: TagScalarWhereInput;
}

export class TagUpdateManyWithWhereWithoutForumsInput {
    data: TagUncheckedUpdateManyWithoutTagsInput;
    where: TagScalarWhereInput;
}

export class TagUpdateManyWithWhereWithoutImageInput {
    data: TagUncheckedUpdateManyWithoutTagsInput;
    where: TagScalarWhereInput;
}

export class TagUpdateManyWithoutFormsInput {
    connect?: Nullable<TagWhereUniqueInput[]>;
    connectOrCreate?: Nullable<TagCreateOrConnectWithoutFormsInput[]>;
    create?: Nullable<TagCreateWithoutFormsInput[]>;
    delete?: Nullable<TagWhereUniqueInput[]>;
    deleteMany?: Nullable<TagScalarWhereInput[]>;
    disconnect?: Nullable<TagWhereUniqueInput[]>;
    set?: Nullable<TagWhereUniqueInput[]>;
    update?: Nullable<TagUpdateWithWhereUniqueWithoutFormsInput[]>;
    updateMany?: Nullable<TagUpdateManyWithWhereWithoutFormsInput[]>;
    upsert?: Nullable<TagUpsertWithWhereUniqueWithoutFormsInput[]>;
}

export class TagUpdateManyWithoutForumsInput {
    connect?: Nullable<TagWhereUniqueInput[]>;
    connectOrCreate?: Nullable<TagCreateOrConnectWithoutForumsInput[]>;
    create?: Nullable<TagCreateWithoutForumsInput[]>;
    delete?: Nullable<TagWhereUniqueInput[]>;
    deleteMany?: Nullable<TagScalarWhereInput[]>;
    disconnect?: Nullable<TagWhereUniqueInput[]>;
    set?: Nullable<TagWhereUniqueInput[]>;
    update?: Nullable<TagUpdateWithWhereUniqueWithoutForumsInput[]>;
    updateMany?: Nullable<TagUpdateManyWithWhereWithoutForumsInput[]>;
    upsert?: Nullable<TagUpsertWithWhereUniqueWithoutForumsInput[]>;
}

export class TagUpdateManyWithoutImageInput {
    connect?: Nullable<TagWhereUniqueInput[]>;
    connectOrCreate?: Nullable<TagCreateOrConnectWithoutImageInput[]>;
    create?: Nullable<TagCreateWithoutImageInput[]>;
    createMany?: Nullable<TagCreateManyImageInputEnvelope>;
    delete?: Nullable<TagWhereUniqueInput[]>;
    deleteMany?: Nullable<TagScalarWhereInput[]>;
    disconnect?: Nullable<TagWhereUniqueInput[]>;
    set?: Nullable<TagWhereUniqueInput[]>;
    update?: Nullable<TagUpdateWithWhereUniqueWithoutImageInput[]>;
    updateMany?: Nullable<TagUpdateManyWithWhereWithoutImageInput[]>;
    upsert?: Nullable<TagUpsertWithWhereUniqueWithoutImageInput[]>;
}

export class TagUpdateWithWhereUniqueWithoutFormsInput {
    data: TagUncheckedUpdateWithoutFormsInput;
    where: TagWhereUniqueInput;
}

export class TagUpdateWithWhereUniqueWithoutForumsInput {
    data: TagUncheckedUpdateWithoutForumsInput;
    where: TagWhereUniqueInput;
}

export class TagUpdateWithWhereUniqueWithoutImageInput {
    data: TagUncheckedUpdateWithoutImageInput;
    where: TagWhereUniqueInput;
}

export class TagUpdateWithoutFormsInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forums?: Nullable<ForumUpdateManyWithoutTagsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    image?: Nullable<AttachmentUpdateOneWithoutTagsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TagUpdateWithoutForumsInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forms?: Nullable<FormUpdateManyWithoutTagsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    image?: Nullable<AttachmentUpdateOneWithoutTagsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TagUpdateWithoutImageInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    forms?: Nullable<FormUpdateManyWithoutTagsInput>;
    forums?: Nullable<ForumUpdateManyWithoutTagsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TagUpsertWithWhereUniqueWithoutFormsInput {
    create: TagUncheckedCreateWithoutFormsInput;
    update: TagUncheckedUpdateWithoutFormsInput;
    where: TagWhereUniqueInput;
}

export class TagUpsertWithWhereUniqueWithoutForumsInput {
    create: TagUncheckedCreateWithoutForumsInput;
    update: TagUncheckedUpdateWithoutForumsInput;
    where: TagWhereUniqueInput;
}

export class TagUpsertWithWhereUniqueWithoutImageInput {
    create: TagUncheckedCreateWithoutImageInput;
    update: TagUncheckedUpdateWithoutImageInput;
    where: TagWhereUniqueInput;
}

export class TagWhereInput {
    AND?: Nullable<TagWhereInput[]>;
    NOT?: Nullable<TagWhereInput[]>;
    OR?: Nullable<TagWhereInput[]>;
    attachmentId?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    description?: Nullable<StringNullableFilter>;
    forms?: Nullable<FormListRelationFilter>;
    forums?: Nullable<ForumListRelationFilter>;
    id?: Nullable<StringFilter>;
    image?: Nullable<AttachmentWhereInput>;
    name?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class TagWhereUniqueInput {
    id?: Nullable<string>;
}

export class TransactionCreateInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    initiator: UserCreateNestedOneWithoutTransactionsInput;
    mpesaPayment?: Nullable<MpesaPaymentCreateNestedOneWithoutTransactionInput>;
    order: OrderCreateNestedOneWithoutTransactionsInput;
    paymentMethod: PaymentMethodCreateNestedOneWithoutTransactionsInput;
    selcomDisbursement?: Nullable<SelcomDisbursementCreateNestedOneWithoutTransactionInput>;
    selcomPayment?: Nullable<SelcomPaymentCreateNestedOneWithoutTransactionInput>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionCreateManyInitiatorInput {
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

export class TransactionCreateManyInitiatorInputEnvelope {
    data: TransactionCreateManyInitiatorInput[];
    skipDuplicates?: Nullable<boolean>;
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
    userId: string;
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
    userId: string;
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
    userId: string;
}

export class TransactionCreateManyPaymentMethodInputEnvelope {
    data: TransactionCreateManyPaymentMethodInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class TransactionCreateNestedManyWithoutInitiatorInput {
    connect?: Nullable<TransactionWhereUniqueInput[]>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutInitiatorInput[]>;
    create?: Nullable<TransactionCreateWithoutInitiatorInput[]>;
    createMany?: Nullable<TransactionCreateManyInitiatorInputEnvelope>;
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

export class TransactionCreateOrConnectWithoutInitiatorInput {
    create: TransactionUncheckedCreateWithoutInitiatorInput;
    where: TransactionWhereUniqueInput;
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

export class TransactionCreateWithoutInitiatorInput {
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

export class TransactionCreateWithoutMpesaPaymentInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    initiator: UserCreateNestedOneWithoutTransactionsInput;
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
    initiator: UserCreateNestedOneWithoutTransactionsInput;
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
    initiator: UserCreateNestedOneWithoutTransactionsInput;
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
    initiator: UserCreateNestedOneWithoutTransactionsInput;
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
    initiator: UserCreateNestedOneWithoutTransactionsInput;
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
    userId?: Nullable<SortOrder>;
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
    userId?: Nullable<StringFilter>;
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
    userId?: Nullable<StringWithAggregatesFilter>;
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
    userId: string;
}

export class TransactionUncheckedCreateNestedManyWithoutInitiatorInput {
    connect?: Nullable<TransactionWhereUniqueInput[]>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutInitiatorInput[]>;
    create?: Nullable<TransactionCreateWithoutInitiatorInput[]>;
    createMany?: Nullable<TransactionCreateManyInitiatorInputEnvelope>;
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

export class TransactionUncheckedCreateWithoutInitiatorInput {
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
    userId: string;
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
    userId: string;
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
    userId: string;
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
    userId: string;
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
    userId: string;
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
    userId?: Nullable<StringFieldUpdateOperationsInput>;
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
    userId?: Nullable<StringFieldUpdateOperationsInput>;
}

export class TransactionUncheckedUpdateManyWithoutInitiatorInput {
    connect?: Nullable<TransactionWhereUniqueInput[]>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutInitiatorInput[]>;
    create?: Nullable<TransactionCreateWithoutInitiatorInput[]>;
    createMany?: Nullable<TransactionCreateManyInitiatorInputEnvelope>;
    delete?: Nullable<TransactionWhereUniqueInput[]>;
    deleteMany?: Nullable<TransactionScalarWhereInput[]>;
    disconnect?: Nullable<TransactionWhereUniqueInput[]>;
    set?: Nullable<TransactionWhereUniqueInput[]>;
    update?: Nullable<TransactionUpdateWithWhereUniqueWithoutInitiatorInput[]>;
    updateMany?: Nullable<TransactionUpdateManyWithWhereWithoutInitiatorInput[]>;
    upsert?: Nullable<TransactionUpsertWithWhereUniqueWithoutInitiatorInput[]>;
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
    orderId?: Nullable<StringFieldUpdateOperationsInput>;
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

export class TransactionUncheckedUpdateWithoutInitiatorInput {
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
    userId?: Nullable<StringFieldUpdateOperationsInput>;
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
    userId?: Nullable<StringFieldUpdateOperationsInput>;
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
    userId?: Nullable<StringFieldUpdateOperationsInput>;
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
    userId?: Nullable<StringFieldUpdateOperationsInput>;
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
    userId?: Nullable<StringFieldUpdateOperationsInput>;
}

export class TransactionUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    initiator?: Nullable<UserUpdateOneRequiredWithoutTransactionsInput>;
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

export class TransactionUpdateManyWithWhereWithoutInitiatorInput {
    data: TransactionUncheckedUpdateManyWithoutTransactionsInput;
    where: TransactionScalarWhereInput;
}

export class TransactionUpdateManyWithWhereWithoutOrderInput {
    data: TransactionUncheckedUpdateManyWithoutTransactionsInput;
    where: TransactionScalarWhereInput;
}

export class TransactionUpdateManyWithWhereWithoutPaymentMethodInput {
    data: TransactionUncheckedUpdateManyWithoutTransactionsInput;
    where: TransactionScalarWhereInput;
}

export class TransactionUpdateManyWithoutInitiatorInput {
    connect?: Nullable<TransactionWhereUniqueInput[]>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutInitiatorInput[]>;
    create?: Nullable<TransactionCreateWithoutInitiatorInput[]>;
    createMany?: Nullable<TransactionCreateManyInitiatorInputEnvelope>;
    delete?: Nullable<TransactionWhereUniqueInput[]>;
    deleteMany?: Nullable<TransactionScalarWhereInput[]>;
    disconnect?: Nullable<TransactionWhereUniqueInput[]>;
    set?: Nullable<TransactionWhereUniqueInput[]>;
    update?: Nullable<TransactionUpdateWithWhereUniqueWithoutInitiatorInput[]>;
    updateMany?: Nullable<TransactionUpdateManyWithWhereWithoutInitiatorInput[]>;
    upsert?: Nullable<TransactionUpsertWithWhereUniqueWithoutInitiatorInput[]>;
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

export class TransactionUpdateWithWhereUniqueWithoutInitiatorInput {
    data: TransactionUncheckedUpdateWithoutInitiatorInput;
    where: TransactionWhereUniqueInput;
}

export class TransactionUpdateWithWhereUniqueWithoutOrderInput {
    data: TransactionUncheckedUpdateWithoutOrderInput;
    where: TransactionWhereUniqueInput;
}

export class TransactionUpdateWithWhereUniqueWithoutPaymentMethodInput {
    data: TransactionUncheckedUpdateWithoutPaymentMethodInput;
    where: TransactionWhereUniqueInput;
}

export class TransactionUpdateWithoutInitiatorInput {
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

export class TransactionUpdateWithoutMpesaPaymentInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    initiator?: Nullable<UserUpdateOneRequiredWithoutTransactionsInput>;
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
    initiator?: Nullable<UserUpdateOneRequiredWithoutTransactionsInput>;
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
    initiator?: Nullable<UserUpdateOneRequiredWithoutTransactionsInput>;
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
    initiator?: Nullable<UserUpdateOneRequiredWithoutTransactionsInput>;
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
    initiator?: Nullable<UserUpdateOneRequiredWithoutTransactionsInput>;
    mpesaPayment?: Nullable<MpesaPaymentUpdateOneWithoutTransactionInput>;
    order?: Nullable<OrderUpdateOneRequiredWithoutTransactionsInput>;
    paymentMethod?: Nullable<PaymentMethodUpdateOneRequiredWithoutTransactionsInput>;
    selcomDisbursement?: Nullable<SelcomDisbursementUpdateOneWithoutTransactionInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUpsertWithWhereUniqueWithoutInitiatorInput {
    create: TransactionUncheckedCreateWithoutInitiatorInput;
    update: TransactionUncheckedUpdateWithoutInitiatorInput;
    where: TransactionWhereUniqueInput;
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
    initiator?: Nullable<UserWhereInput>;
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
    userId?: Nullable<StringFilter>;
}

export class TransactionWhereUniqueInput {
    id?: Nullable<string>;
}

export class UserCreateInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUserInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    forms?: Nullable<FormCreateNestedManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerCreateNestedManyWithoutAuthorInput>;
    forums?: Nullable<ForumCreateNestedManyWithoutAuthorInput>;
    id?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    responses?: Nullable<ResponseCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateManyAvatorInput {
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
    phoneNumber?: Nullable<string>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateNestedManyWithoutAvatorInput {
    connect?: Nullable<UserWhereUniqueInput[]>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutAvatorInput[]>;
    create?: Nullable<UserCreateWithoutAvatorInput[]>;
    createMany?: Nullable<UserCreateManyAvatorInputEnvelope>;
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

export class UserCreateNestedOneWithoutFormsInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutFormsInput>;
    create?: Nullable<UserUncheckedCreateWithoutFormsInput>;
}

export class UserCreateNestedOneWithoutForumAnswersInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutForumAnswersInput>;
    create?: Nullable<UserUncheckedCreateWithoutForumAnswersInput>;
}

export class UserCreateNestedOneWithoutForumsInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutForumsInput>;
    create?: Nullable<UserUncheckedCreateWithoutForumsInput>;
}

export class UserCreateNestedOneWithoutOrdersInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutOrdersInput>;
    create?: Nullable<UserUncheckedCreateWithoutOrdersInput>;
}

export class UserCreateNestedOneWithoutResponsesInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutResponsesInput>;
    create?: Nullable<UserUncheckedCreateWithoutResponsesInput>;
}

export class UserCreateNestedOneWithoutTransactionsInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutTransactionsInput>;
    create?: Nullable<UserUncheckedCreateWithoutTransactionsInput>;
}

export class UserCreateOrConnectWithoutAvatorInput {
    create: UserUncheckedCreateWithoutAvatorInput;
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

export class UserCreateOrConnectWithoutFormsInput {
    create: UserUncheckedCreateWithoutFormsInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutForumAnswersInput {
    create: UserUncheckedCreateWithoutForumAnswersInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutForumsInput {
    create: UserUncheckedCreateWithoutForumsInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutOrdersInput {
    create: UserUncheckedCreateWithoutOrdersInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutResponsesInput {
    create: UserUncheckedCreateWithoutResponsesInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutTransactionsInput {
    create: UserUncheckedCreateWithoutTransactionsInput;
    where: UserWhereUniqueInput;
}

export class UserCreateWithoutAvatorInput {
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    forms?: Nullable<FormCreateNestedManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerCreateNestedManyWithoutAuthorInput>;
    forums?: Nullable<ForumCreateNestedManyWithoutAuthorInput>;
    id?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    responses?: Nullable<ResponseCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutCommentsInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUserInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    forms?: Nullable<FormCreateNestedManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerCreateNestedManyWithoutAuthorInput>;
    forums?: Nullable<ForumCreateNestedManyWithoutAuthorInput>;
    id?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    responses?: Nullable<ResponseCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutDeviceInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUserInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    forms?: Nullable<FormCreateNestedManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerCreateNestedManyWithoutAuthorInput>;
    forums?: Nullable<ForumCreateNestedManyWithoutAuthorInput>;
    id?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    responses?: Nullable<ResponseCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutFormsInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUserInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    forumAnswers?: Nullable<ForumAnswerCreateNestedManyWithoutAuthorInput>;
    forums?: Nullable<ForumCreateNestedManyWithoutAuthorInput>;
    id?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    responses?: Nullable<ResponseCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutForumAnswersInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUserInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    forms?: Nullable<FormCreateNestedManyWithoutAuthorInput>;
    forums?: Nullable<ForumCreateNestedManyWithoutAuthorInput>;
    id?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    responses?: Nullable<ResponseCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutForumsInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUserInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    forms?: Nullable<FormCreateNestedManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerCreateNestedManyWithoutAuthorInput>;
    id?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    responses?: Nullable<ResponseCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutOrdersInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUserInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    forms?: Nullable<FormCreateNestedManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerCreateNestedManyWithoutAuthorInput>;
    forums?: Nullable<ForumCreateNestedManyWithoutAuthorInput>;
    id?: Nullable<string>;
    phoneNumber?: Nullable<string>;
    responses?: Nullable<ResponseCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutResponsesInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUserInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    forms?: Nullable<FormCreateNestedManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerCreateNestedManyWithoutAuthorInput>;
    forums?: Nullable<ForumCreateNestedManyWithoutAuthorInput>;
    id?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutTransactionsInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUserInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    forms?: Nullable<FormCreateNestedManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerCreateNestedManyWithoutAuthorInput>;
    forums?: Nullable<ForumCreateNestedManyWithoutAuthorInput>;
    id?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    responses?: Nullable<ResponseCreateNestedManyWithoutAuthorInput>;
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
    phoneNumber?: Nullable<StringNullableWithAggregatesFilter>;
    role?: Nullable<EnumRoleWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class UserUncheckedCreateInput {
    avatorId?: Nullable<string>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    forms?: Nullable<FormUncheckedCreateNestedManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerUncheckedCreateNestedManyWithoutAuthorInput>;
    forums?: Nullable<ForumUncheckedCreateNestedManyWithoutAuthorInput>;
    id?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    responses?: Nullable<ResponseUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateNestedManyWithoutAvatorInput {
    connect?: Nullable<UserWhereUniqueInput[]>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutAvatorInput[]>;
    create?: Nullable<UserCreateWithoutAvatorInput[]>;
    createMany?: Nullable<UserCreateManyAvatorInputEnvelope>;
}

export class UserUncheckedCreateWithoutAvatorInput {
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    forms?: Nullable<FormUncheckedCreateNestedManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerUncheckedCreateNestedManyWithoutAuthorInput>;
    forums?: Nullable<ForumUncheckedCreateNestedManyWithoutAuthorInput>;
    id?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    responses?: Nullable<ResponseUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutCommentsInput {
    avatorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    forms?: Nullable<FormUncheckedCreateNestedManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerUncheckedCreateNestedManyWithoutAuthorInput>;
    forums?: Nullable<ForumUncheckedCreateNestedManyWithoutAuthorInput>;
    id?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    responses?: Nullable<ResponseUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutDeviceInput {
    avatorId?: Nullable<string>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    forms?: Nullable<FormUncheckedCreateNestedManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerUncheckedCreateNestedManyWithoutAuthorInput>;
    forums?: Nullable<ForumUncheckedCreateNestedManyWithoutAuthorInput>;
    id?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    responses?: Nullable<ResponseUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutFormsInput {
    avatorId?: Nullable<string>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    forumAnswers?: Nullable<ForumAnswerUncheckedCreateNestedManyWithoutAuthorInput>;
    forums?: Nullable<ForumUncheckedCreateNestedManyWithoutAuthorInput>;
    id?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    responses?: Nullable<ResponseUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutForumAnswersInput {
    avatorId?: Nullable<string>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    forms?: Nullable<FormUncheckedCreateNestedManyWithoutAuthorInput>;
    forums?: Nullable<ForumUncheckedCreateNestedManyWithoutAuthorInput>;
    id?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    responses?: Nullable<ResponseUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutForumsInput {
    avatorId?: Nullable<string>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    forms?: Nullable<FormUncheckedCreateNestedManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerUncheckedCreateNestedManyWithoutAuthorInput>;
    id?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    responses?: Nullable<ResponseUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutOrdersInput {
    avatorId?: Nullable<string>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    forms?: Nullable<FormUncheckedCreateNestedManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerUncheckedCreateNestedManyWithoutAuthorInput>;
    forums?: Nullable<ForumUncheckedCreateNestedManyWithoutAuthorInput>;
    id?: Nullable<string>;
    phoneNumber?: Nullable<string>;
    responses?: Nullable<ResponseUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutResponsesInput {
    avatorId?: Nullable<string>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    forms?: Nullable<FormUncheckedCreateNestedManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerUncheckedCreateNestedManyWithoutAuthorInput>;
    forums?: Nullable<ForumUncheckedCreateNestedManyWithoutAuthorInput>;
    id?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutTransactionsInput {
    avatorId?: Nullable<string>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    forms?: Nullable<FormUncheckedCreateNestedManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerUncheckedCreateNestedManyWithoutAuthorInput>;
    forums?: Nullable<ForumUncheckedCreateNestedManyWithoutAuthorInput>;
    id?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    responses?: Nullable<ResponseUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedUpdateInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    forms?: Nullable<FormUncheckedUpdateManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerUncheckedUpdateManyWithoutAuthorInput>;
    forums?: Nullable<ForumUncheckedUpdateManyWithoutAuthorInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutInitiatorInput>;
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

export class UserUncheckedUpdateManyWithoutUserInput {
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
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    forms?: Nullable<FormUncheckedUpdateManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerUncheckedUpdateManyWithoutAuthorInput>;
    forums?: Nullable<ForumUncheckedUpdateManyWithoutAuthorInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutCommentsInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    forms?: Nullable<FormUncheckedUpdateManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerUncheckedUpdateManyWithoutAuthorInput>;
    forums?: Nullable<ForumUncheckedUpdateManyWithoutAuthorInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutDeviceInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    forms?: Nullable<FormUncheckedUpdateManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerUncheckedUpdateManyWithoutAuthorInput>;
    forums?: Nullable<ForumUncheckedUpdateManyWithoutAuthorInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutFormsInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    forumAnswers?: Nullable<ForumAnswerUncheckedUpdateManyWithoutAuthorInput>;
    forums?: Nullable<ForumUncheckedUpdateManyWithoutAuthorInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutForumAnswersInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    forms?: Nullable<FormUncheckedUpdateManyWithoutAuthorInput>;
    forums?: Nullable<ForumUncheckedUpdateManyWithoutAuthorInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutForumsInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    forms?: Nullable<FormUncheckedUpdateManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerUncheckedUpdateManyWithoutAuthorInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutOrdersInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    forms?: Nullable<FormUncheckedUpdateManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerUncheckedUpdateManyWithoutAuthorInput>;
    forums?: Nullable<ForumUncheckedUpdateManyWithoutAuthorInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutResponsesInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    forms?: Nullable<FormUncheckedUpdateManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerUncheckedUpdateManyWithoutAuthorInput>;
    forums?: Nullable<ForumUncheckedUpdateManyWithoutAuthorInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutTransactionsInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    forms?: Nullable<FormUncheckedUpdateManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerUncheckedUpdateManyWithoutAuthorInput>;
    forums?: Nullable<ForumUncheckedUpdateManyWithoutAuthorInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUserInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    forms?: Nullable<FormUpdateManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerUpdateManyWithoutAuthorInput>;
    forums?: Nullable<ForumUpdateManyWithoutAuthorInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutInitiatorInput>;
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

export class UserUpdateOneRequiredWithoutCommentsInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutCommentsInput>;
    create?: Nullable<UserUncheckedCreateWithoutCommentsInput>;
    update?: Nullable<UserUncheckedUpdateWithoutCommentsInput>;
    upsert?: Nullable<UserUpsertWithoutCommentsInput>;
}

export class UserUpdateOneRequiredWithoutFormsInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutFormsInput>;
    create?: Nullable<UserUncheckedCreateWithoutFormsInput>;
    update?: Nullable<UserUncheckedUpdateWithoutFormsInput>;
    upsert?: Nullable<UserUpsertWithoutFormsInput>;
}

export class UserUpdateOneRequiredWithoutForumAnswersInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutForumAnswersInput>;
    create?: Nullable<UserUncheckedCreateWithoutForumAnswersInput>;
    update?: Nullable<UserUncheckedUpdateWithoutForumAnswersInput>;
    upsert?: Nullable<UserUpsertWithoutForumAnswersInput>;
}

export class UserUpdateOneRequiredWithoutForumsInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutForumsInput>;
    create?: Nullable<UserUncheckedCreateWithoutForumsInput>;
    update?: Nullable<UserUncheckedUpdateWithoutForumsInput>;
    upsert?: Nullable<UserUpsertWithoutForumsInput>;
}

export class UserUpdateOneRequiredWithoutOrdersInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutOrdersInput>;
    create?: Nullable<UserUncheckedCreateWithoutOrdersInput>;
    update?: Nullable<UserUncheckedUpdateWithoutOrdersInput>;
    upsert?: Nullable<UserUpsertWithoutOrdersInput>;
}

export class UserUpdateOneRequiredWithoutTransactionsInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutTransactionsInput>;
    create?: Nullable<UserUncheckedCreateWithoutTransactionsInput>;
    update?: Nullable<UserUncheckedUpdateWithoutTransactionsInput>;
    upsert?: Nullable<UserUpsertWithoutTransactionsInput>;
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

export class UserUpdateOneWithoutResponsesInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutResponsesInput>;
    create?: Nullable<UserUncheckedCreateWithoutResponsesInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<UserUncheckedUpdateWithoutResponsesInput>;
    upsert?: Nullable<UserUpsertWithoutResponsesInput>;
}

export class UserUpdateWithWhereUniqueWithoutAvatorInput {
    data: UserUncheckedUpdateWithoutAvatorInput;
    where: UserWhereUniqueInput;
}

export class UserUpdateWithoutAvatorInput {
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    forms?: Nullable<FormUpdateManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerUpdateManyWithoutAuthorInput>;
    forums?: Nullable<ForumUpdateManyWithoutAuthorInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutCommentsInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUserInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    forms?: Nullable<FormUpdateManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerUpdateManyWithoutAuthorInput>;
    forums?: Nullable<ForumUpdateManyWithoutAuthorInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutDeviceInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUserInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    forms?: Nullable<FormUpdateManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerUpdateManyWithoutAuthorInput>;
    forums?: Nullable<ForumUpdateManyWithoutAuthorInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutFormsInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUserInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    forumAnswers?: Nullable<ForumAnswerUpdateManyWithoutAuthorInput>;
    forums?: Nullable<ForumUpdateManyWithoutAuthorInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutForumAnswersInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUserInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    forms?: Nullable<FormUpdateManyWithoutAuthorInput>;
    forums?: Nullable<ForumUpdateManyWithoutAuthorInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutForumsInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUserInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    forms?: Nullable<FormUpdateManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerUpdateManyWithoutAuthorInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutOrdersInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUserInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    forms?: Nullable<FormUpdateManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerUpdateManyWithoutAuthorInput>;
    forums?: Nullable<ForumUpdateManyWithoutAuthorInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutResponsesInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUserInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    forms?: Nullable<FormUpdateManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerUpdateManyWithoutAuthorInput>;
    forums?: Nullable<ForumUpdateManyWithoutAuthorInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutTransactionsInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUserInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    forms?: Nullable<FormUpdateManyWithoutAuthorInput>;
    forumAnswers?: Nullable<ForumAnswerUpdateManyWithoutAuthorInput>;
    forums?: Nullable<ForumUpdateManyWithoutAuthorInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    responses?: Nullable<ResponseUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpsertWithWhereUniqueWithoutAvatorInput {
    create: UserUncheckedCreateWithoutAvatorInput;
    update: UserUncheckedUpdateWithoutAvatorInput;
    where: UserWhereUniqueInput;
}

export class UserUpsertWithoutCommentsInput {
    create: UserUncheckedCreateWithoutCommentsInput;
    update: UserUncheckedUpdateWithoutCommentsInput;
}

export class UserUpsertWithoutDeviceInput {
    create: UserUncheckedCreateWithoutDeviceInput;
    update: UserUncheckedUpdateWithoutDeviceInput;
}

export class UserUpsertWithoutFormsInput {
    create: UserUncheckedCreateWithoutFormsInput;
    update: UserUncheckedUpdateWithoutFormsInput;
}

export class UserUpsertWithoutForumAnswersInput {
    create: UserUncheckedCreateWithoutForumAnswersInput;
    update: UserUncheckedUpdateWithoutForumAnswersInput;
}

export class UserUpsertWithoutForumsInput {
    create: UserUncheckedCreateWithoutForumsInput;
    update: UserUncheckedUpdateWithoutForumsInput;
}

export class UserUpsertWithoutOrdersInput {
    create: UserUncheckedCreateWithoutOrdersInput;
    update: UserUncheckedUpdateWithoutOrdersInput;
}

export class UserUpsertWithoutResponsesInput {
    create: UserUncheckedCreateWithoutResponsesInput;
    update: UserUncheckedUpdateWithoutResponsesInput;
}

export class UserUpsertWithoutTransactionsInput {
    create: UserUncheckedCreateWithoutTransactionsInput;
    update: UserUncheckedUpdateWithoutTransactionsInput;
}

export class UserWhereInput {
    AND?: Nullable<UserWhereInput[]>;
    NOT?: Nullable<UserWhereInput[]>;
    OR?: Nullable<UserWhereInput[]>;
    avator?: Nullable<AttachmentWhereInput>;
    avatorId?: Nullable<StringNullableFilter>;
    comments?: Nullable<CommentListRelationFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    device?: Nullable<DeviceWhereInput>;
    disabled?: Nullable<BoolFilter>;
    displayName?: Nullable<StringFilter>;
    email?: Nullable<StringFilter>;
    emailVerified?: Nullable<BoolFilter>;
    forms?: Nullable<FormListRelationFilter>;
    forumAnswers?: Nullable<ForumAnswerListRelationFilter>;
    forums?: Nullable<ForumListRelationFilter>;
    id?: Nullable<StringFilter>;
    orders?: Nullable<OrderListRelationFilter>;
    phoneNumber?: Nullable<StringNullableFilter>;
    responses?: Nullable<ResponseListRelationFilter>;
    role?: Nullable<EnumRoleFilter>;
    state?: Nullable<EnumStateFilter>;
    transactions?: Nullable<TransactionListRelationFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class UserWhereUniqueInput {
    email?: Nullable<string>;
    id?: Nullable<string>;
}

export class AggregateAnswer {
    _count?: Nullable<AnswerCountAggregateOutputType>;
    _max?: Nullable<AnswerMaxAggregateOutputType>;
    _min?: Nullable<AnswerMinAggregateOutputType>;
    count?: Nullable<AnswerCountAggregateOutputType>;
    max?: Nullable<AnswerMaxAggregateOutputType>;
    min?: Nullable<AnswerMinAggregateOutputType>;
}

export class AggregateAnswerResponse {
    data?: Nullable<AggregateAnswer>;
    message: string;
    status: boolean;
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

export class AggregateForm {
    _count?: Nullable<FormCountAggregateOutputType>;
    _max?: Nullable<FormMaxAggregateOutputType>;
    _min?: Nullable<FormMinAggregateOutputType>;
    count?: Nullable<FormCountAggregateOutputType>;
    max?: Nullable<FormMaxAggregateOutputType>;
    min?: Nullable<FormMinAggregateOutputType>;
}

export class AggregateFormResponse {
    data?: Nullable<AggregateForm>;
    message: string;
    status: boolean;
}

export class AggregateForum {
    _count?: Nullable<ForumCountAggregateOutputType>;
    _max?: Nullable<ForumMaxAggregateOutputType>;
    _min?: Nullable<ForumMinAggregateOutputType>;
    count?: Nullable<ForumCountAggregateOutputType>;
    max?: Nullable<ForumMaxAggregateOutputType>;
    min?: Nullable<ForumMinAggregateOutputType>;
}

export class AggregateForumAnswer {
    _count?: Nullable<ForumAnswerCountAggregateOutputType>;
    _max?: Nullable<ForumAnswerMaxAggregateOutputType>;
    _min?: Nullable<ForumAnswerMinAggregateOutputType>;
    count?: Nullable<ForumAnswerCountAggregateOutputType>;
    max?: Nullable<ForumAnswerMaxAggregateOutputType>;
    min?: Nullable<ForumAnswerMinAggregateOutputType>;
}

export class AggregateForumAnswerResponse {
    data?: Nullable<AggregateForumAnswer>;
    message: string;
    status: boolean;
}

export class AggregateForumResponse {
    data?: Nullable<AggregateForum>;
    message: string;
    status: boolean;
}

export class AggregateGrade {
    _avg?: Nullable<GradeAvgAggregateOutputType>;
    _count?: Nullable<GradeCountAggregateOutputType>;
    _max?: Nullable<GradeMaxAggregateOutputType>;
    _min?: Nullable<GradeMinAggregateOutputType>;
    _sum?: Nullable<GradeSumAggregateOutputType>;
    avg?: Nullable<GradeAvgAggregateOutputType>;
    count?: Nullable<GradeCountAggregateOutputType>;
    max?: Nullable<GradeMaxAggregateOutputType>;
    min?: Nullable<GradeMinAggregateOutputType>;
    sum?: Nullable<GradeSumAggregateOutputType>;
}

export class AggregateGradeResponse {
    data?: Nullable<AggregateGrade>;
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

export class AggregateQuestion {
    _avg?: Nullable<QuestionAvgAggregateOutputType>;
    _count?: Nullable<QuestionCountAggregateOutputType>;
    _max?: Nullable<QuestionMaxAggregateOutputType>;
    _min?: Nullable<QuestionMinAggregateOutputType>;
    _sum?: Nullable<QuestionSumAggregateOutputType>;
    avg?: Nullable<QuestionAvgAggregateOutputType>;
    count?: Nullable<QuestionCountAggregateOutputType>;
    max?: Nullable<QuestionMaxAggregateOutputType>;
    min?: Nullable<QuestionMinAggregateOutputType>;
    sum?: Nullable<QuestionSumAggregateOutputType>;
}

export class AggregateQuestionResponse {
    data?: Nullable<AggregateQuestion>;
    message: string;
    status: boolean;
}

export class AggregateRecommendation {
    _count?: Nullable<RecommendationCountAggregateOutputType>;
    _max?: Nullable<RecommendationMaxAggregateOutputType>;
    _min?: Nullable<RecommendationMinAggregateOutputType>;
    count?: Nullable<RecommendationCountAggregateOutputType>;
    max?: Nullable<RecommendationMaxAggregateOutputType>;
    min?: Nullable<RecommendationMinAggregateOutputType>;
}

export class AggregateRecommendationResponse {
    data?: Nullable<AggregateRecommendation>;
    message: string;
    status: boolean;
}

export class AggregateResponse {
    _count?: Nullable<ResponseCountAggregateOutputType>;
    _max?: Nullable<ResponseMaxAggregateOutputType>;
    _min?: Nullable<ResponseMinAggregateOutputType>;
    count?: Nullable<ResponseCountAggregateOutputType>;
    max?: Nullable<ResponseMaxAggregateOutputType>;
    min?: Nullable<ResponseMinAggregateOutputType>;
}

export class AggregateResponseResponse {
    data?: Nullable<AggregateResponse>;
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

export class AggregateTag {
    _count?: Nullable<TagCountAggregateOutputType>;
    _max?: Nullable<TagMaxAggregateOutputType>;
    _min?: Nullable<TagMinAggregateOutputType>;
    count?: Nullable<TagCountAggregateOutputType>;
    max?: Nullable<TagMaxAggregateOutputType>;
    min?: Nullable<TagMinAggregateOutputType>;
}

export class AggregateTagResponse {
    data?: Nullable<AggregateTag>;
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

export class Answer {
    attachments: Attachment[];
    booleanValue?: Nullable<boolean>;
    createdAt: DateTime;
    id: string;
    question: Question;
    questionId: string;
    response: Response;
    responseId: string;
    textValue?: Nullable<string>;
    updatedAt: DateTime;
}

export class AnswerBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class AnswerCountAggregateOutputType {
    _all: number;
    booleanValue: number;
    createdAt: number;
    id: number;
    questionId: number;
    responseId: number;
    textValue: number;
    updatedAt: number;
}

export class AnswerCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class AnswerListResponse {
    data?: Nullable<Answer[]>;
    message: string;
    status: boolean;
}

export class AnswerMaxAggregateOutputType {
    booleanValue?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    questionId?: Nullable<string>;
    responseId?: Nullable<string>;
    textValue?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class AnswerMinAggregateOutputType {
    booleanValue?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    questionId?: Nullable<string>;
    responseId?: Nullable<string>;
    textValue?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class AnswerResponse {
    data?: Nullable<Answer>;
    message: string;
    status: boolean;
}

export class Attachment {
    answer?: Nullable<Answer>;
    answerId?: Nullable<string>;
    attachmentType: AttachmentType;
    comment?: Nullable<Comment>;
    commentId?: Nullable<string>;
    createdAt: DateTime;
    downloadable: boolean;
    duration: number;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    form?: Nullable<Form>;
    formId?: Nullable<string>;
    forum?: Nullable<Forum>;
    forumAnswer?: Nullable<ForumAnswer>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    grade?: Nullable<Grade>;
    gradeId?: Nullable<string>;
    helpStep?: Nullable<HelpStep>;
    helpStepId?: Nullable<string>;
    id: string;
    mimetype?: Nullable<string>;
    orders: Order[];
    path: string;
    paymentMethods: PaymentMethod[];
    placement: string;
    question?: Nullable<Question>;
    questionId?: Nullable<string>;
    recommendation?: Nullable<Recommendation>;
    recommendationId?: Nullable<string>;
    response?: Nullable<Response>;
    responseId?: Nullable<string>;
    services: Service[];
    size: number;
    tags: Tag[];
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
    answerId: number;
    attachmentType: number;
    commentId: number;
    createdAt: number;
    downloadable: number;
    duration: number;
    encoding: number;
    filename: number;
    formId: number;
    forumAnswerId: number;
    forumId: number;
    gradeId: number;
    helpStepId: number;
    id: number;
    mimetype: number;
    path: number;
    placement: number;
    questionId: number;
    recommendationId: number;
    responseId: number;
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
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    gradeId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    path?: Nullable<string>;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    recommendationId?: Nullable<string>;
    responseId?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
}

export class AttachmentMinAggregateOutputType {
    answerId?: Nullable<string>;
    attachmentType?: Nullable<AttachmentType>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    formId?: Nullable<string>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    gradeId?: Nullable<string>;
    helpStepId?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    path?: Nullable<string>;
    placement?: Nullable<string>;
    questionId?: Nullable<string>;
    recommendationId?: Nullable<string>;
    responseId?: Nullable<string>;
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
    forum?: Nullable<Forum>;
    forumAnswer?: Nullable<ForumAnswer>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    id: string;
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
    forumAnswerId: number;
    forumId: number;
    id: number;
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
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentMinAggregateOutputType {
    authorId?: Nullable<string>;
    commentId?: Nullable<string>;
    commentsEnabled?: Nullable<boolean>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    forumAnswerId?: Nullable<string>;
    forumId?: Nullable<string>;
    id?: Nullable<string>;
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

export class Form {
    attachments: Attachment[];
    author: User;
    authorId: string;
    createdAt: DateTime;
    description?: Nullable<string>;
    grades: Grade[];
    id: string;
    responses: Response[];
    state: State;
    tagId?: Nullable<string>;
    tags: Tag[];
    title: string;
    updatedAt: DateTime;
}

export class FormBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class FormCountAggregateOutputType {
    _all: number;
    authorId: number;
    createdAt: number;
    description: number;
    id: number;
    state: number;
    tagId: number;
    title: number;
    updatedAt: number;
}

export class FormCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class FormListResponse {
    data?: Nullable<Form[]>;
    message: string;
    status: boolean;
}

export class FormMaxAggregateOutputType {
    authorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    tagId?: Nullable<string>;
    title?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class FormMinAggregateOutputType {
    authorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    tagId?: Nullable<string>;
    title?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class FormResponse {
    data?: Nullable<Form>;
    message: string;
    status: boolean;
}

export class Forum {
    attachments: Attachment[];
    author: User;
    authorId: string;
    comments: Comment[];
    commentsEnabled: boolean;
    createdAt: DateTime;
    description: string;
    forumAnswers: ForumAnswer[];
    id: string;
    question: string;
    state: State;
    tags: Tag[];
    type: ForumType;
    updatedAt: DateTime;
}

export class ForumAnswer {
    attachments: Attachment[];
    author: User;
    authorId: string;
    comments: Comment[];
    commentsEnabled: boolean;
    content: string;
    createdAt: DateTime;
    forum: Forum;
    forumId: string;
    id: string;
    state: State;
    updatedAt: DateTime;
}

export class ForumAnswerBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class ForumAnswerCountAggregateOutputType {
    _all: number;
    authorId: number;
    commentsEnabled: number;
    content: number;
    createdAt: number;
    forumId: number;
    id: number;
    state: number;
    updatedAt: number;
}

export class ForumAnswerCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class ForumAnswerListResponse {
    data?: Nullable<ForumAnswer[]>;
    message: string;
    status: boolean;
}

export class ForumAnswerMaxAggregateOutputType {
    authorId?: Nullable<string>;
    commentsEnabled?: Nullable<boolean>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    forumId?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumAnswerMinAggregateOutputType {
    authorId?: Nullable<string>;
    commentsEnabled?: Nullable<boolean>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    forumId?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumAnswerResponse {
    data?: Nullable<ForumAnswer>;
    message: string;
    status: boolean;
}

export class ForumBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class ForumCountAggregateOutputType {
    _all: number;
    authorId: number;
    commentsEnabled: number;
    createdAt: number;
    description: number;
    id: number;
    question: number;
    state: number;
    type: number;
    updatedAt: number;
}

export class ForumCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class ForumListResponse {
    data?: Nullable<Forum[]>;
    message: string;
    status: boolean;
}

export class ForumMaxAggregateOutputType {
    authorId?: Nullable<string>;
    commentsEnabled?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    question?: Nullable<string>;
    state?: Nullable<State>;
    type?: Nullable<ForumType>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumMinAggregateOutputType {
    authorId?: Nullable<string>;
    commentsEnabled?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    question?: Nullable<string>;
    state?: Nullable<State>;
    type?: Nullable<ForumType>;
    updatedAt?: Nullable<DateTime>;
}

export class ForumResponse {
    data?: Nullable<Forum>;
    message: string;
    status: boolean;
}

export class Grade {
    attachments: Attachment[];
    createdAt: DateTime;
    description: string;
    form?: Nullable<Form>;
    formId?: Nullable<string>;
    id: string;
    maxInclusive: boolean;
    maxValue?: Nullable<number>;
    minInclusive: boolean;
    minValue?: Nullable<number>;
    name: string;
    questions: Question[];
    recommendations: Recommendation[];
    responses: Response[];
    updatedAt: DateTime;
}

export class GradeAvgAggregateOutputType {
    maxValue?: Nullable<number>;
    minValue?: Nullable<number>;
}

export class GradeBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class GradeCountAggregateOutputType {
    _all: number;
    createdAt: number;
    description: number;
    formId: number;
    id: number;
    maxInclusive: number;
    maxValue: number;
    minInclusive: number;
    minValue: number;
    name: number;
    updatedAt: number;
}

export class GradeCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class GradeListResponse {
    data?: Nullable<Grade[]>;
    message: string;
    status: boolean;
}

export class GradeMaxAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    formId?: Nullable<string>;
    id?: Nullable<string>;
    maxInclusive?: Nullable<boolean>;
    maxValue?: Nullable<number>;
    minInclusive?: Nullable<boolean>;
    minValue?: Nullable<number>;
    name?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class GradeMinAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    formId?: Nullable<string>;
    id?: Nullable<string>;
    maxInclusive?: Nullable<boolean>;
    maxValue?: Nullable<number>;
    minInclusive?: Nullable<boolean>;
    minValue?: Nullable<number>;
    name?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class GradeResponse {
    data?: Nullable<Grade>;
    message: string;
    status: boolean;
}

export class GradeSumAggregateOutputType {
    maxValue?: Nullable<number>;
    minValue?: Nullable<number>;
}

export class Help {
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
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    topic?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class HelpMinAggregateOutputType {
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
    abstract createOneForm(data: FormCreateInput): FormResponse | Promise<FormResponse>;

    abstract createOneForum(data: ForumCreateInput): ForumResponse | Promise<ForumResponse>;

    abstract createOneHelp(data: HelpCreateInput): HelpResponse | Promise<HelpResponse>;

    abstract createOneOrder(data: OrderCreateInput): OrderResponse | Promise<OrderResponse>;

    abstract createOnePaymentMethod(data: PaymentMethodCreateInput): PaymentMethodResponse | Promise<PaymentMethodResponse>;

    abstract createOneResponse(data: ResponseCreateInput): ResponseResponse | Promise<ResponseResponse>;

    abstract createOneService(data: ServiceCreateInput): ServiceResponse | Promise<ServiceResponse>;

    abstract createOneTag(data: TagCreateInput): TagResponse | Promise<TagResponse>;

    abstract createOneUser(data: UserCreateInput): UserResponse | Promise<UserResponse>;

    abstract paybill(data?: Nullable<PaybillRequest>): PaybillResponse | Promise<PaybillResponse>;

    abstract recoverAccount(email: string): AuthResult | Promise<AuthResult>;

    abstract registerDevice(data: RegisterDeviceInput): DeviceResponse | Promise<DeviceResponse>;

    abstract signin(credentials: AuthInput): AuthResult | Promise<AuthResult>;

    abstract signout(): SignOutResult | Promise<SignOutResult>;

    abstract signup(credentials: SignupInput): AuthResult | Promise<AuthResult>;

    abstract updateOneForm(data: FormUpdateInput, where: FormWhereUniqueInput): FormResponse | Promise<FormResponse>;

    abstract updateOneForum(data: ForumUpdateInput, where: ForumWhereUniqueInput): ForumResponse | Promise<ForumResponse>;

    abstract updateOneHelp(data: HelpUpdateInput, where: HelpWhereUniqueInput): HelpResponse | Promise<HelpResponse>;

    abstract updateOneOrder(data: OrderUpdateInput, where: OrderWhereUniqueInput): OrderResponse | Promise<OrderResponse>;

    abstract updateOnePaymentMethod(data: PaymentMethodUpdateInput, where: PaymentMethodWhereUniqueInput): PaymentMethodResponse | Promise<PaymentMethodResponse>;

    abstract updateOneResponse(data: ResponseUpdateInput, where: ResponseWhereUniqueInput): ResponseResponse | Promise<ResponseResponse>;

    abstract updateOneService(data: ServiceUpdateInput, where: ServiceWhereUniqueInput): ServiceResponse | Promise<ServiceResponse>;

    abstract updateOneTag(data: TagUpdateInput, where: TagWhereUniqueInput): TagResponse | Promise<TagResponse>;

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
    abstract findManyForm(cursor?: Nullable<FormWhereUniqueInput>, distinct?: Nullable<FormScalarFieldEnum[]>, orderBy?: Nullable<FormOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<FormWhereInput>): FormListResponse | Promise<FormListResponse>;

    abstract findManyForum(cursor?: Nullable<ForumWhereUniqueInput>, distinct?: Nullable<ForumScalarFieldEnum[]>, orderBy?: Nullable<ForumOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<ForumWhereInput>): ForumListResponse | Promise<ForumListResponse>;

    abstract findManyHelp(cursor?: Nullable<HelpWhereUniqueInput>, distinct?: Nullable<HelpScalarFieldEnum[]>, orderBy?: Nullable<HelpOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<HelpWhereInput>): HelpListResponse | Promise<HelpListResponse>;

    abstract findManyOrder(cursor?: Nullable<OrderWhereUniqueInput>, distinct?: Nullable<OrderScalarFieldEnum[]>, orderBy?: Nullable<OrderOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<OrderWhereInput>): OrderListResponse | Promise<OrderListResponse>;

    abstract findManyPaymentMethod(cursor?: Nullable<PaymentMethodWhereUniqueInput>, distinct?: Nullable<PaymentMethodScalarFieldEnum[]>, orderBy?: Nullable<PaymentMethodOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<PaymentMethodWhereInput>): PaymentMethodListResponse | Promise<PaymentMethodListResponse>;

    abstract findManyResponse(cursor?: Nullable<ResponseWhereUniqueInput>, distinct?: Nullable<ResponseScalarFieldEnum[]>, orderBy?: Nullable<ResponseOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<ResponseWhereInput>): ResponseListResponse | Promise<ResponseListResponse>;

    abstract findManyService(cursor?: Nullable<ServiceWhereUniqueInput>, distinct?: Nullable<ServiceScalarFieldEnum[]>, orderBy?: Nullable<ServiceOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<ServiceWhereInput>): ServiceListResponse | Promise<ServiceListResponse>;

    abstract findManyTag(cursor?: Nullable<TagWhereUniqueInput>, distinct?: Nullable<TagScalarFieldEnum[]>, orderBy?: Nullable<TagOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<TagWhereInput>): TagListResponse | Promise<TagListResponse>;

    abstract findManyUser(cursor?: Nullable<UserWhereUniqueInput>, distinct?: Nullable<UserScalarFieldEnum[]>, orderBy?: Nullable<UserOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<UserWhereInput>): UserListResponse | Promise<UserListResponse>;

    abstract findUniqueForm(where: FormWhereUniqueInput): FormResponse | Promise<FormResponse>;

    abstract findUniqueForum(where: ForumWhereUniqueInput): ForumResponse | Promise<ForumResponse>;

    abstract findUniqueHelp(where: HelpWhereUniqueInput): HelpResponse | Promise<HelpResponse>;

    abstract findUniqueOrder(where: OrderWhereUniqueInput): OrderResponse | Promise<OrderResponse>;

    abstract findUniquePaymentMethod(where: PaymentMethodWhereUniqueInput): PaymentMethodResponse | Promise<PaymentMethodResponse>;

    abstract findUniqueResponse(where: ResponseWhereUniqueInput): ResponseResponse | Promise<ResponseResponse>;

    abstract findUniqueService(where: ServiceWhereUniqueInput): ServiceResponse | Promise<ServiceResponse>;

    abstract findUniqueTag(where: TagWhereUniqueInput): TagResponse | Promise<TagResponse>;

    abstract findUniqueUser(where: UserWhereUniqueInput): UserResponse | Promise<UserResponse>;

    abstract version(): Nullable<string> | Promise<Nullable<string>>;
}

export class Question {
    answers: Answer[];
    attachments: Attachment[];
    createdAt: DateTime;
    grade: Grade;
    gradeId: string;
    id: string;
    instruction?: Nullable<string>;
    question: string;
    questionNumber: number;
    questionType: QuestionType;
    updatedAt: DateTime;
    weight: number;
}

export class QuestionAvgAggregateOutputType {
    questionNumber?: Nullable<number>;
    weight?: Nullable<number>;
}

export class QuestionBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class QuestionCountAggregateOutputType {
    _all: number;
    createdAt: number;
    gradeId: number;
    id: number;
    instruction: number;
    question: number;
    questionNumber: number;
    questionType: number;
    updatedAt: number;
    weight: number;
}

export class QuestionCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class QuestionListResponse {
    data?: Nullable<Question[]>;
    message: string;
    status: boolean;
}

export class QuestionMaxAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    gradeId?: Nullable<string>;
    id?: Nullable<string>;
    instruction?: Nullable<string>;
    question?: Nullable<string>;
    questionNumber?: Nullable<number>;
    questionType?: Nullable<QuestionType>;
    updatedAt?: Nullable<DateTime>;
    weight?: Nullable<number>;
}

export class QuestionMinAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    gradeId?: Nullable<string>;
    id?: Nullable<string>;
    instruction?: Nullable<string>;
    question?: Nullable<string>;
    questionNumber?: Nullable<number>;
    questionType?: Nullable<QuestionType>;
    updatedAt?: Nullable<DateTime>;
    weight?: Nullable<number>;
}

export class QuestionResponse {
    data?: Nullable<Question>;
    message: string;
    status: boolean;
}

export class QuestionSumAggregateOutputType {
    questionNumber?: Nullable<number>;
    weight?: Nullable<number>;
}

export class Recommendation {
    attachments: Attachment[];
    content: string;
    createdAt: DateTime;
    grade?: Nullable<Grade>;
    gradeId?: Nullable<string>;
    id: string;
    type: RecommendationType;
    updatedAt: DateTime;
}

export class RecommendationBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class RecommendationCountAggregateOutputType {
    _all: number;
    content: number;
    createdAt: number;
    gradeId: number;
    id: number;
    type: number;
    updatedAt: number;
}

export class RecommendationCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class RecommendationListResponse {
    data?: Nullable<Recommendation[]>;
    message: string;
    status: boolean;
}

export class RecommendationMaxAggregateOutputType {
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    gradeId?: Nullable<string>;
    id?: Nullable<string>;
    type?: Nullable<RecommendationType>;
    updatedAt?: Nullable<DateTime>;
}

export class RecommendationMinAggregateOutputType {
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    gradeId?: Nullable<string>;
    id?: Nullable<string>;
    type?: Nullable<RecommendationType>;
    updatedAt?: Nullable<DateTime>;
}

export class RecommendationResponse {
    data?: Nullable<Recommendation>;
    message: string;
    status: boolean;
}

export class Response {
    answers: Answer[];
    attachments: Attachment[];
    author?: Nullable<User>;
    authorId?: Nullable<string>;
    createdAt: DateTime;
    form: Form;
    formId: string;
    grade: Grade;
    gradeId: string;
    id: string;
    state: State;
    updatedAt: DateTime;
}

export class ResponseBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class ResponseCountAggregateOutputType {
    _all: number;
    authorId: number;
    createdAt: number;
    formId: number;
    gradeId: number;
    id: number;
    state: number;
    updatedAt: number;
}

export class ResponseCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class ResponseListResponse {
    data?: Nullable<Response[]>;
    message: string;
    status: boolean;
}

export class ResponseMaxAggregateOutputType {
    authorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    formId?: Nullable<string>;
    gradeId?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ResponseMinAggregateOutputType {
    authorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    formId?: Nullable<string>;
    gradeId?: Nullable<string>;
    id?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ResponseResponse {
    data?: Nullable<Response>;
    message: string;
    status: boolean;
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
    createdAt: DateTime;
    description?: Nullable<string>;
    id: string;
    image: Attachment;
    imageId: string;
    name: string;
    orders: Order[];
    price: number;
    state: State;
    updatedAt: DateTime;
    value: number;
}

export class ServiceAvgAggregateOutputType {
    price?: Nullable<number>;
    value?: Nullable<number>;
}

export class ServiceBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class ServiceCountAggregateOutputType {
    _all: number;
    createdAt: number;
    description: number;
    id: number;
    imageId: number;
    name: number;
    price: number;
    state: number;
    updatedAt: number;
    value: number;
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
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId?: Nullable<string>;
    name?: Nullable<string>;
    price?: Nullable<number>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ServiceMinAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId?: Nullable<string>;
    name?: Nullable<string>;
    price?: Nullable<number>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ServiceResponse {
    data?: Nullable<Service>;
    message: string;
    status: boolean;
}

export class ServiceSumAggregateOutputType {
    price?: Nullable<number>;
    value?: Nullable<number>;
}

export class SignOutResult {
    message?: Nullable<string>;
    status?: Nullable<boolean>;
}

export class Tag {
    attachmentId?: Nullable<string>;
    createdAt: DateTime;
    description?: Nullable<string>;
    forms: Form[];
    forums: Forum[];
    id: string;
    image?: Nullable<Attachment>;
    name: string;
    state: State;
    updatedAt: DateTime;
}

export class TagBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class TagCountAggregateOutputType {
    _all: number;
    attachmentId: number;
    createdAt: number;
    description: number;
    id: number;
    name: number;
    state: number;
    updatedAt: number;
}

export class TagCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class TagListResponse {
    data?: Nullable<Tag[]>;
    message: string;
    status: boolean;
}

export class TagMaxAggregateOutputType {
    attachmentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class TagMinAggregateOutputType {
    attachmentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class TagResponse {
    data?: Nullable<Tag>;
    message: string;
    status: boolean;
}

export class Transaction {
    createdAt: DateTime;
    id: string;
    initiator: User;
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
    userId: string;
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
    userId: number;
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
    userId?: Nullable<string>;
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
    userId?: Nullable<string>;
}

export class TransactionResponse {
    data?: Nullable<Transaction>;
    message: string;
    status: boolean;
}

export class User {
    avator?: Nullable<Attachment>;
    avatorId?: Nullable<string>;
    comments: Comment[];
    createdAt: DateTime;
    device?: Nullable<Device>;
    disabled: boolean;
    displayName: string;
    email: string;
    emailVerified: boolean;
    forms: Form[];
    forumAnswers: ForumAnswer[];
    forums: Forum[];
    id: string;
    lastSeen?: Nullable<DateTime>;
    orders: Order[];
    phoneNumber?: Nullable<string>;
    responses: Response[];
    role: Role;
    state: State;
    transactions: Transaction[];
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
