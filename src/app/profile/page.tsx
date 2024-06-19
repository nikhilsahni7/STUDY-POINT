import { UpdateProfile } from "@/components/UpdateProfile";
import React from "react";
import UserIdFetcher from "../../components/UserIdFetcher";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import { Skeletons } from "@/components/Skeletons";

const page = async () => {
  const session = await auth();

  if (!session?.user && !session) {
    redirect("/");
  }

  return (
    <div>
      <UserIdFetcher>
        {(userId) => <UpdateProfile userId={userId} />}
      </UserIdFetcher>
    </div>
  );
};

export default page;
