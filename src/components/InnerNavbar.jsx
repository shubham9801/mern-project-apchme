import React from "react";
import { Link, useNavigate } from "react-router-dom";

function InnerNavbar() {
  const navigate = useNavigate();   // ✅ Correct Hook

  const handleUserClick = () => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      navigate("/signup");   // First time user
    } else {
      navigate("/login");    // Already registered
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">BookStore</Link>

        <div className="navbar-nav ms-auto">
          <button 
            className="nav-link btn btn-link text-white"
            onClick={handleUserClick}
            style={{ textDecoration: "none" }}
          >
            User
          </button>

          <Link className="nav-link" to="/wishlist">Wishlist</Link>
          <Link className="nav-link" to="/logout">Logout</Link>
        </div>
      </div>
    </nav>
  );
}

export default InnerNavbar;
