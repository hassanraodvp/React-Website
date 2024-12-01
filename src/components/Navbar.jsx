import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenu]);
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center py-2 px-3 justify-between lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 cursor-pointer">
            <span className="sr-only">Your Company</span>
            <img
              className="h-12 w-12 rounded-full"
              src="https://w0.peakpx.com/wallpaper/410/412/HD-wallpaper-plain-black-black.jpg"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <img
              className="h-12 w-12 rounded-full cursor-pointer"
              onClick={() => setMobileMenu(true)}
              src="https://w7.pngwing.com/pngs/616/930/png-transparent-hamburger-button-computer-icons-menu-bar-line-thumbnail.png"
            />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-orange-700" : "text-gray-900"}`
            }
          >
            <a href="#" className="text-sm/6 font-semibold cursor-pointer">
              Home
            </a>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? "text-orange-700" : "text-gray-900"}`
            }
          >
            <a href="#" className="text-sm/6 font-semibold cursor-pointer">
              About
            </a>
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${isActive ? "text-orange-700" : "text-gray-900"}`
            }
          >
            <a
              href="#Projects"
              className="text-sm/6 font-semibold cursor-pointer"
            >
              Projects
            </a>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive ? "text-orange-700" : "text-gray-900"}`
            }
          >
            <a href="#" className="text-sm/6 font-semibold cursor-pointer ">
              Contact
            </a>
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              `${isActive ? "text-orange-700" : "text-gray-900"}`
            }
          >
            <a href="#" className="text-sm/6 font-semibold cursor-pointer ">
              Jobs
            </a>
          </NavLink>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-sm/6 font-semibold cursor-pointer bg-blue-600 hover:bg-blue-500 text-white text-center py-2.5 px-4 rounded-full"
            onClick={() => navigate("/login")}
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      {/* <div className="lg:hidden" role="dialog" aria-modal="true"> */}
      {/* <div className="fixed inset-0 z-10"></div> */}
      <div
        className={`md:hidden ${
          mobileMenu ? "fixed w-full" : "h-0 w-0"
        }  right-0 top-0 bottom-0 justify-end overflow-hidden bg-white px-3 py-2 transition ease-in-out duration-500 z-50`}
      >
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Projects</span>
            <img
              className="h-12 w-12 rounded-full cursor-pointer"
              src="https://w0.peakpx.com/wallpaper/410/412/HD-wallpaper-plain-black-black.jpg"
            />
          </a>
          <img
            className="-m-2.5 w-16 rounded-full p-2.5 text-gray-700 cursor-pointer"
            onClick={() => setMobileMenu(false)}
            src="https://cdn.pixabay.com/photo/2017/11/10/05/24/delete-2935433_960_720.png"
          />
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <Link to="/">
                <a
                  href="#"
                  className="-mx-3 block cursor-pointer rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenu(false)}
                >
                  Home
                </a>
              </Link>
              <Link to="/about">
                <a
                  href="#"
                  onClick={() => setMobileMenu(false)}
                  className="-mx-3 cursor-pointer block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  About
                </a>
              </Link>
              <Link to="/projects">
                <a
                  href="#"
                  onClick={() => setMobileMenu(false)}
                  className="-mx-3 cursor-pointer block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Projects
                </a>
              </Link>
              <Link to="/contact">
                <a
                  href="#"
                  onClick={() => setMobileMenu(false)}
                  className="-mx-3 cursor-pointer block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
              </Link>
            </div>
            <div className="py-6">
              <a
                href="#"
                className="-mx-3 cursor-pointer block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 bg-slate-300 text-center"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </header>
  );
};

export default Navbar;
