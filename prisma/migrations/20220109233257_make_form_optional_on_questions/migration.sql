-- AlterTable
ALTER TABLE "Grade" ALTER COLUMN "minValue" DROP NOT NULL,
ALTER COLUMN "maxValue" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Question" ALTER COLUMN "formId" DROP NOT NULL;