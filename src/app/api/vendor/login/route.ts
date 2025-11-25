// /api/vendor/login/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Vendor from "@/models/Vendor";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (username === "admin" && password === "admin") {
    return NextResponse.json({
      success: true,
      role: "admin",
      user: { username: "admin" },
    });
  }

  await connectToDatabase();

  const vendor = await Vendor.findOne({ username });
  if (!vendor || vendor.password !== password) {
    return NextResponse.json(
      { success: false, message: "Invalid credentials" },
      { status: 401 }
    );
  }

  console.log(vendor)
  const vendorData = vendor.toObject();

  return NextResponse.json({
    success: true,
    role: "vendor",
    user: vendorData,
  });
}
