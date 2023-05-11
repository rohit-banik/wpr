import React, { useState } from "react";
import "./formComponent.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineDelete, AiOutlineUserAdd } from "react-icons/ai";

const FormComponent = () => {
  const navigate = useNavigate();
  const programs = ["B. TECH"];
  const streams = ["CSE", "ECE", "EEE", "MAE", "AI", "AIR"];
  const designations = ["MR", "MS", "MRS", "DR"];
  const sections = ["A", "B", "C", "D"];

  const [enrolment, setEnrolment] = useState([""]);
  const [studentName, setStudentName] = useState([""]);
  const [program, setProgram] = useState([""]);
  const [stream, setStream] = useState([""]);
  const [section, setSection] = useState([""]);
  const [companyName, setCompanyName] = useState("");
  const [fDesignation, setFDesignation] = useState("MR");
  const [iDesignation, setIDesignation] = useState("MR");
  const [facultyName, setFacultyName] = useState("");
  const [industryGuideName, setIndustryGuideName] = useState("");
  const [projectTitle, setProjectTitle] = useState("");

  const handleEnrolmentChange = (index, e) => {
    const enrols = [...enrolment];
    enrols[index] = e.target.value;
    setEnrolment(enrols);
  };
  const handleNameChange = (index, e) => {
    const names = [...studentName];
    names[index] = e.target.value;
    setStudentName(names);
  };
  const handleProgramChange = (index, e) => {
    const programs = [...program];
    programs[index] = e.target.value;
    setProgram(programs);
  };
  const handleStreamChange = (index, e) => {
    const streams = [...stream];
    streams[index] = e.target.value;
    setStream(streams);
  };
  const handleSectionChange = (index, e) => {
    const sections = [...section];
    sections[index] = e.target.value;
    setSection(sections);
  };
  const handleCompanyNameChange = (e) => setCompanyName(e.target.value);
  const handleFDesignationChange = (e) => setFDesignation(e.target.value);
  const handleFacultyNameChange = (e) => setFacultyName(e.target.value);
  const handleIDesignationChange = (e) => setIDesignation(e.target.value);
  const handleIndustryNameChange = (e) => setIndustryGuideName(e.target.value);
  const handleProjectTitleChange = (e) => setProjectTitle(e.target.value);

  const handleAddInput = () => {
    setStudentName([...studentName, ""]);
    setEnrolment([...enrolment, ""]);
    setProgram([...program, ""]);
    setStream([...stream, ""]);
    setSection([...section, ""]);
  };

  const handleDeleteInput = (index) => {
    const enrol = [...enrolment];
    enrol.splice(index, 1);
    setEnrolment(enrol);

    const names = [...studentName];
    names.splice(index, 1);
    setStudentName(names);

    const programs = [...program];
    programs.splice(index, 1);
    setProgram(programs);

    const streams = [...stream];
    streams.splice(index, 1);
    setStream(streams);

    const sections = [...section];
    sections.splice(index, 1);
    setSection(sections);
  };
  // const handleSingleUserRoute = (e) => {
  //   navigate("/");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      enrolment,
      studentName,
      program,
      stream,
      section,
      companyName,
      fDesignation,
      iDesignation,
      facultyName,
      industryGuideName,
      projectTitle,
    };
    localStorage.setItem("detailsFormData", JSON.stringify(data));

    // console.log(studentName);
    navigate("/week");
    console.log(JSON.parse(localStorage.getItem("detailsFormData")));
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
          Enter personal details
        </p>
        {studentName.map((value, index) => (
          <div key={index}>
            <div className="flex gap-10">
              <p className="text-sm uppercase text-emerald-800 text-left mb-1 font-semibold">
                member {index + 1}
              </p>
              <button
                onClick={() => handleDeleteInput(index)}
                className="text-xl uppercase text-red-700 text-left mb-1 font-semibold"
              >
                <div className="flex gap-1">
                  <AiOutlineDelete />{" "}
                  <span className="text-xs mt-1">Delete member</span>
                </div>
              </button>
            </div>
            {/* name and enrol */}
            <div className="flex flex-wrap -mx-3 mb-1">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-enrolment"
                >
                  Enrolment Number
                </label>
                <input
                  className="appearance-none uppercase block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  required
                  type="text"
                  placeholder="A9100521XXXX"
                  onChange={(event) => handleEnrolmentChange(index, event)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-name"
                >
                  Name
                </label>
                <input
                  className="appearance-none capitalize block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  required
                  type="text"
                  placeholder="John Doe"
                  value={value}
                  onChange={(event) => handleNameChange(index, event)}
                />
              </div>
            </div>

            {/* program stream section */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-program"
                >
                  Program
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    onChange={(event) => handleProgramChange(index, event)}
                  >
                    <option selected value={""}>
                      Select Program
                    </option>
                    {programs.map((item) => {
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
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-stream"
                >
                  Stream
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    onChange={(event) => handleStreamChange(index, event)}
                  >
                    <option selected value={""}>
                      Select Stream
                    </option>
                    {streams.map((item) => {
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
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-stream"
                >
                  Section
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    onChange={(event) => handleSectionChange(index, event)}
                  >
                    <option selected value={""}>
                      Select Section
                    </option>
                    {sections.map((item) => {
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
          </div>
        ))}

        <div className="text-right">
          <button
            onClick={handleAddInput}
            className="text-xl uppercase text-green-800 text-left mb-1 font-semibold"
          >
            <div className="flex gap-1 cursor-pointer">
              <AiOutlineUserAdd className="" />{" "}
              <span className="text-sm">Add member</span>
            </div>
          </button>
        </div>

        {/* company name */}
        <div className="flex flex-wrap -mx-3 my-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-company-name"
            >
              Company Name
            </label>
            <input
              className="appearance-none capitalize block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-company-name"
              type="text"
              placeholder="Google INC."
              onChange={handleCompanyNameChange}
            />
            <p className="text-green-700 text-sm italic">
              Please mention if Applicable
            </p>
          </div>
        </div>

        {/* faculty & industry guide */}
        <div className="flex flex-wrap -mr-3 mb-3">
          <div className="w-full md:w-1/12 mb-6 md:mb-0">
            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-designation"
              >
                Designation
              </label>
              <select
                className="block capitalize appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-designation"
                value={fDesignation}
                onChange={handleFDesignationChange}
              >
                {designations.map((item) => {
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
          <div className="w-full md:w-5/12 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-guide-name"
            >
              Faculty Guide's Name
            </label>
            <input
              className="appearance-none capitalize block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-guide-name"
              required
              type="text"
              placeholder="Lara Johnson"
              onChange={handleFacultyNameChange}
            />
          </div>

          <div className="w-full md:w-1/12 mb-6 md:mb-0">
            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-designation"
              >
                Designation
              </label>
              <select
                className="block capitalize appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-designation"
                value={iDesignation}
                onChange={handleIDesignationChange}
              >
                {designations.map((item) => {
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
          <div className="w-full md:w-5/12 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-in-guide-name"
            >
              Industry Guide's Name
            </label>
            <input
              className="appearance-none capitalize block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-in-guide-name"
              type="text"
              placeholder="John Johnson"
              onChange={handleIndustryNameChange}
            />
            <p className="text-green-700 text-sm italic">
              Please mention if Applicable
            </p>
          </div>
        </div>

        {/* Project title */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-project-title"
            >
              Project Title
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-project-title"
              type="text"
              placeholder="Big Data model"
              required
              onChange={handleProjectTitleChange}
            />
          </div>
        </div>

        <button className="custom-btn btn-15">Submit</button>
      </form>
    </>
  );
};
export default FormComponent;
