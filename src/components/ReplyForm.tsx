"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { createReply } from "@/lib/api";
import { useToast } from "./ui/use-toast";

export default function ReplyForm({
  discussionId,
  userId,
}: {
  discussionId: string;
  userId: string;
}) {
  const [answer, setAnswer] = useState("");
  const { toast } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createReply({ answer, discussionId, userId });
      toast({
        title: "Reply posted",
        description: "Your reply has been posted",
      });
      setAnswer("");

      // Force a re-render of the ReplyList component
      window.dispatchEvent(new CustomEvent("replyAdded"));
    } catch (error) {
      console.error("Failed to create reply:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <Textarea
        placeholder="Your reply"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        required
      />
      <Button type="submit" className="mt-2">
        Post Reply
      </Button>
    </form>
  );
}
