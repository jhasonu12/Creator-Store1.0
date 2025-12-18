import React from 'react';
import { Card, Button, SectionHeading } from '@/app/components/Common';
import { Icon } from '@iconify/react/dist/iconify.js';

export const metadata = {
  title: 'Profile | Admin',
};

export default function ProfilePage() {
  return (
    <div className='space-y-6 max-w-2xl'>
      {/* Header */}
      <div>
        <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>My Profile</h1>
        <p className='text-gray-600 dark:text-gray-400'>
          Manage your account information and preferences
        </p>
      </div>

      {/* Profile Header Card */}
      <Card className='p-8'>
        <div className='flex flex-col sm:flex-row sm:items-center gap-6 mb-8'>
          {/* Avatar */}
          <div className='relative'>
            <div className='w-24 h-24 rounded-full bg-gradient-to-br from-primary to-pink-600 flex items-center justify-center'>
              <Icon icon='solar:user-bold' className='w-12 h-12 text-white' />
            </div>
            <button className='absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition'>
              <Icon icon='solar:camera-bold' className='w-4 h-4' />
            </button>
          </div>

          {/* User Info */}
          <div className='flex-1'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
              John Doe
            </h2>
            <p className='text-gray-600 dark:text-gray-400'>Creator Account</p>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-2'>
              john@example.com
            </p>
            <div className='mt-4 flex gap-2'>
              <span className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'>
                <Icon icon='solar:check-circle-bold' className='w-4 h-4 mr-1' />
                Verified
              </span>
            </div>
          </div>

          <Button variant='outline'>Edit Profile</Button>
        </div>
      </Card>

      {/* Account Information */}
      <Card className='p-6'>
        <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2'>
          <Icon icon='solar:user-circle-bold' className='w-5 h-5' />
          Account Information
        </h3>

        <div className='space-y-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                First Name
              </label>
              <input
                type='text'
                value='John'
                readOnly
                className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white cursor-not-allowed'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                Last Name
              </label>
              <input
                type='text'
                value='Doe'
                readOnly
                className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white cursor-not-allowed'
              />
            </div>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Email Address
            </label>
            <input
              type='email'
              value='john@example.com'
              readOnly
              className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white cursor-not-allowed'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Phone Number
            </label>
            <input
              type='tel'
              value='+1 (555) 123-4567'
              readOnly
              className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white cursor-not-allowed'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Bio
            </label>
            <textarea
              readOnly
              rows={3}
              className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white cursor-not-allowed'
              value='Digital creator focused on educational content and product development.'
            />
          </div>
        </div>

        <div className='mt-6 flex gap-3'>
          <Button variant='primary'>Save Changes</Button>
          <Button variant='outline'>Cancel</Button>
        </div>
      </Card>

      {/* Store Information */}
      <Card className='p-6'>
        <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2'>
          <Icon icon='solar:shop-bold' className='w-5 h-5' />
          Store Information
        </h3>

        <div className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Store Name
            </label>
            <input
              type='text'
              value='John Doe Store'
              readOnly
              className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white cursor-not-allowed'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Store URL
            </label>
            <input
              type='text'
              value='https://creatorworld.com/johndoe'
              readOnly
              className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white cursor-not-allowed'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Store Description
            </label>
            <textarea
              readOnly
              rows={3}
              className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white cursor-not-allowed'
              value='Curated digital products for digital creators and entrepreneurs.'
            />
          </div>
        </div>

        <div className='mt-6'>
          <Button variant='outline'>Manage Store Details</Button>
        </div>
      </Card>

      {/* Connected Accounts */}
      <Card className='p-6'>
        <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2'>
          <Icon icon='solar:link-bold' className='w-5 h-5' />
          Connected Accounts
        </h3>

        <div className='space-y-3'>
          <div className='flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700'>
            <div className='flex items-center gap-3'>
              <Icon icon='mdi:google' className='w-6 h-6' />
              <div>
                <p className='font-medium text-gray-900 dark:text-white'>Google Account</p>
                <p className='text-xs text-gray-600 dark:text-gray-400'>john@gmail.com</p>
              </div>
            </div>
            <Button variant='outline' size='sm'>Disconnect</Button>
          </div>

          <div className='flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700'>
            <div className='flex items-center gap-3'>
              <Icon icon='mdi:github' className='w-6 h-6' />
              <div>
                <p className='font-medium text-gray-900 dark:text-white'>GitHub Account</p>
                <p className='text-xs text-gray-600 dark:text-gray-400'>@johndoe</p>
              </div>
            </div>
            <Button variant='outline' size='sm'>Disconnect</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
