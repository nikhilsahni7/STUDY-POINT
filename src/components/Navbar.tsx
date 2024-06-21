"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/ModeToggle";
import Logout from "@/components/Logout";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { User, Settings, Menu, User2 } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container mx-auto flex max-w-7xl items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Image
            src="/Study-Point.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-2xl font-bold tracking-wide text-foreground">
            StudyPoint
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <span className="font-medium text-foreground transition duration-300 hover:text-gray-300">
                    Getting Started
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-gray-800 dark:bg-white rounded-lg shadow-lg">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/getting-started"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gray-700 to-gray-600 dark:from-gray-100 dark:to-gray-200 p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white dark:text-gray-800">
                            Getting Started
                          </div>
                          <p className="text-sm leading-tight text-gray-300 dark:text-gray-600">
                            Welcome to StudyPoint .. Explore pyqs notes and
                            other sections to see study materials..
                          </p>
                          <p className="text-sm leading-tight text-gray-300 dark:text-gray-600">
                            Also you can fill contact us form to get more
                            details and provide us your feedback and anything
                            else.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <span className="font-medium text-foreground transition duration-300 hover:text-gray-300">
                    About Me
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-gray-800 dark:bg-white rounded-lg shadow-lg">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/about-me"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gray-700 to-gray-600 dark:from-gray-100 dark:to-gray-200 p-6 no-underline outline-none focus:shadow-md"
                        >
                          ``
                          <div className="mb-2 mt-4 text-lg font-medium text-white dark:text-gray-800">
                            About Me
                          </div>
                          <p className="text-sm leading-tight text-gray-300 dark:text-gray-600">
                            Hello I am Nikhil Sahni. I am a Full Stack Developer
                            and currently pursuing computer science. You can
                            find me on github and twitter/x ,I have provided all
                            the links below.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/pyqs" passHref legacyBehavior>
                  <NavigationMenuLink className="font-medium text-foreground transition duration-300 hover:text-gray-300">
                    Pyqs/Tutorials
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/notes" passHref legacyBehavior>
                  <NavigationMenuLink className="font-medium text-foreground transition duration-300 hover:text-gray-300">
                    Notes
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/syllabus" passHref legacyBehavior>
                  <NavigationMenuLink className="font-medium text-foreground transition duration-300 hover:text-gray-300">
                    Syllabus/lab file
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/feedback" passHref legacyBehavior>
                  <NavigationMenuLink className="font-medium text-foreground transition duration-300 hover:text-gray-300">
                    Feedback
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background p-4 md:hidden z-50">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col space-y-4">
                <NavigationMenuItem>
                  {/* <Link href="/getting-started" passHref legacyBehavior> */}
                  <NavigationMenuLink className="font-medium text-foreground transition duration-300 hover:text-gray-300">
                    <ModeToggle />
                  </NavigationMenuLink>
                  {/* </Link> */}
                </NavigationMenuItem>
                <NavigationMenuItem>
                  {/* <Link href="/about-me" passHref legacyBehavior> */}
                  <NavigationMenuLink className="font-medium text-foreground transition duration-300 hover:text-gray-300">
                    <Logout />
                  </NavigationMenuLink>
                  {/* </Link> */}
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="pyqs" passHref legacyBehavior>
                    <NavigationMenuLink className="font-medium text-foreground transition duration-300 hover:text-gray-300">
                      Pyqs/Tutorials
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/notes" passHref legacyBehavior>
                    <NavigationMenuLink className="font-medium text-foreground transition duration-300 hover:text-gray-300">
                      Notes
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/syllabus" passHref legacyBehavior>
                    <NavigationMenuLink className="font-medium text-foreground transition duration-300 hover:text-gray-300">
                      Syllabus/Lab Files
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/feedback" passHref legacyBehavior>
                    <NavigationMenuLink className="font-medium text-foreground transition duration-300 hover:text-gray-300">
                      Feedback
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <Link
                  href="/profile"
                  passHref
                  legacyBehavior
                  className="flex items-center "
                >
                  <NavigationMenuLink className="font-medium text-foreground transition duration-300 hover:text-gray-300 flex items-center">
                    <User2 className="mr-2" size={16} />
                    UpdateProfile
                  </NavigationMenuLink>
                </Link>
                <NavigationMenuItem></NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}

        <div className="hidden md:flex items-center space-x-4">
          <ModeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center">
                <User className="mr-2" size={16} />
                Profile
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <a href="/profile" className="flex items-center">
                  <User className="mr-2" size={16} />
                  Profile
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/settings" className="flex items-center">
                  <Settings className="mr-2" size={16} />
                  Settings
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Logout />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
