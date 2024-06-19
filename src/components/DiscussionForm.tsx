"use client";

import { useState } from "react";
import UserIdFetcher from "./UserIdFetcher";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function DiscussionForm() {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");

  const handleSubmit = async (userId: string) => {
    const res = await fetch("/api/discussions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, question, userId }),
    });
    if (res.ok) {
      setTitle("");
      setQuestion("");
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
          <h2>Create a New Discussion</h2>
          <div>
            <label>Title:</label>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Question:</label>
            <Textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      )}
    </UserIdFetcher>
  );
}
