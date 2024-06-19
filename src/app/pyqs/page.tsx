import React from "react";
import { redirect } from "next/navigation";
import { auth } from "../../../auth";
import SubjectsPyqsPage from "@/components/SubjectsPyqs";

const pyqs = async () => {
  const session = await auth();

  if (!session?.user && !session) {
    redirect("/");
  }

  return (
    <div>
      <SubjectsPyqsPage />
    </div>
  );
};

export default pyqs;
