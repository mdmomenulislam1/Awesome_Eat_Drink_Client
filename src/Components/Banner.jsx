import React from 'react';

const Banner = () => {
  return (
    <div className="hero h-[500px] rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/NYtB5df/9a405521d5d945f35127079812ada518.jpg)' }}>
      <div className=""></div>
      <div className="h-full w-full opacity-80 bg-gradient-to-r from-green-800 to-slate-950 flex justify-items-start items-center gap-5">
        <div className="w-1/3 px-3 md:px-5 lg:px-8">
          <h1 className="mb-5 text-red-200 text-3xl md:text-4xl font-bold text-justify">Awesome Food Corner</h1>
          <p className="mb-5 font-bold text-justify text-green-50 text-2xl ">Awesome Food Corner: Culinary Artistry, Unforgettable Moments</p>

        </div>
        <div className="border-l-4 w-2/3 px-3 md:px-5 lg:px-8">
          <p className="text-[15px] text-justify text-white font-medium">
            At Awesome Food Corner, we blend culinary artistry with a welcoming atmosphere. Our diverse menu features global flavors, while signature dishes like Himalayan Lamb Chops and Chocolate Molten Lava Cake are a must-try. Our expert mixologists craft the perfect beverages, and our attentive staff ensure a top-notch dining experience. Whether it's a romantic dinner, a gathering with friends, or a special event, we're the ideal choice. Located in the heart of the city, we're ready to create unforgettable moments with every visit.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;