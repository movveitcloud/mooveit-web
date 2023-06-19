import React from "react";
import Link from "next/link";

const PageContent = ({ content1, content2, content3, subtitle, path, linktitle }) => {
  return (

    <div className="w-[70%] px-5 my-5 sm:w-full sm:px-0 ">
      <h4 className="font-bold text-lg md:text-xl font-bold capitalize">{subtitle? subtitle : ""}</h4>
      <p className="text-base my-6 text-[#999999]">
        {content1}
        </p>
        <p className="text-base my-6 text-[#999999]">
        {content2 ? content2:""}
        </p>
        <p className="text-base my-6 text-[#999999]">
        {content3 ? content3:""}
        </p>
       {linktitle ? 
       
            <Link href={path?path:"#"}>
          <a className="btn btn-primary w-[175px] text-xs font-light">{linktitle}</a>
        </Link>
        
        :
        ""
    }
        
      </div>
  );
};

export default PageContent;