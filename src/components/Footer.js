import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer id="contact" className="bg-white dark:bg-gray-800 shadow-lg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-4">Get in Touch</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <SocialLink 
                href="https://github.com/sudipkotal" 
                icon={<GitHubIcon />} 
                hoverColor="hover:text-black dark:hover:text-black" 
              />
              <SocialLink 
                href="https://www.linkedin.com/in/sudip-kotal/" 
                icon={<LinkedInIcon />} 
                hoverColor="hover:text-blue-600 dark:hover:text-blue-400" 
              />
              <SocialLink 
                href="https://www.hackerrank.com/profile/sudipkotal" 
                icon={<HackerRankIcon />} 
                hoverColor="hover:text-green-600 dark:hover:text-green-400" 
              />
              <SocialLink 
                href="mailto:sudipkotal2003@gmail.com" 
                icon={<EmailIcon />} 
                hoverColor="hover:text-red-600 dark:hover:text-red-400" 
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <QuickLink to="home" label="Home" />
              <QuickLink to="about" label="About" />
              <QuickLink to="skills" label="Skills" />
              <QuickLink to="projects" label="Projects" />
            </div>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-4">Contact Info</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Email: sudipkotal2003@gmail.com
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Location: West Bengal, India
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-700 dark:text-gray-300">
            &copy; {new Date().getFullYear()} Sudip Kotal. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, hoverColor }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className={`text-gray-700 dark:text-gray-300 ${hoverColor} transition-colors duration-300`}
  >
    {icon}
  </a>
);

const QuickLink = ({ to, label }) => (
  <Link 
    to={to} 
    smooth 
    duration={500} 
    className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
  >
    {label}
  </Link>
);

const GitHubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const HackerRankIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c1.285 0 2.541.107 3.767.322a11.95 11.95 0 0 1 3.431 1.1 11.95 11.95 0 0 1 2.3 1.8 11.95 11.95 0 0 1 1.8 2.3 11.95 11.95 0 0 1 1.1 3.431c.215 1.226.322 2.482.322 3.767s-.107 2.541-.322 3.767a11.95 11.95 0 0 1-1.1 3.431 11.95 11.95 0 0 1-1.8 2.3 11.95 11.95 0 0 1-2.3 1.8 11.95 11.95 0 0 1-3.431 1.1c-1.226.215-2.482.322-3.767.322s-2.541-.107-3.767-.322a11.95 11.95 0 0 1-3.431-1.1 11.95 11.95 0 0 1-2.3-1.8 11.95 11.95 0 0 1-1.8-2.3 11.95 11.95 0 0 1-1.1-3.431C.107 14.541 0 13.285 0 12s.107-2.541.322-3.767a11.95 11.95 0 0 1 1.1-3.431 11.95 11.95 0 0 1 1.8-2.3 11.95 11.95 0 0 1 2.3-1.8 11.95 11.95 0 0 1 3.431-1.1C9.459.107 10.715 0 12 0zm0 2.4c-1.08 0-2.136.09-3.167.27a9.55 9.55 0 0 0-2.75.98 9.55 9.55 0 0 0-1.84 1.5 9.55 9.55 0 0 0-1.5 1.84 9.55 9.55 0 0 0-.98 2.75C2.49 9.864 2.4 10.92 2.4 12s.09 2.136.27 3.167a9.55 9.55 0 0 0 .98 2.75 9.55 9.55 0 0 0 1.5 1.84 9.55 9.55 0 0 0 1.84 1.5 9.55 9.55 0 0 0 2.75.98c1.031.18 2.087.27 3.167.27s2.136-.09 3.167-.27a9.55 9.55 0 0 0 2.75-.98 9.55 9.55 0 0 0 1.84-1.5 9.55 9.55 0 0 0 1.5-1.84 9.55 9.55 0 0 0 .98-2.75c.18-1.031.27-2.087.27-3.167s-.09-2.136-.27-3.167a9.55 9.55 0 0 0-.98-2.75 9.55 9.55 0 0 0-1.5-1.84 9.55 9.55 0 0 0-1.84-1.5 9.55 9.55 0 0 0-2.75-.98C14.136 2.49 13.08 2.4 12 2.4zm-4.8 4.8h9.6v2.4h-9.6V7.2zm0 4.8h9.6v2.4h-9.6V12zm0 4.8h9.6v2.4h-9.6v-2.4z"/>
  </svg>
);

const EmailIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
  </svg>
);

export default Footer; 