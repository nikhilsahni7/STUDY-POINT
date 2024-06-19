// pages/api/profile.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/../../db/index";

interface UpdateProfileProps {
  name?: string;
  collegeName?: string;
  currentSemester?: number;
  username?: string;
  branch?: string;
  course?: string;
  userId: string;
}

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      collegeName,
      currentSemester,
      username,
      branch,
      course,
      userId,
    } = (await req.json()) as UpdateProfileProps;

    // Basic validation
    if (!userId) {
      return NextResponse.json(
        { error: "Authentication error: User ID is required" },
        { status: 400 }
      );
    }

    // Check for at least one field to update
    if (
      !name &&
      !collegeName &&
      !currentSemester &&
      !username &&
      !branch &&
      !course
    ) {
      return NextResponse.json(
        { error: "At least one field is required to update" },
        { status: 400 }
      );
    }

    // Update user profile
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        name,
        collegeName,
        currentSemester,
        username,
        branch,
        course,
      },
    });

    return NextResponse.json({ data: updatedUser }, { status: 200 });
  } catch (error: any) {
    console.error(
      "Error in POST /api/updateProfile:",
      error.message,
      error.stack
    );
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
