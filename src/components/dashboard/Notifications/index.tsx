import { KeyboardArrowRight } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Link,
  Stack,
  Typography,
} from '@mui/material';

import { fToNow } from '@/utils/formatTimes';

import {
  IDashboardNotification,
  Notification,
  NotificationItem,
} from '@/types/Notification';

export default function DashboardNotifications({
  title,
  subheader,
  list,
  ...other
}: IDashboardNotification) {
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
        <Button size='small' color='inherit' endIcon={<KeyboardArrowRight />}>
          Ver todas as notificações
        </Button>
      </Box>
    </Card>
  );
}

function NotificationItem({ notification }: NotificationItem) {
  const { image, title, type, createdAt } = notification;

  return (
    <Stack direction='row' alignItems='center' spacing={2}>
      <Box
        component='img'
        alt={title}
        src={image}
        sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }}
      />

      <Box sx={{ minWidth: 240, flexGrow: 1 }}>
        <Link color='inherit' variant='subtitle2' underline='hover' noWrap>
          {title}
        </Link>

        <Typography variant='body2' sx={{ color: 'text.secondary' }} noWrap>
          {type}
        </Typography>
      </Box>

      <Typography
        variant='caption'
        sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}
      >
        {fToNow(createdAt)}
      </Typography>
    </Stack>
  );
}
