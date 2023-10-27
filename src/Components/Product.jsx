import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProductCard from './ProductCard';

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

  return (
    <div className="mx-5 my-10">
      <h2 className="text-2xl font-bold">Product Page</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <img data-aos="fade-up" className="w-full h-[500px] mx-auto" src="https://i.ibb.co/hDxbY4x/download.jpg" alt="" />
        <img data-aos="zoom-out" className="w-full h-[500px] mx-auto" src="https://i.ibb.co/cLHsyDG/download.jpg" alt="" />
        <img data-aos="fade-down" className="w-full h-[500px] mx-auto" src="https://i.ibb.co/C8d0KYd/OIP.jpg" alt="" />
        <img data-aos="zoom-in" className="w-full h-[500px] mx-auto" src="https://i.ibb.co/HtQQTj4/download.jpg" alt="" /></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          product?.map((food) => <ProductCard key={food._id} food = {food}></ProductCard>
            // <div key={food._id} className="flex justify-center items-center shadow-xl my-5 gap-4 bg-yellow-800 rounded-lg p-5">
            //   <div>
            //     <img src={food.productImage} alt="" className="h-full rounded-lg" />
            //   </div>
            //   <div className="p-5">
            //     <p className="text-3xl font-bold mb-2">{food.productName}</p>
            //     <p className="text-2xl font-bold mb-2">{food.brandName}</p>
            //     <p className="text-2xl font-bold mb-2">{food.productType}</p>
            //     <p className="text-3xl font-bold mb-2">$ {food.productPrice}</p>
            //     <p className="text-3xl font-bold mb-2">Rating {food.productRating}</p>
            //     <div className="flex gap-3">
            //       <Link to={`/products/${food._id}`}>
            //         <button className="btn text-3xl font-bold">Details</button>
            //       </Link>
            //       <Link to={`/products/${food._id}`}>
            //         <button className="btn text-3xl font-bold">Update</button>
            //       </Link>

            //     </div>
            //   </div>

            // </div>
          )
        }
      </div>
    </div>
  );
};

export default Product;