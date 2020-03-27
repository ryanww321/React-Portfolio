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
        {/* <Wrapper>
          <Route exact path="/" component={Search} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/search" component={Search} />
        </Wrapper> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
