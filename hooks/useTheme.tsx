import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ColorScheme, lightColors, darkColors } from "./theme";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  colors: ColorScheme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;
    AsyncStorage.getItem("isDarkMode").then((value) => {
      if (mounted && value !== null) {
        setIsDarkMode(JSON.parse(value));
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const toggleDarkMode = async () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      AsyncStorage.setItem("isDarkMode", JSON.stringify(next));
      return next;
    });
  };
  
  const colors = useMemo<ColorScheme>(
    () => (isDarkMode ? darkColors : lightColors),
    [isDarkMode]
  );

  const ctxValue = useMemo(
    () => ({ isDarkMode, toggleDarkMode, colors }),
    [isDarkMode, colors]
  );

  return (
    <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

export default useTheme;
