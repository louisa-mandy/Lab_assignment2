import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/" className="text-lg font-bold hover:text-gray-300">Home</Link>
      <div className="space-x-4">
        <Link to="/todo" className="hover:text-gray-300">To-Do List</Link>
        <Link to="/profile" className="hover:text-gray-300">Profile</Link>
      </div>
    </nav>
  );
}

export default Navbar;
