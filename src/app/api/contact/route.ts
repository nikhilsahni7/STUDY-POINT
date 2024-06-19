// pages/api/contact.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/../../db/index";

interface ContactProps {
  name: string;
  email: string;
  PhoneNumber: string;
  MessageSubject?: string;
  message: string;
  userId: string;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, PhoneNumber, MessageSubject, message, userId } =
      (await req.json()) as ContactProps;

    // Basic validation
    if (!name || !email || !PhoneNumber || !message || !userId) {
      return NextResponse.json(
        { error: "All fields except MessageSubject are required" },
        { status: 400 }
      );
    }

    // Create contact entry
    const contact = await prisma.contactUs.create({
      data: {
        name,
        email,
        PhoneNumber,
        MessageSubject: MessageSubject ?? "",
        message,
        userId, // Associate with the user
      },
    });

    return NextResponse.json({ data: contact }, { status: 200 });
  } catch (error: any) {
    console.error("Error in POST /api/contact:", error.message, error.stack);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
