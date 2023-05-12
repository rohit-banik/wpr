import React from "react";
import { FormWeeklyReport, NavbarComponent } from "../../components";
import "./weeklyDetails.css";

const WeeklyDetails = () => {
  return (
    <>
      <NavbarComponent />
      <div className="background">
        <div className="container mx-auto flex flex-col min-h-screen h-auto pt-16 items-center justify-center">
          <FormWeeklyReport />
        </div>
      </div>
    </>
  );
};

export default WeeklyDetails;
