import { TaskDocument, TaskModel } from "@/lib/defintions";
import { connectDb } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDb();
    const tasks: TaskDocument[] = await TaskModel.find();
    return NextResponse.json({
      message: "Tasks fetched successfully",
      tasks,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch tasks.",
      },
      { status: 500 },
    );
  }
}

export const dynamic = "force-dynamic";
