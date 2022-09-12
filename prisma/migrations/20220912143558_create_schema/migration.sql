-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'UNSPECIFIED');

-- CreateEnum
CREATE TYPE "AccountStatus" AS ENUM ('ENABLED', 'DISABLED', 'DELETED');

-- CreateEnum
CREATE TYPE "RecordStatus" AS ENUM ('DRAFT', 'ACTIVE', 'INACTIVE', 'DELETED');

-- CreateEnum
CREATE TYPE "BusinessMode" AS ENUM ('OFFICE_MODE', 'MOBILE_MODE');

-- CreateEnum
CREATE TYPE "BusinessStatus" AS ENUM ('ONLINE', 'OFFLINE');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'MODERATOR', 'BUSINESS', 'USER');

-- CreateEnum
CREATE TYPE "AttachmentType" AS ENUM ('AUDIO', 'VIDEO', 'DOCUMENT', 'IMAGE');

-- CreateEnum
CREATE TYPE "AbuseReportStatus" AS ENUM ('SUBMITED', 'PROCESSING', 'MITIGATED');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('WAITING', 'ACCEPTED', 'REJECTED', 'PROCESSED');

-- CreateEnum
CREATE TYPE "PaymentMethodStatus" AS ENUM ('ENABLED', 'DISABLED');

-- CreateEnum
CREATE TYPE "TransactionStatus" AS ENUM ('PENDING', 'SUCCESS', 'FAILED');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('PAYMENT', 'DISBURSEMENT');

-- CreateEnum
CREATE TYPE "SelcomUtilityCode" AS ENUM ('VMCASHIN', 'AMCASHIN', 'TPCASHIN', 'EZCASHIN', 'SPCASHIN', 'HPCASHIN', 'TTCASHIN');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'SUCCESS', 'FAILED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "displayName" TEXT,
    "phoneNumber" TEXT,
    "dateOfBirth" TIMESTAMP(3),
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "disabled" BOOLEAN NOT NULL DEFAULT false,
    "avatorId" TEXT,
    "role" "Role" NOT NULL DEFAULT E'USER',
    "recordStatus" "RecordStatus" NOT NULL DEFAULT E'ACTIVE',
    "state" "AccountStatus" NOT NULL DEFAULT E'ENABLED',
    "gender" "Gender" NOT NULL DEFAULT E'UNSPECIFIED',
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "locationId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Business" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "mode" "BusinessMode" NOT NULL DEFAULT E'OFFICE_MODE',
    "coverId" TEXT,
    "about" TEXT NOT NULL,
    "businessName" TEXT NOT NULL,
    "metadata" JSONB,
    "status" "BusinessStatus" NOT NULL DEFAULT E'OFFLINE',
    "recordStatus" "RecordStatus" NOT NULL DEFAULT E'ACTIVE',
    "locationId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Device" (
    "id" TEXT NOT NULL,
    "fcm_id" TEXT,
    "type" TEXT NOT NULL DEFAULT E'ANDROID',
    "userId" TEXT,
    "recordStatus" "RecordStatus" NOT NULL DEFAULT E'ACTIVE',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attachment" (
    "id" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "filename" TEXT,
    "mimetype" TEXT,
    "encoding" TEXT,
    "recordStatus" "RecordStatus" NOT NULL DEFAULT E'ACTIVE',
    "duration" INTEGER NOT NULL DEFAULT 0,
    "size" INTEGER NOT NULL DEFAULT 0,
    "attachmentType" "AttachmentType" NOT NULL DEFAULT E'IMAGE',
    "downloadable" BOOLEAN NOT NULL DEFAULT false,
    "placement" TEXT NOT NULL DEFAULT E'default',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "commentId" TEXT,
    "helpStepId" TEXT,
    "reviewId" TEXT,
    "userId" TEXT,
    "businessId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'unknown',
    "geom" geography,
    "lat" DOUBLE PRECISION NOT NULL,
    "lon" DOUBLE PRECISION NOT NULL,
    "heading" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "recordStatus" "RecordStatus" NOT NULL DEFAULT E'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "revieweeId" TEXT NOT NULL,
    "value" INTEGER NOT NULL DEFAULT 0,
    "content" TEXT,
    "recordStatus" "RecordStatus" NOT NULL DEFAULT E'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "reviewId" TEXT NOT NULL,
    "commentsEnabled" BOOLEAN NOT NULL DEFAULT false,
    "content" TEXT NOT NULL,
    "recordStatus" "RecordStatus" NOT NULL DEFAULT E'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "commentId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AbuseRecordType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FavoriteRecordType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AbuseReport" (
    "id" TEXT NOT NULL,
    "number" SERIAL NOT NULL,
    "report" TEXT,
    "authorId" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,
    "recordStatus" "RecordStatus" NOT NULL DEFAULT E'ACTIVE',
    "state" "AbuseReportStatus" NOT NULL DEFAULT E'SUBMITED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,
    "reviewId" TEXT,
    "commentId" TEXT,
    "businessId" TEXT,
    "serviceId" TEXT,
    "orderId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favorite" (
    "id" TEXT NOT NULL,
    "favId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,
    "recordStatus" "RecordStatus" NOT NULL DEFAULT E'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,
    "reviewId" TEXT,
    "commentId" TEXT,
    "businessId" TEXT,
    "serviceId" TEXT,
    "orderId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "casbin_rule" (
    "id" SERIAL NOT NULL,
    "ptype" TEXT NOT NULL,
    "v0" TEXT,
    "v1" TEXT,
    "v2" TEXT,
    "v3" TEXT,
    "v4" TEXT,
    "v5" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Help" (
    "id" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "description" TEXT,
    "recordStatus" "RecordStatus" NOT NULL DEFAULT E'ACTIVE',
    "audience" "Role" NOT NULL DEFAULT E'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HelpStep" (
    "id" TEXT NOT NULL,
    "stepNumber" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "recordStatus" "RecordStatus" NOT NULL DEFAULT E'ACTIVE',
    "helpId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "pictureId" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "metadata" JSONB,
    "currency" TEXT NOT NULL DEFAULT E'TZS',
    "recordStatus" "RecordStatus" NOT NULL DEFAULT E'ACTIVE',
    "categoryId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "imageId" TEXT,
    "businessId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "recordStatus" "RecordStatus" NOT NULL DEFAULT E'ACTIVE',
    "orderStatus" "OrderStatus" NOT NULL DEFAULT E'WAITING',
    "notes" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ownerId" TEXT NOT NULL,
    "receiptId" TEXT,
    "serviceId" TEXT NOT NULL,
    "businessId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentMethod" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "attachmentId" TEXT NOT NULL,
    "code" "SelcomUtilityCode" NOT NULL,
    "recordStatus" "RecordStatus" NOT NULL DEFAULT E'DRAFT',
    "status" "PaymentMethodStatus" NOT NULL DEFAULT E'ENABLED',
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "paymentMethodId" TEXT NOT NULL,
    "type" "TransactionType" NOT NULL,
    "orderId" TEXT NOT NULL,
    "mpesaPaymentId" TEXT,
    "selcomPaymentId" TEXT,
    "selcomDisbursementId" TEXT,
    "status" "TransactionStatus" NOT NULL DEFAULT E'PENDING',
    "recordStatus" "RecordStatus" NOT NULL DEFAULT E'ACTIVE',
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MpesaPayment" (
    "id" TEXT NOT NULL,
    "input_Amount" TEXT NOT NULL,
    "input_Country" TEXT NOT NULL DEFAULT E'TZN',
    "input_Currency" TEXT NOT NULL DEFAULT E'TZS',
    "input_CustomerMSISDN" TEXT NOT NULL,
    "input_ServiceProviderCode" TEXT NOT NULL,
    "input_ThirdPartyConversationID" TEXT NOT NULL,
    "input_TransactionReference" TEXT NOT NULL,
    "input_PurchasedItemsDesc" TEXT NOT NULL,
    "output_ConversationID" TEXT,
    "output_ResponseCode" TEXT,
    "output_ResponseDesc" TEXT,
    "output_ThirdPartyConversationID" TEXT,
    "output_TransactionID" TEXT,
    "status" "PaymentStatus" NOT NULL DEFAULT E'PENDING',
    "recordStatus" "RecordStatus" NOT NULL DEFAULT E'ACTIVE',
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SelcomDisbursement" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "reference" TEXT,
    "resultCode" TEXT,
    "status" "PaymentStatus" NOT NULL DEFAULT E'PENDING',
    "transId" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "utilitycode" "SelcomUtilityCode" NOT NULL,
    "utilityref" TEXT NOT NULL,
    "validation" "PaymentStatus" NOT NULL DEFAULT E'PENDING',
    "state" "PaymentStatus" NOT NULL DEFAULT E'PENDING',
    "recordStatus" "RecordStatus" NOT NULL DEFAULT E'ACTIVE',
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SelcomPayment" (
    "id" TEXT NOT NULL,
    "transId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "msisdn" TEXT NOT NULL,
    "operator" TEXT,
    "reference" TEXT,
    "resultCode" TEXT,
    "status" "PaymentStatus" NOT NULL DEFAULT E'PENDING',
    "utilityref" INTEGER NOT NULL,
    "validation" "PaymentStatus" NOT NULL DEFAULT E'PENDING',
    "state" "PaymentStatus" NOT NULL DEFAULT E'PENDING',
    "recordStatus" "RecordStatus" NOT NULL DEFAULT E'ACTIVE',
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Business_ownerId_unique" ON "Business"("ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "Device_userId_unique" ON "Device"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "AbuseRecordType.name_unique" ON "AbuseRecordType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FavoriteRecordType.name_unique" ON "FavoriteRecordType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Favorite.favId_unique" ON "Favorite"("favId");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_mpesaPaymentId_unique" ON "Transaction"("mpesaPaymentId");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_selcomPaymentId_unique" ON "Transaction"("selcomPaymentId");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_selcomDisbursementId_unique" ON "Transaction"("selcomDisbursementId");

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY ("avatorId") REFERENCES "Attachment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Business" ADD FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Business" ADD FOREIGN KEY ("coverId") REFERENCES "Attachment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Business" ADD FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attachment" ADD FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attachment" ADD FOREIGN KEY ("helpStepId") REFERENCES "HelpStep"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attachment" ADD FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attachment" ADD FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD FOREIGN KEY ("revieweeId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AbuseReport" ADD FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AbuseReport" ADD FOREIGN KEY ("typeId") REFERENCES "AbuseRecordType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AbuseReport" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AbuseReport" ADD FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AbuseReport" ADD FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AbuseReport" ADD FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AbuseReport" ADD FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AbuseReport" ADD FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD FOREIGN KEY ("typeId") REFERENCES "FavoriteRecordType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HelpStep" ADD FOREIGN KEY ("helpId") REFERENCES "Help"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD FOREIGN KEY ("pictureId") REFERENCES "Attachment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD FOREIGN KEY ("imageId") REFERENCES "Attachment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD FOREIGN KEY ("receiptId") REFERENCES "Attachment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentMethod" ADD FOREIGN KEY ("attachmentId") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD FOREIGN KEY ("paymentMethodId") REFERENCES "PaymentMethod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD FOREIGN KEY ("mpesaPaymentId") REFERENCES "MpesaPayment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD FOREIGN KEY ("selcomPaymentId") REFERENCES "SelcomPayment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD FOREIGN KEY ("selcomDisbursementId") REFERENCES "SelcomDisbursement"("id") ON DELETE SET NULL ON UPDATE CASCADE;
