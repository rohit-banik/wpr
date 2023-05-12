import React from "react";
import { FormWeeklyReport } from "../../components";
import "./weeklyDetails.css";

const WeeklyDetails = () => {
  const basicDetails = JSON.parse(localStorage.getItem("basicDetailsData"));

  return (
    <>
      <div className="background">
        <div className="container mx-auto flex flex-col min-h-screen h-auto pt-5 items-center justify-center">
          <p className="text-2xl uppercase font-semibold">
            Amity University {basicDetails.location}
          </p>
          {/* <FormPersonal /> */}
          <FormWeeklyReport />
        </div>
      </div>
    </>
  );
};

export default WeeklyDetails;
