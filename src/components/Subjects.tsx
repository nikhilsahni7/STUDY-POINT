// app/notes/page.tsx
"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";
import AppBar from "@/components/Appbar"; // Import AppBar component
import { Footer } from "@/components/Footer"; // Import Footer component

const subjects = [
  { value: "operating systems", label: "Operating Systems" },
  {
    value: "data structures and algorithms",
    label: "Data Structures and Algorithms",
  },
  { value: "probability and statistics", label: "Probability and Statistics" },
  { value: "oops using java", label: "OOPS Using Java" },
  { value: "computer networks", label: "Computer Networks" },
  {
    value: "Basics of electrical engineering",
    label: "Basics of Electrical Engineering",
  },
  { value: "chemistry", label: "Chemistry" },
  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
  { value: "Software Engineering", label: "Software Engineering" },
  { value: "Discrete Mathematics", label: "Discrete Mathematics" },
];

export default function SubjectsPage() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const router = useRouter();

  return (
    <div>
      <AppBar /> {/* Render AppBar */}
      <div className="container py-24 sm:py-32 mb-60 flex-grow">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-8">
          Select Your{" "}
          <span className="bg-gradient-to-r from-primary/60 to-primary text-transparent bg-clip-text">
            Subject
          </span>
        </h2>
        <div className="flex justify-center space-y-2 md:space-y-0 md:space-x-2">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[280px] justify-between h-9"
              >
                {value
                  ? subjects.find((subject) => subject.value === value)?.label
                  : "Select a Subject..."}
                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[240px] p-0">
              <Command>
                <CommandInput placeholder="Search subject..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No subjects found.</CommandEmpty>
                  <CommandGroup>
                    {subjects.map((subject) => (
                      <CommandItem
                        value={subject.value}
                        key={subject.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                          router.push(`/notes/${currentValue}`);
                        }}
                      >
                        {subject.label}
                        <CheckIcon
                          className={cn(
                            "ml-auto h-4 w-4",
                            value === subject.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <Footer className="mt-20" /> {/* Render Footer */}
    </div>
  );
}
