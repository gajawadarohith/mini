
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {/* <h1>Home Page</h1> */}
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-details">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">${product.price}</p>
          <p className='product-delivery'>Free Delivery </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
