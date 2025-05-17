"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeComp = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // only run on client
  }, []);

  if (!mounted) return null; // SSR'da boş render, mismatch önler

  return (
    <div>
      {theme === "dark" ? (
        <BsSun
          className="cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsMoon
          className="cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
};

export default ThemeComp;
