import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/favicon.png";

const Navbar = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const handleLogout = () =>{
      localStorage.removeItem('token');
      navigate('/login');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <img src={logo} alt="logo" style={{ height: "30px" }} />
      <Link className="navbar-brand" to="/">
        CloudNote
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li
            className={`nav-item  ${location.pathname === "/" ? "active" : ""}`}
          >
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item {`nav-item  ${location.pathname === '/about' ? 'active' : ''}`}">
            <Link className="nav-link " to="/about" tabIndex="-1" aria-disabled="true"
            >
              About Us
            </Link>
          </li>
        </ul>
      </div>
        {!localStorage.getItem('token')? <div className="d-flex">
        <Link className="btn btn-light mx-1" to="/login" role="button">Login</Link>
        <Link className="btn btn-light mx-1" to="/signup" role="button">Signup</Link>
        </div> : <button onClick={handleLogout} className="btn btn-light">Logout</button>  }
    </nav>
  );
};

export default Navbar;
