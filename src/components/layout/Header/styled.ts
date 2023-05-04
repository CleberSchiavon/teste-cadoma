import { AppBar, styled, Theme, Toolbar } from '@mui/material';

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

interface IStyledToolbar {
  theme: Theme;
}

export const StyledRoot = styled(AppBar)({
  boxShadow: 'none',
  backgroundColor: 'aliceblue',
});

export const StyledToolbar = styled(Toolbar)(({ theme }: IStyledToolbar) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));
