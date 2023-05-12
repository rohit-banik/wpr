import React from "react";
import { FormBasicDetails, NavbarComponent } from "../../components";
import "./basicDetails.css";

const BasicDetails = () => {
  const menus = [];
  return (
    <>
      <NavbarComponent menu={menus} />
      <div className="background">
        <div className="container mx-auto flex flex-col min-h-screen h-auto pt-5 items-center justify-center">
          <p className="text-2xl uppercase font-semibold">Amity University</p>
          <FormBasicDetails />
        </div>
      </div>
    </>
  );
};

export default BasicDetails;
