import pool from "@/app/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req: Request) => {
  try {
    const { name, email, password, confirmPassword } = await req.json();

    if (!name || !email || !password || !confirmPassword) {
      return NextResponse.json(
        { message: "All fields required" },
        { status: 400 },
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { message: "Passwords do not match" },
        { status: 400 },
      );
    }

    const [existingUser]: any = await pool.query(
      `select * from users where email = ?`,
      [email],
    );

    if (existingUser.length > 0) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const uuid = crypto.randomUUID();

    await pool.query(
      `insert into users (id,name, email, password) values (?,?,?,?)`,
      [uuid, name, email, hashedPassword],
    );

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 501 },
    );
  }
};
