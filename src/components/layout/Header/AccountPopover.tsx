import {
  Avatar,
  Box,
  Divider,
  IconButton,
  MenuItem,
  Popover,
  Stack,
  Typography,
} from '@mui/material';
// @mui
import { alpha } from '@mui/material/styles';
import { useState } from 'react';

// mocks_

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Página Inicial',
  },
  {
    label: 'Empresas',
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const [open, setOpen] = useState(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar src='/public/images/profilePhoto.png' alt='Cleber' />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant='subtitle2' noWrap>
            Cleber
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }} noWrap>
            cleberteste@cadoma.com.br
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={handleClose}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={handleClose} sx={{ m: 1 }}>
          Sair da conta
        </MenuItem>
      </Popover>
    </>
  );
}
