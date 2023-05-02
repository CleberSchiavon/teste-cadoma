import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import Layout from '@/components/layout/Layout';

export default function HomePage() {
  const router = useRouter();
  useEffect(() => {
    router.push('/login');
  });
  return (
    <Layout>
      <p></p>
    </Layout>
  );
}
