import React from 'react';
import Banner from './Banner';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
  const brands = useLoaderData();
  // const { _id, brand, brand_img } = brands || {};
  // console.log(brands);
  return (
    <div className="mx-3 md:mx-6 lg:mx-10">
      <Banner></Banner>

      <h2 className="text-3xl font-bold text-center mt-10">All Brands</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-5 gap-10 mb-10 mt-4">


        {
          brands?.map((brandItem) => (
            <Link to={`/brands/${brandItem.brand}`}>
              <div key={brandItem.brand} brandItem={brandItem} className="p-5 flex shadow-2xl rounded-xl bg-purple-800 h-[200px] justify-center items-center">
                
                <img src={brandItem.brand_img} alt=""  className="h-[150px] w-[200px] rounded-lg shadow-lg "/>
                <h1 className="text-4xl font-bold text-white mx-auto">{brandItem.brand}</h1>
                
              </div>
              </Link>
          ))
        }

      </div>

      <h2 className="text-3xl font-bold text-center mt-10">Foods </h2>
      <section className="category">
        <h2>Food</h2>
        <div className="cards">
            <div className="card">
                <h3>Pizza</h3>
                <p>Discover the world's best pizza recipes.</p>
            </div>
            <div className="card">
                <h3>Sushi</h3>
                <p>Learn about the art of sushi making.</p>
            </div>
        </div>
    </section>

    <h2 className="text-3xl font-bold text-center mt-10">Foods </h2>
    <section className="category">
        <h2>Beverage</h2>
        <div className="cards">
            <div className="card">
                <h3>Coffee</h3>
                <p>Explore coffee brewing methods and types.</p>
            </div>
            <div className="card">
                <h3>Cocktails</h3>
                <p>Master the art of crafting delicious cocktails.</p>
            </div>
        </div>
    </section>
    </div>
  );
};

export default Home;