import React from "react";
import { useRouter } from "next/router";
import { MenuAlt3Icon } from "@heroicons/react/solid";
import { motion, AnimatePresence } from "framer-motion";
import { BellIcon, SearchIcon } from "@heroicons/react/outline";
import { authenticatedUser } from "../../redux/features/auth.slice";
import { isPartner } from "../../helpers/utils";
import DashboardNavigation from "./DashboardNavigation";

const TitleBarNav = ({ pageTitle, pathname, menuOpen, setMenuOpen }) => {
  const router = useRouter();
  const user = authenticatedUser();

  const handleClick = () => {
    isPartner ? router.push("/listings/create") : router.push("/search");
  };

  return (
    <div className="w-full border-b py-5 px-4 lg:px-8 lg:py-5">
      <div className="flex items-center justify-between gap-4">
        <div className="hidden flex-grow flex-row items-center gap-3 sm:flex">
          <SearchIcon className="w-5 text-primary" />
          <input
            type="text"
            placeholder={isPartner ? "Looking for something" : "Search listings by location  or partner"}
            className="h-full w-full bg-transparent pr-6 text-base outline-none placeholder:text-[#A5A5A5]"
          />
        </div>
        <div className="flex items-center gap-6">
          <button className="btn btn-primary px-8 font-normal" onClick={handleClick}>
            {isPartner ? "Create Listing" : "Book a listing"}
          </button>
          <div className="hidden cursor-pointer items-center justify-center rounded border border-accent  p-3 sm:flex">
            <BellIcon className="w-6 text-[#222222]" />
          </div>
        </div>
        <MenuAlt3Icon className="w-8 cursor-pointer text-black lg:hidden" onClick={() => setMenuOpen(true)} />
      </div>

      {/* mobile menu start */}
      {menuOpen && (
        <div
          className="fixed left-0 right-0 bottom-0 z-[99999] h-screen w-full bg-[#0000003d] lg:hidden"
          onClick={() => setMenuOpen(false)}>
          <AnimatePresence>
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              exit={{ x: -100 }}
              className="fixed top-0 left-0 h-screen bg-white"
              onClick={(e) => e.stopPropagation()}>
              <DashboardNavigation pathname={pathname} />
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* mobile menu end */}
    </div>
  );
};

export default TitleBarNav;
