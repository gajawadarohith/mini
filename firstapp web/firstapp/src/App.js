// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import ProductList from './components/ProductList';
// import ProductPage from './components/ProductPage';
// import LoginPage from './components/LoginPage';
// import './App.css';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = () => {
//     Navigate(`/search/${searchTerm}`);
//   };

//   return (
//     <Router>
//       <div>
//       <div className="App search-bar">
//         <div className='search-container'>
//           <input
//             type="text"
//             className='search-input'
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button className='search-button' onClick={handleSearch}>Search</button>
//         </div>
//         </div>
//         <div>
//         <Routes>
//           {/* Render LoginPage initially */}
//           <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
//           {/* After successful login, render ProductList */}
//           {isLoggedIn ? (
//             <>
//               <Route path="/home" element={<ProductList />} />
//               <Route path="/product/:id" element={<ProductPage />} />
//             </>
//           ) : (
//             // If not logged in, redirect to login page
//             <Route path="*" element={<Navigate to="/" />} />
//           )}
//         </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes,  useNavigate } from 'react-router-dom';
// import ProductList from './components/ProductList';
// import { Navigate } from 'react-router'; 
// import ProductPage from './components/ProductPage';
// import './App.css';
// import LoginPage from './components/LoginPage';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
//           {isLoggedIn ? (
//             <>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/product/:id" element={<ProductPage />} />
//             </>
//           ) : (
//             <Route path="*" element={<Navigate to="/" />} />
//           )}
//         </Routes>
//       </div>
//     </Router>
//   );
// }
// const HomePage = () => {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = () => {
//     navigate(`/product/${searchTerm}`);
//   };
//   return (
//     <div className="home-page">   
//     <h1 className='home'>Home Page</h1>  
//       <div className='login-sty'>     
//       <a href="/login ">Sign In</a>
//       </div>
//       <div className="centered-search-bar">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       <ProductList />
//     </div>
//   );
// };

// export default App; 
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import ProductList from './components/ProductList';
// import ProductPage from './components/ProductPage';
// import LoginPage from './components/LoginPage';
// import ProductList from './components/ProductList';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
//           <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/" />} />
//           <Route path="/product/:id" element={<ProductPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
// src/App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import ProductList from './components/ProductList';
// import ProductPage from './components/ProductPage';
// import LoginPage from './components/LoginPage';
// import HomePage from './components/HomePage';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           {/* Render LoginPage initially */}
//           <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
//           {/* After successful login, render HomePage */}
//           {isLoggedIn ? (
//             <>
//               <Route path="/home" element={<HomePage />} />
//               <Route path="/product/:id" element={<ProductPage />} />
//             </>
//           ) : (
//             // If not logged in, redirect to login page
//             <Route path="*" element={<Navigate to="/" />} />
//           )}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import ProductList from './components/ProductList';
// import ProductPage from './components/ProductPage';
// import LoginPage from './components/LoginPage';
// import './App.css';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = () => {
//     // Navigate to search results page with the search term in the URL
//     // You can customize this navigation logic based on your app's requirements
//     Navigate(`/search/${searchTerm}`);
//   };

//   return (
//     <Router>
//       <div className="App">
//         {/* Search bar */}
//         <div className='search-container'>
//           <input
//             type="text"
//             className='search-input'
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button className='search-button'onClick={handleSearch}>Search</button>
//         </div>

//         <Routes>
//           {/* Render LoginPage initially */}
//           <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
//           {/* After successful login, render ProductList */}
//           {isLoggedIn ? (
//             <>
//               <Route path="/home" element={<ProductList />} />
//               <Route path="/product/:id" element={<ProductPage />} />
//             </>
//           ) : (
//             // If not logged in, redirect to login page
//             <Route path="*" element={<Navigate to="/" />} />
//           )}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductPage from './components/ProductPage';
import LoginPage from './components/LoginPage';
// import ProductPage from './components/ProductPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Render LoginPage initially */}
          <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          {/* After successful login, render HomePage */}
          {isLoggedIn ? (
            <>
              <Route path="/home" element={<ProductList/>} />
              <Route path="/product/:id" element={<ProductPage />} />
            </>
          ) : (
            // If not logged in, redirect to login page
            <Route path="*" element={<Navigate to="/" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
