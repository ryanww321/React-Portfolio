import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <Link className="navbar-brand" to="/">
                Ryan Whitcomb
      </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/index"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Home
            </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/signup"
                            className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
                        >
                            Sign Up
            </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a class="navbar-brand" href="/Responsiveness-Portfolio/index.html">Ryan Whitcomb</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-md-auto">
                <a class="nav-item nav-link active" href="/Responsiveness-Portfolio/index.html">About<span
                        class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="/Responsiveness-Portfolio/portfolio.html">Portfolio</a>
                <a class="nav-item nav-link" href="/Responsiveness-Portfolio/contact.html" tabindex="-1"
                    aria-disabled="true">Contact</a>
            </div>
        </div>
    </nav>