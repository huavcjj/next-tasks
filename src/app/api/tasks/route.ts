import { TaskModel } from "@/lib/defintions";
import { connectDb } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDb();
    const tasks = await TaskModel.find();
    return NextResponse.json(
      {
        tasks: tasks,
      },
      {
        status: 200,
      },
    );
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
