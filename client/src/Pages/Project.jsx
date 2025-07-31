import React from 'react'
import PortfolioImg from "../Images/PorfolioImg.jpg"
import AgriBookImg from '../Images/ABS.jpg';
import SMDImg from '../Images/SMDIMG.png';
import AuthImg from '../Images/Authentication.jpg';
import SSWPImg from '../Images/SSWPIMG.webp';
import { Link } from 'react-router-dom'

export default function Project() {
  return (
    <div >
      <h1 className='text-3xl text-center text-white font-semibold my-7 mt-5'>Projects</h1>
      <div className="flex flex-col md:flex-row justify-self-center gap-9 ">
        <div className="relative w-72 h-80 overflow-hidden shadow-lg group cursor-pointer">
        {/* Image */}
        <img
          src={PortfolioImg}
          alt="Project"
          className="w-full h-96 object-cover"
        />

        {/* Hover Content */}
        <div className="absolute bottom-14 left-0 right-0 bg-gray-800 text-white px-6 py-4 translate-y-full
         group-hover:translate-y-14 transition-transform duration-500 ease-in-out">
          <h3 className="text-lg font-bold">Static Portfolio website</h3>
          <p className="text-gray-400 text-sm mt-2">
            My personal portfolio website showcases my skills, projects, and experiences. 
            It is built using HTML, CSS, and JavaScript. It serves as a central hub where visitors can learn more about me.
          </p>
          <Link to="https://ashwath-s-kulal.github.io/Portfolio-website/" target='_blank'>
            <p className="text-yellow-400 font-semibold text-sm mt-4">
              Open in Web &rarr;
            </p>
          </Link>
          
        </div>
      </div>

      <div className="relative w-72 h-80  overflow-hidden shadow-lg group cursor-pointer">
        {/* Image */}
        <img
          src={AgriBookImg}
          alt="Project"
          className="w-full h-96 object-cover"
        />

        {/* Hover Content */}
        <div className="absolute bottom-14 left-0 right-0 bg-gray-800 text-white px-4 py-4 translate-y-full group-hover:translate-y-14 transition-transform duration-500 ease-in-out">
          <h3 className="text-lg font-bold">Agricultural Booking system</h3>
          <p className="text-gray-400 text-sm mt-2">
            This is a frontend project built with React.js, focused on connecting farmers and contractors through a digital platform. 
            It simplifies the booking and availability of farming equipment, making it easier for small and mid-scale farmers to 
            access essential tools.
          </p>
          <Link to="https://agricultural-booking-system.vercel.app/" target='_blank'>
            <p className="text-yellow-400 font-semibold text-sm mt-4">
              Open in Web &rarr;
            </p>
          </Link>
        </div>
      </div>

      <div className="relative w-72 h-80  overflow-hidden shadow-lg group cursor-pointer">
        {/* Image */}
        <img
          src={SMDImg}
          alt="Project"
          className="w-full h-96 object-cover"
        />

        {/* Hover Content */}
        <div className="absolute bottom-14 left-0 right-0 bg-gray-800 text-white px-6 py-4 translate-y-full group-hover:translate-y-14 transition-transform duration-500 ease-in-out">
          <h3 className="text-lg font-bold">Social Media Dashboard</h3>
          <p className="text-gray-400 text-sm mt-2">
            A Social Media Dashboard is an interactive tool that allows users to monitor, analyze, and visualize 
            data from social media platforms. It is used to track engagement metrics such as likes, comments, 
            shares, and followers from pre-stored database data. 
          </p>
          <Link to="https://github.com/Ashwath-S-kulal/Social-Media-Dashboard" target='_blank'>
            <p className="text-yellow-400 font-semibold text-sm mt-4">
              Open github &rarr;
            </p>
          </Link>
        </div>
      </div>

      <div className="relative w-72 h-80  overflow-hidden shadow-lg group cursor-pointer">
          {/* Image */}
          <img
            src={AuthImg}
            alt="Project"
            className="w-full h-96 object-cover"
          />

          {/* Hover Content */}
          <div className="absolute bottom-14 left-0 right-0 bg-gray-800 text-white px-6 py-4 translate-y-full group-hover:translate-y-14 transition-transform duration-500 ease-in-out">
            <h3 className="text-lg font-bold">MERN Authentication</h3>
            <p className="text-gray-400 text-sm mt-2">
              This MERN stack website offers a user-friendly platform built with React.js. It features secure sign-up and sign-in options, 
              including Google authentication, and allows users to update their username, email, and password with privacy protection. 
              The platform ensures safe and efficient access for users.
            </p>
            <Link to="#" target='_blank'>
              <p className="text-yellow-400 font-semibold text-sm mt-4">
                Open in Web &rarr;
              </p>
            </Link>
          </div>
        </div>
      </div>


      <div className="flex flex-col md:flex-row justify-self-center gap-9 mt-10 pb-10">
      <div className="relative w-72 h-80  overflow-hidden shadow-lg group cursor-pointer">
          {/* Image */}
          <img
            src={SSWPImg}
            alt="Project"
            className="w-full h-96 object-cover"
          />

          {/* Hover Content */}
          <div className="absolute bottom-14 left-0 right-0 bg-gray-800 text-white px-6 py-4 translate-y-full group-hover:translate-y-14 transition-transform duration-500 ease-in-out">
            <h3 className="text-lg font-bold">Simple Static Web</h3>
            <p className="text-gray-400 text-sm mt-2">
              This is the Simple Static Website, made by using HTML CSS, This is my First Website and Hosted on Netlify.
            </p>
            <Link to="https://simplestaticweb.netlify.app/" target='_blank'>
              <p className="text-yellow-400 font-semibold text-sm mt-4">
                Open in Web &rarr;
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
