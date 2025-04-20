import React from 'react';

const Projects = () => {
  return (
    <div id="projects" className="w-full max-w-4xl p-4 bg-white dark:bg-gray-800 rounded shadow-md">
      <h3 className="text-3xl font-semibold text-blue-800 dark:text-blue-300 mb-8 text-center">My Projects</h3>
      <div className="grid grid-cols-1 gap-8">
        <ProjectCard
          title="Plant Leaf Disease Detection"
          type="Machine Learning Project"
          timeline="Sep 2024–Present"
          description="Developed an advanced ML model using computer vision techniques to detect and classify plant diseases from leaf images. The system helps farmers identify crop diseases early and take preventive measures."
          technologies={["Python", "OpenCV", "TensorFlow", "Keras", "CNN"]}
          features={[
            "Real-time disease detection with 95% accuracy",
            "Support for multiple plant species",
            "Mobile-friendly web interface",
            "Detailed disease analysis and recommendations"
          ]}
        />

        <ProjectCard
          title="MCQ Automated Grading System"
          type="Computer Vision Project"
          timeline="Jan–Jul 2024"
          description="Created an automated system for grading multiple-choice answer sheets using image processing and pattern recognition. The system significantly reduces manual grading time and human errors."
          technologies={["Python", "OpenCV", "NumPy", "Pandas"]}
          features={[
            "Automated answer sheet scanning and processing",
            "Support for various answer sheet formats",
            "Error detection and correction",
            "Detailed performance analytics"
          ]}
        />
      </div>
    </div>
  );
};

const ProjectCard = ({ title, type, timeline, description, technologies, features }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <div className="p-6">
        <h4 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">{title}</h4>
        <div className="mb-4">
          <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold mr-2">
            {type}
          </span>
          <span className="inline-block bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
            {timeline}
          </span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="space-y-2">
          <p className="text-gray-600 dark:text-gray-400">
            <strong>Key Features:</strong>
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects; 