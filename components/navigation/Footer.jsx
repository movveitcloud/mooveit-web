import { PaperAirplaneIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";
import { footerLinks, mediaLinks } from "../../helpers/data";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="bg-primary">
        <div className="max-w-[90%] lg:max-w-[85%] mx-auto py-10 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:flex gap-6 lg:gap-8 justify-between">
          {footerLinks?.map(({ heading, subMenus }, i) => (
            <div className="w-full flex flex-col" key={heading + i}>
              <h3 className="text-base text-white uppercase mb-2">{heading}</h3>
              {subMenus.map(({ path, title }, i) => (
                <Link href={path} key={title + path}>
                  <a className="mt-4 cursor-pointer text-sm text-white">{title}</a>
                </Link>
              ))}
            </div>
          ))}

          <div className="w-full">
            <h3 className="text-base text-white uppercase">Get in Touch</h3>
            <div className="flex items-center gap-2 bg-[#7270bb] text-white text-sm rounded-2xl px-4 py-1 my-6">
              <input
                type="email"
                className="flex-1 bg-transparent py-3 placeholder:text-white outline-none"
                placeholder="Enter email address..."
              />
              <button className="btn bg-transparent hover:bg-transparent border-none w-fit p-0 text-white">
                <PaperAirplaneIcon className="w-6 rotate-45" />
              </button>
            </div>

            <div className="flex  md:gap-6 items-center">
              {mediaLinks?.map(({ path, title, icon }, i) => (
                <a key={title} target="_blank" href={path} className="cursor-pointer mr-2 md:mr-0 " rel="noreferrer">
                  <img
                    src={icon}
                    alt={`MooveIt ${title}`}
                    className="w-4 md:w-7  hover:-translate-y-1 transition-transform"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#222222]">
        <div className="max-w-[90%] lg:max-w-[85%] mx-auto py-8 px-4">
          <h4 className="text-white text-sm text-center">
            &copy; MooveIT Technologies UK Pty {year} | All rights reserved
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
