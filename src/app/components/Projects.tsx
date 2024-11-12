import React from 'react';

const Projects: React.FC = () => {
  const projectList = [
    { name: 'Weather App', description: 'Simple weather app made with Vue.JS', link: 'https://ramondevv.github.io/WeatherApp/' },
    { name: 'Simple Calculator', description: 'Calculator on the web made with vue.JS', link: 'https://ramondevv.github.io/Vue-SimpleCalc/' },
    { name: 'Simple Todo App', description: 'Simple todo app made with Vue.JS', link: 'https://ramondevv.github.io/Proyectos/' },
  ];

  return (
    <section id="projects" className="p-8 bg-white">
      <h2 className="text-2xl mb-4 text-black">Projects</h2>
      <div className="space-y-4">
        {projectList.map((project, index) => (
          <div key={index} className="p-4 border rounded">
            <h3 className="text-xl text-black">{project.name}</h3>
            <p className="text-black">{project.description}</p>
            <a href={project.link} className="text-blue-500">View</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
