"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { z } from "zod";
import { Button } from "../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "./ui/textarea";

import { useToast } from "@/components/ui/use-toast";

const feedbackSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  rating: z.coerce
    .number()
    .min(1, { message: "Rating is required." })
    .max(5, { message: "Rating must be between 1 and 5." }),
  comment: z.string().optional(),
  suggestions: z.string().min(10, { message: "Suggestions are required." }),
});

type FeedbackFormValues = z.infer<typeof feedbackSchema>;

function FeedbackForm({ userId }: { userId: string }) {
  const { toast } = useToast();
  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
  });

  const onSubmit = async (data: FeedbackFormValues) => {
    try {
      const response = await axios.post("/api/feedback", {
        ...data,
        userId,
      });

      if (response.status === 200) {
        toast({
          title: "Form Submitted",
          description: "Thank you for your feedback!",
        });
        form.reset();
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
      });
    }
  };

  return (
    <div className="container py-24 sm:py-32">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-8">
        Feedback{" "}
        <span className="bg-gradient-to-r from-primary/60 to-primary text-transparent bg-clip-text">
          Form
        </span>
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-lg mx-auto"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rating</FormLabel>
                <FormControl>
                  <Input placeholder="1-5" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comment</FormLabel>
                <FormControl>
                  <Input placeholder="Your comment" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="suggestions"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Suggestions</FormLabel>
                <FormControl>
                  <Textarea placeholder="Your suggestions" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default FeedbackForm;
