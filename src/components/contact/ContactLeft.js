import React from 'react';
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";  // Import LinkedIn and Instagram
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-4xl bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row items-center gap-8">
        
        {/* Image - Shown above text in mobile */}
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-64 object-cover rounded-lg mb-4 md:mb-0"
            src={contactImg}
            alt="contactImg"
          />
        </div>

        {/* Content - Shown below image in mobile */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
          <h3 className="text-3xl font-bold text-white">Tejesh Chintada</h3>
          <p className="text-base text-gray-400 tracking-wide">
            Feel free to reach out! Whether you have a question, want to discuss a project, or just want to connect, I’m always open to connecting. Looking forward to hearing from you!
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2 justify-center md:justify-start">
            Phone: <span className="text-lightText">+91 8019889691</span>
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2 justify-center md:justify-start">
            Email: <span className="text-lightText">tejeshchintada22@gmail.com</span>
          </p>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
            <div className="flex gap-4 justify-center md:justify-start">
              {/* LinkedIn Link */}
              <a href="https://www.linkedin.com/in/tejesh-chintada/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaLinkedinIn />
              </a>
              
              {/* Instagram Link */}
              <a href="https://www.instagram.com/tejesh_22/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactLeft;
