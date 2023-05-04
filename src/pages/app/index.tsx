import { Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { homeWidgets } from '@/data/homeWidgets';
import { userNotifications } from '@/data/userNotifications';

import {
  DashboardNotifications,
  DashboardWidget,
  OperatingIncome,
  SilLevel,
} from '@/components/dashboard';
import DashboardLayout from '@/components/layout/DashboardLayout';

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <DashboardLayout>
      <Container maxWidth='xl' sx={{ mt: '12vh', mb: '6vh' }}>
        <Typography variant='h4' sx={{ mb: 5 }}>
          Olá, boa noite!
        </Typography>

        <Grid container spacing={3}>
          {homeWidgets.map((widget) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={widget.title}>
                <DashboardWidget
                  title={widget.title}
                  total={widget.total}
                  color={widget.color}
                  Icon={widget.icon}
                />
              </Grid>
            );
          })}

          <Grid item xs={12} md={12} lg={12}>
            <DashboardNotifications
              title='Suas Notificações'
              list={userNotifications}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <OperatingIncome
              title='Rendimento operacional'
              chartData={[
                { label: 'Rendimento', value: 800 },
                { label: 'Não rendimento', value: 50 },
              ]}
              chartColors={[
                theme.palette.success.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <SilLevel
              title='Nível dos Silos'
              subheader=''
              chartData={[
                { label: 'Silo 1', value: 400 },
                { label: 'Silo 2', value: 430 },
                { label: 'Silo 3', value: 448 },
                { label: 'Silo 4', value: 470 },
                { label: 'Silo 5', value: 540 },
                { label: 'Silo 6', value: 580 },
                { label: 'Silo 7', value: 690 },
                { label: 'Silo 8', value: 1100 },
                { label: 'Silo 9', value: 1200 },
                { label: 'Silo 10', value: 1380 },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </DashboardLayout>
  );
}
