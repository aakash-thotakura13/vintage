// api/order/route.ts
import { connectToDatabase } from "@/lib/mongodb";
import Order from "@/models/Order";
import Vendor from "@/models/Vendor";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    await connectToDatabase();

    const { vendorId, items, totalAmount } = data;

    // 1️⃣ Create the new order
    const newOrder = await Order.create({
      vendor: vendorId,
      items,
      totalAmount,
    });

    // 2️⃣ Add order to vendor's list
    await Vendor.findByIdAndUpdate(vendorId, {
      $push: { orders: newOrder._id },
    });

    return NextResponse.json({
      success: true,
      message: "Order created successfully",
      order: newOrder,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create order" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const allOrders = await Order.find({}).populate("vendor");
    return NextResponse.json({ success: true, orders: allOrders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}
