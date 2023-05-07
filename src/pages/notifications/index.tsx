import * as React from 'react';
import Seo from '@/components/Seo';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Alert, AlertTitle, Stack, Typography } from '@mui/material';

import { userNotifications } from '@/data/userNotifications';
import { Notification } from '@/types/Notification';
import NotificationItem from '@/components/dashboard/NotificationItem';

export default function NotificationsPage() {
  return (
    <DashboardLayout>
      <Seo templateTitle='Notificações' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <div className='py-4'>
              <Typography variant='h4'>Notificações</Typography>
            </div>
            <Alert severity='info' variant='filled'>
              <AlertTitle>Como resolver notificações?</AlertTitle>
              Para baixar o nosso manual de notificações —{' '}
              <a
                className='cursor-pointer font-bold hover:underline'
                href='https://google.com.br'
                target='_blank'
              >
                clique aqui!
              </a>
            </Alert>
            <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
              {userNotifications.map((notification: Notification) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                />
              ))}
            </Stack>
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
}
