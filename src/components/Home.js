import React from 'react';

const Home = ({ typewriterText }) => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center h-screen px-4 text-center relative"
      style={{
        backgroundColor: 'white',
        backgroundImage: 'url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl transform hover:scale-105 transition-transform duration-300">
          <img 
            src={`${process.env.PUBLIC_URL}/back pic.jpg`}
            alt="Profile" 
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error("Error loading image:", e);
              e.target.style.display = 'none';
            }}
          />
        </div>
        <h1 className="text-5xl font-bold text-white mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto] transition-all duration-300">
            {typewriterText}
          </span>
          <span className="inline-block w-1 h-8 bg-white animate-pulse ml-2 transition-opacity duration-300"></span>
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Passionate about creating innovative solutions and exploring new technologies
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300 transform hover:scale-105">
            View My Work
          </a>
          <a href="#contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg transition duration-300 transform hover:scale-105">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home; 