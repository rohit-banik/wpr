import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  BasicDetails,
  MultiplePersonalDetails,
  ReportPreview,
  WeeklyDetails,
} from "./screens";
import { Footer } from "./components";

function App() {
  return (
    <>
      <div className="sm:visible invisible ">
        <Routes>
          <Route path="/" Component={BasicDetails} />
          <Route path="/week" Component={WeeklyDetails} />
          <Route path="/report" Component={ReportPreview} />
          <Route path="/personal" Component={MultiplePersonalDetails} />
          <Route path="/uploadweek" Component={MultiplePersonalDetails} />
        </Routes>
        <Footer />
      </div>
      <div className="visible sm:invisible text-black z-50 absolute top-1/2 p-5">
        <img
          className="h-auto w-96 absolute -mt-96"
          src={process.env.PUBLIC_URL + "/assets/pc.jpg"}
          alt=""
        />
        This site works on desktop. Mobile version is still under construction
      </div>
    </>
  );
}

export default App;
