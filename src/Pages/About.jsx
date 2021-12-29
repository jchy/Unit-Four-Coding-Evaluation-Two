import styles from "./pages.module.css";

const About = () => {
    return (
      <div
        style={{
          // color: "white",
          fontSize: "16px"
        }}
      >
        <h3>Welcome to the site!!!</h3>
        <p>
          Owner of the site is B.Teach degree holder Graduate from REC Sonbhadra{" "}
        </p>
        <p>This website is being hosted and run by : Jaswant Chaudhary</p>
        <p>We care about your time that's why we make it as fast as possible</p>
        <p>Made in ❤️ with Jaswant Chaudhary</p>

         
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
          <button className={styles.homeBtn}>SUBSCRIBE</button>
        </div>
        <div>
          <h4>@STUDIO PROPER</h4>
        </div>
      </div>
    );
  };
  export default About;