import { api } from "@/utils/api";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await api.get("/blog");

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
