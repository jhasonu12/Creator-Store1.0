'use client'

import React, { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

interface DateRangePickerProps {
  onDateChange?: (startDate: string, endDate: string) => void;
  label?: string;
  variant?: 'default' | 'compact' | 'colorful';
}

/**
 * Enhanced Date Range Picker Component
 * Beautiful, colorful date range picker with smooth animations
 */
const DateRangePicker: React.FC<DateRangePickerProps> = ({
  onDateChange,
  label = 'Select Date Range',
  variant = 'colorful',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [displayText, setDisplayText] = useState('This Month');
  const [selectedRange, setSelectedRange] = useState<'today' | 'week' | 'month' | 'year' | 'custom'>('month');

  const handlePredefinedRange = (range: 'today' | 'week' | 'month' | 'year') => {
    const today = new Date();
    let start = new Date();
    let end = new Date();

    switch (range) {
      case 'today':
        start = today;
        end = today;
        setDisplayText('Today');
        break;
      case 'week':
        start = new Date(today.setDate(today.getDate() - 7));
        end = new Date();
        setDisplayText('Last 7 Days');
        break;
      case 'month':
        start = new Date(today.getFullYear(), today.getMonth(), 1);
        end = new Date();
        setDisplayText('This Month');
        break;
      case 'year':
        start = new Date(today.getFullYear(), 0, 1);
        end = new Date();
        setDisplayText('This Year');
        break;
    }

    const startStr = start.toISOString().split('T')[0];
    const endStr = end.toISOString().split('T')[0];

    setStartDate(startStr);
    setEndDate(endStr);
    setSelectedRange(range);
    onDateChange?.(startStr, endStr);
    setIsOpen(false);
  };

  const handleCustomDateChange = () => {
    if (startDate && endDate) {
      onDateChange?.(startDate, endDate);
      setDisplayText('Custom Range');
      setSelectedRange('custom');
      setIsOpen(false);
    }
  };

  const getButtonStyles = () => {
    if (variant === 'colorful') {
      return 'flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 font-semibold';
    } else if (variant === 'compact') {
      return 'flex items-center gap-2 px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors';
    }
    return 'flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium';
  };

  const getQuickSelectButtonStyles = (range: 'today' | 'week' | 'month' | 'year') => {
    const isSelected = selectedRange === range;
    if (isSelected) {
      return 'px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg';
    }
    return 'px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:from-gray-700 dark:hover:to-gray-600 rounded-lg transition-all duration-200';
  };

  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={getButtonStyles()}
      >
        <Icon icon='solar:calendar-bold' className='w-5 h-5' />
        <span>{displayText}</span>
        <Icon icon={isOpen ? 'tabler:chevron-up' : 'tabler:chevron-down'} className='w-4 h-4 ml-1' />
      </button>

      {/* Animated Dropdown Menu */}
      {isOpen && (
        <>
          <div className='absolute top-full mt-3 right-0 w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gradient-to-r from-blue-200 to-purple-200 dark:border-gray-700 p-6 z-50 animate-slideUp'>
            {/* Header */}
            <div className='flex items-center justify-between mb-6 pb-4 border-b border-gradient-to-r from-blue-200 to-purple-200 dark:border-gray-700'>
              <h3 className='text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                Date Range
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className='text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors'
              >
                <Icon icon='tabler:x' className='w-5 h-5' />
              </button>
            </div>

            {/* Predefined Ranges */}
            <div className='mb-6'>
              <p className='text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3'>Quick Select</p>
              <div className='grid grid-cols-2 gap-2'>
                {(['today', 'week', 'month', 'year'] as const).map((range) => (
                  <button
                    key={range}
                    onClick={() => handlePredefinedRange(range)}
                    className={getQuickSelectButtonStyles(range)}
                  >
                    {range === 'today' && 'Today'}
                    {range === 'week' && 'Last 7 Days'}
                    {range === 'month' && 'This Month'}
                    {range === 'year' && 'This Year'}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className='flex items-center gap-3 mb-6'>
              <div className='flex-1 h-px bg-gradient-to-r from-blue-200 to-purple-200 dark:from-gray-700 dark:to-gray-600'></div>
              <span className='text-xs font-semibold text-gray-500 dark:text-gray-400'>OR</span>
              <div className='flex-1 h-px bg-gradient-to-r from-purple-200 to-blue-200 dark:from-gray-600 dark:to-gray-700'></div>
            </div>

            {/* Custom Range */}
            <div className='space-y-4'>
              <p className='text-sm font-semibold text-gray-700 dark:text-gray-300'>Custom Range</p>
              
              <div className='space-y-2'>
                <label className='block text-xs font-semibold text-gray-600 dark:text-gray-400'>Start Date</label>
                <input
                  type='date'
                  value={startDate}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                    setSelectedRange('custom');
                  }}
                  className='w-full px-4 py-2.5 border-2 border-blue-200 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition-all'
                />
              </div>

              <div className='space-y-2'>
                <label className='block text-xs font-semibold text-gray-600 dark:text-gray-400'>End Date</label>
                <input
                  type='date'
                  value={endDate}
                  onChange={(e) => {
                    setEndDate(e.target.value);
                    setSelectedRange('custom');
                  }}
                  className='w-full px-4 py-2.5 border-2 border-purple-200 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900 transition-all'
                />
              </div>

              <button
                onClick={handleCustomDateChange}
                disabled={!startDate || !endDate}
                className='w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-bold hover:shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 mt-2'
              >
                Apply Range
              </button>
            </div>
          </div>

          {/* Backdrop */}
          <div
            className='fixed inset-0 z-40'
            onClick={() => setIsOpen(false)}
          />
        </>
      )}
    </div>
  );
};

export default DateRangePicker;
