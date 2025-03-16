// import { Route, Routes } from "react-router-dom";
// import { TodoWrapper } from "./components/TodoWrapper";
// import Navbar from "./components/Navbar"; // Import the Navbar
// import LandingPage from "./components/LandingPage";
// import ProfilePage from "./components/ProfilePage";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import { auth } from "./firebase";
// import { useAuthState } from "react-firebase-hooks/auth";

// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar /> {/* Add the Navbar at the top */}
//         <h1 style={{ fontSize: "3rem", textAlign: "center" }}>📝 To-Do List ✅</h1>


//         <Routes>
//           <Route path="/" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/todo" element={<TodoWrapper />} />
//           <Route path="/profile" element={<ProfilePage />} />
//         </Routes>


//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { TodoWrapper } from "./components/TodoWrapper";
import Navbar from "./components/Navbar"; 
import LandingPage from "./components/LandingPage";
import ProfilePage from "./components/ProfilePage";
import Login from "./components/Login";
import Register from "./components/Register";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";


import "./App.css";

function App() {
  const [user] = useAuthState(auth); // Get current user

  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Add the Navbar at the top */}
        <h1 style={{ fontSize: "3rem", textAlign: "center" }}>📝 To-Do List ✅</h1>

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes (Require User to be Logged In) */}
          <Route path="/landingpage" element={<LandingPage />} /> {/* ✅ Landing Page */}
          <Route path="/todo" element={user ? <TodoWrapper /> : <Navigate to="/login" />} />
          <Route path="/profile" element={user ? <ProfilePage /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
