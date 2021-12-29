import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Components/navbar.module.css";
import styless from "./pages.module.css";

const handlePostFetchProduct = (data) => {
  const config = {
    method: "post",
    url: "https://dynamic-route-server-products.herokuapp.com/products",
    data: data
  };
  return axios(config);
};

const Admin = () => {
  const [loading, setLoading] = useState(false);
  var [data, setData] = useState({});
  const [payload, setPayload] = useState({ name: "", price: 0, url: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    data = payload;
    handlePostFetchProduct(data);
  };

  const handleChange = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value
    });
  };

  if (loading) {
    return <div>...loading</div>;
  }
  return (
    <div>
      <form
        style={{
          border: "1px solid gray",
          width: "70%",
          margin: "auto",
          marginTop: "50px",
          padding: "20px",
          borderRadius: "20px",
          background:"whitesmoke"
        }}
        onSubmit={handleSubmit}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "20px"
          }}
        >
          <div>
            <input
              placeholder="Enter product name"
              type="text"
              style={{
                border: "none",
                background: "black",
                borderBottom: "3px solid white",
                fontSize: "16px",
                width: "80%",
                padding: "20px",
                color: "white"
              }}
              name="name"
              value={payload.name}
              onChange={handleChange}
              // onChange={()=>setPayload}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter the product price"
              style={{
                border: "none",
                background: "black",
                borderBottom: "3px solid white",
                fontSize: "16px",
                width: "80%",
                padding: "20px",
                color: "white"
              }}
              name="price"
              value={payload.price}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter product img url"
              style={{
                border: "none",
                background: "black",
                borderBottom: "3px solid white",
                fontSize: "16px",
                width: "80%",
                padding: "20px",
                color: "white"
              }}
              name="url"
              value={payload.url}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="submit"
              value="SUBMIT"
              style={{
                width: "150px",
                padding: "5px",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer"
              }}
            />
          </div>
        </div>
      </form>

      <div style={{ display: "flex", color: "gray", fontSize: "14px", gap:"2rem", paddingLeft: "50px", paddingRight: "50px", marginTop:"100px"}}>
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
export default Admin;