import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Product = () => {
  const [product, setProduct] = useState([])


    // const {brand_name} = useParams()
    
    const products = useLoaderData()
    const {_id, productName, productImage, brandName, brandImage, productType, productPrice, productShortDescription, productFullDescription, productRating} = products || {}
    // console.log(products.brandName);
    

    useEffect(() => {

    
        const findProduct = products?.find((product) => product.brandName === "Coca-Cola");
        
        setProduct(findProduct);
      
      }, [brandName, products]);

  return (
    <div className="mx-5 my-10">
      <h2 className="text-2xl font-bold">Product Page</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <img className="w-full h-[500px] mx-auto" src="https://i.ibb.co/hDxbY4x/download.jpg" alt="" />
      <img className="w-full h-[500px] mx-auto" src="https://i.ibb.co/cLHsyDG/download.jpg" alt="" />
      <img className="w-full h-[500px] mx-auto" src="https://i.ibb.co/C8d0KYd/OIP.jpg" alt="" />
      <img className="w-full h-[500px] mx-auto" src="https://i.ibb.co/HtQQTj4/download.jpg" alt="" /></div>
      {product.brandImage}
    </div>
  );
};

export default Product;