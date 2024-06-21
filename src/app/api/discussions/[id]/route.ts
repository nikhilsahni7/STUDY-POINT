import { NextRequest, NextResponse } from "next/server";
import prisma from "@/../../db/index";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  try {
    const discussion = await prisma.discussion.findUnique({
      where: { id: String(id) },
      include: { user: true, replies: true },
    });

    if (!discussion) {
      console.log("Discussion not found");
      return NextResponse.json(
        { error: "Discussion not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(discussion, { status: 200 });
  } catch (error: any) {
    console.error(
      "Error in GET /api/discussions/[id]:",
      error.message,
      error.stack
    );
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
