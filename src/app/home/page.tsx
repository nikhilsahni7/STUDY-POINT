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
import { UpdateProfile } from "@/components/UpdateProfile";

const HomePage = async () => {
  const session = await auth();

  if (!session?.user && !session) {
    redirect("/");
  }

  return (
    <div className="flex flex-col items-center m-4">
      <h1 className="text-3xl my-2 transition-opacity duration-500 ease-in-out opacity-0 animate-fadeIn ">
        Welcome, {session?.user?.name}
      </h1>

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
