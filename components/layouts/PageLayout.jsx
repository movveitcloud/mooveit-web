import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { navLinks } from "../../helpers/data";
import { Footer, Meta, NavBar } from "../index";

const PageLayout = ({ children, name }) => {
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();

  const getPageTitle = () => {
    navLinks?.map(({ title, path }) =>
      path == router.pathname ? setPageTitle(title) : name ? setPageTitle(name) : setPageTitle("")
    );
  };

  useEffect(() => {
    getPageTitle();
  }, [router.pathname]);

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
    </>
  );
};

export default PageLayout;
