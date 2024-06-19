// app/layout.tsx
import "./globals.css";
import { Poppins as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

export const metadata = {
  title: "Study Point",
  description:
    "App designed for study materials and exam resources for college like notes,pyqs and syllabus,lab manuals/files and many more and also has contact us and feedback form for any query and feedback",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />

      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          themes={[
            "light",
            "dark",
            "Rose",
            "Blue",
            "Violet",
            "Green",
            "Yellow",
            "Gray",
          ]}
          disableTransitionOnChange
        >
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
