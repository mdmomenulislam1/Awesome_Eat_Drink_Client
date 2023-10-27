import React from 'react';

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
      else{
        
        swal("Error!", "No duplicate!", "error");
      }
    }


  }

  return (
    <div>
      <div>
        <h2 className="text-3xl text-center font-bold mt-10">Product Details </h2>
        <div className="max-w-[1300px] mx-auto px-10 lg:px-0 my-10">
          <div className="glass rounded-lg p-5">
            <div className="card w-full relative flex flex-row justify-around items-center ">
              <div>
                <img src={productImage} className="rounded-lg" alt="car!" />
              </div>

              <div>
                <h2 className="text-4xl font-bold mb-4">Product Name: {productName}</h2>
                <h2 className="text-4xl font-bold mb-4">Brand Name{brandName}</h2>
                <p className="text-3xl font-bold my-3">Product Price: ${productPrice}</p>
                <p className="text-3xl font-bold my-3">Product Rating: {productRating} out of 5</p>
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