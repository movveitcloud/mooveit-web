import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MenuAlt3Icon } from "@heroicons/react/solid";
import { navLinks } from "../../helpers/data";
import MenuItem from "./MenuItem";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pageReady, setPageReady] = useState(false);
  const [scroll, setScroll] = useState(false);
  const router = useRouter();
  const pageLink = router.pathname;

  useEffect(() => {
    setPageReady(true);
  }, []);

  return (
    <header className="uppercase bg-[#f9f9f9] text-[#222222]">
      <div className="flex justify-between items-center py-6 max-w-[90%] lg:max-w-[85%] mx-auto text-sm text-black">
        <div className="flex flex-row gap-10 items-center ">
          <Link href="/">
            <a>
              <img src="/logo.png" alt="Mooveit" className="max-h-8" />
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

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/signup" className="">
            <a className="text-primary"> Become a Partner</a>
          </Link>
          <Link href="/signin">
            <a className="btn btn-primary text-sm w-[125px] font-normal">Sign In</a>
          </Link>
        </div>

        {/* mobile menu start */}
        <MenuAlt3Icon className="lg:hidden w-8 text-primary cursor-pointer" onClick={() => setMenuOpen(true)} />
        {/* {menuOpen && (
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
            <MobileNavBar setMenuOpen={setMenuOpen} pageLink={pageLink} />
          </motion.div>
        </AnimatePresence>
      </div>
    )} */}
        {/* mobile menu end */}
      </div>
    </header>
  );
};

export default NavBar;
