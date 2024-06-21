// components/Hero.js
"use client";
import { AlertHero } from "./Alert";
import { HeroCards } from "./HeroCard";
import SearchBar from "./SearchBar";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { MessageCircle, TrendingUp, Users } from "lucide-react";

export const Hero = () => {
  const router = useRouter();

  return (
    <section className="container py-12 md:py-24 space-y-12 animate-fadeIn">
      <div className="grid lg:grid-cols-2 gap-8 place-items-center">
        <div className="text-center lg:text-start space-y-6">
          <main className="text-4xl md:text-5xl font-bold">
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
          <p className="text-lg text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            Find study materials and other resources like notes, pyqs, syllabus,
            lab files, tutorials, etc. for your college
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              onClick={() => router.push("contact-us")}
              variant="default"
              className="w-full sm:w-auto"
              size="lg"
            >
              Contact us
            </Button>
            <SearchBar className="w-full sm:w-auto" />
          </div>
        </div>
        <div className="w-full max-w-md">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Study Resources</CardTitle>
              <CardDescription>Explore our collection</CardDescription>
            </CardHeader>
            <CardContent>
              <HeroCards />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-3xl font-bold text-center">
          Join Our Vibrant Community
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Discussion Forum</span>
              </CardTitle>
              <CardDescription>
                Engage in meaningful conversations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Connect with peers, share insights, and get your questions
                answered.
              </p>
              <Link href="/discussions" passHref>
                <Button variant="outline" className="w-full">
                  Join Discussions
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span>Trending Topics</span>
              </CardTitle>
              <CardDescription>
                Stay updated with hot discussions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <span>Exam Strategies</span>
                  <Badge>New</Badge>
                </li>
                <li className="flex items-center justify-between">
                  <span>Study Techniques</span>
                  <Badge variant="secondary">Popular</Badge>
                </li>
                <li>Course Reviews</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Community Stats</span>
              </CardTitle>
              <CardDescription>Our growing network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span>Active Members</span>
                  <span className="font-bold">10,000+</span>
                </p>
                <p className="flex justify-between">
                  <span>Daily Posts</span>
                  <span className="font-bold">500+</span>
                </p>
                <p className="flex justify-between">
                  <span>Resources Shared</span>
                  <span className="font-bold">25,000+</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <AlertHero />
    </section>
  );
};
