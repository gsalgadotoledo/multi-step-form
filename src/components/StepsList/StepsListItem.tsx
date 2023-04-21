import React from 'react';
import { Grid } from '@mui/material';
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
      <Grid container wrap="nowrap" sx={{ mx: 'auto', p: 2 }}>
        <Grid item>
          <StyledRoundBox state={activeItem?.toString()}>
            <StyledNumber state={activeItem?.toString()}>{step}</StyledNumber>
          </StyledRoundBox>
        </Grid>
        <Grid item sx={{ pl: 2 }}>
          <StyledTitle sx={{ pb: 1 }}>{title}</StyledTitle>
          <StyledSubTitle>{subtitle}</StyledSubTitle>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StepsListItem;
