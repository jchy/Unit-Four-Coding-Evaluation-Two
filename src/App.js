import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <ShoppingCartIcon />
    </div>
  );
}
