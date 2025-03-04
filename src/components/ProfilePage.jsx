import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function ProfilePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center w-80">
      <img
        className="w-24 h-24 rounded-full mx-auto mb-4"
        src="/kirby.png"
        alt="Profile"
        style={{ width: "450px", height: "450px", borderRadius: "5%" }}
      />

        <h2 className="text-2xl font-semibold">Louisa Mandy Halim</h2>
        <p className="text-gray-600">Computer Science Undergraduate Student</p>

        &nbsp;&nbsp;

        <ul>
          <li>Age : 19</li>
          <li>University : Binus University International</li>
          <li>Hobbies : Sleeping & Playing Games</li>
        </ul>
        <Link to="/">
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProfilePage;
