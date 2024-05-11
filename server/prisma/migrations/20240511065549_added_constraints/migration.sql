-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "constraints" TEXT NOT NULL DEFAULT 'n<=10^5';
