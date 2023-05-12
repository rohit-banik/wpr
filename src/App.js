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
      <Routes>
        <Route path='/' Component={BasicDetails} />
        <Route path="/week" Component={WeeklyDetails} />
        <Route path="/report" Component={ReportPreview} />
        <Route path="/personal" Component={MultiplePersonalDetails} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
