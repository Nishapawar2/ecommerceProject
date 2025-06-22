import React from "react";
import styles from "./Footer.module.css";
import usd from "../images/USD.png";
import linked from "../images/a.png";
import insta from "../images/Insta.png";
import pay1 from "../images/pay1.png";
import pay2 from "../images/pay2.png";
import pay3 from "../images/pay3.png";
import pay4 from "../images/pay4.png";
import pay5 from "../images/pay5.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.upper}>
        <div className={styles.leftpart}>
          <h2>BE THE FIRST TO KNOW</h2>
          <p>Sign up for updates from mettā muse.</p>
          <input type="text" placeholder="Enter your e-mail..." />
          <button>SUBSCRIBE</button>
        </div>
        <div className={styles.rightpart}>
          <h2>CONTACT US</h2>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h2>CURRENCY</h2>
          <img src={usd} alt="USD" />
          <p>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      <div className={styles.lower}>
        <div className={styles.lowerleftpart}>
          <div className={styles.leftpart1}>
            <h3>mettā muse</h3>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div className={styles.leftpart1}>
            <h3>Quick Links</h3>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
           
          </div>
        </div>
        <div className={styles.lowerrightpart}>
          <div className="followus">
            <h3>Follow Us</h3>
            <img src={linked} alt="" style={{ marginRight: "10px" }} />
            <img src={insta} alt="" />
          </div>

          <div className="payments">
            <h3>mettā muse Accepts</h3>
            <img src={pay1} alt="" style={{ marginRight: "10px" }} />
            <img src={pay2} alt="" style={{ marginRight: "10px" }} />
            <img src={pay3} alt="" style={{ marginRight: "10px" }} />
            <img src={pay4} alt="" style={{ marginRight: "10px" }} />
            <img src={pay5} alt="" style={{ marginRight: "10px" }} />
           
          </div>
        </div>
      </div>
      <p style={{ textAlign: "center" }}>
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
