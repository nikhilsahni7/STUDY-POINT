import { NextRequest, NextResponse } from "next/server";
import prisma from "@/../../db/index";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    const reply = await prisma.reply.findUnique({
      where: { id: String(id) },
      include: { user: true },
    });
    return NextResponse.json(reply, { status: 200 });
  } catch (error: any) {
    console.error(
      "Error in GET /api/replies/[id]:",
      error.message,
      error.stack
    );
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    await prisma.reply.delete({
      where: { id: String(id) },
    });

    return NextResponse.json({}, { status: 204 });
  } catch (error: any) {
    console.error(
      "Error in DELETE /api/replies/[id]:",
      error.message,
      error.stack
    );
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}