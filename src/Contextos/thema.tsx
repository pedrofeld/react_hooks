import { createContext, useContext } from 'react';

export type ThemeMode = 'light' | 'dark';

export const ThemeModeContext = createContext({
  mode: 'light' as ThemeMode,
  toggleMode: () => {}
});

export const useThemeMode = () => useContext(ThemeModeContext);