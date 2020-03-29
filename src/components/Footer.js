import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer class="site-footer bg-dark fixed-bottom">
            <div class="container">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <Link class="nav-link" href="/React-Portfolio/portfolio">Portfolio</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" href="/React-Portfolio/contact">Contact</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active" href="/React-Portfolio">About</Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/ryanww321" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.linkedin.com/in/ryan-whitcomb-92561530/" target="_blank" rel="noopener noreferrer"><i
                            class="fa fa-linkedin"></i></a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;