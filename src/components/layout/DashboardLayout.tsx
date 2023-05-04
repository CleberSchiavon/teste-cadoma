import React, { useState } from 'react';

import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navOpen, setNavOpen] = useState(true);
  const onOpenNav = () => setNavOpen(true);
  const onCloseNav = () => setNavOpen(false);
  return (
    <>
      <Header onOpenNav={onOpenNav} />
      <Navbar onCloseNav={onCloseNav} openNav={navOpen} />;{children}
    </>
  );
}
