// /api/vendor/login/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Vendor from "@/models/Vendor";

export async function POST(req: Request) {
  const { username, password } = await req.json();
  await connectToDatabase();

  const vendor = await Vendor.findOne({ username });
  if (!vendor || vendor.password !== password) {
    return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
  }

  // Convert to plain JS object and remove password before sending
  const vendorData = vendor.toObject();

  return NextResponse.json({ success: true, user: vendorData });
}
