import React from "react";
import { Product, FooterBanner, HeroBanner } from "../../components";
import { client } from "../../lib/client";

const Home = ({ product, bannerData, heroData }) => {
  return (
    <>
      {/* <HeroBanner heroBanner={heroData.length && heroData[0]} /> */}
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
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

//grabs products from our sanity dashboard
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const product = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const heroQuery = '*[_type == "hero"]';
  const heroData = await client.fetch(heroQuery);

  console.log(heroData);

  return {
    props: { product, bannerData, heroData },
  };
};

export default Home;
