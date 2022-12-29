import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  const [product, setProduct] = useState(false);
  const [deliverables, setDeliverables] = useState(false);

  const MenuItem = (
    <React.Fragment>
      <Link
        to="/"
        onClick={() => setShow(!show)}
        href="/"
        className=" pr-[25px] focus:outline-none transition duration-150 ease-in-out hover:bg-gray-600 rounded font-medium   px-5 py-2 text-xs"
      >
        Home
      </Link>
      <Link
        to="/projectRoutes"
        onClick={() => setShow(!show)}
        href="/projectRoutes"
        className=" pr-[25px] focus:outline-none  transition duration-150 ease-in-out hover:bg-gray-600 rounded font-medium  px-5 py-2 text-xs"
      >
        Projects
      </Link>
      <Link
        to="/blogs"
        onClick={() => setShow(!show)}
        href="/blogs"
        className=" pr-[25px] focus:outline-none -gray-300  transition duration-150 ease-in-out hover:bg-gray-600 rounded font-medium  px-5 py-2 text-xs"
      >
        Blogs
      </Link>
    </React.Fragment>
  );

  return (
    <div className="">
      <div className=" h-full ">
        {/* Code block starts */}
        <nav className=" shadow xl:block hidden w-full bg-slate-800 z-40">
          <div className="mx-auto container px-6 py-2 xl:py-0">
            <div className="flex items-center justify-between w-full">
              {/* lg ---start */}
              <div className="">
                <Link href={"/"} className="">
                  <h2 className="hidden sm:block text-3xl text-gray-200 font-bold leading-normal pl-3">
                    SHA
                  </h2>
                </Link>
              </div>
              {/* lg ----- items ----- */}
              <div className="flex">
                <div className="hidden xl:flex items-center gap-2 md:mr-6 xl:mr-16 text-white">
                  {MenuItem}
                </div>
                {/* lg------end-section ------- */}
                <Link to="/contacts" className="hidden xl:flex items-center ">
                  <div className="relative md:mr-6 my-2">
                    <button className="focus:outline-none  border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-600 rounded font-medium text-gray-100 px-5 py-2 text-xs">
                      Contact
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <nav className="bg-slate-800">
          <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center z-40">
            <Link to="/" href="/" className="w-20">
              <h1 className="text-2xl text-white font-semibold uppercase">
                Sarwar Hossain
              </h1>
            </Link>

            {/* sm-----menubar */}
            <div className="flex items-center  p-2 ">
              <div
                id="menu"
                className="text-gray-800"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  ""
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu-2"
                    width={42}
                    height={42}
                    style={{
                      border: "2px solid white",
                      padding: "3px 3px",
                      borderRadius: "60px",
                      fontSize: "40px",
                    }}
                    color="white"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1={4} y1={6} x2={20} y2={6} />
                    <line x1={4} y1={12} x2={20} y2={12} />
                    <line x1={4} y1={18} x2={20} y2={18} />
                  </svg>
                )}
              </div>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}

          <div
            className={
              show
                ? "w-full xl:hidden h-full absolute   z-40  transform  translate-x-0 "
                : "   w-full xl:hidden h-full absolute z-40  transform -translate-x-full"
            }
          >
            <div
              className="bg-gray-800 opacity-50 w-full h-full"
              onClick={() => setShow(!show)}
            />
            <div className="w-64 z-40 fixed overflow-y-auto top-0 bg-slate-300 shadow h-[100%] flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out  ">
              <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <p className="text-base md:text-2xl text-gray-800">
                            Choose Menu
                          </p>
                        </div>
                        <div
                          id="cross"
                          className="text-gray-800"
                          onClick={() => setShow(!show)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-x"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* sm------nav---middle  Item */}
                    <ul className="f-m-m ">
                      <li className="flex flex-col mt-[30px] gap-2 text-black bg-slate-300 rounded-md">
                        {MenuItem}
                        <Link
                          to="/contacts"
                          onClick={() => setShow(!show)}
                          href="/blogs"
                          className=" pr-[25px] focus:outline-none -gray-300  transition duration-150 ease-in-out hover:bg-gray-600 rounded font-medium  px-5 py-2 text-xs"
                        >
                          Contacts
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Code block ends */}
      </div>
    </div>
  );
};

export default Navbar;
