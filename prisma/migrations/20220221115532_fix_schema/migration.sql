/*
  Warnings:

  - The primary key for the `Device` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `device_id` on the `Device` table. All the data in the column will be lost.
  - Added the required column `id` to the `Device` table without a default value. This is not possible if the table is not empty.
  - Made the column `formId` on table `Response` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gradeId` on table `Response` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Device" DROP CONSTRAINT "Device_pkey",
DROP COLUMN "device_id",
ADD COLUMN     "id" TEXT NOT NULL,
ADD PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Response" ALTER COLUMN "formId" SET NOT NULL,
ALTER COLUMN "gradeId" SET NOT NULL;
