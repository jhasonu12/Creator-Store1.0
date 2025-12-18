'use client'

import React from 'react';
import { DashboardStats } from '@/app/types/dashboard';
import StatCard from './StatCard';

interface StatsGridProps {
  stats: DashboardStats[];
}

/**
 * Responsive stats grid
 * Adapts from 1 column on mobile to 4 columns on desktop
 */
const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          style={{
            animation: `slideUp 0.5s ease-out ${index * 0.1}s both`,
          }}
        >
          <StatCard stat={stat} />
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
