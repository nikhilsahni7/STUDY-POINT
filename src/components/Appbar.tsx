"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/ModeToggle";
import Logout from "@/components/Logout";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Home, Mail, Menu } from "lucide-react";

const AppBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container mx-auto flex max-w-7xl items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-2xl font-bold tracking-wide text-foreground">
            StudyPoint
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/home" passHref legacyBehavior>
            <Button variant="ghost" className="flex items-center">
              <Home className="mr-2" size={16} />
              Home
            </Button>
          </Link>

          <ModeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center">
                <Mail className="mr-2" size={16} />
                Contact Us
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <a href="/contact-us" className="flex items-center">
                  <Mail className="mr-2" size={16} />
                  Go to Contact Us page
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Logout />
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 p-4 bg-background border-t">
            <Link href="/home" passHref legacyBehavior>
              <Button variant="ghost" className="flex items-center w-full">
                <Home className="mr-2" size={16} />
                Home
              </Button>
            </Link>

            <div className="flex items-center justify-center space-x-4">
              <ModeToggle />
            </div>

            <Link href="/contact-us" passHref legacyBehavior>
              <Button variant="ghost" className="flex items-center w-full">
                <Mail className="mr-2" size={16} />
                Contact Us
              </Button>
            </Link>

            <div className="flex items-center justify-center space-x-4">
              <Logout />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default AppBar;
