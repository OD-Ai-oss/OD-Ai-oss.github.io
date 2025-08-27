import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header>
      <img src="/logo.png" alt="OD.ai Logo" />
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/roadmap">Roadmap</NavLink>
        <NavLink to="/models">Models</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>
      <button
        className="theme-toggle"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {darkMode ? "🌙" : "☀️"}
      </button>
    </header>
  );
}
