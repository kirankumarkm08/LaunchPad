import React from "react";

const ExploreBlogs = () => {
  return (
    <div>
      <section className="background-light900_dark900 py-16 sm:py-20">
        <div className="container mx-auto ">
          <div className="mx-auto max-w-2xl lg:text-center mb-10">
            <p className="mb-8  text-bold  text-lightMustard600_darkMustard600 uppercase">
              Investing made simple
            </p>
            <h1 className="h1-bold text-light950_dark-950">Explore Blogs</h1>
            <span className="text-medium text-light700_dark-700">
              Get up to speed with the wide world of IDO investing with our
              articles
            </span>
          </div>

          <div className=" flex  gap-6 max-md:flex-col ">
            <div className="flex flex-col overflow-hidden gap-6  p-5 rounded-[20px] border border-light-graystone-200 dark:border-dark-graystone-200">
              <img
                src="/assets/icons/zenpad-ido-blog1.svg"
                alt="cart"
                className="object-cover object-center group-hover:opacity-75 w-full"
              />
              <div className="">
                <h1 className="h2-bold text-light950_dark-950">
                  How to participate in ZenPad IDO Sale?
                </h1>
                <p className="text-medium text-light500_dark-500 mt-2">
                  With Zenpad, you can take part in IDOs of the most innovative
                  ventures in the blockchain space
                </p>
              </div>
              <div>
                <ul role="list" className="flex items-center gap-2">
                  <li className="text-medium text-light500_dark-500">
                    Mar 9 2024
                  </li>
                  <p className=" w-2 h-2 rounded-full bg-light-black-10 dark:bg-dark-black-10" />{" "}
                  <li className="text-medium text-light500_dark-500 flex items-center">
                    <span>3 min read</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3  overflow-hidden  sm:relative sm:h-full  p-5 rounded-[20px] border border-light-graystone-200 dark:border-dark-graystone-200">
                <img
                  src="/assets/icons/zee-card.svg"
                  alt="icon"
                  className="object-cover object-center group-hover:opacity-75"
                />
                <h1 className="h3-bold text-light950_dark-950">
                  How to buy a $ZEE token?
                </h1>
                <ul role="list" className="flex items-center gap-2">
                  <li className="text-medium text-light500_dark-500">
                    Mar 9 2024
                  </li>
                  <p className=" w-2 h-2 rounded-full bg-light-black-10 dark:bg-dark-black-10" />{" "}
                  <li className="text-medium text-light500_dark-500 flex items-center">
                    <span>3 min read</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3  overflow-hidden  sm:relative sm:h-full  p-5 rounded-[20px] border border-light-graystone-200 dark:border-dark-graystone-200">
                <img
                  src="/assets/icons/kyc-card.svg"
                  alt="kyc details"
                  className="object-cover object-center group-hover:opacity-75"
                />
                <h1 className="h3-bold text-light950_dark-950">
                  Applying for a KYC with ZenPad
                </h1>
                <ul role="list" className="flex items-center gap-2">
                  <li className="text-medium text-light500_dark-500">
                    Mar 9 2024
                  </li>
                  <p className=" w-2 h-2 rounded-full bg-light-black-10 dark:bg-dark-black-10" />{" "}
                  <li className="text-medium text-light500_dark-500 flex items-center">
                    <span>3 min read</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploreBlogs;
