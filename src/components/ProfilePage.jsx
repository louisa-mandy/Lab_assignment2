import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom"; // ✅ Import Link

const ProfilePage = () => {
    const [user] = useAuthState(auth);

    return (
        <div className="flex flex-col items-center justify-center p-6">
            <h2 className="text-2xl font-semibold mb-4">Profile</h2>

            {user ? (
                <>
                    <p className="text-lg">Email: {user.email}</p>
                    <img
                        className="w-32 h-32 rounded-full mt-4"
                        src={user.photoURL || "https://via.placeholder.com/150"}
                        alt="Profile"
                    />
                </>
            ) : (
                <p className="text-red-500">Please log in.</p>
            )}

            {/* ✅ Back to Home Button */}
            <Link to="/landingpage">
                <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Back to Landing Page
                </button>
            </Link>
        </div>
    );
};

export default ProfilePage;
