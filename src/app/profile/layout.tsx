import AppBar from "@/components/Appbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen mb-100">
      <AppBar />
      <main className="flex-grow">{children}</main>
      <Toaster />
      <Footer className="mt-60" />
    </div>
  );
}
