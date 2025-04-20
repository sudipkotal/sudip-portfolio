import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h3 className="text-3xl font-semibold text-blue-800 dark:text-blue-300 mb-8 text-center">About Me</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Background />
                <Education />
              </div>
              <div className="space-y-6">
                <Interests />
                <Goals />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Background = () => (
  <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
    <h4 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Background</h4>
    <p className="text-gray-700 dark:text-gray-300">
      I'm a passionate software developer and AI enthusiast with a strong foundation in machine learning, data processing, and modern web development technologies.
    </p>
  </div>
);

const Education = () => (
  <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
    <h4 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Education</h4>
    <div className="space-y-6">
      {/* University Education */}
      <EducationItem 
        institution="Kazi Nazrul University"
        degree="B.Tech in Computer Science and Engineering (Data Science)"
        score="CGPA: 8.59 (up to 7th sem)"
        location="Asansol, West Bengal"
        year="2021 - 2025"
      />

      {/* Higher Secondary */}
      <EducationItem 
        institution="Purandarpur High School"
        degree="Higher-Secondary Education (WBCHSE)"
        score="Percentage: 93%"
        location="Bankura, West Bengal"
        year="2021"
      />

      {/* Secondary */}
      <EducationItem 
        institution="Purandarpur High School"
        degree="Secondary Education (WBBSE)"
        score="Percentage: 89%"
        location="Bankura, West Bengal"
        year="2019"
      />
    </div>
  </div>
);

const EducationItem = ({ institution, degree, score, location, year }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-start">
      <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{institution}</h5>
      <span className="text-sm text-gray-600 dark:text-gray-400">{year}</span>
    </div>
    <p className="text-gray-700 dark:text-gray-300">{degree}</p>
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{score}</span>
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-400">{location}</p>
  </div>
);

const Interests = () => (
  <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
    <h4 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Interests</h4>
    <div className="flex flex-wrap gap-2">
      <InterestTag label="Machine Learning" />
      <InterestTag label="Web Development" />
      <InterestTag label="Data Science" />
      <InterestTag label="AI" />
    </div>
  </div>
);

const InterestTag = ({ label }) => (
  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
    {label}
  </span>
);

const Goals = () => (
  <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
    <h4 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Goals</h4>
    <div className="space-y-4">
      <GoalItem text="Develop scalable and efficient software solutions that address real-world challenges in healthcare, education, and environmental sustainability." />
      <GoalItem text="Contribute to open-source projects and collaborate with global tech communities to drive innovation in AI and machine learning." />
      <GoalItem text="Continuously enhance technical expertise through research, certifications, and hands-on experience with emerging technologies." />
      <GoalItem text="Mentor aspiring developers and share knowledge through technical writing, workshops, and community engagement." />
    </div>
  </div>
);

const GoalItem = ({ text }) => (
  <div className="flex items-start">
    <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
    <p className="text-gray-700 dark:text-gray-300">{text}</p>
  </div>
);

export default About; 