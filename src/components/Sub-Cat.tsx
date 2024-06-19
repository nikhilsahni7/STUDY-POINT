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
];

const categories = [
  { value: "notes", label: "Notes" },
  { value: "syllabus", label: "Syllabus" },
  { value: "pyq", label: "Previous Year Questions (PYQ)" },
];

export default function SubjectsCategory() {
  const [subjectOpen, setSubjectOpen] = React.useState(false);
  const [categoryOpen, setCategoryOpen] = React.useState(false);
  const [subjectValue, setSubjectValue] = React.useState("");
  const [categoryValue, setCategoryValue] = React.useState("");
  const router = useRouter();

  const handleNavigate = () => {
    if (subjectValue && categoryValue) {
      router.push(`/notes/${subjectValue}?category=${categoryValue}`);
    }
  };

  React.useEffect(() => {
    handleNavigate();
  }, [subjectValue, categoryValue]);

  return (
    <div>
      <AppBar /> {/* Render AppBar */}
      <div className="container py-24 sm:py-32 mb-60 flex-grow">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-8">
          Select Your{" "}
          <span className="bg-gradient-to-r from-primary/60 to-primary text-transparent bg-clip-text">
            Subject and Category
          </span>
        </h2>
        <div className="flex justify-center space-y-2 md:space-y-0 md:space-x-2">
          <Popover open={subjectOpen} onOpenChange={setSubjectOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={subjectOpen}
                className="w-[280px] justify-between h-9"
              >
                {subjectValue
                  ? subjects.find((subject) => subject.value === subjectValue)
                      ?.label
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
                          setSubjectValue(
                            currentValue === subjectValue ? "" : currentValue
                          );
                          setSubjectOpen(false);
                        }}
                      >
                        {subject.label}
                        <CheckIcon
                          className={cn(
                            "ml-auto h-4 w-4",
                            subjectValue === subject.value
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

          <Popover open={categoryOpen} onOpenChange={setCategoryOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={categoryOpen}
                className="w-[280px] justify-between h-9"
              >
                {categoryValue
                  ? categories.find(
                      (category) => category.value === categoryValue
                    )?.label
                  : "Select a Category..."}
                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[240px] p-0">
              <Command>
                <CommandInput
                  placeholder="Search category..."
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>No categories found.</CommandEmpty>
                  <CommandGroup>
                    {categories.map((category) => (
                      <CommandItem
                        value={category.value}
                        key={category.value}
                        onSelect={(currentValue) => {
                          setCategoryValue(
                            currentValue === categoryValue ? "" : currentValue
                          );
                          setCategoryOpen(false);
                        }}
                      >
                        {category.label}
                        <CheckIcon
                          className={cn(
                            "ml-auto h-4 w-4",
                            categoryValue === category.value
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
