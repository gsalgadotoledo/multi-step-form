import React from 'react';
import { Box, Typography } from '@mui/material';

export interface HeaderProps {
  title: string;
  subtitle: string;
  textAlign?: 'left' | 'center' | 'right';
}

export const Header = ({
  title,
  subtitle,
  textAlign = 'left',
}: HeaderProps) => {
  return (
    <Box>
      <Box sx={{ textAlign }}>
        <Typography
          variant="h1"
          component="h1"
          sx={[
            ({ breakpoints: { down } }) => ({
              marginBottom: '10px',
              [down('sm')]: {
                fontSize: '24px',
                lineHeight: '28px',
              },
            }),
          ]}
        >
          {title}
        </Typography>
        <Typography variant="subtitle1" component="p" sx={{ opacity: 0.8 }}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
