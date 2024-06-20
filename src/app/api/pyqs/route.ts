import { NextRequest, NextResponse } from "next/server";
import prisma from "@/../../db";
import mime from "mime";

const cloudFrontDomain = process.env.CLOUDFRONT_DOMAIN_NAME;

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const subject = searchParams.get("subject");

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
      return { ...doc, url, contentType };
    });

    return NextResponse.json({ documents: documentsWithUrls });
  } catch (error) {
    console.error("Error fetching documents by subject", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
