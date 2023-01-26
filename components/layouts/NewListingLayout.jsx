import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Meta } from "../index";
import { authenticatedUser } from "../../redux/features/auth.slice";
import { dashboardNavLinks } from "../../helpers/data";
import { ListingInputContext } from "../../context";

const NewListingLayout = ({ children }) => {
  const { activeStepper, setActiveStepper, initialState, setFormDetails } = useContext(ListingInputContext);
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

  const onCancel = () => {
    router.push("/listings");
    setActiveStepper(0);
    setFormDetails(initialState);
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
      <div className="flex h-screen flex-col overflow-y-auto bg-[#F9F9F9]">
        <div>
          <nav className="mx-auto flex max-w-[90%] items-center justify-between py-6 lg:max-w-[85%]">
            <Link href="/">
              <a>
                <img src="/logo.png" alt="logo" className="max-h-8" />
              </a>
            </Link>
            {pathname === "/onboarding" && (
              <p className="cursor-pointer text-[#222222]" onClick={() => router.replace("/listings")}>
                Skip
              </p>
            )}
            {pathname === "/listings/create" && activeStepper === 0 && (
              <button className="cursor-pointer text-red-500" onClick={onCancel}>
                Cancel
              </button>
            )}
          </nav>
        </div>

        <div className="h-full flex-grow">{hasPermission && children}</div>
      </div>
    </>
  );
};

export default NewListingLayout;
