import { styled } from '@mui/material/styles';
import { Typography, Box, BoxProps } from '@mui/material';

interface StyledRoundBoxProps extends BoxProps {
  state?: string;
}

export const StyledRoundBox = styled(Box)<StyledRoundBoxProps>(
  ({
    theme: {
      palette: { primary, success },
    },
    state = false,
  }) => ({
    borderRadius: '50%',
    background: state ? success.main : 'transparent',
    border: `1px solid ${state ? success.main : primary.contrastText}`,
    width: '33px',
    height: '33px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  })
);

interface StyledNumberProps extends BoxProps {
  state?: string;
}
export const StyledNumber = styled(Typography)<StyledNumberProps>(
  ({
    theme: {
      palette: { primary },
      typography,
    },
    state = false,
  }) => ({
    color: state ? primary.main : primary.contrastText,
    fontFamily: typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '12px',
    lineHeight: '14px',
  })
);

export const StyledTitle = styled(Typography)(
  ({ theme: { palette, typography } }) => ({
    color: palette.success.light,
    fontFamily: typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '12px',
  })
);

export const StyledSubTitle = styled(Typography)(
  ({ theme: { palette, typography } }) => ({
    color: palette.primary.contrastText,
    fontFamily: typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  })
);
