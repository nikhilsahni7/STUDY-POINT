// app/page.tsx
import UserIdFetcher from "../../components/UserIdFetcher";
import FeedbackForm from "@/components/FeedbackForm";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (!session?.user && !session) {
    redirect("/");
  }
  return (
    <UserIdFetcher>
      {(userId) => <FeedbackForm userId={userId} />}
    </UserIdFetcher>
  );
}
