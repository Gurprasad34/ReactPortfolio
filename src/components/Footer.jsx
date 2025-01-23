import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p>
        © 2025 Developer's Portfolio - 
        <a href="https://github.com/Gurprasad34" className="text-blue-500" target="_blank">
          GitHub
        </a>, 
        <a href="https://www.linkedin.com/in/gurprasad-singh-b77b2a256/" className="text-blue-500" target="_blank">
          LinkedIn
        </a>, 
        <a href="https://stackoverflow.com/" className="text-blue-500" target="_blank">
          Stack Overflow
        </a>
      </p>
    </footer>
  );
}