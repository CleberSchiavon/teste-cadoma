import { Box, styled } from '@mui/material';

export const ModalContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  backgroundColor: theme.palette.background.paper,
  padding: '4vh',
  boxShadow:
    '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
}));

export const ModalTitleContainer = styled('div')``;

export const TextContainer = styled('div')`
  margin-top: 2vh;
`;

export const ModalButtons = styled('div')`
  display: flex;
  justify-content: flex-end;
  gap: 1vh;
  margin-top: 20px;
`;
