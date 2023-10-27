import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Products = () => {
  const foods = useLoaderData();
  // const {_id, productName, productImage, brandName, brandImage, productType, productPrice, productShortDescription, productFullDescription, productRating} = products || {}
  return (
    <div className="mx-10 my-10">
      <h2 className="text-3xl font-bold">All Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          foods?.map((food) => (
            <div key={food._id} className="flex justify-center items-center shadow-xl my-5 gap-4 bg-yellow-800 rounded-lg p-5">
              <div>
              <img src={food.productImage} alt="" className="h-full rounded-lg" />
              </div>
              <div className="p-5">
                <p className="text-3xl font-bold mb-2">{food.productName}</p>
                <p className="text-2xl font-bold mb-2">{food.brandName}</p>
                <p className="text-2xl font-bold mb-2">{food.productType}</p>
                <p className="text-3xl font-bold mb-2">$ {food.productPrice}</p>
                <p className="text-3xl font-bold mb-2">Rating {food.productRating}</p>
                <div className="flex gap-3">
                <Link to={`/products/${food._id}`}>
                  <button className="btn text-3xl font-bold">Details</button>
                  </Link>
                  <Link to={`/products/${food._id}`}>
                    <button className="btn text-3xl font-bold">Update</button>
                  </Link>
                </div>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Products;