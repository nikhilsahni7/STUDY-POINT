"use client";

import { useEffect, useState } from "react";
import { getReplies } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function ReplyList({ discussionId }: { discussionId: string }) {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    const fetchReplies = async () => {
      const fetchedReplies = await getReplies(discussionId);
      setReplies(fetchedReplies);
    };
    fetchReplies();
    const interval = setInterval(fetchReplies, 5000);
    return () => clearInterval(interval);
  }, [discussionId]);

  return (
    <div className="mt-6 space-y-6">
      <h2 className="text-2xl font-bold">Replies</h2>
      {replies.length === 0 ? (
        <Card>
          <CardContent className="text-center py-6">
            <p className="text-muted-foreground">
              No replies yet. Be the first to reply!
            </p>
          </CardContent>
        </Card>
      ) : (
        replies.map((reply: any) => (
          <Card key={reply.id} className="bg-secondary">
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src={reply.user.image} alt={reply.user.name} />
                  <AvatarFallback>{reply.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-sm">{reply.user.name}</CardTitle>
                  <p className="text-xs text-muted-foreground">
                    {new Date(reply.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{reply.answer}</p>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
