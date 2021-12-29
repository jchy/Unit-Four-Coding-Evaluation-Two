import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Components/navbar.module.css";
import styless from "./pages.module.css";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

const fetchProducts = () => {
  return axios.get(
    "https://dynamic-route-server-products.herokuapp.com/products"
  );
};

var addedToCartItems = [];
var totalItems = 0;
var cartItemDeatil = {};

const Cart = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  var [cartItems, setCartItems] = useContext(CartContext);
  var [itemFrequency, setItemFrequency] = useState({});
  var [totalItemState, setTotalItemState] = useState(totalItems);
  var [totalPrice, setTotalPrice] = useState(0);

  const handleFetchProduct = async () => {
    try {
      setIsLoading(true);
      const { data } = await fetchProducts();
      setData(data);
      var k = 0;
      cartItems.sort((a, b) => a - b);
      var i = 0;
      data.map((cartItem) => {
        while (cartItem.id === cartItems[i]) {
          totalPrice += cartItem.price;
          i++;
        }
      });
      setTotalPrice(totalPrice);

      totalItems = cartItems.length;
      setTotalItemState(totalItems);
      cartItemDeatil = {};
      // setCartItemDeatil({})
      for (let val in cartItems) {
        cartItemDeatil[cartItems[val]] =
          (cartItemDeatil[cartItems[val]] || 0) + 1;
        // setCartItemDeatil({...cartItemDeatil, val : ((cartItemDeatil[cartItems[val]] ||0)+1)});
      }
      setItemFrequency(cartItemDeatil);
      console.log(cartItemDeatil);

      cartItems = [...new Set(cartItems)];
      console.log(cartItems);
      addedToCartItems = [];

      data.filter((elem, i) => {
        if (elem.id === cartItems[k]) {
          addedToCartItems.push(elem);
          k++;
        }
      });
      console.log(addedToCartItems);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleFetchProduct();
  }, []);

  const handleItemRemoval = (key, price) => {
    if (cartItemDeatil[key] > 0) {
      cartItemDeatil[key] -= 1;
      totalItems -= 1;
      totalPrice -= price;
      setTotalItemState(totalItems);
      setTotalPrice(totalPrice);
    }
    itemFrequency = cartItemDeatil;
    setItemFrequency({ ...itemFrequency, ...cartItemDeatil });
  };

  const handleItemAddition = (key, price) => {
    console.log("fq2", itemFrequency);
    cartItemDeatil[key] += 1;
    totalItems += 1;
    totalPrice += price;
    setTotalItemState(totalItems);
    setTotalPrice(totalPrice);
    setItemFrequency({ ...itemFrequency, ...cartItemDeatil });
  };

  if (isLoading) {
    return <div>...loading</div>;
  }
  return (
    <div>
      <h2 className={styles.welcomeMsg} style={{ margin: "30px" }}>
        Following are the Items that you addded to cart
      </h2>
      <div style={{ display: "flex" }}>
        <div
          style={{
            margin: "30px",
          }}
        >
          {addedToCartItems?.map((item) => {
            return (
              <>
                <div
                  style={{
                    border: "1px solid gray",
                    background: "cornsilk",
                    color: "black",
                    borderRadius: "10px",
                    padding: "20px",
                    display: "flex",
                    marginBottom: "30px",
                    marginLeft: "50px",
                  }}
                >
                  <div>
                    <img
                      src={item.url}
                      alt=""
                      width="200px"
                      height="200px"
                      style={{ marginTop: "20px" }}
                    />
                  </div>
                  <div
                    style={{
                      marginTop: "50px",
                      textAlign: "left",
                      paddingLeft: "20px",
                      lineHeight: "30px",
                    }}
                  >
                    <p>Product Name : {item.name}</p>
                    <p>
                      Total number of {item.name} added to the Cart :{" "}
                      {itemFrequency[item.id]}
                    </p>
                    <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                      <button
                        style={{
                          height: "40px",
                          width: "40px",
                          borderRadius: "50%",
                          fontSize: "24px",
                          cursor: "pointer",
                          fontWeight: "900",
                          marginRight: "30px",
                        }}
                        onClick={() => handleItemRemoval(item.id, item.price)}
                      >
                        ➖
                      </button>
                      <button
                        style={{
                          height: "40px",
                          width: "40px",
                          borderRadius: "50%",
                          fontSize: "24px",
                          cursor: "pointer",
                          fontWeight: "900",
                        }}
                        onClick={() => handleItemAddition(item.id, item.price)}
                      >
                        ➕
                      </button>
                    </div>

                    <Link
                      to={`/products/${item.id}`}
                      className={styles.link}
                      style={{
                        fontSize: "16px",
                        color: "blue",
                        borderRadius: "10px",
                        cursor: "pointer",
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
        <div
          style={{
            textAlign: "left",
            height: "100px",
            marginTop: "50px",
            paddingTop: "100px",
            border: "1px solid gray",
            padding: "30px",
            background: "cornsilk",
            borderRadius: "10px",
          }}
        >
          <p>Total Items : {totalItemState} </p>
          <p>Total Price : {totalPrice}</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          color: "gray",
          fontSize: "14px",
          gap: "2rem",
          paddingLeft: "50px",
          paddingRight: "50px",
          marginTop: "100px",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <h4>Australia's no.1 destination for tech & design</h4>
          <p>
            Founded on the principal that good design should be seamless and
            accessible to all; Studio Proper creates an evolving range of
            solutions and accessories that deliver great technology experiences,
            right to your doorstep.
          </p>
        </div>

        <div style={{ textAlign: "left" }}>
          <h4>Studio Proper</h4>
          <p>
            Verified Customer Reviews Apple Authorised Reseller Buy Now Pay
            Later NDIS support available Proper x Architects Custom Solutions
            Your Brand on Our Products Privacy Policy
          </p>
        </div>

        <div style={{ textAlign: "left" }}>
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
      <div style={{ textAlign: "left", marginLeft: "50px" }}>
        <h4>Newsletter</h4>
        <p>
          Subscribe to receive updates, access to exclusive deals, and more.
        </p>
        <input
          type="text"
          placeholder="Enter your email address"
          style={{ padding: "10px", width: "300px", height: "30px" }}
        />
      </div>
      <div style={{ textAlign: "left", marginLeft: "50px", marginTop: "20px" }}>
        <button className={styless.homeBtn}>SUBSCRIBE</button>
      </div>
      <div>
        <h4>@STUDIO PROPER</h4>
      </div>
    </div>
  );
};
export default Cart;
