import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Vendor from "@/models/Vendor";
import Order from "@/models/Order";

// ✅ Required so dynamic routes work in static exports
export const dynamic = "force-dynamic";

export async function GET(
  req: Request,
  context: { params: Promise<{ username: string }> }
) {
  try {
    const { username } = await context.params; // ✅ await here

    await connectToDatabase();

    // 1️⃣ Find vendor by username
    const vendor = await Vendor.findOne({ username });
    if (!vendor) {
      return NextResponse.json(
        { success: false, message: "Vendor not found" },
        { status: 404 }
      );
    }

    // 2️⃣ Fetch all orders linked to this vendor
    const orders = await Order.find({ vendor: vendor._id });

    // 3️⃣ Combine vendor and order data
    const vendorData = {
      ...vendor.toObject(),
      orders,
    };

    return NextResponse.json({ success: true, vendor: vendorData });
  } catch (error) {
    console.error("❌ Error fetching vendor data:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch vendor data" },
      { status: 500 }
    );
  }
}
