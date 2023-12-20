import React, { useState } from "react";
import arrow from "../../../images/icon-arrow.svg";
import arrowRed from "../../../images/icon-arrow-red.svg";


function Questions({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <article className="py-3 border-t border-y-GrayishBlue last:border-b ">
        <div
          onClick={() => setShowAnswer(!showAnswer)}
          className="flex flex-row items-center justify-between py-2 hover:text-SoftRed  transition duration-150"
        >
          <h1 className="text-lg font-rubik md:text-xl ">{question}</h1>
          <button>
            
            {showAnswer ? <img src={arrowRed} alt="" className=" transform rotate-180"/> : <img src={arrow} alt="" /> }
          </button>
        </div>
        {showAnswer && <p className=" text-GrayishBlue leading-8">{answer}</p>}
      </article>
    </>
  );
}

export default Questions;
