import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Meta } from "../index";
import { authenticatedUser } from "../../redux/features/auth.slice";
import { dashboardNavLinks } from "../../helpers/data";

const NewListingLayout = ({ children }) => {
  const [hasPermission, setHasPermission] = useState(false);
  const user = authenticatedUser();
  const router = useRouter();
  const pathname = router.pathname;

  const authorizeUser = (role) => {
    //BOUNCE UNAUTHORIZED USERS
    const item = dashboardNavLinks?.find((a) => router?.asPath.includes(a.path));
    if (!item?.permission.includes(role) && pathname !== "/onboarding")
      return router.replace(`${user.role == "partner" ? "/listings" : "/your-storage"}`);
    setHasPermission(true);
  };

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
    if (user && !user.isVerified) {
      router.push("/verify");
    }
    if (user && user.isVerified) {
      authorizeUser(user.role);
    }
  }, []);

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
              <p className="text-[#222222] cursor-pointer" onClick={() => router.replace("/listings")}>
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

        <div className="h-full flex-grow">{hasPermission && children}</div>
      </div>
    </>
  );
};

export default NewListingLayout;
