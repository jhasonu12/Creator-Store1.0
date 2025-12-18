'use client'

import React from 'react';
import Link from 'next/link';
import { TopProduct } from '@/app/types/dashboard';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Card, SectionHeading } from '@/app/components/Common';

interface TopProductsProps {
  products: TopProduct[];
}

/**
 * Top products section
 * Shows best-performing products by sales and revenue
 */
const TopProducts: React.FC<TopProductsProps> = ({ products }) => {
  const maxRevenue = Math.max(...products.map(p => p.revenue));

  return (
    <Card className='overflow-hidden'>
      <SectionHeading title='Top Products' />

      <div className='divide-y divide-gray-100 dark:divide-gray-700'>
        {products.map((product, index) => (
          <div
            key={product.id}
            className='p-4 md:p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors'
          >
            <div className='flex items-start gap-4'>
              {/* Rank Badge */}
              <div className='flex-shrink-0'>
                <div className='w-10 h-10 rounded-full bg-primary/10 dark:bg-blue-900/30 flex items-center justify-center'>
                  <span className='text-sm font-bold text-primary dark:text-blue-400'>
                    #{index + 1}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className='flex-1 min-w-0'>
                <p className='text-sm font-semibold text-gray-900 dark:text-white truncate'>
                  {product.name}
                </p>
                <div className='flex items-center gap-4 mt-2'>
                  <div>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>Sales</p>
                    <p className='text-sm font-semibold text-gray-900 dark:text-white'>
                      {product.sales}
                    </p>
                  </div>
                  <div>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>Revenue</p>
                    <p className='text-sm font-semibold text-gray-900 dark:text-white'>
                      ${product.revenue.toLocaleString('en-US', { maximumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className='mt-3 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden'>
                  <div
                    className='h-full bg-gradient-to-r from-primary to-purple-600 transition-all duration-300'
                    style={{
                      width: `${(product.revenue / maxRevenue) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Icon */}
              <div className='flex-shrink-0'>
                <Icon
                  icon='solar:bag-2-bold'
                  className='w-6 h-6 text-gray-400 dark:text-gray-600'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-100 dark:border-gray-700'>
        <Link
          href='/creator/products'
          className='text-primary dark:text-blue-400 hover:text-primary/80 text-sm font-semibold flex items-center gap-2 w-fit'
        >
          View all products
          <Icon icon='solar:arrow-right-bold' className='w-4 h-4' />
        </Link>
      </div>
    </Card>
  );
};

export default TopProducts;
