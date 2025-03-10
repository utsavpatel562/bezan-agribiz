import React from "react";

function Footer() {
  return (
    <>
      <footer className="flex flex-col space-y-10 justify-center m-0 p-10 bg-slate-950 text-white">
        <nav className="flex justify-center flex-wrap gap-6 text-gray-400 font-medium">
          <a className="hover:text-gray-300" href="#">
            Home
          </a>
          <a className="hover:text-gray-300" href="#AboutUs">
            About
          </a>
          <a className="hover:text-gray-300" href="#OurServices">
            Services
          </a>
          <a className="hover:text-gray-300" href="#">
            Media
          </a>
          <a className="hover:text-gray-300" href="#">
            Gallery
          </a>
          <a className="hover:text-gray-300" href="#ContactUs">
            Contact
          </a>
        </nav>

        <div className="flex justify-center space-x-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/30/ffffff/facebook-new.png"
              alt="Facebook"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/30/ffffff/linkedin-2.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/30/ffffff/instagram-new.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/30/ffffff/twitter.png"
              alt="Twitter"
            />
          </a>
        </div>

        <p className="text-center text-gray-400 font-medium">
          &copy; 2025 BEZAN AGRIBIZ & GENERAL SERVICES Ltd. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
