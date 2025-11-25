export type OrderItem = {
  _id: string;
  productName: string;
  quantity: number;
  price: number;
};

export type OrderVendor = {
  _id: string;
  username: string;
  businessName: string;
  emailAddress: string;
  contactPersonName?: string;
  businessAddress?: string;
  city?: string;
  state?: string;
  pinCode?: string;
};

export type Order = {
  _id: string;
  items: OrderItem[];
  totalAmount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  orderDate: string;
  vendor: OrderVendor;
};

export type Vendor = {
  _id: string;
  businessAddress: string;
  businessDescription: string;
  businessName: string;
  businessType: string;
  city: string;
  contactPersonName: string;
  createdAt: string;
  emailAddress: string;
  orders: Order[]; // ✅ array of Order objects
  password: string;
  pinCode: string;
  state: string;
  termsAndConditions: boolean;
  updatedAt: Date;
  username: string;
};

export type User = {
  username: string;
  role: UserRole;
} & Partial<Vendor>;

export type UserRole = "vendor" | "admin";
