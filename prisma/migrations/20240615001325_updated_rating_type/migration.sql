/*
  Warnings:

  - Changed the type of `rating` on the `Feedback` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "rating",
ADD COLUMN     "rating" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Feedback_email_rating_comment_suggestions_key" ON "Feedback"("email", "rating", "comment", "suggestions");
