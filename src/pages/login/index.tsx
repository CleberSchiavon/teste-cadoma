import { Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';

import TextButton from '@/components/buttons/TextButton';
import Checkbox from '@/components/inputs/Checkbox';
import OutlinedInput from '@/components/inputs/input';
import { FormInputsContainer } from '@/components/inputs/styled';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function LoginPage() {
  const router = useRouter();
  const { handleSubmit } = useForm();

  const handleLogin = () => {
    router.push('/app');
  };
  return (
    <Layout>
      <Seo templateTitle='Login' />
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
                  Entrar na sua conta
                </Typography>
                <form
                  className='space-y-4 md:space-y-6'
                  action='#'
                  onSubmit={handleSubmit(handleLogin)}
                >
                  <FormInputsContainer>
                    <OutlinedInput
                      name='email'
                      labelName='Email'
                      type='email'
                      id='email'
                      placeholder='seunome@suaempresa.com'
                      required
                    />
                    <OutlinedInput
                      name='password'
                      labelName='Senha'
                      type='password'
                      id='password'
                      required
                    />
                  </FormInputsContainer>
                  <div className='flex items-center justify-between'>
                    <Checkbox
                      name='remember'
                      placeholder='Lembrar senha'
                      id='remember'
                    />
                    <Link href='/forgetpassword'>
                      <Typography
                        color='white'
                        className='text-primary-600 dark:text-primary-500 cursor-pointer font-medium hover:underline'
                        fontSize={15}
                      >
                        Esqueceu a senha
                      </Typography>
                    </Link>
                  </div>
                  <TextButton
                    type='submit'
                    className='bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4'
                  >
                    Entrar
                  </TextButton>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
