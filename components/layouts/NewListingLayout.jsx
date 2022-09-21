import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Meta, Steppers } from "../index";

const NewListingLayout = ({ children }) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <>
      <Meta />
      <div className="flex flex-col h-screen overflow-y-auto bg-[#F9F9F9]">
        <div>
          <nav className="max-w-[90%] lg:max-w-[85%] mx-auto py-6 flex items-center justify-between">
            <Link href="/">
              <a>
                <img src="/logo.png" alt="logo" className="max-h-8" />
              </a>
            </Link>
            {pathname === "/onboarding" && (
              <p className="text-[#222222] cursor-pointer" onClick={() => router.replace("/dashboard")}>
                Skip
              </p>
            )}
            {pathname === "/listings/create" && (
              <div className="w-12 h-12 rounded-full bg-[#FFEFD8] flex justify-center items-center text-lg text-[#222222] cursor-pointer">
                <p>O</p>
              </div>
            )}
          </nav>
        </div>

        <div className="h-full flex-grow">{children}</div>
      </div>
    </>
  );
};

export default NewListingLayout;
