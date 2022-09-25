import React from "react";
import { useRouter } from "next/router";
import { MenuAlt3Icon } from "@heroicons/react/solid";
import { motion, AnimatePresence } from "framer-motion";
import DashboardNavbar from "./DashboardNavbar";
import { BellIcon, SearchIcon } from "@heroicons/react/outline";
import { authenticatedUser } from "../../redux/features/auth.slice";
import { isPartner } from "../../helpers/utils";

const TitleBar = ({ pageTitle, pathname, menuOpen, setMenuOpen }) => {
  const router = useRouter();
  const user = authenticatedUser();

  const handleClick = () => {
    isPartner ? router.push("/listings/create") : null;
  };

  return (
    <div className="py-5 p-3 lg:px-8 lg:py-5 w-full border-b">
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-row flex-grow gap-3 items-center">
          <SearchIcon className="text-primary w-5" />
          <input
            type="text"
            placeholder={isPartner ? "Looking for something" : "Search listings by location  or partner"}
            className="w-full bg-transparent h-full pr-6 outline-none text-base placeholder:text-[#A5A5A5]"
          />
        </div>
        <div className="flex items-center gap-6">
          <button className="btn btn-primary px-8 font-normal" onClick={handleClick}>
            {isPartner ? "Create Listing" : "Become a Partner"}
          </button>
          <div className="flex justify-center items-center border border-accent rounded p-3 cursor-pointer">
            <BellIcon className="w-6 text-[#222222]" />
          </div>
        </div>
        <MenuAlt3Icon className="lg:hidden w-8 text-black cursor-pointer" onClick={() => setMenuOpen(true)} />
      </div>

      {/* mobile menu start */}
      {menuOpen && (
        <div
          className="fixed left-0 right-0 bottom-0 h-screen w-full lg:hidden bg-[#0000003d] z-[99999]"
          onClick={() => setMenuOpen(false)}>
          <AnimatePresence>
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              exit={{ x: -100 }}
              className="fixed top-0 left-0 bg-white h-screen"
              onClick={(e) => e.stopPropagation()}>
              <DashboardNavbar pathname={pathname} />
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* mobile menu end */}
    </div>
  );
};

export default TitleBar;
