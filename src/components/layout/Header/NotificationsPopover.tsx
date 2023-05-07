// components
import { AccessTime, DoneAll, Notifications } from '@mui/icons-material';
// @mui
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Popover,
  Tooltip,
  Typography,
} from '@mui/material';
import { useState } from 'react';

import { userNotifications } from '@/data/userNotifications';

// utils
import { fToNow } from '@/utils/formatTimes';

import { Notification, NotificationItem } from '@/types/Notification';
import defineNotificationContent from '@/utils/notifications/defineNotificationContent';
import { useRouter } from 'next/router';

export default function NotificationsPopover() {
  const [notifications, setNotifications] = useState(userNotifications);

  const [open, setOpen] = useState(null);

  const totalUnRead = notifications.filter(
    (item: Notification) => item.isUnread === true
  ).length;

  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification: Notification) => ({
        ...notification,
        isUnread: false,
      }))
    );
  };

  return (
    <>
      <IconButton
        color={open ? 'primary' : 'default'}
        onClick={handleOpen}
        sx={{ width: 40, height: 40 }}
      >
        <Badge badgeContent={totalUnRead} color='error'>
          <Notifications />
        </Badge>
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            mt: 1.5,
            ml: 0.75,
            width: 360,
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant='subtitle1'>Notificações</Typography>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              Você tem {totalUnRead} notificações pendentes
            </Typography>
          </Box>

          {totalUnRead > 0 && (
            <Tooltip title='Marcar todas como resolvidas'>
              <IconButton color='primary' onClick={handleMarkAllAsRead}>
                <DoneAll />
              </IconButton>
            </Tooltip>
          )}
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />
        <List
          disablePadding
          subheader={
            <ListSubheader
              disableSticky
              sx={{ py: 1, px: 2.5, typography: 'overline' }}
            >
              Novo
            </ListSubheader>
          }
        >
          {notifications.slice(0, 2).map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))}
        </List>

        <List
          disablePadding
          subheader={
            <ListSubheader
              disableSticky
              sx={{ py: 1, px: 2.5, typography: 'overline' }}
            >
              Vistos
            </ListSubheader>
          }
        >
          {notifications.slice(2, 5).map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))}
        </List>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Box sx={{ p: 1 }}>
          <Button
            fullWidth
            disableRipple
            onClick={() => router.push('/app/notifications')}
          >
            Ver todas as notificações
          </Button>
        </Box>
      </Popover>
    </>
  );
}

function NotificationItem({ notification }: NotificationItem) {
  const { avatar, title } = defineNotificationContent(notification);

  return (
    <ListItemButton
      sx={{
        py: 1.5,
        px: 2.5,
        mt: '1px',
        ...(notification.isUnread && {
          bgcolor: 'action.selected',
        }),
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: 'background.neutral' }}>{avatar}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <Typography
            variant='caption'
            sx={{
              mt: 0.5,
              display: 'flex',
              alignItems: 'center',
              color: 'text.disabled',
            }}
          >
            <AccessTime sx={{ mr: 0.5, width: 16, height: 16 }} />
            {fToNow(notification.createdAt)}
          </Typography>
        }
      />
    </ListItemButton>
  );
}
