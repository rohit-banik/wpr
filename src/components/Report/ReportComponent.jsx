import React from "react";
import "./reportComponent.css";

const ReportComponent = () => {
  const weekData = JSON.parse(localStorage.getItem("weeklyFormData"));
  const personalData = JSON.parse(localStorage.getItem("detailsFormData"));

  return (
    <>
      <div className="report-body w-screen max-w-6xl text-left bg-slate-300 p-10 rounded-lg my-5">
        <p className="text-2xl text-center uppercase font-bold underline">
          Amity University
        </p>
        <p className="mt-4 text-base text-center capitalize font-semibold">
          online research project: weekly progress report
        </p>
        <p className="mt-2 text-base text-center font-semibold">
          Week: {weekData.weekNumber}{" "}
          <span className="font-normal">
            ({("0" + weekData.startDay).slice(-2)}/
            {("0" + (weekData.startMonth + 1)).slice(-2)}/
            {("0" + weekData.year).slice(-2)} to{" "}
            {("0" + weekData.endDay).slice(-2)}/
            {("0" + (weekData.endMonth + 1)).slice(-2)}/
            {("0" + weekData.year).slice(-2)})
          </span>
        </p>

        <div className="px-10 w-full">
          <div class="relative overflow-x-auto">
            <table class="w-full mt-6 text-sm text-left text-gray-900">
              <tbody>
                <tr>
                  <th scope="row" class="font-bold whitespace-nowrap">
                    Enrollment No.:
                  </th>
                  <td class="">{personalData.enrolment}</td>
                </tr>
                <tr>
                  <th scope="row" class=" font-bold whitespace-nowrap">
                    Name:
                  </th>
                  <td class="">{personalData.studentName}</td>
                </tr>
                <tr>
                  <th scope="row" class=" font-bold whitespace-nowrap">
                    Program:
                  </th>
                  <td class="">
                    {personalData.program} {personalData.stream}{" "}
                    {personalData.section}
                  </td>
                </tr>
                <tr>
                  <th scope="row" class=" font-bold whitespace-nowrap">
                    Company Name:
                  </th>
                  <td class="">{personalData.companyName}</td>
                </tr>
                <tr>
                  <th scope="row" class=" font-bold whitespace-nowrap">
                    Faculty Guide Name:
                  </th>
                  <td class="">
                    <span className="capitalize">
                      {personalData.fDesignation}.
                    </span>{" "}
                    {personalData.facultyName}
                  </td>
                </tr>

                <tr>
                  <th scope="row" class=" font-bold whitespace-nowrap">
                    Industry Guide Name:
                  </th>
                  <td class="">
                    <span className="capitalize">
                      {personalData.iDesignation}.
                    </span>{" "}
                    {personalData.industryGuideName}
                  </td>
                </tr>

                <tr>
                  <th scope="row" class=" font-bold whitespace-nowrap">
                    Project Title:
                  </th>
                  <td class="">{personalData.projectTitle}</td>
                </tr>

                <tr>
                  <th scope="row" class=" font-bold whitespace-nowrap">
                    Targets for the week:
                  </th>
                  <td class="">{weekData.target}</td>
                </tr>

                <tr>
                  <th scope="row" class=" font-bold whitespace-nowrap">
                    Achievements for the week:
                  </th>
                  <td class="">{weekData.achievement}</td>
                </tr>

                <tr>
                  <th scope="row" class=" font-bold whitespace-nowrap">
                    Future work plans:
                  </th>
                  <td class="">{weekData.futurePlan}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportComponent;
