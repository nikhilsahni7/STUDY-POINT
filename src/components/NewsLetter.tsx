"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "@/components/ui/use-toast";

export const Newsletter = () => {
  const { toast } = useToast();

  return (
    <section id="newsletter" className="container w-full h-full">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Join Our Daily{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Newsletter
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Subscribe here to get our latest updates and news
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            toast({
              title: "Thank you for subscribing",
              description:
                "You will get our latest updates and news in your email.",
            });
          }}
        >
          <Input
            type="email"
            placeholder="nikhil.sahni321@gmail.com"
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="email"
            required
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
