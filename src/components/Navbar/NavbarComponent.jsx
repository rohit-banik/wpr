import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavbarComponent = ({ menu }) => {
  const navigate = useNavigate();
  const basicDetails = JSON.parse(localStorage.getItem("basicDetailsData"));

  const handleChangeLocation = async () => {
    await localStorage.removeItem("detailsFormData");
    await localStorage.removeItem("weeklyFormData");
    navigate("/");
  };

  return (
    <>
      <div>
        <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b outline-none border-gray-400">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
            <Link to="/" className="flex items-center">
              <img
                src={process.env.PUBLIC_URL + "/assets/amity-logo.png"}
                className="h-12 mr-3"
                alt=""
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-900">
                Amity University
              </span>
            </Link>
            <div className="flex md:order-2">
              <div className="flex flex-col text-right focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 mr-3 md:mr-0 ">
                <div className="italic">
                  Current University:{" "}
                  <span className="text-green-800 uppercase font-bold text-lg">
                    {basicDetails.location}
                  </span>{" "}
                </div>
                <div
                  onClick={handleChangeLocation}
                  className="text-yellow-800 cursor-pointer font-bold -mt-1 -mr-11 text-xs"
                >
                  Change Location ?
                </div>
              </div>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 border-none outline-none font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0">
                {menu.map((item) => (
                  <li key={item.id} className="outline-none border-none">
                    <Link
                      to={item.link}
                      className="block py-2 pl-3 pr-4 rounded hover:font-bold hover:text-blue-800 md:p-0 text-blue-900 uppercase"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                {/* <li>
                  <Link
                    to="#"
                    className="block py-2 pl-3 pr-4 rounded hover:font-bold hover:text-blue-800 md:p-0 text-blue-900 uppercase"
                  >
                    Create New Week
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarComponent;
