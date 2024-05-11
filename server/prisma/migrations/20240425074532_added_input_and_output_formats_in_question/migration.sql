-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "inputFormat" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "outputFormat" TEXT NOT NULL DEFAULT '';
