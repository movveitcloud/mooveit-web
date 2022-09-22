import Link from "next/link";
import { ChevronDownIcon, XIcon } from "@heroicons/react/outline";
import { navLinks } from "../../helpers/data";

const MobileNavBar = ({ pageLink, setMenuOpen }) => {
  return (
    <aside className="flex flex-col gap-6 py-8 px-4">
      <div className="px-2 flex justify-between items-center gap-8 mt-2 mb-4">
        <Link href="/">
          <a>
            <img src="/logo.png" alt="logo" className="w-32" onClick={() => setMenuOpen(false)} />
          </a>
        </Link>
        <XIcon className="w-5 text-white cursor-pointer" onClick={() => setMenuOpen(false)} />
      </div>

      <nav>
        <ul className="flex flex-col gap-4">
          {navLinks?.map(({ path, title, subMenus }, i) =>
            subMenus ? (
              <details key={i}>
                <summary className="flex justify-between items-center cursor-pointer" key={title}>
                  <h2 className="text-white font-normal capitalize">{title}</h2>
                  <div>
                    <ChevronDownIcon className="w-3 text-white" />
                  </div>
                </summary>
                <div className="flex flex-col gap-3 text-sm mt-2">
                  {subMenus.map(({ title, path, deepMenus }) =>
                    deepMenus ? (
                      <details key={i}>
                        <summary className="ml-2 text-sm flex justify-between items-center cursor-pointer" key={title}>
                          <h2 className="text-white font-normal capitalize">{title}</h2>
                          <div>
                            <ChevronDownIcon className="w-3 text-white" />
                          </div>
                        </summary>
                        <div className="flex flex-col gap-1 text-sm">
                          {deepMenus?.map(({ title, path }) => (
                            <Link href={path} key={path}>
                              <a
                                className="ml-3 py-1 pl-3 rounded-md text-[#d9d9d9] hover:text-accent capitalize"
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
                            pageLink == path && "text-accent font-semibold"
                          } ml-2 text-sm text-white hover:text-accent capitalize`}
                          onClick={() => setMenuOpen(false)}>
                          {title}
                        </a>
                      </Link>
                    )
                  )}
                </div>
              </details>
            ) : (
              <Link href={path} passHref={title == "Blog" && true} key={i}>
                <a
                  target={title == "Blog" && "_blank"}
                  className={`${
                    pageLink == path && "text-accent font-semibold"
                  } text-white hover:text-accent capitalize`}
                  onClick={() => setMenuOpen(false)}>
                  {title}
                </a>
              </Link>
            )
          )}
        </ul>
      </nav>

      <div className="flex flex-col gap-4">
        <Link href="/signup" className="">
          <a className="text-white" onClick={() => setMenuOpen(false)}>
            Become a Partner
          </a>
        </Link>
        <Link href="/login">
          <a
            className="btn bg-white hover:bg-white text-primary text-sm w-full font-normal"
            onClick={() => setMenuOpen(false)}>
            Log In
          </a>
        </Link>
      </div>
    </aside>
  );
};

export default MobileNavBar;
