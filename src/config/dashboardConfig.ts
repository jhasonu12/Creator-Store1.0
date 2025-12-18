/**
 * Dashboard Configuration Template
 * Copy this file to customize your dashboard without modifying core components
 * 
 * Usage:
 * 1. Create src/config/dashboardConfig.ts
 * 2. Import and use in your dashboard service or components
 * 3. Update values based on your needs
 */

export const DASHBOARD_CONFIG = {
  // Page Settings
  page: {
    title: 'Dashboard',
    description: 'Welcome back! Here\'s your store performance overview.',
    refreshInterval: 30000, // 30 seconds in production
  },

  // Stats Card Configuration
  stats: {
    showTrend: true,
    animateOnChange: true,
    colorScheme: {
      revenue: '#0066ff',
      sales: '#7c3aed',
      products: '#ec4899',
      customers: '#f59e0b',
    },
  },

  // Recent Orders Configuration
  recentOrders: {
    displayLimit: 5,
    showEmail: true,
    sortBy: 'date', // 'date', 'amount', 'status'
    statusColors: {
      completed: '#10b981',
      pending: '#f59e0b',
      failed: '#ef4444',
      refunded: '#3b82f6',
    },
  },

  // Top Products Configuration
  topProducts: {
    displayLimit: 5,
    sortBy: 'revenue', // 'revenue', 'sales'
    showProgressBar: true,
  },

  // Revenue Chart Configuration
  revenueChart: {
    months: 12, // Show last 12 months
    animateOnLoad: true,
    showTooltips: true,
    colors: {
      gradient: ['#0066ff', '#5b73f5'],
    },
  },

  // Responsive Breakpoints (align with Tailwind)
  breakpoints: {
    mobile: 640,
    tablet: 768,
    desktop: 1024,
    wide: 1280,
  },

  // Feature Flags
  features: {
    showExportButton: true,
    showFilterButton: true,
    enableRealTimeUpdates: false, // Set to true when WebSocket ready
    enableChartZoom: false,
    enableDashboardCustomization: false,
  },

  // API Configuration
  api: {
    baseURL: process.env.NEXT_PUBLIC_API_URL || '',
    dashboardEndpoint: '/api/v1/dashboard',
    timeout: 10000,
    retryAttempts: 3,
    retryDelay: 1000,
  },

  // Cache Configuration
  cache: {
    enabled: true,
    duration: 5 * 60 * 1000, // 5 minutes
    staleWhileRevalidate: true,
  },

  // Locale and Formatting
  locale: {
    currency: 'USD',
    locale: 'en-US',
    dateFormat: 'MMM dd, yyyy',
    timeFormat: 'HH:mm',
  },

  // Theme Configuration
  theme: {
    mode: 'auto', // 'light', 'dark', 'auto'
    primaryColor: '#0066ff',
    secondaryColor: '#1e013a',
    accentColor: '#7c3aed',
    borderRadius: 'rounded-lg',
    shadowIntensity: 'md', // 'sm', 'md', 'lg'
  },

  // Notification Configuration
  notifications: {
    enabled: true,
    position: 'top-right', // 'top-left', 'top-right', 'bottom-left', 'bottom-right'
    autoHideDuration: 5000, // 5 seconds
  },

  // Accessibility
  a11y: {
    enableKeyboardNavigation: true,
    enableScreenReaderSupport: true,
    minContrastRatio: 4.5, // WCAG AA
  },
} as const;

/**
 * Get config value with dot notation
 * Usage: getConfig('stats.colorScheme.revenue')
 */
export function getConfig(path: string): unknown {
  return path.split('.').reduce((obj: any, key) => obj?.[key], DASHBOARD_CONFIG);
}

/**
 * Merge custom config with defaults
 * Usage: mergeConfig({ api: { baseURL: 'https://api.example.com' } })
 */
export function mergeConfig(customConfig: Partial<typeof DASHBOARD_CONFIG>) {
  return Object.assign({}, DASHBOARD_CONFIG, customConfig);
}

/**
 * Validate configuration
 */
export function validateConfig(config: typeof DASHBOARD_CONFIG): boolean {
  const requiredFields = [
    'page',
    'stats',
    'recentOrders',
    'topProducts',
    'revenueChart',
  ];

  return requiredFields.every(field => field in config);
}
