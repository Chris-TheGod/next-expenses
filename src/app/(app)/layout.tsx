import AppHeader from '@/components/app-header';
import BackgroundPattern from '@/components/background-pattern';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <BackgroundPattern />

      <div className='flex flex-col gap-y-10 max-w-[1050px] mx-auto'>
        <AppHeader />
        {children}
      </div>
    </>
  );
}
