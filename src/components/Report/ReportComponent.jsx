import React from "react";
import "./reportComponent.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";

const ReportComponent = () => {
  const navigate = useNavigate();
  const weekData = JSON.parse(localStorage.getItem("weeklyFormData"));
  const personalData = JSON.parse(localStorage.getItem("detailsFormData"));

  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    // const data = await document.querySelector("#pdf");
    const data = await html2canvas(document.querySelector("#pdf"), {
      quality: 4,
      scale: 5,
    });
    const img = data.toDataURL("image/jpeg", 0.1);
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "JPEG", 0, 40, pdfWidth, pdfHeight);
    pdf.save(
      personalData.studentName +
        "_" +
        personalData.enrolment +
        "_Week-" +
        weekData.weekNumber +
        ".pdf"
    );
  };

  const createNewWPR = async () => {
    await localStorage.removeItem("weeklyFormData");
    navigate("/week");
  };
  const createNewUser = async () => {
    await localStorage.removeItem("weeklyFormData");
    await localStorage.removeItem("detailsFormData");
    navigate("/");
  };
  const weeks = [
    { value: 0, day: "Monday" },
    { value: 1, day: "Tuesday" },
    { value: 2, day: "Wednesday" },
    { value: 3, day: "Thursday" },
    { value: 4, day: "Friday" },
  ];
  return (
    <>
      <div className="report-body w-screen max-w-3xl text-left bg-slate-300 p-10 rounded-lg mb-5">
        <div className="flex flex-row gap-2">
          <button onClick={createPDF} className="custom-btn btn-15">
            Print
          </button>
          <button onClick={createNewWPR} className="custom-btn btn-16">
            Create new WPR (same user)
          </button>
          <button onClick={createNewUser} className="custom-btn btn-16">
            Create new WPR (new user)
          </button>
        </div>
        <div id="pdf" className="mt-10">
          <img
            className="h-auto w-16 absolute ml-10"
            src={process.env.PUBLIC_URL + "/assets/amity-logo.png"}
            alt=""
          />
          <p className="mt-5 text-4xl text-center uppercase font-bold underline">
            Amity University
          </p>
          <p className="mt-4 text-base text-center capitalize font-semibold">
            major project: weekly progress report
          </p>
          <p className="mt-2 text-lg underline text-center font-semibold">
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
            <div className="relative overflow-x-auto">
              <table className="w-full mt-6 text-sm text-left text-gray-900">
                <tbody>
                  <tr>
                    <th
                      scope="row"
                      className="align-top font-bold whitespace-nowrap"
                    >
                      Enrollment No.:
                    </th>
                    <td className="">{personalData.enrolment}</td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      className="align-top font-bold whitespace-nowrap"
                    >
                      Name:
                    </th>
                    <td className="">{personalData.studentName}</td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      className="align-top font-bold whitespace-nowrap"
                    >
                      Program:
                    </th>
                    <td className="">
                      {personalData.program} {personalData.stream}{" "}
                      {personalData.section}
                    </td>
                  </tr>

                  <tr>
                    <td className="text-slate-300">. </td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      className="align-top font-bold whitespace-nowrap"
                    >
                      Company Name:
                    </th>
                    <td className="">{personalData.companyName}</td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      className="align-top font-bold whitespace-nowrap"
                    >
                      Faculty Guide Name:
                    </th>
                    <td className="">
                      <span className="capitalize">
                        {personalData.fDesignation}.
                      </span>{" "}
                      {personalData.facultyName}
                    </td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      className="align-top font-bold whitespace-nowrap"
                    >
                      Industry Guide Name:
                    </th>
                    <td className="">
                      <span className="capitalize">
                        {personalData.iDesignation}.
                      </span>{" "}
                      {personalData.industryGuideName}
                    </td>
                  </tr>

                  <tr>
                    <td className="text-slate-300">. </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="align-top font-bold whitespace-nowrap"
                    >
                      Project Title:
                    </th>
                    <td className="">{personalData.projectTitle}</td>
                  </tr>

                  <tr>
                    <td className="text-slate-300">. </td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      className="align-top font-bold whitespace-nowrap"
                    >
                      Targets for the week:
                    </th>
                    <td className="">{weekData.target}</td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      className="align-top font-bold whitespace-nowrap"
                    >
                      Achievements for the week:
                    </th>
                    <td className="">{weekData.achievement}</td>
                  </tr>

                  <tr>
                    <td className="text-slate-300">. </td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      className="align-top font-bold whitespace-nowrap"
                    >
                      Future work plans:
                    </th>
                    <td className="">{weekData.futurePlan}</td>
                  </tr>
                </tbody>
              </table>

              <p className="text-xl my-5 text-center uppercase font-bold underline">
                Week summary
              </p>

              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-900">
                  <thead className="text-xs bg-white text-gray-900 uppercase">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 border border-gray-900"
                      >
                        Days / Time
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 border border-gray-900"
                      >
                        Work Progress
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {weeks.map((item) => {
                      return (
                        <tr key={item.value} className="bg-white">
                          <th
                            scope="row"
                            className="italic font-semibold px-6 py-4  text-gray-900 whitespace-nowrap border border-gray-900"
                          >
                            {item.day}
                          </th>
                          <td className="px-6 py-4 border border-gray-900">
                            {weekData.progress[item.value]}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportComponent;
