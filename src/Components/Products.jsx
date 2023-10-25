import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
  const foods = useLoaderData();
  // const {_id, productName, productImage, brandName, brandImage, productType, productPrice, productShortDescription, productFullDescription, productRating} = products || {}
  return (
    <div className="mx-5 my-10">
      <h2 className="text-3xl font-bold">All Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {
        foods?.map((food) => (
          <div>
            <img src={food.productImage} alt="" />
            <p>{food.productName}</p>
            <p>{food.brandName}</p>
            <p>{food.productType}</p>
            <p>{food.productPrice}</p>
            <p>{food.productRating}</p>
            <button>Details</button>
            <button>Update</button>
            
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Products;