
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

import { FileUpload } from 'graphql-upload';

export enum AbuseRecordTypeScalarFieldEnum {
    id = "id",
    name = "name"
}

export enum AbuseReportScalarFieldEnum {
    authorId = "authorId",
    businessId = "businessId",
    commentId = "commentId",
    createdAt = "createdAt",
    id = "id",
    number = "number",
    orderId = "orderId",
    recordStatus = "recordStatus",
    report = "report",
    reviewId = "reviewId",
    serviceId = "serviceId",
    state = "state",
    typeId = "typeId",
    updatedAt = "updatedAt",
    userId = "userId"
}

export enum AbuseReportStatus {
    MITIGATED = "MITIGATED",
    PROCESSING = "PROCESSING",
    SUBMITED = "SUBMITED"
}

export enum AccountStatus {
    DELETED = "DELETED",
    DISABLED = "DISABLED",
    ENABLED = "ENABLED"
}

export enum AddressType {
    administrative_area_level_1 = "administrative_area_level_1",
    administrative_area_level_2 = "administrative_area_level_2",
    administrative_area_level_3 = "administrative_area_level_3",
    administrative_area_level_4 = "administrative_area_level_4",
    administrative_area_level_5 = "administrative_area_level_5",
    airport = "airport",
    bus_station = "bus_station",
    church = "church",
    colloquial_area = "colloquial_area",
    country = "country",
    establishment = "establishment",
    floor = "floor",
    food = "food",
    intersection = "intersection",
    locality = "locality",
    lodging = "lodging",
    natural_feature = "natural_feature",
    neighborhood = "neighborhood",
    park = "park",
    place_of_worship = "place_of_worship",
    plus_code = "plus_code",
    point_of_interest = "point_of_interest",
    political = "political",
    post_box = "post_box",
    postal_code = "postal_code",
    postal_town = "postal_town",
    premise = "premise",
    room = "room",
    route = "route",
    store = "store",
    street_address = "street_address",
    street_number = "street_number",
    sublocality = "sublocality",
    sublocality_level_1 = "sublocality_level_1",
    sublocality_level_2 = "sublocality_level_2",
    sublocality_level_3 = "sublocality_level_3",
    sublocality_level_4 = "sublocality_level_4",
    sublocality_level_5 = "sublocality_level_5",
    subpremise = "subpremise",
    train_station = "train_station",
    transit_station = "transit_station",
    ward = "ward"
}

export enum AttachmentScalarFieldEnum {
    attachmentType = "attachmentType",
    businessId = "businessId",
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
    recordStatus = "recordStatus",
    reviewId = "reviewId",
    size = "size",
    updatedAt = "updatedAt",
    userId = "userId"
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

export enum BusinessMode {
    MOBILE_MODE = "MOBILE_MODE",
    OFFICE_MODE = "OFFICE_MODE"
}

export enum BusinessScalarFieldEnum {
    about = "about",
    businessName = "businessName",
    coverId = "coverId",
    createdAt = "createdAt",
    id = "id",
    locationId = "locationId",
    mode = "mode",
    ownerId = "ownerId",
    recordStatus = "recordStatus",
    state = "state",
    updatedAt = "updatedAt"
}

export enum BusinessStatus {
    OFFLINE = "OFFLINE",
    ONLINE = "ONLINE"
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

export enum CategoryScalarFieldEnum {
    createdAt = "createdAt",
    description = "description",
    id = "id",
    name = "name",
    pictureId = "pictureId",
    updatedAt = "updatedAt"
}

export enum CommentScalarFieldEnum {
    authorId = "authorId",
    commentId = "commentId",
    commentsEnabled = "commentsEnabled",
    content = "content",
    createdAt = "createdAt",
    id = "id",
    recordStatus = "recordStatus",
    reviewId = "reviewId",
    updatedAt = "updatedAt"
}

export enum DeviceScalarFieldEnum {
    fcm_id = "fcm_id",
    id = "id",
    recordStatus = "recordStatus",
    type = "type",
    userId = "userId"
}

export enum DirectionsReponseStatus {
    INVALID_REQUEST = "INVALID_REQUEST",
    MAX_ROUTE_LENGTH_EXCEEDED = "MAX_ROUTE_LENGTH_EXCEEDED",
    MAX_WAYPOINTS_EXCEEDED = "MAX_WAYPOINTS_EXCEEDED",
    NOT_FOUND = "NOT_FOUND",
    OK = "OK",
    OVER_DAILY_LIMIT = "OVER_DAILY_LIMIT",
    OVER_QUERY_LIMIT = "OVER_QUERY_LIMIT",
    REQUEST_DENIED = "REQUEST_DENIED",
    UNKNOWN_ERROR = "UNKNOWN_ERROR",
    ZERO_RESULTS = "ZERO_RESULTS"
}

export enum FavoriteRecordTypeScalarFieldEnum {
    id = "id",
    name = "name"
}

export enum FavoriteScalarFieldEnum {
    authorId = "authorId",
    businessId = "businessId",
    commentId = "commentId",
    createdAt = "createdAt",
    id = "id",
    orderId = "orderId",
    recordStatus = "recordStatus",
    reviewId = "reviewId",
    serviceId = "serviceId",
    typeId = "typeId",
    updatedAt = "updatedAt",
    userId = "userId"
}

export enum Gender {
    FEMALE = "FEMALE",
    MALE = "MALE",
    UNSPECIFIED = "UNSPECIFIED"
}

export enum GeocodedWaypointStatus {
    OK = "OK",
    ZERO_RESULTS = "ZERO_RESULTS"
}

export enum HelpScalarFieldEnum {
    audience = "audience",
    createdAt = "createdAt",
    description = "description",
    id = "id",
    recordStatus = "recordStatus",
    topic = "topic",
    updatedAt = "updatedAt"
}

export enum HelpStepScalarFieldEnum {
    createdAt = "createdAt",
    description = "description",
    helpId = "helpId",
    id = "id",
    recordStatus = "recordStatus",
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

export enum Language {
    ar = "ar",
    be = "be",
    bg = "bg",
    bn = "bn",
    bs = "bs",
    ca = "ca",
    cs = "cs",
    cy = "cy",
    da = "da",
    de = "de",
    el = "el",
    en = "en",
    en_GB = "en_GB",
    en_US = "en_US",
    es = "es",
    es_419 = "es_419",
    et = "et",
    eu = "eu",
    fa = "fa",
    fi = "fi",
    fr = "fr",
    fr_CA = "fr_CA",
    gl = "gl",
    gu = "gu",
    he = "he",
    hi = "hi",
    hr = "hr",
    hu = "hu",
    id = "id",
    is = "is",
    it = "it",
    iw = "iw",
    ja = "ja",
    kn = "kn",
    ko = "ko",
    lt = "lt",
    lv = "lv",
    ml = "ml",
    mr = "mr",
    ms = "ms",
    nl = "nl",
    no = "no",
    pl = "pl",
    pt = "pt",
    pt_BR = "pt_BR",
    ro = "ro",
    ru = "ru",
    sk = "sk",
    sl = "sl",
    sr = "sr",
    sv = "sv",
    sw = "sw",
    ta = "ta",
    te = "te",
    th = "th",
    tl = "tl",
    tr = "tr",
    uk = "uk",
    vi = "vi",
    zh_CN = "zh_CN",
    zh_TW = "zh_TW"
}

export enum LocationScalarFieldEnum {
    createdAt = "createdAt",
    id = "id",
    lat = "lat",
    lon = "lon",
    name = "name",
    recordStatus = "recordStatus",
    updatedAt = "updatedAt"
}

export enum LocationType {
    APPROXIMATE = "APPROXIMATE",
    GEOMETRIC_CENTER = "GEOMETRIC_CENTER",
    RANGE_INTERPOLATED = "RANGE_INTERPOLATED",
    ROOFTOP = "ROOFTOP"
}

export enum Maneuver {
    ferry = "ferry",
    ferry_train = "ferry_train",
    fork_left = "fork_left",
    fork_right = "fork_right",
    merge = "merge",
    ramp_left = "ramp_left",
    ramp_right = "ramp_right",
    roundabout_left = "roundabout_left",
    roundabout_right = "roundabout_right",
    straight = "straight",
    turn_left = "turn_left",
    turn_right = "turn_right",
    turn_sharp_left = "turn_sharp_left",
    turn_sharp_right = "turn_sharp_right",
    turn_slight_left = "turn_slight_left",
    turn_slight_right = "turn_slight_right",
    uturn_left = "uturn_left",
    uturn_right = "uturn_right"
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
    recordStatus = "recordStatus",
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
    businessId = "businessId",
    createdAt = "createdAt",
    id = "id",
    notes = "notes",
    orderStatus = "orderStatus",
    ownerId = "ownerId",
    quantity = "quantity",
    receiptId = "receiptId",
    recordStatus = "recordStatus",
    serviceId = "serviceId",
    updatedAt = "updatedAt"
}

export enum OrderStatus {
    ACCEPTED = "ACCEPTED",
    PROCESSED = "PROCESSED",
    REJECTED = "REJECTED",
    WAITING = "WAITING"
}

export enum PaymentMethodScalarFieldEnum {
    attachmentId = "attachmentId",
    code = "code",
    createdAt = "createdAt",
    description = "description",
    id = "id",
    name = "name",
    recordStatus = "recordStatus",
    state = "state",
    updatedAt = "updatedAt"
}

export enum PaymentMethodStatus {
    DISABLED = "DISABLED",
    ENABLED = "ENABLED"
}

export enum PaymentStatus {
    FAILED = "FAILED",
    PENDING = "PENDING",
    SUCCESS = "SUCCESS"
}

export enum QueryMode {
    "default" = "default",
    insensitive = "insensitive"
}

export enum RecordStatus {
    ACTIVE = "ACTIVE",
    DELETED = "DELETED",
    DRAFT = "DRAFT",
    INACTIVE = "INACTIVE"
}

export enum ReverseGeocodingLocationType {
    APPROXIMATE = "APPROXIMATE",
    GEOMETRIC_CENTER = "GEOMETRIC_CENTER",
    RANGE_INTERPOLATED = "RANGE_INTERPOLATED",
    ROOFTOP = "ROOFTOP"
}

export enum ReviewScalarFieldEnum {
    authorId = "authorId",
    content = "content",
    createdAt = "createdAt",
    id = "id",
    recordStatus = "recordStatus",
    revieweeId = "revieweeId",
    updatedAt = "updatedAt",
    value = "value"
}

export enum Role {
    ADMIN = "ADMIN",
    BUSINESS = "BUSINESS",
    MODERATOR = "MODERATOR",
    USER = "USER"
}

export enum SelcomDisbursementScalarFieldEnum {
    amount = "amount",
    createdAt = "createdAt",
    id = "id",
    recordStatus = "recordStatus",
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
    recordStatus = "recordStatus",
    reference = "reference",
    resultCode = "resultCode",
    state = "state",
    status = "status",
    transId = "transId",
    updatedAt = "updatedAt",
    utilityref = "utilityref",
    validation = "validation"
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
    businessId = "businessId",
    categoryId = "categoryId",
    createdAt = "createdAt",
    currency = "currency",
    description = "description",
    id = "id",
    imageId = "imageId",
    metadata = "metadata",
    name = "name",
    price = "price",
    recordStatus = "recordStatus",
    updatedAt = "updatedAt"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum TrafficModel {
    best_guess = "best_guess",
    optimistic = "optimistic",
    pessimistic = "pessimistic"
}

export enum TransactionScalarFieldEnum {
    createdAt = "createdAt",
    id = "id",
    mpesaPaymentId = "mpesaPaymentId",
    orderId = "orderId",
    paymentMethodId = "paymentMethodId",
    recordStatus = "recordStatus",
    selcomDisbursementId = "selcomDisbursementId",
    selcomPaymentId = "selcomPaymentId",
    state = "state",
    type = "type",
    updatedAt = "updatedAt"
}

export enum TransactionStatus {
    FAILED = "FAILED",
    PENDING = "PENDING",
    SUCCESS = "SUCCESS"
}

export enum TransactionType {
    DISBURSEMENT = "DISBURSEMENT",
    PAYMENT = "PAYMENT"
}

export enum TransitMode {
    bus = "bus",
    rail = "rail",
    subway = "subway",
    train = "train",
    tram = "tram"
}

export enum TransitRoutingPreference {
    fewer_transfers = "fewer_transfers",
    less_walking = "less_walking"
}

export enum TravelMode {
    bicycling = "bicycling",
    driving = "driving",
    transit = "transit",
    walking = "walking"
}

export enum TravelRestriction {
    ferries = "ferries",
    highways = "highways",
    indoor = "indoor",
    tolls = "tolls",
    traffic = "traffic"
}

export enum UnitSystem {
    IMPERIAL = "IMPERIAL",
    METRIC = "METRIC"
}

export enum UserScalarFieldEnum {
    avatorId = "avatorId",
    createdAt = "createdAt",
    dateOfBirth = "dateOfBirth",
    disabled = "disabled",
    displayName = "displayName",
    email = "email",
    emailVerified = "emailVerified",
    gender = "gender",
    id = "id",
    locationId = "locationId",
    phoneNumber = "phoneNumber",
    recordStatus = "recordStatus",
    role = "role",
    state = "state",
    updatedAt = "updatedAt"
}

export enum VehicleType {
    BUS = "BUS",
    CABLE_CAR = "CABLE_CAR",
    COMMUTER_TRAIN = "COMMUTER_TRAIN",
    FERRY = "FERRY",
    FUNICULAR = "FUNICULAR",
    GONDOLA_LIFT = "GONDOLA_LIFT",
    HEAVY_RAIL = "HEAVY_RAIL",
    HIGH_SPEED_TRAIN = "HIGH_SPEED_TRAIN",
    INTERCITY_BUS = "INTERCITY_BUS",
    METRO_RAIL = "METRO_RAIL",
    MONORAIL = "MONORAIL",
    OTHER = "OTHER",
    RAIL = "RAIL",
    SHARE_TAXI = "SHARE_TAXI",
    SUBWAY = "SUBWAY",
    TRAM = "TRAM",
    TROLLEYBUS = "TROLLEYBUS"
}

export class AbuseRecordTypeCreateInput {
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutTypeInput>;
    id?: Nullable<string>;
    name: string;
}

export class AbuseRecordTypeCreateManyInput {
    id?: Nullable<string>;
    name: string;
}

export class AbuseRecordTypeCreateNestedOneWithoutAbuseReportsInput {
    connect?: Nullable<AbuseRecordTypeWhereUniqueInput>;
    connectOrCreate?: Nullable<AbuseRecordTypeCreateOrConnectWithoutAbuseReportsInput>;
    create?: Nullable<AbuseRecordTypeUncheckedCreateWithoutAbuseReportsInput>;
}

export class AbuseRecordTypeCreateOrConnectWithoutAbuseReportsInput {
    create: AbuseRecordTypeUncheckedCreateWithoutAbuseReportsInput;
    where: AbuseRecordTypeWhereUniqueInput;
}

export class AbuseRecordTypeCreateWithoutAbuseReportsInput {
    id?: Nullable<string>;
    name: string;
}

export class AbuseRecordTypeOrderByInput {
    id?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
}

export class AbuseRecordTypeRelationFilter {
    is?: Nullable<AbuseRecordTypeWhereInput>;
    isNot?: Nullable<AbuseRecordTypeWhereInput>;
}

export class AbuseRecordTypeScalarWhereWithAggregatesInput {
    AND?: Nullable<AbuseRecordTypeScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<AbuseRecordTypeScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<AbuseRecordTypeScalarWhereWithAggregatesInput[]>;
    id?: Nullable<StringWithAggregatesFilter>;
    name?: Nullable<StringWithAggregatesFilter>;
}

export class AbuseRecordTypeUncheckedCreateInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutTypeInput>;
    id?: Nullable<string>;
    name: string;
}

export class AbuseRecordTypeUncheckedCreateWithoutAbuseReportsInput {
    id?: Nullable<string>;
    name: string;
}

export class AbuseRecordTypeUncheckedUpdateInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutTypeInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
}

export class AbuseRecordTypeUncheckedUpdateManyInput {
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
}

export class AbuseRecordTypeUncheckedUpdateWithoutAbuseReportsInput {
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
}

export class AbuseRecordTypeUpdateInput {
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutTypeInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
}

export class AbuseRecordTypeUpdateManyMutationInput {
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
}

export class AbuseRecordTypeUpdateOneRequiredWithoutAbuseReportsInput {
    connect?: Nullable<AbuseRecordTypeWhereUniqueInput>;
    connectOrCreate?: Nullable<AbuseRecordTypeCreateOrConnectWithoutAbuseReportsInput>;
    create?: Nullable<AbuseRecordTypeUncheckedCreateWithoutAbuseReportsInput>;
    update?: Nullable<AbuseRecordTypeUncheckedUpdateWithoutAbuseReportsInput>;
    upsert?: Nullable<AbuseRecordTypeUpsertWithoutAbuseReportsInput>;
}

export class AbuseRecordTypeUpdateWithoutAbuseReportsInput {
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
}

export class AbuseRecordTypeUpsertWithoutAbuseReportsInput {
    create: AbuseRecordTypeUncheckedCreateWithoutAbuseReportsInput;
    update: AbuseRecordTypeUncheckedUpdateWithoutAbuseReportsInput;
}

export class AbuseRecordTypeWhereInput {
    AND?: Nullable<AbuseRecordTypeWhereInput[]>;
    NOT?: Nullable<AbuseRecordTypeWhereInput[]>;
    OR?: Nullable<AbuseRecordTypeWhereInput[]>;
    abuseReports?: Nullable<AbuseReportListRelationFilter>;
    id?: Nullable<StringFilter>;
    name?: Nullable<StringFilter>;
}

export class AbuseRecordTypeWhereUniqueInput {
    id?: Nullable<string>;
}

export class AbuseReportCreateInput {
    Business?: Nullable<BusinessCreateNestedOneWithoutAbuseReportsInput>;
    author: UserCreateNestedOneWithoutAbuseReportedInput;
    comments?: Nullable<CommentCreateNestedOneWithoutAbuseReportsInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    orders?: Nullable<OrderCreateNestedOneWithoutAbuseReportsInput>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    reviews?: Nullable<ReviewCreateNestedOneWithoutAbuseReportsInput>;
    service?: Nullable<ServiceCreateNestedOneWithoutAbuseReportsInput>;
    state?: Nullable<AbuseReportStatus>;
    type: AbuseRecordTypeCreateNestedOneWithoutAbuseReportsInput;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedOneWithoutAbuseReportsInput>;
}

export class AbuseReportCreateManyAuthorInput {
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    state?: Nullable<AbuseReportStatus>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class AbuseReportCreateManyAuthorInputEnvelope {
    data: AbuseReportCreateManyAuthorInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class AbuseReportCreateManyBusinessInput {
    authorId: string;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    state?: Nullable<AbuseReportStatus>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class AbuseReportCreateManyBusinessInputEnvelope {
    data: AbuseReportCreateManyBusinessInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class AbuseReportCreateManyCommentsInput {
    authorId: string;
    businessId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    state?: Nullable<AbuseReportStatus>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class AbuseReportCreateManyCommentsInputEnvelope {
    data: AbuseReportCreateManyCommentsInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class AbuseReportCreateManyInput {
    authorId: string;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    state?: Nullable<AbuseReportStatus>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class AbuseReportCreateManyOrdersInput {
    authorId: string;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    state?: Nullable<AbuseReportStatus>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class AbuseReportCreateManyOrdersInputEnvelope {
    data: AbuseReportCreateManyOrdersInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class AbuseReportCreateManyReviewsInput {
    authorId: string;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    serviceId?: Nullable<string>;
    state?: Nullable<AbuseReportStatus>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class AbuseReportCreateManyReviewsInputEnvelope {
    data: AbuseReportCreateManyReviewsInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class AbuseReportCreateManyServiceInput {
    authorId: string;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    reviewId?: Nullable<string>;
    state?: Nullable<AbuseReportStatus>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class AbuseReportCreateManyServiceInputEnvelope {
    data: AbuseReportCreateManyServiceInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class AbuseReportCreateManyTypeInput {
    authorId: string;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    state?: Nullable<AbuseReportStatus>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class AbuseReportCreateManyTypeInputEnvelope {
    data: AbuseReportCreateManyTypeInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class AbuseReportCreateManyUsersInput {
    authorId: string;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    state?: Nullable<AbuseReportStatus>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
}

export class AbuseReportCreateManyUsersInputEnvelope {
    data: AbuseReportCreateManyUsersInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class AbuseReportCreateNestedManyWithoutAuthorInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<AbuseReportCreateWithoutAuthorInput[]>;
    createMany?: Nullable<AbuseReportCreateManyAuthorInputEnvelope>;
}

export class AbuseReportCreateNestedManyWithoutBusinessInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutBusinessInput[]>;
    create?: Nullable<AbuseReportCreateWithoutBusinessInput[]>;
    createMany?: Nullable<AbuseReportCreateManyBusinessInputEnvelope>;
}

export class AbuseReportCreateNestedManyWithoutCommentsInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutCommentsInput[]>;
    create?: Nullable<AbuseReportCreateWithoutCommentsInput[]>;
    createMany?: Nullable<AbuseReportCreateManyCommentsInputEnvelope>;
}

export class AbuseReportCreateNestedManyWithoutOrdersInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutOrdersInput[]>;
    create?: Nullable<AbuseReportCreateWithoutOrdersInput[]>;
    createMany?: Nullable<AbuseReportCreateManyOrdersInputEnvelope>;
}

export class AbuseReportCreateNestedManyWithoutReviewsInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutReviewsInput[]>;
    create?: Nullable<AbuseReportCreateWithoutReviewsInput[]>;
    createMany?: Nullable<AbuseReportCreateManyReviewsInputEnvelope>;
}

export class AbuseReportCreateNestedManyWithoutServiceInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutServiceInput[]>;
    create?: Nullable<AbuseReportCreateWithoutServiceInput[]>;
    createMany?: Nullable<AbuseReportCreateManyServiceInputEnvelope>;
}

export class AbuseReportCreateNestedManyWithoutTypeInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutTypeInput[]>;
    create?: Nullable<AbuseReportCreateWithoutTypeInput[]>;
    createMany?: Nullable<AbuseReportCreateManyTypeInputEnvelope>;
}

export class AbuseReportCreateNestedManyWithoutUsersInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutUsersInput[]>;
    create?: Nullable<AbuseReportCreateWithoutUsersInput[]>;
    createMany?: Nullable<AbuseReportCreateManyUsersInputEnvelope>;
}

export class AbuseReportCreateOrConnectWithoutAuthorInput {
    create: AbuseReportUncheckedCreateWithoutAuthorInput;
    where: AbuseReportWhereUniqueInput;
}

export class AbuseReportCreateOrConnectWithoutBusinessInput {
    create: AbuseReportUncheckedCreateWithoutBusinessInput;
    where: AbuseReportWhereUniqueInput;
}

export class AbuseReportCreateOrConnectWithoutCommentsInput {
    create: AbuseReportUncheckedCreateWithoutCommentsInput;
    where: AbuseReportWhereUniqueInput;
}

export class AbuseReportCreateOrConnectWithoutOrdersInput {
    create: AbuseReportUncheckedCreateWithoutOrdersInput;
    where: AbuseReportWhereUniqueInput;
}

export class AbuseReportCreateOrConnectWithoutReviewsInput {
    create: AbuseReportUncheckedCreateWithoutReviewsInput;
    where: AbuseReportWhereUniqueInput;
}

export class AbuseReportCreateOrConnectWithoutServiceInput {
    create: AbuseReportUncheckedCreateWithoutServiceInput;
    where: AbuseReportWhereUniqueInput;
}

export class AbuseReportCreateOrConnectWithoutTypeInput {
    create: AbuseReportUncheckedCreateWithoutTypeInput;
    where: AbuseReportWhereUniqueInput;
}

export class AbuseReportCreateOrConnectWithoutUsersInput {
    create: AbuseReportUncheckedCreateWithoutUsersInput;
    where: AbuseReportWhereUniqueInput;
}

export class AbuseReportCreateWithoutAuthorInput {
    Business?: Nullable<BusinessCreateNestedOneWithoutAbuseReportsInput>;
    comments?: Nullable<CommentCreateNestedOneWithoutAbuseReportsInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    orders?: Nullable<OrderCreateNestedOneWithoutAbuseReportsInput>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    reviews?: Nullable<ReviewCreateNestedOneWithoutAbuseReportsInput>;
    service?: Nullable<ServiceCreateNestedOneWithoutAbuseReportsInput>;
    state?: Nullable<AbuseReportStatus>;
    type: AbuseRecordTypeCreateNestedOneWithoutAbuseReportsInput;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedOneWithoutAbuseReportsInput>;
}

export class AbuseReportCreateWithoutBusinessInput {
    author: UserCreateNestedOneWithoutAbuseReportedInput;
    comments?: Nullable<CommentCreateNestedOneWithoutAbuseReportsInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    orders?: Nullable<OrderCreateNestedOneWithoutAbuseReportsInput>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    reviews?: Nullable<ReviewCreateNestedOneWithoutAbuseReportsInput>;
    service?: Nullable<ServiceCreateNestedOneWithoutAbuseReportsInput>;
    state?: Nullable<AbuseReportStatus>;
    type: AbuseRecordTypeCreateNestedOneWithoutAbuseReportsInput;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedOneWithoutAbuseReportsInput>;
}

export class AbuseReportCreateWithoutCommentsInput {
    Business?: Nullable<BusinessCreateNestedOneWithoutAbuseReportsInput>;
    author: UserCreateNestedOneWithoutAbuseReportedInput;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    orders?: Nullable<OrderCreateNestedOneWithoutAbuseReportsInput>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    reviews?: Nullable<ReviewCreateNestedOneWithoutAbuseReportsInput>;
    service?: Nullable<ServiceCreateNestedOneWithoutAbuseReportsInput>;
    state?: Nullable<AbuseReportStatus>;
    type: AbuseRecordTypeCreateNestedOneWithoutAbuseReportsInput;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedOneWithoutAbuseReportsInput>;
}

export class AbuseReportCreateWithoutOrdersInput {
    Business?: Nullable<BusinessCreateNestedOneWithoutAbuseReportsInput>;
    author: UserCreateNestedOneWithoutAbuseReportedInput;
    comments?: Nullable<CommentCreateNestedOneWithoutAbuseReportsInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    reviews?: Nullable<ReviewCreateNestedOneWithoutAbuseReportsInput>;
    service?: Nullable<ServiceCreateNestedOneWithoutAbuseReportsInput>;
    state?: Nullable<AbuseReportStatus>;
    type: AbuseRecordTypeCreateNestedOneWithoutAbuseReportsInput;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedOneWithoutAbuseReportsInput>;
}

export class AbuseReportCreateWithoutReviewsInput {
    Business?: Nullable<BusinessCreateNestedOneWithoutAbuseReportsInput>;
    author: UserCreateNestedOneWithoutAbuseReportedInput;
    comments?: Nullable<CommentCreateNestedOneWithoutAbuseReportsInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    orders?: Nullable<OrderCreateNestedOneWithoutAbuseReportsInput>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    service?: Nullable<ServiceCreateNestedOneWithoutAbuseReportsInput>;
    state?: Nullable<AbuseReportStatus>;
    type: AbuseRecordTypeCreateNestedOneWithoutAbuseReportsInput;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedOneWithoutAbuseReportsInput>;
}

export class AbuseReportCreateWithoutServiceInput {
    Business?: Nullable<BusinessCreateNestedOneWithoutAbuseReportsInput>;
    author: UserCreateNestedOneWithoutAbuseReportedInput;
    comments?: Nullable<CommentCreateNestedOneWithoutAbuseReportsInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    orders?: Nullable<OrderCreateNestedOneWithoutAbuseReportsInput>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    reviews?: Nullable<ReviewCreateNestedOneWithoutAbuseReportsInput>;
    state?: Nullable<AbuseReportStatus>;
    type: AbuseRecordTypeCreateNestedOneWithoutAbuseReportsInput;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedOneWithoutAbuseReportsInput>;
}

export class AbuseReportCreateWithoutTypeInput {
    Business?: Nullable<BusinessCreateNestedOneWithoutAbuseReportsInput>;
    author: UserCreateNestedOneWithoutAbuseReportedInput;
    comments?: Nullable<CommentCreateNestedOneWithoutAbuseReportsInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    orders?: Nullable<OrderCreateNestedOneWithoutAbuseReportsInput>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    reviews?: Nullable<ReviewCreateNestedOneWithoutAbuseReportsInput>;
    service?: Nullable<ServiceCreateNestedOneWithoutAbuseReportsInput>;
    state?: Nullable<AbuseReportStatus>;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedOneWithoutAbuseReportsInput>;
}

export class AbuseReportCreateWithoutUsersInput {
    Business?: Nullable<BusinessCreateNestedOneWithoutAbuseReportsInput>;
    author: UserCreateNestedOneWithoutAbuseReportedInput;
    comments?: Nullable<CommentCreateNestedOneWithoutAbuseReportsInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    orders?: Nullable<OrderCreateNestedOneWithoutAbuseReportsInput>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    reviews?: Nullable<ReviewCreateNestedOneWithoutAbuseReportsInput>;
    service?: Nullable<ServiceCreateNestedOneWithoutAbuseReportsInput>;
    state?: Nullable<AbuseReportStatus>;
    type: AbuseRecordTypeCreateNestedOneWithoutAbuseReportsInput;
    updatedAt?: Nullable<DateTime>;
}

export class AbuseReportListRelationFilter {
    every?: Nullable<AbuseReportWhereInput>;
    none?: Nullable<AbuseReportWhereInput>;
    some?: Nullable<AbuseReportWhereInput>;
}

export class AbuseReportOrderByInput {
    authorId?: Nullable<SortOrder>;
    businessId?: Nullable<SortOrder>;
    commentId?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    number?: Nullable<SortOrder>;
    orderId?: Nullable<SortOrder>;
    recordStatus?: Nullable<SortOrder>;
    report?: Nullable<SortOrder>;
    reviewId?: Nullable<SortOrder>;
    serviceId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    typeId?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
}

export class AbuseReportScalarWhereInput {
    AND?: Nullable<AbuseReportScalarWhereInput[]>;
    NOT?: Nullable<AbuseReportScalarWhereInput[]>;
    OR?: Nullable<AbuseReportScalarWhereInput[]>;
    authorId?: Nullable<StringFilter>;
    businessId?: Nullable<StringNullableFilter>;
    commentId?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    number?: Nullable<IntFilter>;
    orderId?: Nullable<StringNullableFilter>;
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    report?: Nullable<StringNullableFilter>;
    reviewId?: Nullable<StringNullableFilter>;
    serviceId?: Nullable<StringNullableFilter>;
    state?: Nullable<EnumAbuseReportStatusFilter>;
    typeId?: Nullable<StringFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
    userId?: Nullable<StringNullableFilter>;
}

export class AbuseReportScalarWhereWithAggregatesInput {
    AND?: Nullable<AbuseReportScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<AbuseReportScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<AbuseReportScalarWhereWithAggregatesInput[]>;
    authorId?: Nullable<StringWithAggregatesFilter>;
    businessId?: Nullable<StringNullableWithAggregatesFilter>;
    commentId?: Nullable<StringNullableWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    number?: Nullable<IntWithAggregatesFilter>;
    orderId?: Nullable<StringNullableWithAggregatesFilter>;
    recordStatus?: Nullable<EnumRecordStatusWithAggregatesFilter>;
    report?: Nullable<StringNullableWithAggregatesFilter>;
    reviewId?: Nullable<StringNullableWithAggregatesFilter>;
    serviceId?: Nullable<StringNullableWithAggregatesFilter>;
    state?: Nullable<EnumAbuseReportStatusWithAggregatesFilter>;
    typeId?: Nullable<StringWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
    userId?: Nullable<StringNullableWithAggregatesFilter>;
}

export class AbuseReportUncheckedCreateInput {
    authorId: string;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    state?: Nullable<AbuseReportStatus>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class AbuseReportUncheckedCreateNestedManyWithoutAuthorInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<AbuseReportCreateWithoutAuthorInput[]>;
    createMany?: Nullable<AbuseReportCreateManyAuthorInputEnvelope>;
}

export class AbuseReportUncheckedCreateNestedManyWithoutBusinessInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutBusinessInput[]>;
    create?: Nullable<AbuseReportCreateWithoutBusinessInput[]>;
    createMany?: Nullable<AbuseReportCreateManyBusinessInputEnvelope>;
}

export class AbuseReportUncheckedCreateNestedManyWithoutCommentsInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutCommentsInput[]>;
    create?: Nullable<AbuseReportCreateWithoutCommentsInput[]>;
    createMany?: Nullable<AbuseReportCreateManyCommentsInputEnvelope>;
}

export class AbuseReportUncheckedCreateNestedManyWithoutOrdersInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutOrdersInput[]>;
    create?: Nullable<AbuseReportCreateWithoutOrdersInput[]>;
    createMany?: Nullable<AbuseReportCreateManyOrdersInputEnvelope>;
}

export class AbuseReportUncheckedCreateNestedManyWithoutReviewsInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutReviewsInput[]>;
    create?: Nullable<AbuseReportCreateWithoutReviewsInput[]>;
    createMany?: Nullable<AbuseReportCreateManyReviewsInputEnvelope>;
}

export class AbuseReportUncheckedCreateNestedManyWithoutServiceInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutServiceInput[]>;
    create?: Nullable<AbuseReportCreateWithoutServiceInput[]>;
    createMany?: Nullable<AbuseReportCreateManyServiceInputEnvelope>;
}

export class AbuseReportUncheckedCreateNestedManyWithoutTypeInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutTypeInput[]>;
    create?: Nullable<AbuseReportCreateWithoutTypeInput[]>;
    createMany?: Nullable<AbuseReportCreateManyTypeInputEnvelope>;
}

export class AbuseReportUncheckedCreateNestedManyWithoutUsersInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutUsersInput[]>;
    create?: Nullable<AbuseReportCreateWithoutUsersInput[]>;
    createMany?: Nullable<AbuseReportCreateManyUsersInputEnvelope>;
}

export class AbuseReportUncheckedCreateWithoutAuthorInput {
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    state?: Nullable<AbuseReportStatus>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class AbuseReportUncheckedCreateWithoutBusinessInput {
    authorId: string;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    state?: Nullable<AbuseReportStatus>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class AbuseReportUncheckedCreateWithoutCommentsInput {
    authorId: string;
    businessId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    state?: Nullable<AbuseReportStatus>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class AbuseReportUncheckedCreateWithoutOrdersInput {
    authorId: string;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    state?: Nullable<AbuseReportStatus>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class AbuseReportUncheckedCreateWithoutReviewsInput {
    authorId: string;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    serviceId?: Nullable<string>;
    state?: Nullable<AbuseReportStatus>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class AbuseReportUncheckedCreateWithoutServiceInput {
    authorId: string;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    reviewId?: Nullable<string>;
    state?: Nullable<AbuseReportStatus>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class AbuseReportUncheckedCreateWithoutTypeInput {
    authorId: string;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    state?: Nullable<AbuseReportStatus>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class AbuseReportUncheckedCreateWithoutUsersInput {
    authorId: string;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    state?: Nullable<AbuseReportStatus>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
}

export class AbuseReportUncheckedUpdateInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    number?: Nullable<IntFieldUpdateOperationsInput>;
    orderId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    report?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumAbuseReportStatusFieldUpdateOperationsInput>;
    typeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class AbuseReportUncheckedUpdateManyInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    number?: Nullable<IntFieldUpdateOperationsInput>;
    orderId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    report?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumAbuseReportStatusFieldUpdateOperationsInput>;
    typeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class AbuseReportUncheckedUpdateManyWithoutAbuseReportedInput {
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    number?: Nullable<IntFieldUpdateOperationsInput>;
    orderId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    report?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumAbuseReportStatusFieldUpdateOperationsInput>;
    typeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class AbuseReportUncheckedUpdateManyWithoutAbuseReportsInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    number?: Nullable<IntFieldUpdateOperationsInput>;
    orderId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    report?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumAbuseReportStatusFieldUpdateOperationsInput>;
    typeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AbuseReportUncheckedUpdateManyWithoutAuthorInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<AbuseReportCreateWithoutAuthorInput[]>;
    createMany?: Nullable<AbuseReportCreateManyAuthorInputEnvelope>;
    delete?: Nullable<AbuseReportWhereUniqueInput[]>;
    deleteMany?: Nullable<AbuseReportScalarWhereInput[]>;
    disconnect?: Nullable<AbuseReportWhereUniqueInput[]>;
    set?: Nullable<AbuseReportWhereUniqueInput[]>;
    update?: Nullable<AbuseReportUpdateWithWhereUniqueWithoutAuthorInput[]>;
    updateMany?: Nullable<AbuseReportUpdateManyWithWhereWithoutAuthorInput[]>;
    upsert?: Nullable<AbuseReportUpsertWithWhereUniqueWithoutAuthorInput[]>;
}

export class AbuseReportUncheckedUpdateManyWithoutBusinessInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutBusinessInput[]>;
    create?: Nullable<AbuseReportCreateWithoutBusinessInput[]>;
    createMany?: Nullable<AbuseReportCreateManyBusinessInputEnvelope>;
    delete?: Nullable<AbuseReportWhereUniqueInput[]>;
    deleteMany?: Nullable<AbuseReportScalarWhereInput[]>;
    disconnect?: Nullable<AbuseReportWhereUniqueInput[]>;
    set?: Nullable<AbuseReportWhereUniqueInput[]>;
    update?: Nullable<AbuseReportUpdateWithWhereUniqueWithoutBusinessInput[]>;
    updateMany?: Nullable<AbuseReportUpdateManyWithWhereWithoutBusinessInput[]>;
    upsert?: Nullable<AbuseReportUpsertWithWhereUniqueWithoutBusinessInput[]>;
}

export class AbuseReportUncheckedUpdateManyWithoutCommentsInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutCommentsInput[]>;
    create?: Nullable<AbuseReportCreateWithoutCommentsInput[]>;
    createMany?: Nullable<AbuseReportCreateManyCommentsInputEnvelope>;
    delete?: Nullable<AbuseReportWhereUniqueInput[]>;
    deleteMany?: Nullable<AbuseReportScalarWhereInput[]>;
    disconnect?: Nullable<AbuseReportWhereUniqueInput[]>;
    set?: Nullable<AbuseReportWhereUniqueInput[]>;
    update?: Nullable<AbuseReportUpdateWithWhereUniqueWithoutCommentsInput[]>;
    updateMany?: Nullable<AbuseReportUpdateManyWithWhereWithoutCommentsInput[]>;
    upsert?: Nullable<AbuseReportUpsertWithWhereUniqueWithoutCommentsInput[]>;
}

export class AbuseReportUncheckedUpdateManyWithoutOrdersInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutOrdersInput[]>;
    create?: Nullable<AbuseReportCreateWithoutOrdersInput[]>;
    createMany?: Nullable<AbuseReportCreateManyOrdersInputEnvelope>;
    delete?: Nullable<AbuseReportWhereUniqueInput[]>;
    deleteMany?: Nullable<AbuseReportScalarWhereInput[]>;
    disconnect?: Nullable<AbuseReportWhereUniqueInput[]>;
    set?: Nullable<AbuseReportWhereUniqueInput[]>;
    update?: Nullable<AbuseReportUpdateWithWhereUniqueWithoutOrdersInput[]>;
    updateMany?: Nullable<AbuseReportUpdateManyWithWhereWithoutOrdersInput[]>;
    upsert?: Nullable<AbuseReportUpsertWithWhereUniqueWithoutOrdersInput[]>;
}

export class AbuseReportUncheckedUpdateManyWithoutReviewsInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutReviewsInput[]>;
    create?: Nullable<AbuseReportCreateWithoutReviewsInput[]>;
    createMany?: Nullable<AbuseReportCreateManyReviewsInputEnvelope>;
    delete?: Nullable<AbuseReportWhereUniqueInput[]>;
    deleteMany?: Nullable<AbuseReportScalarWhereInput[]>;
    disconnect?: Nullable<AbuseReportWhereUniqueInput[]>;
    set?: Nullable<AbuseReportWhereUniqueInput[]>;
    update?: Nullable<AbuseReportUpdateWithWhereUniqueWithoutReviewsInput[]>;
    updateMany?: Nullable<AbuseReportUpdateManyWithWhereWithoutReviewsInput[]>;
    upsert?: Nullable<AbuseReportUpsertWithWhereUniqueWithoutReviewsInput[]>;
}

export class AbuseReportUncheckedUpdateManyWithoutServiceInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutServiceInput[]>;
    create?: Nullable<AbuseReportCreateWithoutServiceInput[]>;
    createMany?: Nullable<AbuseReportCreateManyServiceInputEnvelope>;
    delete?: Nullable<AbuseReportWhereUniqueInput[]>;
    deleteMany?: Nullable<AbuseReportScalarWhereInput[]>;
    disconnect?: Nullable<AbuseReportWhereUniqueInput[]>;
    set?: Nullable<AbuseReportWhereUniqueInput[]>;
    update?: Nullable<AbuseReportUpdateWithWhereUniqueWithoutServiceInput[]>;
    updateMany?: Nullable<AbuseReportUpdateManyWithWhereWithoutServiceInput[]>;
    upsert?: Nullable<AbuseReportUpsertWithWhereUniqueWithoutServiceInput[]>;
}

export class AbuseReportUncheckedUpdateManyWithoutTypeInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutTypeInput[]>;
    create?: Nullable<AbuseReportCreateWithoutTypeInput[]>;
    createMany?: Nullable<AbuseReportCreateManyTypeInputEnvelope>;
    delete?: Nullable<AbuseReportWhereUniqueInput[]>;
    deleteMany?: Nullable<AbuseReportScalarWhereInput[]>;
    disconnect?: Nullable<AbuseReportWhereUniqueInput[]>;
    set?: Nullable<AbuseReportWhereUniqueInput[]>;
    update?: Nullable<AbuseReportUpdateWithWhereUniqueWithoutTypeInput[]>;
    updateMany?: Nullable<AbuseReportUpdateManyWithWhereWithoutTypeInput[]>;
    upsert?: Nullable<AbuseReportUpsertWithWhereUniqueWithoutTypeInput[]>;
}

export class AbuseReportUncheckedUpdateManyWithoutUsersInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutUsersInput[]>;
    create?: Nullable<AbuseReportCreateWithoutUsersInput[]>;
    createMany?: Nullable<AbuseReportCreateManyUsersInputEnvelope>;
    delete?: Nullable<AbuseReportWhereUniqueInput[]>;
    deleteMany?: Nullable<AbuseReportScalarWhereInput[]>;
    disconnect?: Nullable<AbuseReportWhereUniqueInput[]>;
    set?: Nullable<AbuseReportWhereUniqueInput[]>;
    update?: Nullable<AbuseReportUpdateWithWhereUniqueWithoutUsersInput[]>;
    updateMany?: Nullable<AbuseReportUpdateManyWithWhereWithoutUsersInput[]>;
    upsert?: Nullable<AbuseReportUpsertWithWhereUniqueWithoutUsersInput[]>;
}

export class AbuseReportUncheckedUpdateWithoutAuthorInput {
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    number?: Nullable<IntFieldUpdateOperationsInput>;
    orderId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    report?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumAbuseReportStatusFieldUpdateOperationsInput>;
    typeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class AbuseReportUncheckedUpdateWithoutBusinessInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    number?: Nullable<IntFieldUpdateOperationsInput>;
    orderId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    report?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumAbuseReportStatusFieldUpdateOperationsInput>;
    typeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class AbuseReportUncheckedUpdateWithoutCommentsInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    number?: Nullable<IntFieldUpdateOperationsInput>;
    orderId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    report?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumAbuseReportStatusFieldUpdateOperationsInput>;
    typeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class AbuseReportUncheckedUpdateWithoutOrdersInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    number?: Nullable<IntFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    report?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumAbuseReportStatusFieldUpdateOperationsInput>;
    typeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class AbuseReportUncheckedUpdateWithoutReviewsInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    number?: Nullable<IntFieldUpdateOperationsInput>;
    orderId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    report?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumAbuseReportStatusFieldUpdateOperationsInput>;
    typeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class AbuseReportUncheckedUpdateWithoutServiceInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    number?: Nullable<IntFieldUpdateOperationsInput>;
    orderId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    report?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumAbuseReportStatusFieldUpdateOperationsInput>;
    typeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class AbuseReportUncheckedUpdateWithoutTypeInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    number?: Nullable<IntFieldUpdateOperationsInput>;
    orderId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    report?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumAbuseReportStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class AbuseReportUncheckedUpdateWithoutUsersInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    number?: Nullable<IntFieldUpdateOperationsInput>;
    orderId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    report?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumAbuseReportStatusFieldUpdateOperationsInput>;
    typeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AbuseReportUpdateInput {
    Business?: Nullable<BusinessUpdateOneWithoutAbuseReportsInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutAbuseReportedInput>;
    comments?: Nullable<CommentUpdateOneWithoutAbuseReportsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    number?: Nullable<IntFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateOneWithoutAbuseReportsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    report?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateOneWithoutAbuseReportsInput>;
    service?: Nullable<ServiceUpdateOneWithoutAbuseReportsInput>;
    state?: Nullable<EnumAbuseReportStatusFieldUpdateOperationsInput>;
    type?: Nullable<AbuseRecordTypeUpdateOneRequiredWithoutAbuseReportsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateOneWithoutAbuseReportsInput>;
}

export class AbuseReportUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    number?: Nullable<IntFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    report?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumAbuseReportStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AbuseReportUpdateManyWithWhereWithoutAuthorInput {
    data: AbuseReportUncheckedUpdateManyWithoutAbuseReportedInput;
    where: AbuseReportScalarWhereInput;
}

export class AbuseReportUpdateManyWithWhereWithoutBusinessInput {
    data: AbuseReportUncheckedUpdateManyWithoutAbuseReportsInput;
    where: AbuseReportScalarWhereInput;
}

export class AbuseReportUpdateManyWithWhereWithoutCommentsInput {
    data: AbuseReportUncheckedUpdateManyWithoutAbuseReportsInput;
    where: AbuseReportScalarWhereInput;
}

export class AbuseReportUpdateManyWithWhereWithoutOrdersInput {
    data: AbuseReportUncheckedUpdateManyWithoutAbuseReportsInput;
    where: AbuseReportScalarWhereInput;
}

export class AbuseReportUpdateManyWithWhereWithoutReviewsInput {
    data: AbuseReportUncheckedUpdateManyWithoutAbuseReportsInput;
    where: AbuseReportScalarWhereInput;
}

export class AbuseReportUpdateManyWithWhereWithoutServiceInput {
    data: AbuseReportUncheckedUpdateManyWithoutAbuseReportsInput;
    where: AbuseReportScalarWhereInput;
}

export class AbuseReportUpdateManyWithWhereWithoutTypeInput {
    data: AbuseReportUncheckedUpdateManyWithoutAbuseReportsInput;
    where: AbuseReportScalarWhereInput;
}

export class AbuseReportUpdateManyWithWhereWithoutUsersInput {
    data: AbuseReportUncheckedUpdateManyWithoutAbuseReportsInput;
    where: AbuseReportScalarWhereInput;
}

export class AbuseReportUpdateManyWithoutAuthorInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<AbuseReportCreateWithoutAuthorInput[]>;
    createMany?: Nullable<AbuseReportCreateManyAuthorInputEnvelope>;
    delete?: Nullable<AbuseReportWhereUniqueInput[]>;
    deleteMany?: Nullable<AbuseReportScalarWhereInput[]>;
    disconnect?: Nullable<AbuseReportWhereUniqueInput[]>;
    set?: Nullable<AbuseReportWhereUniqueInput[]>;
    update?: Nullable<AbuseReportUpdateWithWhereUniqueWithoutAuthorInput[]>;
    updateMany?: Nullable<AbuseReportUpdateManyWithWhereWithoutAuthorInput[]>;
    upsert?: Nullable<AbuseReportUpsertWithWhereUniqueWithoutAuthorInput[]>;
}

export class AbuseReportUpdateManyWithoutBusinessInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutBusinessInput[]>;
    create?: Nullable<AbuseReportCreateWithoutBusinessInput[]>;
    createMany?: Nullable<AbuseReportCreateManyBusinessInputEnvelope>;
    delete?: Nullable<AbuseReportWhereUniqueInput[]>;
    deleteMany?: Nullable<AbuseReportScalarWhereInput[]>;
    disconnect?: Nullable<AbuseReportWhereUniqueInput[]>;
    set?: Nullable<AbuseReportWhereUniqueInput[]>;
    update?: Nullable<AbuseReportUpdateWithWhereUniqueWithoutBusinessInput[]>;
    updateMany?: Nullable<AbuseReportUpdateManyWithWhereWithoutBusinessInput[]>;
    upsert?: Nullable<AbuseReportUpsertWithWhereUniqueWithoutBusinessInput[]>;
}

export class AbuseReportUpdateManyWithoutCommentsInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutCommentsInput[]>;
    create?: Nullable<AbuseReportCreateWithoutCommentsInput[]>;
    createMany?: Nullable<AbuseReportCreateManyCommentsInputEnvelope>;
    delete?: Nullable<AbuseReportWhereUniqueInput[]>;
    deleteMany?: Nullable<AbuseReportScalarWhereInput[]>;
    disconnect?: Nullable<AbuseReportWhereUniqueInput[]>;
    set?: Nullable<AbuseReportWhereUniqueInput[]>;
    update?: Nullable<AbuseReportUpdateWithWhereUniqueWithoutCommentsInput[]>;
    updateMany?: Nullable<AbuseReportUpdateManyWithWhereWithoutCommentsInput[]>;
    upsert?: Nullable<AbuseReportUpsertWithWhereUniqueWithoutCommentsInput[]>;
}

export class AbuseReportUpdateManyWithoutOrdersInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutOrdersInput[]>;
    create?: Nullable<AbuseReportCreateWithoutOrdersInput[]>;
    createMany?: Nullable<AbuseReportCreateManyOrdersInputEnvelope>;
    delete?: Nullable<AbuseReportWhereUniqueInput[]>;
    deleteMany?: Nullable<AbuseReportScalarWhereInput[]>;
    disconnect?: Nullable<AbuseReportWhereUniqueInput[]>;
    set?: Nullable<AbuseReportWhereUniqueInput[]>;
    update?: Nullable<AbuseReportUpdateWithWhereUniqueWithoutOrdersInput[]>;
    updateMany?: Nullable<AbuseReportUpdateManyWithWhereWithoutOrdersInput[]>;
    upsert?: Nullable<AbuseReportUpsertWithWhereUniqueWithoutOrdersInput[]>;
}

export class AbuseReportUpdateManyWithoutReviewsInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutReviewsInput[]>;
    create?: Nullable<AbuseReportCreateWithoutReviewsInput[]>;
    createMany?: Nullable<AbuseReportCreateManyReviewsInputEnvelope>;
    delete?: Nullable<AbuseReportWhereUniqueInput[]>;
    deleteMany?: Nullable<AbuseReportScalarWhereInput[]>;
    disconnect?: Nullable<AbuseReportWhereUniqueInput[]>;
    set?: Nullable<AbuseReportWhereUniqueInput[]>;
    update?: Nullable<AbuseReportUpdateWithWhereUniqueWithoutReviewsInput[]>;
    updateMany?: Nullable<AbuseReportUpdateManyWithWhereWithoutReviewsInput[]>;
    upsert?: Nullable<AbuseReportUpsertWithWhereUniqueWithoutReviewsInput[]>;
}

export class AbuseReportUpdateManyWithoutServiceInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutServiceInput[]>;
    create?: Nullable<AbuseReportCreateWithoutServiceInput[]>;
    createMany?: Nullable<AbuseReportCreateManyServiceInputEnvelope>;
    delete?: Nullable<AbuseReportWhereUniqueInput[]>;
    deleteMany?: Nullable<AbuseReportScalarWhereInput[]>;
    disconnect?: Nullable<AbuseReportWhereUniqueInput[]>;
    set?: Nullable<AbuseReportWhereUniqueInput[]>;
    update?: Nullable<AbuseReportUpdateWithWhereUniqueWithoutServiceInput[]>;
    updateMany?: Nullable<AbuseReportUpdateManyWithWhereWithoutServiceInput[]>;
    upsert?: Nullable<AbuseReportUpsertWithWhereUniqueWithoutServiceInput[]>;
}

export class AbuseReportUpdateManyWithoutTypeInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutTypeInput[]>;
    create?: Nullable<AbuseReportCreateWithoutTypeInput[]>;
    createMany?: Nullable<AbuseReportCreateManyTypeInputEnvelope>;
    delete?: Nullable<AbuseReportWhereUniqueInput[]>;
    deleteMany?: Nullable<AbuseReportScalarWhereInput[]>;
    disconnect?: Nullable<AbuseReportWhereUniqueInput[]>;
    set?: Nullable<AbuseReportWhereUniqueInput[]>;
    update?: Nullable<AbuseReportUpdateWithWhereUniqueWithoutTypeInput[]>;
    updateMany?: Nullable<AbuseReportUpdateManyWithWhereWithoutTypeInput[]>;
    upsert?: Nullable<AbuseReportUpsertWithWhereUniqueWithoutTypeInput[]>;
}

export class AbuseReportUpdateManyWithoutUsersInput {
    connect?: Nullable<AbuseReportWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AbuseReportCreateOrConnectWithoutUsersInput[]>;
    create?: Nullable<AbuseReportCreateWithoutUsersInput[]>;
    createMany?: Nullable<AbuseReportCreateManyUsersInputEnvelope>;
    delete?: Nullable<AbuseReportWhereUniqueInput[]>;
    deleteMany?: Nullable<AbuseReportScalarWhereInput[]>;
    disconnect?: Nullable<AbuseReportWhereUniqueInput[]>;
    set?: Nullable<AbuseReportWhereUniqueInput[]>;
    update?: Nullable<AbuseReportUpdateWithWhereUniqueWithoutUsersInput[]>;
    updateMany?: Nullable<AbuseReportUpdateManyWithWhereWithoutUsersInput[]>;
    upsert?: Nullable<AbuseReportUpsertWithWhereUniqueWithoutUsersInput[]>;
}

export class AbuseReportUpdateWithWhereUniqueWithoutAuthorInput {
    data: AbuseReportUncheckedUpdateWithoutAuthorInput;
    where: AbuseReportWhereUniqueInput;
}

export class AbuseReportUpdateWithWhereUniqueWithoutBusinessInput {
    data: AbuseReportUncheckedUpdateWithoutBusinessInput;
    where: AbuseReportWhereUniqueInput;
}

export class AbuseReportUpdateWithWhereUniqueWithoutCommentsInput {
    data: AbuseReportUncheckedUpdateWithoutCommentsInput;
    where: AbuseReportWhereUniqueInput;
}

export class AbuseReportUpdateWithWhereUniqueWithoutOrdersInput {
    data: AbuseReportUncheckedUpdateWithoutOrdersInput;
    where: AbuseReportWhereUniqueInput;
}

export class AbuseReportUpdateWithWhereUniqueWithoutReviewsInput {
    data: AbuseReportUncheckedUpdateWithoutReviewsInput;
    where: AbuseReportWhereUniqueInput;
}

export class AbuseReportUpdateWithWhereUniqueWithoutServiceInput {
    data: AbuseReportUncheckedUpdateWithoutServiceInput;
    where: AbuseReportWhereUniqueInput;
}

export class AbuseReportUpdateWithWhereUniqueWithoutTypeInput {
    data: AbuseReportUncheckedUpdateWithoutTypeInput;
    where: AbuseReportWhereUniqueInput;
}

export class AbuseReportUpdateWithWhereUniqueWithoutUsersInput {
    data: AbuseReportUncheckedUpdateWithoutUsersInput;
    where: AbuseReportWhereUniqueInput;
}

export class AbuseReportUpdateWithoutAuthorInput {
    Business?: Nullable<BusinessUpdateOneWithoutAbuseReportsInput>;
    comments?: Nullable<CommentUpdateOneWithoutAbuseReportsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    number?: Nullable<IntFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateOneWithoutAbuseReportsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    report?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateOneWithoutAbuseReportsInput>;
    service?: Nullable<ServiceUpdateOneWithoutAbuseReportsInput>;
    state?: Nullable<EnumAbuseReportStatusFieldUpdateOperationsInput>;
    type?: Nullable<AbuseRecordTypeUpdateOneRequiredWithoutAbuseReportsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateOneWithoutAbuseReportsInput>;
}

export class AbuseReportUpdateWithoutBusinessInput {
    author?: Nullable<UserUpdateOneRequiredWithoutAbuseReportedInput>;
    comments?: Nullable<CommentUpdateOneWithoutAbuseReportsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    number?: Nullable<IntFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateOneWithoutAbuseReportsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    report?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateOneWithoutAbuseReportsInput>;
    service?: Nullable<ServiceUpdateOneWithoutAbuseReportsInput>;
    state?: Nullable<EnumAbuseReportStatusFieldUpdateOperationsInput>;
    type?: Nullable<AbuseRecordTypeUpdateOneRequiredWithoutAbuseReportsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateOneWithoutAbuseReportsInput>;
}

export class AbuseReportUpdateWithoutCommentsInput {
    Business?: Nullable<BusinessUpdateOneWithoutAbuseReportsInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutAbuseReportedInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    number?: Nullable<IntFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateOneWithoutAbuseReportsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    report?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateOneWithoutAbuseReportsInput>;
    service?: Nullable<ServiceUpdateOneWithoutAbuseReportsInput>;
    state?: Nullable<EnumAbuseReportStatusFieldUpdateOperationsInput>;
    type?: Nullable<AbuseRecordTypeUpdateOneRequiredWithoutAbuseReportsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateOneWithoutAbuseReportsInput>;
}

export class AbuseReportUpdateWithoutOrdersInput {
    Business?: Nullable<BusinessUpdateOneWithoutAbuseReportsInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutAbuseReportedInput>;
    comments?: Nullable<CommentUpdateOneWithoutAbuseReportsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    number?: Nullable<IntFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    report?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateOneWithoutAbuseReportsInput>;
    service?: Nullable<ServiceUpdateOneWithoutAbuseReportsInput>;
    state?: Nullable<EnumAbuseReportStatusFieldUpdateOperationsInput>;
    type?: Nullable<AbuseRecordTypeUpdateOneRequiredWithoutAbuseReportsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateOneWithoutAbuseReportsInput>;
}

export class AbuseReportUpdateWithoutReviewsInput {
    Business?: Nullable<BusinessUpdateOneWithoutAbuseReportsInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutAbuseReportedInput>;
    comments?: Nullable<CommentUpdateOneWithoutAbuseReportsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    number?: Nullable<IntFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateOneWithoutAbuseReportsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    report?: Nullable<NullableStringFieldUpdateOperationsInput>;
    service?: Nullable<ServiceUpdateOneWithoutAbuseReportsInput>;
    state?: Nullable<EnumAbuseReportStatusFieldUpdateOperationsInput>;
    type?: Nullable<AbuseRecordTypeUpdateOneRequiredWithoutAbuseReportsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateOneWithoutAbuseReportsInput>;
}

export class AbuseReportUpdateWithoutServiceInput {
    Business?: Nullable<BusinessUpdateOneWithoutAbuseReportsInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutAbuseReportedInput>;
    comments?: Nullable<CommentUpdateOneWithoutAbuseReportsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    number?: Nullable<IntFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateOneWithoutAbuseReportsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    report?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateOneWithoutAbuseReportsInput>;
    state?: Nullable<EnumAbuseReportStatusFieldUpdateOperationsInput>;
    type?: Nullable<AbuseRecordTypeUpdateOneRequiredWithoutAbuseReportsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateOneWithoutAbuseReportsInput>;
}

export class AbuseReportUpdateWithoutTypeInput {
    Business?: Nullable<BusinessUpdateOneWithoutAbuseReportsInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutAbuseReportedInput>;
    comments?: Nullable<CommentUpdateOneWithoutAbuseReportsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    number?: Nullable<IntFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateOneWithoutAbuseReportsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    report?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateOneWithoutAbuseReportsInput>;
    service?: Nullable<ServiceUpdateOneWithoutAbuseReportsInput>;
    state?: Nullable<EnumAbuseReportStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateOneWithoutAbuseReportsInput>;
}

export class AbuseReportUpdateWithoutUsersInput {
    Business?: Nullable<BusinessUpdateOneWithoutAbuseReportsInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutAbuseReportedInput>;
    comments?: Nullable<CommentUpdateOneWithoutAbuseReportsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    number?: Nullable<IntFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateOneWithoutAbuseReportsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    report?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateOneWithoutAbuseReportsInput>;
    service?: Nullable<ServiceUpdateOneWithoutAbuseReportsInput>;
    state?: Nullable<EnumAbuseReportStatusFieldUpdateOperationsInput>;
    type?: Nullable<AbuseRecordTypeUpdateOneRequiredWithoutAbuseReportsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AbuseReportUpsertWithWhereUniqueWithoutAuthorInput {
    create: AbuseReportUncheckedCreateWithoutAuthorInput;
    update: AbuseReportUncheckedUpdateWithoutAuthorInput;
    where: AbuseReportWhereUniqueInput;
}

export class AbuseReportUpsertWithWhereUniqueWithoutBusinessInput {
    create: AbuseReportUncheckedCreateWithoutBusinessInput;
    update: AbuseReportUncheckedUpdateWithoutBusinessInput;
    where: AbuseReportWhereUniqueInput;
}

export class AbuseReportUpsertWithWhereUniqueWithoutCommentsInput {
    create: AbuseReportUncheckedCreateWithoutCommentsInput;
    update: AbuseReportUncheckedUpdateWithoutCommentsInput;
    where: AbuseReportWhereUniqueInput;
}

export class AbuseReportUpsertWithWhereUniqueWithoutOrdersInput {
    create: AbuseReportUncheckedCreateWithoutOrdersInput;
    update: AbuseReportUncheckedUpdateWithoutOrdersInput;
    where: AbuseReportWhereUniqueInput;
}

export class AbuseReportUpsertWithWhereUniqueWithoutReviewsInput {
    create: AbuseReportUncheckedCreateWithoutReviewsInput;
    update: AbuseReportUncheckedUpdateWithoutReviewsInput;
    where: AbuseReportWhereUniqueInput;
}

export class AbuseReportUpsertWithWhereUniqueWithoutServiceInput {
    create: AbuseReportUncheckedCreateWithoutServiceInput;
    update: AbuseReportUncheckedUpdateWithoutServiceInput;
    where: AbuseReportWhereUniqueInput;
}

export class AbuseReportUpsertWithWhereUniqueWithoutTypeInput {
    create: AbuseReportUncheckedCreateWithoutTypeInput;
    update: AbuseReportUncheckedUpdateWithoutTypeInput;
    where: AbuseReportWhereUniqueInput;
}

export class AbuseReportUpsertWithWhereUniqueWithoutUsersInput {
    create: AbuseReportUncheckedCreateWithoutUsersInput;
    update: AbuseReportUncheckedUpdateWithoutUsersInput;
    where: AbuseReportWhereUniqueInput;
}

export class AbuseReportWhereInput {
    AND?: Nullable<AbuseReportWhereInput[]>;
    Business?: Nullable<BusinessWhereInput>;
    NOT?: Nullable<AbuseReportWhereInput[]>;
    OR?: Nullable<AbuseReportWhereInput[]>;
    author?: Nullable<UserWhereInput>;
    authorId?: Nullable<StringFilter>;
    businessId?: Nullable<StringNullableFilter>;
    commentId?: Nullable<StringNullableFilter>;
    comments?: Nullable<CommentWhereInput>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    number?: Nullable<IntFilter>;
    orderId?: Nullable<StringNullableFilter>;
    orders?: Nullable<OrderWhereInput>;
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    report?: Nullable<StringNullableFilter>;
    reviewId?: Nullable<StringNullableFilter>;
    reviews?: Nullable<ReviewWhereInput>;
    service?: Nullable<ServiceWhereInput>;
    serviceId?: Nullable<StringNullableFilter>;
    state?: Nullable<EnumAbuseReportStatusFilter>;
    type?: Nullable<AbuseRecordTypeWhereInput>;
    typeId?: Nullable<StringFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
    userId?: Nullable<StringNullableFilter>;
    users?: Nullable<UserWhereInput>;
}

export class AbuseReportWhereUniqueInput {
    id?: Nullable<string>;
}

export class AttachmentCreateInput {
    Category?: Nullable<CategoryCreateNestedManyWithoutPictureInput>;
    attachmentType?: Nullable<AttachmentType>;
    business?: Nullable<BusinessCreateNestedOneWithoutAttachmentsInput>;
    businesses?: Nullable<BusinessCreateNestedManyWithoutCoverInput>;
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
    recordStatus?: Nullable<RecordStatus>;
    reviews?: Nullable<ReviewCreateNestedOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    users?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateManyBusinessInput {
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
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class AttachmentCreateManyBusinessInputEnvelope {
    data: AttachmentCreateManyBusinessInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class AttachmentCreateManyCommentInput {
    attachmentType?: Nullable<AttachmentType>;
    businessId?: Nullable<string>;
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
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class AttachmentCreateManyCommentInputEnvelope {
    data: AttachmentCreateManyCommentInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class AttachmentCreateManyHelpStepInput {
    attachmentType?: Nullable<AttachmentType>;
    businessId?: Nullable<string>;
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
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class AttachmentCreateManyHelpStepInputEnvelope {
    data: AttachmentCreateManyHelpStepInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class AttachmentCreateManyInput {
    attachmentType?: Nullable<AttachmentType>;
    businessId?: Nullable<string>;
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
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class AttachmentCreateManyReviewsInput {
    attachmentType?: Nullable<AttachmentType>;
    businessId?: Nullable<string>;
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
    recordStatus?: Nullable<RecordStatus>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class AttachmentCreateManyReviewsInputEnvelope {
    data: AttachmentCreateManyReviewsInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class AttachmentCreateNestedManyWithoutBusinessInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutBusinessInput[]>;
    create?: Nullable<AttachmentCreateWithoutBusinessInput[]>;
    createMany?: Nullable<AttachmentCreateManyBusinessInputEnvelope>;
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

export class AttachmentCreateNestedManyWithoutReviewsInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutReviewsInput[]>;
    create?: Nullable<AttachmentCreateWithoutReviewsInput[]>;
    createMany?: Nullable<AttachmentCreateManyReviewsInputEnvelope>;
}

export class AttachmentCreateNestedOneWithoutBusinessesInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutBusinessesInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutBusinessesInput>;
}

export class AttachmentCreateNestedOneWithoutCategoryInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutCategoryInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutCategoryInput>;
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

export class AttachmentCreateNestedOneWithoutUsersInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutUsersInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutUsersInput>;
}

export class AttachmentCreateOrConnectWithoutBusinessInput {
    create: AttachmentUncheckedCreateWithoutBusinessInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateOrConnectWithoutBusinessesInput {
    create: AttachmentUncheckedCreateWithoutBusinessesInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateOrConnectWithoutCategoryInput {
    create: AttachmentUncheckedCreateWithoutCategoryInput;
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

export class AttachmentCreateOrConnectWithoutReviewsInput {
    create: AttachmentUncheckedCreateWithoutReviewsInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateOrConnectWithoutServicesInput {
    create: AttachmentUncheckedCreateWithoutServicesInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateOrConnectWithoutUsersInput {
    create: AttachmentUncheckedCreateWithoutUsersInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateWithoutBusinessInput {
    Category?: Nullable<CategoryCreateNestedManyWithoutPictureInput>;
    attachmentType?: Nullable<AttachmentType>;
    businesses?: Nullable<BusinessCreateNestedManyWithoutCoverInput>;
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
    recordStatus?: Nullable<RecordStatus>;
    reviews?: Nullable<ReviewCreateNestedOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    users?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutBusinessesInput {
    Category?: Nullable<CategoryCreateNestedManyWithoutPictureInput>;
    attachmentType?: Nullable<AttachmentType>;
    business?: Nullable<BusinessCreateNestedOneWithoutAttachmentsInput>;
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
    recordStatus?: Nullable<RecordStatus>;
    reviews?: Nullable<ReviewCreateNestedOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    users?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutCategoryInput {
    attachmentType?: Nullable<AttachmentType>;
    business?: Nullable<BusinessCreateNestedOneWithoutAttachmentsInput>;
    businesses?: Nullable<BusinessCreateNestedManyWithoutCoverInput>;
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
    recordStatus?: Nullable<RecordStatus>;
    reviews?: Nullable<ReviewCreateNestedOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    users?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutCommentInput {
    Category?: Nullable<CategoryCreateNestedManyWithoutPictureInput>;
    attachmentType?: Nullable<AttachmentType>;
    business?: Nullable<BusinessCreateNestedOneWithoutAttachmentsInput>;
    businesses?: Nullable<BusinessCreateNestedManyWithoutCoverInput>;
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
    recordStatus?: Nullable<RecordStatus>;
    reviews?: Nullable<ReviewCreateNestedOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    users?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutHelpStepInput {
    Category?: Nullable<CategoryCreateNestedManyWithoutPictureInput>;
    attachmentType?: Nullable<AttachmentType>;
    business?: Nullable<BusinessCreateNestedOneWithoutAttachmentsInput>;
    businesses?: Nullable<BusinessCreateNestedManyWithoutCoverInput>;
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
    recordStatus?: Nullable<RecordStatus>;
    reviews?: Nullable<ReviewCreateNestedOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    users?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutOrdersInput {
    Category?: Nullable<CategoryCreateNestedManyWithoutPictureInput>;
    attachmentType?: Nullable<AttachmentType>;
    business?: Nullable<BusinessCreateNestedOneWithoutAttachmentsInput>;
    businesses?: Nullable<BusinessCreateNestedManyWithoutCoverInput>;
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
    recordStatus?: Nullable<RecordStatus>;
    reviews?: Nullable<ReviewCreateNestedOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    users?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutPaymentMethodsInput {
    Category?: Nullable<CategoryCreateNestedManyWithoutPictureInput>;
    attachmentType?: Nullable<AttachmentType>;
    business?: Nullable<BusinessCreateNestedOneWithoutAttachmentsInput>;
    businesses?: Nullable<BusinessCreateNestedManyWithoutCoverInput>;
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
    recordStatus?: Nullable<RecordStatus>;
    reviews?: Nullable<ReviewCreateNestedOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    users?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutReviewsInput {
    Category?: Nullable<CategoryCreateNestedManyWithoutPictureInput>;
    attachmentType?: Nullable<AttachmentType>;
    business?: Nullable<BusinessCreateNestedOneWithoutAttachmentsInput>;
    businesses?: Nullable<BusinessCreateNestedManyWithoutCoverInput>;
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
    recordStatus?: Nullable<RecordStatus>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    users?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutServicesInput {
    Category?: Nullable<CategoryCreateNestedManyWithoutPictureInput>;
    attachmentType?: Nullable<AttachmentType>;
    business?: Nullable<BusinessCreateNestedOneWithoutAttachmentsInput>;
    businesses?: Nullable<BusinessCreateNestedManyWithoutCoverInput>;
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
    recordStatus?: Nullable<RecordStatus>;
    reviews?: Nullable<ReviewCreateNestedOneWithoutAttachmentsInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    users?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutUsersInput {
    Category?: Nullable<CategoryCreateNestedManyWithoutPictureInput>;
    attachmentType?: Nullable<AttachmentType>;
    business?: Nullable<BusinessCreateNestedOneWithoutAttachmentsInput>;
    businesses?: Nullable<BusinessCreateNestedManyWithoutCoverInput>;
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
    recordStatus?: Nullable<RecordStatus>;
    reviews?: Nullable<ReviewCreateNestedOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class AttachmentListRelationFilter {
    every?: Nullable<AttachmentWhereInput>;
    none?: Nullable<AttachmentWhereInput>;
    some?: Nullable<AttachmentWhereInput>;
}

export class AttachmentOrderByInput {
    attachmentType?: Nullable<SortOrder>;
    businessId?: Nullable<SortOrder>;
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
    recordStatus?: Nullable<SortOrder>;
    reviewId?: Nullable<SortOrder>;
    size?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
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
    businessId?: Nullable<StringNullableFilter>;
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
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    reviewId?: Nullable<StringNullableFilter>;
    size?: Nullable<IntFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
    userId?: Nullable<StringNullableFilter>;
}

export class AttachmentScalarWhereWithAggregatesInput {
    AND?: Nullable<AttachmentScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<AttachmentScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<AttachmentScalarWhereWithAggregatesInput[]>;
    attachmentType?: Nullable<EnumAttachmentTypeWithAggregatesFilter>;
    businessId?: Nullable<StringNullableWithAggregatesFilter>;
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
    recordStatus?: Nullable<EnumRecordStatusWithAggregatesFilter>;
    reviewId?: Nullable<StringNullableWithAggregatesFilter>;
    size?: Nullable<IntWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
    userId?: Nullable<StringNullableWithAggregatesFilter>;
}

export class AttachmentUncheckedCreateInput {
    Category?: Nullable<CategoryUncheckedCreateNestedManyWithoutPictureInput>;
    attachmentType?: Nullable<AttachmentType>;
    businessId?: Nullable<string>;
    businesses?: Nullable<BusinessUncheckedCreateNestedManyWithoutCoverInput>;
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
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    users?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateNestedManyWithoutBusinessInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutBusinessInput[]>;
    create?: Nullable<AttachmentCreateWithoutBusinessInput[]>;
    createMany?: Nullable<AttachmentCreateManyBusinessInputEnvelope>;
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

export class AttachmentUncheckedCreateNestedManyWithoutReviewsInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutReviewsInput[]>;
    create?: Nullable<AttachmentCreateWithoutReviewsInput[]>;
    createMany?: Nullable<AttachmentCreateManyReviewsInputEnvelope>;
}

export class AttachmentUncheckedCreateWithoutBusinessInput {
    Category?: Nullable<CategoryUncheckedCreateNestedManyWithoutPictureInput>;
    attachmentType?: Nullable<AttachmentType>;
    businesses?: Nullable<BusinessUncheckedCreateNestedManyWithoutCoverInput>;
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
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    users?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutBusinessesInput {
    Category?: Nullable<CategoryUncheckedCreateNestedManyWithoutPictureInput>;
    attachmentType?: Nullable<AttachmentType>;
    businessId?: Nullable<string>;
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
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    users?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutCategoryInput {
    attachmentType?: Nullable<AttachmentType>;
    businessId?: Nullable<string>;
    businesses?: Nullable<BusinessUncheckedCreateNestedManyWithoutCoverInput>;
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
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    users?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutCommentInput {
    Category?: Nullable<CategoryUncheckedCreateNestedManyWithoutPictureInput>;
    attachmentType?: Nullable<AttachmentType>;
    businessId?: Nullable<string>;
    businesses?: Nullable<BusinessUncheckedCreateNestedManyWithoutCoverInput>;
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
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    users?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutHelpStepInput {
    Category?: Nullable<CategoryUncheckedCreateNestedManyWithoutPictureInput>;
    attachmentType?: Nullable<AttachmentType>;
    businessId?: Nullable<string>;
    businesses?: Nullable<BusinessUncheckedCreateNestedManyWithoutCoverInput>;
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
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    users?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutOrdersInput {
    Category?: Nullable<CategoryUncheckedCreateNestedManyWithoutPictureInput>;
    attachmentType?: Nullable<AttachmentType>;
    businessId?: Nullable<string>;
    businesses?: Nullable<BusinessUncheckedCreateNestedManyWithoutCoverInput>;
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
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    users?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutPaymentMethodsInput {
    Category?: Nullable<CategoryUncheckedCreateNestedManyWithoutPictureInput>;
    attachmentType?: Nullable<AttachmentType>;
    businessId?: Nullable<string>;
    businesses?: Nullable<BusinessUncheckedCreateNestedManyWithoutCoverInput>;
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
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    users?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutReviewsInput {
    Category?: Nullable<CategoryUncheckedCreateNestedManyWithoutPictureInput>;
    attachmentType?: Nullable<AttachmentType>;
    businessId?: Nullable<string>;
    businesses?: Nullable<BusinessUncheckedCreateNestedManyWithoutCoverInput>;
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
    recordStatus?: Nullable<RecordStatus>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    users?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutServicesInput {
    Category?: Nullable<CategoryUncheckedCreateNestedManyWithoutPictureInput>;
    attachmentType?: Nullable<AttachmentType>;
    businessId?: Nullable<string>;
    businesses?: Nullable<BusinessUncheckedCreateNestedManyWithoutCoverInput>;
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
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    users?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutUsersInput {
    Category?: Nullable<CategoryUncheckedCreateNestedManyWithoutPictureInput>;
    attachmentType?: Nullable<AttachmentType>;
    businessId?: Nullable<string>;
    businesses?: Nullable<BusinessUncheckedCreateNestedManyWithoutCoverInput>;
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
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class AttachmentUncheckedUpdateInput {
    Category?: Nullable<CategoryUncheckedUpdateManyWithoutPictureInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businesses?: Nullable<BusinessUncheckedUpdateManyWithoutCoverInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    users?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateManyInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class AttachmentUncheckedUpdateManyWithoutAttachmentsInput {
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class AttachmentUncheckedUpdateManyWithoutBusinessInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutBusinessInput[]>;
    create?: Nullable<AttachmentCreateWithoutBusinessInput[]>;
    createMany?: Nullable<AttachmentCreateManyBusinessInputEnvelope>;
    delete?: Nullable<AttachmentWhereUniqueInput[]>;
    deleteMany?: Nullable<AttachmentScalarWhereInput[]>;
    disconnect?: Nullable<AttachmentWhereUniqueInput[]>;
    set?: Nullable<AttachmentWhereUniqueInput[]>;
    update?: Nullable<AttachmentUpdateWithWhereUniqueWithoutBusinessInput[]>;
    updateMany?: Nullable<AttachmentUpdateManyWithWhereWithoutBusinessInput[]>;
    upsert?: Nullable<AttachmentUpsertWithWhereUniqueWithoutBusinessInput[]>;
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

export class AttachmentUncheckedUpdateManyWithoutReviewsInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutReviewsInput[]>;
    create?: Nullable<AttachmentCreateWithoutReviewsInput[]>;
    createMany?: Nullable<AttachmentCreateManyReviewsInputEnvelope>;
    delete?: Nullable<AttachmentWhereUniqueInput[]>;
    deleteMany?: Nullable<AttachmentScalarWhereInput[]>;
    disconnect?: Nullable<AttachmentWhereUniqueInput[]>;
    set?: Nullable<AttachmentWhereUniqueInput[]>;
    update?: Nullable<AttachmentUpdateWithWhereUniqueWithoutReviewsInput[]>;
    updateMany?: Nullable<AttachmentUpdateManyWithWhereWithoutReviewsInput[]>;
    upsert?: Nullable<AttachmentUpsertWithWhereUniqueWithoutReviewsInput[]>;
}

export class AttachmentUncheckedUpdateWithoutBusinessInput {
    Category?: Nullable<CategoryUncheckedUpdateManyWithoutPictureInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businesses?: Nullable<BusinessUncheckedUpdateManyWithoutCoverInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    users?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutBusinessesInput {
    Category?: Nullable<CategoryUncheckedUpdateManyWithoutPictureInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    users?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutCategoryInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businesses?: Nullable<BusinessUncheckedUpdateManyWithoutCoverInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    users?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutCommentInput {
    Category?: Nullable<CategoryUncheckedUpdateManyWithoutPictureInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businesses?: Nullable<BusinessUncheckedUpdateManyWithoutCoverInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    users?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutHelpStepInput {
    Category?: Nullable<CategoryUncheckedUpdateManyWithoutPictureInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businesses?: Nullable<BusinessUncheckedUpdateManyWithoutCoverInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    users?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutOrdersInput {
    Category?: Nullable<CategoryUncheckedUpdateManyWithoutPictureInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businesses?: Nullable<BusinessUncheckedUpdateManyWithoutCoverInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    users?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutPaymentMethodsInput {
    Category?: Nullable<CategoryUncheckedUpdateManyWithoutPictureInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businesses?: Nullable<BusinessUncheckedUpdateManyWithoutCoverInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    users?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutReviewsInput {
    Category?: Nullable<CategoryUncheckedUpdateManyWithoutPictureInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businesses?: Nullable<BusinessUncheckedUpdateManyWithoutCoverInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    users?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutServicesInput {
    Category?: Nullable<CategoryUncheckedUpdateManyWithoutPictureInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businesses?: Nullable<BusinessUncheckedUpdateManyWithoutCoverInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    users?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutUsersInput {
    Category?: Nullable<CategoryUncheckedUpdateManyWithoutPictureInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businesses?: Nullable<BusinessUncheckedUpdateManyWithoutCoverInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class AttachmentUpdateInput {
    Category?: Nullable<CategoryUpdateManyWithoutPictureInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    business?: Nullable<BusinessUpdateOneWithoutAttachmentsInput>;
    businesses?: Nullable<BusinessUpdateManyWithoutCoverInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateManyWithoutAvatorInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class AttachmentUpdateManyWithWhereWithoutBusinessInput {
    data: AttachmentUncheckedUpdateManyWithoutAttachmentsInput;
    where: AttachmentScalarWhereInput;
}

export class AttachmentUpdateManyWithWhereWithoutCommentInput {
    data: AttachmentUncheckedUpdateManyWithoutAttachmentsInput;
    where: AttachmentScalarWhereInput;
}

export class AttachmentUpdateManyWithWhereWithoutHelpStepInput {
    data: AttachmentUncheckedUpdateManyWithoutAttachmentsInput;
    where: AttachmentScalarWhereInput;
}

export class AttachmentUpdateManyWithWhereWithoutReviewsInput {
    data: AttachmentUncheckedUpdateManyWithoutAttachmentsInput;
    where: AttachmentScalarWhereInput;
}

export class AttachmentUpdateManyWithoutBusinessInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutBusinessInput[]>;
    create?: Nullable<AttachmentCreateWithoutBusinessInput[]>;
    createMany?: Nullable<AttachmentCreateManyBusinessInputEnvelope>;
    delete?: Nullable<AttachmentWhereUniqueInput[]>;
    deleteMany?: Nullable<AttachmentScalarWhereInput[]>;
    disconnect?: Nullable<AttachmentWhereUniqueInput[]>;
    set?: Nullable<AttachmentWhereUniqueInput[]>;
    update?: Nullable<AttachmentUpdateWithWhereUniqueWithoutBusinessInput[]>;
    updateMany?: Nullable<AttachmentUpdateManyWithWhereWithoutBusinessInput[]>;
    upsert?: Nullable<AttachmentUpsertWithWhereUniqueWithoutBusinessInput[]>;
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

export class AttachmentUpdateManyWithoutReviewsInput {
    connect?: Nullable<AttachmentWhereUniqueInput[]>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutReviewsInput[]>;
    create?: Nullable<AttachmentCreateWithoutReviewsInput[]>;
    createMany?: Nullable<AttachmentCreateManyReviewsInputEnvelope>;
    delete?: Nullable<AttachmentWhereUniqueInput[]>;
    deleteMany?: Nullable<AttachmentScalarWhereInput[]>;
    disconnect?: Nullable<AttachmentWhereUniqueInput[]>;
    set?: Nullable<AttachmentWhereUniqueInput[]>;
    update?: Nullable<AttachmentUpdateWithWhereUniqueWithoutReviewsInput[]>;
    updateMany?: Nullable<AttachmentUpdateManyWithWhereWithoutReviewsInput[]>;
    upsert?: Nullable<AttachmentUpsertWithWhereUniqueWithoutReviewsInput[]>;
}

export class AttachmentUpdateOneRequiredWithoutPaymentMethodsInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutPaymentMethodsInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutPaymentMethodsInput>;
    update?: Nullable<AttachmentUncheckedUpdateWithoutPaymentMethodsInput>;
    upsert?: Nullable<AttachmentUpsertWithoutPaymentMethodsInput>;
}

export class AttachmentUpdateOneWithoutBusinessesInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutBusinessesInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutBusinessesInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<AttachmentUncheckedUpdateWithoutBusinessesInput>;
    upsert?: Nullable<AttachmentUpsertWithoutBusinessesInput>;
}

export class AttachmentUpdateOneWithoutCategoryInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutCategoryInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutCategoryInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<AttachmentUncheckedUpdateWithoutCategoryInput>;
    upsert?: Nullable<AttachmentUpsertWithoutCategoryInput>;
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

export class AttachmentUpdateOneWithoutUsersInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutUsersInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutUsersInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<AttachmentUncheckedUpdateWithoutUsersInput>;
    upsert?: Nullable<AttachmentUpsertWithoutUsersInput>;
}

export class AttachmentUpdateWithWhereUniqueWithoutBusinessInput {
    data: AttachmentUncheckedUpdateWithoutBusinessInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpdateWithWhereUniqueWithoutCommentInput {
    data: AttachmentUncheckedUpdateWithoutCommentInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpdateWithWhereUniqueWithoutHelpStepInput {
    data: AttachmentUncheckedUpdateWithoutHelpStepInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpdateWithWhereUniqueWithoutReviewsInput {
    data: AttachmentUncheckedUpdateWithoutReviewsInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpdateWithoutBusinessInput {
    Category?: Nullable<CategoryUpdateManyWithoutPictureInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    businesses?: Nullable<BusinessUpdateManyWithoutCoverInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutBusinessesInput {
    Category?: Nullable<CategoryUpdateManyWithoutPictureInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    business?: Nullable<BusinessUpdateOneWithoutAttachmentsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutCategoryInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    business?: Nullable<BusinessUpdateOneWithoutAttachmentsInput>;
    businesses?: Nullable<BusinessUpdateManyWithoutCoverInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutCommentInput {
    Category?: Nullable<CategoryUpdateManyWithoutPictureInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    business?: Nullable<BusinessUpdateOneWithoutAttachmentsInput>;
    businesses?: Nullable<BusinessUpdateManyWithoutCoverInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutHelpStepInput {
    Category?: Nullable<CategoryUpdateManyWithoutPictureInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    business?: Nullable<BusinessUpdateOneWithoutAttachmentsInput>;
    businesses?: Nullable<BusinessUpdateManyWithoutCoverInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutOrdersInput {
    Category?: Nullable<CategoryUpdateManyWithoutPictureInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    business?: Nullable<BusinessUpdateOneWithoutAttachmentsInput>;
    businesses?: Nullable<BusinessUpdateManyWithoutCoverInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutPaymentMethodsInput {
    Category?: Nullable<CategoryUpdateManyWithoutPictureInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    business?: Nullable<BusinessUpdateOneWithoutAttachmentsInput>;
    businesses?: Nullable<BusinessUpdateManyWithoutCoverInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutReviewsInput {
    Category?: Nullable<CategoryUpdateManyWithoutPictureInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    business?: Nullable<BusinessUpdateOneWithoutAttachmentsInput>;
    businesses?: Nullable<BusinessUpdateManyWithoutCoverInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutServicesInput {
    Category?: Nullable<CategoryUpdateManyWithoutPictureInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    business?: Nullable<BusinessUpdateOneWithoutAttachmentsInput>;
    businesses?: Nullable<BusinessUpdateManyWithoutCoverInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateOneWithoutAttachmentsInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutUsersInput {
    Category?: Nullable<CategoryUpdateManyWithoutPictureInput>;
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    business?: Nullable<BusinessUpdateOneWithoutAttachmentsInput>;
    businesses?: Nullable<BusinessUpdateManyWithoutCoverInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateOneWithoutAttachmentsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class AttachmentUpsertWithWhereUniqueWithoutBusinessInput {
    create: AttachmentUncheckedCreateWithoutBusinessInput;
    update: AttachmentUncheckedUpdateWithoutBusinessInput;
    where: AttachmentWhereUniqueInput;
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

export class AttachmentUpsertWithWhereUniqueWithoutReviewsInput {
    create: AttachmentUncheckedCreateWithoutReviewsInput;
    update: AttachmentUncheckedUpdateWithoutReviewsInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentUpsertWithoutBusinessesInput {
    create: AttachmentUncheckedCreateWithoutBusinessesInput;
    update: AttachmentUncheckedUpdateWithoutBusinessesInput;
}

export class AttachmentUpsertWithoutCategoryInput {
    create: AttachmentUncheckedCreateWithoutCategoryInput;
    update: AttachmentUncheckedUpdateWithoutCategoryInput;
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

export class AttachmentUpsertWithoutUsersInput {
    create: AttachmentUncheckedCreateWithoutUsersInput;
    update: AttachmentUncheckedUpdateWithoutUsersInput;
}

export class AttachmentWhereInput {
    AND?: Nullable<AttachmentWhereInput[]>;
    Category?: Nullable<CategoryListRelationFilter>;
    NOT?: Nullable<AttachmentWhereInput[]>;
    OR?: Nullable<AttachmentWhereInput[]>;
    attachmentType?: Nullable<EnumAttachmentTypeFilter>;
    business?: Nullable<BusinessWhereInput>;
    businessId?: Nullable<StringNullableFilter>;
    businesses?: Nullable<BusinessListRelationFilter>;
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
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    reviewId?: Nullable<StringNullableFilter>;
    reviews?: Nullable<ReviewWhereInput>;
    services?: Nullable<ServiceListRelationFilter>;
    size?: Nullable<IntFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
    userId?: Nullable<StringNullableFilter>;
    users?: Nullable<UserListRelationFilter>;
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

export class BusinessCreateInput {
    about: string;
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentCreateNestedManyWithoutBusinessInput>;
    businessName: string;
    cover?: Nullable<AttachmentCreateNestedOneWithoutBusinessesInput>;
    createdAt?: Nullable<DateTime>;
    favorite?: Nullable<FavoriteCreateNestedManyWithoutBusinessInput>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutBusinessesInput>;
    mode?: Nullable<BusinessMode>;
    orders?: Nullable<OrderCreateNestedManyWithoutBusinessInput>;
    owner: UserCreateNestedOneWithoutBusinessProfileInput;
    recordStatus?: Nullable<RecordStatus>;
    services?: Nullable<ServiceCreateNestedManyWithoutBusinessInput>;
    state?: Nullable<BusinessStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessCreateManyCoverInput {
    about: string;
    businessName: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    mode?: Nullable<BusinessMode>;
    ownerId: string;
    recordStatus?: Nullable<RecordStatus>;
    state?: Nullable<BusinessStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessCreateManyCoverInputEnvelope {
    data: BusinessCreateManyCoverInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class BusinessCreateManyInput {
    about: string;
    businessName: string;
    coverId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    mode?: Nullable<BusinessMode>;
    ownerId: string;
    recordStatus?: Nullable<RecordStatus>;
    state?: Nullable<BusinessStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessCreateManyLocationInput {
    about: string;
    businessName: string;
    coverId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mode?: Nullable<BusinessMode>;
    ownerId: string;
    recordStatus?: Nullable<RecordStatus>;
    state?: Nullable<BusinessStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessCreateManyLocationInputEnvelope {
    data: BusinessCreateManyLocationInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class BusinessCreateNestedManyWithoutCoverInput {
    connect?: Nullable<BusinessWhereUniqueInput[]>;
    connectOrCreate?: Nullable<BusinessCreateOrConnectWithoutCoverInput[]>;
    create?: Nullable<BusinessCreateWithoutCoverInput[]>;
    createMany?: Nullable<BusinessCreateManyCoverInputEnvelope>;
}

export class BusinessCreateNestedManyWithoutLocationInput {
    connect?: Nullable<BusinessWhereUniqueInput[]>;
    connectOrCreate?: Nullable<BusinessCreateOrConnectWithoutLocationInput[]>;
    create?: Nullable<BusinessCreateWithoutLocationInput[]>;
    createMany?: Nullable<BusinessCreateManyLocationInputEnvelope>;
}

export class BusinessCreateNestedOneWithoutAbuseReportsInput {
    connect?: Nullable<BusinessWhereUniqueInput>;
    connectOrCreate?: Nullable<BusinessCreateOrConnectWithoutAbuseReportsInput>;
    create?: Nullable<BusinessUncheckedCreateWithoutAbuseReportsInput>;
}

export class BusinessCreateNestedOneWithoutAttachmentsInput {
    connect?: Nullable<BusinessWhereUniqueInput>;
    connectOrCreate?: Nullable<BusinessCreateOrConnectWithoutAttachmentsInput>;
    create?: Nullable<BusinessUncheckedCreateWithoutAttachmentsInput>;
}

export class BusinessCreateNestedOneWithoutFavoriteInput {
    connect?: Nullable<BusinessWhereUniqueInput>;
    connectOrCreate?: Nullable<BusinessCreateOrConnectWithoutFavoriteInput>;
    create?: Nullable<BusinessUncheckedCreateWithoutFavoriteInput>;
}

export class BusinessCreateNestedOneWithoutOrdersInput {
    connect?: Nullable<BusinessWhereUniqueInput>;
    connectOrCreate?: Nullable<BusinessCreateOrConnectWithoutOrdersInput>;
    create?: Nullable<BusinessUncheckedCreateWithoutOrdersInput>;
}

export class BusinessCreateNestedOneWithoutOwnerInput {
    connect?: Nullable<BusinessWhereUniqueInput>;
    connectOrCreate?: Nullable<BusinessCreateOrConnectWithoutOwnerInput>;
    create?: Nullable<BusinessUncheckedCreateWithoutOwnerInput>;
}

export class BusinessCreateNestedOneWithoutServicesInput {
    connect?: Nullable<BusinessWhereUniqueInput>;
    connectOrCreate?: Nullable<BusinessCreateOrConnectWithoutServicesInput>;
    create?: Nullable<BusinessUncheckedCreateWithoutServicesInput>;
}

export class BusinessCreateOrConnectWithoutAbuseReportsInput {
    create: BusinessUncheckedCreateWithoutAbuseReportsInput;
    where: BusinessWhereUniqueInput;
}

export class BusinessCreateOrConnectWithoutAttachmentsInput {
    create: BusinessUncheckedCreateWithoutAttachmentsInput;
    where: BusinessWhereUniqueInput;
}

export class BusinessCreateOrConnectWithoutCoverInput {
    create: BusinessUncheckedCreateWithoutCoverInput;
    where: BusinessWhereUniqueInput;
}

export class BusinessCreateOrConnectWithoutFavoriteInput {
    create: BusinessUncheckedCreateWithoutFavoriteInput;
    where: BusinessWhereUniqueInput;
}

export class BusinessCreateOrConnectWithoutLocationInput {
    create: BusinessUncheckedCreateWithoutLocationInput;
    where: BusinessWhereUniqueInput;
}

export class BusinessCreateOrConnectWithoutOrdersInput {
    create: BusinessUncheckedCreateWithoutOrdersInput;
    where: BusinessWhereUniqueInput;
}

export class BusinessCreateOrConnectWithoutOwnerInput {
    create: BusinessUncheckedCreateWithoutOwnerInput;
    where: BusinessWhereUniqueInput;
}

export class BusinessCreateOrConnectWithoutServicesInput {
    create: BusinessUncheckedCreateWithoutServicesInput;
    where: BusinessWhereUniqueInput;
}

export class BusinessCreateWithoutAbuseReportsInput {
    about: string;
    attachments?: Nullable<AttachmentCreateNestedManyWithoutBusinessInput>;
    businessName: string;
    cover?: Nullable<AttachmentCreateNestedOneWithoutBusinessesInput>;
    createdAt?: Nullable<DateTime>;
    favorite?: Nullable<FavoriteCreateNestedManyWithoutBusinessInput>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutBusinessesInput>;
    mode?: Nullable<BusinessMode>;
    orders?: Nullable<OrderCreateNestedManyWithoutBusinessInput>;
    owner: UserCreateNestedOneWithoutBusinessProfileInput;
    recordStatus?: Nullable<RecordStatus>;
    services?: Nullable<ServiceCreateNestedManyWithoutBusinessInput>;
    state?: Nullable<BusinessStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessCreateWithoutAttachmentsInput {
    about: string;
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutBusinessInput>;
    businessName: string;
    cover?: Nullable<AttachmentCreateNestedOneWithoutBusinessesInput>;
    createdAt?: Nullable<DateTime>;
    favorite?: Nullable<FavoriteCreateNestedManyWithoutBusinessInput>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutBusinessesInput>;
    mode?: Nullable<BusinessMode>;
    orders?: Nullable<OrderCreateNestedManyWithoutBusinessInput>;
    owner: UserCreateNestedOneWithoutBusinessProfileInput;
    recordStatus?: Nullable<RecordStatus>;
    services?: Nullable<ServiceCreateNestedManyWithoutBusinessInput>;
    state?: Nullable<BusinessStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessCreateWithoutCoverInput {
    about: string;
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentCreateNestedManyWithoutBusinessInput>;
    businessName: string;
    createdAt?: Nullable<DateTime>;
    favorite?: Nullable<FavoriteCreateNestedManyWithoutBusinessInput>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutBusinessesInput>;
    mode?: Nullable<BusinessMode>;
    orders?: Nullable<OrderCreateNestedManyWithoutBusinessInput>;
    owner: UserCreateNestedOneWithoutBusinessProfileInput;
    recordStatus?: Nullable<RecordStatus>;
    services?: Nullable<ServiceCreateNestedManyWithoutBusinessInput>;
    state?: Nullable<BusinessStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessCreateWithoutFavoriteInput {
    about: string;
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentCreateNestedManyWithoutBusinessInput>;
    businessName: string;
    cover?: Nullable<AttachmentCreateNestedOneWithoutBusinessesInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutBusinessesInput>;
    mode?: Nullable<BusinessMode>;
    orders?: Nullable<OrderCreateNestedManyWithoutBusinessInput>;
    owner: UserCreateNestedOneWithoutBusinessProfileInput;
    recordStatus?: Nullable<RecordStatus>;
    services?: Nullable<ServiceCreateNestedManyWithoutBusinessInput>;
    state?: Nullable<BusinessStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessCreateWithoutLocationInput {
    about: string;
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentCreateNestedManyWithoutBusinessInput>;
    businessName: string;
    cover?: Nullable<AttachmentCreateNestedOneWithoutBusinessesInput>;
    createdAt?: Nullable<DateTime>;
    favorite?: Nullable<FavoriteCreateNestedManyWithoutBusinessInput>;
    id?: Nullable<string>;
    mode?: Nullable<BusinessMode>;
    orders?: Nullable<OrderCreateNestedManyWithoutBusinessInput>;
    owner: UserCreateNestedOneWithoutBusinessProfileInput;
    recordStatus?: Nullable<RecordStatus>;
    services?: Nullable<ServiceCreateNestedManyWithoutBusinessInput>;
    state?: Nullable<BusinessStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessCreateWithoutOrdersInput {
    about: string;
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentCreateNestedManyWithoutBusinessInput>;
    businessName: string;
    cover?: Nullable<AttachmentCreateNestedOneWithoutBusinessesInput>;
    createdAt?: Nullable<DateTime>;
    favorite?: Nullable<FavoriteCreateNestedManyWithoutBusinessInput>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutBusinessesInput>;
    mode?: Nullable<BusinessMode>;
    owner: UserCreateNestedOneWithoutBusinessProfileInput;
    recordStatus?: Nullable<RecordStatus>;
    services?: Nullable<ServiceCreateNestedManyWithoutBusinessInput>;
    state?: Nullable<BusinessStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessCreateWithoutOwnerInput {
    about: string;
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentCreateNestedManyWithoutBusinessInput>;
    businessName: string;
    cover?: Nullable<AttachmentCreateNestedOneWithoutBusinessesInput>;
    createdAt?: Nullable<DateTime>;
    favorite?: Nullable<FavoriteCreateNestedManyWithoutBusinessInput>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutBusinessesInput>;
    mode?: Nullable<BusinessMode>;
    orders?: Nullable<OrderCreateNestedManyWithoutBusinessInput>;
    recordStatus?: Nullable<RecordStatus>;
    services?: Nullable<ServiceCreateNestedManyWithoutBusinessInput>;
    state?: Nullable<BusinessStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessCreateWithoutServicesInput {
    about: string;
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentCreateNestedManyWithoutBusinessInput>;
    businessName: string;
    cover?: Nullable<AttachmentCreateNestedOneWithoutBusinessesInput>;
    createdAt?: Nullable<DateTime>;
    favorite?: Nullable<FavoriteCreateNestedManyWithoutBusinessInput>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutBusinessesInput>;
    mode?: Nullable<BusinessMode>;
    orders?: Nullable<OrderCreateNestedManyWithoutBusinessInput>;
    owner: UserCreateNestedOneWithoutBusinessProfileInput;
    recordStatus?: Nullable<RecordStatus>;
    state?: Nullable<BusinessStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessListRelationFilter {
    every?: Nullable<BusinessWhereInput>;
    none?: Nullable<BusinessWhereInput>;
    some?: Nullable<BusinessWhereInput>;
}

export class BusinessOrderByInput {
    about?: Nullable<SortOrder>;
    businessName?: Nullable<SortOrder>;
    coverId?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    locationId?: Nullable<SortOrder>;
    mode?: Nullable<SortOrder>;
    ownerId?: Nullable<SortOrder>;
    recordStatus?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class BusinessRelationFilter {
    is?: Nullable<BusinessWhereInput>;
    isNot?: Nullable<BusinessWhereInput>;
}

export class BusinessScalarWhereInput {
    AND?: Nullable<BusinessScalarWhereInput[]>;
    NOT?: Nullable<BusinessScalarWhereInput[]>;
    OR?: Nullable<BusinessScalarWhereInput[]>;
    about?: Nullable<StringFilter>;
    businessName?: Nullable<StringFilter>;
    coverId?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    locationId?: Nullable<StringNullableFilter>;
    mode?: Nullable<EnumBusinessModeFilter>;
    ownerId?: Nullable<StringFilter>;
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    state?: Nullable<EnumBusinessStatusFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class BusinessScalarWhereWithAggregatesInput {
    AND?: Nullable<BusinessScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<BusinessScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<BusinessScalarWhereWithAggregatesInput[]>;
    about?: Nullable<StringWithAggregatesFilter>;
    businessName?: Nullable<StringWithAggregatesFilter>;
    coverId?: Nullable<StringNullableWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    locationId?: Nullable<StringNullableWithAggregatesFilter>;
    mode?: Nullable<EnumBusinessModeWithAggregatesFilter>;
    ownerId?: Nullable<StringWithAggregatesFilter>;
    recordStatus?: Nullable<EnumRecordStatusWithAggregatesFilter>;
    state?: Nullable<EnumBusinessStatusWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class BusinessUncheckedCreateInput {
    about: string;
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutBusinessInput>;
    businessName: string;
    coverId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    favorite?: Nullable<FavoriteUncheckedCreateNestedManyWithoutBusinessInput>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    mode?: Nullable<BusinessMode>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutBusinessInput>;
    ownerId: string;
    recordStatus?: Nullable<RecordStatus>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutBusinessInput>;
    state?: Nullable<BusinessStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessUncheckedCreateNestedManyWithoutCoverInput {
    connect?: Nullable<BusinessWhereUniqueInput[]>;
    connectOrCreate?: Nullable<BusinessCreateOrConnectWithoutCoverInput[]>;
    create?: Nullable<BusinessCreateWithoutCoverInput[]>;
    createMany?: Nullable<BusinessCreateManyCoverInputEnvelope>;
}

export class BusinessUncheckedCreateNestedManyWithoutLocationInput {
    connect?: Nullable<BusinessWhereUniqueInput[]>;
    connectOrCreate?: Nullable<BusinessCreateOrConnectWithoutLocationInput[]>;
    create?: Nullable<BusinessCreateWithoutLocationInput[]>;
    createMany?: Nullable<BusinessCreateManyLocationInputEnvelope>;
}

export class BusinessUncheckedCreateNestedOneWithoutOwnerInput {
    connect?: Nullable<BusinessWhereUniqueInput>;
    connectOrCreate?: Nullable<BusinessCreateOrConnectWithoutOwnerInput>;
    create?: Nullable<BusinessUncheckedCreateWithoutOwnerInput>;
}

export class BusinessUncheckedCreateWithoutAbuseReportsInput {
    about: string;
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutBusinessInput>;
    businessName: string;
    coverId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    favorite?: Nullable<FavoriteUncheckedCreateNestedManyWithoutBusinessInput>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    mode?: Nullable<BusinessMode>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutBusinessInput>;
    ownerId: string;
    recordStatus?: Nullable<RecordStatus>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutBusinessInput>;
    state?: Nullable<BusinessStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessUncheckedCreateWithoutAttachmentsInput {
    about: string;
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutBusinessInput>;
    businessName: string;
    coverId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    favorite?: Nullable<FavoriteUncheckedCreateNestedManyWithoutBusinessInput>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    mode?: Nullable<BusinessMode>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutBusinessInput>;
    ownerId: string;
    recordStatus?: Nullable<RecordStatus>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutBusinessInput>;
    state?: Nullable<BusinessStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessUncheckedCreateWithoutCoverInput {
    about: string;
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutBusinessInput>;
    businessName: string;
    createdAt?: Nullable<DateTime>;
    favorite?: Nullable<FavoriteUncheckedCreateNestedManyWithoutBusinessInput>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    mode?: Nullable<BusinessMode>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutBusinessInput>;
    ownerId: string;
    recordStatus?: Nullable<RecordStatus>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutBusinessInput>;
    state?: Nullable<BusinessStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessUncheckedCreateWithoutFavoriteInput {
    about: string;
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutBusinessInput>;
    businessName: string;
    coverId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    mode?: Nullable<BusinessMode>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutBusinessInput>;
    ownerId: string;
    recordStatus?: Nullable<RecordStatus>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutBusinessInput>;
    state?: Nullable<BusinessStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessUncheckedCreateWithoutLocationInput {
    about: string;
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutBusinessInput>;
    businessName: string;
    coverId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    favorite?: Nullable<FavoriteUncheckedCreateNestedManyWithoutBusinessInput>;
    id?: Nullable<string>;
    mode?: Nullable<BusinessMode>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutBusinessInput>;
    ownerId: string;
    recordStatus?: Nullable<RecordStatus>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutBusinessInput>;
    state?: Nullable<BusinessStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessUncheckedCreateWithoutOrdersInput {
    about: string;
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutBusinessInput>;
    businessName: string;
    coverId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    favorite?: Nullable<FavoriteUncheckedCreateNestedManyWithoutBusinessInput>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    mode?: Nullable<BusinessMode>;
    ownerId: string;
    recordStatus?: Nullable<RecordStatus>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutBusinessInput>;
    state?: Nullable<BusinessStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessUncheckedCreateWithoutOwnerInput {
    about: string;
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutBusinessInput>;
    businessName: string;
    coverId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    favorite?: Nullable<FavoriteUncheckedCreateNestedManyWithoutBusinessInput>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    mode?: Nullable<BusinessMode>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutBusinessInput>;
    recordStatus?: Nullable<RecordStatus>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutBusinessInput>;
    state?: Nullable<BusinessStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessUncheckedCreateWithoutServicesInput {
    about: string;
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutBusinessInput>;
    businessName: string;
    coverId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    favorite?: Nullable<FavoriteUncheckedCreateNestedManyWithoutBusinessInput>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    mode?: Nullable<BusinessMode>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutBusinessInput>;
    ownerId: string;
    recordStatus?: Nullable<RecordStatus>;
    state?: Nullable<BusinessStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessUncheckedUpdateInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutBusinessInput>;
    businessName?: Nullable<StringFieldUpdateOperationsInput>;
    coverId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorite?: Nullable<FavoriteUncheckedUpdateManyWithoutBusinessInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    mode?: Nullable<EnumBusinessModeFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutBusinessInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutBusinessInput>;
    state?: Nullable<EnumBusinessStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessUncheckedUpdateManyInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    businessName?: Nullable<StringFieldUpdateOperationsInput>;
    coverId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    mode?: Nullable<EnumBusinessModeFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    state?: Nullable<EnumBusinessStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessUncheckedUpdateManyWithoutBusinessesInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    businessName?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    mode?: Nullable<EnumBusinessModeFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    state?: Nullable<EnumBusinessStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessUncheckedUpdateManyWithoutCoverInput {
    connect?: Nullable<BusinessWhereUniqueInput[]>;
    connectOrCreate?: Nullable<BusinessCreateOrConnectWithoutCoverInput[]>;
    create?: Nullable<BusinessCreateWithoutCoverInput[]>;
    createMany?: Nullable<BusinessCreateManyCoverInputEnvelope>;
    delete?: Nullable<BusinessWhereUniqueInput[]>;
    deleteMany?: Nullable<BusinessScalarWhereInput[]>;
    disconnect?: Nullable<BusinessWhereUniqueInput[]>;
    set?: Nullable<BusinessWhereUniqueInput[]>;
    update?: Nullable<BusinessUpdateWithWhereUniqueWithoutCoverInput[]>;
    updateMany?: Nullable<BusinessUpdateManyWithWhereWithoutCoverInput[]>;
    upsert?: Nullable<BusinessUpsertWithWhereUniqueWithoutCoverInput[]>;
}

export class BusinessUncheckedUpdateManyWithoutLocationInput {
    connect?: Nullable<BusinessWhereUniqueInput[]>;
    connectOrCreate?: Nullable<BusinessCreateOrConnectWithoutLocationInput[]>;
    create?: Nullable<BusinessCreateWithoutLocationInput[]>;
    createMany?: Nullable<BusinessCreateManyLocationInputEnvelope>;
    delete?: Nullable<BusinessWhereUniqueInput[]>;
    deleteMany?: Nullable<BusinessScalarWhereInput[]>;
    disconnect?: Nullable<BusinessWhereUniqueInput[]>;
    set?: Nullable<BusinessWhereUniqueInput[]>;
    update?: Nullable<BusinessUpdateWithWhereUniqueWithoutLocationInput[]>;
    updateMany?: Nullable<BusinessUpdateManyWithWhereWithoutLocationInput[]>;
    upsert?: Nullable<BusinessUpsertWithWhereUniqueWithoutLocationInput[]>;
}

export class BusinessUncheckedUpdateOneWithoutOwnerInput {
    connect?: Nullable<BusinessWhereUniqueInput>;
    connectOrCreate?: Nullable<BusinessCreateOrConnectWithoutOwnerInput>;
    create?: Nullable<BusinessUncheckedCreateWithoutOwnerInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<BusinessUncheckedUpdateWithoutOwnerInput>;
    upsert?: Nullable<BusinessUpsertWithoutOwnerInput>;
}

export class BusinessUncheckedUpdateWithoutAbuseReportsInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutBusinessInput>;
    businessName?: Nullable<StringFieldUpdateOperationsInput>;
    coverId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorite?: Nullable<FavoriteUncheckedUpdateManyWithoutBusinessInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    mode?: Nullable<EnumBusinessModeFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutBusinessInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutBusinessInput>;
    state?: Nullable<EnumBusinessStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessUncheckedUpdateWithoutAttachmentsInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutBusinessInput>;
    businessName?: Nullable<StringFieldUpdateOperationsInput>;
    coverId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorite?: Nullable<FavoriteUncheckedUpdateManyWithoutBusinessInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    mode?: Nullable<EnumBusinessModeFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutBusinessInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutBusinessInput>;
    state?: Nullable<EnumBusinessStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessUncheckedUpdateWithoutCoverInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutBusinessInput>;
    businessName?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorite?: Nullable<FavoriteUncheckedUpdateManyWithoutBusinessInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    mode?: Nullable<EnumBusinessModeFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutBusinessInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutBusinessInput>;
    state?: Nullable<EnumBusinessStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessUncheckedUpdateWithoutFavoriteInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutBusinessInput>;
    businessName?: Nullable<StringFieldUpdateOperationsInput>;
    coverId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    mode?: Nullable<EnumBusinessModeFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutBusinessInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutBusinessInput>;
    state?: Nullable<EnumBusinessStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessUncheckedUpdateWithoutLocationInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutBusinessInput>;
    businessName?: Nullable<StringFieldUpdateOperationsInput>;
    coverId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorite?: Nullable<FavoriteUncheckedUpdateManyWithoutBusinessInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mode?: Nullable<EnumBusinessModeFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutBusinessInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutBusinessInput>;
    state?: Nullable<EnumBusinessStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessUncheckedUpdateWithoutOrdersInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutBusinessInput>;
    businessName?: Nullable<StringFieldUpdateOperationsInput>;
    coverId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorite?: Nullable<FavoriteUncheckedUpdateManyWithoutBusinessInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    mode?: Nullable<EnumBusinessModeFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutBusinessInput>;
    state?: Nullable<EnumBusinessStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessUncheckedUpdateWithoutOwnerInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutBusinessInput>;
    businessName?: Nullable<StringFieldUpdateOperationsInput>;
    coverId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorite?: Nullable<FavoriteUncheckedUpdateManyWithoutBusinessInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    mode?: Nullable<EnumBusinessModeFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutBusinessInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutBusinessInput>;
    state?: Nullable<EnumBusinessStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessUncheckedUpdateWithoutServicesInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutBusinessInput>;
    businessName?: Nullable<StringFieldUpdateOperationsInput>;
    coverId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorite?: Nullable<FavoriteUncheckedUpdateManyWithoutBusinessInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    mode?: Nullable<EnumBusinessModeFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutBusinessInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    state?: Nullable<EnumBusinessStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessUpdateInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentUpdateManyWithoutBusinessInput>;
    businessName?: Nullable<StringFieldUpdateOperationsInput>;
    cover?: Nullable<AttachmentUpdateOneWithoutBusinessesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorite?: Nullable<FavoriteUpdateManyWithoutBusinessInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutBusinessesInput>;
    mode?: Nullable<EnumBusinessModeFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutBusinessInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutBusinessProfileInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutBusinessInput>;
    state?: Nullable<EnumBusinessStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessUpdateManyMutationInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    businessName?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mode?: Nullable<EnumBusinessModeFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    state?: Nullable<EnumBusinessStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessUpdateManyWithWhereWithoutCoverInput {
    data: BusinessUncheckedUpdateManyWithoutBusinessesInput;
    where: BusinessScalarWhereInput;
}

export class BusinessUpdateManyWithWhereWithoutLocationInput {
    data: BusinessUncheckedUpdateManyWithoutBusinessesInput;
    where: BusinessScalarWhereInput;
}

export class BusinessUpdateManyWithoutCoverInput {
    connect?: Nullable<BusinessWhereUniqueInput[]>;
    connectOrCreate?: Nullable<BusinessCreateOrConnectWithoutCoverInput[]>;
    create?: Nullable<BusinessCreateWithoutCoverInput[]>;
    createMany?: Nullable<BusinessCreateManyCoverInputEnvelope>;
    delete?: Nullable<BusinessWhereUniqueInput[]>;
    deleteMany?: Nullable<BusinessScalarWhereInput[]>;
    disconnect?: Nullable<BusinessWhereUniqueInput[]>;
    set?: Nullable<BusinessWhereUniqueInput[]>;
    update?: Nullable<BusinessUpdateWithWhereUniqueWithoutCoverInput[]>;
    updateMany?: Nullable<BusinessUpdateManyWithWhereWithoutCoverInput[]>;
    upsert?: Nullable<BusinessUpsertWithWhereUniqueWithoutCoverInput[]>;
}

export class BusinessUpdateManyWithoutLocationInput {
    connect?: Nullable<BusinessWhereUniqueInput[]>;
    connectOrCreate?: Nullable<BusinessCreateOrConnectWithoutLocationInput[]>;
    create?: Nullable<BusinessCreateWithoutLocationInput[]>;
    createMany?: Nullable<BusinessCreateManyLocationInputEnvelope>;
    delete?: Nullable<BusinessWhereUniqueInput[]>;
    deleteMany?: Nullable<BusinessScalarWhereInput[]>;
    disconnect?: Nullable<BusinessWhereUniqueInput[]>;
    set?: Nullable<BusinessWhereUniqueInput[]>;
    update?: Nullable<BusinessUpdateWithWhereUniqueWithoutLocationInput[]>;
    updateMany?: Nullable<BusinessUpdateManyWithWhereWithoutLocationInput[]>;
    upsert?: Nullable<BusinessUpsertWithWhereUniqueWithoutLocationInput[]>;
}

export class BusinessUpdateOneRequiredWithoutServicesInput {
    connect?: Nullable<BusinessWhereUniqueInput>;
    connectOrCreate?: Nullable<BusinessCreateOrConnectWithoutServicesInput>;
    create?: Nullable<BusinessUncheckedCreateWithoutServicesInput>;
    update?: Nullable<BusinessUncheckedUpdateWithoutServicesInput>;
    upsert?: Nullable<BusinessUpsertWithoutServicesInput>;
}

export class BusinessUpdateOneWithoutAbuseReportsInput {
    connect?: Nullable<BusinessWhereUniqueInput>;
    connectOrCreate?: Nullable<BusinessCreateOrConnectWithoutAbuseReportsInput>;
    create?: Nullable<BusinessUncheckedCreateWithoutAbuseReportsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<BusinessUncheckedUpdateWithoutAbuseReportsInput>;
    upsert?: Nullable<BusinessUpsertWithoutAbuseReportsInput>;
}

export class BusinessUpdateOneWithoutAttachmentsInput {
    connect?: Nullable<BusinessWhereUniqueInput>;
    connectOrCreate?: Nullable<BusinessCreateOrConnectWithoutAttachmentsInput>;
    create?: Nullable<BusinessUncheckedCreateWithoutAttachmentsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<BusinessUncheckedUpdateWithoutAttachmentsInput>;
    upsert?: Nullable<BusinessUpsertWithoutAttachmentsInput>;
}

export class BusinessUpdateOneWithoutFavoriteInput {
    connect?: Nullable<BusinessWhereUniqueInput>;
    connectOrCreate?: Nullable<BusinessCreateOrConnectWithoutFavoriteInput>;
    create?: Nullable<BusinessUncheckedCreateWithoutFavoriteInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<BusinessUncheckedUpdateWithoutFavoriteInput>;
    upsert?: Nullable<BusinessUpsertWithoutFavoriteInput>;
}

export class BusinessUpdateOneWithoutOrdersInput {
    connect?: Nullable<BusinessWhereUniqueInput>;
    connectOrCreate?: Nullable<BusinessCreateOrConnectWithoutOrdersInput>;
    create?: Nullable<BusinessUncheckedCreateWithoutOrdersInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<BusinessUncheckedUpdateWithoutOrdersInput>;
    upsert?: Nullable<BusinessUpsertWithoutOrdersInput>;
}

export class BusinessUpdateOneWithoutOwnerInput {
    connect?: Nullable<BusinessWhereUniqueInput>;
    connectOrCreate?: Nullable<BusinessCreateOrConnectWithoutOwnerInput>;
    create?: Nullable<BusinessUncheckedCreateWithoutOwnerInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<BusinessUncheckedUpdateWithoutOwnerInput>;
    upsert?: Nullable<BusinessUpsertWithoutOwnerInput>;
}

export class BusinessUpdateWithWhereUniqueWithoutCoverInput {
    data: BusinessUncheckedUpdateWithoutCoverInput;
    where: BusinessWhereUniqueInput;
}

export class BusinessUpdateWithWhereUniqueWithoutLocationInput {
    data: BusinessUncheckedUpdateWithoutLocationInput;
    where: BusinessWhereUniqueInput;
}

export class BusinessUpdateWithoutAbuseReportsInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    attachments?: Nullable<AttachmentUpdateManyWithoutBusinessInput>;
    businessName?: Nullable<StringFieldUpdateOperationsInput>;
    cover?: Nullable<AttachmentUpdateOneWithoutBusinessesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorite?: Nullable<FavoriteUpdateManyWithoutBusinessInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutBusinessesInput>;
    mode?: Nullable<EnumBusinessModeFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutBusinessInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutBusinessProfileInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutBusinessInput>;
    state?: Nullable<EnumBusinessStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessUpdateWithoutAttachmentsInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutBusinessInput>;
    businessName?: Nullable<StringFieldUpdateOperationsInput>;
    cover?: Nullable<AttachmentUpdateOneWithoutBusinessesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorite?: Nullable<FavoriteUpdateManyWithoutBusinessInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutBusinessesInput>;
    mode?: Nullable<EnumBusinessModeFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutBusinessInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutBusinessProfileInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutBusinessInput>;
    state?: Nullable<EnumBusinessStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessUpdateWithoutCoverInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentUpdateManyWithoutBusinessInput>;
    businessName?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorite?: Nullable<FavoriteUpdateManyWithoutBusinessInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutBusinessesInput>;
    mode?: Nullable<EnumBusinessModeFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutBusinessInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutBusinessProfileInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutBusinessInput>;
    state?: Nullable<EnumBusinessStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessUpdateWithoutFavoriteInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentUpdateManyWithoutBusinessInput>;
    businessName?: Nullable<StringFieldUpdateOperationsInput>;
    cover?: Nullable<AttachmentUpdateOneWithoutBusinessesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutBusinessesInput>;
    mode?: Nullable<EnumBusinessModeFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutBusinessInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutBusinessProfileInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutBusinessInput>;
    state?: Nullable<EnumBusinessStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessUpdateWithoutLocationInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentUpdateManyWithoutBusinessInput>;
    businessName?: Nullable<StringFieldUpdateOperationsInput>;
    cover?: Nullable<AttachmentUpdateOneWithoutBusinessesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorite?: Nullable<FavoriteUpdateManyWithoutBusinessInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mode?: Nullable<EnumBusinessModeFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutBusinessInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutBusinessProfileInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutBusinessInput>;
    state?: Nullable<EnumBusinessStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessUpdateWithoutOrdersInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentUpdateManyWithoutBusinessInput>;
    businessName?: Nullable<StringFieldUpdateOperationsInput>;
    cover?: Nullable<AttachmentUpdateOneWithoutBusinessesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorite?: Nullable<FavoriteUpdateManyWithoutBusinessInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutBusinessesInput>;
    mode?: Nullable<EnumBusinessModeFieldUpdateOperationsInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutBusinessProfileInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutBusinessInput>;
    state?: Nullable<EnumBusinessStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessUpdateWithoutOwnerInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentUpdateManyWithoutBusinessInput>;
    businessName?: Nullable<StringFieldUpdateOperationsInput>;
    cover?: Nullable<AttachmentUpdateOneWithoutBusinessesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorite?: Nullable<FavoriteUpdateManyWithoutBusinessInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutBusinessesInput>;
    mode?: Nullable<EnumBusinessModeFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutBusinessInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutBusinessInput>;
    state?: Nullable<EnumBusinessStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessUpdateWithoutServicesInput {
    about?: Nullable<StringFieldUpdateOperationsInput>;
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutBusinessInput>;
    attachments?: Nullable<AttachmentUpdateManyWithoutBusinessInput>;
    businessName?: Nullable<StringFieldUpdateOperationsInput>;
    cover?: Nullable<AttachmentUpdateOneWithoutBusinessesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorite?: Nullable<FavoriteUpdateManyWithoutBusinessInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutBusinessesInput>;
    mode?: Nullable<EnumBusinessModeFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutBusinessInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutBusinessProfileInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    state?: Nullable<EnumBusinessStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class BusinessUpsertWithWhereUniqueWithoutCoverInput {
    create: BusinessUncheckedCreateWithoutCoverInput;
    update: BusinessUncheckedUpdateWithoutCoverInput;
    where: BusinessWhereUniqueInput;
}

export class BusinessUpsertWithWhereUniqueWithoutLocationInput {
    create: BusinessUncheckedCreateWithoutLocationInput;
    update: BusinessUncheckedUpdateWithoutLocationInput;
    where: BusinessWhereUniqueInput;
}

export class BusinessUpsertWithoutAbuseReportsInput {
    create: BusinessUncheckedCreateWithoutAbuseReportsInput;
    update: BusinessUncheckedUpdateWithoutAbuseReportsInput;
}

export class BusinessUpsertWithoutAttachmentsInput {
    create: BusinessUncheckedCreateWithoutAttachmentsInput;
    update: BusinessUncheckedUpdateWithoutAttachmentsInput;
}

export class BusinessUpsertWithoutFavoriteInput {
    create: BusinessUncheckedCreateWithoutFavoriteInput;
    update: BusinessUncheckedUpdateWithoutFavoriteInput;
}

export class BusinessUpsertWithoutOrdersInput {
    create: BusinessUncheckedCreateWithoutOrdersInput;
    update: BusinessUncheckedUpdateWithoutOrdersInput;
}

export class BusinessUpsertWithoutOwnerInput {
    create: BusinessUncheckedCreateWithoutOwnerInput;
    update: BusinessUncheckedUpdateWithoutOwnerInput;
}

export class BusinessUpsertWithoutServicesInput {
    create: BusinessUncheckedCreateWithoutServicesInput;
    update: BusinessUncheckedUpdateWithoutServicesInput;
}

export class BusinessWhereInput {
    AND?: Nullable<BusinessWhereInput[]>;
    NOT?: Nullable<BusinessWhereInput[]>;
    OR?: Nullable<BusinessWhereInput[]>;
    about?: Nullable<StringFilter>;
    abuseReports?: Nullable<AbuseReportListRelationFilter>;
    attachments?: Nullable<AttachmentListRelationFilter>;
    businessName?: Nullable<StringFilter>;
    cover?: Nullable<AttachmentWhereInput>;
    coverId?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    favorite?: Nullable<FavoriteListRelationFilter>;
    id?: Nullable<StringFilter>;
    location?: Nullable<LocationWhereInput>;
    locationId?: Nullable<StringNullableFilter>;
    mode?: Nullable<EnumBusinessModeFilter>;
    orders?: Nullable<OrderListRelationFilter>;
    owner?: Nullable<UserWhereInput>;
    ownerId?: Nullable<StringFilter>;
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    services?: Nullable<ServiceListRelationFilter>;
    state?: Nullable<EnumBusinessStatusFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class BusinessWhereUniqueInput {
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

export class CategoryCreateInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    picture?: Nullable<AttachmentCreateNestedOneWithoutCategoryInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutCategoryInput>;
    updatedAt?: Nullable<DateTime>;
}

export class CategoryCreateManyInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    pictureId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class CategoryCreateManyPictureInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    updatedAt?: Nullable<DateTime>;
}

export class CategoryCreateManyPictureInputEnvelope {
    data: CategoryCreateManyPictureInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class CategoryCreateNestedManyWithoutPictureInput {
    connect?: Nullable<CategoryWhereUniqueInput[]>;
    connectOrCreate?: Nullable<CategoryCreateOrConnectWithoutPictureInput[]>;
    create?: Nullable<CategoryCreateWithoutPictureInput[]>;
    createMany?: Nullable<CategoryCreateManyPictureInputEnvelope>;
}

export class CategoryCreateNestedOneWithoutServicesInput {
    connect?: Nullable<CategoryWhereUniqueInput>;
    connectOrCreate?: Nullable<CategoryCreateOrConnectWithoutServicesInput>;
    create?: Nullable<CategoryUncheckedCreateWithoutServicesInput>;
}

export class CategoryCreateOrConnectWithoutPictureInput {
    create: CategoryUncheckedCreateWithoutPictureInput;
    where: CategoryWhereUniqueInput;
}

export class CategoryCreateOrConnectWithoutServicesInput {
    create: CategoryUncheckedCreateWithoutServicesInput;
    where: CategoryWhereUniqueInput;
}

export class CategoryCreateWithoutPictureInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    services?: Nullable<ServiceCreateNestedManyWithoutCategoryInput>;
    updatedAt?: Nullable<DateTime>;
}

export class CategoryCreateWithoutServicesInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    picture?: Nullable<AttachmentCreateNestedOneWithoutCategoryInput>;
    updatedAt?: Nullable<DateTime>;
}

export class CategoryListRelationFilter {
    every?: Nullable<CategoryWhereInput>;
    none?: Nullable<CategoryWhereInput>;
    some?: Nullable<CategoryWhereInput>;
}

export class CategoryOrderByInput {
    createdAt?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    pictureId?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class CategoryRelationFilter {
    is?: Nullable<CategoryWhereInput>;
    isNot?: Nullable<CategoryWhereInput>;
}

export class CategoryScalarWhereInput {
    AND?: Nullable<CategoryScalarWhereInput[]>;
    NOT?: Nullable<CategoryScalarWhereInput[]>;
    OR?: Nullable<CategoryScalarWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    description?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    name?: Nullable<StringFilter>;
    pictureId?: Nullable<StringNullableFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class CategoryScalarWhereWithAggregatesInput {
    AND?: Nullable<CategoryScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<CategoryScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<CategoryScalarWhereWithAggregatesInput[]>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    description?: Nullable<StringNullableWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    name?: Nullable<StringWithAggregatesFilter>;
    pictureId?: Nullable<StringNullableWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class CategoryUncheckedCreateInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    pictureId?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutCategoryInput>;
    updatedAt?: Nullable<DateTime>;
}

export class CategoryUncheckedCreateNestedManyWithoutPictureInput {
    connect?: Nullable<CategoryWhereUniqueInput[]>;
    connectOrCreate?: Nullable<CategoryCreateOrConnectWithoutPictureInput[]>;
    create?: Nullable<CategoryCreateWithoutPictureInput[]>;
    createMany?: Nullable<CategoryCreateManyPictureInputEnvelope>;
}

export class CategoryUncheckedCreateWithoutPictureInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutCategoryInput>;
    updatedAt?: Nullable<DateTime>;
}

export class CategoryUncheckedCreateWithoutServicesInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    pictureId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class CategoryUncheckedUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    pictureId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutCategoryInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CategoryUncheckedUpdateManyInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    pictureId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CategoryUncheckedUpdateManyWithoutCategoryInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CategoryUncheckedUpdateManyWithoutPictureInput {
    connect?: Nullable<CategoryWhereUniqueInput[]>;
    connectOrCreate?: Nullable<CategoryCreateOrConnectWithoutPictureInput[]>;
    create?: Nullable<CategoryCreateWithoutPictureInput[]>;
    createMany?: Nullable<CategoryCreateManyPictureInputEnvelope>;
    delete?: Nullable<CategoryWhereUniqueInput[]>;
    deleteMany?: Nullable<CategoryScalarWhereInput[]>;
    disconnect?: Nullable<CategoryWhereUniqueInput[]>;
    set?: Nullable<CategoryWhereUniqueInput[]>;
    update?: Nullable<CategoryUpdateWithWhereUniqueWithoutPictureInput[]>;
    updateMany?: Nullable<CategoryUpdateManyWithWhereWithoutPictureInput[]>;
    upsert?: Nullable<CategoryUpsertWithWhereUniqueWithoutPictureInput[]>;
}

export class CategoryUncheckedUpdateWithoutPictureInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutCategoryInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CategoryUncheckedUpdateWithoutServicesInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    pictureId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CategoryUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    picture?: Nullable<AttachmentUpdateOneWithoutCategoryInput>;
    services?: Nullable<ServiceUpdateManyWithoutCategoryInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CategoryUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CategoryUpdateManyWithWhereWithoutPictureInput {
    data: CategoryUncheckedUpdateManyWithoutCategoryInput;
    where: CategoryScalarWhereInput;
}

export class CategoryUpdateManyWithoutPictureInput {
    connect?: Nullable<CategoryWhereUniqueInput[]>;
    connectOrCreate?: Nullable<CategoryCreateOrConnectWithoutPictureInput[]>;
    create?: Nullable<CategoryCreateWithoutPictureInput[]>;
    createMany?: Nullable<CategoryCreateManyPictureInputEnvelope>;
    delete?: Nullable<CategoryWhereUniqueInput[]>;
    deleteMany?: Nullable<CategoryScalarWhereInput[]>;
    disconnect?: Nullable<CategoryWhereUniqueInput[]>;
    set?: Nullable<CategoryWhereUniqueInput[]>;
    update?: Nullable<CategoryUpdateWithWhereUniqueWithoutPictureInput[]>;
    updateMany?: Nullable<CategoryUpdateManyWithWhereWithoutPictureInput[]>;
    upsert?: Nullable<CategoryUpsertWithWhereUniqueWithoutPictureInput[]>;
}

export class CategoryUpdateOneWithoutServicesInput {
    connect?: Nullable<CategoryWhereUniqueInput>;
    connectOrCreate?: Nullable<CategoryCreateOrConnectWithoutServicesInput>;
    create?: Nullable<CategoryUncheckedCreateWithoutServicesInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<CategoryUncheckedUpdateWithoutServicesInput>;
    upsert?: Nullable<CategoryUpsertWithoutServicesInput>;
}

export class CategoryUpdateWithWhereUniqueWithoutPictureInput {
    data: CategoryUncheckedUpdateWithoutPictureInput;
    where: CategoryWhereUniqueInput;
}

export class CategoryUpdateWithoutPictureInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutCategoryInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CategoryUpdateWithoutServicesInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    picture?: Nullable<AttachmentUpdateOneWithoutCategoryInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CategoryUpsertWithWhereUniqueWithoutPictureInput {
    create: CategoryUncheckedCreateWithoutPictureInput;
    update: CategoryUncheckedUpdateWithoutPictureInput;
    where: CategoryWhereUniqueInput;
}

export class CategoryUpsertWithoutServicesInput {
    create: CategoryUncheckedCreateWithoutServicesInput;
    update: CategoryUncheckedUpdateWithoutServicesInput;
}

export class CategoryWhereInput {
    AND?: Nullable<CategoryWhereInput[]>;
    NOT?: Nullable<CategoryWhereInput[]>;
    OR?: Nullable<CategoryWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    description?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    name?: Nullable<StringFilter>;
    picture?: Nullable<AttachmentWhereInput>;
    pictureId?: Nullable<StringNullableFilter>;
    services?: Nullable<ServiceListRelationFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class CategoryWhereUniqueInput {
    id?: Nullable<string>;
}

export class CommentCreateInput {
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutCommentsInput>;
    attachments?: Nullable<AttachmentCreateNestedManyWithoutCommentInput>;
    author: UserCreateNestedOneWithoutCommentsInput;
    comment?: Nullable<CommentCreateNestedOneWithoutCommentsInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutCommentsInput>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    review?: Nullable<ReviewCreateNestedOneWithoutCommentsInput>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentCreateManyAuthorInput {
    commentId?: Nullable<string>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId: string;
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
    recordStatus?: Nullable<RecordStatus>;
    reviewId: string;
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
    recordStatus?: Nullable<RecordStatus>;
    reviewId: string;
    updatedAt?: Nullable<DateTime>;
}

export class CommentCreateManyReviewInput {
    authorId: string;
    commentId?: Nullable<string>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
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

export class CommentCreateNestedOneWithoutAbuseReportsInput {
    connect?: Nullable<CommentWhereUniqueInput>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutAbuseReportsInput>;
    create?: Nullable<CommentUncheckedCreateWithoutAbuseReportsInput>;
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

export class CommentCreateNestedOneWithoutFavoritesInput {
    connect?: Nullable<CommentWhereUniqueInput>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutFavoritesInput>;
    create?: Nullable<CommentUncheckedCreateWithoutFavoritesInput>;
}

export class CommentCreateOrConnectWithoutAbuseReportsInput {
    create: CommentUncheckedCreateWithoutAbuseReportsInput;
    where: CommentWhereUniqueInput;
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

export class CommentCreateOrConnectWithoutFavoritesInput {
    create: CommentUncheckedCreateWithoutFavoritesInput;
    where: CommentWhereUniqueInput;
}

export class CommentCreateOrConnectWithoutReviewInput {
    create: CommentUncheckedCreateWithoutReviewInput;
    where: CommentWhereUniqueInput;
}

export class CommentCreateWithoutAbuseReportsInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutCommentInput>;
    author: UserCreateNestedOneWithoutCommentsInput;
    comment?: Nullable<CommentCreateNestedOneWithoutCommentsInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutCommentsInput>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    review?: Nullable<ReviewCreateNestedOneWithoutCommentsInput>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentCreateWithoutAttachmentsInput {
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutCommentsInput>;
    author: UserCreateNestedOneWithoutCommentsInput;
    comment?: Nullable<CommentCreateNestedOneWithoutCommentsInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutCommentsInput>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    review?: Nullable<ReviewCreateNestedOneWithoutCommentsInput>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentCreateWithoutAuthorInput {
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutCommentsInput>;
    attachments?: Nullable<AttachmentCreateNestedManyWithoutCommentInput>;
    comment?: Nullable<CommentCreateNestedOneWithoutCommentsInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutCommentsInput>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    review?: Nullable<ReviewCreateNestedOneWithoutCommentsInput>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentCreateWithoutCommentInput {
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutCommentsInput>;
    attachments?: Nullable<AttachmentCreateNestedManyWithoutCommentInput>;
    author: UserCreateNestedOneWithoutCommentsInput;
    comments?: Nullable<CommentCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutCommentsInput>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    review?: Nullable<ReviewCreateNestedOneWithoutCommentsInput>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentCreateWithoutCommentsInput {
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutCommentsInput>;
    attachments?: Nullable<AttachmentCreateNestedManyWithoutCommentInput>;
    author: UserCreateNestedOneWithoutCommentsInput;
    comment?: Nullable<CommentCreateNestedOneWithoutCommentsInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutCommentsInput>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    review?: Nullable<ReviewCreateNestedOneWithoutCommentsInput>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentCreateWithoutFavoritesInput {
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutCommentsInput>;
    attachments?: Nullable<AttachmentCreateNestedManyWithoutCommentInput>;
    author: UserCreateNestedOneWithoutCommentsInput;
    comment?: Nullable<CommentCreateNestedOneWithoutCommentsInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    review?: Nullable<ReviewCreateNestedOneWithoutCommentsInput>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentCreateWithoutReviewInput {
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutCommentsInput>;
    attachments?: Nullable<AttachmentCreateNestedManyWithoutCommentInput>;
    author: UserCreateNestedOneWithoutCommentsInput;
    comment?: Nullable<CommentCreateNestedOneWithoutCommentsInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutCommentsInput>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
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
    recordStatus?: Nullable<SortOrder>;
    reviewId?: Nullable<SortOrder>;
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
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    reviewId?: Nullable<StringFilter>;
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
    recordStatus?: Nullable<EnumRecordStatusWithAggregatesFilter>;
    reviewId?: Nullable<StringWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class CommentUncheckedCreateInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutCommentsInput>;
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutCommentInput>;
    authorId: string;
    commentId?: Nullable<string>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutCommentsInput>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId: string;
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

export class CommentUncheckedCreateWithoutAbuseReportsInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutCommentInput>;
    authorId: string;
    commentId?: Nullable<string>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutCommentsInput>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId: string;
    updatedAt?: Nullable<DateTime>;
}

export class CommentUncheckedCreateWithoutAttachmentsInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutCommentsInput>;
    authorId: string;
    commentId?: Nullable<string>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutCommentsInput>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId: string;
    updatedAt?: Nullable<DateTime>;
}

export class CommentUncheckedCreateWithoutAuthorInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutCommentsInput>;
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutCommentInput>;
    commentId?: Nullable<string>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutCommentsInput>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId: string;
    updatedAt?: Nullable<DateTime>;
}

export class CommentUncheckedCreateWithoutCommentInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutCommentsInput>;
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutCommentInput>;
    authorId: string;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutCommentsInput>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId: string;
    updatedAt?: Nullable<DateTime>;
}

export class CommentUncheckedCreateWithoutCommentsInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutCommentsInput>;
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutCommentInput>;
    authorId: string;
    commentId?: Nullable<string>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutCommentsInput>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId: string;
    updatedAt?: Nullable<DateTime>;
}

export class CommentUncheckedCreateWithoutFavoritesInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutCommentsInput>;
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutCommentInput>;
    authorId: string;
    commentId?: Nullable<string>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId: string;
    updatedAt?: Nullable<DateTime>;
}

export class CommentUncheckedCreateWithoutReviewInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutCommentsInput>;
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutCommentInput>;
    authorId: string;
    commentId?: Nullable<string>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutCommentInput>;
    commentsEnabled?: Nullable<boolean>;
    content: string;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutCommentsInput>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentUncheckedUpdateInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutCommentsInput>;
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutCommentInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutCommentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUncheckedUpdateManyInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<StringFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<StringFieldUpdateOperationsInput>;
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

export class CommentUncheckedUpdateWithoutAbuseReportsInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutCommentInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutCommentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUncheckedUpdateWithoutAttachmentsInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutCommentsInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutCommentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUncheckedUpdateWithoutAuthorInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutCommentsInput>;
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutCommentInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutCommentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUncheckedUpdateWithoutCommentInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutCommentsInput>;
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutCommentInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutCommentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUncheckedUpdateWithoutCommentsInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutCommentsInput>;
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutCommentInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutCommentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUncheckedUpdateWithoutFavoritesInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutCommentsInput>;
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutCommentInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUncheckedUpdateWithoutReviewInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutCommentsInput>;
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutCommentInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutCommentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUpdateInput {
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutCommentsInput>;
    attachments?: Nullable<AttachmentUpdateManyWithoutCommentInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutCommentsInput>;
    comment?: Nullable<CommentUpdateOneWithoutCommentsInput>;
    comments?: Nullable<CommentUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutCommentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    review?: Nullable<ReviewUpdateOneWithoutCommentsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUpdateManyMutationInput {
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
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

export class CommentUpdateOneWithoutAbuseReportsInput {
    connect?: Nullable<CommentWhereUniqueInput>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutAbuseReportsInput>;
    create?: Nullable<CommentUncheckedCreateWithoutAbuseReportsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<CommentUncheckedUpdateWithoutAbuseReportsInput>;
    upsert?: Nullable<CommentUpsertWithoutAbuseReportsInput>;
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

export class CommentUpdateOneWithoutFavoritesInput {
    connect?: Nullable<CommentWhereUniqueInput>;
    connectOrCreate?: Nullable<CommentCreateOrConnectWithoutFavoritesInput>;
    create?: Nullable<CommentUncheckedCreateWithoutFavoritesInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<CommentUncheckedUpdateWithoutFavoritesInput>;
    upsert?: Nullable<CommentUpsertWithoutFavoritesInput>;
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

export class CommentUpdateWithoutAbuseReportsInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutCommentInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutCommentsInput>;
    comment?: Nullable<CommentUpdateOneWithoutCommentsInput>;
    comments?: Nullable<CommentUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutCommentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    review?: Nullable<ReviewUpdateOneWithoutCommentsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUpdateWithoutAttachmentsInput {
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutCommentsInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutCommentsInput>;
    comment?: Nullable<CommentUpdateOneWithoutCommentsInput>;
    comments?: Nullable<CommentUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutCommentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    review?: Nullable<ReviewUpdateOneWithoutCommentsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUpdateWithoutAuthorInput {
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutCommentsInput>;
    attachments?: Nullable<AttachmentUpdateManyWithoutCommentInput>;
    comment?: Nullable<CommentUpdateOneWithoutCommentsInput>;
    comments?: Nullable<CommentUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutCommentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    review?: Nullable<ReviewUpdateOneWithoutCommentsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUpdateWithoutCommentInput {
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutCommentsInput>;
    attachments?: Nullable<AttachmentUpdateManyWithoutCommentInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutCommentsInput>;
    comments?: Nullable<CommentUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutCommentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    review?: Nullable<ReviewUpdateOneWithoutCommentsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUpdateWithoutCommentsInput {
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutCommentsInput>;
    attachments?: Nullable<AttachmentUpdateManyWithoutCommentInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutCommentsInput>;
    comment?: Nullable<CommentUpdateOneWithoutCommentsInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutCommentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    review?: Nullable<ReviewUpdateOneWithoutCommentsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUpdateWithoutFavoritesInput {
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutCommentsInput>;
    attachments?: Nullable<AttachmentUpdateManyWithoutCommentInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutCommentsInput>;
    comment?: Nullable<CommentUpdateOneWithoutCommentsInput>;
    comments?: Nullable<CommentUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    review?: Nullable<ReviewUpdateOneWithoutCommentsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CommentUpdateWithoutReviewInput {
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutCommentsInput>;
    attachments?: Nullable<AttachmentUpdateManyWithoutCommentInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutCommentsInput>;
    comment?: Nullable<CommentUpdateOneWithoutCommentsInput>;
    comments?: Nullable<CommentUpdateManyWithoutCommentInput>;
    commentsEnabled?: Nullable<BoolFieldUpdateOperationsInput>;
    content?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutCommentsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
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

export class CommentUpsertWithoutAbuseReportsInput {
    create: CommentUncheckedCreateWithoutAbuseReportsInput;
    update: CommentUncheckedUpdateWithoutAbuseReportsInput;
}

export class CommentUpsertWithoutAttachmentsInput {
    create: CommentUncheckedCreateWithoutAttachmentsInput;
    update: CommentUncheckedUpdateWithoutAttachmentsInput;
}

export class CommentUpsertWithoutCommentsInput {
    create: CommentUncheckedCreateWithoutCommentsInput;
    update: CommentUncheckedUpdateWithoutCommentsInput;
}

export class CommentUpsertWithoutFavoritesInput {
    create: CommentUncheckedCreateWithoutFavoritesInput;
    update: CommentUncheckedUpdateWithoutFavoritesInput;
}

export class CommentWhereInput {
    AND?: Nullable<CommentWhereInput[]>;
    NOT?: Nullable<CommentWhereInput[]>;
    OR?: Nullable<CommentWhereInput[]>;
    abuseReports?: Nullable<AbuseReportListRelationFilter>;
    attachments?: Nullable<AttachmentListRelationFilter>;
    author?: Nullable<UserWhereInput>;
    authorId?: Nullable<StringFilter>;
    comment?: Nullable<CommentWhereInput>;
    commentId?: Nullable<StringNullableFilter>;
    comments?: Nullable<CommentListRelationFilter>;
    commentsEnabled?: Nullable<BoolFilter>;
    content?: Nullable<StringFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    favorites?: Nullable<FavoriteListRelationFilter>;
    id?: Nullable<StringFilter>;
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    review?: Nullable<ReviewWhereInput>;
    reviewId?: Nullable<StringFilter>;
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

export class DateTimeNullableFilter {
    equals?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    not?: Nullable<NestedDateTimeNullableFilter>;
    notIn?: Nullable<DateTime[]>;
}

export class DateTimeNullableWithAggregatesFilter {
    _count?: Nullable<NestedIntNullableFilter>;
    _max?: Nullable<NestedDateTimeNullableFilter>;
    _min?: Nullable<NestedDateTimeNullableFilter>;
    count?: Nullable<NestedIntNullableFilter>;
    equals?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    max?: Nullable<NestedDateTimeNullableFilter>;
    min?: Nullable<NestedDateTimeNullableFilter>;
    not?: Nullable<NestedDateTimeNullableWithAggregatesFilter>;
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
    recordStatus?: Nullable<RecordStatus>;
    type?: Nullable<string>;
    user?: Nullable<UserCreateNestedOneWithoutDeviceInput>;
}

export class DeviceCreateManyInput {
    fcm_id?: Nullable<string>;
    id: string;
    recordStatus?: Nullable<RecordStatus>;
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
    recordStatus?: Nullable<RecordStatus>;
    type?: Nullable<string>;
}

export class DeviceOrderByInput {
    fcm_id?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    recordStatus?: Nullable<SortOrder>;
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
    recordStatus?: Nullable<EnumRecordStatusWithAggregatesFilter>;
    type?: Nullable<StringWithAggregatesFilter>;
    userId?: Nullable<StringNullableWithAggregatesFilter>;
}

export class DeviceUncheckedCreateInput {
    fcm_id?: Nullable<string>;
    id: string;
    recordStatus?: Nullable<RecordStatus>;
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
    recordStatus?: Nullable<RecordStatus>;
    type?: Nullable<string>;
}

export class DeviceUncheckedUpdateInput {
    fcm_id?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    type?: Nullable<StringFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class DeviceUncheckedUpdateManyInput {
    fcm_id?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    type?: Nullable<StringFieldUpdateOperationsInput>;
}

export class DeviceUpdateInput {
    fcm_id?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    type?: Nullable<StringFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateOneWithoutDeviceInput>;
}

export class DeviceUpdateManyMutationInput {
    fcm_id?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    type?: Nullable<StringFilter>;
    user?: Nullable<UserWhereInput>;
    userId?: Nullable<StringNullableFilter>;
}

export class DeviceWhereUniqueInput {
    id?: Nullable<string>;
}

export class EnumAbuseReportStatusFieldUpdateOperationsInput {
    set?: Nullable<AbuseReportStatus>;
}

export class EnumAbuseReportStatusFilter {
    equals?: Nullable<AbuseReportStatus>;
    in?: Nullable<AbuseReportStatus[]>;
    not?: Nullable<NestedEnumAbuseReportStatusFilter>;
    notIn?: Nullable<AbuseReportStatus[]>;
}

export class EnumAbuseReportStatusWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumAbuseReportStatusFilter>;
    _min?: Nullable<NestedEnumAbuseReportStatusFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<AbuseReportStatus>;
    in?: Nullable<AbuseReportStatus[]>;
    max?: Nullable<NestedEnumAbuseReportStatusFilter>;
    min?: Nullable<NestedEnumAbuseReportStatusFilter>;
    not?: Nullable<NestedEnumAbuseReportStatusWithAggregatesFilter>;
    notIn?: Nullable<AbuseReportStatus[]>;
}

export class EnumAccountStatusFieldUpdateOperationsInput {
    set?: Nullable<AccountStatus>;
}

export class EnumAccountStatusFilter {
    equals?: Nullable<AccountStatus>;
    in?: Nullable<AccountStatus[]>;
    not?: Nullable<NestedEnumAccountStatusFilter>;
    notIn?: Nullable<AccountStatus[]>;
}

export class EnumAccountStatusWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumAccountStatusFilter>;
    _min?: Nullable<NestedEnumAccountStatusFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<AccountStatus>;
    in?: Nullable<AccountStatus[]>;
    max?: Nullable<NestedEnumAccountStatusFilter>;
    min?: Nullable<NestedEnumAccountStatusFilter>;
    not?: Nullable<NestedEnumAccountStatusWithAggregatesFilter>;
    notIn?: Nullable<AccountStatus[]>;
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

export class EnumBusinessModeFieldUpdateOperationsInput {
    set?: Nullable<BusinessMode>;
}

export class EnumBusinessModeFilter {
    equals?: Nullable<BusinessMode>;
    in?: Nullable<BusinessMode[]>;
    not?: Nullable<NestedEnumBusinessModeFilter>;
    notIn?: Nullable<BusinessMode[]>;
}

export class EnumBusinessModeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumBusinessModeFilter>;
    _min?: Nullable<NestedEnumBusinessModeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<BusinessMode>;
    in?: Nullable<BusinessMode[]>;
    max?: Nullable<NestedEnumBusinessModeFilter>;
    min?: Nullable<NestedEnumBusinessModeFilter>;
    not?: Nullable<NestedEnumBusinessModeWithAggregatesFilter>;
    notIn?: Nullable<BusinessMode[]>;
}

export class EnumBusinessStatusFieldUpdateOperationsInput {
    set?: Nullable<BusinessStatus>;
}

export class EnumBusinessStatusFilter {
    equals?: Nullable<BusinessStatus>;
    in?: Nullable<BusinessStatus[]>;
    not?: Nullable<NestedEnumBusinessStatusFilter>;
    notIn?: Nullable<BusinessStatus[]>;
}

export class EnumBusinessStatusWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumBusinessStatusFilter>;
    _min?: Nullable<NestedEnumBusinessStatusFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<BusinessStatus>;
    in?: Nullable<BusinessStatus[]>;
    max?: Nullable<NestedEnumBusinessStatusFilter>;
    min?: Nullable<NestedEnumBusinessStatusFilter>;
    not?: Nullable<NestedEnumBusinessStatusWithAggregatesFilter>;
    notIn?: Nullable<BusinessStatus[]>;
}

export class EnumGenderFieldUpdateOperationsInput {
    set?: Nullable<Gender>;
}

export class EnumGenderFilter {
    equals?: Nullable<Gender>;
    in?: Nullable<Gender[]>;
    not?: Nullable<NestedEnumGenderFilter>;
    notIn?: Nullable<Gender[]>;
}

export class EnumGenderWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumGenderFilter>;
    _min?: Nullable<NestedEnumGenderFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<Gender>;
    in?: Nullable<Gender[]>;
    max?: Nullable<NestedEnumGenderFilter>;
    min?: Nullable<NestedEnumGenderFilter>;
    not?: Nullable<NestedEnumGenderWithAggregatesFilter>;
    notIn?: Nullable<Gender[]>;
}

export class EnumOrderStatusFieldUpdateOperationsInput {
    set?: Nullable<OrderStatus>;
}

export class EnumOrderStatusFilter {
    equals?: Nullable<OrderStatus>;
    in?: Nullable<OrderStatus[]>;
    not?: Nullable<NestedEnumOrderStatusFilter>;
    notIn?: Nullable<OrderStatus[]>;
}

export class EnumOrderStatusWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumOrderStatusFilter>;
    _min?: Nullable<NestedEnumOrderStatusFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<OrderStatus>;
    in?: Nullable<OrderStatus[]>;
    max?: Nullable<NestedEnumOrderStatusFilter>;
    min?: Nullable<NestedEnumOrderStatusFilter>;
    not?: Nullable<NestedEnumOrderStatusWithAggregatesFilter>;
    notIn?: Nullable<OrderStatus[]>;
}

export class EnumPaymentMethodStatusFieldUpdateOperationsInput {
    set?: Nullable<PaymentMethodStatus>;
}

export class EnumPaymentMethodStatusFilter {
    equals?: Nullable<PaymentMethodStatus>;
    in?: Nullable<PaymentMethodStatus[]>;
    not?: Nullable<NestedEnumPaymentMethodStatusFilter>;
    notIn?: Nullable<PaymentMethodStatus[]>;
}

export class EnumPaymentMethodStatusWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumPaymentMethodStatusFilter>;
    _min?: Nullable<NestedEnumPaymentMethodStatusFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<PaymentMethodStatus>;
    in?: Nullable<PaymentMethodStatus[]>;
    max?: Nullable<NestedEnumPaymentMethodStatusFilter>;
    min?: Nullable<NestedEnumPaymentMethodStatusFilter>;
    not?: Nullable<NestedEnumPaymentMethodStatusWithAggregatesFilter>;
    notIn?: Nullable<PaymentMethodStatus[]>;
}

export class EnumPaymentStatusFieldUpdateOperationsInput {
    set?: Nullable<PaymentStatus>;
}

export class EnumPaymentStatusFilter {
    equals?: Nullable<PaymentStatus>;
    in?: Nullable<PaymentStatus[]>;
    not?: Nullable<NestedEnumPaymentStatusFilter>;
    notIn?: Nullable<PaymentStatus[]>;
}

export class EnumPaymentStatusWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumPaymentStatusFilter>;
    _min?: Nullable<NestedEnumPaymentStatusFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<PaymentStatus>;
    in?: Nullable<PaymentStatus[]>;
    max?: Nullable<NestedEnumPaymentStatusFilter>;
    min?: Nullable<NestedEnumPaymentStatusFilter>;
    not?: Nullable<NestedEnumPaymentStatusWithAggregatesFilter>;
    notIn?: Nullable<PaymentStatus[]>;
}

export class EnumRecordStatusFieldUpdateOperationsInput {
    set?: Nullable<RecordStatus>;
}

export class EnumRecordStatusFilter {
    equals?: Nullable<RecordStatus>;
    in?: Nullable<RecordStatus[]>;
    not?: Nullable<NestedEnumRecordStatusFilter>;
    notIn?: Nullable<RecordStatus[]>;
}

export class EnumRecordStatusWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumRecordStatusFilter>;
    _min?: Nullable<NestedEnumRecordStatusFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<RecordStatus>;
    in?: Nullable<RecordStatus[]>;
    max?: Nullable<NestedEnumRecordStatusFilter>;
    min?: Nullable<NestedEnumRecordStatusFilter>;
    not?: Nullable<NestedEnumRecordStatusWithAggregatesFilter>;
    notIn?: Nullable<RecordStatus[]>;
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

export class EnumTransactionStatusFieldUpdateOperationsInput {
    set?: Nullable<TransactionStatus>;
}

export class EnumTransactionStatusFilter {
    equals?: Nullable<TransactionStatus>;
    in?: Nullable<TransactionStatus[]>;
    not?: Nullable<NestedEnumTransactionStatusFilter>;
    notIn?: Nullable<TransactionStatus[]>;
}

export class EnumTransactionStatusWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumTransactionStatusFilter>;
    _min?: Nullable<NestedEnumTransactionStatusFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<TransactionStatus>;
    in?: Nullable<TransactionStatus[]>;
    max?: Nullable<NestedEnumTransactionStatusFilter>;
    min?: Nullable<NestedEnumTransactionStatusFilter>;
    not?: Nullable<NestedEnumTransactionStatusWithAggregatesFilter>;
    notIn?: Nullable<TransactionStatus[]>;
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

export class FavoriteCreateInput {
    Business?: Nullable<BusinessCreateNestedOneWithoutFavoriteInput>;
    author: UserCreateNestedOneWithoutFavoritedInput;
    comments?: Nullable<CommentCreateNestedOneWithoutFavoritesInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedOneWithoutFavoritesInput>;
    recordStatus?: Nullable<RecordStatus>;
    reviews?: Nullable<ReviewCreateNestedOneWithoutFavoritesInput>;
    service?: Nullable<ServiceCreateNestedOneWithoutFavoritesInput>;
    type: FavoriteRecordTypeCreateNestedOneWithoutFavoritesInput;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedOneWithoutFavoritesInput>;
}

export class FavoriteCreateManyAuthorInput {
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class FavoriteCreateManyAuthorInputEnvelope {
    data: FavoriteCreateManyAuthorInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class FavoriteCreateManyBusinessInput {
    authorId: string;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class FavoriteCreateManyBusinessInputEnvelope {
    data: FavoriteCreateManyBusinessInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class FavoriteCreateManyCommentsInput {
    authorId: string;
    businessId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class FavoriteCreateManyCommentsInputEnvelope {
    data: FavoriteCreateManyCommentsInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class FavoriteCreateManyInput {
    authorId: string;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class FavoriteCreateManyOrdersInput {
    authorId: string;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class FavoriteCreateManyOrdersInputEnvelope {
    data: FavoriteCreateManyOrdersInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class FavoriteCreateManyReviewsInput {
    authorId: string;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    serviceId?: Nullable<string>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class FavoriteCreateManyReviewsInputEnvelope {
    data: FavoriteCreateManyReviewsInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class FavoriteCreateManyServiceInput {
    authorId: string;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class FavoriteCreateManyServiceInputEnvelope {
    data: FavoriteCreateManyServiceInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class FavoriteCreateManyTypeInput {
    authorId: string;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class FavoriteCreateManyTypeInputEnvelope {
    data: FavoriteCreateManyTypeInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class FavoriteCreateManyUsersInput {
    authorId: string;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
}

export class FavoriteCreateManyUsersInputEnvelope {
    data: FavoriteCreateManyUsersInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class FavoriteCreateNestedManyWithoutAuthorInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<FavoriteCreateWithoutAuthorInput[]>;
    createMany?: Nullable<FavoriteCreateManyAuthorInputEnvelope>;
}

export class FavoriteCreateNestedManyWithoutBusinessInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutBusinessInput[]>;
    create?: Nullable<FavoriteCreateWithoutBusinessInput[]>;
    createMany?: Nullable<FavoriteCreateManyBusinessInputEnvelope>;
}

export class FavoriteCreateNestedManyWithoutCommentsInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutCommentsInput[]>;
    create?: Nullable<FavoriteCreateWithoutCommentsInput[]>;
    createMany?: Nullable<FavoriteCreateManyCommentsInputEnvelope>;
}

export class FavoriteCreateNestedManyWithoutOrdersInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutOrdersInput[]>;
    create?: Nullable<FavoriteCreateWithoutOrdersInput[]>;
    createMany?: Nullable<FavoriteCreateManyOrdersInputEnvelope>;
}

export class FavoriteCreateNestedManyWithoutReviewsInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutReviewsInput[]>;
    create?: Nullable<FavoriteCreateWithoutReviewsInput[]>;
    createMany?: Nullable<FavoriteCreateManyReviewsInputEnvelope>;
}

export class FavoriteCreateNestedManyWithoutServiceInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutServiceInput[]>;
    create?: Nullable<FavoriteCreateWithoutServiceInput[]>;
    createMany?: Nullable<FavoriteCreateManyServiceInputEnvelope>;
}

export class FavoriteCreateNestedManyWithoutTypeInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutTypeInput[]>;
    create?: Nullable<FavoriteCreateWithoutTypeInput[]>;
    createMany?: Nullable<FavoriteCreateManyTypeInputEnvelope>;
}

export class FavoriteCreateNestedManyWithoutUsersInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutUsersInput[]>;
    create?: Nullable<FavoriteCreateWithoutUsersInput[]>;
    createMany?: Nullable<FavoriteCreateManyUsersInputEnvelope>;
}

export class FavoriteCreateOrConnectWithoutAuthorInput {
    create: FavoriteUncheckedCreateWithoutAuthorInput;
    where: FavoriteWhereUniqueInput;
}

export class FavoriteCreateOrConnectWithoutBusinessInput {
    create: FavoriteUncheckedCreateWithoutBusinessInput;
    where: FavoriteWhereUniqueInput;
}

export class FavoriteCreateOrConnectWithoutCommentsInput {
    create: FavoriteUncheckedCreateWithoutCommentsInput;
    where: FavoriteWhereUniqueInput;
}

export class FavoriteCreateOrConnectWithoutOrdersInput {
    create: FavoriteUncheckedCreateWithoutOrdersInput;
    where: FavoriteWhereUniqueInput;
}

export class FavoriteCreateOrConnectWithoutReviewsInput {
    create: FavoriteUncheckedCreateWithoutReviewsInput;
    where: FavoriteWhereUniqueInput;
}

export class FavoriteCreateOrConnectWithoutServiceInput {
    create: FavoriteUncheckedCreateWithoutServiceInput;
    where: FavoriteWhereUniqueInput;
}

export class FavoriteCreateOrConnectWithoutTypeInput {
    create: FavoriteUncheckedCreateWithoutTypeInput;
    where: FavoriteWhereUniqueInput;
}

export class FavoriteCreateOrConnectWithoutUsersInput {
    create: FavoriteUncheckedCreateWithoutUsersInput;
    where: FavoriteWhereUniqueInput;
}

export class FavoriteCreateWithoutAuthorInput {
    Business?: Nullable<BusinessCreateNestedOneWithoutFavoriteInput>;
    comments?: Nullable<CommentCreateNestedOneWithoutFavoritesInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedOneWithoutFavoritesInput>;
    recordStatus?: Nullable<RecordStatus>;
    reviews?: Nullable<ReviewCreateNestedOneWithoutFavoritesInput>;
    service?: Nullable<ServiceCreateNestedOneWithoutFavoritesInput>;
    type: FavoriteRecordTypeCreateNestedOneWithoutFavoritesInput;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedOneWithoutFavoritesInput>;
}

export class FavoriteCreateWithoutBusinessInput {
    author: UserCreateNestedOneWithoutFavoritedInput;
    comments?: Nullable<CommentCreateNestedOneWithoutFavoritesInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedOneWithoutFavoritesInput>;
    recordStatus?: Nullable<RecordStatus>;
    reviews?: Nullable<ReviewCreateNestedOneWithoutFavoritesInput>;
    service?: Nullable<ServiceCreateNestedOneWithoutFavoritesInput>;
    type: FavoriteRecordTypeCreateNestedOneWithoutFavoritesInput;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedOneWithoutFavoritesInput>;
}

export class FavoriteCreateWithoutCommentsInput {
    Business?: Nullable<BusinessCreateNestedOneWithoutFavoriteInput>;
    author: UserCreateNestedOneWithoutFavoritedInput;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedOneWithoutFavoritesInput>;
    recordStatus?: Nullable<RecordStatus>;
    reviews?: Nullable<ReviewCreateNestedOneWithoutFavoritesInput>;
    service?: Nullable<ServiceCreateNestedOneWithoutFavoritesInput>;
    type: FavoriteRecordTypeCreateNestedOneWithoutFavoritesInput;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedOneWithoutFavoritesInput>;
}

export class FavoriteCreateWithoutOrdersInput {
    Business?: Nullable<BusinessCreateNestedOneWithoutFavoriteInput>;
    author: UserCreateNestedOneWithoutFavoritedInput;
    comments?: Nullable<CommentCreateNestedOneWithoutFavoritesInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviews?: Nullable<ReviewCreateNestedOneWithoutFavoritesInput>;
    service?: Nullable<ServiceCreateNestedOneWithoutFavoritesInput>;
    type: FavoriteRecordTypeCreateNestedOneWithoutFavoritesInput;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedOneWithoutFavoritesInput>;
}

export class FavoriteCreateWithoutReviewsInput {
    Business?: Nullable<BusinessCreateNestedOneWithoutFavoriteInput>;
    author: UserCreateNestedOneWithoutFavoritedInput;
    comments?: Nullable<CommentCreateNestedOneWithoutFavoritesInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedOneWithoutFavoritesInput>;
    recordStatus?: Nullable<RecordStatus>;
    service?: Nullable<ServiceCreateNestedOneWithoutFavoritesInput>;
    type: FavoriteRecordTypeCreateNestedOneWithoutFavoritesInput;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedOneWithoutFavoritesInput>;
}

export class FavoriteCreateWithoutServiceInput {
    Business?: Nullable<BusinessCreateNestedOneWithoutFavoriteInput>;
    author: UserCreateNestedOneWithoutFavoritedInput;
    comments?: Nullable<CommentCreateNestedOneWithoutFavoritesInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedOneWithoutFavoritesInput>;
    recordStatus?: Nullable<RecordStatus>;
    reviews?: Nullable<ReviewCreateNestedOneWithoutFavoritesInput>;
    type: FavoriteRecordTypeCreateNestedOneWithoutFavoritesInput;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedOneWithoutFavoritesInput>;
}

export class FavoriteCreateWithoutTypeInput {
    Business?: Nullable<BusinessCreateNestedOneWithoutFavoriteInput>;
    author: UserCreateNestedOneWithoutFavoritedInput;
    comments?: Nullable<CommentCreateNestedOneWithoutFavoritesInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedOneWithoutFavoritesInput>;
    recordStatus?: Nullable<RecordStatus>;
    reviews?: Nullable<ReviewCreateNestedOneWithoutFavoritesInput>;
    service?: Nullable<ServiceCreateNestedOneWithoutFavoritesInput>;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedOneWithoutFavoritesInput>;
}

export class FavoriteCreateWithoutUsersInput {
    Business?: Nullable<BusinessCreateNestedOneWithoutFavoriteInput>;
    author: UserCreateNestedOneWithoutFavoritedInput;
    comments?: Nullable<CommentCreateNestedOneWithoutFavoritesInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedOneWithoutFavoritesInput>;
    recordStatus?: Nullable<RecordStatus>;
    reviews?: Nullable<ReviewCreateNestedOneWithoutFavoritesInput>;
    service?: Nullable<ServiceCreateNestedOneWithoutFavoritesInput>;
    type: FavoriteRecordTypeCreateNestedOneWithoutFavoritesInput;
    updatedAt?: Nullable<DateTime>;
}

export class FavoriteListRelationFilter {
    every?: Nullable<FavoriteWhereInput>;
    none?: Nullable<FavoriteWhereInput>;
    some?: Nullable<FavoriteWhereInput>;
}

export class FavoriteOrderByInput {
    authorId?: Nullable<SortOrder>;
    businessId?: Nullable<SortOrder>;
    commentId?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    orderId?: Nullable<SortOrder>;
    recordStatus?: Nullable<SortOrder>;
    reviewId?: Nullable<SortOrder>;
    serviceId?: Nullable<SortOrder>;
    typeId?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
}

export class FavoriteRecordTypeCreateInput {
    favorites?: Nullable<FavoriteCreateNestedManyWithoutTypeInput>;
    id?: Nullable<string>;
    name: string;
}

export class FavoriteRecordTypeCreateManyInput {
    id?: Nullable<string>;
    name: string;
}

export class FavoriteRecordTypeCreateNestedOneWithoutFavoritesInput {
    connect?: Nullable<FavoriteRecordTypeWhereUniqueInput>;
    connectOrCreate?: Nullable<FavoriteRecordTypeCreateOrConnectWithoutFavoritesInput>;
    create?: Nullable<FavoriteRecordTypeUncheckedCreateWithoutFavoritesInput>;
}

export class FavoriteRecordTypeCreateOrConnectWithoutFavoritesInput {
    create: FavoriteRecordTypeUncheckedCreateWithoutFavoritesInput;
    where: FavoriteRecordTypeWhereUniqueInput;
}

export class FavoriteRecordTypeCreateWithoutFavoritesInput {
    id?: Nullable<string>;
    name: string;
}

export class FavoriteRecordTypeOrderByInput {
    id?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
}

export class FavoriteRecordTypeRelationFilter {
    is?: Nullable<FavoriteRecordTypeWhereInput>;
    isNot?: Nullable<FavoriteRecordTypeWhereInput>;
}

export class FavoriteRecordTypeScalarWhereWithAggregatesInput {
    AND?: Nullable<FavoriteRecordTypeScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<FavoriteRecordTypeScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<FavoriteRecordTypeScalarWhereWithAggregatesInput[]>;
    id?: Nullable<StringWithAggregatesFilter>;
    name?: Nullable<StringWithAggregatesFilter>;
}

export class FavoriteRecordTypeUncheckedCreateInput {
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutTypeInput>;
    id?: Nullable<string>;
    name: string;
}

export class FavoriteRecordTypeUncheckedCreateWithoutFavoritesInput {
    id?: Nullable<string>;
    name: string;
}

export class FavoriteRecordTypeUncheckedUpdateInput {
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutTypeInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
}

export class FavoriteRecordTypeUncheckedUpdateManyInput {
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
}

export class FavoriteRecordTypeUncheckedUpdateWithoutFavoritesInput {
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
}

export class FavoriteRecordTypeUpdateInput {
    favorites?: Nullable<FavoriteUpdateManyWithoutTypeInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
}

export class FavoriteRecordTypeUpdateManyMutationInput {
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
}

export class FavoriteRecordTypeUpdateOneRequiredWithoutFavoritesInput {
    connect?: Nullable<FavoriteRecordTypeWhereUniqueInput>;
    connectOrCreate?: Nullable<FavoriteRecordTypeCreateOrConnectWithoutFavoritesInput>;
    create?: Nullable<FavoriteRecordTypeUncheckedCreateWithoutFavoritesInput>;
    update?: Nullable<FavoriteRecordTypeUncheckedUpdateWithoutFavoritesInput>;
    upsert?: Nullable<FavoriteRecordTypeUpsertWithoutFavoritesInput>;
}

export class FavoriteRecordTypeUpdateWithoutFavoritesInput {
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
}

export class FavoriteRecordTypeUpsertWithoutFavoritesInput {
    create: FavoriteRecordTypeUncheckedCreateWithoutFavoritesInput;
    update: FavoriteRecordTypeUncheckedUpdateWithoutFavoritesInput;
}

export class FavoriteRecordTypeWhereInput {
    AND?: Nullable<FavoriteRecordTypeWhereInput[]>;
    NOT?: Nullable<FavoriteRecordTypeWhereInput[]>;
    OR?: Nullable<FavoriteRecordTypeWhereInput[]>;
    favorites?: Nullable<FavoriteListRelationFilter>;
    id?: Nullable<StringFilter>;
    name?: Nullable<StringFilter>;
}

export class FavoriteRecordTypeWhereUniqueInput {
    id?: Nullable<string>;
}

export class FavoriteScalarWhereInput {
    AND?: Nullable<FavoriteScalarWhereInput[]>;
    NOT?: Nullable<FavoriteScalarWhereInput[]>;
    OR?: Nullable<FavoriteScalarWhereInput[]>;
    authorId?: Nullable<StringFilter>;
    businessId?: Nullable<StringNullableFilter>;
    commentId?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    orderId?: Nullable<StringNullableFilter>;
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    reviewId?: Nullable<StringNullableFilter>;
    serviceId?: Nullable<StringNullableFilter>;
    typeId?: Nullable<StringFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
    userId?: Nullable<StringNullableFilter>;
}

export class FavoriteScalarWhereWithAggregatesInput {
    AND?: Nullable<FavoriteScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<FavoriteScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<FavoriteScalarWhereWithAggregatesInput[]>;
    authorId?: Nullable<StringWithAggregatesFilter>;
    businessId?: Nullable<StringNullableWithAggregatesFilter>;
    commentId?: Nullable<StringNullableWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    orderId?: Nullable<StringNullableWithAggregatesFilter>;
    recordStatus?: Nullable<EnumRecordStatusWithAggregatesFilter>;
    reviewId?: Nullable<StringNullableWithAggregatesFilter>;
    serviceId?: Nullable<StringNullableWithAggregatesFilter>;
    typeId?: Nullable<StringWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
    userId?: Nullable<StringNullableWithAggregatesFilter>;
}

export class FavoriteUncheckedCreateInput {
    authorId: string;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class FavoriteUncheckedCreateNestedManyWithoutAuthorInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<FavoriteCreateWithoutAuthorInput[]>;
    createMany?: Nullable<FavoriteCreateManyAuthorInputEnvelope>;
}

export class FavoriteUncheckedCreateNestedManyWithoutBusinessInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutBusinessInput[]>;
    create?: Nullable<FavoriteCreateWithoutBusinessInput[]>;
    createMany?: Nullable<FavoriteCreateManyBusinessInputEnvelope>;
}

export class FavoriteUncheckedCreateNestedManyWithoutCommentsInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutCommentsInput[]>;
    create?: Nullable<FavoriteCreateWithoutCommentsInput[]>;
    createMany?: Nullable<FavoriteCreateManyCommentsInputEnvelope>;
}

export class FavoriteUncheckedCreateNestedManyWithoutOrdersInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutOrdersInput[]>;
    create?: Nullable<FavoriteCreateWithoutOrdersInput[]>;
    createMany?: Nullable<FavoriteCreateManyOrdersInputEnvelope>;
}

export class FavoriteUncheckedCreateNestedManyWithoutReviewsInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutReviewsInput[]>;
    create?: Nullable<FavoriteCreateWithoutReviewsInput[]>;
    createMany?: Nullable<FavoriteCreateManyReviewsInputEnvelope>;
}

export class FavoriteUncheckedCreateNestedManyWithoutServiceInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutServiceInput[]>;
    create?: Nullable<FavoriteCreateWithoutServiceInput[]>;
    createMany?: Nullable<FavoriteCreateManyServiceInputEnvelope>;
}

export class FavoriteUncheckedCreateNestedManyWithoutTypeInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutTypeInput[]>;
    create?: Nullable<FavoriteCreateWithoutTypeInput[]>;
    createMany?: Nullable<FavoriteCreateManyTypeInputEnvelope>;
}

export class FavoriteUncheckedCreateNestedManyWithoutUsersInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutUsersInput[]>;
    create?: Nullable<FavoriteCreateWithoutUsersInput[]>;
    createMany?: Nullable<FavoriteCreateManyUsersInputEnvelope>;
}

export class FavoriteUncheckedCreateWithoutAuthorInput {
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class FavoriteUncheckedCreateWithoutBusinessInput {
    authorId: string;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class FavoriteUncheckedCreateWithoutCommentsInput {
    authorId: string;
    businessId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class FavoriteUncheckedCreateWithoutOrdersInput {
    authorId: string;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class FavoriteUncheckedCreateWithoutReviewsInput {
    authorId: string;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    serviceId?: Nullable<string>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class FavoriteUncheckedCreateWithoutServiceInput {
    authorId: string;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class FavoriteUncheckedCreateWithoutTypeInput {
    authorId: string;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class FavoriteUncheckedCreateWithoutUsersInput {
    authorId: string;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    typeId: string;
    updatedAt?: Nullable<DateTime>;
}

export class FavoriteUncheckedUpdateInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orderId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    typeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class FavoriteUncheckedUpdateManyInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orderId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    typeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class FavoriteUncheckedUpdateManyWithoutAuthorInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<FavoriteCreateWithoutAuthorInput[]>;
    createMany?: Nullable<FavoriteCreateManyAuthorInputEnvelope>;
    delete?: Nullable<FavoriteWhereUniqueInput[]>;
    deleteMany?: Nullable<FavoriteScalarWhereInput[]>;
    disconnect?: Nullable<FavoriteWhereUniqueInput[]>;
    set?: Nullable<FavoriteWhereUniqueInput[]>;
    update?: Nullable<FavoriteUpdateWithWhereUniqueWithoutAuthorInput[]>;
    updateMany?: Nullable<FavoriteUpdateManyWithWhereWithoutAuthorInput[]>;
    upsert?: Nullable<FavoriteUpsertWithWhereUniqueWithoutAuthorInput[]>;
}

export class FavoriteUncheckedUpdateManyWithoutBusinessInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutBusinessInput[]>;
    create?: Nullable<FavoriteCreateWithoutBusinessInput[]>;
    createMany?: Nullable<FavoriteCreateManyBusinessInputEnvelope>;
    delete?: Nullable<FavoriteWhereUniqueInput[]>;
    deleteMany?: Nullable<FavoriteScalarWhereInput[]>;
    disconnect?: Nullable<FavoriteWhereUniqueInput[]>;
    set?: Nullable<FavoriteWhereUniqueInput[]>;
    update?: Nullable<FavoriteUpdateWithWhereUniqueWithoutBusinessInput[]>;
    updateMany?: Nullable<FavoriteUpdateManyWithWhereWithoutBusinessInput[]>;
    upsert?: Nullable<FavoriteUpsertWithWhereUniqueWithoutBusinessInput[]>;
}

export class FavoriteUncheckedUpdateManyWithoutCommentsInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutCommentsInput[]>;
    create?: Nullable<FavoriteCreateWithoutCommentsInput[]>;
    createMany?: Nullable<FavoriteCreateManyCommentsInputEnvelope>;
    delete?: Nullable<FavoriteWhereUniqueInput[]>;
    deleteMany?: Nullable<FavoriteScalarWhereInput[]>;
    disconnect?: Nullable<FavoriteWhereUniqueInput[]>;
    set?: Nullable<FavoriteWhereUniqueInput[]>;
    update?: Nullable<FavoriteUpdateWithWhereUniqueWithoutCommentsInput[]>;
    updateMany?: Nullable<FavoriteUpdateManyWithWhereWithoutCommentsInput[]>;
    upsert?: Nullable<FavoriteUpsertWithWhereUniqueWithoutCommentsInput[]>;
}

export class FavoriteUncheckedUpdateManyWithoutFavoriteInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orderId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    typeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class FavoriteUncheckedUpdateManyWithoutFavoritedInput {
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orderId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    typeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class FavoriteUncheckedUpdateManyWithoutFavoritesInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orderId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    typeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class FavoriteUncheckedUpdateManyWithoutOrdersInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutOrdersInput[]>;
    create?: Nullable<FavoriteCreateWithoutOrdersInput[]>;
    createMany?: Nullable<FavoriteCreateManyOrdersInputEnvelope>;
    delete?: Nullable<FavoriteWhereUniqueInput[]>;
    deleteMany?: Nullable<FavoriteScalarWhereInput[]>;
    disconnect?: Nullable<FavoriteWhereUniqueInput[]>;
    set?: Nullable<FavoriteWhereUniqueInput[]>;
    update?: Nullable<FavoriteUpdateWithWhereUniqueWithoutOrdersInput[]>;
    updateMany?: Nullable<FavoriteUpdateManyWithWhereWithoutOrdersInput[]>;
    upsert?: Nullable<FavoriteUpsertWithWhereUniqueWithoutOrdersInput[]>;
}

export class FavoriteUncheckedUpdateManyWithoutReviewsInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutReviewsInput[]>;
    create?: Nullable<FavoriteCreateWithoutReviewsInput[]>;
    createMany?: Nullable<FavoriteCreateManyReviewsInputEnvelope>;
    delete?: Nullable<FavoriteWhereUniqueInput[]>;
    deleteMany?: Nullable<FavoriteScalarWhereInput[]>;
    disconnect?: Nullable<FavoriteWhereUniqueInput[]>;
    set?: Nullable<FavoriteWhereUniqueInput[]>;
    update?: Nullable<FavoriteUpdateWithWhereUniqueWithoutReviewsInput[]>;
    updateMany?: Nullable<FavoriteUpdateManyWithWhereWithoutReviewsInput[]>;
    upsert?: Nullable<FavoriteUpsertWithWhereUniqueWithoutReviewsInput[]>;
}

export class FavoriteUncheckedUpdateManyWithoutServiceInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutServiceInput[]>;
    create?: Nullable<FavoriteCreateWithoutServiceInput[]>;
    createMany?: Nullable<FavoriteCreateManyServiceInputEnvelope>;
    delete?: Nullable<FavoriteWhereUniqueInput[]>;
    deleteMany?: Nullable<FavoriteScalarWhereInput[]>;
    disconnect?: Nullable<FavoriteWhereUniqueInput[]>;
    set?: Nullable<FavoriteWhereUniqueInput[]>;
    update?: Nullable<FavoriteUpdateWithWhereUniqueWithoutServiceInput[]>;
    updateMany?: Nullable<FavoriteUpdateManyWithWhereWithoutServiceInput[]>;
    upsert?: Nullable<FavoriteUpsertWithWhereUniqueWithoutServiceInput[]>;
}

export class FavoriteUncheckedUpdateManyWithoutTypeInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutTypeInput[]>;
    create?: Nullable<FavoriteCreateWithoutTypeInput[]>;
    createMany?: Nullable<FavoriteCreateManyTypeInputEnvelope>;
    delete?: Nullable<FavoriteWhereUniqueInput[]>;
    deleteMany?: Nullable<FavoriteScalarWhereInput[]>;
    disconnect?: Nullable<FavoriteWhereUniqueInput[]>;
    set?: Nullable<FavoriteWhereUniqueInput[]>;
    update?: Nullable<FavoriteUpdateWithWhereUniqueWithoutTypeInput[]>;
    updateMany?: Nullable<FavoriteUpdateManyWithWhereWithoutTypeInput[]>;
    upsert?: Nullable<FavoriteUpsertWithWhereUniqueWithoutTypeInput[]>;
}

export class FavoriteUncheckedUpdateManyWithoutUsersInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutUsersInput[]>;
    create?: Nullable<FavoriteCreateWithoutUsersInput[]>;
    createMany?: Nullable<FavoriteCreateManyUsersInputEnvelope>;
    delete?: Nullable<FavoriteWhereUniqueInput[]>;
    deleteMany?: Nullable<FavoriteScalarWhereInput[]>;
    disconnect?: Nullable<FavoriteWhereUniqueInput[]>;
    set?: Nullable<FavoriteWhereUniqueInput[]>;
    update?: Nullable<FavoriteUpdateWithWhereUniqueWithoutUsersInput[]>;
    updateMany?: Nullable<FavoriteUpdateManyWithWhereWithoutUsersInput[]>;
    upsert?: Nullable<FavoriteUpsertWithWhereUniqueWithoutUsersInput[]>;
}

export class FavoriteUncheckedUpdateWithoutAuthorInput {
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orderId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    typeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class FavoriteUncheckedUpdateWithoutBusinessInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orderId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    typeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class FavoriteUncheckedUpdateWithoutCommentsInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orderId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    typeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class FavoriteUncheckedUpdateWithoutOrdersInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    typeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class FavoriteUncheckedUpdateWithoutReviewsInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orderId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    serviceId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    typeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class FavoriteUncheckedUpdateWithoutServiceInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orderId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    typeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class FavoriteUncheckedUpdateWithoutTypeInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orderId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class FavoriteUncheckedUpdateWithoutUsersInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    commentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orderId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    typeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class FavoriteUpdateInput {
    Business?: Nullable<BusinessUpdateOneWithoutFavoriteInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutFavoritedInput>;
    comments?: Nullable<CommentUpdateOneWithoutFavoritesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateOneWithoutFavoritesInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateOneWithoutFavoritesInput>;
    service?: Nullable<ServiceUpdateOneWithoutFavoritesInput>;
    type?: Nullable<FavoriteRecordTypeUpdateOneRequiredWithoutFavoritesInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateOneWithoutFavoritesInput>;
}

export class FavoriteUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class FavoriteUpdateManyWithWhereWithoutAuthorInput {
    data: FavoriteUncheckedUpdateManyWithoutFavoritedInput;
    where: FavoriteScalarWhereInput;
}

export class FavoriteUpdateManyWithWhereWithoutBusinessInput {
    data: FavoriteUncheckedUpdateManyWithoutFavoriteInput;
    where: FavoriteScalarWhereInput;
}

export class FavoriteUpdateManyWithWhereWithoutCommentsInput {
    data: FavoriteUncheckedUpdateManyWithoutFavoritesInput;
    where: FavoriteScalarWhereInput;
}

export class FavoriteUpdateManyWithWhereWithoutOrdersInput {
    data: FavoriteUncheckedUpdateManyWithoutFavoritesInput;
    where: FavoriteScalarWhereInput;
}

export class FavoriteUpdateManyWithWhereWithoutReviewsInput {
    data: FavoriteUncheckedUpdateManyWithoutFavoritesInput;
    where: FavoriteScalarWhereInput;
}

export class FavoriteUpdateManyWithWhereWithoutServiceInput {
    data: FavoriteUncheckedUpdateManyWithoutFavoritesInput;
    where: FavoriteScalarWhereInput;
}

export class FavoriteUpdateManyWithWhereWithoutTypeInput {
    data: FavoriteUncheckedUpdateManyWithoutFavoritesInput;
    where: FavoriteScalarWhereInput;
}

export class FavoriteUpdateManyWithWhereWithoutUsersInput {
    data: FavoriteUncheckedUpdateManyWithoutFavoritesInput;
    where: FavoriteScalarWhereInput;
}

export class FavoriteUpdateManyWithoutAuthorInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutAuthorInput[]>;
    create?: Nullable<FavoriteCreateWithoutAuthorInput[]>;
    createMany?: Nullable<FavoriteCreateManyAuthorInputEnvelope>;
    delete?: Nullable<FavoriteWhereUniqueInput[]>;
    deleteMany?: Nullable<FavoriteScalarWhereInput[]>;
    disconnect?: Nullable<FavoriteWhereUniqueInput[]>;
    set?: Nullable<FavoriteWhereUniqueInput[]>;
    update?: Nullable<FavoriteUpdateWithWhereUniqueWithoutAuthorInput[]>;
    updateMany?: Nullable<FavoriteUpdateManyWithWhereWithoutAuthorInput[]>;
    upsert?: Nullable<FavoriteUpsertWithWhereUniqueWithoutAuthorInput[]>;
}

export class FavoriteUpdateManyWithoutBusinessInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutBusinessInput[]>;
    create?: Nullable<FavoriteCreateWithoutBusinessInput[]>;
    createMany?: Nullable<FavoriteCreateManyBusinessInputEnvelope>;
    delete?: Nullable<FavoriteWhereUniqueInput[]>;
    deleteMany?: Nullable<FavoriteScalarWhereInput[]>;
    disconnect?: Nullable<FavoriteWhereUniqueInput[]>;
    set?: Nullable<FavoriteWhereUniqueInput[]>;
    update?: Nullable<FavoriteUpdateWithWhereUniqueWithoutBusinessInput[]>;
    updateMany?: Nullable<FavoriteUpdateManyWithWhereWithoutBusinessInput[]>;
    upsert?: Nullable<FavoriteUpsertWithWhereUniqueWithoutBusinessInput[]>;
}

export class FavoriteUpdateManyWithoutCommentsInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutCommentsInput[]>;
    create?: Nullable<FavoriteCreateWithoutCommentsInput[]>;
    createMany?: Nullable<FavoriteCreateManyCommentsInputEnvelope>;
    delete?: Nullable<FavoriteWhereUniqueInput[]>;
    deleteMany?: Nullable<FavoriteScalarWhereInput[]>;
    disconnect?: Nullable<FavoriteWhereUniqueInput[]>;
    set?: Nullable<FavoriteWhereUniqueInput[]>;
    update?: Nullable<FavoriteUpdateWithWhereUniqueWithoutCommentsInput[]>;
    updateMany?: Nullable<FavoriteUpdateManyWithWhereWithoutCommentsInput[]>;
    upsert?: Nullable<FavoriteUpsertWithWhereUniqueWithoutCommentsInput[]>;
}

export class FavoriteUpdateManyWithoutOrdersInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutOrdersInput[]>;
    create?: Nullable<FavoriteCreateWithoutOrdersInput[]>;
    createMany?: Nullable<FavoriteCreateManyOrdersInputEnvelope>;
    delete?: Nullable<FavoriteWhereUniqueInput[]>;
    deleteMany?: Nullable<FavoriteScalarWhereInput[]>;
    disconnect?: Nullable<FavoriteWhereUniqueInput[]>;
    set?: Nullable<FavoriteWhereUniqueInput[]>;
    update?: Nullable<FavoriteUpdateWithWhereUniqueWithoutOrdersInput[]>;
    updateMany?: Nullable<FavoriteUpdateManyWithWhereWithoutOrdersInput[]>;
    upsert?: Nullable<FavoriteUpsertWithWhereUniqueWithoutOrdersInput[]>;
}

export class FavoriteUpdateManyWithoutReviewsInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutReviewsInput[]>;
    create?: Nullable<FavoriteCreateWithoutReviewsInput[]>;
    createMany?: Nullable<FavoriteCreateManyReviewsInputEnvelope>;
    delete?: Nullable<FavoriteWhereUniqueInput[]>;
    deleteMany?: Nullable<FavoriteScalarWhereInput[]>;
    disconnect?: Nullable<FavoriteWhereUniqueInput[]>;
    set?: Nullable<FavoriteWhereUniqueInput[]>;
    update?: Nullable<FavoriteUpdateWithWhereUniqueWithoutReviewsInput[]>;
    updateMany?: Nullable<FavoriteUpdateManyWithWhereWithoutReviewsInput[]>;
    upsert?: Nullable<FavoriteUpsertWithWhereUniqueWithoutReviewsInput[]>;
}

export class FavoriteUpdateManyWithoutServiceInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutServiceInput[]>;
    create?: Nullable<FavoriteCreateWithoutServiceInput[]>;
    createMany?: Nullable<FavoriteCreateManyServiceInputEnvelope>;
    delete?: Nullable<FavoriteWhereUniqueInput[]>;
    deleteMany?: Nullable<FavoriteScalarWhereInput[]>;
    disconnect?: Nullable<FavoriteWhereUniqueInput[]>;
    set?: Nullable<FavoriteWhereUniqueInput[]>;
    update?: Nullable<FavoriteUpdateWithWhereUniqueWithoutServiceInput[]>;
    updateMany?: Nullable<FavoriteUpdateManyWithWhereWithoutServiceInput[]>;
    upsert?: Nullable<FavoriteUpsertWithWhereUniqueWithoutServiceInput[]>;
}

export class FavoriteUpdateManyWithoutTypeInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutTypeInput[]>;
    create?: Nullable<FavoriteCreateWithoutTypeInput[]>;
    createMany?: Nullable<FavoriteCreateManyTypeInputEnvelope>;
    delete?: Nullable<FavoriteWhereUniqueInput[]>;
    deleteMany?: Nullable<FavoriteScalarWhereInput[]>;
    disconnect?: Nullable<FavoriteWhereUniqueInput[]>;
    set?: Nullable<FavoriteWhereUniqueInput[]>;
    update?: Nullable<FavoriteUpdateWithWhereUniqueWithoutTypeInput[]>;
    updateMany?: Nullable<FavoriteUpdateManyWithWhereWithoutTypeInput[]>;
    upsert?: Nullable<FavoriteUpsertWithWhereUniqueWithoutTypeInput[]>;
}

export class FavoriteUpdateManyWithoutUsersInput {
    connect?: Nullable<FavoriteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<FavoriteCreateOrConnectWithoutUsersInput[]>;
    create?: Nullable<FavoriteCreateWithoutUsersInput[]>;
    createMany?: Nullable<FavoriteCreateManyUsersInputEnvelope>;
    delete?: Nullable<FavoriteWhereUniqueInput[]>;
    deleteMany?: Nullable<FavoriteScalarWhereInput[]>;
    disconnect?: Nullable<FavoriteWhereUniqueInput[]>;
    set?: Nullable<FavoriteWhereUniqueInput[]>;
    update?: Nullable<FavoriteUpdateWithWhereUniqueWithoutUsersInput[]>;
    updateMany?: Nullable<FavoriteUpdateManyWithWhereWithoutUsersInput[]>;
    upsert?: Nullable<FavoriteUpsertWithWhereUniqueWithoutUsersInput[]>;
}

export class FavoriteUpdateWithWhereUniqueWithoutAuthorInput {
    data: FavoriteUncheckedUpdateWithoutAuthorInput;
    where: FavoriteWhereUniqueInput;
}

export class FavoriteUpdateWithWhereUniqueWithoutBusinessInput {
    data: FavoriteUncheckedUpdateWithoutBusinessInput;
    where: FavoriteWhereUniqueInput;
}

export class FavoriteUpdateWithWhereUniqueWithoutCommentsInput {
    data: FavoriteUncheckedUpdateWithoutCommentsInput;
    where: FavoriteWhereUniqueInput;
}

export class FavoriteUpdateWithWhereUniqueWithoutOrdersInput {
    data: FavoriteUncheckedUpdateWithoutOrdersInput;
    where: FavoriteWhereUniqueInput;
}

export class FavoriteUpdateWithWhereUniqueWithoutReviewsInput {
    data: FavoriteUncheckedUpdateWithoutReviewsInput;
    where: FavoriteWhereUniqueInput;
}

export class FavoriteUpdateWithWhereUniqueWithoutServiceInput {
    data: FavoriteUncheckedUpdateWithoutServiceInput;
    where: FavoriteWhereUniqueInput;
}

export class FavoriteUpdateWithWhereUniqueWithoutTypeInput {
    data: FavoriteUncheckedUpdateWithoutTypeInput;
    where: FavoriteWhereUniqueInput;
}

export class FavoriteUpdateWithWhereUniqueWithoutUsersInput {
    data: FavoriteUncheckedUpdateWithoutUsersInput;
    where: FavoriteWhereUniqueInput;
}

export class FavoriteUpdateWithoutAuthorInput {
    Business?: Nullable<BusinessUpdateOneWithoutFavoriteInput>;
    comments?: Nullable<CommentUpdateOneWithoutFavoritesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateOneWithoutFavoritesInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateOneWithoutFavoritesInput>;
    service?: Nullable<ServiceUpdateOneWithoutFavoritesInput>;
    type?: Nullable<FavoriteRecordTypeUpdateOneRequiredWithoutFavoritesInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateOneWithoutFavoritesInput>;
}

export class FavoriteUpdateWithoutBusinessInput {
    author?: Nullable<UserUpdateOneRequiredWithoutFavoritedInput>;
    comments?: Nullable<CommentUpdateOneWithoutFavoritesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateOneWithoutFavoritesInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateOneWithoutFavoritesInput>;
    service?: Nullable<ServiceUpdateOneWithoutFavoritesInput>;
    type?: Nullable<FavoriteRecordTypeUpdateOneRequiredWithoutFavoritesInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateOneWithoutFavoritesInput>;
}

export class FavoriteUpdateWithoutCommentsInput {
    Business?: Nullable<BusinessUpdateOneWithoutFavoriteInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutFavoritedInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateOneWithoutFavoritesInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateOneWithoutFavoritesInput>;
    service?: Nullable<ServiceUpdateOneWithoutFavoritesInput>;
    type?: Nullable<FavoriteRecordTypeUpdateOneRequiredWithoutFavoritesInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateOneWithoutFavoritesInput>;
}

export class FavoriteUpdateWithoutOrdersInput {
    Business?: Nullable<BusinessUpdateOneWithoutFavoriteInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutFavoritedInput>;
    comments?: Nullable<CommentUpdateOneWithoutFavoritesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateOneWithoutFavoritesInput>;
    service?: Nullable<ServiceUpdateOneWithoutFavoritesInput>;
    type?: Nullable<FavoriteRecordTypeUpdateOneRequiredWithoutFavoritesInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateOneWithoutFavoritesInput>;
}

export class FavoriteUpdateWithoutReviewsInput {
    Business?: Nullable<BusinessUpdateOneWithoutFavoriteInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutFavoritedInput>;
    comments?: Nullable<CommentUpdateOneWithoutFavoritesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateOneWithoutFavoritesInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    service?: Nullable<ServiceUpdateOneWithoutFavoritesInput>;
    type?: Nullable<FavoriteRecordTypeUpdateOneRequiredWithoutFavoritesInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateOneWithoutFavoritesInput>;
}

export class FavoriteUpdateWithoutServiceInput {
    Business?: Nullable<BusinessUpdateOneWithoutFavoriteInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutFavoritedInput>;
    comments?: Nullable<CommentUpdateOneWithoutFavoritesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateOneWithoutFavoritesInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateOneWithoutFavoritesInput>;
    type?: Nullable<FavoriteRecordTypeUpdateOneRequiredWithoutFavoritesInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateOneWithoutFavoritesInput>;
}

export class FavoriteUpdateWithoutTypeInput {
    Business?: Nullable<BusinessUpdateOneWithoutFavoriteInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutFavoritedInput>;
    comments?: Nullable<CommentUpdateOneWithoutFavoritesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateOneWithoutFavoritesInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateOneWithoutFavoritesInput>;
    service?: Nullable<ServiceUpdateOneWithoutFavoritesInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateOneWithoutFavoritesInput>;
}

export class FavoriteUpdateWithoutUsersInput {
    Business?: Nullable<BusinessUpdateOneWithoutFavoriteInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutFavoritedInput>;
    comments?: Nullable<CommentUpdateOneWithoutFavoritesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateOneWithoutFavoritesInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateOneWithoutFavoritesInput>;
    service?: Nullable<ServiceUpdateOneWithoutFavoritesInput>;
    type?: Nullable<FavoriteRecordTypeUpdateOneRequiredWithoutFavoritesInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class FavoriteUpsertWithWhereUniqueWithoutAuthorInput {
    create: FavoriteUncheckedCreateWithoutAuthorInput;
    update: FavoriteUncheckedUpdateWithoutAuthorInput;
    where: FavoriteWhereUniqueInput;
}

export class FavoriteUpsertWithWhereUniqueWithoutBusinessInput {
    create: FavoriteUncheckedCreateWithoutBusinessInput;
    update: FavoriteUncheckedUpdateWithoutBusinessInput;
    where: FavoriteWhereUniqueInput;
}

export class FavoriteUpsertWithWhereUniqueWithoutCommentsInput {
    create: FavoriteUncheckedCreateWithoutCommentsInput;
    update: FavoriteUncheckedUpdateWithoutCommentsInput;
    where: FavoriteWhereUniqueInput;
}

export class FavoriteUpsertWithWhereUniqueWithoutOrdersInput {
    create: FavoriteUncheckedCreateWithoutOrdersInput;
    update: FavoriteUncheckedUpdateWithoutOrdersInput;
    where: FavoriteWhereUniqueInput;
}

export class FavoriteUpsertWithWhereUniqueWithoutReviewsInput {
    create: FavoriteUncheckedCreateWithoutReviewsInput;
    update: FavoriteUncheckedUpdateWithoutReviewsInput;
    where: FavoriteWhereUniqueInput;
}

export class FavoriteUpsertWithWhereUniqueWithoutServiceInput {
    create: FavoriteUncheckedCreateWithoutServiceInput;
    update: FavoriteUncheckedUpdateWithoutServiceInput;
    where: FavoriteWhereUniqueInput;
}

export class FavoriteUpsertWithWhereUniqueWithoutTypeInput {
    create: FavoriteUncheckedCreateWithoutTypeInput;
    update: FavoriteUncheckedUpdateWithoutTypeInput;
    where: FavoriteWhereUniqueInput;
}

export class FavoriteUpsertWithWhereUniqueWithoutUsersInput {
    create: FavoriteUncheckedCreateWithoutUsersInput;
    update: FavoriteUncheckedUpdateWithoutUsersInput;
    where: FavoriteWhereUniqueInput;
}

export class FavoriteWhereInput {
    AND?: Nullable<FavoriteWhereInput[]>;
    Business?: Nullable<BusinessWhereInput>;
    NOT?: Nullable<FavoriteWhereInput[]>;
    OR?: Nullable<FavoriteWhereInput[]>;
    author?: Nullable<UserWhereInput>;
    authorId?: Nullable<StringFilter>;
    businessId?: Nullable<StringNullableFilter>;
    commentId?: Nullable<StringNullableFilter>;
    comments?: Nullable<CommentWhereInput>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    orderId?: Nullable<StringNullableFilter>;
    orders?: Nullable<OrderWhereInput>;
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    reviewId?: Nullable<StringNullableFilter>;
    reviews?: Nullable<ReviewWhereInput>;
    service?: Nullable<ServiceWhereInput>;
    serviceId?: Nullable<StringNullableFilter>;
    type?: Nullable<FavoriteRecordTypeWhereInput>;
    typeId?: Nullable<StringFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
    userId?: Nullable<StringNullableFilter>;
    users?: Nullable<UserWhereInput>;
}

export class FavoriteWhereUniqueInput {
    id?: Nullable<string>;
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

export class GeocodeComponentsInput {
    administrative_area?: Nullable<string>;
    country?: Nullable<string>;
    postal_code?: Nullable<string>;
    route?: Nullable<string>;
}

export class GeocodeInput {
    address?: Nullable<string>;
    bounds?: Nullable<LatLngBoundsInput>;
    components?: Nullable<GeocodeComponentsInput>;
    language?: Nullable<string>;
    place_id?: Nullable<string>;
    region?: Nullable<string>;
}

export class HelpCreateInput {
    audience?: Nullable<Role>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    steps?: Nullable<HelpStepCreateNestedManyWithoutHelpInput>;
    topic: string;
    updatedAt?: Nullable<DateTime>;
}

export class HelpCreateManyInput {
    audience?: Nullable<Role>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
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
    recordStatus?: Nullable<RecordStatus>;
    topic: string;
    updatedAt?: Nullable<DateTime>;
}

export class HelpOrderByInput {
    audience?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    recordStatus?: Nullable<SortOrder>;
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
    recordStatus?: Nullable<EnumRecordStatusWithAggregatesFilter>;
    topic?: Nullable<StringWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class HelpStepCreateInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutHelpStepInput>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    help: HelpCreateNestedOneWithoutStepsInput;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    stepNumber: number;
    title: string;
    updatedAt?: Nullable<DateTime>;
}

export class HelpStepCreateManyHelpInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
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
    recordStatus?: Nullable<RecordStatus>;
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
    recordStatus?: Nullable<RecordStatus>;
    stepNumber: number;
    title: string;
    updatedAt?: Nullable<DateTime>;
}

export class HelpStepCreateWithoutHelpInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutHelpStepInput>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
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
    recordStatus?: Nullable<SortOrder>;
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
    recordStatus?: Nullable<EnumRecordStatusFilter>;
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
    recordStatus?: Nullable<EnumRecordStatusWithAggregatesFilter>;
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
    recordStatus?: Nullable<RecordStatus>;
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
    recordStatus?: Nullable<RecordStatus>;
    stepNumber: number;
    title: string;
    updatedAt?: Nullable<DateTime>;
}

export class HelpStepUncheckedCreateWithoutHelpInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutHelpStepInput>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    stepNumber?: Nullable<IntFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpStepUncheckedUpdateManyInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpId?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    stepNumber?: Nullable<IntFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpStepUncheckedUpdateWithoutAttachmentsInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    helpId?: Nullable<StringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    stepNumber?: Nullable<IntFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpStepUncheckedUpdateWithoutHelpInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutHelpStepInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    stepNumber?: Nullable<IntFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpStepUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    stepNumber?: Nullable<IntFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpStepUpdateWithoutHelpInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutHelpStepInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFilter>;
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
    recordStatus?: Nullable<RecordStatus>;
    steps?: Nullable<HelpStepUncheckedCreateNestedManyWithoutHelpInput>;
    topic: string;
    updatedAt?: Nullable<DateTime>;
}

export class HelpUncheckedCreateWithoutStepsInput {
    audience?: Nullable<Role>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    topic: string;
    updatedAt?: Nullable<DateTime>;
}

export class HelpUncheckedUpdateInput {
    audience?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    steps?: Nullable<HelpStepUncheckedUpdateManyWithoutHelpInput>;
    topic?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpUncheckedUpdateManyInput {
    audience?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    topic?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpUncheckedUpdateWithoutStepsInput {
    audience?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    topic?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpUpdateInput {
    audience?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    steps?: Nullable<HelpStepUpdateManyWithoutHelpInput>;
    topic?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class HelpUpdateManyMutationInput {
    audience?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFilter>;
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

export class LatLngBoundsInput {
    northeast: LatLngInput;
    southwest: LatLngInput;
}

export class LatLngInput {
    lat: number;
    lng: number;
}

export class LatLon {
    lat: number;
    lon: number;
}

export class LocationCreateInput {
    businesses?: Nullable<BusinessCreateNestedManyWithoutLocationInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lat: number;
    lon: number;
    name?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedManyWithoutLocationInput>;
}

export class LocationCreateManyInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lat: number;
    lon: number;
    name?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class LocationCreateNestedOneWithoutBusinessesInput {
    connect?: Nullable<LocationWhereUniqueInput>;
    connectOrCreate?: Nullable<LocationCreateOrConnectWithoutBusinessesInput>;
    create?: Nullable<LocationUncheckedCreateWithoutBusinessesInput>;
}

export class LocationCreateNestedOneWithoutUsersInput {
    connect?: Nullable<LocationWhereUniqueInput>;
    connectOrCreate?: Nullable<LocationCreateOrConnectWithoutUsersInput>;
    create?: Nullable<LocationUncheckedCreateWithoutUsersInput>;
}

export class LocationCreateOrConnectWithoutBusinessesInput {
    create: LocationUncheckedCreateWithoutBusinessesInput;
    where: LocationWhereUniqueInput;
}

export class LocationCreateOrConnectWithoutUsersInput {
    create: LocationUncheckedCreateWithoutUsersInput;
    where: LocationWhereUniqueInput;
}

export class LocationCreateWithoutBusinessesInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lat: number;
    lon: number;
    name?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedManyWithoutLocationInput>;
}

export class LocationCreateWithoutUsersInput {
    businesses?: Nullable<BusinessCreateNestedManyWithoutLocationInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lat: number;
    lon: number;
    name?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class LocationOrderByInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    lat?: Nullable<SortOrder>;
    lon?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    recordStatus?: Nullable<SortOrder>;
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
    recordStatus?: Nullable<EnumRecordStatusWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class LocationUncheckedCreateInput {
    businesses?: Nullable<BusinessUncheckedCreateNestedManyWithoutLocationInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lat: number;
    lon: number;
    name?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserUncheckedCreateNestedManyWithoutLocationInput>;
}

export class LocationUncheckedCreateWithoutBusinessesInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lat: number;
    lon: number;
    name?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserUncheckedCreateNestedManyWithoutLocationInput>;
}

export class LocationUncheckedCreateWithoutUsersInput {
    businesses?: Nullable<BusinessUncheckedCreateNestedManyWithoutLocationInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lat: number;
    lon: number;
    name?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class LocationUncheckedUpdateInput {
    businesses?: Nullable<BusinessUncheckedUpdateManyWithoutLocationInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    lat?: Nullable<FloatFieldUpdateOperationsInput>;
    lon?: Nullable<FloatFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUncheckedUpdateManyWithoutLocationInput>;
}

export class LocationUncheckedUpdateManyInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    lat?: Nullable<FloatFieldUpdateOperationsInput>;
    lon?: Nullable<FloatFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class LocationUncheckedUpdateWithoutBusinessesInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    lat?: Nullable<FloatFieldUpdateOperationsInput>;
    lon?: Nullable<FloatFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUncheckedUpdateManyWithoutLocationInput>;
}

export class LocationUncheckedUpdateWithoutUsersInput {
    businesses?: Nullable<BusinessUncheckedUpdateManyWithoutLocationInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    lat?: Nullable<FloatFieldUpdateOperationsInput>;
    lon?: Nullable<FloatFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class LocationUpdateInput {
    businesses?: Nullable<BusinessUpdateManyWithoutLocationInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    lat?: Nullable<FloatFieldUpdateOperationsInput>;
    lon?: Nullable<FloatFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateManyWithoutLocationInput>;
}

export class LocationUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    lat?: Nullable<FloatFieldUpdateOperationsInput>;
    lon?: Nullable<FloatFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class LocationUpdateOneWithoutBusinessesInput {
    connect?: Nullable<LocationWhereUniqueInput>;
    connectOrCreate?: Nullable<LocationCreateOrConnectWithoutBusinessesInput>;
    create?: Nullable<LocationUncheckedCreateWithoutBusinessesInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<LocationUncheckedUpdateWithoutBusinessesInput>;
    upsert?: Nullable<LocationUpsertWithoutBusinessesInput>;
}

export class LocationUpdateOneWithoutUsersInput {
    connect?: Nullable<LocationWhereUniqueInput>;
    connectOrCreate?: Nullable<LocationCreateOrConnectWithoutUsersInput>;
    create?: Nullable<LocationUncheckedCreateWithoutUsersInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<LocationUncheckedUpdateWithoutUsersInput>;
    upsert?: Nullable<LocationUpsertWithoutUsersInput>;
}

export class LocationUpdateWithoutBusinessesInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    lat?: Nullable<FloatFieldUpdateOperationsInput>;
    lon?: Nullable<FloatFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateManyWithoutLocationInput>;
}

export class LocationUpdateWithoutUsersInput {
    businesses?: Nullable<BusinessUpdateManyWithoutLocationInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    lat?: Nullable<FloatFieldUpdateOperationsInput>;
    lon?: Nullable<FloatFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class LocationUpsertWithoutBusinessesInput {
    create: LocationUncheckedCreateWithoutBusinessesInput;
    update: LocationUncheckedUpdateWithoutBusinessesInput;
}

export class LocationUpsertWithoutUsersInput {
    create: LocationUncheckedCreateWithoutUsersInput;
    update: LocationUncheckedUpdateWithoutUsersInput;
}

export class LocationWhereInput {
    AND?: Nullable<LocationWhereInput[]>;
    NOT?: Nullable<LocationWhereInput[]>;
    OR?: Nullable<LocationWhereInput[]>;
    businesses?: Nullable<BusinessListRelationFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    lat?: Nullable<FloatFilter>;
    lon?: Nullable<FloatFilter>;
    name?: Nullable<StringFilter>;
    nearBy?: Nullable<LatLon>;
    nearByName?: Nullable<string>;
    notWithin?: Nullable<number>;
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
    users?: Nullable<UserListRelationFilter>;
    within?: Nullable<number>;
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
    recordStatus?: Nullable<RecordStatus>;
    state?: Nullable<PaymentStatus>;
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
    recordStatus?: Nullable<RecordStatus>;
    state?: Nullable<PaymentStatus>;
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
    recordStatus?: Nullable<RecordStatus>;
    state?: Nullable<PaymentStatus>;
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
    recordStatus?: Nullable<SortOrder>;
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
    recordStatus?: Nullable<EnumRecordStatusWithAggregatesFilter>;
    state?: Nullable<EnumPaymentStatusWithAggregatesFilter>;
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
    recordStatus?: Nullable<RecordStatus>;
    state?: Nullable<PaymentStatus>;
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
    recordStatus?: Nullable<RecordStatus>;
    state?: Nullable<PaymentStatus>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    state?: Nullable<EnumPaymentStatusFilter>;
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

export class NestedDateTimeNullableFilter {
    equals?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    not?: Nullable<NestedDateTimeNullableFilter>;
    notIn?: Nullable<DateTime[]>;
}

export class NestedDateTimeNullableWithAggregatesFilter {
    _count?: Nullable<NestedIntNullableFilter>;
    _max?: Nullable<NestedDateTimeNullableFilter>;
    _min?: Nullable<NestedDateTimeNullableFilter>;
    count?: Nullable<NestedIntNullableFilter>;
    equals?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    max?: Nullable<NestedDateTimeNullableFilter>;
    min?: Nullable<NestedDateTimeNullableFilter>;
    not?: Nullable<NestedDateTimeNullableWithAggregatesFilter>;
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

export class NestedEnumAbuseReportStatusFilter {
    equals?: Nullable<AbuseReportStatus>;
    in?: Nullable<AbuseReportStatus[]>;
    not?: Nullable<NestedEnumAbuseReportStatusFilter>;
    notIn?: Nullable<AbuseReportStatus[]>;
}

export class NestedEnumAbuseReportStatusWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumAbuseReportStatusFilter>;
    _min?: Nullable<NestedEnumAbuseReportStatusFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<AbuseReportStatus>;
    in?: Nullable<AbuseReportStatus[]>;
    max?: Nullable<NestedEnumAbuseReportStatusFilter>;
    min?: Nullable<NestedEnumAbuseReportStatusFilter>;
    not?: Nullable<NestedEnumAbuseReportStatusWithAggregatesFilter>;
    notIn?: Nullable<AbuseReportStatus[]>;
}

export class NestedEnumAccountStatusFilter {
    equals?: Nullable<AccountStatus>;
    in?: Nullable<AccountStatus[]>;
    not?: Nullable<NestedEnumAccountStatusFilter>;
    notIn?: Nullable<AccountStatus[]>;
}

export class NestedEnumAccountStatusWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumAccountStatusFilter>;
    _min?: Nullable<NestedEnumAccountStatusFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<AccountStatus>;
    in?: Nullable<AccountStatus[]>;
    max?: Nullable<NestedEnumAccountStatusFilter>;
    min?: Nullable<NestedEnumAccountStatusFilter>;
    not?: Nullable<NestedEnumAccountStatusWithAggregatesFilter>;
    notIn?: Nullable<AccountStatus[]>;
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

export class NestedEnumBusinessModeFilter {
    equals?: Nullable<BusinessMode>;
    in?: Nullable<BusinessMode[]>;
    not?: Nullable<NestedEnumBusinessModeFilter>;
    notIn?: Nullable<BusinessMode[]>;
}

export class NestedEnumBusinessModeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumBusinessModeFilter>;
    _min?: Nullable<NestedEnumBusinessModeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<BusinessMode>;
    in?: Nullable<BusinessMode[]>;
    max?: Nullable<NestedEnumBusinessModeFilter>;
    min?: Nullable<NestedEnumBusinessModeFilter>;
    not?: Nullable<NestedEnumBusinessModeWithAggregatesFilter>;
    notIn?: Nullable<BusinessMode[]>;
}

export class NestedEnumBusinessStatusFilter {
    equals?: Nullable<BusinessStatus>;
    in?: Nullable<BusinessStatus[]>;
    not?: Nullable<NestedEnumBusinessStatusFilter>;
    notIn?: Nullable<BusinessStatus[]>;
}

export class NestedEnumBusinessStatusWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumBusinessStatusFilter>;
    _min?: Nullable<NestedEnumBusinessStatusFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<BusinessStatus>;
    in?: Nullable<BusinessStatus[]>;
    max?: Nullable<NestedEnumBusinessStatusFilter>;
    min?: Nullable<NestedEnumBusinessStatusFilter>;
    not?: Nullable<NestedEnumBusinessStatusWithAggregatesFilter>;
    notIn?: Nullable<BusinessStatus[]>;
}

export class NestedEnumGenderFilter {
    equals?: Nullable<Gender>;
    in?: Nullable<Gender[]>;
    not?: Nullable<NestedEnumGenderFilter>;
    notIn?: Nullable<Gender[]>;
}

export class NestedEnumGenderWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumGenderFilter>;
    _min?: Nullable<NestedEnumGenderFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<Gender>;
    in?: Nullable<Gender[]>;
    max?: Nullable<NestedEnumGenderFilter>;
    min?: Nullable<NestedEnumGenderFilter>;
    not?: Nullable<NestedEnumGenderWithAggregatesFilter>;
    notIn?: Nullable<Gender[]>;
}

export class NestedEnumOrderStatusFilter {
    equals?: Nullable<OrderStatus>;
    in?: Nullable<OrderStatus[]>;
    not?: Nullable<NestedEnumOrderStatusFilter>;
    notIn?: Nullable<OrderStatus[]>;
}

export class NestedEnumOrderStatusWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumOrderStatusFilter>;
    _min?: Nullable<NestedEnumOrderStatusFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<OrderStatus>;
    in?: Nullable<OrderStatus[]>;
    max?: Nullable<NestedEnumOrderStatusFilter>;
    min?: Nullable<NestedEnumOrderStatusFilter>;
    not?: Nullable<NestedEnumOrderStatusWithAggregatesFilter>;
    notIn?: Nullable<OrderStatus[]>;
}

export class NestedEnumPaymentMethodStatusFilter {
    equals?: Nullable<PaymentMethodStatus>;
    in?: Nullable<PaymentMethodStatus[]>;
    not?: Nullable<NestedEnumPaymentMethodStatusFilter>;
    notIn?: Nullable<PaymentMethodStatus[]>;
}

export class NestedEnumPaymentMethodStatusWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumPaymentMethodStatusFilter>;
    _min?: Nullable<NestedEnumPaymentMethodStatusFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<PaymentMethodStatus>;
    in?: Nullable<PaymentMethodStatus[]>;
    max?: Nullable<NestedEnumPaymentMethodStatusFilter>;
    min?: Nullable<NestedEnumPaymentMethodStatusFilter>;
    not?: Nullable<NestedEnumPaymentMethodStatusWithAggregatesFilter>;
    notIn?: Nullable<PaymentMethodStatus[]>;
}

export class NestedEnumPaymentStatusFilter {
    equals?: Nullable<PaymentStatus>;
    in?: Nullable<PaymentStatus[]>;
    not?: Nullable<NestedEnumPaymentStatusFilter>;
    notIn?: Nullable<PaymentStatus[]>;
}

export class NestedEnumPaymentStatusWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumPaymentStatusFilter>;
    _min?: Nullable<NestedEnumPaymentStatusFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<PaymentStatus>;
    in?: Nullable<PaymentStatus[]>;
    max?: Nullable<NestedEnumPaymentStatusFilter>;
    min?: Nullable<NestedEnumPaymentStatusFilter>;
    not?: Nullable<NestedEnumPaymentStatusWithAggregatesFilter>;
    notIn?: Nullable<PaymentStatus[]>;
}

export class NestedEnumRecordStatusFilter {
    equals?: Nullable<RecordStatus>;
    in?: Nullable<RecordStatus[]>;
    not?: Nullable<NestedEnumRecordStatusFilter>;
    notIn?: Nullable<RecordStatus[]>;
}

export class NestedEnumRecordStatusWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumRecordStatusFilter>;
    _min?: Nullable<NestedEnumRecordStatusFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<RecordStatus>;
    in?: Nullable<RecordStatus[]>;
    max?: Nullable<NestedEnumRecordStatusFilter>;
    min?: Nullable<NestedEnumRecordStatusFilter>;
    not?: Nullable<NestedEnumRecordStatusWithAggregatesFilter>;
    notIn?: Nullable<RecordStatus[]>;
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

export class NestedEnumTransactionStatusFilter {
    equals?: Nullable<TransactionStatus>;
    in?: Nullable<TransactionStatus[]>;
    not?: Nullable<NestedEnumTransactionStatusFilter>;
    notIn?: Nullable<TransactionStatus[]>;
}

export class NestedEnumTransactionStatusWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumTransactionStatusFilter>;
    _min?: Nullable<NestedEnumTransactionStatusFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<TransactionStatus>;
    in?: Nullable<TransactionStatus[]>;
    max?: Nullable<NestedEnumTransactionStatusFilter>;
    min?: Nullable<NestedEnumTransactionStatusFilter>;
    not?: Nullable<NestedEnumTransactionStatusWithAggregatesFilter>;
    notIn?: Nullable<TransactionStatus[]>;
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

export class NullableDateTimeFieldUpdateOperationsInput {
    set?: Nullable<DateTime>;
}

export class NullableStringFieldUpdateOperationsInput {
    set?: Nullable<string>;
}

export class OrderCreateInput {
    Business?: Nullable<BusinessCreateNestedOneWithoutOrdersInput>;
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutOrdersInput>;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutOrdersInput>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    orderStatus?: Nullable<OrderStatus>;
    owner: UserCreateNestedOneWithoutOrderedInput;
    quantity: number;
    receipt?: Nullable<AttachmentCreateNestedOneWithoutOrdersInput>;
    recordStatus?: Nullable<RecordStatus>;
    service: ServiceCreateNestedOneWithoutOrdersInput;
    transactions?: Nullable<TransactionCreateNestedManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateManyBusinessInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    orderStatus?: Nullable<OrderStatus>;
    ownerId: string;
    quantity: number;
    receiptId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    serviceId: string;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateManyBusinessInputEnvelope {
    data: OrderCreateManyBusinessInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class OrderCreateManyInput {
    businessId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    orderStatus?: Nullable<OrderStatus>;
    ownerId: string;
    quantity: number;
    receiptId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    serviceId: string;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateManyOwnerInput {
    businessId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    orderStatus?: Nullable<OrderStatus>;
    quantity: number;
    receiptId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    serviceId: string;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateManyOwnerInputEnvelope {
    data: OrderCreateManyOwnerInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class OrderCreateManyReceiptInput {
    businessId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    orderStatus?: Nullable<OrderStatus>;
    ownerId: string;
    quantity: number;
    recordStatus?: Nullable<RecordStatus>;
    serviceId: string;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateManyReceiptInputEnvelope {
    data: OrderCreateManyReceiptInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class OrderCreateManyServiceInput {
    businessId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    orderStatus?: Nullable<OrderStatus>;
    ownerId: string;
    quantity: number;
    receiptId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateManyServiceInputEnvelope {
    data: OrderCreateManyServiceInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class OrderCreateNestedManyWithoutBusinessInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutBusinessInput[]>;
    create?: Nullable<OrderCreateWithoutBusinessInput[]>;
    createMany?: Nullable<OrderCreateManyBusinessInputEnvelope>;
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

export class OrderCreateNestedOneWithoutAbuseReportsInput {
    connect?: Nullable<OrderWhereUniqueInput>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutAbuseReportsInput>;
    create?: Nullable<OrderUncheckedCreateWithoutAbuseReportsInput>;
}

export class OrderCreateNestedOneWithoutFavoritesInput {
    connect?: Nullable<OrderWhereUniqueInput>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutFavoritesInput>;
    create?: Nullable<OrderUncheckedCreateWithoutFavoritesInput>;
}

export class OrderCreateNestedOneWithoutTransactionsInput {
    connect?: Nullable<OrderWhereUniqueInput>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutTransactionsInput>;
    create?: Nullable<OrderUncheckedCreateWithoutTransactionsInput>;
}

export class OrderCreateOrConnectWithoutAbuseReportsInput {
    create: OrderUncheckedCreateWithoutAbuseReportsInput;
    where: OrderWhereUniqueInput;
}

export class OrderCreateOrConnectWithoutBusinessInput {
    create: OrderUncheckedCreateWithoutBusinessInput;
    where: OrderWhereUniqueInput;
}

export class OrderCreateOrConnectWithoutFavoritesInput {
    create: OrderUncheckedCreateWithoutFavoritesInput;
    where: OrderWhereUniqueInput;
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

export class OrderCreateWithoutAbuseReportsInput {
    Business?: Nullable<BusinessCreateNestedOneWithoutOrdersInput>;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutOrdersInput>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    orderStatus?: Nullable<OrderStatus>;
    owner: UserCreateNestedOneWithoutOrderedInput;
    quantity: number;
    receipt?: Nullable<AttachmentCreateNestedOneWithoutOrdersInput>;
    recordStatus?: Nullable<RecordStatus>;
    service: ServiceCreateNestedOneWithoutOrdersInput;
    transactions?: Nullable<TransactionCreateNestedManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateWithoutBusinessInput {
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutOrdersInput>;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutOrdersInput>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    orderStatus?: Nullable<OrderStatus>;
    owner: UserCreateNestedOneWithoutOrderedInput;
    quantity: number;
    receipt?: Nullable<AttachmentCreateNestedOneWithoutOrdersInput>;
    recordStatus?: Nullable<RecordStatus>;
    service: ServiceCreateNestedOneWithoutOrdersInput;
    transactions?: Nullable<TransactionCreateNestedManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateWithoutFavoritesInput {
    Business?: Nullable<BusinessCreateNestedOneWithoutOrdersInput>;
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutOrdersInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    orderStatus?: Nullable<OrderStatus>;
    owner: UserCreateNestedOneWithoutOrderedInput;
    quantity: number;
    receipt?: Nullable<AttachmentCreateNestedOneWithoutOrdersInput>;
    recordStatus?: Nullable<RecordStatus>;
    service: ServiceCreateNestedOneWithoutOrdersInput;
    transactions?: Nullable<TransactionCreateNestedManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateWithoutOwnerInput {
    Business?: Nullable<BusinessCreateNestedOneWithoutOrdersInput>;
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutOrdersInput>;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutOrdersInput>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    orderStatus?: Nullable<OrderStatus>;
    quantity: number;
    receipt?: Nullable<AttachmentCreateNestedOneWithoutOrdersInput>;
    recordStatus?: Nullable<RecordStatus>;
    service: ServiceCreateNestedOneWithoutOrdersInput;
    transactions?: Nullable<TransactionCreateNestedManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateWithoutReceiptInput {
    Business?: Nullable<BusinessCreateNestedOneWithoutOrdersInput>;
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutOrdersInput>;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutOrdersInput>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    orderStatus?: Nullable<OrderStatus>;
    owner: UserCreateNestedOneWithoutOrderedInput;
    quantity: number;
    recordStatus?: Nullable<RecordStatus>;
    service: ServiceCreateNestedOneWithoutOrdersInput;
    transactions?: Nullable<TransactionCreateNestedManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateWithoutServiceInput {
    Business?: Nullable<BusinessCreateNestedOneWithoutOrdersInput>;
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutOrdersInput>;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutOrdersInput>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    orderStatus?: Nullable<OrderStatus>;
    owner: UserCreateNestedOneWithoutOrderedInput;
    quantity: number;
    receipt?: Nullable<AttachmentCreateNestedOneWithoutOrdersInput>;
    recordStatus?: Nullable<RecordStatus>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateWithoutTransactionsInput {
    Business?: Nullable<BusinessCreateNestedOneWithoutOrdersInput>;
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutOrdersInput>;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutOrdersInput>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    orderStatus?: Nullable<OrderStatus>;
    owner: UserCreateNestedOneWithoutOrderedInput;
    quantity: number;
    receipt?: Nullable<AttachmentCreateNestedOneWithoutOrdersInput>;
    recordStatus?: Nullable<RecordStatus>;
    service: ServiceCreateNestedOneWithoutOrdersInput;
    updatedAt?: Nullable<DateTime>;
}

export class OrderListRelationFilter {
    every?: Nullable<OrderWhereInput>;
    none?: Nullable<OrderWhereInput>;
    some?: Nullable<OrderWhereInput>;
}

export class OrderOrderByInput {
    businessId?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    notes?: Nullable<SortOrder>;
    orderStatus?: Nullable<SortOrder>;
    ownerId?: Nullable<SortOrder>;
    quantity?: Nullable<SortOrder>;
    receiptId?: Nullable<SortOrder>;
    recordStatus?: Nullable<SortOrder>;
    serviceId?: Nullable<SortOrder>;
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
    businessId?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    notes?: Nullable<StringNullableFilter>;
    orderStatus?: Nullable<EnumOrderStatusFilter>;
    ownerId?: Nullable<StringFilter>;
    quantity?: Nullable<IntFilter>;
    receiptId?: Nullable<StringNullableFilter>;
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    serviceId?: Nullable<StringFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class OrderScalarWhereWithAggregatesInput {
    AND?: Nullable<OrderScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<OrderScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<OrderScalarWhereWithAggregatesInput[]>;
    businessId?: Nullable<StringNullableWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    notes?: Nullable<StringNullableWithAggregatesFilter>;
    orderStatus?: Nullable<EnumOrderStatusWithAggregatesFilter>;
    ownerId?: Nullable<StringWithAggregatesFilter>;
    quantity?: Nullable<IntWithAggregatesFilter>;
    receiptId?: Nullable<StringNullableWithAggregatesFilter>;
    recordStatus?: Nullable<EnumRecordStatusWithAggregatesFilter>;
    serviceId?: Nullable<StringWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class OrderUncheckedCreateInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutOrdersInput>;
    businessId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutOrdersInput>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    orderStatus?: Nullable<OrderStatus>;
    ownerId: string;
    quantity: number;
    receiptId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    serviceId: string;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderUncheckedCreateNestedManyWithoutBusinessInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutBusinessInput[]>;
    create?: Nullable<OrderCreateWithoutBusinessInput[]>;
    createMany?: Nullable<OrderCreateManyBusinessInputEnvelope>;
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

export class OrderUncheckedCreateWithoutAbuseReportsInput {
    businessId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutOrdersInput>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    orderStatus?: Nullable<OrderStatus>;
    ownerId: string;
    quantity: number;
    receiptId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    serviceId: string;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderUncheckedCreateWithoutBusinessInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutOrdersInput>;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutOrdersInput>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    orderStatus?: Nullable<OrderStatus>;
    ownerId: string;
    quantity: number;
    receiptId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    serviceId: string;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderUncheckedCreateWithoutFavoritesInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutOrdersInput>;
    businessId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    orderStatus?: Nullable<OrderStatus>;
    ownerId: string;
    quantity: number;
    receiptId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    serviceId: string;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderUncheckedCreateWithoutOwnerInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutOrdersInput>;
    businessId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutOrdersInput>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    orderStatus?: Nullable<OrderStatus>;
    quantity: number;
    receiptId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    serviceId: string;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderUncheckedCreateWithoutReceiptInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutOrdersInput>;
    businessId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutOrdersInput>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    orderStatus?: Nullable<OrderStatus>;
    ownerId: string;
    quantity: number;
    recordStatus?: Nullable<RecordStatus>;
    serviceId: string;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderUncheckedCreateWithoutServiceInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutOrdersInput>;
    businessId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutOrdersInput>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    orderStatus?: Nullable<OrderStatus>;
    ownerId: string;
    quantity: number;
    receiptId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderUncheckedCreateWithoutTransactionsInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutOrdersInput>;
    businessId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutOrdersInput>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    orderStatus?: Nullable<OrderStatus>;
    ownerId: string;
    quantity: number;
    receiptId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    serviceId: string;
    updatedAt?: Nullable<DateTime>;
}

export class OrderUncheckedUpdateInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutOrdersInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutOrdersInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderStatus?: Nullable<EnumOrderStatusFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUncheckedUpdateManyInput {
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderStatus?: Nullable<EnumOrderStatusFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUncheckedUpdateManyWithoutBusinessInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutBusinessInput[]>;
    create?: Nullable<OrderCreateWithoutBusinessInput[]>;
    createMany?: Nullable<OrderCreateManyBusinessInputEnvelope>;
    delete?: Nullable<OrderWhereUniqueInput[]>;
    deleteMany?: Nullable<OrderScalarWhereInput[]>;
    disconnect?: Nullable<OrderWhereUniqueInput[]>;
    set?: Nullable<OrderWhereUniqueInput[]>;
    update?: Nullable<OrderUpdateWithWhereUniqueWithoutBusinessInput[]>;
    updateMany?: Nullable<OrderUpdateManyWithWhereWithoutBusinessInput[]>;
    upsert?: Nullable<OrderUpsertWithWhereUniqueWithoutBusinessInput[]>;
}

export class OrderUncheckedUpdateManyWithoutOrderedInput {
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderStatus?: Nullable<EnumOrderStatusFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUncheckedUpdateManyWithoutOrdersInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderStatus?: Nullable<EnumOrderStatusFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
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

export class OrderUncheckedUpdateWithoutAbuseReportsInput {
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutOrdersInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderStatus?: Nullable<EnumOrderStatusFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUncheckedUpdateWithoutBusinessInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutOrdersInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutOrdersInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderStatus?: Nullable<EnumOrderStatusFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receipt?: Nullable<AttachmentCreateInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUncheckedUpdateWithoutFavoritesInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutOrdersInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderStatus?: Nullable<EnumOrderStatusFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUncheckedUpdateWithoutOwnerInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutOrdersInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutOrdersInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderStatus?: Nullable<EnumOrderStatusFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUncheckedUpdateWithoutReceiptInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutOrdersInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutOrdersInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderStatus?: Nullable<EnumOrderStatusFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUncheckedUpdateWithoutServiceInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutOrdersInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutOrdersInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderStatus?: Nullable<EnumOrderStatusFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUncheckedUpdateWithoutTransactionsInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutOrdersInput>;
    businessId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutOrdersInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderStatus?: Nullable<EnumOrderStatusFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpdateInput {
    Business?: Nullable<BusinessUpdateOneWithoutOrdersInput>;
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutOrdersInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutOrdersInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderStatus?: Nullable<EnumOrderStatusFieldUpdateOperationsInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrderedInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receipt?: Nullable<AttachmentUpdateOneWithoutOrdersInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    service?: Nullable<ServiceUpdateOneRequiredWithoutOrdersInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderStatus?: Nullable<EnumOrderStatusFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpdateManyWithWhereWithoutBusinessInput {
    data: OrderUncheckedUpdateManyWithoutOrdersInput;
    where: OrderScalarWhereInput;
}

export class OrderUpdateManyWithWhereWithoutOwnerInput {
    data: OrderUncheckedUpdateManyWithoutOrderedInput;
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

export class OrderUpdateManyWithoutBusinessInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutBusinessInput[]>;
    create?: Nullable<OrderCreateWithoutBusinessInput[]>;
    createMany?: Nullable<OrderCreateManyBusinessInputEnvelope>;
    delete?: Nullable<OrderWhereUniqueInput[]>;
    deleteMany?: Nullable<OrderScalarWhereInput[]>;
    disconnect?: Nullable<OrderWhereUniqueInput[]>;
    set?: Nullable<OrderWhereUniqueInput[]>;
    update?: Nullable<OrderUpdateWithWhereUniqueWithoutBusinessInput[]>;
    updateMany?: Nullable<OrderUpdateManyWithWhereWithoutBusinessInput[]>;
    upsert?: Nullable<OrderUpsertWithWhereUniqueWithoutBusinessInput[]>;
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

export class OrderUpdateOneWithoutAbuseReportsInput {
    connect?: Nullable<OrderWhereUniqueInput>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutAbuseReportsInput>;
    create?: Nullable<OrderUncheckedCreateWithoutAbuseReportsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<OrderUncheckedUpdateWithoutAbuseReportsInput>;
    upsert?: Nullable<OrderUpsertWithoutAbuseReportsInput>;
}

export class OrderUpdateOneWithoutFavoritesInput {
    connect?: Nullable<OrderWhereUniqueInput>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutFavoritesInput>;
    create?: Nullable<OrderUncheckedCreateWithoutFavoritesInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<OrderUncheckedUpdateWithoutFavoritesInput>;
    upsert?: Nullable<OrderUpsertWithoutFavoritesInput>;
}

export class OrderUpdateWithWhereUniqueWithoutBusinessInput {
    data: OrderUncheckedUpdateWithoutBusinessInput;
    where: OrderWhereUniqueInput;
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

export class OrderUpdateWithoutAbuseReportsInput {
    Business?: Nullable<BusinessUpdateOneWithoutOrdersInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutOrdersInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderStatus?: Nullable<EnumOrderStatusFieldUpdateOperationsInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrderedInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receipt?: Nullable<AttachmentUpdateOneWithoutOrdersInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    service?: Nullable<ServiceUpdateOneRequiredWithoutOrdersInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpdateWithoutBusinessInput {
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutOrdersInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutOrdersInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderStatus?: Nullable<EnumOrderStatusFieldUpdateOperationsInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrderedInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receipt?: Nullable<AttachmentUpdateOneWithoutOrdersInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    service?: Nullable<ServiceUpdateOneRequiredWithoutOrdersInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpdateWithoutFavoritesInput {
    Business?: Nullable<BusinessUpdateOneWithoutOrdersInput>;
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutOrdersInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderStatus?: Nullable<EnumOrderStatusFieldUpdateOperationsInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrderedInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receipt?: Nullable<AttachmentUpdateOneWithoutOrdersInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    service?: Nullable<ServiceUpdateOneRequiredWithoutOrdersInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpdateWithoutOwnerInput {
    Business?: Nullable<BusinessUpdateOneWithoutOrdersInput>;
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutOrdersInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutOrdersInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderStatus?: Nullable<EnumOrderStatusFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receipt?: Nullable<AttachmentUpdateOneWithoutOrdersInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    service?: Nullable<ServiceUpdateOneRequiredWithoutOrdersInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpdateWithoutReceiptInput {
    Business?: Nullable<BusinessUpdateOneWithoutOrdersInput>;
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutOrdersInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutOrdersInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderStatus?: Nullable<EnumOrderStatusFieldUpdateOperationsInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrderedInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    service?: Nullable<ServiceUpdateOneRequiredWithoutOrdersInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpdateWithoutServiceInput {
    Business?: Nullable<BusinessUpdateOneWithoutOrdersInput>;
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutOrdersInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutOrdersInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderStatus?: Nullable<EnumOrderStatusFieldUpdateOperationsInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrderedInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receipt?: Nullable<AttachmentUpdateOneWithoutOrdersInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutOrderInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpdateWithoutTransactionsInput {
    Business?: Nullable<BusinessUpdateOneWithoutOrdersInput>;
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutOrdersInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutOrdersInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderStatus?: Nullable<EnumOrderStatusFieldUpdateOperationsInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrderedInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receipt?: Nullable<AttachmentUpdateOneWithoutOrdersInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    service?: Nullable<ServiceUpdateOneRequiredWithoutOrdersInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpsertWithWhereUniqueWithoutBusinessInput {
    create: OrderUncheckedCreateWithoutBusinessInput;
    update: OrderUncheckedUpdateWithoutBusinessInput;
    where: OrderWhereUniqueInput;
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

export class OrderUpsertWithoutAbuseReportsInput {
    create: OrderUncheckedCreateWithoutAbuseReportsInput;
    update: OrderUncheckedUpdateWithoutAbuseReportsInput;
}

export class OrderUpsertWithoutFavoritesInput {
    create: OrderUncheckedCreateWithoutFavoritesInput;
    update: OrderUncheckedUpdateWithoutFavoritesInput;
}

export class OrderUpsertWithoutTransactionsInput {
    create: OrderUncheckedCreateWithoutTransactionsInput;
    update: OrderUncheckedUpdateWithoutTransactionsInput;
}

export class OrderWhereInput {
    AND?: Nullable<OrderWhereInput[]>;
    Business?: Nullable<BusinessWhereInput>;
    NOT?: Nullable<OrderWhereInput[]>;
    OR?: Nullable<OrderWhereInput[]>;
    abuseReports?: Nullable<AbuseReportListRelationFilter>;
    businessId?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    favorites?: Nullable<FavoriteListRelationFilter>;
    id?: Nullable<StringFilter>;
    notes?: Nullable<StringNullableFilter>;
    orderStatus?: Nullable<EnumOrderStatusFilter>;
    owner?: Nullable<UserWhereInput>;
    ownerId?: Nullable<StringFilter>;
    quantity?: Nullable<IntFilter>;
    receipt?: Nullable<AttachmentWhereInput>;
    receiptId?: Nullable<StringNullableFilter>;
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    service?: Nullable<ServiceWhereInput>;
    serviceId?: Nullable<StringFilter>;
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
    recordStatus?: Nullable<RecordStatus>;
    state?: Nullable<PaymentMethodStatus>;
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
    recordStatus?: Nullable<RecordStatus>;
    state?: Nullable<PaymentMethodStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class PaymentMethodCreateManyLogoInput {
    code: SelcomUtilityCode;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    recordStatus?: Nullable<RecordStatus>;
    state?: Nullable<PaymentMethodStatus>;
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
    recordStatus?: Nullable<RecordStatus>;
    state?: Nullable<PaymentMethodStatus>;
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
    recordStatus?: Nullable<RecordStatus>;
    state?: Nullable<PaymentMethodStatus>;
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
    recordStatus?: Nullable<SortOrder>;
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
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    state?: Nullable<EnumPaymentMethodStatusFilter>;
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
    recordStatus?: Nullable<EnumRecordStatusWithAggregatesFilter>;
    state?: Nullable<EnumPaymentMethodStatusWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class PaymentMethodUncheckedCreateInput {
    attachmentId: string;
    code: SelcomUtilityCode;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    recordStatus?: Nullable<RecordStatus>;
    state?: Nullable<PaymentMethodStatus>;
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
    recordStatus?: Nullable<RecordStatus>;
    state?: Nullable<PaymentMethodStatus>;
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
    recordStatus?: Nullable<RecordStatus>;
    state?: Nullable<PaymentMethodStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class PaymentMethodUncheckedUpdateInput {
    attachmentId?: Nullable<StringFieldUpdateOperationsInput>;
    code?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentMethodStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentMethodStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentMethodStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class PaymentMethodUncheckedUpdateWithoutLogoInput {
    code?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentMethodStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentMethodStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class PaymentMethodUpdateInput {
    code?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    logo?: Nullable<AttachmentUpdateOneRequiredWithoutPaymentMethodsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentMethodStatusFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutPaymentMethodInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class PaymentMethodUpdateManyMutationInput {
    code?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentMethodStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentMethodStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentMethodStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    state?: Nullable<EnumPaymentMethodStatusFilter>;
    transactions?: Nullable<TransactionListRelationFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class PaymentMethodWhereUniqueInput {
    id?: Nullable<string>;
}

export class PlaceAutocompleteInput {
    components?: Nullable<Nullable<string>[]>;
    input: string;
    language?: Nullable<string>;
    location?: Nullable<LatLngInput>;
    offset?: Nullable<number>;
    origin?: Nullable<LatLngInput>;
    radius?: Nullable<number>;
    sessiontoken?: Nullable<string>;
    strictbounds?: Nullable<boolean>;
    types?: Nullable<string>;
}

export class RegisterDeviceInput {
    fcm_id?: Nullable<string>;
    id: string;
    type?: Nullable<string>;
    userId?: Nullable<string>;
}

export class ReverseGeocodeInput {
    language?: Nullable<Language>;
    latlng?: Nullable<LatLngInput>;
    location_type?: Nullable<ReverseGeocodingLocationType[]>;
    place_id?: Nullable<string>;
    result_type?: Nullable<string[]>;
}

export class ReviewCreateInput {
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutReviewsInput>;
    attachments?: Nullable<AttachmentCreateNestedManyWithoutReviewsInput>;
    author: UserCreateNestedOneWithoutReviewsInput;
    comments?: Nullable<CommentCreateNestedManyWithoutReviewInput>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutReviewsInput>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewee: UserCreateNestedOneWithoutReviewedInput;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewCreateManyAuthorInput {
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    revieweeId: string;
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
    recordStatus?: Nullable<RecordStatus>;
    revieweeId: string;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewCreateManyRevieweeInput {
    authorId: string;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
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

export class ReviewCreateNestedOneWithoutAbuseReportsInput {
    connect?: Nullable<ReviewWhereUniqueInput>;
    connectOrCreate?: Nullable<ReviewCreateOrConnectWithoutAbuseReportsInput>;
    create?: Nullable<ReviewUncheckedCreateWithoutAbuseReportsInput>;
}

export class ReviewCreateNestedOneWithoutAttachmentsInput {
    connect?: Nullable<ReviewWhereUniqueInput>;
    connectOrCreate?: Nullable<ReviewCreateOrConnectWithoutAttachmentsInput>;
    create?: Nullable<ReviewUncheckedCreateWithoutAttachmentsInput>;
}

export class ReviewCreateNestedOneWithoutCommentsInput {
    connect?: Nullable<ReviewWhereUniqueInput>;
    connectOrCreate?: Nullable<ReviewCreateOrConnectWithoutCommentsInput>;
    create?: Nullable<ReviewUncheckedCreateWithoutCommentsInput>;
}

export class ReviewCreateNestedOneWithoutFavoritesInput {
    connect?: Nullable<ReviewWhereUniqueInput>;
    connectOrCreate?: Nullable<ReviewCreateOrConnectWithoutFavoritesInput>;
    create?: Nullable<ReviewUncheckedCreateWithoutFavoritesInput>;
}

export class ReviewCreateOrConnectWithoutAbuseReportsInput {
    create: ReviewUncheckedCreateWithoutAbuseReportsInput;
    where: ReviewWhereUniqueInput;
}

export class ReviewCreateOrConnectWithoutAttachmentsInput {
    create: ReviewUncheckedCreateWithoutAttachmentsInput;
    where: ReviewWhereUniqueInput;
}

export class ReviewCreateOrConnectWithoutAuthorInput {
    create: ReviewUncheckedCreateWithoutAuthorInput;
    where: ReviewWhereUniqueInput;
}

export class ReviewCreateOrConnectWithoutCommentsInput {
    create: ReviewUncheckedCreateWithoutCommentsInput;
    where: ReviewWhereUniqueInput;
}

export class ReviewCreateOrConnectWithoutFavoritesInput {
    create: ReviewUncheckedCreateWithoutFavoritesInput;
    where: ReviewWhereUniqueInput;
}

export class ReviewCreateOrConnectWithoutRevieweeInput {
    create: ReviewUncheckedCreateWithoutRevieweeInput;
    where: ReviewWhereUniqueInput;
}

export class ReviewCreateWithoutAbuseReportsInput {
    attachments?: Nullable<AttachmentCreateNestedManyWithoutReviewsInput>;
    author: UserCreateNestedOneWithoutReviewsInput;
    comments?: Nullable<CommentCreateNestedManyWithoutReviewInput>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutReviewsInput>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewee: UserCreateNestedOneWithoutReviewedInput;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewCreateWithoutAttachmentsInput {
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutReviewsInput>;
    author: UserCreateNestedOneWithoutReviewsInput;
    comments?: Nullable<CommentCreateNestedManyWithoutReviewInput>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutReviewsInput>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewee: UserCreateNestedOneWithoutReviewedInput;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewCreateWithoutAuthorInput {
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutReviewsInput>;
    attachments?: Nullable<AttachmentCreateNestedManyWithoutReviewsInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutReviewInput>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutReviewsInput>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewee: UserCreateNestedOneWithoutReviewedInput;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewCreateWithoutCommentsInput {
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutReviewsInput>;
    attachments?: Nullable<AttachmentCreateNestedManyWithoutReviewsInput>;
    author: UserCreateNestedOneWithoutReviewsInput;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutReviewsInput>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewee: UserCreateNestedOneWithoutReviewedInput;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewCreateWithoutFavoritesInput {
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutReviewsInput>;
    attachments?: Nullable<AttachmentCreateNestedManyWithoutReviewsInput>;
    author: UserCreateNestedOneWithoutReviewsInput;
    comments?: Nullable<CommentCreateNestedManyWithoutReviewInput>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewee: UserCreateNestedOneWithoutReviewedInput;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewCreateWithoutRevieweeInput {
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutReviewsInput>;
    attachments?: Nullable<AttachmentCreateNestedManyWithoutReviewsInput>;
    author: UserCreateNestedOneWithoutReviewsInput;
    comments?: Nullable<CommentCreateNestedManyWithoutReviewInput>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutReviewsInput>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
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
    recordStatus?: Nullable<SortOrder>;
    revieweeId?: Nullable<SortOrder>;
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
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    revieweeId?: Nullable<StringFilter>;
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
    recordStatus?: Nullable<EnumRecordStatusWithAggregatesFilter>;
    revieweeId?: Nullable<StringWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
    value?: Nullable<IntWithAggregatesFilter>;
}

export class ReviewUncheckedCreateInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutReviewsInput>;
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutReviewsInput>;
    authorId: string;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutReviewInput>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutReviewsInput>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    revieweeId: string;
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

export class ReviewUncheckedCreateWithoutAbuseReportsInput {
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutReviewsInput>;
    authorId: string;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutReviewInput>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutReviewsInput>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    revieweeId: string;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewUncheckedCreateWithoutAttachmentsInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutReviewsInput>;
    authorId: string;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutReviewInput>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutReviewsInput>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    revieweeId: string;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewUncheckedCreateWithoutAuthorInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutReviewsInput>;
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutReviewsInput>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutReviewInput>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutReviewsInput>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    revieweeId: string;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewUncheckedCreateWithoutCommentsInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutReviewsInput>;
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutReviewsInput>;
    authorId: string;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutReviewsInput>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    revieweeId: string;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewUncheckedCreateWithoutFavoritesInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutReviewsInput>;
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutReviewsInput>;
    authorId: string;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutReviewInput>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    revieweeId: string;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewUncheckedCreateWithoutRevieweeInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutReviewsInput>;
    attachments?: Nullable<AttachmentUncheckedCreateNestedManyWithoutReviewsInput>;
    authorId: string;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutReviewInput>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutReviewsInput>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewUncheckedUpdateInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutReviewsInput>;
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutReviewsInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutReviewInput>;
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutReviewsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    revieweeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class ReviewUncheckedUpdateManyInput {
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    revieweeId?: Nullable<StringFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    revieweeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class ReviewUncheckedUpdateWithoutAbuseReportsInput {
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutReviewsInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutReviewInput>;
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutReviewsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    revieweeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class ReviewUncheckedUpdateWithoutAttachmentsInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutReviewsInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutReviewInput>;
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutReviewsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    revieweeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class ReviewUncheckedUpdateWithoutAuthorInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutReviewsInput>;
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutReviewsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutReviewInput>;
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutReviewsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    revieweeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class ReviewUncheckedUpdateWithoutCommentsInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutReviewsInput>;
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutReviewsInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutReviewsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    revieweeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class ReviewUncheckedUpdateWithoutFavoritesInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutReviewsInput>;
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutReviewsInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutReviewInput>;
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    revieweeId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class ReviewUncheckedUpdateWithoutRevieweeInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutReviewsInput>;
    attachments?: Nullable<AttachmentUncheckedUpdateManyWithoutReviewsInput>;
    authorId?: Nullable<StringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutReviewInput>;
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutReviewsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class ReviewUpdateInput {
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutReviewsInput>;
    attachments?: Nullable<AttachmentUpdateManyWithoutReviewsInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutReviewsInput>;
    comments?: Nullable<CommentUpdateManyWithoutReviewInput>;
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutReviewsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewee?: Nullable<UserUpdateOneRequiredWithoutReviewedInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class ReviewUpdateManyMutationInput {
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
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

export class ReviewUpdateOneWithoutAbuseReportsInput {
    connect?: Nullable<ReviewWhereUniqueInput>;
    connectOrCreate?: Nullable<ReviewCreateOrConnectWithoutAbuseReportsInput>;
    create?: Nullable<ReviewUncheckedCreateWithoutAbuseReportsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<ReviewUncheckedUpdateWithoutAbuseReportsInput>;
    upsert?: Nullable<ReviewUpsertWithoutAbuseReportsInput>;
}

export class ReviewUpdateOneWithoutAttachmentsInput {
    connect?: Nullable<ReviewWhereUniqueInput>;
    connectOrCreate?: Nullable<ReviewCreateOrConnectWithoutAttachmentsInput>;
    create?: Nullable<ReviewUncheckedCreateWithoutAttachmentsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<ReviewUncheckedUpdateWithoutAttachmentsInput>;
    upsert?: Nullable<ReviewUpsertWithoutAttachmentsInput>;
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

export class ReviewUpdateOneWithoutFavoritesInput {
    connect?: Nullable<ReviewWhereUniqueInput>;
    connectOrCreate?: Nullable<ReviewCreateOrConnectWithoutFavoritesInput>;
    create?: Nullable<ReviewUncheckedCreateWithoutFavoritesInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<ReviewUncheckedUpdateWithoutFavoritesInput>;
    upsert?: Nullable<ReviewUpsertWithoutFavoritesInput>;
}

export class ReviewUpdateWithWhereUniqueWithoutAuthorInput {
    data: ReviewUncheckedUpdateWithoutAuthorInput;
    where: ReviewWhereUniqueInput;
}

export class ReviewUpdateWithWhereUniqueWithoutRevieweeInput {
    data: ReviewUncheckedUpdateWithoutRevieweeInput;
    where: ReviewWhereUniqueInput;
}

export class ReviewUpdateWithoutAbuseReportsInput {
    attachments?: Nullable<AttachmentUpdateManyWithoutReviewsInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutReviewsInput>;
    comments?: Nullable<CommentUpdateManyWithoutReviewInput>;
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutReviewsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewee?: Nullable<UserUpdateOneRequiredWithoutReviewedInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class ReviewUpdateWithoutAttachmentsInput {
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutReviewsInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutReviewsInput>;
    comments?: Nullable<CommentUpdateManyWithoutReviewInput>;
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutReviewsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewee?: Nullable<UserUpdateOneRequiredWithoutReviewedInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class ReviewUpdateWithoutAuthorInput {
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutReviewsInput>;
    attachments?: Nullable<AttachmentUpdateManyWithoutReviewsInput>;
    comments?: Nullable<CommentUpdateManyWithoutReviewInput>;
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutReviewsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewee?: Nullable<UserUpdateOneRequiredWithoutReviewedInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class ReviewUpdateWithoutCommentsInput {
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutReviewsInput>;
    attachments?: Nullable<AttachmentUpdateManyWithoutReviewsInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutReviewsInput>;
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutReviewsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewee?: Nullable<UserUpdateOneRequiredWithoutReviewedInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class ReviewUpdateWithoutFavoritesInput {
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutReviewsInput>;
    attachments?: Nullable<AttachmentUpdateManyWithoutReviewsInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutReviewsInput>;
    comments?: Nullable<CommentUpdateManyWithoutReviewInput>;
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewee?: Nullable<UserUpdateOneRequiredWithoutReviewedInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class ReviewUpdateWithoutRevieweeInput {
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutReviewsInput>;
    attachments?: Nullable<AttachmentUpdateManyWithoutReviewsInput>;
    author?: Nullable<UserUpdateOneRequiredWithoutReviewsInput>;
    comments?: Nullable<CommentUpdateManyWithoutReviewInput>;
    content?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutReviewsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
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

export class ReviewUpsertWithoutAbuseReportsInput {
    create: ReviewUncheckedCreateWithoutAbuseReportsInput;
    update: ReviewUncheckedUpdateWithoutAbuseReportsInput;
}

export class ReviewUpsertWithoutAttachmentsInput {
    create: ReviewUncheckedCreateWithoutAttachmentsInput;
    update: ReviewUncheckedUpdateWithoutAttachmentsInput;
}

export class ReviewUpsertWithoutCommentsInput {
    create: ReviewUncheckedCreateWithoutCommentsInput;
    update: ReviewUncheckedUpdateWithoutCommentsInput;
}

export class ReviewUpsertWithoutFavoritesInput {
    create: ReviewUncheckedCreateWithoutFavoritesInput;
    update: ReviewUncheckedUpdateWithoutFavoritesInput;
}

export class ReviewWhereInput {
    AND?: Nullable<ReviewWhereInput[]>;
    NOT?: Nullable<ReviewWhereInput[]>;
    OR?: Nullable<ReviewWhereInput[]>;
    abuseReports?: Nullable<AbuseReportListRelationFilter>;
    attachments?: Nullable<AttachmentListRelationFilter>;
    author?: Nullable<UserWhereInput>;
    authorId?: Nullable<StringFilter>;
    comments?: Nullable<CommentListRelationFilter>;
    content?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    favorites?: Nullable<FavoriteListRelationFilter>;
    id?: Nullable<StringFilter>;
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    reviewee?: Nullable<UserWhereInput>;
    revieweeId?: Nullable<StringFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
    value?: Nullable<IntFilter>;
}

export class ReviewWhereUniqueInput {
    id?: Nullable<string>;
}

export class RouteQueryInput {
    alternatives?: Nullable<boolean>;
    arrival_time?: Nullable<DateTime>;
    avoid?: Nullable<TravelRestriction[]>;
    departure_time?: Nullable<DateTime>;
    destination: LatLngInput;
    language?: Nullable<Language>;
    mode?: Nullable<TravelMode>;
    optimize?: Nullable<boolean>;
    origin: LatLngInput;
    region?: Nullable<string>;
    traffic_model?: Nullable<TrafficModel>;
    transit_mode?: Nullable<TransitMode[]>;
    transit_routing_preference?: Nullable<TransitRoutingPreference>;
    units?: Nullable<UnitSystem>;
    waypoints?: Nullable<LatLngInput[]>;
}

export class SelcomDisbursementCreateInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<PaymentStatus>;
    status?: Nullable<PaymentStatus>;
    transId: string;
    transaction?: Nullable<TransactionCreateNestedOneWithoutSelcomDisbursementInput>;
    updatedAt?: Nullable<DateTime>;
    userId: number;
    utilitycode: SelcomUtilityCode;
    utilityref: string;
    validation?: Nullable<PaymentStatus>;
}

export class SelcomDisbursementCreateManyInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<PaymentStatus>;
    status?: Nullable<PaymentStatus>;
    transId: string;
    updatedAt?: Nullable<DateTime>;
    userId: number;
    utilitycode: SelcomUtilityCode;
    utilityref: string;
    validation?: Nullable<PaymentStatus>;
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
    recordStatus?: Nullable<RecordStatus>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<PaymentStatus>;
    status?: Nullable<PaymentStatus>;
    transId: string;
    updatedAt?: Nullable<DateTime>;
    userId: number;
    utilitycode: SelcomUtilityCode;
    utilityref: string;
    validation?: Nullable<PaymentStatus>;
}

export class SelcomDisbursementOrderByInput {
    amount?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    recordStatus?: Nullable<SortOrder>;
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
    recordStatus?: Nullable<EnumRecordStatusWithAggregatesFilter>;
    reference?: Nullable<StringNullableWithAggregatesFilter>;
    resultCode?: Nullable<StringNullableWithAggregatesFilter>;
    state?: Nullable<EnumPaymentStatusWithAggregatesFilter>;
    status?: Nullable<EnumPaymentStatusWithAggregatesFilter>;
    transId?: Nullable<StringWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
    userId?: Nullable<IntWithAggregatesFilter>;
    utilitycode?: Nullable<EnumSelcomUtilityCodeWithAggregatesFilter>;
    utilityref?: Nullable<StringWithAggregatesFilter>;
    validation?: Nullable<EnumPaymentStatusWithAggregatesFilter>;
}

export class SelcomDisbursementUncheckedCreateInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<PaymentStatus>;
    status?: Nullable<PaymentStatus>;
    transId: string;
    transaction?: Nullable<TransactionUncheckedCreateNestedOneWithoutSelcomDisbursementInput>;
    updatedAt?: Nullable<DateTime>;
    userId: number;
    utilitycode: SelcomUtilityCode;
    utilityref: string;
    validation?: Nullable<PaymentStatus>;
}

export class SelcomDisbursementUncheckedCreateWithoutTransactionInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<PaymentStatus>;
    status?: Nullable<PaymentStatus>;
    transId: string;
    updatedAt?: Nullable<DateTime>;
    userId: number;
    utilitycode: SelcomUtilityCode;
    utilityref: string;
    validation?: Nullable<PaymentStatus>;
}

export class SelcomDisbursementUncheckedUpdateInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
    status?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    transaction?: Nullable<TransactionUncheckedUpdateOneWithoutSelcomDisbursementInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<IntFieldUpdateOperationsInput>;
    utilitycode?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    utilityref?: Nullable<StringFieldUpdateOperationsInput>;
    validation?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomDisbursementUncheckedUpdateManyInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
    status?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<IntFieldUpdateOperationsInput>;
    utilitycode?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    utilityref?: Nullable<StringFieldUpdateOperationsInput>;
    validation?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomDisbursementUncheckedUpdateWithoutTransactionInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
    status?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<IntFieldUpdateOperationsInput>;
    utilitycode?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    utilityref?: Nullable<StringFieldUpdateOperationsInput>;
    validation?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomDisbursementUpdateInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
    status?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    transaction?: Nullable<TransactionUpdateOneWithoutSelcomDisbursementInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<IntFieldUpdateOperationsInput>;
    utilitycode?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    utilityref?: Nullable<StringFieldUpdateOperationsInput>;
    validation?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomDisbursementUpdateManyMutationInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
    status?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<IntFieldUpdateOperationsInput>;
    utilitycode?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    utilityref?: Nullable<StringFieldUpdateOperationsInput>;
    validation?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
    status?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<IntFieldUpdateOperationsInput>;
    utilitycode?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    utilityref?: Nullable<StringFieldUpdateOperationsInput>;
    validation?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    reference?: Nullable<StringNullableFilter>;
    resultCode?: Nullable<StringNullableFilter>;
    state?: Nullable<EnumPaymentStatusFilter>;
    status?: Nullable<EnumPaymentStatusFilter>;
    transId?: Nullable<StringFilter>;
    transaction?: Nullable<TransactionWhereInput>;
    updatedAt?: Nullable<DateTimeFilter>;
    userId?: Nullable<IntFilter>;
    utilitycode?: Nullable<EnumSelcomUtilityCodeFilter>;
    utilityref?: Nullable<StringFilter>;
    validation?: Nullable<EnumPaymentStatusFilter>;
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
    recordStatus?: Nullable<RecordStatus>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<PaymentStatus>;
    status?: Nullable<PaymentStatus>;
    transId: string;
    transaction?: Nullable<TransactionCreateNestedOneWithoutSelcomPaymentInput>;
    updatedAt?: Nullable<DateTime>;
    utilityref: number;
    validation?: Nullable<PaymentStatus>;
}

export class SelcomPaymentCreateManyInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    msisdn: string;
    operator?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<PaymentStatus>;
    status?: Nullable<PaymentStatus>;
    transId: string;
    updatedAt?: Nullable<DateTime>;
    utilityref: number;
    validation?: Nullable<PaymentStatus>;
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
    recordStatus?: Nullable<RecordStatus>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<PaymentStatus>;
    status?: Nullable<PaymentStatus>;
    transId: string;
    updatedAt?: Nullable<DateTime>;
    utilityref: number;
    validation?: Nullable<PaymentStatus>;
}

export class SelcomPaymentOrderByInput {
    amount?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    msisdn?: Nullable<SortOrder>;
    operator?: Nullable<SortOrder>;
    recordStatus?: Nullable<SortOrder>;
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
    recordStatus?: Nullable<EnumRecordStatusWithAggregatesFilter>;
    reference?: Nullable<StringNullableWithAggregatesFilter>;
    resultCode?: Nullable<StringNullableWithAggregatesFilter>;
    state?: Nullable<EnumPaymentStatusWithAggregatesFilter>;
    status?: Nullable<EnumPaymentStatusWithAggregatesFilter>;
    transId?: Nullable<StringWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
    utilityref?: Nullable<IntWithAggregatesFilter>;
    validation?: Nullable<EnumPaymentStatusWithAggregatesFilter>;
}

export class SelcomPaymentUncheckedCreateInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    msisdn: string;
    operator?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<PaymentStatus>;
    status?: Nullable<PaymentStatus>;
    transId: string;
    transaction?: Nullable<TransactionUncheckedCreateNestedOneWithoutSelcomPaymentInput>;
    updatedAt?: Nullable<DateTime>;
    utilityref: number;
    validation?: Nullable<PaymentStatus>;
}

export class SelcomPaymentUncheckedCreateWithoutTransactionInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    msisdn: string;
    operator?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<PaymentStatus>;
    status?: Nullable<PaymentStatus>;
    transId: string;
    updatedAt?: Nullable<DateTime>;
    utilityref: number;
    validation?: Nullable<PaymentStatus>;
}

export class SelcomPaymentUncheckedUpdateInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    msisdn?: Nullable<StringFieldUpdateOperationsInput>;
    operator?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
    status?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    transaction?: Nullable<TransactionUncheckedUpdateOneWithoutSelcomPaymentInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    utilityref?: Nullable<IntFieldUpdateOperationsInput>;
    validation?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomPaymentUncheckedUpdateManyInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    msisdn?: Nullable<StringFieldUpdateOperationsInput>;
    operator?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
    status?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    utilityref?: Nullable<IntFieldUpdateOperationsInput>;
    validation?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomPaymentUncheckedUpdateWithoutTransactionInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    msisdn?: Nullable<StringFieldUpdateOperationsInput>;
    operator?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
    status?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    utilityref?: Nullable<IntFieldUpdateOperationsInput>;
    validation?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomPaymentUpdateInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    msisdn?: Nullable<StringFieldUpdateOperationsInput>;
    operator?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
    status?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    transaction?: Nullable<TransactionUpdateOneWithoutSelcomPaymentInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    utilityref?: Nullable<IntFieldUpdateOperationsInput>;
    validation?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomPaymentUpdateManyMutationInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    msisdn?: Nullable<StringFieldUpdateOperationsInput>;
    operator?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
    status?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    utilityref?: Nullable<IntFieldUpdateOperationsInput>;
    validation?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
    status?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    utilityref?: Nullable<IntFieldUpdateOperationsInput>;
    validation?: Nullable<EnumPaymentStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    reference?: Nullable<StringNullableFilter>;
    resultCode?: Nullable<StringNullableFilter>;
    state?: Nullable<EnumPaymentStatusFilter>;
    status?: Nullable<EnumPaymentStatusFilter>;
    transId?: Nullable<StringFilter>;
    transaction?: Nullable<TransactionWhereInput>;
    updatedAt?: Nullable<DateTimeFilter>;
    utilityref?: Nullable<IntFilter>;
    validation?: Nullable<EnumPaymentStatusFilter>;
}

export class SelcomPaymentWhereUniqueInput {
    id?: Nullable<string>;
}

export class ServiceCreateInput {
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutServiceInput>;
    business: BusinessCreateNestedOneWithoutServicesInput;
    category?: Nullable<CategoryCreateNestedOneWithoutServicesInput>;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutServiceInput>;
    id?: Nullable<string>;
    image?: Nullable<AttachmentCreateNestedOneWithoutServicesInput>;
    metadata?: Nullable<string[]>;
    name: string;
    orders?: Nullable<OrderCreateNestedManyWithoutServiceInput>;
    price: number;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCreateManyBusinessInput {
    categoryId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId?: Nullable<string>;
    metadata?: Nullable<string[]>;
    name: string;
    price: number;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCreateManyBusinessInputEnvelope {
    data: ServiceCreateManyBusinessInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class ServiceCreateManyCategoryInput {
    businessId: string;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId?: Nullable<string>;
    metadata?: Nullable<string[]>;
    name: string;
    price: number;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCreateManyCategoryInputEnvelope {
    data: ServiceCreateManyCategoryInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class ServiceCreateManyImageInput {
    businessId: string;
    categoryId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    metadata?: Nullable<string[]>;
    name: string;
    price: number;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCreateManyImageInputEnvelope {
    data: ServiceCreateManyImageInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class ServiceCreateManyInput {
    businessId: string;
    categoryId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId?: Nullable<string>;
    metadata?: Nullable<string[]>;
    name: string;
    price: number;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCreateManymetadataInput {
    set: string[];
}

export class ServiceCreateNestedManyWithoutBusinessInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutBusinessInput[]>;
    create?: Nullable<ServiceCreateWithoutBusinessInput[]>;
    createMany?: Nullable<ServiceCreateManyBusinessInputEnvelope>;
}

export class ServiceCreateNestedManyWithoutCategoryInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutCategoryInput[]>;
    create?: Nullable<ServiceCreateWithoutCategoryInput[]>;
    createMany?: Nullable<ServiceCreateManyCategoryInputEnvelope>;
}

export class ServiceCreateNestedManyWithoutImageInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutImageInput[]>;
    create?: Nullable<ServiceCreateWithoutImageInput[]>;
    createMany?: Nullable<ServiceCreateManyImageInputEnvelope>;
}

export class ServiceCreateNestedOneWithoutAbuseReportsInput {
    connect?: Nullable<ServiceWhereUniqueInput>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutAbuseReportsInput>;
    create?: Nullable<ServiceUncheckedCreateWithoutAbuseReportsInput>;
}

export class ServiceCreateNestedOneWithoutFavoritesInput {
    connect?: Nullable<ServiceWhereUniqueInput>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutFavoritesInput>;
    create?: Nullable<ServiceUncheckedCreateWithoutFavoritesInput>;
}

export class ServiceCreateNestedOneWithoutOrdersInput {
    connect?: Nullable<ServiceWhereUniqueInput>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutOrdersInput>;
    create?: Nullable<ServiceUncheckedCreateWithoutOrdersInput>;
}

export class ServiceCreateOrConnectWithoutAbuseReportsInput {
    create: ServiceUncheckedCreateWithoutAbuseReportsInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceCreateOrConnectWithoutBusinessInput {
    create: ServiceUncheckedCreateWithoutBusinessInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceCreateOrConnectWithoutCategoryInput {
    create: ServiceUncheckedCreateWithoutCategoryInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceCreateOrConnectWithoutFavoritesInput {
    create: ServiceUncheckedCreateWithoutFavoritesInput;
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

export class ServiceCreateWithoutAbuseReportsInput {
    business: BusinessCreateNestedOneWithoutServicesInput;
    category?: Nullable<CategoryCreateNestedOneWithoutServicesInput>;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutServiceInput>;
    id?: Nullable<string>;
    image?: Nullable<AttachmentCreateNestedOneWithoutServicesInput>;
    metadata?: Nullable<string[]>;
    name: string;
    orders?: Nullable<OrderCreateNestedManyWithoutServiceInput>;
    price: number;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCreateWithoutBusinessInput {
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutServiceInput>;
    category?: Nullable<CategoryCreateNestedOneWithoutServicesInput>;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutServiceInput>;
    id?: Nullable<string>;
    image?: Nullable<AttachmentCreateNestedOneWithoutServicesInput>;
    metadata?: Nullable<string[]>;
    name: string;
    orders?: Nullable<OrderCreateNestedManyWithoutServiceInput>;
    price: number;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCreateWithoutCategoryInput {
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutServiceInput>;
    business: BusinessCreateNestedOneWithoutServicesInput;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutServiceInput>;
    id?: Nullable<string>;
    image?: Nullable<AttachmentCreateNestedOneWithoutServicesInput>;
    metadata?: Nullable<string[]>;
    name: string;
    orders?: Nullable<OrderCreateNestedManyWithoutServiceInput>;
    price: number;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCreateWithoutFavoritesInput {
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutServiceInput>;
    business: BusinessCreateNestedOneWithoutServicesInput;
    category?: Nullable<CategoryCreateNestedOneWithoutServicesInput>;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    image?: Nullable<AttachmentCreateNestedOneWithoutServicesInput>;
    metadata?: Nullable<string[]>;
    name: string;
    orders?: Nullable<OrderCreateNestedManyWithoutServiceInput>;
    price: number;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCreateWithoutImageInput {
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutServiceInput>;
    business: BusinessCreateNestedOneWithoutServicesInput;
    category?: Nullable<CategoryCreateNestedOneWithoutServicesInput>;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutServiceInput>;
    id?: Nullable<string>;
    metadata?: Nullable<string[]>;
    name: string;
    orders?: Nullable<OrderCreateNestedManyWithoutServiceInput>;
    price: number;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCreateWithoutOrdersInput {
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutServiceInput>;
    business: BusinessCreateNestedOneWithoutServicesInput;
    category?: Nullable<CategoryCreateNestedOneWithoutServicesInput>;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutServiceInput>;
    id?: Nullable<string>;
    image?: Nullable<AttachmentCreateNestedOneWithoutServicesInput>;
    metadata?: Nullable<string[]>;
    name: string;
    price: number;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCreatemetadataInput {
    set: string[];
}

export class ServiceListRelationFilter {
    every?: Nullable<ServiceWhereInput>;
    none?: Nullable<ServiceWhereInput>;
    some?: Nullable<ServiceWhereInput>;
}

export class ServiceOrderByInput {
    businessId?: Nullable<SortOrder>;
    categoryId?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    currency?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    imageId?: Nullable<SortOrder>;
    metadata?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    price?: Nullable<SortOrder>;
    recordStatus?: Nullable<SortOrder>;
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
    businessId?: Nullable<StringFilter>;
    categoryId?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    currency?: Nullable<StringFilter>;
    description?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    imageId?: Nullable<StringNullableFilter>;
    metadata?: Nullable<StringNullableListFilter>;
    name?: Nullable<StringFilter>;
    price?: Nullable<FloatFilter>;
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class ServiceScalarWhereWithAggregatesInput {
    AND?: Nullable<ServiceScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<ServiceScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<ServiceScalarWhereWithAggregatesInput[]>;
    businessId?: Nullable<StringWithAggregatesFilter>;
    categoryId?: Nullable<StringNullableWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    currency?: Nullable<StringWithAggregatesFilter>;
    description?: Nullable<StringNullableWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    imageId?: Nullable<StringNullableWithAggregatesFilter>;
    metadata?: Nullable<StringNullableListFilter>;
    name?: Nullable<StringWithAggregatesFilter>;
    price?: Nullable<FloatWithAggregatesFilter>;
    recordStatus?: Nullable<EnumRecordStatusWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class ServiceUncheckedCreateInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutServiceInput>;
    businessId: string;
    categoryId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutServiceInput>;
    id?: Nullable<string>;
    imageId?: Nullable<string>;
    metadata?: Nullable<string[]>;
    name: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutServiceInput>;
    price: number;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceUncheckedCreateNestedManyWithoutBusinessInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutBusinessInput[]>;
    create?: Nullable<ServiceCreateWithoutBusinessInput[]>;
    createMany?: Nullable<ServiceCreateManyBusinessInputEnvelope>;
}

export class ServiceUncheckedCreateNestedManyWithoutCategoryInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutCategoryInput[]>;
    create?: Nullable<ServiceCreateWithoutCategoryInput[]>;
    createMany?: Nullable<ServiceCreateManyCategoryInputEnvelope>;
}

export class ServiceUncheckedCreateNestedManyWithoutImageInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutImageInput[]>;
    create?: Nullable<ServiceCreateWithoutImageInput[]>;
    createMany?: Nullable<ServiceCreateManyImageInputEnvelope>;
}

export class ServiceUncheckedCreateWithoutAbuseReportsInput {
    businessId: string;
    categoryId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutServiceInput>;
    id?: Nullable<string>;
    imageId?: Nullable<string>;
    metadata?: Nullable<string[]>;
    name: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutServiceInput>;
    price: number;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceUncheckedCreateWithoutBusinessInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutServiceInput>;
    categoryId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutServiceInput>;
    id?: Nullable<string>;
    imageId?: Nullable<string>;
    metadata?: Nullable<string[]>;
    name: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutServiceInput>;
    price: number;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceUncheckedCreateWithoutCategoryInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutServiceInput>;
    businessId: string;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutServiceInput>;
    id?: Nullable<string>;
    imageId?: Nullable<string>;
    metadata?: Nullable<string[]>;
    name: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutServiceInput>;
    price: number;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceUncheckedCreateWithoutFavoritesInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutServiceInput>;
    businessId: string;
    categoryId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId?: Nullable<string>;
    metadata?: Nullable<string[]>;
    name: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutServiceInput>;
    price: number;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceUncheckedCreateWithoutImageInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutServiceInput>;
    businessId: string;
    categoryId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutServiceInput>;
    id?: Nullable<string>;
    metadata?: Nullable<string[]>;
    name: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutServiceInput>;
    price: number;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceUncheckedCreateWithoutOrdersInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutServiceInput>;
    businessId: string;
    categoryId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutServiceInput>;
    id?: Nullable<string>;
    imageId?: Nullable<string>;
    metadata?: Nullable<string[]>;
    name: string;
    price: number;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceUncheckedUpdateInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutServiceInput>;
    businessId?: Nullable<StringFieldUpdateOperationsInput>;
    categoryId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutServiceInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    imageId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    metadata?: Nullable<string[]>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutServiceInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUncheckedUpdateManyInput {
    businessId?: Nullable<StringFieldUpdateOperationsInput>;
    categoryId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    imageId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    metadata?: Nullable<string[]>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUncheckedUpdateManyWithoutBusinessInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutBusinessInput[]>;
    create?: Nullable<ServiceCreateWithoutBusinessInput[]>;
    createMany?: Nullable<ServiceCreateManyBusinessInputEnvelope>;
    delete?: Nullable<ServiceWhereUniqueInput[]>;
    deleteMany?: Nullable<ServiceScalarWhereInput[]>;
    disconnect?: Nullable<ServiceWhereUniqueInput[]>;
    set?: Nullable<ServiceWhereUniqueInput[]>;
    update?: Nullable<ServiceUpdateWithWhereUniqueWithoutBusinessInput[]>;
    updateMany?: Nullable<ServiceUpdateManyWithWhereWithoutBusinessInput[]>;
    upsert?: Nullable<ServiceUpsertWithWhereUniqueWithoutBusinessInput[]>;
}

export class ServiceUncheckedUpdateManyWithoutCategoryInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutCategoryInput[]>;
    create?: Nullable<ServiceCreateWithoutCategoryInput[]>;
    createMany?: Nullable<ServiceCreateManyCategoryInputEnvelope>;
    delete?: Nullable<ServiceWhereUniqueInput[]>;
    deleteMany?: Nullable<ServiceScalarWhereInput[]>;
    disconnect?: Nullable<ServiceWhereUniqueInput[]>;
    set?: Nullable<ServiceWhereUniqueInput[]>;
    update?: Nullable<ServiceUpdateWithWhereUniqueWithoutCategoryInput[]>;
    updateMany?: Nullable<ServiceUpdateManyWithWhereWithoutCategoryInput[]>;
    upsert?: Nullable<ServiceUpsertWithWhereUniqueWithoutCategoryInput[]>;
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
    categoryId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    imageId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    metadata?: Nullable<string[]>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUncheckedUpdateWithoutAbuseReportsInput {
    businessId?: Nullable<StringFieldUpdateOperationsInput>;
    categoryId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutServiceInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    imageId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    metadata?: Nullable<string[]>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutServiceInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUncheckedUpdateWithoutBusinessInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutServiceInput>;
    categoryId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutServiceInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    image?: Nullable<AttachmentCreateInput>;
    imageId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    metadata?: Nullable<string[]>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutServiceInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUncheckedUpdateWithoutCategoryInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutServiceInput>;
    businessId?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutServiceInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    imageId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    metadata?: Nullable<string[]>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutServiceInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUncheckedUpdateWithoutFavoritesInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutServiceInput>;
    businessId?: Nullable<StringFieldUpdateOperationsInput>;
    categoryId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    imageId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    metadata?: Nullable<string[]>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutServiceInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUncheckedUpdateWithoutImageInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutServiceInput>;
    businessId?: Nullable<StringFieldUpdateOperationsInput>;
    categoryId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutServiceInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    metadata?: Nullable<string[]>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutServiceInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUncheckedUpdateWithoutOrdersInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutServiceInput>;
    businessId?: Nullable<StringFieldUpdateOperationsInput>;
    categoryId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutServiceInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    imageId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    metadata?: Nullable<string[]>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUpdateInput {
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutServiceInput>;
    business?: Nullable<BusinessUpdateOneRequiredWithoutServicesInput>;
    category?: Nullable<CategoryUpdateOneWithoutServicesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutServiceInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    image?: Nullable<AttachmentUpdateOneWithoutServicesInput>;
    metadata?: Nullable<string[]>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutServiceInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    metadata?: Nullable<string[]>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUpdateManyWithWhereWithoutBusinessInput {
    data: ServiceUncheckedUpdateManyWithoutServicesInput;
    where: ServiceScalarWhereInput;
}

export class ServiceUpdateManyWithWhereWithoutCategoryInput {
    data: ServiceUncheckedUpdateManyWithoutServicesInput;
    where: ServiceScalarWhereInput;
}

export class ServiceUpdateManyWithWhereWithoutImageInput {
    data: ServiceUncheckedUpdateManyWithoutServicesInput;
    where: ServiceScalarWhereInput;
}

export class ServiceUpdateManyWithoutBusinessInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutBusinessInput[]>;
    create?: Nullable<ServiceCreateWithoutBusinessInput[]>;
    createMany?: Nullable<ServiceCreateManyBusinessInputEnvelope>;
    delete?: Nullable<ServiceWhereUniqueInput[]>;
    deleteMany?: Nullable<ServiceScalarWhereInput[]>;
    disconnect?: Nullable<ServiceWhereUniqueInput[]>;
    set?: Nullable<ServiceWhereUniqueInput[]>;
    update?: Nullable<ServiceUpdateWithWhereUniqueWithoutBusinessInput[]>;
    updateMany?: Nullable<ServiceUpdateManyWithWhereWithoutBusinessInput[]>;
    upsert?: Nullable<ServiceUpsertWithWhereUniqueWithoutBusinessInput[]>;
}

export class ServiceUpdateManyWithoutCategoryInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutCategoryInput[]>;
    create?: Nullable<ServiceCreateWithoutCategoryInput[]>;
    createMany?: Nullable<ServiceCreateManyCategoryInputEnvelope>;
    delete?: Nullable<ServiceWhereUniqueInput[]>;
    deleteMany?: Nullable<ServiceScalarWhereInput[]>;
    disconnect?: Nullable<ServiceWhereUniqueInput[]>;
    set?: Nullable<ServiceWhereUniqueInput[]>;
    update?: Nullable<ServiceUpdateWithWhereUniqueWithoutCategoryInput[]>;
    updateMany?: Nullable<ServiceUpdateManyWithWhereWithoutCategoryInput[]>;
    upsert?: Nullable<ServiceUpsertWithWhereUniqueWithoutCategoryInput[]>;
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

export class ServiceUpdateOneWithoutAbuseReportsInput {
    connect?: Nullable<ServiceWhereUniqueInput>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutAbuseReportsInput>;
    create?: Nullable<ServiceUncheckedCreateWithoutAbuseReportsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<ServiceUncheckedUpdateWithoutAbuseReportsInput>;
    upsert?: Nullable<ServiceUpsertWithoutAbuseReportsInput>;
}

export class ServiceUpdateOneWithoutFavoritesInput {
    connect?: Nullable<ServiceWhereUniqueInput>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutFavoritesInput>;
    create?: Nullable<ServiceUncheckedCreateWithoutFavoritesInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<ServiceUncheckedUpdateWithoutFavoritesInput>;
    upsert?: Nullable<ServiceUpsertWithoutFavoritesInput>;
}

export class ServiceUpdateWithWhereUniqueWithoutBusinessInput {
    data: ServiceUncheckedUpdateWithoutBusinessInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceUpdateWithWhereUniqueWithoutCategoryInput {
    data: ServiceUncheckedUpdateWithoutCategoryInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceUpdateWithWhereUniqueWithoutImageInput {
    data: ServiceUncheckedUpdateWithoutImageInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceUpdateWithoutAbuseReportsInput {
    business?: Nullable<BusinessUpdateOneRequiredWithoutServicesInput>;
    category?: Nullable<CategoryUpdateOneWithoutServicesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutServiceInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    image?: Nullable<AttachmentUpdateOneWithoutServicesInput>;
    metadata?: Nullable<string[]>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutServiceInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUpdateWithoutBusinessInput {
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutServiceInput>;
    category?: Nullable<CategoryUpdateOneWithoutServicesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutServiceInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    image?: Nullable<AttachmentUpdateOneWithoutServicesInput>;
    metadata?: Nullable<string[]>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutServiceInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUpdateWithoutCategoryInput {
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutServiceInput>;
    business?: Nullable<BusinessUpdateOneRequiredWithoutServicesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutServiceInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    image?: Nullable<AttachmentUpdateOneWithoutServicesInput>;
    metadata?: Nullable<string[]>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutServiceInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUpdateWithoutFavoritesInput {
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutServiceInput>;
    business?: Nullable<BusinessUpdateOneRequiredWithoutServicesInput>;
    category?: Nullable<CategoryUpdateOneWithoutServicesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    image?: Nullable<AttachmentUpdateOneWithoutServicesInput>;
    metadata?: Nullable<string[]>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutServiceInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUpdateWithoutImageInput {
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutServiceInput>;
    business?: Nullable<BusinessUpdateOneRequiredWithoutServicesInput>;
    category?: Nullable<CategoryUpdateOneWithoutServicesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutServiceInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    metadata?: Nullable<string[]>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutServiceInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUpdateWithoutOrdersInput {
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutServiceInput>;
    business?: Nullable<BusinessUpdateOneRequiredWithoutServicesInput>;
    category?: Nullable<CategoryUpdateOneWithoutServicesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    currency?: Nullable<StringFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutServiceInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    image?: Nullable<AttachmentUpdateOneWithoutServicesInput>;
    metadata?: Nullable<string[]>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUpdatemetadataInput {
    push?: Nullable<string[]>;
    set?: Nullable<string[]>;
}

export class ServiceUpsertWithWhereUniqueWithoutBusinessInput {
    create: ServiceUncheckedCreateWithoutBusinessInput;
    update: ServiceUncheckedUpdateWithoutBusinessInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceUpsertWithWhereUniqueWithoutCategoryInput {
    create: ServiceUncheckedCreateWithoutCategoryInput;
    update: ServiceUncheckedUpdateWithoutCategoryInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceUpsertWithWhereUniqueWithoutImageInput {
    create: ServiceUncheckedCreateWithoutImageInput;
    update: ServiceUncheckedUpdateWithoutImageInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceUpsertWithoutAbuseReportsInput {
    create: ServiceUncheckedCreateWithoutAbuseReportsInput;
    update: ServiceUncheckedUpdateWithoutAbuseReportsInput;
}

export class ServiceUpsertWithoutFavoritesInput {
    create: ServiceUncheckedCreateWithoutFavoritesInput;
    update: ServiceUncheckedUpdateWithoutFavoritesInput;
}

export class ServiceUpsertWithoutOrdersInput {
    create: ServiceUncheckedCreateWithoutOrdersInput;
    update: ServiceUncheckedUpdateWithoutOrdersInput;
}

export class ServiceWhereInput {
    AND?: Nullable<ServiceWhereInput[]>;
    NOT?: Nullable<ServiceWhereInput[]>;
    OR?: Nullable<ServiceWhereInput[]>;
    abuseReports?: Nullable<AbuseReportListRelationFilter>;
    business?: Nullable<BusinessWhereInput>;
    businessId?: Nullable<StringFilter>;
    category?: Nullable<CategoryWhereInput>;
    categoryId?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    currency?: Nullable<StringFilter>;
    description?: Nullable<StringNullableFilter>;
    favorites?: Nullable<FavoriteListRelationFilter>;
    id?: Nullable<StringFilter>;
    image?: Nullable<AttachmentWhereInput>;
    imageId?: Nullable<StringNullableFilter>;
    metadata?: Nullable<StringNullableListFilter>;
    name?: Nullable<StringFilter>;
    orders?: Nullable<OrderListRelationFilter>;
    price?: Nullable<FloatFilter>;
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class ServiceWhereUniqueInput {
    id?: Nullable<string>;
}

export class SignupInput {
    avator?: Nullable<Upload>;
    business?: Nullable<BusinessCreateInput>;
    dateOfBirth?: Nullable<DateTime>;
    displayName: string;
    email: string;
    gender?: Nullable<Gender>;
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

export class StringNullableListFilter {
    equals?: Nullable<string[]>;
    has?: Nullable<string>;
    hasEvery?: Nullable<string[]>;
    hasSome?: Nullable<string[]>;
    isEmpty?: Nullable<boolean>;
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
    recordStatus?: Nullable<RecordStatus>;
    selcomDisbursement?: Nullable<SelcomDisbursementCreateNestedOneWithoutTransactionInput>;
    selcomPayment?: Nullable<SelcomPaymentCreateNestedOneWithoutTransactionInput>;
    state?: Nullable<TransactionStatus>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionCreateManyInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPaymentId?: Nullable<string>;
    orderId: string;
    paymentMethodId: string;
    recordStatus?: Nullable<RecordStatus>;
    selcomDisbursementId?: Nullable<string>;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<TransactionStatus>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionCreateManyOrderInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPaymentId?: Nullable<string>;
    paymentMethodId: string;
    recordStatus?: Nullable<RecordStatus>;
    selcomDisbursementId?: Nullable<string>;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<TransactionStatus>;
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
    recordStatus?: Nullable<RecordStatus>;
    selcomDisbursementId?: Nullable<string>;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<TransactionStatus>;
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
    recordStatus?: Nullable<RecordStatus>;
    selcomDisbursement?: Nullable<SelcomDisbursementCreateNestedOneWithoutTransactionInput>;
    selcomPayment?: Nullable<SelcomPaymentCreateNestedOneWithoutTransactionInput>;
    state?: Nullable<TransactionStatus>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionCreateWithoutOrderInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPayment?: Nullable<MpesaPaymentCreateNestedOneWithoutTransactionInput>;
    paymentMethod: PaymentMethodCreateNestedOneWithoutTransactionsInput;
    recordStatus?: Nullable<RecordStatus>;
    selcomDisbursement?: Nullable<SelcomDisbursementCreateNestedOneWithoutTransactionInput>;
    selcomPayment?: Nullable<SelcomPaymentCreateNestedOneWithoutTransactionInput>;
    state?: Nullable<TransactionStatus>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionCreateWithoutPaymentMethodInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPayment?: Nullable<MpesaPaymentCreateNestedOneWithoutTransactionInput>;
    order: OrderCreateNestedOneWithoutTransactionsInput;
    recordStatus?: Nullable<RecordStatus>;
    selcomDisbursement?: Nullable<SelcomDisbursementCreateNestedOneWithoutTransactionInput>;
    selcomPayment?: Nullable<SelcomPaymentCreateNestedOneWithoutTransactionInput>;
    state?: Nullable<TransactionStatus>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionCreateWithoutSelcomDisbursementInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPayment?: Nullable<MpesaPaymentCreateNestedOneWithoutTransactionInput>;
    order: OrderCreateNestedOneWithoutTransactionsInput;
    paymentMethod: PaymentMethodCreateNestedOneWithoutTransactionsInput;
    recordStatus?: Nullable<RecordStatus>;
    selcomPayment?: Nullable<SelcomPaymentCreateNestedOneWithoutTransactionInput>;
    state?: Nullable<TransactionStatus>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionCreateWithoutSelcomPaymentInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPayment?: Nullable<MpesaPaymentCreateNestedOneWithoutTransactionInput>;
    order: OrderCreateNestedOneWithoutTransactionsInput;
    paymentMethod: PaymentMethodCreateNestedOneWithoutTransactionsInput;
    recordStatus?: Nullable<RecordStatus>;
    selcomDisbursement?: Nullable<SelcomDisbursementCreateNestedOneWithoutTransactionInput>;
    state?: Nullable<TransactionStatus>;
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
    recordStatus?: Nullable<SortOrder>;
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
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    selcomDisbursementId?: Nullable<StringNullableFilter>;
    selcomPaymentId?: Nullable<StringNullableFilter>;
    state?: Nullable<EnumTransactionStatusFilter>;
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
    recordStatus?: Nullable<EnumRecordStatusWithAggregatesFilter>;
    selcomDisbursementId?: Nullable<StringNullableWithAggregatesFilter>;
    selcomPaymentId?: Nullable<StringNullableWithAggregatesFilter>;
    state?: Nullable<EnumTransactionStatusWithAggregatesFilter>;
    type?: Nullable<EnumTransactionTypeWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class TransactionUncheckedCreateInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPaymentId?: Nullable<string>;
    orderId: string;
    paymentMethodId: string;
    recordStatus?: Nullable<RecordStatus>;
    selcomDisbursementId?: Nullable<string>;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<TransactionStatus>;
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
    recordStatus?: Nullable<RecordStatus>;
    selcomDisbursementId?: Nullable<string>;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<TransactionStatus>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionUncheckedCreateWithoutOrderInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPaymentId?: Nullable<string>;
    paymentMethodId: string;
    recordStatus?: Nullable<RecordStatus>;
    selcomDisbursementId?: Nullable<string>;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<TransactionStatus>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionUncheckedCreateWithoutPaymentMethodInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPaymentId?: Nullable<string>;
    orderId: string;
    recordStatus?: Nullable<RecordStatus>;
    selcomDisbursementId?: Nullable<string>;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<TransactionStatus>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionUncheckedCreateWithoutSelcomDisbursementInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPaymentId?: Nullable<string>;
    orderId: string;
    paymentMethodId: string;
    recordStatus?: Nullable<RecordStatus>;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<TransactionStatus>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionUncheckedCreateWithoutSelcomPaymentInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPaymentId?: Nullable<string>;
    orderId: string;
    paymentMethodId: string;
    recordStatus?: Nullable<RecordStatus>;
    selcomDisbursementId?: Nullable<string>;
    state?: Nullable<TransactionStatus>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionUncheckedUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderId?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethodId?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    selcomDisbursementId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    selcomPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumTransactionStatusFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUncheckedUpdateManyInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderId?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethodId?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    selcomDisbursementId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    selcomPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumTransactionStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    selcomDisbursementId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    selcomPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumTransactionStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    selcomDisbursementId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    selcomPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumTransactionStatusFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUncheckedUpdateWithoutOrderInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    paymentMethodId?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    selcomDisbursementId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    selcomPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumTransactionStatusFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUncheckedUpdateWithoutPaymentMethodInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderId?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    selcomDisbursementId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    selcomPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumTransactionStatusFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUncheckedUpdateWithoutSelcomDisbursementInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderId?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethodId?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    selcomPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumTransactionStatusFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUncheckedUpdateWithoutSelcomPaymentInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderId?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethodId?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    selcomDisbursementId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumTransactionStatusFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPayment?: Nullable<MpesaPaymentUpdateOneWithoutTransactionInput>;
    order?: Nullable<OrderUpdateOneRequiredWithoutTransactionsInput>;
    paymentMethod?: Nullable<PaymentMethodUpdateOneRequiredWithoutTransactionsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    selcomDisbursement?: Nullable<SelcomDisbursementUpdateOneWithoutTransactionInput>;
    selcomPayment?: Nullable<SelcomPaymentUpdateOneWithoutTransactionInput>;
    state?: Nullable<EnumTransactionStatusFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    state?: Nullable<EnumTransactionStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    selcomDisbursement?: Nullable<SelcomDisbursementUpdateOneWithoutTransactionInput>;
    selcomPayment?: Nullable<SelcomPaymentUpdateOneWithoutTransactionInput>;
    state?: Nullable<EnumTransactionStatusFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUpdateWithoutOrderInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPayment?: Nullable<MpesaPaymentUpdateOneWithoutTransactionInput>;
    paymentMethod?: Nullable<PaymentMethodUpdateOneRequiredWithoutTransactionsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    selcomDisbursement?: Nullable<SelcomDisbursementUpdateOneWithoutTransactionInput>;
    selcomPayment?: Nullable<SelcomPaymentUpdateOneWithoutTransactionInput>;
    state?: Nullable<EnumTransactionStatusFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUpdateWithoutPaymentMethodInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPayment?: Nullable<MpesaPaymentUpdateOneWithoutTransactionInput>;
    order?: Nullable<OrderUpdateOneRequiredWithoutTransactionsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    selcomDisbursement?: Nullable<SelcomDisbursementUpdateOneWithoutTransactionInput>;
    selcomPayment?: Nullable<SelcomPaymentUpdateOneWithoutTransactionInput>;
    state?: Nullable<EnumTransactionStatusFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUpdateWithoutSelcomDisbursementInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPayment?: Nullable<MpesaPaymentUpdateOneWithoutTransactionInput>;
    order?: Nullable<OrderUpdateOneRequiredWithoutTransactionsInput>;
    paymentMethod?: Nullable<PaymentMethodUpdateOneRequiredWithoutTransactionsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    selcomPayment?: Nullable<SelcomPaymentUpdateOneWithoutTransactionInput>;
    state?: Nullable<EnumTransactionStatusFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUpdateWithoutSelcomPaymentInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPayment?: Nullable<MpesaPaymentUpdateOneWithoutTransactionInput>;
    order?: Nullable<OrderUpdateOneRequiredWithoutTransactionsInput>;
    paymentMethod?: Nullable<PaymentMethodUpdateOneRequiredWithoutTransactionsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    selcomDisbursement?: Nullable<SelcomDisbursementUpdateOneWithoutTransactionInput>;
    state?: Nullable<EnumTransactionStatusFieldUpdateOperationsInput>;
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
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    selcomDisbursement?: Nullable<SelcomDisbursementWhereInput>;
    selcomDisbursementId?: Nullable<StringNullableFilter>;
    selcomPayment?: Nullable<SelcomPaymentWhereInput>;
    selcomPaymentId?: Nullable<StringNullableFilter>;
    state?: Nullable<EnumTransactionStatusFilter>;
    type?: Nullable<EnumTransactionTypeFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class TransactionWhereUniqueInput {
    id?: Nullable<string>;
}

export class UserCreateInput {
    abuseReported?: Nullable<AbuseReportCreateNestedManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutUsersInput>;
    avator?: Nullable<AttachmentCreateNestedOneWithoutUsersInput>;
    businessProfile?: Nullable<BusinessCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    favorited?: Nullable<FavoriteCreateNestedManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutUsersInput>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutUsersInput>;
    ordered?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewed?: Nullable<ReviewCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateManyAvatorInput {
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateManyAvatorInputEnvelope {
    data: UserCreateManyAvatorInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class UserCreateManyInput {
    avatorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateManyLocationInput {
    avatorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
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

export class UserCreateNestedOneWithoutAbuseReportedInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutAbuseReportedInput>;
    create?: Nullable<UserUncheckedCreateWithoutAbuseReportedInput>;
}

export class UserCreateNestedOneWithoutAbuseReportsInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutAbuseReportsInput>;
    create?: Nullable<UserUncheckedCreateWithoutAbuseReportsInput>;
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

export class UserCreateNestedOneWithoutFavoritedInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutFavoritedInput>;
    create?: Nullable<UserUncheckedCreateWithoutFavoritedInput>;
}

export class UserCreateNestedOneWithoutFavoritesInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutFavoritesInput>;
    create?: Nullable<UserUncheckedCreateWithoutFavoritesInput>;
}

export class UserCreateNestedOneWithoutOrderedInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutOrderedInput>;
    create?: Nullable<UserUncheckedCreateWithoutOrderedInput>;
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

export class UserCreateOrConnectWithoutAbuseReportedInput {
    create: UserUncheckedCreateWithoutAbuseReportedInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutAbuseReportsInput {
    create: UserUncheckedCreateWithoutAbuseReportsInput;
    where: UserWhereUniqueInput;
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

export class UserCreateOrConnectWithoutFavoritedInput {
    create: UserUncheckedCreateWithoutFavoritedInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutFavoritesInput {
    create: UserUncheckedCreateWithoutFavoritesInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutLocationInput {
    create: UserUncheckedCreateWithoutLocationInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutOrderedInput {
    create: UserUncheckedCreateWithoutOrderedInput;
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

export class UserCreateWithoutAbuseReportedInput {
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutUsersInput>;
    avator?: Nullable<AttachmentCreateNestedOneWithoutUsersInput>;
    businessProfile?: Nullable<BusinessCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    favorited?: Nullable<FavoriteCreateNestedManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutUsersInput>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutUsersInput>;
    ordered?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewed?: Nullable<ReviewCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutAbuseReportsInput {
    abuseReported?: Nullable<AbuseReportCreateNestedManyWithoutAuthorInput>;
    avator?: Nullable<AttachmentCreateNestedOneWithoutUsersInput>;
    businessProfile?: Nullable<BusinessCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    favorited?: Nullable<FavoriteCreateNestedManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutUsersInput>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutUsersInput>;
    ordered?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewed?: Nullable<ReviewCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutAvatorInput {
    abuseReported?: Nullable<AbuseReportCreateNestedManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutUsersInput>;
    businessProfile?: Nullable<BusinessCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    favorited?: Nullable<FavoriteCreateNestedManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutUsersInput>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutUsersInput>;
    ordered?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewed?: Nullable<ReviewCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutBusinessProfileInput {
    abuseReported?: Nullable<AbuseReportCreateNestedManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutUsersInput>;
    avator?: Nullable<AttachmentCreateNestedOneWithoutUsersInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    favorited?: Nullable<FavoriteCreateNestedManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutUsersInput>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutUsersInput>;
    ordered?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewed?: Nullable<ReviewCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutCommentsInput {
    abuseReported?: Nullable<AbuseReportCreateNestedManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutUsersInput>;
    avator?: Nullable<AttachmentCreateNestedOneWithoutUsersInput>;
    businessProfile?: Nullable<BusinessCreateNestedOneWithoutOwnerInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    favorited?: Nullable<FavoriteCreateNestedManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutUsersInput>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutUsersInput>;
    ordered?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewed?: Nullable<ReviewCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutDeviceInput {
    abuseReported?: Nullable<AbuseReportCreateNestedManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutUsersInput>;
    avator?: Nullable<AttachmentCreateNestedOneWithoutUsersInput>;
    businessProfile?: Nullable<BusinessCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    favorited?: Nullable<FavoriteCreateNestedManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutUsersInput>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutUsersInput>;
    ordered?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewed?: Nullable<ReviewCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutFavoritedInput {
    abuseReported?: Nullable<AbuseReportCreateNestedManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutUsersInput>;
    avator?: Nullable<AttachmentCreateNestedOneWithoutUsersInput>;
    businessProfile?: Nullable<BusinessCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutUsersInput>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutUsersInput>;
    ordered?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewed?: Nullable<ReviewCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutFavoritesInput {
    abuseReported?: Nullable<AbuseReportCreateNestedManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutUsersInput>;
    avator?: Nullable<AttachmentCreateNestedOneWithoutUsersInput>;
    businessProfile?: Nullable<BusinessCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    favorited?: Nullable<FavoriteCreateNestedManyWithoutAuthorInput>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutUsersInput>;
    ordered?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewed?: Nullable<ReviewCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutLocationInput {
    abuseReported?: Nullable<AbuseReportCreateNestedManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutUsersInput>;
    avator?: Nullable<AttachmentCreateNestedOneWithoutUsersInput>;
    businessProfile?: Nullable<BusinessCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    favorited?: Nullable<FavoriteCreateNestedManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutUsersInput>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    ordered?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewed?: Nullable<ReviewCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutOrderedInput {
    abuseReported?: Nullable<AbuseReportCreateNestedManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutUsersInput>;
    avator?: Nullable<AttachmentCreateNestedOneWithoutUsersInput>;
    businessProfile?: Nullable<BusinessCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    favorited?: Nullable<FavoriteCreateNestedManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutUsersInput>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutUsersInput>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewed?: Nullable<ReviewCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutReviewedInput {
    abuseReported?: Nullable<AbuseReportCreateNestedManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutUsersInput>;
    avator?: Nullable<AttachmentCreateNestedOneWithoutUsersInput>;
    businessProfile?: Nullable<BusinessCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    favorited?: Nullable<FavoriteCreateNestedManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutUsersInput>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutUsersInput>;
    ordered?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviews?: Nullable<ReviewCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutReviewsInput {
    abuseReported?: Nullable<AbuseReportCreateNestedManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportCreateNestedManyWithoutUsersInput>;
    avator?: Nullable<AttachmentCreateNestedOneWithoutUsersInput>;
    businessProfile?: Nullable<BusinessCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    favorited?: Nullable<FavoriteCreateNestedManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteCreateNestedManyWithoutUsersInput>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutUsersInput>;
    ordered?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewed?: Nullable<ReviewCreateNestedManyWithoutRevieweeInput>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
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
    dateOfBirth?: Nullable<SortOrder>;
    disabled?: Nullable<SortOrder>;
    displayName?: Nullable<SortOrder>;
    email?: Nullable<SortOrder>;
    emailVerified?: Nullable<SortOrder>;
    gender?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    locationId?: Nullable<SortOrder>;
    phoneNumber?: Nullable<SortOrder>;
    recordStatus?: Nullable<SortOrder>;
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
    dateOfBirth?: Nullable<DateTimeNullableFilter>;
    disabled?: Nullable<BoolFilter>;
    displayName?: Nullable<StringFilter>;
    email?: Nullable<StringFilter>;
    emailVerified?: Nullable<BoolFilter>;
    gender?: Nullable<EnumGenderFilter>;
    id?: Nullable<StringFilter>;
    locationId?: Nullable<StringNullableFilter>;
    phoneNumber?: Nullable<StringNullableFilter>;
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    role?: Nullable<EnumRoleFilter>;
    state?: Nullable<EnumAccountStatusFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class UserScalarWhereWithAggregatesInput {
    AND?: Nullable<UserScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<UserScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<UserScalarWhereWithAggregatesInput[]>;
    avatorId?: Nullable<StringNullableWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    dateOfBirth?: Nullable<DateTimeNullableWithAggregatesFilter>;
    disabled?: Nullable<BoolWithAggregatesFilter>;
    displayName?: Nullable<StringWithAggregatesFilter>;
    email?: Nullable<StringWithAggregatesFilter>;
    emailVerified?: Nullable<BoolWithAggregatesFilter>;
    gender?: Nullable<EnumGenderWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    locationId?: Nullable<StringNullableWithAggregatesFilter>;
    phoneNumber?: Nullable<StringNullableWithAggregatesFilter>;
    recordStatus?: Nullable<EnumRecordStatusWithAggregatesFilter>;
    role?: Nullable<EnumRoleWithAggregatesFilter>;
    state?: Nullable<EnumAccountStatusWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class UserUncheckedCreateInput {
    abuseReported?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutUsersInput>;
    avatorId?: Nullable<string>;
    businessProfile?: Nullable<BusinessUncheckedCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    favorited?: Nullable<FavoriteUncheckedCreateNestedManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutUsersInput>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    ordered?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewed?: Nullable<ReviewUncheckedCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
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

export class UserUncheckedCreateWithoutAbuseReportedInput {
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutUsersInput>;
    avatorId?: Nullable<string>;
    businessProfile?: Nullable<BusinessUncheckedCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    favorited?: Nullable<FavoriteUncheckedCreateNestedManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutUsersInput>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    ordered?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewed?: Nullable<ReviewUncheckedCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutAbuseReportsInput {
    abuseReported?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutAuthorInput>;
    avatorId?: Nullable<string>;
    businessProfile?: Nullable<BusinessUncheckedCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    favorited?: Nullable<FavoriteUncheckedCreateNestedManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutUsersInput>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    ordered?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewed?: Nullable<ReviewUncheckedCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutAvatorInput {
    abuseReported?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutUsersInput>;
    businessProfile?: Nullable<BusinessUncheckedCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    favorited?: Nullable<FavoriteUncheckedCreateNestedManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutUsersInput>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    ordered?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewed?: Nullable<ReviewUncheckedCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutBusinessProfileInput {
    abuseReported?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutUsersInput>;
    avatorId?: Nullable<string>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    favorited?: Nullable<FavoriteUncheckedCreateNestedManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutUsersInput>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    ordered?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewed?: Nullable<ReviewUncheckedCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutCommentsInput {
    abuseReported?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutUsersInput>;
    avatorId?: Nullable<string>;
    businessProfile?: Nullable<BusinessUncheckedCreateNestedOneWithoutOwnerInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    favorited?: Nullable<FavoriteUncheckedCreateNestedManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutUsersInput>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    ordered?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewed?: Nullable<ReviewUncheckedCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutDeviceInput {
    abuseReported?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutUsersInput>;
    avatorId?: Nullable<string>;
    businessProfile?: Nullable<BusinessUncheckedCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    favorited?: Nullable<FavoriteUncheckedCreateNestedManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutUsersInput>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    ordered?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewed?: Nullable<ReviewUncheckedCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutFavoritedInput {
    abuseReported?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutUsersInput>;
    avatorId?: Nullable<string>;
    businessProfile?: Nullable<BusinessUncheckedCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutUsersInput>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    ordered?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewed?: Nullable<ReviewUncheckedCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutFavoritesInput {
    abuseReported?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutUsersInput>;
    avatorId?: Nullable<string>;
    businessProfile?: Nullable<BusinessUncheckedCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    favorited?: Nullable<FavoriteUncheckedCreateNestedManyWithoutAuthorInput>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    ordered?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewed?: Nullable<ReviewUncheckedCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutLocationInput {
    abuseReported?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutUsersInput>;
    avatorId?: Nullable<string>;
    businessProfile?: Nullable<BusinessUncheckedCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    favorited?: Nullable<FavoriteUncheckedCreateNestedManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutUsersInput>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    ordered?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewed?: Nullable<ReviewUncheckedCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutOrderedInput {
    abuseReported?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutUsersInput>;
    avatorId?: Nullable<string>;
    businessProfile?: Nullable<BusinessUncheckedCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    favorited?: Nullable<FavoriteUncheckedCreateNestedManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutUsersInput>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewed?: Nullable<ReviewUncheckedCreateNestedManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutReviewedInput {
    abuseReported?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutUsersInput>;
    avatorId?: Nullable<string>;
    businessProfile?: Nullable<BusinessUncheckedCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    favorited?: Nullable<FavoriteUncheckedCreateNestedManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutUsersInput>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    ordered?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviews?: Nullable<ReviewUncheckedCreateNestedManyWithoutAuthorInput>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutReviewsInput {
    abuseReported?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUncheckedCreateNestedManyWithoutUsersInput>;
    avatorId?: Nullable<string>;
    businessProfile?: Nullable<BusinessUncheckedCreateNestedOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    favorited?: Nullable<FavoriteUncheckedCreateNestedManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUncheckedCreateNestedManyWithoutUsersInput>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    ordered?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewed?: Nullable<ReviewUncheckedCreateNestedManyWithoutRevieweeInput>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedUpdateInput {
    abuseReported?: Nullable<AbuseReportUncheckedUpdateManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutUsersInput>;
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businessProfile?: Nullable<BusinessUncheckedUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    favorited?: Nullable<FavoriteUncheckedUpdateManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutUsersInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    ordered?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUncheckedUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateManyInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
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

export class UserUncheckedUpdateManyWithoutUsersInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutAbuseReportedInput {
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutUsersInput>;
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businessProfile?: Nullable<BusinessUncheckedUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    favorited?: Nullable<FavoriteUncheckedUpdateManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutUsersInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    ordered?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUncheckedUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutAbuseReportsInput {
    abuseReported?: Nullable<AbuseReportUncheckedUpdateManyWithoutAuthorInput>;
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businessProfile?: Nullable<BusinessUncheckedUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    favorited?: Nullable<FavoriteUncheckedUpdateManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutUsersInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    ordered?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUncheckedUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutAvatorInput {
    abuseReported?: Nullable<AbuseReportUncheckedUpdateManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutUsersInput>;
    businessProfile?: Nullable<BusinessUncheckedUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    favorited?: Nullable<FavoriteUncheckedUpdateManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutUsersInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    ordered?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUncheckedUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutBusinessProfileInput {
    abuseReported?: Nullable<AbuseReportUncheckedUpdateManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutUsersInput>;
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    favorited?: Nullable<FavoriteUncheckedUpdateManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutUsersInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    ordered?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUncheckedUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutCommentsInput {
    abuseReported?: Nullable<AbuseReportUncheckedUpdateManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutUsersInput>;
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businessProfile?: Nullable<BusinessUncheckedUpdateOneWithoutOwnerInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    favorited?: Nullable<FavoriteUncheckedUpdateManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutUsersInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    ordered?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUncheckedUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutDeviceInput {
    abuseReported?: Nullable<AbuseReportUncheckedUpdateManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutUsersInput>;
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businessProfile?: Nullable<BusinessUncheckedUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    favorited?: Nullable<FavoriteUncheckedUpdateManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutUsersInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    ordered?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUncheckedUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutFavoritedInput {
    abuseReported?: Nullable<AbuseReportUncheckedUpdateManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutUsersInput>;
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businessProfile?: Nullable<BusinessUncheckedUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutUsersInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    ordered?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUncheckedUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutFavoritesInput {
    abuseReported?: Nullable<AbuseReportUncheckedUpdateManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutUsersInput>;
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businessProfile?: Nullable<BusinessUncheckedUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    favorited?: Nullable<FavoriteUncheckedUpdateManyWithoutAuthorInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    ordered?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUncheckedUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutLocationInput {
    abuseReported?: Nullable<AbuseReportUncheckedUpdateManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutUsersInput>;
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businessProfile?: Nullable<BusinessUncheckedUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    favorited?: Nullable<FavoriteUncheckedUpdateManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutUsersInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    ordered?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUncheckedUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutOrderedInput {
    abuseReported?: Nullable<AbuseReportUncheckedUpdateManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutUsersInput>;
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businessProfile?: Nullable<BusinessUncheckedUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    favorited?: Nullable<FavoriteUncheckedUpdateManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutUsersInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUncheckedUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutReviewedInput {
    abuseReported?: Nullable<AbuseReportUncheckedUpdateManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutUsersInput>;
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businessProfile?: Nullable<BusinessUncheckedUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    favorited?: Nullable<FavoriteUncheckedUpdateManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutUsersInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    ordered?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUncheckedUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutReviewsInput {
    abuseReported?: Nullable<AbuseReportUncheckedUpdateManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUncheckedUpdateManyWithoutUsersInput>;
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    businessProfile?: Nullable<BusinessUncheckedUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUncheckedUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    favorited?: Nullable<FavoriteUncheckedUpdateManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUncheckedUpdateManyWithoutUsersInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    ordered?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUncheckedUpdateManyWithoutRevieweeInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateInput {
    abuseReported?: Nullable<AbuseReportUpdateManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutUsersInput>;
    avator?: Nullable<AttachmentUpdateOneWithoutUsersInput>;
    businessProfile?: Nullable<BusinessUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    favorited?: Nullable<FavoriteUpdateManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutUsersInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutUsersInput>;
    ordered?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateManyWithWhereWithoutAvatorInput {
    data: UserUncheckedUpdateManyWithoutUsersInput;
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

export class UserUpdateOneRequiredWithoutAbuseReportedInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutAbuseReportedInput>;
    create?: Nullable<UserUncheckedCreateWithoutAbuseReportedInput>;
    update?: Nullable<UserUncheckedUpdateWithoutAbuseReportedInput>;
    upsert?: Nullable<UserUpsertWithoutAbuseReportedInput>;
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

export class UserUpdateOneRequiredWithoutFavoritedInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutFavoritedInput>;
    create?: Nullable<UserUncheckedCreateWithoutFavoritedInput>;
    update?: Nullable<UserUncheckedUpdateWithoutFavoritedInput>;
    upsert?: Nullable<UserUpsertWithoutFavoritedInput>;
}

export class UserUpdateOneRequiredWithoutOrderedInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutOrderedInput>;
    create?: Nullable<UserUncheckedCreateWithoutOrderedInput>;
    update?: Nullable<UserUncheckedUpdateWithoutOrderedInput>;
    upsert?: Nullable<UserUpsertWithoutOrderedInput>;
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

export class UserUpdateOneWithoutAbuseReportsInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutAbuseReportsInput>;
    create?: Nullable<UserUncheckedCreateWithoutAbuseReportsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<UserUncheckedUpdateWithoutAbuseReportsInput>;
    upsert?: Nullable<UserUpsertWithoutAbuseReportsInput>;
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

export class UserUpdateOneWithoutFavoritesInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutFavoritesInput>;
    create?: Nullable<UserUncheckedCreateWithoutFavoritesInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<UserUncheckedUpdateWithoutFavoritesInput>;
    upsert?: Nullable<UserUpsertWithoutFavoritesInput>;
}

export class UserUpdateWithWhereUniqueWithoutAvatorInput {
    data: UserUncheckedUpdateWithoutAvatorInput;
    where: UserWhereUniqueInput;
}

export class UserUpdateWithWhereUniqueWithoutLocationInput {
    data: UserUncheckedUpdateWithoutLocationInput;
    where: UserWhereUniqueInput;
}

export class UserUpdateWithoutAbuseReportedInput {
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutUsersInput>;
    avator?: Nullable<AttachmentUpdateOneWithoutUsersInput>;
    businessProfile?: Nullable<BusinessUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    favorited?: Nullable<FavoriteUpdateManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutUsersInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutUsersInput>;
    ordered?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutAbuseReportsInput {
    abuseReported?: Nullable<AbuseReportUpdateManyWithoutAuthorInput>;
    avator?: Nullable<AttachmentUpdateOneWithoutUsersInput>;
    businessProfile?: Nullable<BusinessUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    favorited?: Nullable<FavoriteUpdateManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutUsersInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutUsersInput>;
    ordered?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutAvatorInput {
    abuseReported?: Nullable<AbuseReportUpdateManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutUsersInput>;
    businessProfile?: Nullable<BusinessUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    favorited?: Nullable<FavoriteUpdateManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutUsersInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutUsersInput>;
    ordered?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutBusinessProfileInput {
    abuseReported?: Nullable<AbuseReportUpdateManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutUsersInput>;
    avator?: Nullable<AttachmentUpdateOneWithoutUsersInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    favorited?: Nullable<FavoriteUpdateManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutUsersInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutUsersInput>;
    ordered?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutCommentsInput {
    abuseReported?: Nullable<AbuseReportUpdateManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutUsersInput>;
    avator?: Nullable<AttachmentUpdateOneWithoutUsersInput>;
    businessProfile?: Nullable<BusinessUpdateOneWithoutOwnerInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    favorited?: Nullable<FavoriteUpdateManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutUsersInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutUsersInput>;
    ordered?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutDeviceInput {
    abuseReported?: Nullable<AbuseReportUpdateManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutUsersInput>;
    avator?: Nullable<AttachmentUpdateOneWithoutUsersInput>;
    businessProfile?: Nullable<BusinessUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    favorited?: Nullable<FavoriteUpdateManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutUsersInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutUsersInput>;
    ordered?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutFavoritedInput {
    abuseReported?: Nullable<AbuseReportUpdateManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutUsersInput>;
    avator?: Nullable<AttachmentUpdateOneWithoutUsersInput>;
    businessProfile?: Nullable<BusinessUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutUsersInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutUsersInput>;
    ordered?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutFavoritesInput {
    abuseReported?: Nullable<AbuseReportUpdateManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutUsersInput>;
    avator?: Nullable<AttachmentUpdateOneWithoutUsersInput>;
    businessProfile?: Nullable<BusinessUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    favorited?: Nullable<FavoriteUpdateManyWithoutAuthorInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutUsersInput>;
    ordered?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutLocationInput {
    abuseReported?: Nullable<AbuseReportUpdateManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutUsersInput>;
    avator?: Nullable<AttachmentUpdateOneWithoutUsersInput>;
    businessProfile?: Nullable<BusinessUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    favorited?: Nullable<FavoriteUpdateManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutUsersInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    ordered?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutOrderedInput {
    abuseReported?: Nullable<AbuseReportUpdateManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutUsersInput>;
    avator?: Nullable<AttachmentUpdateOneWithoutUsersInput>;
    businessProfile?: Nullable<BusinessUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    favorited?: Nullable<FavoriteUpdateManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutUsersInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutUsersInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUpdateManyWithoutRevieweeInput>;
    reviews?: Nullable<ReviewUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutReviewedInput {
    abuseReported?: Nullable<AbuseReportUpdateManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutUsersInput>;
    avator?: Nullable<AttachmentUpdateOneWithoutUsersInput>;
    businessProfile?: Nullable<BusinessUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    favorited?: Nullable<FavoriteUpdateManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutUsersInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutUsersInput>;
    ordered?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviews?: Nullable<ReviewUpdateManyWithoutAuthorInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutReviewsInput {
    abuseReported?: Nullable<AbuseReportUpdateManyWithoutAuthorInput>;
    abuseReports?: Nullable<AbuseReportUpdateManyWithoutUsersInput>;
    avator?: Nullable<AttachmentUpdateOneWithoutUsersInput>;
    businessProfile?: Nullable<BusinessUpdateOneWithoutOwnerInput>;
    comments?: Nullable<CommentUpdateManyWithoutAuthorInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    favorited?: Nullable<FavoriteUpdateManyWithoutAuthorInput>;
    favorites?: Nullable<FavoriteUpdateManyWithoutUsersInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutUsersInput>;
    ordered?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    recordStatus?: Nullable<EnumRecordStatusFieldUpdateOperationsInput>;
    reviewed?: Nullable<ReviewUpdateManyWithoutRevieweeInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumAccountStatusFieldUpdateOperationsInput>;
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

export class UserUpsertWithoutAbuseReportedInput {
    create: UserUncheckedCreateWithoutAbuseReportedInput;
    update: UserUncheckedUpdateWithoutAbuseReportedInput;
}

export class UserUpsertWithoutAbuseReportsInput {
    create: UserUncheckedCreateWithoutAbuseReportsInput;
    update: UserUncheckedUpdateWithoutAbuseReportsInput;
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

export class UserUpsertWithoutFavoritedInput {
    create: UserUncheckedCreateWithoutFavoritedInput;
    update: UserUncheckedUpdateWithoutFavoritedInput;
}

export class UserUpsertWithoutFavoritesInput {
    create: UserUncheckedCreateWithoutFavoritesInput;
    update: UserUncheckedUpdateWithoutFavoritesInput;
}

export class UserUpsertWithoutOrderedInput {
    create: UserUncheckedCreateWithoutOrderedInput;
    update: UserUncheckedUpdateWithoutOrderedInput;
}

export class UserUpsertWithoutReviewedInput {
    create: UserUncheckedCreateWithoutReviewedInput;
    update: UserUncheckedUpdateWithoutReviewedInput;
}

export class UserUpsertWithoutReviewsInput {
    create: UserUncheckedCreateWithoutReviewsInput;
    update: UserUncheckedUpdateWithoutReviewsInput;
}

export class UserWhereInput {
    AND?: Nullable<UserWhereInput[]>;
    NOT?: Nullable<UserWhereInput[]>;
    OR?: Nullable<UserWhereInput[]>;
    abuseReported?: Nullable<AbuseReportListRelationFilter>;
    abuseReports?: Nullable<AbuseReportListRelationFilter>;
    avator?: Nullable<AttachmentWhereInput>;
    avatorId?: Nullable<StringNullableFilter>;
    businessProfile?: Nullable<BusinessWhereInput>;
    comments?: Nullable<CommentListRelationFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    dateOfBirth?: Nullable<DateTimeNullableFilter>;
    device?: Nullable<DeviceWhereInput>;
    disabled?: Nullable<BoolFilter>;
    displayName?: Nullable<StringFilter>;
    email?: Nullable<StringFilter>;
    emailVerified?: Nullable<BoolFilter>;
    favorited?: Nullable<FavoriteListRelationFilter>;
    favorites?: Nullable<FavoriteListRelationFilter>;
    gender?: Nullable<EnumGenderFilter>;
    id?: Nullable<StringFilter>;
    location?: Nullable<LocationWhereInput>;
    locationId?: Nullable<StringNullableFilter>;
    ordered?: Nullable<OrderListRelationFilter>;
    phoneNumber?: Nullable<StringNullableFilter>;
    recordStatus?: Nullable<EnumRecordStatusFilter>;
    reviewed?: Nullable<ReviewListRelationFilter>;
    reviews?: Nullable<ReviewListRelationFilter>;
    role?: Nullable<EnumRoleFilter>;
    state?: Nullable<EnumAccountStatusFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class UserWhereUniqueInput {
    email?: Nullable<string>;
    id?: Nullable<string>;
}

export class AbuseRecordType {
    abuseReports: AbuseReport[];
    id: string;
    name: string;
}

export class AbuseRecordTypeBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class AbuseRecordTypeCountAggregateOutputType {
    _all: number;
    id: number;
    name: number;
}

export class AbuseRecordTypeCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class AbuseRecordTypeListResponse {
    data?: Nullable<AbuseRecordType[]>;
    message: string;
    status: boolean;
}

export class AbuseRecordTypeMaxAggregateOutputType {
    id?: Nullable<string>;
    name?: Nullable<string>;
}

export class AbuseRecordTypeMinAggregateOutputType {
    id?: Nullable<string>;
    name?: Nullable<string>;
}

export class AbuseRecordTypeResponse {
    data?: Nullable<AbuseRecordType>;
    message: string;
    status: boolean;
}

export class AbuseReport {
    Business?: Nullable<Business>;
    author: User;
    authorId: string;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    comments?: Nullable<Comment>;
    createdAt: DateTime;
    id: string;
    number: number;
    orderId?: Nullable<string>;
    orders?: Nullable<Order>;
    recordStatus: RecordStatus;
    report?: Nullable<string>;
    reviewId?: Nullable<string>;
    reviews?: Nullable<Review>;
    service?: Nullable<Service>;
    serviceId?: Nullable<string>;
    state: AbuseReportStatus;
    type: AbuseRecordType;
    typeId: string;
    updatedAt: DateTime;
    userId?: Nullable<string>;
    users?: Nullable<User>;
}

export class AbuseReportAvgAggregateOutputType {
    number?: Nullable<number>;
}

export class AbuseReportBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class AbuseReportCountAggregateOutputType {
    _all: number;
    authorId: number;
    businessId: number;
    commentId: number;
    createdAt: number;
    id: number;
    number: number;
    orderId: number;
    recordStatus: number;
    report: number;
    reviewId: number;
    serviceId: number;
    state: number;
    typeId: number;
    updatedAt: number;
    userId: number;
}

export class AbuseReportCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class AbuseReportListResponse {
    data?: Nullable<AbuseReport[]>;
    message: string;
    status: boolean;
}

export class AbuseReportMaxAggregateOutputType {
    authorId?: Nullable<string>;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    state?: Nullable<AbuseReportStatus>;
    typeId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class AbuseReportMinAggregateOutputType {
    authorId?: Nullable<string>;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    number?: Nullable<number>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    report?: Nullable<string>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    state?: Nullable<AbuseReportStatus>;
    typeId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class AbuseReportResponse {
    data?: Nullable<AbuseReport>;
    message: string;
    status: boolean;
}

export class AbuseReportSumAggregateOutputType {
    number?: Nullable<number>;
}

export class AddressComponent {
    long_name?: Nullable<string>;
    short_name?: Nullable<string>;
    types?: Nullable<Nullable<string>[]>;
}

export class AddressGeometry {
    bounds?: Nullable<LatLngBounds>;
    location?: Nullable<LatLng>;
    location_type?: Nullable<LocationType>;
    viewport?: Nullable<LatLngBounds>;
}

export class AggregateAbuseRecordType {
    _count?: Nullable<AbuseRecordTypeCountAggregateOutputType>;
    _max?: Nullable<AbuseRecordTypeMaxAggregateOutputType>;
    _min?: Nullable<AbuseRecordTypeMinAggregateOutputType>;
    count?: Nullable<AbuseRecordTypeCountAggregateOutputType>;
    max?: Nullable<AbuseRecordTypeMaxAggregateOutputType>;
    min?: Nullable<AbuseRecordTypeMinAggregateOutputType>;
}

export class AggregateAbuseRecordTypeResponse {
    data?: Nullable<AggregateAbuseRecordType>;
    message: string;
    status: boolean;
}

export class AggregateAbuseReport {
    _avg?: Nullable<AbuseReportAvgAggregateOutputType>;
    _count?: Nullable<AbuseReportCountAggregateOutputType>;
    _max?: Nullable<AbuseReportMaxAggregateOutputType>;
    _min?: Nullable<AbuseReportMinAggregateOutputType>;
    _sum?: Nullable<AbuseReportSumAggregateOutputType>;
    avg?: Nullable<AbuseReportAvgAggregateOutputType>;
    count?: Nullable<AbuseReportCountAggregateOutputType>;
    max?: Nullable<AbuseReportMaxAggregateOutputType>;
    min?: Nullable<AbuseReportMinAggregateOutputType>;
    sum?: Nullable<AbuseReportSumAggregateOutputType>;
}

export class AggregateAbuseReportResponse {
    data?: Nullable<AggregateAbuseReport>;
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

export class AggregateBusiness {
    _count?: Nullable<BusinessCountAggregateOutputType>;
    _max?: Nullable<BusinessMaxAggregateOutputType>;
    _min?: Nullable<BusinessMinAggregateOutputType>;
    count?: Nullable<BusinessCountAggregateOutputType>;
    max?: Nullable<BusinessMaxAggregateOutputType>;
    min?: Nullable<BusinessMinAggregateOutputType>;
}

export class AggregateBusinessResponse {
    data?: Nullable<AggregateBusiness>;
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

export class AggregateCategory {
    _count?: Nullable<CategoryCountAggregateOutputType>;
    _max?: Nullable<CategoryMaxAggregateOutputType>;
    _min?: Nullable<CategoryMinAggregateOutputType>;
    count?: Nullable<CategoryCountAggregateOutputType>;
    max?: Nullable<CategoryMaxAggregateOutputType>;
    min?: Nullable<CategoryMinAggregateOutputType>;
}

export class AggregateCategoryResponse {
    data?: Nullable<AggregateCategory>;
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

export class AggregateFavorite {
    _count?: Nullable<FavoriteCountAggregateOutputType>;
    _max?: Nullable<FavoriteMaxAggregateOutputType>;
    _min?: Nullable<FavoriteMinAggregateOutputType>;
    count?: Nullable<FavoriteCountAggregateOutputType>;
    max?: Nullable<FavoriteMaxAggregateOutputType>;
    min?: Nullable<FavoriteMinAggregateOutputType>;
}

export class AggregateFavoriteRecordType {
    _count?: Nullable<FavoriteRecordTypeCountAggregateOutputType>;
    _max?: Nullable<FavoriteRecordTypeMaxAggregateOutputType>;
    _min?: Nullable<FavoriteRecordTypeMinAggregateOutputType>;
    count?: Nullable<FavoriteRecordTypeCountAggregateOutputType>;
    max?: Nullable<FavoriteRecordTypeMaxAggregateOutputType>;
    min?: Nullable<FavoriteRecordTypeMinAggregateOutputType>;
}

export class AggregateFavoriteRecordTypeResponse {
    data?: Nullable<AggregateFavoriteRecordType>;
    message: string;
    status: boolean;
}

export class AggregateFavoriteResponse {
    data?: Nullable<AggregateFavorite>;
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
    Category: Category[];
    attachmentType: AttachmentType;
    business?: Nullable<Business>;
    businessId?: Nullable<string>;
    businesses: Business[];
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
    recordStatus: RecordStatus;
    reviewId?: Nullable<string>;
    reviews?: Nullable<Review>;
    services: Service[];
    size: number;
    updatedAt: DateTime;
    userId?: Nullable<string>;
    users: User[];
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
    businessId: number;
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
    recordStatus: number;
    reviewId: number;
    size: number;
    updatedAt: number;
    userId: number;
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
    businessId?: Nullable<string>;
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
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class AttachmentMinAggregateOutputType {
    attachmentType?: Nullable<AttachmentType>;
    businessId?: Nullable<string>;
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
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
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

export class Business {
    about: string;
    abuseReports: AbuseReport[];
    attachments: Attachment[];
    businessName: string;
    cover?: Nullable<Attachment>;
    coverId?: Nullable<string>;
    createdAt: DateTime;
    favorite: Favorite[];
    id: string;
    location?: Nullable<Location>;
    locationId?: Nullable<string>;
    mode: BusinessMode;
    orders: Order[];
    owner: User;
    ownerId: string;
    recordStatus: RecordStatus;
    services: Service[];
    state: BusinessStatus;
    updatedAt: DateTime;
}

export class BusinessBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class BusinessCountAggregateOutputType {
    _all: number;
    about: number;
    businessName: number;
    coverId: number;
    createdAt: number;
    id: number;
    locationId: number;
    mode: number;
    ownerId: number;
    recordStatus: number;
    state: number;
    updatedAt: number;
}

export class BusinessCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class BusinessListResponse {
    data?: Nullable<Business[]>;
    message: string;
    status: boolean;
}

export class BusinessMaxAggregateOutputType {
    about?: Nullable<string>;
    businessName?: Nullable<string>;
    coverId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    mode?: Nullable<BusinessMode>;
    ownerId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    state?: Nullable<BusinessStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessMinAggregateOutputType {
    about?: Nullable<string>;
    businessName?: Nullable<string>;
    coverId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    mode?: Nullable<BusinessMode>;
    ownerId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    state?: Nullable<BusinessStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class BusinessResponse {
    data?: Nullable<Business>;
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

export class Category {
    createdAt: DateTime;
    description?: Nullable<string>;
    id: string;
    name: string;
    picture?: Nullable<Attachment>;
    pictureId?: Nullable<string>;
    services: Service[];
    updatedAt: DateTime;
}

export class CategoryBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class CategoryCountAggregateOutputType {
    _all: number;
    createdAt: number;
    description: number;
    id: number;
    name: number;
    pictureId: number;
    updatedAt: number;
}

export class CategoryCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class CategoryListResponse {
    data?: Nullable<Category[]>;
    message: string;
    status: boolean;
}

export class CategoryMaxAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name?: Nullable<string>;
    pictureId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class CategoryMinAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name?: Nullable<string>;
    pictureId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class CategoryResponse {
    data?: Nullable<Category>;
    message: string;
    status: boolean;
}

export class Comment {
    abuseReports: AbuseReport[];
    attachments: Attachment[];
    author: User;
    authorId: string;
    comment?: Nullable<Comment>;
    commentId?: Nullable<string>;
    comments: Comment[];
    commentsEnabled: boolean;
    content: string;
    createdAt: DateTime;
    favorites: Favorite[];
    id: string;
    recordStatus: RecordStatus;
    review?: Nullable<Review>;
    reviewId: string;
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
    recordStatus: number;
    reviewId: number;
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
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class CommentMinAggregateOutputType {
    authorId?: Nullable<string>;
    commentId?: Nullable<string>;
    commentsEnabled?: Nullable<boolean>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
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
    recordStatus: RecordStatus;
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
    recordStatus: number;
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
    recordStatus?: Nullable<RecordStatus>;
    type?: Nullable<string>;
    userId?: Nullable<string>;
}

export class DeviceMinAggregateOutputType {
    fcm_id?: Nullable<string>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    type?: Nullable<string>;
    userId?: Nullable<string>;
}

export class DeviceResponse {
    data?: Nullable<Device>;
    message: string;
    status: boolean;
}

export class DirectionsResponseData {
    available_travel_modes?: Nullable<Nullable<string>[]>;
    geocoded_waypoints?: Nullable<Nullable<GeocodedWaypoint>[]>;
    routes?: Nullable<Nullable<DirectionsRoute>[]>;
}

export class DirectionsRoute {
    bounds?: Nullable<LatLngBounds>;
    copyrights?: Nullable<string>;
    fare?: Nullable<TransitFare>;
    legs?: Nullable<Nullable<RouteLeg>[]>;
    overview_path?: Nullable<Nullable<LatLng>[]>;
    overview_polyline?: Nullable<Polyline>;
    summary?: Nullable<string>;
    warnings?: Nullable<Nullable<string>[]>;
    waypoint_order?: Nullable<Nullable<number>[]>;
}

export class DirectionsStep {
    distance?: Nullable<MapDistance>;
    duration?: Nullable<MapDuration>;
    end_location?: Nullable<LatLng>;
    html_instructions?: Nullable<string>;
    maneuver?: Nullable<string>;
    polyline?: Nullable<Polyline>;
    start_location?: Nullable<LatLng>;
    steps?: Nullable<DirectionsStep>;
    transit_details?: Nullable<TransitDetails>;
}

export class Favorite {
    Business?: Nullable<Business>;
    author: User;
    authorId: string;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    comments?: Nullable<Comment>;
    createdAt: DateTime;
    id: string;
    orderId?: Nullable<string>;
    orders?: Nullable<Order>;
    recordStatus: RecordStatus;
    reviewId?: Nullable<string>;
    reviews?: Nullable<Review>;
    service?: Nullable<Service>;
    serviceId?: Nullable<string>;
    type: FavoriteRecordType;
    typeId: string;
    updatedAt: DateTime;
    userId?: Nullable<string>;
    users?: Nullable<User>;
}

export class FavoriteBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class FavoriteCountAggregateOutputType {
    _all: number;
    authorId: number;
    businessId: number;
    commentId: number;
    createdAt: number;
    id: number;
    orderId: number;
    recordStatus: number;
    reviewId: number;
    serviceId: number;
    typeId: number;
    updatedAt: number;
    userId: number;
}

export class FavoriteCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class FavoriteListResponse {
    data?: Nullable<Favorite[]>;
    message: string;
    status: boolean;
}

export class FavoriteMaxAggregateOutputType {
    authorId?: Nullable<string>;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    typeId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class FavoriteMinAggregateOutputType {
    authorId?: Nullable<string>;
    businessId?: Nullable<string>;
    commentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    orderId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reviewId?: Nullable<string>;
    serviceId?: Nullable<string>;
    typeId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class FavoriteRecordType {
    favorites: Favorite[];
    id: string;
    name: string;
}

export class FavoriteRecordTypeBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class FavoriteRecordTypeCountAggregateOutputType {
    _all: number;
    id: number;
    name: number;
}

export class FavoriteRecordTypeCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class FavoriteRecordTypeListResponse {
    data?: Nullable<FavoriteRecordType[]>;
    message: string;
    status: boolean;
}

export class FavoriteRecordTypeMaxAggregateOutputType {
    id?: Nullable<string>;
    name?: Nullable<string>;
}

export class FavoriteRecordTypeMinAggregateOutputType {
    id?: Nullable<string>;
    name?: Nullable<string>;
}

export class FavoriteRecordTypeResponse {
    data?: Nullable<FavoriteRecordType>;
    message: string;
    status: boolean;
}

export class FavoriteResponse {
    data?: Nullable<Favorite>;
    message: string;
    status: boolean;
}

export class GeocodeResponse {
    data?: Nullable<GeocodeResponseData>;
    message: string;
    status: boolean;
}

export class GeocodeResponseData {
    results?: Nullable<Nullable<GeocodeResult>[]>;
}

export class GeocodeResult {
    address_components?: Nullable<Nullable<AddressComponent>[]>;
    formatted_address?: Nullable<string>;
    geometry?: Nullable<AddressGeometry>;
    partial_match?: Nullable<boolean>;
    place_id?: Nullable<string>;
    plus_code?: Nullable<PlusCode>;
    postcode_localities?: Nullable<Nullable<string>[]>;
    types?: Nullable<Nullable<string>[]>;
}

export class GeocodedWaypoint {
    geocoder_status?: Nullable<GeocodedWaypointStatus>;
    partial_match?: Nullable<boolean>;
    place_id?: Nullable<string>;
    types?: Nullable<Nullable<string>[]>;
}

export class Help {
    audience: Role;
    createdAt: DateTime;
    description?: Nullable<string>;
    id: string;
    recordStatus: RecordStatus;
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
    recordStatus: number;
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
    recordStatus?: Nullable<RecordStatus>;
    topic?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class HelpMinAggregateOutputType {
    audience?: Nullable<Role>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
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
    recordStatus: RecordStatus;
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
    recordStatus: number;
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
    recordStatus?: Nullable<RecordStatus>;
    stepNumber?: Nullable<number>;
    title?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class HelpStepMinAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    helpId?: Nullable<string>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
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

export class LatLng {
    lat: number;
    lng: number;
}

export class LatLngBounds {
    northeast: LatLng;
    southwest: LatLng;
}

export class Location {
    businesses: Business[];
    createdAt: DateTime;
    id: string;
    lat: number;
    lon: number;
    name: string;
    recordStatus: RecordStatus;
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
    recordStatus: number;
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
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class LocationMinAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lat?: Nullable<number>;
    lon?: Nullable<number>;
    name?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
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

export class MapDistance {
    text?: Nullable<string>;
    value?: Nullable<number>;
}

export class MapDuration {
    text?: Nullable<string>;
    value?: Nullable<number>;
}

export class MapTime {
    text?: Nullable<string>;
    time_zone?: Nullable<string>;
    value?: Nullable<DateTime>;
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
    recordStatus: RecordStatus;
    state: PaymentStatus;
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
    recordStatus: number;
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
    recordStatus?: Nullable<RecordStatus>;
    state?: Nullable<PaymentStatus>;
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
    recordStatus?: Nullable<RecordStatus>;
    state?: Nullable<PaymentStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class MpesaPaymentResponse {
    data?: Nullable<MpesaPayment>;
    message: string;
    status: boolean;
}

export abstract class IMutation {
    abstract createOneHelp(data: HelpCreateInput): HelpResponse | Promise<HelpResponse>;

    abstract locationFeed(location: LatLon): LocationResponse | Promise<LocationResponse>;

    abstract paybill(data?: Nullable<PaybillRequest>): PaybillResponse | Promise<PaybillResponse>;

    abstract recoverAccount(email: string): AuthResult | Promise<AuthResult>;

    abstract registerDevice(data: RegisterDeviceInput): DeviceResponse | Promise<DeviceResponse>;

    abstract signin(credentials: AuthInput): AuthResult | Promise<AuthResult>;

    abstract signout(): SignOutResult | Promise<SignOutResult>;

    abstract signup(credentials: SignupInput): AuthResult | Promise<AuthResult>;

    abstract updateOneHelp(data: HelpUpdateInput, where: HelpWhereUniqueInput): HelpResponse | Promise<HelpResponse>;

    abstract updateOneUser(data: UserUpdateInput, where: UserWhereUniqueInput): UserResponse | Promise<UserResponse>;

    abstract version(): Nullable<string> | Promise<Nullable<string>>;
}

export class Notification {
    message?: Nullable<string>;
    notificationType: NotificationType;
    payload?: Nullable<JSONObject>;
}

export class Order {
    Business?: Nullable<Business>;
    abuseReports: AbuseReport[];
    businessId?: Nullable<string>;
    createdAt: DateTime;
    favorites: Favorite[];
    id: string;
    notes?: Nullable<string>;
    orderStatus: OrderStatus;
    owner: User;
    ownerId: string;
    quantity: number;
    receipt?: Nullable<Attachment>;
    receiptId?: Nullable<string>;
    recordStatus: RecordStatus;
    service: Service;
    serviceId: string;
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
    businessId: number;
    createdAt: number;
    id: number;
    notes: number;
    orderStatus: number;
    ownerId: number;
    quantity: number;
    receiptId: number;
    recordStatus: number;
    serviceId: number;
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
    businessId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    orderStatus?: Nullable<OrderStatus>;
    ownerId?: Nullable<string>;
    quantity?: Nullable<number>;
    receiptId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    serviceId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderMinAggregateOutputType {
    businessId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    notes?: Nullable<string>;
    orderStatus?: Nullable<OrderStatus>;
    ownerId?: Nullable<string>;
    quantity?: Nullable<number>;
    receiptId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    serviceId?: Nullable<string>;
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
    recordStatus: RecordStatus;
    state: PaymentMethodStatus;
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
    recordStatus: number;
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
    recordStatus?: Nullable<RecordStatus>;
    state?: Nullable<PaymentMethodStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class PaymentMethodMinAggregateOutputType {
    attachmentId?: Nullable<string>;
    code?: Nullable<SelcomUtilityCode>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    state?: Nullable<PaymentMethodStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class PaymentMethodResponse {
    data?: Nullable<PaymentMethod>;
    message: string;
    status: boolean;
}

export class PlaceAutocompleteResponse {
    data?: Nullable<PlaceAutocompleteResponseData>;
    message: string;
    status: boolean;
}

export class PlaceAutocompleteResponseData {
    predictions?: Nullable<Nullable<PlaceAutocompleteResult>[]>;
}

export class PlaceAutocompleteResult {
    description?: Nullable<string>;
    distance_meters?: Nullable<number>;
    matched_substrings?: Nullable<Nullable<PredictionSubstring>[]>;
    place_id?: Nullable<string>;
    structured_formatting?: Nullable<StructuredFormatting>;
    terms?: Nullable<Nullable<PredictionTerm>[]>;
    types?: Nullable<Nullable<string>[]>;
}

export class PlusCode {
    compound__code?: Nullable<string>;
    global_code?: Nullable<string>;
}

export class Polyline {
    points?: Nullable<string>;
}

export class PredictionSubstring {
    offset?: Nullable<number>;
    value?: Nullable<string>;
}

export class PredictionTerm {
    offset?: Nullable<number>;
    value?: Nullable<string>;
}

export abstract class IQuery {
    abstract findManyBusiness(cursor?: Nullable<BusinessWhereUniqueInput>, distinct?: Nullable<BusinessScalarFieldEnum[]>, orderBy?: Nullable<BusinessOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<BusinessWhereInput>): BusinessListResponse | Promise<BusinessListResponse>;

    abstract findManyCategory(cursor?: Nullable<CategoryWhereUniqueInput>, distinct?: Nullable<CategoryScalarFieldEnum[]>, orderBy?: Nullable<CategoryOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<CategoryWhereInput>): CategoryListResponse | Promise<CategoryListResponse>;

    abstract findManyComment(cursor?: Nullable<CommentWhereUniqueInput>, distinct?: Nullable<CommentScalarFieldEnum[]>, orderBy?: Nullable<CommentOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<CommentWhereInput>): CommentListResponse | Promise<CommentListResponse>;

    abstract findManyHelp(cursor?: Nullable<HelpWhereUniqueInput>, distinct?: Nullable<HelpScalarFieldEnum[]>, orderBy?: Nullable<HelpOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<HelpWhereInput>): HelpListResponse | Promise<HelpListResponse>;

    abstract findManyPaymentMethod(cursor?: Nullable<PaymentMethodWhereUniqueInput>, distinct?: Nullable<PaymentMethodScalarFieldEnum[]>, orderBy?: Nullable<PaymentMethodOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<PaymentMethodWhereInput>): PaymentMethodListResponse | Promise<PaymentMethodListResponse>;

    abstract findManyReview(cursor?: Nullable<ReviewWhereUniqueInput>, distinct?: Nullable<ReviewScalarFieldEnum[]>, orderBy?: Nullable<ReviewOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<ReviewWhereInput>): ReviewListResponse | Promise<ReviewListResponse>;

    abstract findManyUser(cursor?: Nullable<UserWhereUniqueInput>, distinct?: Nullable<UserScalarFieldEnum[]>, orderBy?: Nullable<UserOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<UserWhereInput>): UserListResponse | Promise<UserListResponse>;

    abstract findUniqueHelp(where: HelpWhereUniqueInput): HelpResponse | Promise<HelpResponse>;

    abstract findUniqueUser(where: UserWhereUniqueInput): UserResponse | Promise<UserResponse>;

    abstract geocode(data: GeocodeInput): GeocodeResponse | Promise<GeocodeResponse>;

    abstract placesAutocomplete(data?: Nullable<PlaceAutocompleteInput>): PlaceAutocompleteResponse | Promise<PlaceAutocompleteResponse>;

    abstract reverseGeocode(data: ReverseGeocodeInput): ReverseGeocodeResponse | Promise<ReverseGeocodeResponse>;

    abstract route(data: RouteQueryInput): RouteResponse | Promise<RouteResponse>;

    abstract version(): Nullable<string> | Promise<Nullable<string>>;
}

export class ReverseGeocodeResponse {
    data?: Nullable<ReverseGeocodeResponseData>;
    message: string;
    status: boolean;
}

export class ReverseGeocodeResponseData {
    results?: Nullable<Nullable<GeocodeResult>[]>;
}

export class Review {
    abuseReports: AbuseReport[];
    attachments: Attachment[];
    author: User;
    authorId: string;
    comments: Comment[];
    content?: Nullable<string>;
    createdAt: DateTime;
    favorites: Favorite[];
    id: string;
    recordStatus: RecordStatus;
    reviewee: User;
    revieweeId: string;
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
    recordStatus: number;
    revieweeId: number;
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
    recordStatus?: Nullable<RecordStatus>;
    revieweeId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    value?: Nullable<number>;
}

export class ReviewMinAggregateOutputType {
    authorId?: Nullable<string>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    revieweeId?: Nullable<string>;
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

export class RouteLeg {
    arrival_time?: Nullable<MapTime>;
    departure_time?: Nullable<MapTime>;
    distance?: Nullable<MapDistance>;
    duration?: Nullable<MapDuration>;
    duration_in_traffic?: Nullable<MapDuration>;
    end_address?: Nullable<string>;
    end_location?: Nullable<LatLng>;
    start_address?: Nullable<string>;
    start_location?: Nullable<LatLng>;
    steps?: Nullable<Nullable<DirectionsStep>[]>;
}

export class RouteResponse {
    data?: Nullable<DirectionsResponseData>;
    message: string;
    status: boolean;
}

export class SelcomDisbursement {
    amount: number;
    createdAt: DateTime;
    id: string;
    recordStatus: RecordStatus;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state: PaymentStatus;
    status: PaymentStatus;
    transId: string;
    transaction?: Nullable<Transaction>;
    updatedAt: DateTime;
    userId: number;
    utilitycode: SelcomUtilityCode;
    utilityref: string;
    validation: PaymentStatus;
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
    recordStatus: number;
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
    recordStatus?: Nullable<RecordStatus>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<PaymentStatus>;
    status?: Nullable<PaymentStatus>;
    transId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<number>;
    utilitycode?: Nullable<SelcomUtilityCode>;
    utilityref?: Nullable<string>;
    validation?: Nullable<PaymentStatus>;
}

export class SelcomDisbursementMinAggregateOutputType {
    amount?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<PaymentStatus>;
    status?: Nullable<PaymentStatus>;
    transId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<number>;
    utilitycode?: Nullable<SelcomUtilityCode>;
    utilityref?: Nullable<string>;
    validation?: Nullable<PaymentStatus>;
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
    recordStatus: RecordStatus;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state: PaymentStatus;
    status: PaymentStatus;
    transId: string;
    transaction?: Nullable<Transaction>;
    updatedAt: DateTime;
    utilityref: number;
    validation: PaymentStatus;
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
    recordStatus: number;
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
    recordStatus?: Nullable<RecordStatus>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<PaymentStatus>;
    status?: Nullable<PaymentStatus>;
    transId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    utilityref?: Nullable<number>;
    validation?: Nullable<PaymentStatus>;
}

export class SelcomPaymentMinAggregateOutputType {
    amount?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    msisdn?: Nullable<string>;
    operator?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<PaymentStatus>;
    status?: Nullable<PaymentStatus>;
    transId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    utilityref?: Nullable<number>;
    validation?: Nullable<PaymentStatus>;
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
    abuseReports: AbuseReport[];
    business: Business;
    businessId: string;
    category?: Nullable<Category>;
    categoryId?: Nullable<string>;
    createdAt: DateTime;
    currency: string;
    description?: Nullable<string>;
    favorites: Favorite[];
    id: string;
    image?: Nullable<Attachment>;
    imageId?: Nullable<string>;
    metadata: string[];
    name: string;
    orders: Order[];
    price: number;
    recordStatus: RecordStatus;
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
    businessId: number;
    categoryId: number;
    createdAt: number;
    currency: number;
    description: number;
    id: number;
    imageId: number;
    metadata: number;
    name: number;
    price: number;
    recordStatus: number;
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
    businessId?: Nullable<string>;
    categoryId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId?: Nullable<string>;
    name?: Nullable<string>;
    price?: Nullable<number>;
    recordStatus?: Nullable<RecordStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceMinAggregateOutputType {
    businessId?: Nullable<string>;
    categoryId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId?: Nullable<string>;
    name?: Nullable<string>;
    price?: Nullable<number>;
    recordStatus?: Nullable<RecordStatus>;
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

export class StructuredFormatting {
    main_text?: Nullable<string>;
    main_text_matched_substrings?: Nullable<Nullable<PredictionSubstring>[]>;
    secondary_text?: Nullable<string>;
}

export abstract class ISubscription {
    abstract locations(where: UserWhereUniqueInput): LocationResponse | Promise<LocationResponse>;
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
    recordStatus: RecordStatus;
    selcomDisbursement?: Nullable<SelcomDisbursement>;
    selcomDisbursementId?: Nullable<string>;
    selcomPayment?: Nullable<SelcomPayment>;
    selcomPaymentId?: Nullable<string>;
    state: TransactionStatus;
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
    recordStatus: number;
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
    recordStatus?: Nullable<RecordStatus>;
    selcomDisbursementId?: Nullable<string>;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<TransactionStatus>;
    type?: Nullable<TransactionType>;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionMinAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPaymentId?: Nullable<string>;
    orderId?: Nullable<string>;
    paymentMethodId?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    selcomDisbursementId?: Nullable<string>;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<TransactionStatus>;
    type?: Nullable<TransactionType>;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionResponse {
    data?: Nullable<Transaction>;
    message: string;
    status: boolean;
}

export class TransitAgency {
    name?: Nullable<string>;
    phone?: Nullable<string>;
    url?: Nullable<string>;
}

export class TransitDetails {
    arrival_stop?: Nullable<TransitStop>;
    arrival_time?: Nullable<MapTime>;
    departure_stop?: Nullable<TransitStop>;
    departure_time?: Nullable<MapTime>;
    headsign?: Nullable<string>;
    headway?: Nullable<number>;
    line?: Nullable<TransitLine>;
    num_stops?: Nullable<number>;
}

export class TransitFare {
    currency?: Nullable<string>;
    text?: Nullable<string>;
    value?: Nullable<number>;
}

export class TransitLine {
    agencies?: Nullable<Nullable<TransitAgency>[]>;
    color?: Nullable<string>;
    icon?: Nullable<string>;
    name?: Nullable<string>;
    short_name?: Nullable<string>;
    text_color?: Nullable<string>;
    url?: Nullable<string>;
    vehicle?: Nullable<TransitVehicle>;
}

export class TransitStop {
    location?: Nullable<LatLng>;
    name?: Nullable<string>;
}

export class TransitVehicle {
    icon?: Nullable<string>;
    local_icon?: Nullable<string>;
    name?: Nullable<string>;
    type?: Nullable<VehicleType>;
}

export class User {
    abuseReported: AbuseReport[];
    abuseReports: AbuseReport[];
    avator?: Nullable<Attachment>;
    avatorId?: Nullable<string>;
    businessProfile?: Nullable<Business>;
    comments: Comment[];
    createdAt: DateTime;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<Device>;
    disabled: boolean;
    displayName: string;
    email: string;
    emailVerified: boolean;
    favorited: Favorite[];
    favorites: Favorite[];
    gender: Gender;
    id: string;
    lastSeen?: Nullable<DateTime>;
    location?: Nullable<Location>;
    locationId?: Nullable<string>;
    ordered: Order[];
    phoneNumber?: Nullable<string>;
    recordStatus: RecordStatus;
    reviewed: Review[];
    reviews: Review[];
    role: Role;
    state: AccountStatus;
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
    dateOfBirth: number;
    disabled: number;
    displayName: number;
    email: number;
    emailVerified: number;
    gender: number;
    id: number;
    locationId: number;
    phoneNumber: number;
    recordStatus: number;
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
    dateOfBirth?: Nullable<DateTime>;
    disabled?: Nullable<boolean>;
    displayName?: Nullable<string>;
    email?: Nullable<string>;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class UserMinAggregateOutputType {
    avatorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    disabled?: Nullable<boolean>;
    displayName?: Nullable<string>;
    email?: Nullable<string>;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    phoneNumber?: Nullable<string>;
    recordStatus?: Nullable<RecordStatus>;
    role?: Nullable<Role>;
    state?: Nullable<AccountStatus>;
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
