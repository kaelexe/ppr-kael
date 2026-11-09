import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { portfolioThemes } from "./Theme";

type Appearance = "light" | "dark" | "sakura";
type Preference = Appearance | "system";
const storageKey = "portfolio-theme";
const cycle: Appearance[] = ["light", "dark", "sakura"];

const readPreference = (): Preference => {
  try {
    const saved = window.localStorage.getItem(storageKey);
    if (saved === "light" || saved === "dark" || saved === "sakura") return saved;
  } catch {
    // The switch still works when browser storage is unavailable.
  }
  return "system";
};

interface PortfolioThemeContextValue {
  appearance: Appearance;
  nextAppearance: Appearance;
  cycleTheme: () => void;
}

const PortfolioThemeContext = createContext<PortfolioThemeContextValue | null>(null);

export const usePortfolioTheme = () => {
  const value = useContext(PortfolioThemeContext);
  if (!value) throw new Error("Portfolio theme controls need PortfolioThemeProvider.");
  return value;
};

const PortfolioThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [preference, setPreference] = useState<Preference>(readPreference);
  const [systemDark, setSystemDark] = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches);
  const appearance: Appearance = preference === "system" ? (systemDark ? "dark" : "light") : preference;
  const nextAppearance = cycle[(cycle.indexOf(appearance) + 1) % cycle.length];

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setSystemDark(media.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.portfolioTheme = appearance;
  }, [appearance]);

  // Chakra has two color modes. Sakura uses light-mode semantics plus its own palette.
  // This manager is read-only; the explicit three-theme preference is stored separately.
  const colorModeManager = useMemo(() => ({
    type: "cookie" as const,
    ssr: true,
    get: () => appearance === "dark" ? "dark" as const : "light" as const,
    set: () => {},
  }), [appearance]);

  const cycleTheme = () => {
    setPreference(nextAppearance);
    try {
      window.localStorage.setItem(storageKey, nextAppearance);
    } catch {
      // In-memory preference remains available for this visit.
    }
  };

  return (
    <PortfolioThemeContext.Provider value={{ appearance, nextAppearance, cycleTheme }}>
      <ChakraProvider theme={portfolioThemes[appearance]} colorModeManager={colorModeManager}>
        {children}
      </ChakraProvider>
    </PortfolioThemeContext.Provider>
  );
};

export default PortfolioThemeProvider;
