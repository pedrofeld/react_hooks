import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { lightTheme } from './Themes/light';

export function App() {
  return (
    <MuiThemeProvider theme={lightTheme}>
      <StyledThemeProvider theme={lightTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
}