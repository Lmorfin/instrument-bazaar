import React from "react";
import { Product, FooterBanner } from "../../components";
import { client } from "../../lib/client";

const Home = ({ product }) => {
  return (
    <>
      <div className="hero-content">
        <div className="rc">
          <h1>Music Delivered.</h1>
          <p>Rock on with our vintage gear, delivered to your doorstep.</p>
          <h1>Shop Now</h1>
        </div>
      </div>

      <div className="products-heading">
        <h2>Our Current Catalog</h2>
        <p>We are a small family-owned business</p>
        <p>Contact us to sell your instruments!</p>
      </div>
      <div className="products-container">
        {product?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner />
    </>
  );
};

//grabs products from our sanity dashboard
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const product = await client.fetch(query);

  return {
    props: { product },
  };
};

export default Home;
