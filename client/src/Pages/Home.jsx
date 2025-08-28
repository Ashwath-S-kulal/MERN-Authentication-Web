export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">


      <section className="flex-1 flex flex-col items-center justify-start md:justify-center text-center px-6 mt-20 md:mt-0">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
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

      </section>


    </div>
  );
}
