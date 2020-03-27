import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer class="site-footer bg-dark fixed-bottom">
            <div class="container">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <Link class="nav-link" href="/Portfolio/portfolio.html">Portfolio</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" href="/Portfolio/contact.html">Contact</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active" href="/Portfolio/index.html">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" href="https://github.com/ryanww321" target="_blank"><i class="fa fa-github"
                            aria-hidden="true"></i></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" href="https://www.linkedin.com/in/ryan-whitcomb-92561530/" target="_blank"><i
                            class="fa fa-linkedin" aria-hidden="true"></i></Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;