import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import ProductCardDetails from './ProductCardDetails';

const Details = () => {
  // const { _id, productName, productImage, brandName, brandImage, productType, productPrice, productShortDescription, productFullDescription, productRating } = food || {}

  // const food = useLoaderData();
  // const {_id, productName, productImage, brandName, brandImage, productType, productPrice, productShortDescription, productFullDescription, productRating } = food || {};
  // console.log(food._id, productFullDescription, productPrice);
  // const handleAddToCart = () =>{
  //   const addCartItemArr = [];
  //   const addedItem = JSON.parse(localStorage.getItem('Added')); 
  //   addCartItemArr.push(food);
  //   localStorage.setItem('Added', JSON.stringify(addCartItemArr));
  //   swal("Good job!", "Products added successfully!", "success");
  // }


  const [food, setFood] = useState({});
    
    const {_id} = useParams();

    const foods = useLoaderData();
    
    useEffect(() => {
        const findFood = foods?.find((food) => food._id == _id);
        console.log(food._id);
        setFood(findFood)
        // setService(findService);

      }, [_id, foods]);
  return (
    <div>
      <ProductCardDetails food={food}></ProductCardDetails>
    </div>
    // <div>
    //   <h2 className="text-2xl">Details Page</h2>
    //   <div className="max-w-[1300px] mx-auto px-10 lg:px-0 my-10">
    //     <div>
    //       <div className="card w-full glass relative">
    //         <img src={productImage} className="w-full h-[500px] rounded-lg" alt="car!" />
    //       </div>
    //       <div className="py-10">
    //         <h2 className="text-4xl font-bold mb-4">{productName}</h2>
    //         <h2 className="text-4xl font-bold mb-4">{brandName}</h2>
    //         <p className="text-justify font-normal">{productFullDescription}</p>
    //         <p className="text-3xl font-bold my-3">Booking Money: ${productPrice}</p>
    //       </div>

    //       <button onClick={handleAddToCart} className="p-5 bg-black text-white w-full font-bold rounded-full">Add to Cart</button>
    //     </div>
    //   </div>

    // </div>
  );
};

export default Details;