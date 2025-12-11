import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './Themes/light';

export function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}