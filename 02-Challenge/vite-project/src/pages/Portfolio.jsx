import React from 'react';
import Project from '../components/Project';

export default function Portfolio() {
  const projects = [
    { title: "ReadMe Generator", image: "/src/assets/images/readME.jpeg", url: "#", repo: "https://github.com/Gurprasad34/README-Generator" },
    { title: "Command-Line Vehicle Builder", image: "/src/assets/images/vehicleBuilder.png", url: "#", repo: "https://github.com/Gurprasad34/Vehicle_Builder" },
    { title: "Employee Tracker", image: "/src/assets/images/employeeTracker.jpeg", url: "#", repo: "https://github.com/Gurprasad34/Employee_Tracker" },
    { title: "Expense Tracker", image: "/src/assets/images/expense.jpeg", url: "#", repo: "https://github.com/Gurprasad34/ExpenseTracker" },
    { title: "Project 5", image: "/src/assets/images/placeholder.png", url: "https://lindseyt75.github.io/ExpenseTracker/", repo: "https://github.com/Gurprasad34/Vehicle_Builder" },
    { title: "Project 6", image: "/src/assets/images/placeholder.png", url: "#", repo: "https://github.com/Gurprasad34/Employee_Tracker" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {projects.map((project, index) => (
          <Project 
            key={index}
            title={project.title}
            image={project.image}
            url={project.url}
            repo={project.repo}
          />
        ))}
      </div>
    </div>
  );
}