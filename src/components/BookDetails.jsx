import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";
import image1 from "../assests/image1.jpg";
import image2 from "../assests/image2.jpg";
import image3 from "../assests/image3.jpg";

const books = [
  { id: 1, title: "Think and Grow Rich", author: "Napoleon Hill", genre: "Business", price: 100, img: image1 },
  { id: 2, title: "The Mosquito", author: "Timothy C. Winegard", genre: "Nonfiction", price: 130, img: image2 },
  { id: 3, title: "Elon Musk", author: "Walter Isaacson", genre: "Biography", price: 130, img: image3 },
];

function BookDetails() {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));
  const { addToWishlist } = useContext(WishlistContext);
  const navigate = useNavigate();

  if (!book) return <h2>Book Not Found</h2>;

  const handleAddWishlist = () => {
    addToWishlist(book);
    navigate("/wishlist"); // redirect to wishlist page
  };

  return (
    <div className="page-container">
      <h2>{book.title}</h2>
      <img src={book.img} alt={book.title} width="200" />
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Price:</strong> ${book.price}</p>
      <button className="btn-purple" onClick={handleAddWishlist}>Add to Wishlist</button>
    </div>
  );
}

export default BookDetails;
