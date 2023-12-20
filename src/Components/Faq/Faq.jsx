import React, { useState } from "react";
import Questions from "./Questions";

const questions = [
  {
    id: 1,
    question: " What is Bookmark?",
    answer:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    id: 2,
    question: " How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    id: 3,
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    id: 4,
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

function Faq() {

  const [data] = useState(questions)

  return (
    
    <>
      <section className="mx-auto container px-5 py-20 md:max-w-xl">
        <article className="text-center space-y-3">
          <h1 className="text-3xl font-rubik font-medium ">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-GrayishBlue">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </article>
        <article>

          <div className="py-10" >
            {
              data.map((data)=>(
                <Questions key={data.id} {...data}/>
              ))
            }
          </div>

          <button className=" text-White bg-SoftBlue px-3 py-2  rounded-md hover:opacity-90 transition duration-150 block mx-auto">
            More Info
          </button>
        </article>
      </section>
    </>
  );
}

export default Faq;
