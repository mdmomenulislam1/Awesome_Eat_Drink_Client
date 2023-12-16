import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import ProductCardDetails from './ProductCardDetails';

const Details = () => {
 
  const [food, setFood] = useState({});
    
    const {_id} = useParams();

    const foods = useLoaderData();
    
    useEffect(() => {
        const findFood = foods?.find((food) => food._id == _id);
       
        console.log(findFood);
        setFood(findFood)
       
      }, [_id, foods]);
  return (
    <div>
      <ProductCardDetails food={food}></ProductCardDetails>
    </div>
   
  );
};

export default Details;