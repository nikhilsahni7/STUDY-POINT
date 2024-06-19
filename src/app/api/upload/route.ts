import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import prisma from "@/../../db";
import { DocumentCategory } from "@prisma/client";
import mime from "mime";

// Import mime package

// Configure AWS SDK
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const uploadFileToS3 = async (
  bucketName: string,
  key: string,
  fileContent: Buffer,
  contentType: string
) => {
  // Set upload parameters
  const params = {
    Body: fileContent,
    Bucket: bucketName,
    Key: key,
    ACL: "private" as any,
    ContentType: contentType,
  };

  try {
    // Upload file to S3
    const command = new PutObjectCommand(params);
    const response = await s3Client.send(command);
    return response;
  } catch (error) {
    console.error("Error uploading file", error);
    throw new Error("Error uploading file to S3");
  }
};

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const file = form.get("file") as File;
  const name = form.get("name") as string | null;
  const type = form.get("type") as string | null;
  const category = form.get("category") as DocumentCategory | null;
  const subject = form.get("subject") as string | null;
  const year = form.get("year") as string | null;
  const description = form.get("description") as string | null;
  const userId = form.get("userId") as string | null;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const buffer = await file.arrayBuffer();
  const fileContent = Buffer.from(buffer);
  const fileKey = `${
    category ? category.toLowerCase() : "other"
  }/${Date.now().toString()}_${file.name}`;

  // Determine the MIME type based on the file extension
  const extension: any = file.name.split(".").pop();
  let contentType = mime.getType(extension) || "application/octet-stream";

  try {
    await uploadFileToS3(
      process.env.AWS_S3_BUCKET_NAME!,
      fileKey,
      fileContent,
      contentType
    );

    const document = await prisma.document.create({
      data: {
        name: name ?? "",
        key: fileKey, // Store the S3 object key
        type: type ?? "",
        category: category ?? DocumentCategory.NOTES,
        subject: subject ?? "",
        year: year ? parseInt(year, 10) : null,
        description: description ?? "",
        userId: userId ?? "",
      },
    });

    return NextResponse.json({
      message: "Document uploaded successfully",
      document,
    });
  } catch (error) {
    console.error("Error processing request", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
