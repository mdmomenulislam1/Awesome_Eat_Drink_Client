import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProductCard from './ProductCard';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Product = () => {
  const [product, setProduct] = useState([])

  const { brand } = useParams();
  // console.log(brand); 
  const products = useLoaderData();
  console.log(products);
  console.log(product);
  const { _id, productName, productImage, brandName, brandImage, productType, productPrice, productShortDescription, productFullDescription, productRating } = products || {}
  // console.log(products.brandName);

  AOS.init({
    duration: 800,  // Animation duration in milliseconds
    offset: 200,    // Offset (in pixels) from the bottom of the viewport
    easing: 'ease', // Animation timing function
  });

  useEffect(() => {
    const findProduct = products?.filter((product) => product.brandName === brand);
    console.log(findProduct);
    setProduct(findProduct);
    console.log(product);
  }, [brandName, products]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="">
      
      
      <Slider className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src="https://i.ibb.co/NYtB5df/9a405521d5d945f35127079812ada518.jpg" className="w-full h-full " />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="https://i.ibb.co/fHMNNR3/services-header-image.jpg" className="w-full h-full " />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src="https://i.ibb.co/JyB2LB8/soft-drink-banner-ads-ice-cubes-citrus-elements-d-illustration-141918175.webp" className="w-full h-full " />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src="https://i.ibb.co/4KgZhpt/R.jpg" className="w-full h-full " />
        </div>
      </Slider>
      
    
      <h2 className="text-2xl font-bold text-center my-10"> Brands Products</h2>
      {
        product.length !== 0 ? 
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 my-10">
        {

          product?.map((food) => <ProductCard key={food._id} food = {food}></ProductCard>)
        }
      </div>
      :
      <div>
        love
      </div>
      }
    </div>
  );
};

export default Product;