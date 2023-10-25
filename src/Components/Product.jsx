import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Product = () => {
  const [product, setProduct] = useState([])


    // const {brand_name} = useParams()
    
    const products = useLoaderData()
    const {_id, productName, productImage, brandName, brandImage, productType, productPrice, productShortDescription, productFullDescription, productRating} = products || {}
    // console.log(products.brandName);
    

    AOS.init({
      duration: 800,  // Animation duration in milliseconds
      offset: 200,    // Offset (in pixels) from the bottom of the viewport
      easing: 'ease', // Animation timing function
    });

    useEffect(() => {

    
        const findProduct = products?.find((product) => product.brandName === "Coca-Cola");
        
        setProduct(findProduct);
      
      }, [brandName, products]);

  return (
    <div className="mx-5 my-10">
      <h2 className="text-2xl font-bold">Product Page</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <img data-aos="fade-up" className="w-full h-[500px] mx-auto" src="https://i.ibb.co/hDxbY4x/download.jpg" alt="" />
      <img data-aos="zoom-out" className="w-full h-[500px] mx-auto" src="https://i.ibb.co/cLHsyDG/download.jpg" alt="" />
      <img data-aos="fade-down" className="w-full h-[500px] mx-auto" src="https://i.ibb.co/C8d0KYd/OIP.jpg" alt="" />
      <img data-aos="zoom-in" className="w-full h-[500px] mx-auto" src="https://i.ibb.co/HtQQTj4/download.jpg" alt="" /></div>
      {product.brandImage}
    </div>
  );
};

export default Product;