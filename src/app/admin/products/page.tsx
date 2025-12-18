import React from 'react';
import { Card, Button, SectionHeading } from '@/app/components/Common';
import { Icon } from '@iconify/react/dist/iconify.js';

export const metadata = {
  title: 'Products | Admin',
};

export default function ProductsPage() {
  return (
    <div className='space-y-6'>
      {/* Header */}
      <Card>
        <SectionHeading
          title='Products'
          subtitle='Manage your digital products and courses'
          action={
            <Button variant='primary' size='sm'>
              <Icon icon='solar:add-circle-bold' className='w-5 h-5' />
              Add Product
            </Button>
          }
        />
      </Card>

      {/* Coming Soon */}
      <Card className='p-12 text-center'>
        <div className='flex justify-center mb-4'>
          <div className='w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center'>
            <Icon icon='solar:bag-2-bold' className='w-8 h-8 text-primary' />
          </div>
        </div>
        <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
          Products Page
        </h3>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          This page is ready for development. You can manage all your digital products and courses here.
        </p>
        <Button variant='outline'>View Documentation</Button>
      </Card>
    </div>
  );
}
