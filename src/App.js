import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import PlacesInfo from "./pages/PlacesInfo";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Services" component={Services} />
          <Route path="/Products" component={Products} />
          <Route path="/Sign-up" component={SignUp} />
          <Route path="/PlacesInfo" component={PlacesInfo} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
