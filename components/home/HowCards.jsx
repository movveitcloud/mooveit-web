import React from "react";

const HowCards = () => {
  return (
    <div className="bg-[#f9f9f9] w-full">
      <div className="w-[100%] sm:w-[80%] pb-[2rem] md:w-[60%] text-center mx-auto">
        <div className="bg-accent mx-auto flex justify-center item-center rounded-full mb-[2rem] w-16 h-16">
          <img src="/map.svg" alt="icon" className="w-8 m-auto" />
        </div>
        <h3 className="font-semibold text-lg md:text-xl text-[#222222]">List your Storage</h3>
        <p className="text-sm my-6 text-[#959595]">Thousand of listings to choose from</p>
        <button className="btn text-[#222222] border border-accent hover:bg-primary hover:text-white hover:border-primary text-xs w-[175px]">
          SEARCH LISTINGS
        </button>
      </div>
    </div>
  );
};

export default HowCards;
