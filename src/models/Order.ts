// models/Order.ts
import mongoose, { Schema, models } from "mongoose";

const OrderSchema = new Schema(
  {
    vendor: { type: Schema.Types.ObjectId, ref: "Vendor", required: true },
    items: [
      {
        productName: String,
        quantity: Number,
        price: Number,
      },
    ],
    totalAmount: { type: Number, required: true },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"],
      default: "Pending",
    },
    orderDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Order = models.Order || mongoose.model("Order", OrderSchema);
export default Order;
