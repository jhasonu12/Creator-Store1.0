'use client'

import React from 'react';
import Link from 'next/link';
import { Order } from '@/app/types/dashboard';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Badge, Card, SectionHeading } from '@/app/components/Common';

interface RecentOrdersProps {
  orders: Order[];
}

/**
 * Recent orders section
 * Displays latest orders in a responsive table format
 */
const RecentOrders: React.FC<RecentOrdersProps> = ({ orders }) => {
  const getStatusVariant = (status: Order['status']) => {
    const variantMap = {
      completed: 'success' as const,
      pending: 'warning' as const,
      failed: 'danger' as const,
      refunded: 'info' as const,
    };
    return variantMap[status];
  };

  const getStatusIcon = (status: Order['status']) => {
    const iconMap = {
      completed: 'solar:check-circle-bold',
      pending: 'solar:clock-circle-bold',
      failed: 'solar:close-circle-bold',
      refunded: 'solar:refresh-circle-bold',
    };
    return iconMap[status];
  };

  return (
    <Card>
      <SectionHeading title='Recent Orders' />

      {/* Desktop Table */}
      <div className='hidden md:block overflow-x-auto'>
        <table className='w-full'>
          <thead>
            <tr className='bg-gray-50 dark:bg-gray-700/50'>
              <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase'>
                Order ID
              </th>
              <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase'>
                Customer
              </th>
              <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase'>
                Product
              </th>
              <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase'>
                Amount
              </th>
              <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase'>
                Status
              </th>
              <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase'>
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className='border-t border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors'
              >
                <td className='px-6 py-4 text-sm font-medium text-primary dark:text-blue-400'>
                  {order.id}
                </td>
                <td className='px-6 py-4 text-sm text-gray-900 dark:text-gray-100'>
                  {order.customerName}
                </td>
                <td className='px-6 py-4 text-sm text-gray-600 dark:text-gray-400'>
                  <span className='truncate max-w-xs block'>{order.product}</span>
                </td>
                <td className='px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white'>
                  ${order.amount.toFixed(2)}
                </td>
                <td className='px-6 py-4'>
                  <div className='flex items-center gap-2'>
                    <Icon
                      icon={getStatusIcon(order.status)}
                      className='w-4 h-4'
                    />
                    <Badge variant={getStatusVariant(order.status)}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </div>
                </td>
                <td className='px-6 py-4 text-sm text-gray-600 dark:text-gray-400'>
                  {new Date(order.date).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className='md:hidden divide-y divide-gray-100 dark:divide-gray-700'>
        {orders.map((order) => (
          <div key={order.id} className='p-4 space-y-3'>
            <div className='flex justify-between items-start gap-2'>
              <div>
                <p className='text-xs text-gray-500 dark:text-gray-400'>Order</p>
                <p className='text-sm font-semibold text-primary dark:text-blue-400'>
                  {order.id}
                </p>
              </div>
              <div className='flex items-center gap-2'>
                <Icon
                  icon={getStatusIcon(order.status)}
                  className='w-4 h-4'
                />
                <Badge variant={getStatusVariant(order.status)}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </Badge>
              </div>
            </div>
            <div>
              <p className='text-xs text-gray-500 dark:text-gray-400'>Customer</p>
              <p className='text-sm font-medium text-gray-900 dark:text-white'>
                {order.customerName}
              </p>
            </div>
            <div>
              <p className='text-xs text-gray-500 dark:text-gray-400'>Product</p>
              <p className='text-sm text-gray-600 dark:text-gray-400 truncate'>
                {order.product}
              </p>
            </div>
            <div className='flex justify-between items-end pt-2 border-t border-gray-100 dark:border-gray-700'>
              <div>
                <p className='text-xs text-gray-500 dark:text-gray-400'>Date</p>
                <p className='text-sm text-gray-900 dark:text-white'>
                  {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
              <div className='text-right'>
                <p className='text-xs text-gray-500 dark:text-gray-400'>Amount</p>
                <p className='text-sm font-semibold text-gray-900 dark:text-white'>
                  ${order.amount.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-100 dark:border-gray-700'>
        <Link
          href='/creator/orders'
          className='text-primary dark:text-blue-400 hover:text-primary/80 text-sm font-semibold flex items-center gap-2 w-fit'
        >
          View all orders
          <Icon icon='solar:arrow-right-bold' className='w-4 h-4' />
        </Link>
      </div>
    </Card>
  );
};

export default RecentOrders;
