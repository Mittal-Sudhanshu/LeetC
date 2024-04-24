/*
  Warnings:

  - Added the required column `type` to the `TestCase` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TestCaseType" AS ENUM ('Example', 'Hidden');

-- AlterTable
ALTER TABLE "TestCase" ADD COLUMN     "type" "TestCaseType" NOT NULL;
