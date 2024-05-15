import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import * as React from 'react';

import TextButton from '@/components/buttons/TextButton';
import OutlinedInput from '@/components/inputs/input';
import { FormInputsContainer } from '@/components/inputs/styled';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function ForgetPage() {
  const router = useRouter();
  return (
    <Layout>
      <Seo templateTitle='Esqueci minha senha' />
      <main>
        <section className='bg-gray-50 dark:bg-gray-900'>
          <div className='mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0'>
            <div className='w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0'>
              <div className='space-y-4 p-6 sm:p-8 md:space-y-6'>
                <Typography
                  variant='h5'
                  color='white'
                  fontWeight='500'
                  className='text-black dark:text-white'
                >
                  Recuperar sua conta
                </Typography>
                <form className='space-y-4 md:space-y-6' action='#'>
                  <FormInputsContainer>
                    <OutlinedInput
                      name='instance'
                      labelName='Instância'
                      id='instance'
                      placeholder='Instância'
                      required
                    />
                    <OutlinedInput
                      name='email'
                      labelName='Email'
                      type='email'
                      id='email'
                      placeholder='seunome@suaempresa.com'
                      required
                    />
                  </FormInputsContainer>
                  <TextButton
                    type='submit'
                    className='bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4'
                  >
                    Recuperar senha
                  </TextButton>
                  <Button
                    onClick={() => router.push('/login')}
                    variant='text'
                    color='error'
                    className='normal-case'
                    fullWidth
                  >
                    Voltar
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
