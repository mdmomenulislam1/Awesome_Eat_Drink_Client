import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({food}) => {
  const { _id, productName, productImage, brandName, brandImage, productType, productPrice, productShortDescription, productFullDescription, productRating } = food || {}
  console.log(food);
  return (
    <div>
      <div key={food._id} className="flex justify-center items-center shadow-2xl gap-4 h-[300px] bg-green-800 text-white rounded-lg ">
        <div>
          <img src={productImage} alt="" className="h-full rounded-lg" />
        </div>
        <div className="mt-5 px-5">
          <p className="text-xl font-bold mt-2">Product: {productName}</p>
          <p className="text-xl font-semibold "> Brand: {brandName}</p>
          <p className="font-bold mb-2"> Type: {productType}</p>
          <p className="text-3xl font-bold">Price: $ {productPrice}</p>
          <p className="text-3xl font-bold">Rating {productRating}</p>
          <div className="flex gap-3 my-4">
            <Link to={`/prod/${_id}`}>
              <button className="px-5 py-2 rounded-lg bg-white text-green-800 text-xl font-bold">Details</button>
            </Link>
            <Link to={`/products/${_id}`}>
              <button className="px-5 py-2 rounded-lg bg-white text-green-800 text-xl font-bold">Update</button>
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;