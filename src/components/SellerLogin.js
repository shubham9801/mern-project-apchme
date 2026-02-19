import { Link } from "react-router-dom";

function SellerLogin() {
  return (
    <div 
      className="d-flex justify-content-center align-items-center"
      style={{ height: "90vh", backgroundColor: "#f2f2f2" }}
    >
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="mb-4 text-center">Login to Seller Account</h3>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>

        <button className="btn btn-primary w-100 mb-3">
          Log In
        </button>

        <p className="text-center">
          Don't have an account?{" "}
          <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default SellerLogin;
