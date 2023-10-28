import React from 'react';
import { BsStarFill } from 'react-icons/bs';

const ProductCardDetails = ({ food }) => {
  const { _id, productName, productImage, brandName, brandImage, productType, productPrice, productShortDescription, productFullDescription, productRating } = food || {};

  const handleAddToCart = () => {
    const addFoodItemArr = [];
    const addItem = JSON.parse(localStorage.getItem('Add'))
    if (!addItem) {
      addFoodItemArr.push(food)
      localStorage.setItem('Add', JSON.stringify(addFoodItemArr))
      swal("Good job!", "Products added successfully!", "success");
    }

    else {
      const isExists = addItem.find(food => food._id == _id)

      if (!isExists) {
        addFoodItemArr.push(...addItem, food)
        localStorage.setItem('Add', JSON.stringify(addFoodItemArr))
        swal("Good job!", "Products added successfully!", "success");

      }
      else {

        swal("Error!", "No duplicate!", "error");
      }
    }


  }

  return (
    <div>
      <div>
        <h2 className="text-3xl text-center font-bold mt-10">Product Details </h2>
        <div className="max-w-[1300px] mx-auto lg:px-0 my-10">
          <div className="glass rounded-lg p-10">
            <div className="card w-full relative flex flex-row justify-around items-center ">
              <div>
                <img src={productImage} className="rounded-lg shadow-2xl" alt="car!" />
              </div>

              <div>
                <h2 className="text-4xl font-bold mb-4">Product Name: {productName}</h2>
                <h2 className="text-2xl font-bold mb-4 text-red-700">Brand Name{brandName}</h2>
                <p className="text-3xl font-bold my-3 text-green-700">Product Price: ${productPrice}</p>
                <div className="flex flex-row items-center">
                  <p className="text-2xl font-bold my-3 text-yellow-500 mr-2">Product Rating:</p><BsStarFill className="text-xl font-bold my-3 text-yellow-500 mr-2"></BsStarFill><p className="text-2xl font-bold my-3 text-yellow-500">{productRating} </p>
                </div>

              </div>
            </div>
            <div className="py-10">
              <h2 className="text-4xl font-bold mb-4">Product Description</h2>
              <p className="text-justify font-semibold">{productFullDescription} {productShortDescription}</p>

            </div>
            <button onClick={handleAddToCart} className="p-5 bg-black text-white w-full font-bold rounded-full">Add to Cart</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductCardDetails;