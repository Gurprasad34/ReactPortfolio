
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="mt-4">
      <ul className="flex gap-4">
        <li>
          <Link
            to="/"
            className={`${
              currentPage === "/" ? "text-blue-500 font-bold" : "text-white"
            }`}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            className={`${
              currentPage === "/portfolio"
                ? "text-blue-500 font-bold"
                : "text-white"
            }`}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`${
              currentPage === "/contact" ? "text-blue-500 font-bold" : "text-white"
            }`}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/resume"
            className={`${
              currentPage === "/resume" ? "text-blue-500 font-bold" : "text-white"
            }`}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}
