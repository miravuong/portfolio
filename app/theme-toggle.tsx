"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button onClick={toggle} aria-label="Toggle dark mode">
      <Image
        src="/coder.png"
        alt="Toggle theme"
        width={32}
        height={32}
        className={dark ? "invert" : ""}
      />
    </button>
  );
}
