import { NextRequest, NextResponse } from "next/server";
import prisma from "@/../../db/index";

interface FeedbackProps {
  name: string;
  email: string;
  rating: number; // Change type to number
  comment?: string;
  suggestions: string;
  userId: string;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, rating, comment, suggestions, userId } =
      (await req.json()) as FeedbackProps;

    // Basic validation
    if (!name || !email || !rating || !suggestions || !userId) {
      return NextResponse.json(
        { error: "All fields except comment are required" },
        { status: 400 }
      );
    }

    // Create feedback entry
    const feedback = await prisma.feedback.create({
      data: {
        name,
        email,
        rating,
        comment: comment ?? "",
        suggestions,
        userId, // Associate with the user
      },
    });

    return NextResponse.json({ data: feedback }, { status: 200 });
  } catch (error: any) {
    console.error("Error in POST /api/feedback:", error.message, error.stack);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
