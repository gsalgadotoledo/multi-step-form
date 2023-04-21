import React from 'react';
import { Box, BoxProps } from '@mui/material';

export interface ContentBoxProps extends BoxProps {
  children: React.ReactNode;
}

export const ContentBox = ({ children, ...rest }: ContentBoxProps) => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.contrastText',
        borderRadius: '15px',
        boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.10)',
        margin: '0 auto',
        maxWidth: '940px',
        padding: '16px',
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default ContentBox;
