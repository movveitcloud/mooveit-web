import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";

const MenuItem = ({ item: { path, title, subMenus }, pageLink, pageReady }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link href={path}>
      <a
        className={`${pageLink == path && "text-primary font-semibold"} flex gap-1 items-center relative text-sm ${
          subMenus && "dropdown dropdown-hover"
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        <label tabIndex="0" className="cursor-pointer hover:text-primary">
          {title}
        </label>
        {subMenus && <ChevronDownIcon className="w-2" />}

        {/* first level dropdown */}
        {subMenus && pageReady && hover && (
          <motion.ul
            whileInView={{ y: [-20, 0] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            tabIndex="0"
            className="dropdown-content absolute -left-[50%] top-5 menu rounded px-3 py-2 w-[175px] border shadow-md bg-base-100 divide-y">
            {subMenus.map(({ path, title, domain, deepMenus }, i) => (
              <li key={title}>
                <Link href={path} passHref={domain == "blog" && true}>
                  <p className="p-2 hover:text-primary dropdown dropdown-hover dropdown-right active:bg-primary active:bg-opacity-10">
                    {title}
                  </p>
                </Link>

                {/* second level dropdown */}
                {/* {deepMenus && (
                  <ul tabIndex="1" className="dropdown-content -mt-2 p-2 w-[175px] border shadow bg-base-100 divide-y">
                    {deepMenus.map(({ path, title }, i) => (
                      <Link href={path} key={title}>
                        <a className="p-2 hover:text-primary">{title}</a>
                      </Link>
                    ))}
                  </ul>
                )} */}
                {/* second level dropdown */}
              </li>
            ))}
          </motion.ul>
        )}
      </a>
    </Link>
  );
};

export default MenuItem;
