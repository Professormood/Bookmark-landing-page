import React from "react";
import heroBg from "/images/illustration-hero.svg";

function Hero() {
  return (
    <>
      <div className="flex flex-col-reverse justify-center items-center md:justify-between md:items-center md:flex-row">
        <div className="flex flex-col space-y-10 text-center  md:text-start ">
          <h1 className="text-5xl text-VeryDarkBlue font-rubik capitalize font-meduim ">a simple bookmark manager</h1>
          <p className="text-GrayishBlue text-lg max-w-xl">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="space-x-5">
            <a href="" className="text-White bg-SoftBlue px-3 py-2 border-trasparent rounded-md hover:border-SoftBlue border hover:text-SoftBlue hover:bg-White duration-150 transition">Get it on chrome</a>
            <a href="" className="text-black rounded-md border-transparent shadow-lg px-3 py-2 hover:border-VeryDarkBlue hover:border hover:text-VeryDarkBlue duration-150 transition">Get it on firefox</a>
          </div>
        </div>
        <div className="mb-10 relative">
            <img src={heroBg} />
            <div className="bg"></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
