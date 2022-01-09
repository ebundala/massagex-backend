-- CreateEnum
CREATE TYPE "RecommendationType" AS ENUM ('ORGANIC', 'INORGANIC');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('PAYMENT', 'DISBURSEMENT');

-- CreateEnum
CREATE TYPE "SelcomUtilityCode" AS ENUM ('VMCASHIN', 'AMCASHIN', 'TPCASHIN', 'EZCASHIN', 'SPCASHIN', 'HPCASHIN', 'TTCASHIN');

-- CreateEnum
CREATE TYPE "SelcomPaymentStatus" AS ENUM ('PENDING', 'SUCCESS', 'FAILED');

-- AlterTable
ALTER TABLE "Recommendation" ADD COLUMN     "type" "RecommendationType" NOT NULL DEFAULT E'INORGANIC';

-- CreateTable
CREATE TABLE "Device" (
    "device_id" TEXT NOT NULL,
    "fcm_id" TEXT,
    "type" TEXT NOT NULL DEFAULT E'ANDROID',
    "userId" TEXT,

    PRIMARY KEY ("device_id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "state" "State" NOT NULL DEFAULT E'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "imageId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "state" "State" NOT NULL DEFAULT E'PENDING',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "serviceId" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "receiptId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentMethod" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "attachmentId" TEXT NOT NULL,
    "code" "SelcomUtilityCode" NOT NULL,
    "state" "State" NOT NULL DEFAULT E'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "paymentMethodId" TEXT NOT NULL,
    "type" "TransactionType" NOT NULL,
    "userId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "mpesaPaymentId" TEXT,
    "selcomPaymentId" TEXT,
    "selcomDisbursementId" TEXT,
    "state" "State" NOT NULL DEFAULT E'PENDING',
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
    "state" "State" NOT NULL DEFAULT E'PENDING',
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
    "status" "SelcomPaymentStatus" NOT NULL DEFAULT E'PENDING',
    "transId" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "utilitycode" "SelcomUtilityCode" NOT NULL,
    "utilityref" TEXT NOT NULL,
    "validation" "SelcomPaymentStatus" NOT NULL DEFAULT E'PENDING',
    "state" "State" NOT NULL DEFAULT E'PENDING',
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
    "status" "SelcomPaymentStatus" NOT NULL DEFAULT E'PENDING',
    "utilityref" INTEGER NOT NULL,
    "validation" "SelcomPaymentStatus" NOT NULL DEFAULT E'PENDING',
    "state" "State" NOT NULL DEFAULT E'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Device_userId_unique" ON "Device"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_mpesaPaymentId_unique" ON "Transaction"("mpesaPaymentId");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_selcomPaymentId_unique" ON "Transaction"("selcomPaymentId");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_selcomDisbursementId_unique" ON "Transaction"("selcomDisbursementId");

-- AddForeignKey
ALTER TABLE "Device" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD FOREIGN KEY ("imageId") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD FOREIGN KEY ("receiptId") REFERENCES "Attachment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentMethod" ADD FOREIGN KEY ("attachmentId") REFERENCES "Attachment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD FOREIGN KEY ("paymentMethodId") REFERENCES "PaymentMethod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD FOREIGN KEY ("mpesaPaymentId") REFERENCES "MpesaPayment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD FOREIGN KEY ("selcomPaymentId") REFERENCES "SelcomPayment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD FOREIGN KEY ("selcomDisbursementId") REFERENCES "SelcomDisbursement"("id") ON DELETE SET NULL ON UPDATE CASCADE;
