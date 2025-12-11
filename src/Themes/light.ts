import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
        main: '#0D47A1',
        contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#D32F2F',
            contrastText: '#FFFFFF',
        },
        background: {
            default: '#F5F5F5',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#212121',
            secondary: '#757575',
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
        },
        button: {
            textTransform: 'none',
            fontWeight: 'bold',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: '10px 20px',
                    boxShadow: 'none',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    paddind: '16px',
                },
            },
        },
    },
})