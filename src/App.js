import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/React-Portfolio" component={About}/>
        <Route exact path="/React-Portfolio/contact" component={Contact}/>
        <Route exact path="/React-Portfolio/portfolio" component={Portfolio}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
