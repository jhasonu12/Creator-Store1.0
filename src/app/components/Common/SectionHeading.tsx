'use client'

import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}

/**
 * Reusable Section Heading Component
 * Used for section titles in cards and containers
 */
const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  action,
  className = '',
}) => {
  return (
    <div className={`flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-700 ${className}`}>
      <div>
        <h2 className='text-lg font-bold text-gray-900 dark:text-white'>
          {title}
        </h2>
        {subtitle && (
          <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
            {subtitle}
          </p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
};

export default SectionHeading;
