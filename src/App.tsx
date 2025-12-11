import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { lightTheme } from './Themes/light';
import { darkTheme } from './Themes/dark';
import { useState, useMemo } from 'react';
import { ThemeModeContext } from './Contextos/thema';

export function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  const toggleMode = () => setMode(m => (m === 'light' ? 'dark' : 'light'));

  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode }}>
      <MuiThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </StyledThemeProvider>
      </MuiThemeProvider>
    </ThemeModeContext.Provider>
  );
}