import { Link } from 'react-scroll';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ darkMode, setDarkMode, isOpen, setIsOpen }) => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="text-2xl font-bold flex items-center">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 animate-gradient-x bg-[length:200%_auto]">
                Sudip
              </span>
              <span className="mx-2 text-blue-600 dark:text-blue-400 animate-bounce">
                <svg 
                  className="w-8 h-8" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" 
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="home" label="Home" />
            <NavLink to="about" label="About" />
            <NavLink to="skills" label="Skills" />
            <NavLink to="projects" label="Projects" />
            <NavLink to="contact" label="Contact" />
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              {darkMode ? <FaSun className="w-5 h-5 text-yellow-500" /> : <FaMoon className="w-5 h-5 text-gray-700" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <MobileNavLink to="home" label="Home" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="about" label="About" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="skills" label="Skills" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="projects" label="Projects" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="contact" label="Contact" onClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, label }) => (
  <Link 
    to={to} 
    smooth 
    duration={500} 
    className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105 font-medium relative group"
  >
    <span>{label}</span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

const MobileNavLink = ({ to, label, onClick }) => (
  <Link 
    to={to} 
    smooth 
    duration={500} 
    onClick={onClick}
    className="block py-2 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105 font-medium relative group"
  >
    <span>{label}</span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

export default Navbar; 