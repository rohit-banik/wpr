import React from "react";
import "./reportPreview.css";
import { NavbarComponent, ReportComponent } from "../../components";

const ReportPreview = () => {
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
  const basicDetails = JSON.parse(localStorage.getItem("basicDetailsData"));
  const uniLocation = basicDetails.location;
  return (
    <>
      <NavbarComponent menu={(menus, uniLocation)} />
      <div className="background">
        <div className="container mx-auto flex min-h-screen h-auto pt-5 items-center justify-center">
          <ReportComponent />
        </div>
      </div>
    </>
  );
};

export default ReportPreview;
