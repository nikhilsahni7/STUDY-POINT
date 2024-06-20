import LoginForm from "../components/LoginForm";

import { auth } from "../../auth";

import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (session?.user && session) {
    redirect("/home");
  }

  return (
    <div>
      <LoginForm />
    </div>
  );
}
