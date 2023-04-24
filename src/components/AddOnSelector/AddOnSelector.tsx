import React from 'react';
import { Box, SxProps, Typography, Checkbox } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';

export interface AddOnSelectorProps {
  options?: {
    title: string;
    subtitle: string;
    price: string;
    id: number;
  }[];
  value?: {
    [key: number]: boolean;
  };
  onChange?: (value?: AddOnSelectorProps['value']) => void;
}

export const AddOnSelector: React.FC<AddOnSelectorProps> = ({
  options = [],
  value = {},
  onChange = () => {},
}) => {
  const handleClick = (id: number) => () => {
    const newValue = { ...value };
    if (newValue[id]) {
      delete newValue[id];
    } else {
      newValue[id] = true;
    }
    onChange(newValue);
  };

  return (
    <Box sx={{ ...boxStyles, pt: 4, gap: 2 }}>
      {options.map(({ title, subtitle, price, id }) => (
        <Box
          key={id}
          sx={addOnRowStyles(!!value[id])}
          onClick={handleClick(id)}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '12px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Checkbox
                sx={{
                  '&:hover': { bgcolor: 'transparent' },
                }}
                disableRipple
                color="default"
                checkedIcon={<BpCheckedIcon />}
                icon={<BpIcon />}
                checked={!!value[id]}
                inputProps={{ 'aria-label': `Checkbox for ${title}` }}
              />
            </Box>
            <Box sx={{}}>
              <Box sx={{ marginBottom: '4px' }}>
                <Typography variant="h4" component="h4">
                  {title}
                </Typography>
              </Box>
              <Box sx={{}}>
                <Typography
                  sx={{ fontSize: '15px' }}
                  variant="body1"
                  component="h5"
                >
                  {subtitle}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: '15px',
              }}
              variant="subtitle2"
              component="span"
            >
              {price}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AddOnSelector;

const addOnRowStyles = (checked: boolean): SxProps<Theme> => [
  ({ palette: { info, secondary } }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    border: checked ? `1px solid ${secondary.main}` : `1px solid ${info.dark}`,
    background: checked ? info.light : 'white',
    '&:hover': { border: `1px solid ${secondary.main}` },
    borderRadius: '8px',
    padding: '16px 24px 18px 16px',
    cursor: 'pointer',
  }),
];

const boxStyles = {
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
};

const BpIcon = styled('span')(
  ({
    theme: {
      palette: {
        info: { light },
      },
    },
  }) => ({
    borderRadius: 3,
    width: 20,
    height: 20,
    boxShadow: '0 0 0 1px rgb(214 217 230 / 100%)',
    backgroundColor: 'white',
    'input:hover ~ &': {
      backgroundColor: light,
    },
  })
);

const BpCheckedIcon = styled(BpIcon)(
  ({
    theme: {
      palette: {
        secondary: { main: backgroundColor },
      },
    },
  }) => ({
    backgroundColor,
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    boxShadow: '0 0 0 1px rgb(72 62 255 / 100%)',
    '&:before': {
      display: 'block',
      width: 20,
      height: 20,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor,
    },
  })
);
