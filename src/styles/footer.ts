import { SxProps, Theme } from '@mui/material';

export const footerStyles: SxProps<Theme> = [
  ({
    breakpoints: { down },
    palette: {
      primary: { contrastText: background },
    },
  }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    [down('sm')]: {
      position: 'absolute',
      bottom: 0,
      background,
      right: 0,
      left: 0,
      padding: '16px',
    },
  }),
];
