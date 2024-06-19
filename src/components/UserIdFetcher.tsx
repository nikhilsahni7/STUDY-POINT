// app/components/UserIdFetcher.tsx
import { auth } from "../../auth";

export default async function UserIdFetcher({
  children,
}: {
  children: (userId: string) => React.ReactNode;
}) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return <div>Please log in to submit the form.</div>;
  }

  return <>{children(userId)}</>;
}
