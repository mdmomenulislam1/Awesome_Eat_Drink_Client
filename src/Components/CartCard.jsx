import React from 'react';

const CartCard = ({ serviceItem }) => {
    const { _id, productName, productImage, brandName, brandImage, productType, productPrice, productShortDescription, productFullDescription, productRating } = serviceItem || {};
    return (
        <div className="text-xl px-8 md:px-8 lg:px-20 my-4 border rounded-lg p-3">
            <li className="list-decimal ">
                <div className="flex flex-row justify-evenly items-center">
                   <td className="">{productName}</td> 
                   <td className=""><img src={productImage} alt="" className="w-[100px] h-[50px]" /></td> 
                   <td className="">{brandName}</td> 
                   <td className="">{productType}</td> 
                   <td className="">$ {productPrice}</td> 
                   
                </div>
            </li>
        </div>
    );
};

export default CartCard;