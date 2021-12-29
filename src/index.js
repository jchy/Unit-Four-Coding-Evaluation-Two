import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./Context/CartContext";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CartContextProvider>
  </StrictMode>,
  rootElement
);