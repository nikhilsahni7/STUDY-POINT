// components/HeroCards.js
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { Check, Linkedin } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative w-full h-auto">
      {/* Testimonial */}
      <Card className="w-full drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt="" src="/student-avatar.jpg" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <CardTitle className="text-lg">Student</CardTitle>
            <CardDescription>@Students</CardDescription>
          </div>
        </CardHeader>
        <CardContent>This website is awesome!</CardContent>
      </Card>

      {/* Team */}
      <Card className="w-full flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-col justify-center items-center pb-2 text-center">
          <Image
            src="/profile.png"
            alt="user avatar"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full mb-4"
          />
          <CardTitle>Nikhil Sahni</CardTitle>
          <CardDescription className="font-normal text-primary">
            Full Stack Developer
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center pb-2">
          <p className="text-sm">
            Hello Everyone, My name is Nikhil Sahni. I am a Full Stack Developer
            and if you are interested in working with me, please feel free to
            contact me.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center gap-4">
          <a
            rel="noreferrer noopener"
            href="https://github.com/nikhilsahni7"
            target="_blank"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
            })}
          >
            <span className="sr-only">Github icon</span>
            <GitHubLogoIcon className="w-5 h-5" />
          </a>
          <a
            rel="noreferrer noopener"
            href="https://x.com/Nikhilllsahni"
            target="_blank"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
            })}
          >
            <span className="sr-only">X icon</span>
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-foreground w-5 h-5"
            >
              <title>X</title>
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
          </a>
          <a
            rel="noreferrer noopener"
            href="https://www.linkedin.com/"
            target="_blank"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
            })}
          >
            <span className="sr-only">Linkedin icon</span>
            <Linkedin size="20" />
          </a>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="w-full col-span-1 md:col-span-2 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row justify-start items-start gap-4">
          <div className="bg-primary/20 p-1 rounded-2xl">
            <Check className="w-5 h-5 text-primary" />
          </div>
          <div>
            <CardTitle>Get Help</CardTitle>
            <CardDescription className="text-md mt-2">
              Get the latest question papers, notes, study guides, and much more
              from here.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
