import {
  Battery0Bar,
  DeviceThermostat,
  PointOfSale,
  SyncDisabled,
} from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Notification } from '@/types/Notification';

export default function defineNotificationContent(notification: Notification) {
  const title = (
    <Typography variant='subtitle2'>
      {notification.title}
      <Typography
        component='span'
        variant='body2'
        sx={{ color: 'text.secondary', textTransform: 'none' }}
      >
        &nbsp; {notification.type}
      </Typography>
    </Typography>
  );

  if (notification.type === 'Alimentador') {
    return {
      avatar: <PointOfSale />,
      title,
    };
  }
  if (notification.type === 'Bateria Fraca') {
    return {
      avatar: <Battery0Bar />,
      title,
    };
  }
  if (notification.type === 'Termometro desconectado') {
    return {
      avatar: <DeviceThermostat />,
      title,
    };
  }
  if (notification.type === 'Motor desligado') {
    return {
      avatar: <SyncDisabled />,
      title,
    };
  }
  return {
    avatar: null,
    title: title,
  };
}
