import React from 'react';

const Banner = () => {
  return (
    <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/NYtB5df/9a405521d5d945f35127079812ada518.jpg)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">Awesome Food Corner</h1>
          <p className="mb-5">Awesome Food Corner: Culinary Artistry, Unforgettable Moments</p>
          <p>
            At Awesome Food Corner, we blend culinary artistry with a welcoming atmosphere. Our diverse menu features global flavors, while signature dishes like Himalayan Lamb Chops and Chocolate Molten Lava Cake are a must-try. Our expert mixologists craft the perfect beverages, and our attentive staff ensure a top-notch dining experience. Whether it's a romantic dinner, a gathering with friends, or a special event, we're the ideal choice. Located in the heart of the city, we're ready to create unforgettable moments with every visit.</p>

        </div>
      </div>
    </div>
  );
};

export default Banner;