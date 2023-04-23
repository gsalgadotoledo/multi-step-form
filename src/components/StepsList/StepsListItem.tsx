import React from 'react';
import { Grid, SxProps, Theme } from '@mui/material';
import {
  StyledRoundBox,
  StyledNumber,
  StyledTitle,
  StyledSubTitle,
} from './StepsListItem.styles';

export interface StepsListItemProps {
  title: string;
  subtitle: string;
  step: number;
  activeItem?: boolean;
}

export const StepsListItem = ({
  title,
  subtitle,
  step,
  activeItem,
}: StepsListItemProps) => {
  return (
    <Grid item xs={12}>
      <Grid container wrap="nowrap" sx={contentListStyles}>
        <Grid item>
          <StyledRoundBox state={activeItem?.toString()}>
            <StyledNumber state={activeItem?.toString()}>{step}</StyledNumber>
          </StyledRoundBox>
        </Grid>
        <Grid item sx={contentItemStyles}>
          <StyledTitle sx={{ pb: 1 }}>{title}</StyledTitle>
          <StyledSubTitle>{subtitle}</StyledSubTitle>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StepsListItem;

const contentListStyles: SxProps<Theme> = [
  {
    mx: 'auto',
    padding: '13px',
  },
  ({ breakpoints: { down } }) => ({
    [down('sm')]: {
      justifyContent: 'center',
    },
  }),
];
const contentItemStyles: SxProps<Theme> = [
  ({ breakpoints: { down } }) => ({
    pl: 2,
    [down('sm')]: {
      display: 'none',
    },
  }),
];
