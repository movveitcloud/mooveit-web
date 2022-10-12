import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";


const Tabs = () => {
  const router = useRouter();
  const path = router.query.tab;
  

  const menuItems = [
    { name: "Listing Details", link: undefined },
    { name: "Dimensions", link: "dimensions" },
    { name: "Street View", link: "streetview" },
    { name: "Review", link: "review" }
  ];

  return (
    <nav className="flex justify-between  w-full mb-0 ">
      <div className="flex gap-5 w-full  ">
        {menuItems.map(({ name, link }, i) => (
          <Link
            href={{ pathname:"/support", query: name !== "Listing Details" && { tab: link } }}
            key={i}>
                <div>
            <a
              className={`${
                path == link
                  ? "text-primary text-md  border-x-0 border-t-0 rounded-none p-0  "
                  : " text-[#959595]"
              }  text-md  cursor-pointer    `}>
              {name}
            </a>
            <div className={`${path == link ? "w-[4rem] mt-2 mb-8 h-[2px] bg-primary rounded-md" : ""}`} />
            </div>

          </Link>
        ))}
      </div>
     
    </nav>
  );
};

export default Tabs;
