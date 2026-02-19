import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assests/image1.jpg";
import image2 from "../assests/image2.jpg";
import image3 from "../assests/image3.jpg";

const books = [
  { id: 1, title: "Think and Grow Rich", image: image1 },
  { id: 2, title: "The Mosquito", image: image2 },
  { id: 3, title: "Elon Musk", image: image3 },
];

function Home() {
  return (
    <div className="container mt-4">
      <h2>Books List</h2>
      <div className="row g-4">
        {books.map((book) => (
          <div key={book.id} className="col-md-3">
            <div className="card shadow-sm h-100 book-card">
              <img src={book.image} alt={book.title} className="card-img-top" />
              <div className="card-body text-center">
                <h6 className="card-title fw-bold">{book.title}</h6>
                <Link to={`/book/${book.id}`}>
                  <button className="btn btn-primary mt-2">View</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
