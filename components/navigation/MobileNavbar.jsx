import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, ViewGridIcon, XIcon } from "@heroicons/react/outline";
import { navLinks } from "../../helpers/data";
import { authenticatedUser } from "../../redux/features/auth.slice";
import { isPartner } from "../../helpers/utils";

const MobileNavBar = ({ pageLink, setMenuOpen }) => {
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    setPageReady(true);
  }, []);

  return (
    <aside className="flex flex-col gap-6 py-8 px-4">
      <div className="mt-2 mb-4 flex items-center  justify-between px-2">
        <Link href="/">
          <a>
            <img src="/logo.png" alt="logo" className="mr-8 w-32" onClick={() => setMenuOpen(false)} />
          </a>
        </Link>
        <XIcon className="w-5 cursor-pointer text-white" onClick={() => setMenuOpen(false)} />
      </div>

      <nav>
        <ul className="flex flex-col gap-4">
          {navLinks?.map(({ path, title, subMenus }, i) =>
            subMenus ? (
              // <details key={i}>
              //   <summary className="flex cursor-pointer items-center justify-between" key={title}>
              //     <h2 className="font-normal capitalize text-white">{title}</h2>
              //     <div>
              //       <ChevronDownIcon className="w-3 text-white" />
              //     </div>
              //   </summary>
              //   <div className="mt-2 flex flex-col gap-3 text-sm">
              //     {subMenus.map(({ title, path, deepMenus }) =>
              //       deepMenus ? (
              //         <details key={i}>
              //           <summary className="ml-2 flex cursor-pointer items-center justify-between text-sm" key={title}>
              //             <h2 className="font-normal capitalize text-white">{title}</h2>
              //             <div>
              //               <ChevronDownIcon className="w-3 text-white" />
              //             </div>
              //           </summary>
              //           <div className=" flex flex-col gap-1 text-sm">
              //             {deepMenus?.map(({ title, path }) => (
              //               <Link href={path} key={path}>
              //                 <a
              //                   className="ml-3 rounded-md py-1 pl-3 capitalize text-[#d9d9d9] hover:text-accent"
              //                   onClick={() => setMenuOpen(false)}>
              //                   {title}
              //                 </a>
              //               </Link>
              //             ))}
              //           </div>
              //         </details>
              //       ) : (
              //         <Link href={path} passHref={title == "Blog" && true} key={i}>
              //           <a
              //             target={title == "Blog" && "_blank"}
              //             className={`${
              //               pageLink == path && "font-semibold text-accent"
              //             } ml-2 text-sm capitalize text-white hover:text-accent`}
              //             onClick={() => setMenuOpen(false)}>
              //             {title}
              //           </a>
              //         </Link>
              //       )
              //     )}
              //   </div>
              // </details>
              <div key={i}>
                <div className="flex cursor-pointer items-center justify-between" key={title}>
                  <h2 className="font-normal capitalize text-white">{title}</h2>
                  <div>
                    <ChevronDownIcon className="w-3 text-white" />
                  </div>
                </div>
                <div className="mt-2 flex flex-col gap-3 text-sm">
                  {subMenus.map(({ title, path, deepMenus }) =>
                    deepMenus ? (
                      <details key={i}>
                        <summary className="ml-2 flex cursor-pointer items-center justify-between text-sm" key={title}>
                          <h2 className="font-normal capitalize text-white">{title}</h2>
                          <div>
                            <ChevronDownIcon className="w-3 text-white" />
                          </div>
                        </summary>
                        <div className=" flex flex-col gap-1 text-sm">
                          {deepMenus?.map(({ title, path }) => (
                            <Link href={path} key={path}>
                              <a
                                className="ml-3 rounded-md py-1 pl-3 capitalize text-[#d9d9d9] hover:text-accent"
                                onClick={() => setMenuOpen(false)}>
                                {title}
                              </a>
                            </Link>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <Link href={path} passHref={title == "Blog" && true} key={i}>
                        <a
                          target={title == "Blog" && "_blank"}
                          className={`${
                            pageLink == path && "font-semibold text-accent"
                          } ml-2 text-sm capitalize text-white hover:text-accent`}
                          onClick={() => setMenuOpen(false)}>
                          {title}
                        </a>
                      </Link>
                    )
                  )}
                </div>
              </div>
            ) : (
              <Link href={path} passHref={title == "Blog" && true} key={i}>
                <a
                  target={title == "Blog" && "_blank"}
                  className={`${
                    pageLink == path && "font-semibold text-accent"
                  } capitalize text-white hover:text-accent`}
                  onClick={() => setMenuOpen(false)}>
                  {title}
                </a>
              </Link>
            )
          )}
        </ul>
      </nav>

      {pageReady && authenticatedUser() ? (
        <Link href={isPartner ? "/listings" : "/your-storage"}>
          <a className="btn btn-accent rounded-btn flex w-full items-center gap-2 capitalize">
            <ViewGridIcon className="w-5" />
            <span>Dashboard</span>
          </a>
        </Link>
      ) : (
        <div className="flex flex-col gap-4">
          <Link href="/signup" className="">
            <a className="text-white" onClick={() => setMenuOpen(false)}>
              Become a Partner
            </a>
          </Link>
          <Link href="/login">
            <a
              className="btn w-full bg-white text-sm font-normal text-primary hover:bg-white"
              onClick={() => setMenuOpen(false)}>
              Log In
            </a>
          </Link>
        </div>
      )}
    </aside>
  );
};

export default MobileNavBar;
