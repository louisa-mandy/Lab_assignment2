import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import LandingPage from "./components/LandingPage";
import ProfilePage from "./components/ProfilePage";
import { TodoWrapper } from "./components/TodoWrapper";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/todo" element={<TodoWrapper />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  </StrictMode>
);
