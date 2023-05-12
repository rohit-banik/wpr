import React, { useState } from "react";
import "./formComponent.css";
import { useNavigate } from "react-router-dom";

const FormComponent = () => {
  const navigate = useNavigate();
  const getCurrentDate = new Date();
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
    { value: 1, name: "February", days: leapYear === true ? 29 : 28 },
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

  // const weeks = [
  //   { value: 0, day: "Monday", progress: "" },
  //   { value: 1, day: "Tuesday", progress: "" },
  //   { value: 2, day: "Wednesday", progress: "" },
  //   { value: 3, day: "Thursday", progress: "" },
  //   { value: 4, day: "Friday", progress: "" },
  // ];

  const [year, setYear] = useState(getCurrentDate.getFullYear());
  const [startMonth, setStartMonth] = useState(0);
  const [endMonth, setEndMonth] = useState(0);
  const [startDay, setStartDay] = useState(1);
  const [endDay, setEndDay] = useState(1);
  const [weekNumber, setWeekNumber] = useState(1);
  const [target, setTarget] = useState("");
  const [achievement, setAchievement] = useState("");
  const [futurePlan, setFuturePlan] = useState("");

  const [progress0, setProgress0] = useState("");
  const [progress1, setProgress1] = useState("");
  const [progress2, setProgress2] = useState("");
  const [progress3, setProgress3] = useState("");
  const [progress4, setProgress4] = useState("");

  const daysInStartMonth = months[startMonth].days;
  const daysInEndMonth = months[endMonth].days;
  const startDaysArray = [...Array(daysInStartMonth - 1 + 1).keys()];
  const endDaysArray = [...Array(daysInEndMonth - 1 + 1).keys()];

  const handleWeekNumberChange = (e) => setWeekNumber(e.target.value);
  const handleTargetChange = (e) => setTarget(e.target.value);
  const handleAchievementChange = (e) => setAchievement(e.target.value);
  const handleFuturePlanChange = (e) => setFuturePlan(e.target.value);

  const handleYearChange = (e) => {
    setYear(e.target.value);
    handleLeapYearControl(e.target.value);
  };

  const handleStartMonthChange = (e) => {
    setStartMonth(e.target.value);
    // console.log(daysInStartMonth);
  };
  const handleEndMonthChange = (e) => {
    setEndMonth(e.target.value);
    // console.log(daysInEndMonth);
  };
  const handleStartDayChange = (e) => setStartDay(e.target.value);
  const handleEndDayChange = (e) => setEndDay(e.target.value);

  const handleLeapYearControl = (e) => {
    (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0
      ? setLeapYear(true)
      : setLeapYear(false);
  };

  const handleProgressChange0 = (e) => {
    setProgress0(e.target.value);
  };
  const handleProgressChange1 = (e) => {
    setProgress1(e.target.value);
  };
  const handleProgressChange2 = (e) => {
    setProgress2(e.target.value);
  };
  const handleProgressChange3 = (e) => {
    setProgress3(e.target.value);
  };
  const handleProgressChange4 = (e) => {
    setProgress4(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      year: year,
      startMonth: startMonth,
      startDay: startDay,
      endMonth: endMonth,
      endDay: endDay,
      weekNumber: weekNumber,
      target: target,
      achievement: achievement,
      futurePlan: futurePlan,
      progress: [progress0, progress1, progress2, progress3, progress4],
    };
    localStorage.setItem("weeklyFormData", JSON.stringify(data));
    navigate("/report");
    // console.log(JSON.parse(localStorage.getItem("weeklyFormData")));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-screen max-w-6xl text-left bg-slate-300 p-10 rounded-lg my-5"
      >
        <p className="text-2xl capitalize text-amber-900 text-center mb-5 italic font-semibold">
          Enter weekly details
        </p>

        {/* start Date and week number */}
        <div className="flex flex-wrap -ml-3 -mr-28 mb-2">
          <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
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
          <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-start-month"
              >
                Start Month
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-start-month"
                value={startMonth}
                onChange={handleStartMonthChange}
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
          <div className="w-full md:w-1/12 px-3 mb-6 md:mb-0">
            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-start-day"
              >
                Start Day
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-start-day"
                value={startDay}
                onChange={handleStartDayChange}
              >
                {startDaysArray.map((item) => {
                  return (
                    <option key={item + 1} value={item + 1}>
                      {item + 1}
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
          <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-end-month"
              >
                End Month
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-end-month"
                value={endMonth}
                onChange={handleEndMonthChange}
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
          <div className="w-full md:w-1/12 px-3 mb-6 md:mb-0">
            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-end-day"
              >
                End Day
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-end-day"
                value={endDay}
                onChange={handleEndDayChange}
              >
                {endDaysArray.map((item) => {
                  return (
                    <option key={item + 1} value={item + 1}>
                      {item + 1}
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
              onChange={handleWeekNumberChange}
            />
          </div>
        </div>

        {/* Targets for week */}
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
              onChange={handleTargetChange}
            />
          </div>
        </div>

        {/* Achievements */}
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
              onChange={handleAchievementChange}
            />
          </div>
        </div>

        {/* Future Work Plan */}
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
              onChange={handleFuturePlanChange}
            />
            <p className="text-green-700 text-sm italic">
              Please mention if Applicable
            </p>
          </div>
        </div>

        {/* Week summary */}
        <p className="text-md uppercase underline text-blue-900 text-center mb-2 font-semibold">
          Enter your day progress
        </p>
        {/* Monday */}
        <div className="flex flex-wrap -mr-3 mb-5">
          <div className="w-full md:w-1/6 mb-6 md:mb-0">
            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-progress-monday"
              >
                Day/Time
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-progress-monday"
                required
                disabled
                value="Monday"
                type="text"
              />
            </div>
          </div>
          <div className="w-full md:w-5/6 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-progress-monday"
            >
              Work Progress
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-progress-monday"
              type="text"
              placeholder="Write your progress for the day"
              onChange={handleProgressChange0}
            />
          </div>
        </div>
        {/* Tuesday */}
        <div className="flex flex-wrap -mr-3 mb-5">
          <div className="w-full md:w-1/6 mb-6 md:mb-0">
            <div className="relative">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-progress-tuesday"
                required
                disabled
                value="Tuesday"
                type="text"
              />
            </div>
          </div>
          <div className="w-full md:w-5/6 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-progress-tuesday"
              type="text"
              placeholder="Write your progress for the day"
              onChange={handleProgressChange1}
            />
          </div>
        </div>
        {/* Wednesday */}
        <div className="flex flex-wrap -mr-3 mb-5">
          <div className="w-full md:w-1/6 mb-6 md:mb-0">
            <div className="relative">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-progress-wednesday"
                required
                disabled
                value="Wednesday"
                type="text"
              />
            </div>
          </div>
          <div className="w-full md:w-5/6 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-progress-wednesday"
              type="text"
              placeholder="Write your progress for the day"
              onChange={handleProgressChange2}
            />
          </div>
        </div>
        {/* Thursday */}
        <div className="flex flex-wrap -mr-3 mb-5">
          <div className="w-full md:w-1/6 mb-6 md:mb-0">
            <div className="relative">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-progress-thursday"
                required
                disabled
                value="Thursday"
                type="text"
              />
            </div>
          </div>
          <div className="w-full md:w-5/6 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-progress-thursday"
              type="text"
              placeholder="Write your progress for the day"
              onChange={handleProgressChange3}
            />
          </div>
        </div>
        {/* Friday */}
        <div className="flex flex-wrap -mr-3 mb-5">
          <div className="w-full md:w-1/6 mb-6 md:mb-0">
            <div className="relative">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-progress-friday"
                disabled
                value="Friday"
                type="text"
              />
            </div>
          </div>
          <div className="w-full md:w-5/6 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-progress-friday"
              required
              type="text"
              placeholder="Write your progress for the day"
              onChange={handleProgressChange4}
            />
          </div>
        </div>

        <button className="custom-btn btn-15">Submit</button>
      </form>
    </>
  );
};
export default FormComponent;
