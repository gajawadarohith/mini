// src/components/ProductDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css'


const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; //we can add a loading state here
  }
  return (
    <div>
      <div>
      <h1 className='prod-det'>Product Details</h1>
      </div>
    <div className="product-detail">
      <div className='image details'>
      <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <div className="product-details container">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        {product.rating && (
          <p className="product-rating">Rating: {product.rating.rate}</p>
        )}
        
      </div>
    </div>
    </div>
  );
};

export default ProductPage;