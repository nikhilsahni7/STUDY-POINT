/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "Branch" TEXT,
ADD COLUMN     "collegeName" TEXT,
ADD COLUMN     "course" TEXT,
ADD COLUMN     "currentSemester" INTEGER,
ADD COLUMN     "username" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
