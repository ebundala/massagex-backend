/*
  Warnings:

  - You are about to drop the column `forumId` on the `Tag` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_forumId_fkey";

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "forumId";

-- CreateTable
CREATE TABLE "_ForumToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ForumToTag_AB_unique" ON "_ForumToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ForumToTag_B_index" ON "_ForumToTag"("B");

-- AddForeignKey
ALTER TABLE "_ForumToTag" ADD FOREIGN KEY ("A") REFERENCES "Forum"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ForumToTag" ADD FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
