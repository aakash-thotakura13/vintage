import Description from "@/app/components/Description";
import Heading from "@/app/components/Heading";

const orders = [
  {
    orderId: "ORD-001",
    orderDate: "2024-01-15",
    items: ["Free - Range Chicken(50 kgs)", "Farm Fresh Eggs(10 dozen)"],
    totalPrice: 649.50,
    status: "	Delivered	",
  },
  {
    orderId: "ORD-002",
    orderDate: "2024-01-22",
    items: ["Organic Turkey(25 kgs)", "Free - Range Chicken(30 kgs)",],
    totalPrice: 574.25,
    status: "In Transit	",
  },
  {
    orderId: "ORD-003",
    orderDate: "2024-01-28",
    items: ["Farm Fresh Eggs(20 dozen)", "Organic Duck(15 kgs)",],
    totalPrice: 398.75,
    status: "Processing	",
  },
];


export default function OrdersPage() {
  return (
    <section>
      <Heading title="Order History" />
      <Description title="You have not placed any orders yet." />

      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            orders.map((order, id) => {
              return (
                <tr key={id} style={{ fontSize: "0.8em" }}>
                  <td>{order.orderId}</td>
                  <td>{order.orderDate}</td>
                  <td>{order.items.map((item, id) => <p key={id}>{item}</p>)}</td>
                  <td>₹ {order.totalPrice}</td>
                  <td>{order.status}</td>
                  <td>
                    <button style={{ border: "1px solid goldenrod", color: "goldenrod", padding: "0.25em 0.5em", borderRadius: "0.5em" }}>View Details</button>
                    <button style={{ backgroundColor: "goldenrod", color: "white", padding: "0.25em 0.5em", borderRadius: "0.5em" }}>Download</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </section>
  )
}



