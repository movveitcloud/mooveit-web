import React from "react";
import { Footer, Meta, NavBar } from "../index";

const PageLayout = ({ children }) => {
  return (
    <>
      <Meta />
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
