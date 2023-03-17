import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { dashboardNavLinks } from "../../helpers/data";
import { motion } from "framer-motion";
import { authenticatedUser } from "../../redux/features/auth.slice";
import Meta from "../navigation/Meta";
import DashboardNavigation from "../navigation/DashboardNavigation";
import TitleBarNav from "../navigation/TitleBarNav";
import Head from "next/head";

const DashboardLayout = ({ children, name }) => {
  const [loading, setLoading] = useState(true);
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
    //  const sub =  dashboardNavLinks?.subMenus?.find((a) => router?.asPath.includes(a.path));
    if (item && !item?.permission.includes(role))
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
    getPageTitle();
    setPageReady(true);
    setLoading(false);
  }, []);

  // if (loading) {
  //   return <PageLoading loading={loading} />;
  // }

  return (
    <>
      <Meta title={`Dashboard | ${pageTitle}`} />
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      {pageReady && (
        <div className="justify-content flex h-screen items-center text-black">
          <aside className="hidden h-screen w-3/12 overflow-y-auto border-r bg-white lg:block">
            <DashboardNavigation pathname={router.asPath} />
          </aside>

          <div className="mx-auto h-screen w-full overflow-y-auto overflow-x-hidden bg-[#fafafa]">
            <div className="sticky top-0 z-[20] bg-white">
              <TitleBarNav
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                pageTitle={pageTitle}
                pathname={router?.asPath}
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="px-3 py-6 sm:px-8">
              {hasPermission && children}
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardLayout;
