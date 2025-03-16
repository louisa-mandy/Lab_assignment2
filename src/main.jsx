// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./index.css";
// import App from "./App";
// import LandingPage from "./components/LandingPage";
// import ProfilePage from "./components/ProfilePage";
// import { TodoWrapper } from "./components/TodoWrapper";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "./firebase"; 

// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/todo" element={<TodoWrapper />} />
//         <Route path="/profile" element={<ProfilePage />} />
//       </Routes>
//     </Router>
//   </StrictMode>
// );


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import LandingPage from "./components/LandingPage";
import ProfilePage from "./components/ProfilePage";
import { TodoWrapper } from "./components/TodoWrapper";
import Login from "./components/Login";
import Register from "./components/Register";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
// import { Navigate } from "react-router-dom";
// import { PrivateRoute } from "./PrivateRoute";

// Improved PrivateRoute with loading state
const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Loading...</p>; 

  return user ? children : <Navigate to="/login" />;
};

// Ensure root exists before rendering
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} /> {/* ✅ Redirect to Login */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/landingpage" element={<LandingPage />} /> {/* ✅ Landing Page */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/todo" element={<PrivateRoute><TodoWrapper /></PrivateRoute>} />
        </Routes>
      </Router>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
