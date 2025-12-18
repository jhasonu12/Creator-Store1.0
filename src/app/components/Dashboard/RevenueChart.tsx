'use client'

import React, { useMemo } from 'react';
import { RevenueData } from '@/app/types/dashboard';
import { Icon } from '@iconify/react/dist/iconify.js';

interface RevenueChartProps {
  data: RevenueData[];
}

/**
 * Simple revenue chart visualization
 * Uses SVG bars for a clean, lightweight representation
 */
const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => {
  const stats = useMemo(() => {
    const values = data.map(d => d.value);
    const max = Math.max(...values);
    const min = Math.min(...values);
    const avg = values.reduce((a, b) => a + b, 0) / values.length;
    const total = values.reduce((a, b) => a + b, 0);

    return { max, min, avg, total };
  }, [data]);

  const chartHeight = 250;
  const barWidth = 100 / data.length;
  const padding = 2;

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 p-6'>
      <div className='mb-6'>
        <h2 className='text-lg font-bold text-gray-900 dark:text-white'>
          Revenue Overview
        </h2>
        <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
          Last 12 months
        </p>
      </div>

      {/* Stats Row */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 pb-6 border-b border-gray-100 dark:border-gray-700'>
        <div>
          <p className='text-xs text-gray-500 dark:text-gray-400 mb-1'>Total</p>
          <p className='text-lg md:text-xl font-bold text-gray-900 dark:text-white'>
            ${stats.total.toLocaleString('en-US', { maximumFractionDigits: 0 })}
          </p>
        </div>
        <div>
          <p className='text-xs text-gray-500 dark:text-gray-400 mb-1'>Average</p>
          <p className='text-lg md:text-xl font-bold text-gray-900 dark:text-white'>
            ${stats.avg.toLocaleString('en-US', { maximumFractionDigits: 0 })}
          </p>
        </div>
        <div>
          <p className='text-xs text-gray-500 dark:text-gray-400 mb-1'>Highest</p>
          <p className='text-lg md:text-xl font-bold text-green-600 dark:text-green-400'>
            ${stats.max.toLocaleString('en-US', { maximumFractionDigits: 0 })}
          </p>
        </div>
        <div>
          <p className='text-xs text-gray-500 dark:text-gray-400 mb-1'>Lowest</p>
          <p className='text-lg md:text-xl font-bold text-red-600 dark:text-red-400'>
            ${stats.min.toLocaleString('en-US', { maximumFractionDigits: 0 })}
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className='overflow-x-auto'>
        <div className='flex items-flex-end justify-between gap-1 h-64 min-w-full px-2'>
          {data.map((item, index) => {
            const height = (item.value / stats.max) * chartHeight;
            const isPositive = index === 0 || item.value >= data[index - 1].value;

            return (
              <div
                key={item.label}
                className='flex-1 flex flex-col items-center justify-end gap-2'
                style={{ minWidth: `${barWidth}%` }}
              >
                <div
                  className='w-full bg-gradient-to-t from-primary to-blue-400 dark:from-blue-500 dark:to-blue-400 rounded-t transition-all duration-300 hover:shadow-lg hover:opacity-90 cursor-pointer relative group'
                  style={{
                    height: `${height}px`,
                    minHeight: '4px',
                  }}
                >
                  {/* Tooltip */}
                  <div className='absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 dark:bg-gray-700 text-white text-xs py-1 px-2 rounded whitespace-nowrap pointer-events-none'>
                    ${item.value.toLocaleString()}
                  </div>
                </div>
                <span className='text-xs text-gray-600 dark:text-gray-400 font-medium'>
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className='mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-center gap-4 text-xs'>
        <div className='flex items-center gap-2'>
          <div className='w-3 h-3 rounded bg-gradient-to-r from-primary to-blue-400' />
          <span className='text-gray-600 dark:text-gray-400'>Monthly Revenue</span>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
