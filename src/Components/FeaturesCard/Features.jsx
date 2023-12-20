import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "Bookmark in one click",
    desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    link: "More Info",
    button: " Simple Bookmarking",
    image: "./images/illustration-features-tab-1.svg",
  },
  {
    id: 2,
    title: "Intelligent search",
    desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    link: "More Info",
    button: "Speedy Searching",
    image: "./images/illustration-features-tab-2.svg",
  },
  {
    id: 3,
    title: "Share your bookmarks",
    desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    link: "More Info",
    button: "Easy Sharing",
    image: "./images/illustration-features-tab-3.svg",
  },
];

function Features() {
  const [tabs] = useState(data);
  const [value, setValue] = useState(0);

  const { title, desc, link, image } = tabs[value];

  return (
    <>
      <section className="max-w-7xl mx-auto py-20 px-8">
        <div className="text-center space-y-5">
          <h1 className="text-5xl text-VeryDarkBlue font-rubik">Features</h1>
          <p className="text-lg text-GrayishBlue lg:w-96 mx-auto">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        {/* featurs tab */}
        <div className="">
          <ul className="flex justify-center flex-col text-center my-10 md:flex-row">
            {tabs.map((tab, index) => (
              <li
                key={tab.id}
                className="border-t border-slate-200 last:border-b md:border-t-0 md:border-b"
              >
                <button onClick={()=>setValue(index)}
                  className={`py-3 md:px-7 text-lg text-GrayishBlue ${
                    index === value && "border-b-2 border-SoftRed"
                  }`}
                >
                  {tab.button}
                </button>
              </li>
            ))}
          </ul>

          <div className="lg:flex items-center space-y-16 lg:gap-16 max-w-7xl mx-auto md:space-y-0">
            <article className="lg:flex-1 relative ">
              <img src={image} className="block mx-auto w-full" />
              <div className="bg-left"></div>
            </article>

            <article className="text-center space-y-5 lg:text-start lg:flex-1 ">
              <h1 className="text-3xl font-medium md:text-5xl">{title}</h1>
              <p className="text-GrayishBlue ">{desc}</p>
              <button className=" text-White bg-SoftBlue px-3 py-2 border-trasparent rounded-md hover:border-SoftBlue border hover:text-SoftBlue hover:bg-White duration-150 transition">{link}</button>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
