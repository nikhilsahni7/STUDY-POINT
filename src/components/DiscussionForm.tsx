"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createDiscussion } from "@/lib/api";

import { useToast } from "./ui/use-toast";

export default function DiscussionForm({ userId }: { userId: string }) {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const router = useRouter();

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newDiscussion = await createDiscussion({ title, question, userId });
      toast({
        title: "Discussion Created",
        description: "Your discussion has been created successfully.",
      });
      router.push(`/discussions/${newDiscussion.id}`);
    } catch (error) {
      console.error("Failed to create discussion:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Textarea
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        required
      />
      <Button type="submit">Create Discussion</Button>
    </form>
  );
}
