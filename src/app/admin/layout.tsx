import React from 'react';
import DashboardHeader from '@/app/components/Dashboard/DashboardHeader';
import DashboardSidebar from '@/app/components/Dashboard/DashboardSidebar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20'>
      {/* Animated background elements */}
      <div className='fixed inset-0 -z-10 overflow-hidden pointer-events-none'>
        <div className='absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob'></div>
        <div className='absolute top-40 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000'></div>
        <div className='absolute -bottom-8 left-20 w-96 h-96 bg-pink-200 dark:bg-pink-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000'></div>
      </div>

      {/* Dashboard Header */}
      <DashboardHeader />

      {/* Main Layout */}
      <div className='flex pt-20'>
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main Content */}
        <main className='flex-1 overflow-hidden'>
          <div className='p-4 md:p-6 lg:p-8 min-h-screen'>
            <div className='max-w-7xl mx-auto'>
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
