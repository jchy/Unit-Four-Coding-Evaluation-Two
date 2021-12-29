import styles from "./pages.module.css";

const Account = () => {
  return (
    <div>
      <div
        className={styles.homeBgImg}
        style={{ backgroundImage: `url('/images/bg1.png')` }}
      >
        <div style={{ textAlign: "right", paddingTop: "200px" }}>
          <h2>Apple Launch Range</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "right",
              gap: "1rem",
            }}
          >
            <div>
              <button className={styles.homeBtn}>SHOP THE RANGE</button>
            </div>
            <div>
              <button className={styles.homeBtn}>PRESS RELEASE</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3>Created by Proper, for your favourite tech.</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ lineHeight: "5px" }}>
            <div>
              <img
                src="/images/chargeKit.png"
                alt="img"
                height="300px"
                width="300px"
              />
            </div>
            <h4>iPhone 13 MagSafe Charging Kit</h4>
            <p>$102</p>
          </div>
          <div style={{ lineHeight: "5px" }}>
            <div>
              <img
                src="/images/caseKit.png"
                alt="img"
                height="300px"
                width="300px"
              />
            </div>
            <h4>iPhone 13 MagSafe Charging Kit</h4>
            <p>$102</p>
          </div>
          <div style={{ lineHeight: "5px" }}>
            <div>
              <img
                src="/images/properKit.png"
                alt="img"
                height="300px"
                width="300px"
              />
            </div>
            <h4>iPhone 13 MagSafe Charging Kit</h4>
            <p>$102</p>
          </div>
          <div style={{ lineHeight: "5px" }}>
            <div>
              <img
                src="/images/ringKit.png"
                alt="img"
                height="300px"
                width="300px"
              />
            </div>
            <h4>iPhone 13 MagSafe Charging Kit</h4>
            <p>$102</p>
          </div>
        </div>
      </div>
      <div>
        <button className={styles.viewBtn}>VIEW THE COLLECTION</button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            backgroundImage: `url('/images/maCbookAir.jpeg')`,
            height: "450px",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 600px",
            paddingTop: "200px",
            resize: "both",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10rem",
              color: "white",
              fontSize: "22px",
              fontWeight: 700,
            }}
          >
            <div style={{ textAlign: "left" }}>
              <h4>Shop</h4>
              <h2>Apple Products</h2>
              <div>
                <button className={styles.homeBtn}>VIEW RANGE</button>
              </div>
            </div>
            <div style={{ textAlign: "left" }}>
              <h4>Shop</h4>
              <h2>Proper Accessories</h2>
              <div>
                <button className={styles.homeBtn}>VIEW RANGE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", color: "gray", fontSize: "14px", gap:"2rem", paddingLeft: "50px", paddingRight: "50px"}}>
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
          <button className={styles.homeBtn}>SUBSCRIBE</button>
        </div>
        <div>
          <h4>@STUDIO PROPER</h4>
        </div>
    </div>
  );
};

export default Account;
