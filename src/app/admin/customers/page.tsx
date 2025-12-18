import React from 'react';
import { Card, Button, SectionHeading } from '@/app/components/Common';
import { Icon } from '@iconify/react/dist/iconify.js';

export const metadata = {
  title: 'Customers | Admin',
};

export default function CustomersPage() {
  return (
    <div className='space-y-6'>
      {/* Header */}
      <Card>
        <SectionHeading
          title='Customers'
          subtitle='Manage and track your customer base'
          action={
            <Button variant='primary' size='sm'>
              <Icon icon='solar:download-bold' className='w-5 h-5' />
              Export List
            </Button>
          }
        />
      </Card>

      {/* Stats Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <Card className='p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-gray-600 dark:text-gray-400 text-sm'>Total Customers</p>
              <p className='text-3xl font-bold text-gray-900 dark:text-white mt-2'>
                3,284
              </p>
            </div>
            <div className='w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center'>
              <Icon icon='solar:user-circle-bold' className='w-6 h-6 text-purple-600 dark:text-purple-400' />
            </div>
          </div>
        </Card>

        <Card className='p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-gray-600 dark:text-gray-400 text-sm'>Active Today</p>
              <p className='text-3xl font-bold text-gray-900 dark:text-white mt-2'>
                234
              </p>
            </div>
            <div className='w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center'>
              <Icon icon='solar:check-circle-bold' className='w-6 h-6 text-green-600 dark:text-green-400' />
            </div>
          </div>
        </Card>

        <Card className='p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-gray-600 dark:text-gray-400 text-sm'>Avg. Lifetime Value</p>
              <p className='text-3xl font-bold text-gray-900 dark:text-white mt-2'>
                $234.50
              </p>
            </div>
            <div className='w-12 h-12 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center'>
              <Icon icon='solar:heart-bold' className='w-6 h-6 text-pink-600 dark:text-pink-400' />
            </div>
          </div>
        </Card>
      </div>

      {/* Coming Soon */}
      <Card className='p-12 text-center'>
        <div className='flex justify-center mb-4'>
          <div className='w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center'>
            <Icon icon='solar:user-circle-bold' className='w-8 h-8 text-primary' />
          </div>
        </div>
        <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
          Customer Directory
        </h3>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          View and manage all your customers in one place. Track purchases, engagement, and behavior.
        </p>
        <Button variant='outline'>View Documentation</Button>
      </Card>
    </div>
  );
}
