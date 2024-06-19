"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useToast } from "./ui/use-toast";

export function UpdateProfile(userId: { userId: string }) {
  const [name, setName] = useState("Nikhil Sahni");
  const [username, setUsername] = useState("@nikhil_sahni");
  const [collegeName, setCollegeName] = useState("");
  const [currentSemester, setCurrentSemester] = useState("");
  const [branch, setBranch] = useState("");
  const [course, setCourse] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userID = userId.userId; // it is an object { }

    const data = {
      name,
      collegeName,
      currentSemester: currentSemester ? parseInt(currentSemester) : undefined,
      username,
      branch,
      course,
      userId: userID,
    };

    try {
      const response = await fetch("/api/updateProfile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Profile Updated",
          description: "Your profile has been updated successfully.",
        });
      } else {
        toast({
          title: "Profile Update Failed",
          description: result.error,
        });
      }
    } catch (error) {
      toast({
        title: "Profile Update Failed",
        description: "An error occurred while updating your profile.",
      });
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="mx-auto block mt-20 mb-20 animate-pulse  ">
          Update Profile
        </Button>
      </SheetTrigger>
      <SheetContent>
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
          <SheetHeader>
            <SheetTitle className="text-center text-3xl">
              <span className="bg-gradient-to-r from-primary/60 to-primary text-transparent bg-clip-text">
                Edit Profile
              </span>
            </SheetTitle>
            <SheetDescription className="text-center mt-2">
              <span className="bg-gradient-to-r from-primary/60 to-primary text-transparent bg-clip-text">
                Make changes to your profile here. Click save when you're done.
              </span>
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="collegeName" className="text-right">
                College Name
              </Label>
              <Input
                id="collegeName"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="currentSemester" className="text-right">
                Current Semester
              </Label>
              <Input
                id="currentSemester"
                value={currentSemester}
                onChange={(e) => setCurrentSemester(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="branch" className="text-right">
                Branch
              </Label>
              <Input
                id="branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="course" className="text-right">
                Course
              </Label>
              <Input
                id="course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit" className="mx-auto block">
                Save changes
              </Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
