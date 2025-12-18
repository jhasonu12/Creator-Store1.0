import { DashboardData } from '@/app/types/dashboard';

/**
 * Mock dashboard data service
 * In production, this would fetch from an API endpoint
 * Data structure is independent of UI to allow easy backend replacement
 */

export const mockDashboardData: DashboardData = {
  stats: [
    {
      label: 'Total Revenue',
      value: '$12,450',
      change: 12.5,
      isPositive: true,
      icon: 'solar:wallet-bold',
      color: '#0066ff',
    },
    {
      label: 'Total Sales',
      value: '328',
      change: 8.2,
      isPositive: true,
      icon: 'solar:cart-bold',
      color: '#7c3aed',
    },
    {
      label: 'Active Products',
      value: '24',
      change: 3.1,
      isPositive: true,
      icon: 'solar:bag-2-bold',
      color: '#ec4899',
    },
    {
      label: 'Total Customers',
      value: '1,245',
      change: 5.4,
      isPositive: true,
      icon: 'solar:users-group-rounded-bold',
      color: '#f59e0b',
    },
  ],
  recentOrders: [
    {
      id: 'ORD-001',
      customerName: 'Sarah Anderson',
      product: 'Advanced Web Development Course',
      amount: 79.99,
      status: 'completed',
      date: '2024-12-15',
      email: 'sarah@example.com',
    },
    {
      id: 'ORD-002',
      customerName: 'Michael Chen',
      product: 'Digital Marketing Templates Bundle',
      amount: 49.99,
      status: 'completed',
      date: '2024-12-14',
      email: 'michael@example.com',
    },
    {
      id: 'ORD-003',
      customerName: 'Emma Wilson',
      product: 'Monthly Coaching Subscription',
      amount: 199.99,
      status: 'pending',
      date: '2024-12-14',
      email: 'emma@example.com',
    },
    {
      id: 'ORD-004',
      customerName: 'James Rodriguez',
      product: 'UI/UX Design Kit',
      amount: 39.99,
      status: 'completed',
      date: '2024-12-13',
      email: 'james@example.com',
    },
    {
      id: 'ORD-005',
      customerName: 'Lisa Thompson',
      product: 'Photography Editing Presets',
      amount: 29.99,
      status: 'failed',
      date: '2024-12-13',
      email: 'lisa@example.com',
    },
  ],
  topProducts: [
    {
      id: 'PROD-001',
      name: 'Advanced Web Development Course',
      sales: 145,
      revenue: 11595,
    },
    {
      id: 'PROD-002',
      name: 'Digital Marketing Templates Bundle',
      sales: 87,
      revenue: 4349.13,
    },
    {
      id: 'PROD-003',
      name: 'Monthly Coaching Subscription',
      sales: 23,
      revenue: 4599.77,
    },
    {
      id: 'PROD-004',
      name: 'UI/UX Design Kit',
      sales: 56,
      revenue: 2239.44,
    },
    {
      id: 'PROD-005',
      name: 'Photography Editing Presets',
      sales: 62,
      revenue: 1859.38,
    },
  ],
  revenueChart: [
    { label: 'Jan', value: 4000 },
    { label: 'Feb', value: 3000 },
    { label: 'Mar', value: 2000 },
    { label: 'Apr', value: 2780 },
    { label: 'May', value: 1890 },
    { label: 'Jun', value: 2390 },
    { label: 'Jul', value: 3490 },
    { label: 'Aug', value: 2100 },
    { label: 'Sep', value: 2800 },
    { label: 'Oct', value: 1398 },
    { label: 'Nov', value: 9800 },
    { label: 'Dec', value: 2800 },
  ],
};

/**
 * Fetch dashboard data
 * This function serves as a bridge between UI and backend
 */
export async function fetchDashboardData(): Promise<DashboardData> {
  try {
    // TODO: Replace with actual API call when backend is ready
    // const response = await fetch('/api/v1/dashboard');
    // return response.json();
    return mockDashboardData;
  } catch (error) {
    console.error('Failed to fetch dashboard data:', error);
    return mockDashboardData;
  }
}
