import React from 'react';
import { Card, Button, SectionHeading } from '@/app/components/Common';
import { Icon } from '@iconify/react/dist/iconify.js';

export const metadata = {
  title: 'Analytics | Admin',
};

export default function AnalyticsPage() {
  return (
    <div className='space-y-6'>
      {/* Header */}
      <Card>
        <SectionHeading
          title='Analytics'
          subtitle='Track your sales and business performance'
          action={
            <Button variant='primary' size='sm'>
              <Icon icon='solar:download-bold' className='w-5 h-5' />
              Export Report
            </Button>
          }
        />
      </Card>

      {/* Key Metrics */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
        <Card className='p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-gray-600 dark:text-gray-400 text-sm'>Total Revenue</p>
              <p className='text-2xl font-bold text-gray-900 dark:text-white mt-1'>
                $45,890.50
              </p>
              <p className='text-green-600 dark:text-green-400 text-xs mt-2'>
                <Icon icon='solar:arrow-up-bold' className='inline w-4 h-4' /> 12.5% vs last month
              </p>
            </div>
          </div>
        </Card>

        <Card className='p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-gray-600 dark:text-gray-400 text-sm'>Total Orders</p>
              <p className='text-2xl font-bold text-gray-900 dark:text-white mt-1'>
                1,234
              </p>
              <p className='text-green-600 dark:text-green-400 text-xs mt-2'>
                <Icon icon='solar:arrow-up-bold' className='inline w-4 h-4' /> 8.2% vs last month
              </p>
            </div>
          </div>
        </Card>

        <Card className='p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-gray-600 dark:text-gray-400 text-sm'>Conversion Rate</p>
              <p className='text-2xl font-bold text-gray-900 dark:text-white mt-1'>
                3.24%
              </p>
              <p className='text-red-600 dark:text-red-400 text-xs mt-2'>
                <Icon icon='solar:arrow-down-bold' className='inline w-4 h-4' /> 2.1% vs last month
              </p>
            </div>
          </div>
        </Card>

        <Card className='p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-gray-600 dark:text-gray-400 text-sm'>Avg. Order Value</p>
              <p className='text-2xl font-bold text-gray-900 dark:text-white mt-1'>
                $37.21
              </p>
              <p className='text-green-600 dark:text-green-400 text-xs mt-2'>
                <Icon icon='solar:arrow-up-bold' className='inline w-4 h-4' /> 5.3% vs last month
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts Placeholder */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <Card className='p-6 h-80 flex flex-col items-center justify-center text-center'>
          <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4'>
            <Icon icon='solar:graph-bold' className='w-6 h-6 text-primary' />
          </div>
          <h3 className='font-semibold text-gray-900 dark:text-white mb-1'>Sales Trend</h3>
          <p className='text-sm text-gray-600 dark:text-gray-400'>
            Coming soon - Interactive sales chart
          </p>
        </Card>

        <Card className='p-6 h-80 flex flex-col items-center justify-center text-center'>
          <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4'>
            <Icon icon='solar:pie-chart-bold' className='w-6 h-6 text-primary' />
          </div>
          <h3 className='font-semibold text-gray-900 dark:text-white mb-1'>Revenue By Product</h3>
          <p className='text-sm text-gray-600 dark:text-gray-400'>
            Coming soon - Product breakdown
          </p>
        </Card>
      </div>

      {/* Coming Soon */}
      <Card className='p-12 text-center'>
        <div className='flex justify-center mb-4'>
          <div className='w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center'>
            <Icon icon='solar:graph-bold' className='w-8 h-8 text-primary' />
          </div>
        </div>
        <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
          Advanced Analytics Dashboard
        </h3>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Comprehensive insights into your business performance with detailed charts, trends, and actionable metrics.
        </p>
        <Button variant='outline'>View Documentation</Button>
      </Card>
    </div>
  );
}
