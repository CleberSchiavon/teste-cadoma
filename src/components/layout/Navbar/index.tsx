import { Avatar, Box, Drawer, Link, Typography } from '@mui/material';

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
      <NextImage
        src={LogoCadoma}
        alt='Logo da Cadoma'
        width={250}
        height={120}
      />
      <Box sx={{ mb: 5 }}>
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
          variant='permanent'
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
          ModalProps={{
            keepMounted: true,
          }}
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
