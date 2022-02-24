/*
  Warnings:

  - You are about to alter the column `minValue` on the `Grade` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `maxValue` on the `Grade` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to drop the column `formId` on the `Question` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_formId_fkey";

-- AlterTable
ALTER TABLE "Grade" ALTER COLUMN "formId" DROP NOT NULL,
ALTER COLUMN "minValue" SET DATA TYPE INTEGER,
ALTER COLUMN "maxValue" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "formId";

-- AlterTable
ALTER TABLE "Recommendation" ALTER COLUMN "gradeId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Response" ALTER COLUMN "authorId" DROP NOT NULL,
ALTER COLUMN "formId" DROP NOT NULL;
