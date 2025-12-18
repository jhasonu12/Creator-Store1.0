import React from 'react';
import { Metadata } from 'next';
import DashboardContent from '@/app/components/Dashboard/DashboardContent';
import { fetchDashboardData } from '@/app/services/dashboardService';

export const metadata: Metadata = {
  title: 'Dashboard | Admin',
  description: 'Manage your store, products, orders, and earnings in one place.',
};

/**
 * Admin Dashboard Page
 * 
 * This is a server component that:
 * - Fetches dashboard data
 * - Passes it to client components
 * - Maintains separation of concerns
 * - Enables ISR and caching strategies
 */
async function AdminDashboardPage() {
  let dashboardData;
  let error = false;

  try {
    dashboardData = await fetchDashboardData();
  } catch (err) {
    console.error('Dashboard data fetch failed:', err);
    error = true;
  }

  if (error || !dashboardData) {
    return (
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center border border-red-200 dark:border-red-900'>
        <p className='text-gray-600 dark:text-gray-400 mb-4'>
          Unable to load dashboard data. Please try again later.
        </p>
        <button
          onClick={() => window.location.reload()}
          className='px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors'
        >
          Reload Page
        </button>
      </div>
    );
  }

  return <DashboardContent data={dashboardData} />;
}

export default AdminDashboardPage;
