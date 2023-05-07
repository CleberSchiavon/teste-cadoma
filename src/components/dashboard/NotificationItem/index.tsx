import {
  Avatar,
  Box,
  Button,
  Link,
  ListItemAvatar,
  Stack,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import DialogTextModal from '@/components/modal/DialogTextModal';

import { fToNow } from '@/utils/formatTimes';
import defineNotificationContent from '@/utils/notifications/defineNotificationContent';

import { NotificationItem } from '@/types/Notification';

export default function NotificationItem({ notification }: NotificationItem) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleSubmit = () => {
    handleCloseModal();
    toast.success('Notificação resolvida com succeso', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };
  const { avatar } = defineNotificationContent(notification);
  const { title, type, createdAt } = notification;

  return (
    <Stack direction='row' alignItems='center' spacing={2}>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: 'background.neutral' }}>{avatar}</Avatar>
      </ListItemAvatar>

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

      <Button variant='contained' color='success' onClick={handleOpenModal}>
        Marcar como resolvida
      </Button>

      <DialogTextModal
        modalTitle='Marcar notificação como resolvida'
        modalSubtitle='(Mínimo 10 caracteres)'
        submitText='Marcar como resolvida'
        open={modalOpen}
        handleSubmit={handleSubmit}
        handleClose={handleCloseModal}
      />
    </Stack>
  );
}
