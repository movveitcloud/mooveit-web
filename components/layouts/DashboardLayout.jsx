import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { dashboardNavLinks } from "../../helpers/data";
import { motion } from "framer-motion";
import { authenticatedUser } from "../../redux/features/auth.slice";
import { DashboardNavbar, Meta, TitleBar } from "../index";

const DashboardLayout = ({ children, name, userInfo }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pageReady, setPageReady] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const [hasPermission, setHasPermission] = useState(false);
  const router = useRouter();
  const user = authenticatedUser();

  const getPageTitle = () => {
    dashboardNavLinks?.map(({ path, title }) =>
      path == router?.asPath ? setPageTitle(title) : name ? setPageTitle(name) : ""
    );
  };

  const authorizeUser = (role) => {
    //BOUNCE UNAUTHORIZED USERS
    const item = dashboardNavLinks?.find((a) => router?.asPath.includes(a.path));
    if (!item?.permission.includes(role))
      return router.replace(`${user.role == "partner" ? "/listings" : "/your-storage"}`);
    setHasPermission(true);
  };

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
    if (user) {
      authorizeUser(user.role);
    }
    getPageTitle();
    setPageReady(true);
  }, []);

  return (
    <>
      <Meta title={`Dashboard | ${pageTitle}`} />
      {pageReady && (
        <div className="h-screen flex justify-content items-center text-black">
          <aside className="hidden bg-white h-screen w-3/12 overflow-y-auto lg:block border-r">
            <DashboardNavbar pathname={router.asPath} />
          </aside>

          <div className="h-screen w-full mx-auto bg-[#fafafa] overflow-y-auto overflow-x-hidden">
            <div className="sticky top-0 z-[20] bg-white">
              <TitleBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} pageTitle={pageTitle} pathname={router?.asPath} />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="p-3 lg:py-6 lg:px-8 max-h-screen">
              {hasPermission && children}
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardLayout;
