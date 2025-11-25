"use client";

import { useEffect, useState, useMemo } from "react";
import { Order } from "@/types/Types"; // create this file (shown below)

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [search, setSearch] = useState("");
  const [vendorFilter, setVendorFilter] = useState("all");
  const [sortKey, setSortKey] = useState<"date" | "amount">("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [page, setPage] = useState(1);

  const PAGE_SIZE = 10;

  // Fetch Orders
  useEffect(() => {
    async function loadOrders() {
      const res = await fetch("/api/order");
      const data = await res.json();
      if (data.success) setOrders(data.orders);
    }
    loadOrders();
  }, []);

  // Extract list of vendors for dropdown filter
  const uniqueVendors = useMemo(() => {
    const names = orders.map((o) => o.vendor.businessName);
    return ["all", ...new Set(names)];
  }, [orders]);

  // Filter + Search + Sort + Pagination
  const filteredOrders = useMemo(() => {
    let result = [...orders];

    // 🔍 Search (product or vendor)
    result = result.filter((order) => {
      const searchText = search.toLowerCase();
      return (
        order.vendor.businessName.toLowerCase().includes(searchText) ||
        order.items.some((i) =>
          i.productName.toLowerCase().includes(searchText)
        )
      );
    });

    // 📌 Filter by Vendor
    if (vendorFilter !== "all") {
      result = result.filter(
        (o) => o.vendor.businessName === vendorFilter
      );
    }

    // ↕ Sort
    result.sort((a, b) => {
      if (sortKey === "date") {
        const A = new Date(a.createdAt).getTime();
        const B = new Date(b.createdAt).getTime();
        return sortOrder === "asc" ? A - B : B - A;
      }
      if (sortKey === "amount") {
        return sortOrder === "asc"
          ? a.totalAmount - b.totalAmount
          : b.totalAmount - a.totalAmount;
      }
      return 0;
    });

    return result;
  }, [orders, search, vendorFilter, sortKey, sortOrder]);

  const paginatedOrders = filteredOrders.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  async function updateOrderStatus(orderId: string, newStatus: string) {
    try {

      const response = await fetch(`/api/order/${orderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await response.json();

      if (data.success) {
        setOrders(prev =>
          prev.map(order => order._id === orderId ? { ...order, status: newStatus } : order)
        );
      } else {
        console.error("Failed to update order status:", data.error);
      }

    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Admin Orders Dashboard</h1>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4 bg-white p-4 shadow rounded-xl">

        {/* Search */}
        <input
          type="text"
          placeholder="Search by vendor or product..."
          className="border p-2 rounded-lg w-full md:w-1/3"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />

        {/* Filter Vendor */}
        <select
          className="border p-2 rounded-lg"
          value={vendorFilter}
          onChange={(e) => {
            setVendorFilter(e.target.value);
            setPage(1);
          }}
        >
          {uniqueVendors.map((vendor) => (
            <option key={vendor} value={vendor}>
              {vendor === "all" ? "All Vendors" : vendor}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          className="border p-2 rounded-lg"
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value as any)}
        >
          <option value="date">Sort by Date</option>
          <option value="amount">Sort by Amount</option>
        </select>

        <select
          className="border p-2 rounded-lg"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as any)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

      </div>

      {/* Table */}
      <div className="overflow-auto shadow rounded-xl">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-left">
            <tr>
              {/* <th className="p-3 border">Order ID</th> */}
              <th className="p-3 border">Vendor</th>
              <th className="p-3 border">Items</th>
              <th className="p-3 border">Amount</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Date</th>
            </tr>
          </thead>

          <tbody>
            {paginatedOrders.map((order) => (
              <tr key={order._id} className="hover:bg-gray-50">
                {/* <td className="p-3 border">{order._id}</td> */}
                <td className="p-3 border">{order.vendor.businessName}</td>
                <td className="p-3 border">
                  {order.items.map((i) => (
                    <div key={i._id}>
                      {i.productName} × {i.quantity}
                    </div>
                  ))}
                </td>
                <td className="p-3 border">₹{order.totalAmount}</td>
                <td className="p-3 border">
                  <select
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                    className="border p-2 rounded"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
                <td className="p-3 border">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}

            {paginatedOrders.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="text-center p-6 text-gray-500"
                >
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4">
        <button
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-40"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-40"
          disabled={page * PAGE_SIZE >= filteredOrders.length}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
