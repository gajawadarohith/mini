// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductCard from './ProductCard';
import ProductPage from './ProductPage'; 
import './ProductList.css';


const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        const selectedProducts=data.slice(8,20);//using only selected products to display
        setProducts(selectedProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);

  return (

    <div className="product-list">
      <div className="product-list">
    </div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <Routes>
        <Route path="/product/:id" element={<ProductPage products={products} />} />
        
      </Routes>
    </div>
  );
};

export default ProductList;

