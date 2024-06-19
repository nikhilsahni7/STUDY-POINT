"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReplyForm from "./ReplyForm";
import ReplyList from "./ReplyList";

type Discussion = {
  id: string;
  title: string;
  question: string;
  createdAt: string;
  user: {
    name: string;
  };
};

export default function DiscussionDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [discussion, setDiscussion] = useState<Discussion | null>(null);

  useEffect(() => {
    async function fetchDiscussion() {
      const res = await fetch(`/api/discussions?id=${id}`);
      const data = await res.json();
      setDiscussion(data);
    }
    if (id) {
      fetchDiscussion();
    }
  }, [id]);

  if (!discussion) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{discussion.title}</h1>
      <p>{discussion.question}</p>
      <ReplyList discussionId={discussion.id} />
      <ReplyForm discussionId={discussion.id} />
    </div>
  );
}
