import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { navLinks } from "../../helpers/data";
import { Footer, Meta, NavBar } from "../index";
import { ArrowNarrowUpIcon } from "@heroicons/react/solid";

const PageLayout = ({ children, name }) => {
  const [pageTitle, setPageTitle] = useState("");
  const [showScroll, setShowScroll] = useState(false);
  const router = useRouter();

  const getPageTitle = () => {
    navLinks?.map(({ title, path }) =>
      path == router.pathname ? setPageTitle(title) : name ? setPageTitle(name) : setPageTitle("")
    );
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined" && window.pageYOffset > 200) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    getPageTitle();
  }, [router.pathname]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setShowScroll(window.pageYOffset > 400));
    }
    return () => window.removeEventListener("scroll", () => setShowScroll(window.pageYOffset > 400));
  }, []);

  return (
    <>
      <Meta title={pageTitle} />
      <div className="flex flex-col justify-between min-h-screen">
        <div>
          <NavBar />
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </div>
      {showScroll && (
        <button
          className="hidden md:block fixed bottom-6 right-6 p-3 bg-accent hover:bg-primary border hover:border-accent active:scale-90 text-primary hover:text-white rounded text-sm transition-all duration-300"
          onClick={scrollToTop}>
          <ArrowNarrowUpIcon className="w-5" />
        </button>
      )}
    </>
  );
};

export default PageLayout;
