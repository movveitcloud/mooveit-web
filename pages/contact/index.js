import React, { useState } from "react";
import { PageLayout } from "../../components";
import { ContactContent } from "../../helpers/data";
import PageTitle from "../../components/shared/PageTitle";

const Contact = () => {

  const [hover, setHover] = useState(false);

  return <PageLayout>
    <PageTitle name={"Contact Us"}/>

    <p className="flex-grow sm:block mt-4 md:mt-4 text-info text-center text-[#999999] ">
    How can we assist you? Do you have questions concerning our services?       </p>

      <div className="flex justify-center mt-5">
        <a
          href="/support"
          className="btn border-black bg-black text-white md:btn-wide hover:bg-accent hover:border-accent hover:text-black  rounded-full font-normal normal-case">
          Talk to support
          <span>
            {/* <ArrowRightIcon className="w-4 ml-3" /> */}
          </span>
        </a>
      </div>

      <div className="flex flex-col py-8 lg:py-16 lg:flex-row gap-8 w-[90%] px-20">
      <div
      // className={`justify-center bg-[#F7F7F7] w-full p-7 rounded-lg transition-colors duration-300 ${
      //   index == 4 ? "col-span-full" : ""
      // }`}
      className="justify-center bg-[#F7F7F7] w-full p-7 rounded-lg transition-colors duration-300 "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <div className="flex justify-center">
        {/* <span className={`rounded-full p-3 text-primary bg-[#11851114]`}>{icon}</span> */}
      </div>
      {/* <h3 className="font-semibold whitespace-nowrap text-center text-lg my-2">{title}</h3> */}
      <div className="max-w-[90%] lg:max-w-[85%] mx-auto py-10 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:flex gap-6 lg:gap-8 justify-between">
        
      <div className="w-full flex flex-col">
              <h3 className="text-base text-black font-bold mb-2">Business & Partner Relations</h3>
              <p className="mt-2 text-[#989898] text-sm">partners@movveit.com</p>
              <p className="mt-2 text-[#989898] text-sm">+44 709 879 9909</p>
      </div> 
      <div className="w-full flex flex-col">
              <h3 className="text-base text-black font-bold mb-2">Customer Relations</h3>
              <p className="mt-2 text-[#989898] text-sm">support@movveit.com</p>
              <p className="mt-2 text-[#989898] text-sm">+44 709 879 9909</p>
      </div>      
      <div className="w-full flex flex-col">
              <h3 className="text-base text-black font-bold mb-2">Enquiries & Partner Relations</h3>
              <p className="mt-2 text-[#989898] text-sm">info@movveit.com</p>
              <p className="mt-2 text-[#989898] text-sm">+44 709 879 9909</p>
      </div>  
      </div>
    </div>
      </div>

  </PageLayout>;
};

export default Contact;