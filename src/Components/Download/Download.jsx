import React from "react";

import chrome from "../../../images/logo-chrome.svg";
import firefox from "../../../images/logo-firefox.svg";
import opera from "../../../images/logo-opera.svg";

import dot from "../../../images/bg-dots.svg";

function Download() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-8 py-20">
        <article className="text-center mb-10 max-w-xl mx-auto">
          <h1 className="text-3xl font-medium mb-8  md:text-5xl ">
            Download the extension
          </h1>
          <p className=" text-GrayishBlue text-sm md:text-xl">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </article>
        <article className=" flex flex-col md:flex-row  md:justify-center items-center gap-10">
          <div className="bg-white shadow-2xl text-center space-y-3 py-7 px-3  rounded-xl md:hover:scale-105 transition duration-150 ">
            <img src={chrome} alt="" className=" block mx-auto" />
            <h1 className="text-xl font-semibold">Add to Chrome</h1>
            <p className=" text-GrayishBlue">Minimum version 62</p>
            <img src={dot} alt="" className="block mx-auto" />
            <button className=" text-White bg-SoftBlue px-3 py-2 border-trasparent rounded-md hover:border-SoftBlue border hover:text-SoftBlue hover:bg-White duration-150 transition">
              Add & Install Extension
            </button>
          </div>
          <div className="bg-white shadow-2xl text-center space-y-3 py-7 px-3  rounded-xl  md:transform md:translate-y-10  md:hover:scale-105 transition duration-150 ">
            <img src={firefox} alt="" className=" block mx-auto" />
            <h1 className="text-xl font-semibold">Add to Chrome</h1>
            <p className=" text-GrayishBlue">Minimum version 55</p>
            <img src={dot} alt="" />
            <button className=" text-White bg-SoftBlue px-3 py-2 border-trasparent rounded-md hover:border-SoftBlue border hover:text-SoftBlue hover:bg-White duration-150 transition">
              Add & Install Extension
            </button>
          </div>{" "}
          <div className="bg-white shadow-2xl text-center space-y-3 py-7 px-3 rounded-xl  md:transform md:translate-y-20  md:hover:scale-105 transition duration-150 ">
            <img src={opera} alt="" className="  block mx-auto" />
            <h1 className="text-xl font-semibold">Add to Chrome</h1>
            <p className=" text-GrayishBlue">Minimum version 46</p>
            <img src={dot} alt="" />
            <button className=" text-White bg-SoftBlue px-3 py-2 border-trasparent rounded-md hover:border-SoftBlue border hover:text-SoftBlue hover:bg-White duration-150 transition">
              Add & Install Extension
            </button>
          </div>
        </article>
      </section>
    </>
  );
}

export default Download;
