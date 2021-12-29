import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Components/navbar.module.css";
import styless from "./pages.module.css";
import {CartContext} from "../Context/CartContext";
import { useContext } from "react";

const fetchProducts = () => {
  return axios.get(
    "https://dynamic-route-server-products.herokuapp.com/products"
  );
};

const Products = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useContext(CartContext);

  const handleFetchProduct = async () => {
    try {
      setIsLoading(true);
      const { data } = await fetchProducts();
      setData(data);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleFetchProduct();
  }, []);

  const handleCart = (id) => {
    setCartItems([...cartItems,id]);
    console.log(cartItems);
  }

  if (isLoading) {
    return <div>...loading</div>;
  }
  return (
    <div>
      <h2 className={styles.welcomeMsg} style={{margin:"30px"}}>
        Purchase our Genuine & Brand new Products
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          flexWrap: "wrap",
          margin: "auto",
          justifyContent: "center",
          marginLeft: "100px",
          marginRight: "100px"
        }}
      >
        {data?.map((item) => {
          return (
            <>
              <div
                style={{
                  border: "1px solid gray",
                  background:"black",
                  color:"white",
                  borderRadius: "10px",
                  padding: "20px"
                }}
              >
                <img
                  src={item.url}
                  alt=""
                  width="200px"
                  height="200px"
                  style={{ marginTop: "20px" }}
                />
                <div>
                  <p style={{ color: "white" }}>{item.name}</p>
                  <div>
                     <button style={{ border: "1px solid white", width: "90px",height: "24px",marginBottom:"7px", cursor: "pointer",marginTop:"7px",borderRadius:"10px" }} onClick={()=>handleCart(item.id)}>Add to Cart</button>
                  </div>
                  <Link
                    to={`/products/${item.id}`}
                    className={styles.link}
                    style={{
                      fontSize: "16px",
                      color:"turquoise",
                      borderRadius: "10px",
                      cursor:"pointer"
                    }}
                  >
                    Show More Info
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>


    
     
      <div style={{ display: "flex", color: "gray", fontSize: "14px", gap:"2rem", paddingLeft: "50px", paddingRight: "50px", marginTop: "100px" }}>
        <div style={{textAlign:"left"}}>
          <h4>Australia's no.1 destination for tech & design</h4>
          <p>
            Founded on the principal that good design should be seamless and
            accessible to all; Studio Proper creates an evolving range of
            solutions and accessories that deliver great technology experiences,
            right to your doorstep.
          </p>
        </div>

        <div style={{textAlign:"left"}}>
          <h4>Studio Proper</h4>
          <p>
            Verified Customer Reviews Apple Authorised Reseller Buy Now Pay
            Later NDIS support available Proper x Architects Custom Solutions
            Your Brand on Our Products Privacy Policy
          </p>
        </div>

        <div style={{textAlign:"left"}}>
          <h4>Journal</h4>
          <p>
            All Articles BEST CHRISTMAS GIFT IDEAS FOR TECH LOVERS 2021 DogTag
            first batch shipping next week! 🚀🚀 Shop now in time for Christmas!
            Apple Unleashes new AirPods, MacBook Pro, HomePod Mini & more. Apple
            introduces new iPhone 13 range, iPad Mini, iPad 9th Generation and
            Watch 7 DogTag Update #4 - Production Samples
          </p>
        </div>
      </div>
        <div style={{textAlign:"left", marginLeft:"50px"}}>
          <h4>Newsletter</h4>
          <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
          <input type="text" placeholder="Enter your email address" style={{padding:"10px", width:"300px", height:"30px"}}/>
        </div>
        <div style={{textAlign:"left", marginLeft:"50px", marginTop:"20px"}}>
          <button className={styless.homeBtn}>SUBSCRIBE</button>
        </div>
        <div>
          <h4>@STUDIO PROPER</h4>
        </div>
    </div>
  );
};
export default Products;