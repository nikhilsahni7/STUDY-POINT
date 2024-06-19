import { NextRequest, NextResponse } from "next/server";
import prisma from "@/../../db/index";

interface ReplyProps {
  answer: string;
  userId: string;
  discussionId: string;
}

export async function POST(req: NextRequest) {
  try {
    const { answer, userId, discussionId } = (await req.json()) as ReplyProps;

    if (!answer || !userId || !discussionId) {
      return NextResponse.json(
        { error: "Answer, userId, and discussionId are required" },
        { status: 400 }
      );
    }

    const reply = await prisma.reply.create({
      data: {
        answer,
        userId,
        discussionId,
      },
    });

    return NextResponse.json(reply, { status: 200 });
  } catch (error: any) {
    console.error("Error in POST /api/replies:", error.message, error.stack);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  // all replies
  try {
    const replies = await prisma.reply.findMany({
      include: { user: true },
    });
    return NextResponse.json(replies, { status: 200 });
  } catch (error: any) {
    console.error("Error in GET /api/replies:", error.message, error.stack);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
