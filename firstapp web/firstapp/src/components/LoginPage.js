// src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = formData;
    if (name && email && phone) {
      setIsLoggedIn(true); 
      navigate('/home'); 
    } else {
      console.log('Please fill in all fields');
    }
  };

  return (
    <div className="login-page">
      <h2>Login Page</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email (Gmail):</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email (Gmail)" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
