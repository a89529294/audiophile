import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import classes from "./styles/App.module.css";

import Home from "./components/pages/Home.jsx";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
