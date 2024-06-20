import { NextRequest, NextResponse } from "next/server";
import prisma from "@/../../db"; // Ensure prisma client is correctly imported

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query") || "";

  if (!query) {
    return NextResponse.json(
      { error: "Query parameter is required" },
      { status: 400 }
    );
  }

  // Fetch documents based on the query
  const results = await prisma.document.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
        { subject: { contains: query, mode: "insensitive" } },
        { type: { contains: query, mode: "insensitive" } },
      ],
    },
  });

  const sanitizedResults = results.map(({ userId, id, ...rest }) => rest);

  return NextResponse.json(sanitizedResults);
}
