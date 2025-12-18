'use client'

import React, { Suspense, useState } from 'react';
import { DashboardData } from '@/app/types/dashboard';
import StatsGrid from './StatsGrid';
import RecentOrders from './RecentOrders';
import TopProducts from './TopProducts';
import RevenueChart from './RevenueChart';
import BeautifulDateRangePicker from '@/components/BeautifulDateRangePicker';
import { Icon } from '@iconify/react/dist/iconify.js';

interface DashboardContentProps {
  data: DashboardData;
}

/**
 * Main dashboard content component
 * Composes all dashboard sections in a responsive layout
 */
const DashboardContent: React.FC<DashboardContentProps> = ({ data }) => {
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  const handleDateChange = (startDate: string, endDate: string) => {
    setDateRange({ start: startDate, end: endDate });
    // Here you would typically refetch dashboard data with new date range
    console.log('Date range changed:', { startDate, endDate });
  };

  return (
    <div className='space-y-6 animate-fadeIn'>
      {/* Mobile: Filter & Export at TOP */}
      <div className='md:hidden flex flex-col gap-3 animate-slideDown'>
        <BeautifulDateRangePicker onDateChange={handleDateChange} />
        <button className='flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium w-full active:scale-95'>
          <Icon icon='solar:download-bold' className='w-5 h-5' />
          Export Report
        </button>
      </div>

      {/* Desktop: Header Section */}
      <div className='hidden md:block animate-slideDown'>
        <div className='flex items-center justify-between mb-8'>
          <div>
            <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
              Dashboard
            </h1>
            <p className='text-gray-600 dark:text-gray-400 mt-1'>
              Welcome back! Here's your store performance overview.
            </p>
          </div>
          <div className='flex items-center gap-3'>
            <BeautifulDateRangePicker onDateChange={handleDateChange} />
            <button className='flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all font-medium hover:scale-105 active:scale-95'>
              <Icon icon='solar:download-bold' className='w-5 h-5' />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <StatsGrid stats={data.stats} />

      {/* Charts Row */}
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
        <div className='xl:col-span-2'>
          <RevenueChart data={data.revenueChart} />
        </div>
        <div>
          <TopProducts products={data.topProducts.slice(0, 3)} />
        </div>
      </div>

      {/* Orders Section */}
      <div>
        <RecentOrders orders={data.recentOrders} />
      </div>
    </div>
  );
};

export default DashboardContent;
