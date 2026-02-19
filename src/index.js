import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WishlistProvider } from "./context/WishlistContext.js";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
   <WishlistProvider>
      <App />
    </WishlistProvider>
  </BrowserRouter>
);
