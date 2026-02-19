import React from "react";

function BookCard({ image, title }) {
  return (
    <div className="col-md-3">
      <div className="card shadow-sm h-100 book-card">
        <img
          src={image}
          className="card-img-top book-img"
          alt={title}
        />
        <div className="card-body text-center">
          <h6 className="card-title fw-bold">{title}</h6>
        </div>
      </div>
    </div>
  );
}
export default BookCard;
