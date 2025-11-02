import { Link } from "react-router-dom";
import { LogIn, UserPlus, Shield, Zap, Lock } from "lucide-react";
import { useSelector } from "react-redux";

export default function HomePage() {
  const { currentUser } = useSelector(state => state.user);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-blue-100">
      <section className="flex-1 flex flex-col items-center justify-start md:justify-center text-center px-6 mt-7 md:mt-14">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4 leading-tight">
          Welcome to <span className="text-blue-600">MERN Auth</span>
        </h2>
        <h2 className="text-sm md:text-xl font-bold text-gray-800 mb-4">
          Mern Stack Authentication Website
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mb-6">
          This MERN stack website offers a user-friendly platform built with React.js.
          It features secure sign-up and sign-in options, including Google authentication,
          and allows users to update their username, email, and password with privacy protection.
          The platform ensures safe and efficient access for users.
        </p>

        <div className="flex flex-col items-center space-y-4 mt-8">
          <p className="text-gray-700 text-lg font-medium">
            {currentUser
              ? "You can log in or create an account on this website using your Google (Gmail) credentials."
              : "Access, view, and manage your profile securely."}
          </p>

          {!currentUser ? (
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/sign-in"
                className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                <LogIn className="w-5 h-5" /> Login
              </Link>

              <Link
                to="/sign-up"
                className="flex items-center gap-2 px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 font-semibold rounded-full shadow-lg hover:bg-blue-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <UserPlus className="w-5 h-5" /> Sign Up
              </Link>
            </div>
          ) : (
            <Link
              to="/profile"
              className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-blue-600 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={currentUser.profilePicture || "/default-avatar.png"}
                alt="Profile"
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-blue-600 font-semibold">Go to Profile</span>
            </Link>
          )}
        </div>
      </section>

      <section className="py-16 bg-white mt-10">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Why It is <span className="text-blue-600">Secured?</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center">
            <Shield className="w-10 h-10 mx-auto text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Secure Authentication</h4>
            <p className="text-gray-600">
              Advanced encryption and JWT-based auth to protect your credentials and privacy.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center">
            <Zap className="w-10 h-10 mx-auto text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Lightning Fast</h4>
            <p className="text-gray-600">
              Optimized backend with Node.js and MongoDB ensures quick and reliable user access.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center">
            <Lock className="w-10 h-10 mx-auto text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Privacy Focused</h4>
            <p className="text-gray-600">
              Manage your data safely with end-to-end protection and secure password storage.
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-500 text-xs md:text-sm bg-gray-50 border-t">
        © {new Date().getFullYear()} MERN Auth — Secure Authentication.
      </footer>
    </div>
  );
}
