import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ProductCard = ({food}) => {
  const { _id, productName, productImage, brandName, brandImage, productType, productPrice, productShortDescription, productFullDescription, productRating } = food || {}
  console.log(food);
  return (
    <div>
      <div key={food._id} className="flex justify-around items-center shadow-2xl gap-2 md:gap-4 lg:gap-5 h-[250px] bg-green-800 text-white rounded-lg ">
        <div>
          <img src={productImage} alt="" className="px-1 md:px-2 lg:px-3 h-[200px] w-[200px] rounded-3xl" />
        </div>
        <div className="mt-2 md:mt-3 lg:mt-5 px-2 md:px-3 lg:px-5">
          <p className=" font-bold mt-2">Product: {productName}</p>
          <p className=" font-semibold  text-red-300"> Brand: {brandName}</p>
          <p className="font-bold mb-2"> Type: {productType}</p>
          <p className="text-2xl text-gray-200 font-bold">Price: ${productPrice}</p>
          <div className="flex gap-2 items-center text-yellow-200 font-bold">
          <p className="">Rating: </p> <span >{productRating}</span> <span><BsStarFill></BsStarFill></span>
          </div>
          <div className="flex gap-3 my-4">
            <Link to={`/prod/${_id}`}>
              <button className="px-5 py-2 rounded-lg bg-yellow-800 text-white text-xl font-bold">Details</button>
            </Link>
            <Link to={`/products/${_id}`}>
              <button className="px-5 py-2 rounded-lg bg-yellow-800 text-white text-xl font-bold">Update</button>
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;