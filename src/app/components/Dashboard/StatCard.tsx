'use client'

import React from 'react';
import { DashboardStats } from '@/app/types/dashboard';
import { Icon } from '@iconify/react/dist/iconify.js';

interface StatCardProps {
  stat: DashboardStats;
}

/**
 * Reusable stat card component
 * Displays a metric with icon, value, change percentage, and trend direction
 */
const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 cursor-pointer overflow-hidden relative'
    >
      {/* Gradient background on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          stat.color === '#00FF00' ? 'from-green-500/5 to-emerald-500/5' :
          stat.color === '#FF6B6B' ? 'from-red-500/5 to-rose-500/5' :
          stat.color === '#FFB800' ? 'from-yellow-500/5 to-amber-500/5' :
          'from-blue-500/5 to-cyan-500/5'
        } pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      ></div>

      <div className='relative z-10'>
        <div className='flex items-center justify-between mb-4'>
          <div
            className='p-3 rounded-lg transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6'
            style={{ backgroundColor: `${stat.color}15` }}
          >
            <Icon
              icon={stat.icon}
              className='w-6 h-6'
              style={{ color: stat.color }}
            />
          </div>
          <div className={`text-sm font-semibold flex items-center gap-1 px-2 py-1 rounded-lg transition-all ${
            stat.isPositive 
              ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20' 
              : 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20'
          }`}>
            <Icon
              icon={stat.isPositive ? 'solar:arrow-up-bold' : 'solar:arrow-down-bold'}
              className='w-4 h-4'
            />
            {Math.abs(stat.change)}%
          </div>
        </div>
        <p className='text-gray-600 dark:text-gray-400 text-sm mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors'>
          {stat.label}
        </p>
        <p className='text-3xl font-bold text-gray-900 dark:text-white transition-all duration-300 group-hover:scale-105 origin-left'>
          {stat.value}
        </p>
      </div>
    </div>
  );
};

export default StatCard;
