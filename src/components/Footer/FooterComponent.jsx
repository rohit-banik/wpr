import React from "react";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <>
      <footer className="bg-white shadow fixed left-0 z-50 bottom-0 w-screen">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">
            © 2023{" "}
            <Link
              to={"https://www.linkedin.com/in/rohit-banik/"}
              className="hover:underline text-green-700 uppercase font-bold"
            >
              Rohit Banik
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
