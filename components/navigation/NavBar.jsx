import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuAlt3Icon } from "@heroicons/react/solid";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../../helpers/data";
import MenuItem from "./MenuItem";
import MobileNavbar from "./MobileNavbar";
import { authenticatedUser, logout } from "../../redux/features/auth.slice";
import { LogoutIcon, UserIcon, ViewGridIcon } from "@heroicons/react/outline";
import { isPartner } from "../../helpers/utils";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pageReady, setPageReady] = useState(false);
  const [scroll, setScroll] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const pageLink = router.pathname;

  const handleLogout = () => {
    dispatch(logout());
    router.reload();
  };
  useEffect(() => {
    setPageReady(true);
  }, []);

  return (
    <header className="uppercase bg-[#f9f9f9] text-[#222222]">
      <div className="flex justify-between items-center py-6 max-w-[90%] lg:max-w-[85%] mx-auto text-sm text-black">
        <div className="flex flex-row gap-10 items-center ">
          <Link href="/">
            <a>
              <img src="/logo.png" alt="Mooveit" className="max-h-7" />
            </a>
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex gap-6 items-center">
              {navLinks?.map((item, i) => (
                <li className="" key={i}>
                  <MenuItem item={item} pageLink={pageLink} pageReady={pageReady} />
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {pageReady && authenticatedUser() ? (
          <div className="hidden lg:block dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-accent w-[130px] rounded-btn flex gap-2 items-center capitalize">
              <UserIcon className="w-5" />
              <span>{authenticatedUser().firstName}</span>
            </label>
            <ul tabIndex={0} className="menu dropdown-content capitalize p-2 shadow bg-base-100 rounded-lg w-48 mt-4">
              <li>
                <Link href={isPartner ? "/listings" : "/your-storage"}>
                  <a className="flex gap-2 items-center border-b">
                    <ViewGridIcon className="w-5" />
                    <span>Dashboard</span>
                  </a>
                </Link>
              </li>
              <li onClick={handleLogout}>
                <p className="flex gap-2 items-center text-red-500">
                  <LogoutIcon className="w-5" />
                  <span>Log Out</span>
                </p>
              </li>
            </ul>
          </div>
        ) : (
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/signup" className="">
              <a className="hover:text-primary"> Become a Partner</a>
            </Link>
            <Link href="/login">
              <a className="btn btn-primary text-sm w-[125px] font-normal">Log In</a>
            </Link>
          </div>
        )}

        {/* mobile menu start */}
        <MenuAlt3Icon className="lg:hidden w-8 text-primary cursor-pointer" onClick={() => setMenuOpen(true)} />
        {menuOpen && (
          <div
            className="fixed left-0 right-0 bottom-0 h-screen w-full lg:hidden bg-[#0000003d] z-[99999]"
            onClick={() => setMenuOpen(false)}>
            <AnimatePresence>
              <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                exit={{ x: -100 }}
                className="fixed top-0 left-0 bg-primary h-screen overflow-y-scroll"
                onClick={(e) => e.stopPropagation()}>
                <MobileNavbar setMenuOpen={setMenuOpen} pageLink={pageLink} />
              </motion.div>
            </AnimatePresence>
          </div>
        )}
        {/* mobile menu end */}
      </div>
    </header>
  );
};

export default NavBar;
