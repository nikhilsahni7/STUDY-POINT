"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Skeletons } from "@/components/Skeletons";
import AppBar from "@/components/Appbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
      const fetchSyllabus = async () => {
        try {
          if (!decodedSubject) {
            throw new Error("No subject provided");
          }
          const response = await axios.get(
            `/api/syllabus?subject=${decodedSubject}`
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
      fetchSyllabus();
    }
  }, [decodedSubject, session, status, router]);

  if (status === "loading") {
    return <Skeletons />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary">
      <AppBar />
      <main className="container mx-auto py-8 flex-grow mb-auto">
        <section className="text-center py-20 md:py-32 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Syllabus for{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary text-transparent bg-clip-text">
              {humanReadableSubject}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore the course outline and learning objectives
          </p>
        </section>
        {error && (
          <p className="text-red-500 text-center animate-fadeIn">{error}</p>
        )}
        {!error && documents.length === 0 && <Skeletons />}
        {documents.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc, index) => (
              <Card
                key={doc.id}
                className="drop-shadow-xl hover:shadow-2xl transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {doc.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    onClick={() => window.open(doc.url, "_blank")}
                  >
                    View Document
                  </Button>
                  <a
                    href={doc.url}
                    download
                    className="text-primary font-medium hover:underline ml-2"
                  >
                    Download
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
