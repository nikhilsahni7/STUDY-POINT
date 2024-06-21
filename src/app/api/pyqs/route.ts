import { NextRequest, NextResponse } from "next/server";
import prisma from "@/../../db";
import mime from "mime";
import { auth } from "../../../../auth";

const cloudFrontDomain = process.env.CLOUDFRONT_DOMAIN_NAME;

export async function GET(req: NextRequest) {
  const subject = req.nextUrl.searchParams.get("subject");
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!subject) {
      return NextResponse.json(
        { error: "Subject is required" },
        { status: 400 }
      );
    }

    const documents = await prisma.document.findMany({
      where: { category: "PYQ", subject },
    });

    if (documents.length === 0) {
      return NextResponse.json(
        { error: "No documents found for the given subject" },
        { status: 404 }
      );
    }

    const documentsWithUrls = documents.map((doc) => {
      const url = `https://${cloudFrontDomain}/${doc.key}`;
      const contentType = mime.getType(doc.key);
      // Destructure to exclude userId and id from the response
      const { userId, id, ...safeDoc } = doc;
      return { ...safeDoc, url, contentType };
    });

    return NextResponse.json({ documents: documentsWithUrls });
  } catch (error) {
    if (process.env.NODE_ENV === "production") {
      console.error("Error fetching documents by subject", error);
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 500 }
      );
    } else {
      console.error("Detailed Error:", error);
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 500 }
      );
    }
  }
}
