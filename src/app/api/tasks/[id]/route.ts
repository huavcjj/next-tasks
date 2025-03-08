import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "@/lib/data";
import { TaskModel } from "@/lib/definitions";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } },
) {
  try {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Unauthorized: No token provided" },
        { status: 401 },
      );
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };
    const userId = new mongoose.Types.ObjectId(decoded.userId);

    await connectDb();
    const { id } = context.params;

    const task = await TaskModel.findOne({
      _id: id,
      userId: userId,
    });

    if (!task) {
      return NextResponse.json(
        { error: "Task not found or unauthorized" },
        { status: 404 },
      );
    }

    return NextResponse.json({ task }, { status: 200 });
  } catch (error) {
    console.error(error);

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
