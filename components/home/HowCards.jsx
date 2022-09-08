import React from "react";

const HowCards = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="w-[100%] sm:w-[80%] pb-[2rem] md:w-[60%] text-center mx-auto">
        <div className="bg-[#FFFDE3] mx-auto flex justify-center item-center rounded-[50%] mb-[2rem] w-[3rem] h-[3rem]">
          <img src="/map.svg" alt="icon" className="w-[1rem] h-[1rem] m-auto " />
        </div>
        <h3 className="font-normal text-xl md:text-2xl text-[#222222]">List your Storage</h3>
        <p className="text-sm my-[2rem]   text-[#959595] ">
          Thousand of listingss to choose from choose from choose from from choose from.
        </p>
        <button className="btn border-[#CFE8A9]">SEARCH LISTINGS</button>
      </div>
    </div>
  );
};

export default HowCards;
