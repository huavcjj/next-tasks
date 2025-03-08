import { TaskModel } from "@/lib/definitions";
import { connectDb } from "@/lib/data";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Unauthorized: No token provided" },
        { status: 401 },
      );
    }
    const token = authHeader.split(" ")[1];

    // const token = (await cookies()).get("token")?.value;
    // if (!token) {
    //   return NextResponse.json(
    //     { error: "Unauthorized: No token provided" },
    //     { status: 401 },
    //   );
    // }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };
    const userId = new mongoose.Types.ObjectId(decoded.userId);

    await connectDb();
    const tasks = await TaskModel.find({ userId });

    return NextResponse.json({ tasks }, { status: 200 });
  } catch (error) {
    console.error("Error fetching tasks:", error);

    const isAuthError = error instanceof jwt.JsonWebTokenError;
    return NextResponse.json(
      {
        error: isAuthError
          ? "Unauthorized: Invalid token"
          : "Internal Server Error",
      },
      { status: isAuthError ? 401 : 500 },
    );
  }
}

export const dynamic = "force-dynamic";
