import { useEffect, useState } from "react";

export default function ReplyList({ discussionId }: { discussionId: string }) {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    async function fetchReplies() {
      const res = await fetch(`/api/replies?discussionId=${discussionId}`);
      const data = await res.json();
      setReplies(data);
    }
    fetchReplies();
  }, [discussionId]);

  return (
    <div>
      <h3>Replies</h3>
      <ul>
        {replies.map((reply: any) => (
          <li key={reply.id}>
            <p>{reply.answer}</p>
            <p>By User: {reply.userId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
