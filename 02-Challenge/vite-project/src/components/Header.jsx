import React from "react";
import NavTabs from "./NavTabs";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-3xl font-bold">Gurprasad's Portfolio</h1>
      <NavTabs />
    </header>
  );
}