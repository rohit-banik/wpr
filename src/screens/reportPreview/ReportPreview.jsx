import React from "react";
import "./reportPreview.css";
import { NavbarComponent, ReportComponent } from "../../components";

const ReportPreview = () => {
  return (
    <>
      <NavbarComponent />
      <div className="background">
        <div className="container mx-auto flex min-h-screen h-auto pt-5 items-center justify-center">
          <ReportComponent />
        </div>
      </div>
    </>
  );
};

export default ReportPreview;
