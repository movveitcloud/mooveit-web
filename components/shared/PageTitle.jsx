import React from "react";

const PageTitle = ({ name }) => {
  return (
    <div className="bg-primary">

    <div className="h-[125px] flex items-center">
      <h2 className="font-bold text-[#eeeeee] text-4xl md:text-5xl px-10 md:px-20 font-bold capitalize">{name}</h2>
    </div>
    </div>
  );
};

export default PageTitle;