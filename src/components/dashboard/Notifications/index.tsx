import { KeyboardArrowRight } from '@mui/icons-material';
import { Box, Button, Card, CardHeader, Divider, Stack } from '@mui/material';
import { useRouter } from 'next/router';

import NotificationItem from '@/components/dashboard/NotificationItem';

import { IDashboardNotification, Notification } from '@/types/Notification';

export default function DashboardNotifications({
  title,
  subheader,
  list,
  ...other
}: IDashboardNotification) {
  const router = useRouter();
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
        {list.map((notification: Notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </Stack>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          size='small'
          color='inherit'
          endIcon={<KeyboardArrowRight />}
          onClick={() => router.push('/app/notifications')}
        >
          Ver todas as notificações
        </Button>
      </Box>
    </Card>
  );
}
