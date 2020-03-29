import React from "react";
import { Link } from "react-router-dom";
import "../App.css";


function Navbar() {
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <Link class="navbar-brand" href="/React-Portfolio">Ryan Whitcomb</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <Link class="nav-item nav-link" href="/React-Portfolio/portfolio">Portfolio</Link>
                <Link class="nav-item nav-link" href="/React-Portfolio/contact" tabindex="-1"
                    aria-disabled="true">Contact</Link>
                <Link class="nav-item nav-link active" href="/React-Portfolio">About</Link>
            </div>
            <div class="navbar-nav ml-md-auto">
                <Link class="nav-item nav-link" href="https://github.com/ryanww321" target="_blank"><i class="fa fa-github"
                        aria-hidden="true"></i></Link>
                <Link class="nav-item nav-link" href="https://www.linkedin.com/in/ryan-whitcomb-92561530/"
                    target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></Link>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;