import React from "react";
import { FormWeeklyReport, NavbarComponent } from "../../components";
import "./weeklyDetails.css";

const WeeklyDetails = () => {
  const menus = [
    {
      id: 1,
      name: "Create new user",
      link: "/personal",
    },
    {
      id: 2,
      name: "Create new week",
      link: "/week",
    },
  ];
  return (
    <>
      <NavbarComponent menu={menus} />
      <div className="background">
        <div className="container mx-auto flex flex-col min-h-screen h-auto pt-16 items-center justify-center">
          <FormWeeklyReport />
        </div>
      </div>
    </>
  );
};

export default WeeklyDetails;
