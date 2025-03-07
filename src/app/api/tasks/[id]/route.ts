import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "@/lib/data";
import { TaskModel } from "@/lib/defintions";

interface Context {
  params: {
    id: string;
  };
}

export async function GET(_: NextRequest, { params }: Context) {
  try {
    await connectDb();

    const task = await TaskModel.findById(params.id);

    if (!task) {
      return NextResponse.json(
        {
          message: "Task not found.",
        },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { task },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch task.",
      },
      { status: 500 },
    );
  }
}

export const dynamic = "force-dynamic";
