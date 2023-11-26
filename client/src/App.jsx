import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LogInPage.jsx";
import ApplyPage from "./pages/ApplyPage.jsx";
import AgentsListPage from "./pages/AdminPages/AgentsListPage.jsx";
import EmployeePage from "./pages/Agents/EmployeePage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/agentslist" element={<AgentsListPage />} />
        <Route path="/employee" element={<EmployeePage />} />
      </Routes>
    </Router>
  );
}

export default App;
