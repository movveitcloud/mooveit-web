import React, { useEffect, useState } from "react";

const ContentLayout = ({ children }) => {
 

  return (
    <>
      <div className="max-w-[90%] lg:max-w-[85%] mx-auto">
        <div>
          {children}
        </div>
       
      </div>

    </>
  );
};

export default ContentLayout;
