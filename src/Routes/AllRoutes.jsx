import { Route } from "react-router-dom";
import Products from "../Pages/Products";
import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetails";
import About from "../Pages/About";
import Admin from "../Pages/Admin";
import Account from "../Pages/Account";
import Search from "../Pages/Search";
import Cart from "../Pages/Cart";

const AllRoutes = () => {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/products">
        <Products />
      </Route>

      <Route exact path="/products/:id">
        <ProductDetails />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>

      <Route exact path="/admin">
        <Admin />
      </Route>

      <Route exact path="/account">
        <Account />
      </Route>

      <Route exact path="/search">
        <Search />
      </Route>

      <Route exact path="/cart">
        <Cart />
      </Route>
    </div>
  );
};

export default AllRoutes;