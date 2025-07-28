import { User } from "@/types/user.type";
import { api } from "@/utils/api";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    try {
      const response = await api.get<User[]>("/user");
      const users = response.data;

      const user = users.find((u: User) => u.email === email);

      if (!user) {
        return NextResponse.json(
          { message: "User not found" },
          { status: 404 }
        );
      }

      if (user.password !== password) {
        return NextResponse.json(
          { message: "Invalid password" },
          { status: 401 }
        );
      }

      const { password: _, ...userWithoutPassword } = user;

      return NextResponse.json(userWithoutPassword, { status: 200 });
    } catch (error) {
      console.error("External API error:", error);
      return NextResponse.json(
        { message: "Authentication service unavailable" },
        { status: 503 }
      );
    }
  } catch (error) {
    console.error("Sign In error : ", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
