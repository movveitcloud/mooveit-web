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
      <div className="flex min-h-screen flex-col justify-between">
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
          className="fixed bottom-32 right-6 hidden rounded bg-accent p-3 text-sm text-primary shadow transition-all duration-300 hover:bg-primary hover:text-white active:scale-90 md:block"
          onClick={scrollToTop}>
          <ArrowNarrowUpIcon className="w-5" />
        </button>
      )}
    </>
  );
};

export default PageLayout;
