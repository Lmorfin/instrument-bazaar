import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const FooterBanner = ({}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <h2>Sell to us!</h2>
          <h3>Grand Opening!</h3>
          <p>Contact us at: (000)000-0000</p>
          <h2>fakewebsite@fakeemail.com</h2>
        </div>
        <div className="right">
          <p>The Vintage Bazaar of Instruments</p>
          <h3>Seasonal Sales</h3>
          <p>Hours of Operation:</p>
          <p>Monday - Friday</p>
          <p>8:00am - 5:00pm</p>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
