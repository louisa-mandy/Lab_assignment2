import { Link } from "react-router-dom";
import Navbar from "./Navbar";
// import { auth } from "../firebase"; 

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to Your To-Do App</h1>
      <Link to="/todo">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg shadow-md hover:bg-blue-600">
          Go to To-Do List
        </button>
      </Link>

      <Link to="/profile">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg shadow-md hover:bg-blue-600">
          Go to Profile Page
        </button>
      </Link>
    </div>
    
  );
}

export default LandingPage;
