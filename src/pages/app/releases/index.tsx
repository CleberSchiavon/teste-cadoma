import { Grid, Typography } from '@mui/material';
import * as React from 'react';

import ReleaseCard from '@/components/card/ReleaseCard';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Seo from '@/components/Seo';

export default function ReleasesPage() {
  return (
    <DashboardLayout>
      <Seo templateTitle='Lançamentos' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-28'>
            <Typography variant='h5' className='mb-4'>
              Lançamentos
            </Typography>
            <Grid container spacing={1}>
              <Grid item spacing={4} className='mb-4'>
                <ReleaseCard
                  title='Mortalidades'
                  description='Descrição do fluxo de mortalidades Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor vitae ligula non tempus. Mauris nibh risus, semper eget facilisis non, molestie a turpis'
                />
              </Grid>
              <Grid item spacing={4}>
                <ReleaseCard
                  title='Desligamentos'
                  description='Descrição do fluxo de desligamentos Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor vitae ligula non tempus. Mauris nibh risus, semper eget facilisis non, molestie a turpis'
                />
              </Grid>
              <Grid item spacing={4}>
                <ReleaseCard
                  title='Taxas extras'
                  description='Descrição do fluxo de taxas extras Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor vitae ligula non tempus. Mauris nibh risus, semper eget facilisis non, molestie a turpis'
                  disabled
                />
              </Grid>
              <Grid item spacing={4}>
                <ReleaseCard
                  title='Recargas'
                  description='Descrição do fluxo de recargas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor vitae ligula non tempus. Mauris nibh risus, semper eget facilisis non, molestie a turpis'
                />
              </Grid>
              <Grid item spacing={4}>
                <ReleaseCard
                  title='Biometrias'
                  description='Descrição do fluxo de biometrias Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor vitae ligula non tempus. Mauris nibh risus, semper eget facilisis non, molestie a turpis'
                  disabled
                />
              </Grid>
              <Grid item spacing={4}>
                <ReleaseCard
                  title='Manutenção'
                  description='Descrição do fluxo de manutenção Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor vitae ligula non tempus. Mauris nibh risus, semper eget facilisis non, molestie a turpis'
                  disabled
                />
              </Grid>
              <Grid item spacing={4}>
                <ReleaseCard
                  title='Lançamento de O2'
                  description='Descrição do fluxo de lançamento de O2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor vitae ligula non tempus. Mauris nibh risus, semper eget facilisis non, molestie a turpis'
                />
              </Grid>
            </Grid>
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
}
