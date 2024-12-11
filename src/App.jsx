import React,{useState} from "react";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Products from "./Products";

import Home from "./Home";

const App = () => {
const [isAuthenticated,setisAuthenticated] = useState(false)

const handleLogin = () =>{
  setisAuthenticated(true)
}

const handleLogout = () =>{
  setisAuthenticated(false)
}

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/products">
                Products
              </Link>
              {!isAuthenticated ? (
                <Link className="nav-link" to="/login">
                Login
              </Link> 
              ): (
                <button className="nav-link" onClick={handleLogout}>Logout</button>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login  onLogin={handleLogin}/>}/>
        <Route path="/products"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Products onLogout = {handleLogout}/>

          </ProtectedRoute>
        }
        />

      
      </Routes>
    </Router>
  );
};

function ProtectedRoute({isAuthenticated,children}){
  return isAuthenticated ? children : <Navigate to="/login"/> 
}
export default App;
