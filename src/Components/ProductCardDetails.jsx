import React from 'react';

const ProductCardDetails = ({food}) => {
  const {_id, productName, productImage, brandName, brandImage, productType, productPrice, productShortDescription, productFullDescription, productRating } = food || {};
  
  const handleAddToCart = () =>{
    const addCartItemArr = [];
    const addedItem = JSON.parse(localStorage.getItem('Added')); 
    addCartItemArr.push(food);
    localStorage.setItem('Added', JSON.stringify(addCartItemArr));
    swal("Good job!", "Products added successfully!", "success");
  }
  
  return (
    <div>
      <h2 className="text-2xl">Product Card Details</h2>

      <div>
        <h2 className="text-2xl">Details Page</h2>
        <div className="max-w-[1300px] mx-auto px-10 lg:px-0 my-10">
          <div>
            <div className="card w-full glass relative">
              <img src={productImage} className="w-full h-[500px] rounded-lg" alt="car!" />
            </div>
            <div className="py-10">
              <h2 className="text-4xl font-bold mb-4">{productName}</h2>
              <h2 className="text-4xl font-bold mb-4">{brandName}</h2>
              <p className="text-justify font-normal">{productFullDescription}</p>
              <p className="text-3xl font-bold my-3">Price: ${productPrice}</p>
            </div>

            <button onClick={handleAddToCart} className="p-5 bg-black text-white w-full font-bold rounded-full">Add to Cart</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductCardDetails;