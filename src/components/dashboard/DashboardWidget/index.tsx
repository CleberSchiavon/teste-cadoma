import { Card, SvgIconTypeMap, Theme, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { useRouter } from 'next/router';

import { StyledIcon } from './styled';

interface IDashboardWidget {
  title: string;
  total: number;
  sx?: object;
  Icon: OverridableComponent<SvgIconTypeMap> & {
    muiName: string;
  };
  color?: string;
  route?: string;
}

export default function DashboardWidget({
  title,
  total,
  Icon,
  color = 'primary',
  sx,
  route,
  ...other
}: IDashboardWidget) {
  const router = useRouter();
  return (
    <Card
      sx={{
        py: 5,
        textAlign: 'center',
        // @ts-expect-error Espero erro aqui pois o typescript não tem como adivinhar qual vai ser a cor
        color: (theme: Theme) => theme.palette[color].dark,
        // @ts-expect-error Espero erro aqui pois o typescript não tem como adivinhar qual vai ser a cor
        bgcolor: (theme: Theme) => theme.palette[color].dark,
        backgroundImage: (theme: Theme) =>
          // @ts-expect-error Espero erro aqui pois o typescript não tem como adivinhar qual vai ser a cor
          `linear-gradient(315deg, ${theme.palette[color].light} 0%, ${theme.palette[color].dark} 74%);
          `,
        ...sx,
      }}
      className={route && 'cursor-pointer transition-transform hover:scale-105'}
      onClick={() => router.push(`${route}`)}
      {...other}
    >
      <StyledIcon>
        <Icon />
      </StyledIcon>

      {title === 'Rendimento operacional' ? (
        <Typography variant='h3' color='white'>
          {total}%
        </Typography>
      ) : (
        <Typography variant='h3' color='white'>
          {total}
        </Typography>
      )}

      <Typography variant='subtitle2' color='white' sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
}
