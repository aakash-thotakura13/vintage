import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Vendor from "@/models/Vendor";
import Order from "@/models/Order";

export async function POST(req: Request) {
  try {
    const { username, cartItems } = await req.json();

    if (!username || !cartItems || !Array.isArray(cartItems)) {
      return NextResponse.json(
        { success: false, error: "username and cartItems are required" },
        { status: 400 }
      );
    }

    const client = await connectToDatabase();

    // Find the vendor by username
    const vendor = await Vendor.findOne({ username: username });
    if (!vendor) {
      return NextResponse.json(
        { success: false, error: "Vendor not found" },
        { status: 404 }
      );
    }

    const totalAmount = cartItems.reduce(
      (sum, item) => sum + Number(item.price) * Number(item.count),
      0
    );

    // Create new order
    const newOrder = await Order.create({
      vendor: vendor._id,
      items: cartItems.map(item => ({
        productName: item.name,
        quantity: Number(item.count),
        price: Number(item.price),
      })),
      totalAmount,
    });

    // Push the order ID to the vendor's orders
    await Vendor.findByIdAndUpdate(vendor._id, { $push: { orders: newOrder._id } });

    return NextResponse.json({ success: true, order: newOrder });
  } catch (error) {
    console.error("Error saving order:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save order" },
      { status: 500 }
    );
  }
}
