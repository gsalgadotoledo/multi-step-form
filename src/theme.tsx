import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: ['Ubuntu', '-apple-system', 'Arial'].join(','),
    fontSize: 16,
    h1: {
      // Main title
      fontSize: '32px',
      lineHeight: '37px',
      color: '#022959',
      fontWeight: 700,
      fontStyle: 'normal',
    },
    h4: {
      // Icon Selector Labels, Online service
      fontSize: '16px',
      lineHeight: '18px',
      color: '#022959',
      fontWeight: 500,
      fontStyle: 'normal',
    },
    h5: {
      // Icon Selector Subtitle
      fontSize: '14px',
      lineHeight: '16px',
      color: '#9699AA',
      fontWeight: 400,
      fontStyle: 'normal',
    },
    h6: {
      // Form Labels
      fontSize: '14px',
      lineHeight: '16px',
      color: '#022959',
      fontWeight: 400,
      fontStyle: 'normal',
    },
    subtitle1: {
      // Subtitle
      fontSize: '16px',
      lineHeight: '25px',
      color: '#9699AA',
      fontWeight: 400,
      fontStyle: 'normal',
    },
    subtitle2: {
      // +$1/mo
      fontSize: '14px',
      lineHeight: '20px',
      color: '#483EFF',
      fontWeight: 400,
      fontStyle: 'normal',
    },
    body1: {
      // Access to multiplaye, Larger storage
      fontSize: '14px',
      lineHeight: '20px',
      color: '#9699AA',
      fontWeight: 400,
      fontStyle: 'normal',
    },
    body2: {
      // Finishing up +$2/mo
      fontSize: '14px',
      lineHeight: '20px',
      color: '#022959',
      fontWeight: 400,
      fontStyle: 'normal',
    },
  },
  palette: {
    primary: {
      light: '#164A8A', // Denim light
      main: '#022959', // Denim
      dark: '#F0F0F0', // N/A
      contrastText: '#FFFFFF', // White
    },
    secondary: {
      light: '#928CFF', // Purple light
      main: '#483EFF', // Purple
      dark: '#F0F0F0', // N/A
    },
    info: {
      light: '#F8F9FF', // Grey light background
      main: '#9699AA', // Border color
      dark: '#D6D9E6', // Grey text
    },
    success: {
      light: '#ABBCFF', // Light blue
      main: '#BEE2FD', // Sky blue
      dark: '#000000', // Grey text
    },
  },
});

export default theme;
