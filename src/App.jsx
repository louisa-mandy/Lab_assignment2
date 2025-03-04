import { Route, Routes } from "react-router-dom";
import { TodoWrapper } from "./components/TodoWrapper";
import Navbar from "./components/Navbar"; // Import the Navbar
import LandingPage from "./components/LandingPage";
import ProfilePage from "./components/ProfilePage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Add the Navbar at the top */}
        <h1 style={{ fontSize: "3rem", textAlign: "center" }}>📝 To-Do List ✅</h1>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/todo" element={<TodoWrapper />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
