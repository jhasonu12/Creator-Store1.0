import React from 'react';
import { Card, Button, SectionHeading } from '@/app/components/Common';
import { Icon } from '@iconify/react/dist/iconify.js';

export const metadata = {
  title: 'Settings | Admin',
};

export default function SettingsPage() {
  return (
    <div className='space-y-6 max-w-3xl'>
      {/* Header */}
      <div>
        <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>Settings</h1>
        <p className='text-gray-600 dark:text-gray-400'>
          Manage your account and platform settings
        </p>
      </div>

      {/* Store Settings */}
      <Card className='p-6'>
        <div className='flex items-start justify-between mb-6'>
          <div>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              Store Settings
            </h3>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
              Configure your store name, description, and general settings
            </p>
          </div>
          <Icon icon='solar:settings-bold' className='w-6 h-6 text-primary' />
        </div>
        <Button variant='outline' size='sm'>
          Configure Store
        </Button>
      </Card>

      {/* Payment Settings */}
      <Card className='p-6'>
        <div className='flex items-start justify-between mb-6'>
          <div>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              Payment Settings
            </h3>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
              Connect your payment methods and configure payment processing
            </p>
          </div>
          <Icon icon='solar:card-bold' className='w-6 h-6 text-primary' />
        </div>
        <Button variant='outline' size='sm'>
          Configure Payments
        </Button>
      </Card>

      {/* Email Settings */}
      <Card className='p-6'>
        <div className='flex items-start justify-between mb-6'>
          <div>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              Email Settings
            </h3>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
              Setup transactional emails and notifications
            </p>
          </div>
          <Icon icon='solar:letter-bold' className='w-6 h-6 text-primary' />
        </div>
        <Button variant='outline' size='sm'>
          Configure Emails
        </Button>
      </Card>

      {/* API Settings */}
      <Card className='p-6'>
        <div className='flex items-start justify-between mb-6'>
          <div>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              API Settings
            </h3>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
              Manage API keys and integrations
            </p>
          </div>
          <Icon icon='solar:code-bold' className='w-6 h-6 text-primary' />
        </div>
        <Button variant='outline' size='sm'>
          Configure API
        </Button>
      </Card>

      {/* Team & Permissions */}
      <Card className='p-6'>
        <div className='flex items-start justify-between mb-6'>
          <div>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              Team & Permissions
            </h3>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
              Add team members and manage their access levels
            </p>
          </div>
          <Icon icon='solar:users-group-bold' className='w-6 h-6 text-primary' />
        </div>
        <Button variant='outline' size='sm'>
          Manage Team
        </Button>
      </Card>

      {/* Billing & Subscription */}
      <Card className='p-6'>
        <div className='flex items-start justify-between mb-6'>
          <div>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              Billing & Subscription
            </h3>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
              View your subscription plan and billing history
            </p>
          </div>
          <Icon icon='solar:bill-list-bold' className='w-6 h-6 text-primary' />
        </div>
        <Button variant='outline' size='sm'>
          View Billing
        </Button>
      </Card>

      {/* Security */}
      <Card className='p-6 border border-yellow-200 dark:border-yellow-900/30 bg-yellow-50 dark:bg-yellow-900/10'>
        <div className='flex items-start justify-between mb-6'>
          <div>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              Security & Password
            </h3>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
              Update your password and enable two-factor authentication
            </p>
          </div>
          <Icon icon='solar:shield-bold' className='w-6 h-6 text-yellow-600 dark:text-yellow-400' />
        </div>
        <Button variant='outline' size='sm' className='border-yellow-300 dark:border-yellow-700'>
          Update Security
        </Button>
      </Card>

      {/* Danger Zone */}
      <Card className='p-6 border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-900/10'>
        <div className='flex items-start justify-between mb-6'>
          <div>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              Danger Zone
            </h3>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
              Irreversible actions - handle with care
            </p>
          </div>
          <Icon icon='solar:danger-bold' className='w-6 h-6 text-red-600 dark:text-red-400' />
        </div>
        <Button variant='danger' size='sm'>
          Delete Store
        </Button>
      </Card>
    </div>
  );
}
