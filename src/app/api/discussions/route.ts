import { NextRequest, NextResponse } from "next/server";
import prisma from "@/../../db/index";

interface DiscussionProps {
  title: string;
  question: string;
  userId: string;
}
export async function GET() {
  try {
    const discussions = await prisma.discussion.findMany({
      include: { user: true, replies: true },
    });

    const sanitizedDiscussions = discussions.map((discussion) => {
      const { user, ...restDiscussion } = discussion;
      const sanitizedUser = { username: user.username }; // Include only necessary user fields
      return {
        ...restDiscussion,
        user: sanitizedUser,
        replies: discussion.replies,
      };
    });

    return NextResponse.json(sanitizedDiscussions, { status: 200 });
  } catch (error: any) {
    console.error("Error in GET /api/discussions:", error.message, error.stack);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title, question, userId } = (await req.json()) as DiscussionProps;

    if (!title || !question || !userId) {
      return NextResponse.json(
        { error: "Title, question, and userId are required" },
        { status: 400 }
      );
    }

    const discussion = await prisma.discussion.create({
      data: {
        title,
        question,
        userId,
      },
    });

    return NextResponse.json(discussion, { status: 200 });
  } catch (error: any) {
    console.error(
      "Error in POST /api/discussions:",
      error.message,
      error.stack
    );
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
