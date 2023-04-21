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
        boxShadow: '0px 25px 40px -20px rgba(0, 0, 0, 0.0951141)',
        margin: '0 auto',
        maxWidth: '940px',
        boxSizing: 'border-box',
        padding: '16px',
        display: 'flex',
        flexDirection: 'row',
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default ContentBox;
