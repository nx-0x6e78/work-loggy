/*
  Warnings:

  - Added the required column `hourlyEarning` to the `settings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `settings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "settings" ADD COLUMN     "hourRounding" INTEGER,
ADD COLUMN     "hourlyEarning" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "launchBreak" INTEGER,
ADD COLUMN     "startTime" INTEGER NOT NULL;
