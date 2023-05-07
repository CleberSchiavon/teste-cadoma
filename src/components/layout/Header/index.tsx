// components
import { Menu } from '@mui/icons-material/';
import { Box, IconButton, Stack } from '@mui/material';

import NextImage from '@/components/NextImage';

import LogoCadoma from '@/../public/images/logo_cadoma.png';

// @mui
import AccountPopover from './AccountPopover';
import NotificationsPopover from './NotificationsPopover';
//
import { StyledRoot, StyledToolbar } from './styled';
import { useRouter } from 'next/router';

interface IHeader {
  onOpenNav: () => void;
}

export default function Header({ onOpenNav }: IHeader) {
  const router = useRouter();
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
        <NextImage
          src={LogoCadoma}
          alt='Logo da Cadoma'
          width={250}
          height={120}
          onClick={() => router.push('/app')}
          className='cursor-pointer'
        />
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
