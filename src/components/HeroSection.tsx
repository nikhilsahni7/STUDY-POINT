// components/Hero.js
"use client";
import { AlertHero } from "./Alert";
import { HeroCards } from "./HeroCard";
import SearchBar from "./SearchBar";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const router = useRouter();
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 animate-bounceIn">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Exam and Study
            </span>{" "}
            Resources
          </h1>{" "}
          for{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              College
            </span>{" "}
            Students
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Find study materials and other resources like notes, pyqs, syllabus,
          lab files, tutorials, etc. for your college
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center">
          <Button
            onClick={() => router.push("contact-us")}
            variant="default"
            className="animate-FadeIn w-full md:w-1/3"
          >
            Contact us
          </Button>

          <SearchBar className="w-full md:w-1/3" />
        </div>
      </div>

      <div className="z-10">
        <HeroCards />
      </div>
      <div>
        <AlertHero />
      </div>

      <div className="shadow"></div>
    </section>
  );
};
