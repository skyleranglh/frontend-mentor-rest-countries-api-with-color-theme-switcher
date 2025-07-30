import { useEffect, useState, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const isToggling = useRef(false);

  const toggleTheme = () => {
    if (isToggling.current) return;

    isToggling.current = true;
    setTimeout(() => {
      isToggling.current = false;
    }, 500);

    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
