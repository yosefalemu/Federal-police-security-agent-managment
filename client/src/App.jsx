import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LogInPage.jsx";
import ApplyPage from "./pages/ApplyPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import AgentsListPage from "./pages/AdminPages/AgentsListPage.jsx";
import EmployeePage from "./pages/Agents/EmployeePage.jsx";
import AddEmployeePage from "./pages/Agents/AddEmployeePage.jsx";
import CreateUserPage from "./pages/AdminPages/CreateUserPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/agentslist" element={<AgentsListPage />} />
        <Route path="/employee" element={<EmployeePage />} />
        <Route path="/addemployee" element={<AddEmployeePage />} />
        <Route path="/createuser" element={<CreateUserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
