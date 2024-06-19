import SubjectsPage from "@/components/Subjects";
import React from "react";
import { redirect } from "next/navigation";
import { auth } from "../../../auth";

const notes = async () => {
  const session = await auth();

  if (!session?.user && !session) {
    redirect("/");
  }

  return (
    <div>
      <SubjectsPage />
    </div>
  );
};

export default notes;
