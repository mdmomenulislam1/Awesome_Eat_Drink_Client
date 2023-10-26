import React from 'react';
import Banner from './Banner';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
  const brands = useLoaderData();
  // const { _id, brand, brand_img } = brands || {};
  // console.log(brands);
  return (
    <div className="mx-5">
      <Banner></Banner>

      <h2 className="text-3xl font-bold text-center mt-10">All Brands</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  mx-5 gap-10 mb-10 mt-4">


        {
          brands?.map((brandItem) => (
            <Link to={`/brands/${brandItem.brand}`}>
              <div key={brandItem.brand} brandItem={brandItem} className="flex shadow-2xl rounded-xl bg-white h-[300px] items-center">
                
                <img src={brandItem.brand_img} alt=""  className="h-full w-[400px] rounded-lg shadow-lg "/>
                <h1 className="text-4xl font-bold text-purple-800 mx-auto">{brandItem.brand}</h1>
                
              </div>
              </Link>
          ))
        }

      </div>

      
    </div>
  );
};

export default Home;