import { Box, List, ListItemText } from '@mui/material';
import { useRouter } from 'next/router';

import { StyledNavItem } from './styled';

interface INavSection {
  data: Array<INavItem>;
}

interface INavItem {
  title: string;
  path: string;
  icon: React.ReactNode;
  info: string;
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
            icon={item.icon}
            info={item.info}
          />
        ))}
      </List>
    </Box>
  );
}

function NavItem({ title, path, icon, info }: INavItem) {
  const router = useRouter();
  const Icon = icon;
  return (
    <StyledNavItem
      sx={{
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

      {info && info}
    </StyledNavItem>
  );
}
