import React from 'react';
import { Card, Button, SectionHeading, Badge } from '@/app/components/Common';
import { Icon } from '@iconify/react/dist/iconify.js';

export const metadata = {
  title: 'Orders | Admin',
};

export default function OrdersPage() {
  return (
    <div className='space-y-6'>
      {/* Header */}
      <Card>
        <SectionHeading
          title='Orders'
          subtitle='View and manage customer orders'
          action={
            <Badge variant='info'>12 New</Badge>
          }
        />
      </Card>

      {/* Stats Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <Card className='p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-gray-600 dark:text-gray-400 text-sm'>Total Orders</p>
              <p className='text-3xl font-bold text-gray-900 dark:text-white mt-2'>
                1,234
              </p>
            </div>
            <div className='w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center'>
              <Icon icon='solar:cart-3-bold' className='w-6 h-6 text-blue-600 dark:text-blue-400' />
            </div>
          </div>
        </Card>

        <Card className='p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-gray-600 dark:text-gray-400 text-sm'>Pending Orders</p>
              <p className='text-3xl font-bold text-gray-900 dark:text-white mt-2'>
                45
              </p>
            </div>
            <div className='w-12 h-12 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center'>
              <Icon icon='solar:clock-circle-bold' className='w-6 h-6 text-yellow-600 dark:text-yellow-400' />
            </div>
          </div>
        </Card>

        <Card className='p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-gray-600 dark:text-gray-400 text-sm'>Total Revenue</p>
              <p className='text-3xl font-bold text-gray-900 dark:text-white mt-2'>
                $45,890
              </p>
            </div>
            <div className='w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center'>
              <Icon icon='solar:money-bag-bold' className='w-6 h-6 text-green-600 dark:text-green-400' />
            </div>
          </div>
        </Card>
      </div>

      {/* Coming Soon */}
      <Card className='p-12 text-center'>
        <div className='flex justify-center mb-4'>
          <div className='w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center'>
            <Icon icon='solar:cart-3-bold' className='w-8 h-8 text-primary' />
          </div>
        </div>
        <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
          Orders List
        </h3>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Your orders will be displayed here. You can track, fulfill, and manage customer orders.
        </p>
        <Button variant='outline'>View Documentation</Button>
      </Card>
    </div>
  );
}
