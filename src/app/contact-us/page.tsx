// app/page.tsx
import UserIdFetcher from "../../components/UserIdFetcher";
import ContactForm from "../../components/ContactUsForm";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (!session?.user && !session) {
    redirect("/");
  }
  return (
    <UserIdFetcher>{(userId) => <ContactForm userId={userId} />}</UserIdFetcher>
  );
}
