export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <header className=" px-6 py-4 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-600">
          Full-Stack MERN Auth Project
        </h1>


      </header>

      <main className="flex-1 px-6 py-10 max-w-5xl mx-auto space-y-12">
        <section>
          <p className="text-lg md:text-xl leading-relaxed">
            This MERN stack website offers a user-friendly platform built with React.js.
            It features secure sign-up and sign-in options, including Google authentication,
            and allows users to update their username, email, and password with privacy protection.
            The platform ensures safe and efficient access for users.
          </p>
        </section>



        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Source Code</h2>
          <p>
            Explore the project’s source code on GitHub:{" "}
            <a
              href="https://github.com/Ashwath-S-kulal/MERN-Authentication-Web"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Git Repository
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            What I Was Learn
          </h2>
          <ul className="space-y-4 list-disc list-inside">
            <li>
              <strong>Frontend Setup:</strong> Install React.js, integrate Tailwind CSS, and use the
              latest React Router Dom to create authentication pages.
            </li>
            <li>
              <strong>Authentication Mastery:</strong> Implement email/password auth with JWT and
              integrate Google OAuth for seamless sign-ins.
            </li>
            <li>
              <strong>State Management:</strong> Use Redux Toolkit for efficient global state
              handling.
            </li>
            <li>
              <strong>Secure Profile Pages:</strong> Dual-layer protection on client and backend.
            </li>
            <li>
              <strong>Dynamic Profile Management:</strong> Update usernames, emails, passwords, and
              profile images via Firebase Storage.
            </li>
            <li>
              <strong>Account Deletion:</strong> Safely delete accounts with JWT cookie checks.
            </li>
            <li>
              <strong>CRUD Operations:</strong> Master Create, Read, Update, Delete with MongoDB.
            </li>
            <li>
              <strong>Deployment:</strong> Deploy for free on Render and share with the world.
            </li>
          </ul>
        </section>



      </main>


    </div>
  );
}
