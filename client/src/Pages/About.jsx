import { Code, Github, GraduationCap, Rocket, Layers, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 text-gray-800 flex flex-col">
      <header className="px-4 py-12 md:py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/40 to-transparent blur-2xl" />
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 animate-gradient">
            Full-Stack MERN Auth Project
          </h1>
          <p className="text-base sm:text-lg mt-3 md:mt-4 text-gray-600 max-w-2xl mx-auto">
            A secure, scalable authentication system built with the MERN stack — combining speed,
            security, and simplicity.
          </p>
        </div>
      </header>

      <main className="flex-1 px-4 sm:px-6 py-8 md:py-12 max-w-6xl mx-auto space-y-10 md:space-y-16">
        <section className="bg-white/70 backdrop-blur-md shadow-md rounded-2xl p-6 sm:p-8 border border-blue-100 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700">
              About Project
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
            This MERN stack website offers a user-friendly platform built with React.js.
            It features secure sign-up and sign-in options, including Google authentication,
            and allows users to update their username, email, and password with privacy protection.
            The platform ensures safe and efficient access for users.
          </p>
        </section>

        <section className="bg-white/70 backdrop-blur-md shadow-md rounded-2xl p-6 sm:p-8 border border-blue-100 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Github className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700">
              Source Code
            </h2>
          </div>
          <p className="text-base sm:text-lg">
            Explore the project’s source code on GitHub:{" "}
            <a
              href="https://github.com/Ashwath-S-kulal/MERN-Authentication-Web"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline hover:text-blue-800 font-medium"
            >
              Git Repository
            </a>
          </p>
        </section>

        <section className="bg-white/70 backdrop-blur-md shadow-md rounded-2xl p-6 sm:p-8 border border-blue-100 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700">
              What I Was Learn
            </h2>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
            <li className="p-4 sm:p-6 bg-white shadow-md rounded-xl border border-blue-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <h3 className="font-semibold text-blue-700 text-lg mb-1">Frontend Setup</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Installed React.js, integrated Tailwind CSS, and implemented React Router Dom for dynamic authentication pages.
              </p>
            </li>

            <li className="p-4 sm:p-6 bg-white shadow-md rounded-xl border border-blue-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <h3 className="font-semibold text-blue-700 text-lg mb-1">Authentication Mastery</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Implemented JWT-based authentication and integrated Google OAuth for seamless, secure sign-ins.
              </p>
            </li>

            <li className="p-4 sm:p-6 bg-white shadow-md rounded-xl border border-blue-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <h3 className="font-semibold text-blue-700 text-lg mb-1">State Management</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Utilized Redux Toolkit for efficient and scalable global state management.
              </p>
            </li>

            <li className="p-4 sm:p-6 bg-white shadow-md rounded-xl border border-blue-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <h3 className="font-semibold text-blue-700 text-lg mb-1">Secure Profile Pages</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Built protected routes with client- and server-side verification for enhanced security.
              </p>
            </li>

            <li className="p-4 sm:p-6 bg-white shadow-md rounded-xl border border-blue-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <h3 className="font-semibold text-blue-700 text-lg mb-1">Dynamic Profile Management</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Enabled users to update their username, email, password, and profile picture via Firebase Storage.
              </p>
            </li>

            <li className="p-4 sm:p-6 bg-white shadow-md rounded-xl border border-blue-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <h3 className="font-semibold text-blue-700 text-lg mb-1">Account Deletion</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Implemented secure account deletion using JWT cookie verification for safe removal.
              </p>
            </li>

            <li className="p-4 sm:p-6 bg-white shadow-md rounded-xl border border-blue-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <h3 className="font-semibold text-blue-700 text-lg mb-1">CRUD Operations</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Mastered full CRUD operations with MongoDB for flexible backend functionality.
              </p>
            </li>

            <li className="p-4 sm:p-6 bg-white shadow-md rounded-xl border border-blue-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <h3 className="font-semibold text-blue-700 text-lg mb-1">Deployment</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Successfully deployed the full-stack application for free using Render hosting.
              </p>
            </li>
          </ul>

        </section>

        <section className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6 sm:p-10 text-center shadow-md hover:shadow-lg transition-all duration-300">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700">Tech Stack</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base font-medium">
            {["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Redux Toolkit"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-white/80 px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow hover:scale-105 transition-transform duration-200"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </section>

        <section className="bg-blue-600 text-white rounded-2xl p-6 sm:p-10 text-center shadow-md">
          <div className="flex justify-center mb-3 sm:mb-4">
            <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Security</h3>
          <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            MERN Auth is built with robust security principles — ensuring data encryption, JWT
            protection, and safe cloud storage for every user.
          </p>
        </section>
      </main>

      <footer className="text-center py-6 text-gray-500 text-xs md:text-sm bg-gray-50 border-t">
        © {new Date().getFullYear()} MERN Auth — Secure Authentication.
      </footer>
    </div>
  );
}
