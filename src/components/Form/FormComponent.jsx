import React, { useState } from "react";

const FormComponent = () => {
  const getCurrentDate = new Date();
  const programs = ["B. TECH"];
  const streams = ["CSE", "ECE", "EEE", "MAE", "AI", "AIR"];
  const designations = ["MR", "MS", "MRS", "DR"];
  const sections = ["A", "B", "C", "D"];
  const [leapYear, setLeapYear] = useState(false);
  
  var years = [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];
  const months = [
    { value: 0, name: "January", days: 31 },
    { value: 1, name: "February", days: leapYear === true ? 29 : 28},
    { value: 2, name: "March", days: 31 },
    { value: 3, name: "April", days: 30 },
    { value: 4, name: "May", days: 31 },
    { value: 5, name: "June", days: 30 },
    { value: 6, name: "July", days: 31 },
    { value: 7, name: "August", days: 31 },
    { value: 8, name: "September", days: 30 },
    { value: 9, name: "October", days: 31 },
    { value: 10, name: "November", days: 30 },
    { value: 11, name: "December", days: 31 },
  ];

  const [program, setProgram] = useState("Choose your program");
  const [stream, setStream] = useState("Choose your stream");
  const [designation, setDesignation] = useState("MR");
  const [section, setSection] = useState("A");
  
  const [year, setYear] = useState(getCurrentDate.getFullYear());
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(1);
  
  const daysInMonth = months[month].days;
  const daysArray = [...Array(daysInMonth - 1 + 1).keys()];

  const handleProgramChange = (e) => setProgram(e.target.value);
  const handleStreamChange = (e) => setStream(e.target.value);
  const handleDesignationChange = (e) => setDesignation(e.target.value);
  const handleSectionChange = (e) => setSection(e.target.value);
  
  const handleYearChange = (e) => {
    setYear(e.target.value);
    handleLeapYearControl(e.target.value);
  };
  
  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    console.log(daysInMonth);
  };
  const handleDayChange = (e) => setDay(e.target.value);
  
  
  const handleLeapYearControl = (e) => {
    (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0
      ? setLeapYear(true) : setLeapYear(false);
  };
  

  return (
    <>
      <form className="w-screen max-w-6xl text-left bg-slate-300 p-10 rounded-lg my-5">
        {/* name and enrol */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-enrolment"
            >
              Enrolment Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-enrolment"
              required
              type="text"
              placeholder="A9100521XXXX"
            />
            {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-name"
              required
              type="text"
              placeholder="John Doe"
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
                id="grid-program"
                value={program}
                onChange={handleProgramChange}
              >
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
                id="grid-stream"
                value={stream}
                onChange={handleStreamChange}
              >
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
                id="grid-stream"
                value={section}
                onChange={handleSectionChange}
              >
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

        {/* company name */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-company-name"
            >
              Company Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-company-name"
              type="text"
              placeholder="Google INC."
            />
            <p className="text-green-700 text-sm italic">
              Please mention if Applicable
            </p>
          </div>
        </div>

        {/* faculty & industry guide */}
        <div className="flex flex-wrap -mr-3 mb-6">
          <div className="w-full md:w-1/12 mb-6 md:mb-0">
            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-designation"
              >
                Designation
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-designation"
                value={designation}
                onChange={handleDesignationChange}
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
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-guide-name"
              required
              type="text"
              placeholder="Lara Johnson"
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
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-designation"
                value={designation}
                onChange={handleDesignationChange}
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
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-in-guide-name"
              type="text"
              placeholder="John Johnson"
            />
            <p className="text-green-700 text-sm italic">
              Please mention if Applicable
            </p>
          </div>
        </div>

        <div className="flex flex-wrap -mr-3 mb-6">
          
        </div>

        <div className="flex flex-wrap -ml-3 -mr-6 mb-2">
          <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-year"
              >
                Year
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-year"
                value={year}
                onChange={handleYearChange}
              >
                {years.map((item) => {
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
          <div className="w-full md:w-2/6 px-3 mb-6 md:mb-0">
            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-month"
              >
                Month
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-month"
                value={month}
                onChange={handleMonthChange}
              >
                {months.map((item) => {
                  return (
                    <option key={item.name} value={item.value}>
                      {item.name}
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
          <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-day"
              >
                Day
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-day"
                value={day}
                onChange={handleDayChange}
              >
                
                {daysArray.map(item => {
                  return (
                    <option key={item+1} value={item+1}>
                      {item+1}
                    </option>
                  )
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
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-week-number"
            >
              Week Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-week-number"
              type="number"
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-target-for-week"
            >
              Targets for the week
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-target-for-week"
              type="text"
              required
              placeholder="Going through some research papers"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-achievements"
            >
              Achievements for the week
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-achievements"
              type="text"
              placeholder="Calculated and plotted the graph of accuracy"
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-future-work"
            >
              Future work plans
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-future-work"
              type="text"
              placeholder="Improvement of the ML model"
            />
            <p className="text-green-700 text-sm italic">
              Please mention if Applicable
            </p>
          </div>
        </div>
        


      </form>
    </>
  );
};
export default FormComponent;
