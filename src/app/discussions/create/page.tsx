import DiscussionForm from "@/components/DiscussionForm";
import UserIdFetcher from "@/components/UserIdFetcher";

export default function CreateDiscussionPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Create New Discussion</h1>
      <UserIdFetcher>
        {(userId) => <DiscussionForm userId={userId} />}
      </UserIdFetcher>
    </div>
  );
}
