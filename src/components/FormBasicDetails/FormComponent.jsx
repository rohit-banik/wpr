import React, { useState } from "react";
import "./formComponent.css";
import { useNavigate } from "react-router-dom";

const FormComponent = () => {
  const navigate = useNavigate();
  const locations = ["Noida", "Kolkata", "Mumbai"];
  const projectTypes = [
    "Major Project",
    "Minor Project",
    "Industry Internship",
    "Online Research Project",
  ];

  const [location, setLocation] = useState("");
  const [projectType, setProjectType] = useState("");

  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleProjectTypeChange = (e) => setProjectType(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      location,
      projectType,
    };
    localStorage.setItem("basicDetailsData", JSON.stringify(data));

    // console.log(data);
    navigate("/personal");
    // console.log(JSON.parse(localStorage.getItem("basicDetailsData")));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-screen max-w-6xl text-left bg-slate-300 p-10 rounded-lg my-5"
      >
        {/* <div className="text-right">
          <button
            onClick={handleSingleUserRoute}
            className="text-sm cursor-pointer uppercase text-green-700 text-left mb-1 font-semibold"
          >
            <div className="flex gap-1">Create individual WPR</div>
          </button>
        </div> */}
        <p className="text-2xl capitalize text-orange-900 text-center mb-5 italic font-semibold">
          Enter basic details
        </p>

        {/* location, project type */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-location"
            >
              Choose University Location
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={handleLocationChange}
                defaultValue={location[0]}
              >
                <option selected disabled value={""}>
                  Select Location
                </option>
                {locations.map((item) => {
                  return (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-project-type"
            >
              Project Type
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={handleProjectTypeChange}
                defaultValue={projectType[0]}
              >
                <option selected disabled value={""}>
                  Select Project Type
                </option>
                {projectTypes.map((item) => {
                  return (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <button className="custom-btn btn-15">Create WPR</button>
      </form>
    </>
  );
};
export default FormComponent;
