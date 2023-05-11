import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  MultiplePersonalDetails,
  // PersonalDetails,
  ReportPreview,
  WeeklyDetails,
} from "./screens";

function App() {
  return (
    <Routes>
      {/* <Route path='/' Component={PersonalDetails} /> */}
      <Route path="/week" Component={WeeklyDetails} />
      <Route path="/report" Component={ReportPreview} />
      <Route path="/" Component={MultiplePersonalDetails} />
    </Routes>
  );
}

export default App;
