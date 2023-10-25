import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px]">
        <div id="item1" className="carousel-item w-full">
          <img src="https://i.ibb.co/NYtB5df/9a405521d5d945f35127079812ada518.jpg" className="w-full " />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="https://i.ibb.co/fHMNNR3/services-header-image.jpg" className="w-full " />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src="https://i.ibb.co/JyB2LB8/soft-drink-banner-ads-ice-cubes-citrus-elements-d-illustration-141918175.webp" className="w-full " />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src="https://i.ibb.co/4KgZhpt/R.jpg" className="w-full " />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-sm">1</a>
        <a href="#item2" className="btn btn-sm">2</a>
        <a href="#item3" className="btn btn-sm">3</a>
        <a href="#item4" className="btn btn-sm">4</a>
      </div>
    </div>
  );
};

export default Banner;