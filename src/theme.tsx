import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: ['Ubuntu', '-apple-system', 'Arial'].join(','),
    fontSize: 16,
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontFamily: ['Ubuntu', '-apple-system', 'Arial'].join(','),
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '18px',
      letterSpacing: '0px',
      color: '#ffffff',
      textTransform: 'none',
      borderRadius: '8px',
    },
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#022959',
      dark: '#164A8A',
    },
  },
});

export default theme;
