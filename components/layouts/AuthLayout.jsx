import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { isLoggedIn } from "../../redux/features/auth.slice";
import { Meta } from "../navigation";

const AuthLayout = ({ children, title }) => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <>
      <Meta title={title} />
      <div className="flex flex-col h-screen bg-[#F9F9F9]">
        <div className="shadow">
          <nav className="max-w-[85%] w-full mx-auto py-6 flex items-center justify-between">
            <Link href="/">
              <a>
                <img src="/logo.png" alt="logo" className="max-h-8" />
              </a>
            </Link>
            {pathname === "/signup" && (
              <div className="flex items-center text-black gap-5">
                <span className="hidden md:flex">Already have an account?</span>
                <Link href="/signin">Login Here</Link>
              </div>
            )}
            {pathname === "/signin" && (
              <div className="flex items-center text-black gap-5">
                <span className="hidden md:flex">Don't have an account?</span>
                <Link href="/signup">Sign Up</Link>
              </div>
            )}
          </nav>
        </div>

        <div className="flex flex-grow">
          <div className="hidden md:w-[60%] md:flex bg-[url('/auth-image.png')] bg-cover bg-no-repeat bg-red-300" />
          <div className="w-full md:w-[40%] flex flex-col  justify-center px-8 md:px-16">{children}</div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
