import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import local from "utilities/local";

interface IThemeContext {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (enabled: boolean) => void;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

interface IThemeProviderProps {
  children: ReactNode;
  initialDarkMode?: boolean;
}

export const ThemeProvider = ({ 
  children, 
  initialDarkMode = false 
}: IThemeProviderProps): JSX.Element => {
  // Check localStorage for saved preference, fallback to initialDarkMode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = local.getItem("dark_mode");
    if (saved !== null) {
      return saved === "true";
    }
    return initialDarkMode;
  });

  const setDarkMode = (enabled: boolean) => {
    setIsDarkMode(enabled);
    local.setItem("dark_mode", enabled.toString());
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  // Apply theme to document
  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDarkMode]);

  const value = {
    isDarkMode,
    toggleDarkMode,
    setDarkMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): IThemeContext => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeContext;