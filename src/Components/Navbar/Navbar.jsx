import React, { useState } from "react";

import logo from "/images/logo-bookmark.svg";
import logoWhite from "/images/logo-bookmark-white.svg";
import facebook from "../../../images/icon-facebook.svg";
import twitter from "../../../images/icon-twitter.svg";
import menu from "../../../images/icon-hamburger.svg";
import close from "../../../images/icon-close.svg";

// const btn = document.getElementById("menu-btn");
// const nav = document.getElementsByClassName("menu");

// btn.addEventListener("click", () => {
//   btn.classList.toggle("open");
//   nav.classList.toggle("flex");
//   nav.classList.toggle("hidden");
// });

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  const toggleNav=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
      <header className="mx-auto container">
        <nav className="flex flex-row justify-between items-center">
          {/* logo and button */}
          <div className="container px-3 flex justify-between">
            <img src={logo} alt="" />
            <button onClick={toggleNav} className="block md:hidden">
            <img src={isOpen ? close : menu} alt="" />
            </button>
          </div>
          {/* menu links */}
          <ul className="font-rubik hidden md:flex md:gap-10">
            <li><a href="#" className=" hover:text-SoftRed transition duration-150">FEATURES</a></li>
            <li><a href="#" className=" hover:text-SoftRed transition duration-150">PRICING</a></li>
            <li><a href="#" className=" hover:text-SoftRed transition duration-150">CONTACT</a></li>
            <li><a href="#" className="bg-SoftRed text-White px-4 py-2 rounded-md hover:bg-White hover:border-SoftRed border hover:text-SoftRed transition duration-150">LOGIN</a></li>
          </ul>

          {/* Mobile view */}
        <div  id="Menu-Moblie" className={`${isOpen ? 'block' :'hidden' }  fixed flex flex-col justify-between top-0 left-0 right-0 bottom-0  pt-10 z-10 md:hidden `}>
         <div>
           <div className="container px-3 flex justify-between">
            <img src={logoWhite} alt="" />
              <button onClick={toggleNav}>
              <img src={close} alt="" />
              </button>
            </div>
           <ul id="links" className={`font-rubik pt-16 px-3 flex flex-col text-center  text-White`}>
            <li className="border-t py-5"><a href="#" className=" hover:text-SoftRed transition duration-150">FEATURES</a></li>
            <li className="border-t py-5"><a href="#" className=" hover:text-SoftRed transition duration-150">PRICING</a></li>
            <li className="border-t py-5"><a href="#" className=" hover:text-SoftRed transition duration-150">CONTACT</a></li>
            <li className="border-t pt-7"><a href="#" className="border w-full px-24 py-2 rounded-md">LOGIN</a></li>
           </ul>
         </div>
         <div className="mx-auto flex gap-10 pb-10">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
         </div>
        </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
