import React from "react";
import "./reportPreview.css";
import { ReportComponent } from "../../components";

const ReportPreview = () => {
  return (
    <>
      <div className="background">
        <div className="container mx-auto flex flex-col min-h-screen h-auto pt-5 items-center justify-center">
          <ReportComponent />
        </div>
      </div>
    </>
  );
};

export default ReportPreview;
