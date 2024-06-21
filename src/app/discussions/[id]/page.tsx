import { getDiscussionById } from "@/lib/api";
import ReplyList from "@/components/ReplyList";
import ReplyForm from "@/components/ReplyForm";
import UserIdFetcher from "@/components/UserIdFetcher";

export const revalidate = 0; // This will force Next.js to fetch fresh data on every request

export default async function DiscussionPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const discussion = await getDiscussionById(params.id);

    if (!discussion || !discussion.id) {
      return <div>Discussion not found</div>;
    }

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{discussion.title}</h1>
        <p className="text-lg mb-6">{discussion.question}</p>
        <ReplyList discussionId={discussion.id} />
        <UserIdFetcher>
          {(userId) => (
            <ReplyForm discussionId={discussion.id} userId={userId} />
          )}
        </UserIdFetcher>
      </div>
    );
  } catch (error) {
    console.error("Error fetching discussion:", error);
    return <div>Error loading discussion. Please try again later.</div>;
  }
}
