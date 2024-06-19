// app/notes/[subject]/page.tsx
"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Skeletons } from "@/components/Skeletons";
import AppBar from "@/components/Appbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Function to capitalize each word in the string
function capitalizeWords(str: string) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function SubjectPage() {
  const [documents, setDocuments] = useState<any[]>([]);
  const [error, setError] = useState("");
  const { subject } = useParams() as { subject: string };
  const decodedSubject = decodeURIComponent(subject).replace(/%20/g, " ");
  const humanReadableSubject = capitalizeWords(decodedSubject);

  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      router.push("/");
    } else {
      const fetchNotes = async () => {
        try {
          if (!decodedSubject) {
            throw new Error("No subject provided");
          }
          const response = await axios.get(
            `/api/pyqs?subject=${decodedSubject}`
          );

          if (!response.data.documents) {
            throw new Error("Failed to fetch documents");
          }

          setDocuments(response.data.documents);
          setError("");
        } catch (err: any) {
          setError(err.message || "Something went wrong");
          setDocuments([]);
        }
      };

      fetchNotes();
    }
  }, [decodedSubject, session, status, router]);

  if (status === "loading") {
    return <Skeletons />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <AppBar />
      <main className="container mx-auto py-8 flex-grow mb-auto">
        <section className="text-center py-20 md:py-32">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Documents for{" "}
            <span className="bg-gradient-to-r from-primary/60 to-primary text-transparent bg-clip-text">
              {humanReadableSubject}
            </span>
          </h1>
        </section>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {!error && documents.length === 0 && <Skeletons />}
        {documents.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc) => (
              <Card key={doc.id} className="drop-shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {doc.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-transparent  bg-clip-text bg-gradient-to-r from-primary/60 to-primary font-medium hover:underline"
                  >
                    View Document
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
      <Footer className="mt-auto" />
    </div>
  );
}
