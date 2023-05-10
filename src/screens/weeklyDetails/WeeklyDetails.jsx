import React from "react";
import { FormWeeklyReport } from "../../components";
import "./weeklyDetails.css";

const WeeklyDetails = () => {
  return (
    <>
      <div className="background">
        <div className="container mx-auto flex flex-col min-h-screen h-auto pt-5 items-center justify-center">
          <p className="text-2xl uppercase font-semibold">Amity University</p>
          {/* <FormPersonal /> */}
          <FormWeeklyReport />
        </div>
      </div>
    </>
  );
};

export default WeeklyDetails;
