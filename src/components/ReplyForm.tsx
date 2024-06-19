import { useState } from "react";
import UserIdFetcher from "./UserIdFetcher";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

interface ReplyFormProps {
  discussionId: string;
}

export default function ReplyForm({
  discussionId: discussionId,
}: ReplyFormProps) {
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (userId: string) => {
    const res = await fetch("/api/replies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answer, userId, discussionId }),
    });
    if (res.ok) {
      setAnswer("");
    }
  };

  return (
    <UserIdFetcher>
      {(userId) => (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(userId);
          }}
        >
          <h2>Post a Reply</h2>
          <div>
            <label>Answer:</label>
            <Textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      )}
    </UserIdFetcher>
  );
}
