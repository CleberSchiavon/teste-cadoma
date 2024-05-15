import { Menu } from '@mui/icons-material/';
import { Box, IconButton, Stack } from '@mui/material';

import AccountPopover from './AccountPopover';
import NotificationsPopover from './NotificationsPopover';
import { StyledRoot, StyledToolbar } from './styled';

interface IHeader {
  onOpenNav: () => void;
}

export default function Header({ onOpenNav }: IHeader) {
  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: 'text.primary',
          }}
        >
          <Menu />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction='row'
          alignItems='center'
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
