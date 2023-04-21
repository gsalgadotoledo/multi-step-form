import React from 'react';
import { Box, Typography } from '@mui/material';

export interface HeaderProps {
  title: string;
  subtitle: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <Box>
      <Box>
        <Typography variant="h1" component="h1" sx={{ marginBottom: '10px' }}>
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
