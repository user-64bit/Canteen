/*
  Warnings:

  - The `type` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Type" AS ENUM ('PUBLIC', 'PRIVATE');

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "type",
ADD COLUMN     "type" "Type";
