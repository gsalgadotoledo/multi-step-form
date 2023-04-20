import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: ['Ubuntu', '-apple-system', 'Arial'].join(','),
    fontSize: 16,
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
