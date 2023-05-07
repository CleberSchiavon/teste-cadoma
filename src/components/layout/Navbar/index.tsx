import { Menu } from '@mui/icons-material/';
import {
  Avatar,
  Box,
  Drawer,
  IconButton,
  Link,
  Typography,
} from '@mui/material';

import useResponsive from '@/hooks/useResponsive';

import NextImage from '@/components/NextImage';

import LogoCadoma from '@/../public/images/logo_cadoma.png';

import navConfig from './navbarconfig';
import NavSection from './NavSection';
import { StyledAccount } from './styled';

const NAV_WIDTH = 280;

interface INavbar {
  openNav: boolean;
  onCloseNav: () => void;
}

export default function Navbar({ openNav, onCloseNav }: INavbar) {
  const isDesktop = useResponsive({
    query: 'up',
    start: 'lg',
    end: 'md',
  });

  const renderContent = (
    <>
      <IconButton
        onClick={onCloseNav}
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
      />
      <Box>
        <Link underline='none'>
          <StyledAccount>
            <Avatar src='/public/images/profilePhoto.png' alt='Cleber' />

            <Box sx={{ ml: 2 }}>
              <Typography variant='subtitle2' sx={{ color: 'text.primary' }}>
                Cleber
              </Typography>

              <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                cleberteste@cadoma.com.br
              </Typography>
            </Box>
          </StyledAccount>
        </Link>
      </Box>
      <NavSection data={navConfig} />
      <Box sx={{ flexGrow: 1 }} />
    </>
  );

  return (
    <Box
      component='nav'
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
