import { Button } from "@/components/ui/button";
import DiscussionCard from "@/components/DiscussionCard";
import Link from "next/link";
import { getDiscussions } from "@/lib/api";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

export const revalidate = 0; // This will force Next.js to fetch fresh data on every request

export default async function DiscussionsPage() {
  const session = await auth();
  if (!session?.user && !session) {
    redirect("/");
  }
  const discussions = await getDiscussions();
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Discussions</h1>
        <Link href="/discussions/create">
          <Button>Create Discussion</Button>
        </Link>
      </div>
      <div className="space-y-4">
        {discussions.map((discussion: any) => (
          <DiscussionCard key={discussion.id} discussion={discussion} />
        ))}
      </div>
    </div>
  );
}
