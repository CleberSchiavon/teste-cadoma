import { Box, List, ListItemText, SxProps, Theme } from '@mui/material';
import { useRouter } from 'next/router';

import { StyledNavItem } from './styled';

interface INavSection {
  data: Array<INavItem>;
}

interface INavItem {
  title: string;
  path: string;
  Icon: React.ElementType<{ sx: SxProps<Theme> }>;
}

export default function NavSection({ data = [], ...other }: INavSection) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item) => (
          <NavItem
            key={item.title}
            title={item.title}
            path={item.path}
            Icon={item.Icon}
          />
        ))}
      </List>
    </Box>
  );
}

function NavItem({ title, path, Icon }: INavItem) {
  const router = useRouter();
  return (
    <StyledNavItem
      sx={{
        gap: 2,
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}
      onClick={() => router.push(path)}
    >
      <Icon
        sx={{
          width: 22,
          height: 22,
          color: 'inherit',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />

      <ListItemText disableTypography primary={title} />
    </StyledNavItem>
  );
}
