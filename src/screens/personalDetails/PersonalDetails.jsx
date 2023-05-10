import React from "react";
import { FormPersonal } from "../../components";
import "./personalDetails.css";

const PersonalDetails = () => {
  return (
    <>
      <div className="background">
        <div className="container mx-auto flex flex-col min-h-screen h-auto pt-5 items-center justify-center">
          <p className="text-2xl uppercase font-semibold">Amity University</p>
          <FormPersonal />
          {/* <FormWeeklyReport /> */}
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
