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
    <header className="bg-[#f9f9f9] uppercase text-[#222222]">
      <div className="mx-auto flex max-w-[90%] items-center justify-between py-6 text-sm text-black lg:max-w-[85%]">
        <div className="flex flex-row items-center gap-10 ">
          <Link href="/">
            <a>
              <img src="/logo.png" alt="Mooveit" className="max-h-7" />
            </a>
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {navLinks?.map((item, i) => (
                <li className="" key={i}>
                  <MenuItem item={item} pageLink={pageLink} pageReady={pageReady} />
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {pageReady && authenticatedUser() ? (
          <div className="dropdown-end dropdown hidden lg:block">
            <label tabIndex={0} className="btn btn-accent rounded-btn flex w-[130px] items-center gap-2 capitalize">
              <UserIcon className="w-5" />
              <span>{authenticatedUser().firstName}</span>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu z-50 mt-4 w-48 rounded-lg bg-base-100 p-2 capitalize shadow">
              <li>
                <Link href={isPartner ? "/listings" : "/your-storage"}>
                  <a className="flex items-center gap-2 border-b">
                    <ViewGridIcon className="w-5" />
                    <span>Dashboard</span>
                  </a>
                </Link>
              </li>
              <li onClick={handleLogout}>
                <p className="flex items-center gap-2 text-red-500">
                  <LogoutIcon className="w-5" />
                  <span>Log Out</span>
                </p>
              </li>
            </ul>
          </div>
        ) : (
          <div className="hidden items-center gap-4 lg:flex">
            <Link href="/signup" className="">
              <a className="hover:text-primary"> Become a Partner</a>
            </Link>
            <Link href="/login">
              <a className="btn btn-primary w-[125px] text-sm font-normal">Log In</a>
            </Link>
          </div>
        )}

        {/* mobile menu start */}
        <MenuAlt3Icon className="w-8 cursor-pointer text-primary lg:hidden" onClick={() => setMenuOpen(true)} />
        {menuOpen && (
          <div
            className="fixed left-0 right-0 bottom-0 z-[99999] h-screen w-full bg-[#0000003d] lg:hidden"
            onClick={() => setMenuOpen(false)}>
            <AnimatePresence>
              <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                exit={{ x: -100 }}
                className="fixed top-0 left-0 h-screen overflow-y-scroll bg-primary"
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
