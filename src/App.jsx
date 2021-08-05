import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MediaQueryContext from "./contexts/MediaQueryContext";
import ShoppingCartContext from "./contexts/ShoppingCartContext";
import Home from "./components/pages/Home.jsx";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import Category from "./components/pages/Category";
import ScrollToTop from "./components/util/ScrollToTop";
import ProductDetail from "./components/pages/ProductDetail.jsx";

function App() {
  return (
    <MediaQueryContext>
      <ShoppingCartContext>
        <BrowserRouter>
          <Header />
          <ScrollToTop />
          <Switch>
            <Route exact path="/headphones">
              <Category categoryName="headphones" />
            </Route>
            <Route exact path="/earphones">
              <Category categoryName="earphones" />
            </Route>
            <Route exact path="/speakers">
              <Category categoryName="speakers" />
            </Route>
            <Route exact path="/products/:id">
              <ProductDetail />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </ShoppingCartContext>
    </MediaQueryContext>
  );
}

export default App;
