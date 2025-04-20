import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="w-full max-w-4xl p-4 bg-white dark:bg-gray-800 rounded shadow-md">
      <h3 className="text-3xl font-semibold text-blue-800 dark:text-blue-300 mb-8 text-center">My Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillCategory
          title="Programming Languages"
          tagType="blue"
          label="Core Languages"
          skills={["C", "Python", "Java", "HTML", "CSS"]}
          expertise="Strong foundation in programming concepts and problem-solving."
        />

        <SkillCategory
          title="Frameworks"
          tagType="green"
          label="Web Development"
          skills={["Tailwind", "Bootstrap"]}
          expertise="Modern UI development and responsive design."
        />

        <SkillCategory
          title="Tools"
          tagType="purple"
          label="Version Control"
          skills={["Git", "GitHub"]}
          expertise="Collaborative development and code management."
        />

        <SkillCategory
          title="Database"
          tagType="yellow"
          label="Data Management"
          skills={["MySQL"]}
          expertise="Database design and management."
        />

        <SkillCategory
          title="Operating Systems"
          tagType="red"
          label="System Environment"
          skills={["Windows", "Linux"]}
          expertise="Cross-platform development and system administration."
        />

        <SkillCategory
          title="Coursework"
          tagType="indigo"
          label="Academic Focus"
          skills={["Data Structure", "DBMS"]}
          expertise="Strong theoretical foundation in computer science."
        />

        <SkillCategory
          title="Soft Skills"
          tagType="pink"
          label="Personal Development"
          skills={["Self Learning", "Time Management", "Teamwork"]}
          expertise="Effective communication and collaboration."
        />
      </div>
    </div>
  );
};

const SkillCategory = ({ title, tagType, label, skills, expertise }) => {
  const getTagColors = (type) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      green: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      purple: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      yellow: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
      red: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
      indigo: "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200",
      pink: "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200"
    };
    return colors[type] || colors.blue;
  };

  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <div className="p-6">
        <h4 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">{title}</h4>
        <div className="mb-4">
          <span className={`inline-block ${getTagColors(tagType)} px-3 py-1 rounded-full text-sm font-semibold mr-2`}>
            {label}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <span key={index} className={`${getTagColors(tagType)} px-3 py-1 rounded-full text-sm`}>
              {skill}
            </span>
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-400 italic">
          <strong>Expertise:</strong> {expertise}
        </p>
      </div>
    </div>
  );
};

export default Skills; 