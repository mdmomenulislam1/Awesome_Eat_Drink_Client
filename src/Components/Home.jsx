import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
  
  const [brands, setBrands] = useState([]);
  const [topReviewersData, setTopReviewersData] = useState([]);

  useEffect(() => {
    fetch(`https://assignment-10-server-site-npwfqb83r-brand-shop-a10s-projects.vercel.app/brands`)
      .then((response) => response.json())
      .then((data) => setBrands(data));

    fetch(`https://assignment-10-server-site-npwfqb83r-brand-shop-a10s-projects.vercel.app/review`)
      .then((response) => response.json())
      .then((data) => setTopReviewersData(data));
  }, []);

  return (
    <div className="mx-3 md:mx-6 lg:mx-10">
      <Banner></Banner>

      <h2 className="text-3xl font-bold text-center mt-10">All Brands</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-5 gap-10 mb-10 mt-4">


        {
          brands?.map((brandItem) => (
            <Link key={brandItem.brand} to={`/brands/${brandItem.brand}`}>
              <div key={brandItem.brand} brandItem={brandItem} className="p-5 flex shadow-2xl rounded-xl outline-dotted bg-white h-[200px] justify-center items-center">

                <img src={brandItem.brand_img} alt="" className="h-[150px] w-[200px] rounded-lg shadow-lg " />
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-900 mx-auto">{brandItem.brand}</h1>

              </div>
            </Link>
          ))
        }

      </div>

      <h2 className="text-3xl font-bold text-center mt-16">Frequently Asked Questions </h2>
      <section className="">
        <div className="collapse collapse-arrow bg-base-200 my-2 md:my-5 lg:my-8">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            What is the restaurant's specialty dish or cuisine?
          </div>
          <div className="collapse-content">
            <p className="font-semibold">Customers often want to know what unique dishes or types of cuisine the restaurant offers. Providing information about signature dishes can help customers decide what to order.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 my-2 md:my-5 lg:my-8">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Are there options for dietary restrictions or allergies?
          </div>
          <div className="collapse-content">
            <p className="font-semibold">Many people have dietary restrictions or food allergies. Restaurants should provide information about any gluten-free, vegetarian, vegan, or allergy-friendly options on their menu.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 my-2 md:my-5 lg:my-8">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What are the restaurant's hours of operation?
          </div>
          <div className="collapse-content">
            <p className="font-semibold">Customers want to know when the restaurant is open for breakfast, lunch, dinner, or late-night dining. Providing clear hours of operation helps customers plan their visit.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 my-2 md:my-5 lg:my-8">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Is there a reservation system, and how does it work?
          </div>
          <div className="collapse-content">
            <p className="font-semibold">Some restaurants offer reservations, while others operate on a first-come, first-served basis. Providing information about the reservation process and policies is helpful for customers.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 my-2 md:my-5 lg:my-8">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What are the payment options, including credit cards and online payments?
          </div>
          <div className="collapse-content">
            <p className="font-semibold">Customers often inquire about payment methods accepted by the restaurant. This can include credit cards, mobile payment apps, or other payment options.</p>
          </div>
        </div>
      </section>

      <h2 className="text-3xl font-bold text-center mt-10">Top Reviewers </h2>
      <section className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5">
          
            {topReviewersData.map((reviewer) => (
              <div key={reviewer._id} className="text-center shadow-xl p-5 rounded-lg">
                
                  <img src={reviewer.img} alt={reviewer.name}  className="rounded-full mx-auto mt-3"/>
                
                
                  <p className="text-2xl font-bold mt-2"><strong>{reviewer.name}</strong></p>
                  <p className="font-semibold">{reviewer.review}</p>
               
              </div>
            ))}
          
        </div>
      </section>
    </div>
  );
};

export default Home;