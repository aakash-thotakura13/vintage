import mongoose, { Schema } from "mongoose";

const VendorSchema = new Schema(
  {
    businessName: { type: String, required: true },
    contactPersonName: { type: String, required: true },
    emailAddress: { type: String, required: true, unique: true },
    businessType: { type: String },
    businessAddress: { type: String, required: true },
    city: { type: String },
    state: { type: String },
    pinCode: { type: String },
    businessDescription: { type: String },
    termsAndConditions: { type: Boolean, required: true },

    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    orders: { type: [mongoose.Schema.Types.ObjectId], ref: "Order", default: [] },
  },
  { timestamps: true }
);

// ✅ Delete old cached model to avoid "passwordHash" error
delete mongoose.models.Vendor;
const Vendor = mongoose.model("Vendor", VendorSchema);
export default Vendor;
