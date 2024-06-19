import React from "react";
import { redirect } from "next/navigation";
import { auth } from "../../../auth";
import SubjectsSyllabusPage from "@/components/SubjectsSyllabus";

const syllabus = async () => {
  const session = await auth();

  if (!session?.user && !session) {
    redirect("/");
  }

  return (
    <div>
      <SubjectsSyllabusPage />
    </div>
  );
};

export default syllabus;
