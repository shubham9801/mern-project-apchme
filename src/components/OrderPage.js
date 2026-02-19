import { useLocation } from "react-router-dom";
import OrderNavbar from "./OrderNavbar";

function OrderPage() {
  const location = useLocation();
  const book = location.state;

  const price = book?.price || 0;
  const total = price + 15;

  return (
    <>
      <OrderNavbar />

      <div className="d-flex justify-content-center align-items-center"
           style={{ height: "90vh", backgroundColor: "#f2f2f2" }}>

        <div className="card shadow p-4" style={{ width: "400px" }}>
          <h4 className="text-center mb-3">Your order is almost Done!</h4>

          <input className="form-control mb-2" placeholder="Flat no" />

          <hr />

          <p>Book: {book?.title}</p>
          <p>Price: ${price}</p>
          <p>Delivery: $15</p>
          <p><strong>Total Amount: ${total}</strong></p>

          <button className="btn btn-primary w-100">
            Order
          </button>
        </div>
      </div>
    </>
  );
}

export default OrderPage;
