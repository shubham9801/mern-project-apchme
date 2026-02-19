import React from "react";
import { useNavigate } from "react-router-dom";

function Books({ book }) {
  const navigate = useNavigate();

  return (
    <div className="col-md-3">
      <div
        className="card shadow-sm h-100 book-card"
        onClick={() => navigate(`/book/${book.id}`, { state: book })}
        style={{ cursor: "pointer" }}
      >
        <img
          src={book.image}
          className="card-img-top book-img"
          alt={book.title}
        />
        <div className="card-body text-center">
          <h6 className="card-title fw-bold">{book.title}</h6>
        </div>
      </div>
    </div>
  );
}

export default Books;
