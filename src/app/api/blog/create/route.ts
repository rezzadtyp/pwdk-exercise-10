import { api } from "@/utils/api";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, userId } = body;

    if (!title || !description || !userId) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    try {
      const response = await api.post("/blog", body);

      const createdBlog = response.data;

      return NextResponse.json(createdBlog, { status: 201 });
    } catch (error) {
      console.error("External API error:", error);
      return NextResponse.json(
        { message: "Blog service unavailable" },
        { status: 503 }
      );
    }
  } catch (error) {
    console.error("Create blog error : ", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
