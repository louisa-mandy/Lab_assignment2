import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      {user ? (
        <>
          <Link to="/todo">To-Do</Link>
          <Link to="/profile">Profile</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
