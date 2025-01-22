import React from "react";

export default function Resume() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Resume</h2>
      <p className="mt-4">
        Download my resume{" "}
        <a href="/src/assets/images/Gurprasad Singh Resume 11_30_23.pdf" className="text-blue-500" download>
          here
        </a>.
      </p>
      <h3 className="text-lg font-bold mt-4">Proficiencies:</h3>
      <ul className="list-disc ml-6 mt-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>
    </div>
  );
}