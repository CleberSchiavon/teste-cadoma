import { styled } from '@mui/material/styles';

export const StyledIcon = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: 'white',
}));
