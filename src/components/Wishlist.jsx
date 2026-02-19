import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

function Wishlist() {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div className="container mt-4">
      <h2>My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        <div className="row">
          {wishlist.map((book) => (
            <div className="col-md-3 mb-3" key={book.id}>
              <div className="card">
                <img src={book.img} className="card-img-top" alt={book.title} />
                <div className="card-body">
                  <h5>{book.title}</h5>
                  <p>{book.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
