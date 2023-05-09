import React from "react";
import { FormComponent } from "../../components";
import './home.css';

const home = () => {
  return (
    <>
    <div className="background">
      <div className="container mx-auto flex flex-col h-auto pt-5 items-center justify-center">
        <p className="text-2xl uppercase font-semibold">Amity University Kolkata</p>
        <FormComponent />
      </div>
    </div>
    </>
  );
};

export default home;
