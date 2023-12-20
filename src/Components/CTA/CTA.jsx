import React from "react";

function CTA() {
  return (
    <>
      <section className="bg-SoftBlue py-20 flex flex-col justify-center items-center gap-5">
        <article className="text-center flex flex-col gap-4 max-w-lg mx-auto">
          <h1 className=" text-White  uppercase text-sm font-rubik">
            35,000+ already joined
          </h1>
          <h1 className="text-White text-3xl font-rubik font-medium">
            Stay up-to-date with what we’re doing
          </h1>
        </article>
        <form className="flex flex-col  gap-4 md:flex-row  md:mx-auto">
          <input
            className="rounded-md px-3 py-2 "
            type="text"
            placeholder="Enter your email address"
          />
          <input
            className=" bg-SoftRed text-White rounded-md  px-3 py-2 hover:opacity-90 transition duration-150"
            type="button"
            value="Contact Us"
          />
        </form>
      </section>
    </>
  );
}

export default CTA;
