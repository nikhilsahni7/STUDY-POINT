"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function DiscussionList() {
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    async function fetchDiscussions() {
      const res = await fetch("/api/discussions");
      const data = await res.json();
      setDiscussions(data);
    }
    fetchDiscussions();
  }, []);

  return (
    <div>
      <h1>Discussions</h1>
      <ul>
        {discussions.map((discussion: any) => (
          <li key={discussion.id}>
            <Link href={`/discussion/${discussion.id}`}>
              {discussion.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
