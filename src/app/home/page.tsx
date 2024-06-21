import React from "react";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import { Hero } from "@/components/HeroSection";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/NewsLetter";
import { FAQ } from "@/components/Faqs";
import { ScrollToTop } from "@/components/ScrollToTop";
import { TechStack } from "@/components/TechStack";
import dynamic from "next/dynamic";

// Dynamically import the AnimatedWelcome component with ssr disabled
const AnimatedWelcome = dynamic(() => import("@/components/AnimationWelcome"), {
  ssr: false,
});

const HomePage = async () => {
  const session = await auth();
  if (!session?.user && !session) {
    redirect("/");
  }

  return (
    <div className="flex flex-col items-center m-4">
      <AnimatedWelcome user={session.user} />
      <Hero />
      <Features />
      <Testimonials />
      <Newsletter />
      <FAQ />
      <TechStack />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
