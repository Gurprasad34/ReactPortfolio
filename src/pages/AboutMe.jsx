import React from "react";

export default function AboutMe() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">About Me</h2>
      <img
        src="/src/assets/images/IMG_0035.jpeg"
        alt="Developer"
        className="w-32 h-32 rounded-full mt-4"
      />
      <p className="mt-4">
      Hi, I’m Gurprasad Singh! I’m currently enrolled in Columbia’s Coding Bootcamp, further enhancing my technical skills and expanding my expertise in software development. I hold a bachelor’s degree in Computer Science with a minor in Business from NYIT, which has provided me with a strong foundation in both technology and business principles.

Beyond coding, I’m passionate about staying active—I enjoy working out, watching sports, and exploring new places through travel. I thrive on challenges and am always eager to learn, grow, and contribute to innovative projects.
      </p>
    </div>
  );
}