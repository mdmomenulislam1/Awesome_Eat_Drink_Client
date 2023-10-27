import React from 'react';

const CartCard = ({serviceItem}) => {
    const {_id, productName, productImage, brandName, brandImage, productType, productPrice, productShortDescription, productFullDescription, productRating } = serviceItem || {};
    return (
        <div>
            <div className="overflow-x-auto gap-5 my-2 py-2 flex justify-around items-center">

                <p>{productName}</p>
                <p>{brandName}</p>
                <p>{productPrice}</p>
                <p>{_id}</p>


            </div>
        </div>
    );
};

export default CartCard;