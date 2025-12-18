/**
 * Dashboard utility functions
 * Reusable helpers for dashboard calculations and formatting
 */

import { Order } from '@/app/types/dashboard';

/**
 * Format currency values
 */
export const formatCurrency = (value: number, locale = 'en-US'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
};

/**
 * Format large numbers with suffixes (1.2K, 1.2M, etc.)
 */
export const formatCompactNumber = (value: number): string => {
  if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(1) + 'M';
  }
  if (value >= 1_000) {
    return (value / 1_000).toFixed(1) + 'K';
  }
  return value.toString();
};

/**
 * Calculate percentage change
 */
export const calculatePercentageChange = (
  current: number,
  previous: number
): { change: number; isPositive: boolean } => {
  if (previous === 0) return { change: 0, isPositive: current >= 0 };
  const change = ((current - previous) / previous) * 100;
  return { change: Math.abs(change), isPositive: change >= 0 };
};

/**
 * Get status badge configuration
 */
export const getStatusConfig = (status: Order['status']) => {
  const config = {
    completed: {
      label: 'Completed',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      textColor: 'text-green-700 dark:text-green-400',
      icon: 'solar:check-circle-bold',
    },
    pending: {
      label: 'Pending',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
      textColor: 'text-yellow-700 dark:text-yellow-400',
      icon: 'solar:clock-circle-bold',
    },
    failed: {
      label: 'Failed',
      bgColor: 'bg-red-100 dark:bg-red-900/30',
      textColor: 'text-red-700 dark:text-red-400',
      icon: 'solar:close-circle-bold',
    },
    refunded: {
      label: 'Refunded',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      textColor: 'text-blue-700 dark:text-blue-400',
      icon: 'solar:refresh-circle-bold',
    },
  };

  return config[status];
};

/**
 * Format date to readable format
 */
export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

/**
 * Truncate string with ellipsis
 */
export const truncateString = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
};

/**
 * Get chart bar height percentage
 */
export const getBarHeightPercentage = (value: number, max: number): number => {
  if (max === 0) return 0;
  return (value / max) * 100;
};

/**
 * Filter orders by status
 */
export const filterOrdersByStatus = (
  orders: Order[],
  status: Order['status']
): Order[] => {
  return orders.filter(order => order.status === status);
};

/**
 * Sort orders by date (newest first)
 */
export const sortOrdersByDate = (orders: Order[]): Order[] => {
  return [...orders].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

/**
 * Calculate total revenue from orders
 */
export const calculateTotalRevenue = (orders: Order[]): number => {
  return orders.reduce((sum, order) => sum + order.amount, 0);
};

/**
 * Calculate average order value
 */
export const calculateAverageOrderValue = (orders: Order[]): number => {
  if (orders.length === 0) return 0;
  return calculateTotalRevenue(orders) / orders.length;
};

/**
 * Get conversion rate (completed vs total)
 */
export const getConversionRate = (orders: Order[]): number => {
  if (orders.length === 0) return 0;
  const completed = orders.filter(o => o.status === 'completed').length;
  return (completed / orders.length) * 100;
};

/**
 * Generate color for chart bars based on trend
 */
export const getChartBarColor = (
  current: number,
  previous: number,
  positiveColor = 'from-primary to-blue-400',
  negativeColor = 'from-red-500 to-red-400'
): string => {
  return current >= previous ? positiveColor : negativeColor;
};
