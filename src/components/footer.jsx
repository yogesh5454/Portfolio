import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-cyan-100 to-teal-100 text-gray-900">
      <div className="px-8 py-12">
        <div className="flex flex-wrap gap-8 justify-between">
          <div className="flex-1 min-w-[250px]">
            <h3 className="text-xl font-bold mb-4">Yogesh Sapkota</h3>
            <p className="text-gray-600 mb-4">
              A passionate frontend developer creating beautiful, functional,
              and accessible web experiences.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl text-purple-600 hover:text-purple-700 transition-transform hover:scale-105" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl text-purple-600 hover:text-purple-700 transition-transform hover:scale-105" />
              </a>
              <a href="mailto:hello@jeremele.com">
                <FaEnvelope className="text-2xl text-purple-600 hover:text-purple-700 transition-transform hover:scale-105" />
              </a>
            </div>
          </div>

          <div className="flex-1 min-w-[150px]">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-1 min-w-[200px]">
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-purple-600" />
                <span className="text-gray-600">Budhanilakantha,Kathmandu</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-purple-600" />
                <a
                  href="mailto:yogesh111sapkota@gmail.com"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  yogesh111sapkota@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-purple-600" />
                <a
                  href="tel:+977 9863405770"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  9863405770
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
