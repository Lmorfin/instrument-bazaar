import React from 'react'
import {client} from "../../lib/client"
import { Product, FooterBanner, HeroBanner } from "../../components";
const catalog = ({product}) => {

  return (
    <>
        <div className='catalog-container'>
        <div>
        <div className="products-container">
        {product?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
        </div>
        </div>
    
    </>
  )
}
export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const product = await client.fetch(query);
  
    // const bannerQuery = '*[_type == "banner"]';
    // const bannerData = await client.fetch(bannerQuery);
  
    // const heroQuery = '*[_type == "hero"]';
    // const heroData = await client.fetch(heroQuery);
  
    console.log(product)
  
    return {
      props: { product},
    };
  };

export default catalog