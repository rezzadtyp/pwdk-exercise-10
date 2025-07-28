import { User } from "@/types/user.type";
import { api } from "@/utils/api";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    try {
      const response = await api.get("/user");

      const users = response.data;

      const existingUser = users.find((user: User) => user.email === email);

      if (existingUser) {
        return NextResponse.json(
          { message: "User already exists" },
          { status: 400 }
        );
      }

      const newUser = await api.post("/user", body);

      const createdUser = newUser.data;

      const { password: _, ...userWithoutPassword } = createdUser;

      return NextResponse.json(userWithoutPassword, { status: 201 });
    } catch (apiError: any) {
      console.error("External API error:", apiError);
      return NextResponse.json(
        { message: "Registration service unavailable" },
        { status: 503 }
      );
    }
  } catch (error) {
    console.error("Sign Up error : ", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
