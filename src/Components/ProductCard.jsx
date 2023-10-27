import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({food}) => {
  const { _id, productName, productImage, brandName, brandImage, productType, productPrice, productShortDescription, productFullDescription, productRating } = food || {}
  console.log(food);
  return (
    <div>
      <h2 className="text-2xl">ProductCard </h2>
      <div key={food._id} className="flex justify-center items-center shadow-xl my-5 gap-4 bg-yellow-800 rounded-lg p-5">
        <div>
          <img src={productImage} alt="" className="h-full rounded-lg" />
        </div>
        <div className="p-5">
          <p className="text-3xl font-bold mb-2">{productName}</p>
          <p className="text-2xl font-bold mb-2">{brandName}</p>
          <p className="text-2xl font-bold mb-2">{productType}</p>
          <p className="text-3xl font-bold mb-2">$ {productPrice}</p>
          <p className="text-3xl font-bold mb-2">Rating {productRating}</p>
          <div className="flex gap-3">
            <Link to={`/products/${_id}`}>
              <button className="btn text-3xl font-bold">Details</button>
            </Link>
            <Link to={`/products/${food._id}`}>
              <button className="btn text-3xl font-bold">Update</button>
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;