import React from "react";
import { FormMultiplePersonal, NavbarComponent } from "../../components";
import "./multiplePersonalDetails.css";

const PersonalDetails = () => {
  return (
    <>
      <NavbarComponent />
      <div className="background">
        <div className="container mx-auto flex flex-col min-h-screen h-auto pt-16 items-center justify-center">
          <FormMultiplePersonal />
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
