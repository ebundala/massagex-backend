/*
  Warnings:

  - You are about to drop the column `formCategoryId` on the `Form` table. All the data in the column will be lost.
  - You are about to drop the `FormCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ForumType" AS ENUM ('NORMAL', 'FAQ');

-- DropForeignKey
ALTER TABLE "Form" DROP CONSTRAINT "Form_formCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "FormCategory" DROP CONSTRAINT "FormCategory_attachmentId_fkey";

-- AlterTable
ALTER TABLE "Form" DROP COLUMN "formCategoryId",
ADD COLUMN     "tagId" TEXT;

-- AlterTable
ALTER TABLE "Forum" ADD COLUMN     "type" "ForumType" NOT NULL DEFAULT E'NORMAL';

-- DropTable
DROP TABLE "FormCategory";

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "state" "State" NOT NULL DEFAULT E'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "attachmentId" TEXT,
    "forumId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FormToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FormToTag_AB_unique" ON "_FormToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_FormToTag_B_index" ON "_FormToTag"("B");

-- AddForeignKey
ALTER TABLE "Tag" ADD FOREIGN KEY ("attachmentId") REFERENCES "Attachment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD FOREIGN KEY ("forumId") REFERENCES "Forum"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FormToTag" ADD FOREIGN KEY ("A") REFERENCES "Form"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FormToTag" ADD FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
