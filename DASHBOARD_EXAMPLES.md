# Dashboard Extension Examples

This document provides code examples for extending the dashboard without modifying core components.

## Example 1: Create a Custom Widget Component

```typescript
import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

interface CustomMetricProps {
  title: string;
  value: string | number;
  icon: string;
  color: string;
  action?: () => void;
}

const CustomMetricWidget: React.FC<CustomMetricProps> = ({
  title,
  value,
  icon,
  color,
  action,
}) => {
  return (
    <div
      className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700 cursor-pointer hover:shadow-lg transition-shadow'
      onClick={action}
    >
      <div className='flex items-center gap-4'>
        <div
          className='p-3 rounded-lg'
          style={{ backgroundColor: `${color}15` }}
        >
          <Icon icon={icon} className='w-6 h-6' style={{ color }} />
        </div>
        <div>
          <p className='text-gray-600 dark:text-gray-400 text-sm'>{title}</p>
          <p className='text-2xl font-bold text-gray-900 dark:text-white'>
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomMetricWidget;
```

## Example 2: Create a Custom Chart Component

```typescript
interface LineChartProps {
  data: Array<{ label: string; value: number }>;
  title: string;
  color?: string;
}

const LineChart: React.FC<LineChartProps> = ({
  data,
  title,
  color = '#0066ff',
}) => {
  const maxValue = Math.max(...data.map(d => d.value));
  const chartWidth = 100;
  const chartHeight = 200;
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * chartWidth;
    const y = chartHeight - (d.value / maxValue) * chartHeight;
    return `${x},${y}`;
  });

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md'>
      <h2 className='text-lg font-bold mb-4'>{title}</h2>
      <svg
        width='100%'
        height='250'
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        className='w-full'
      >
        <polyline
          points={points.join(' ')}
          fill='none'
          stroke={color}
          strokeWidth='2'
        />
      </svg>
    </div>
  );
};

export default LineChart;
```

## Example 3: Add Export Functionality

```typescript
import { DashboardData } from '@/app/types/dashboard';

export const exportDashboardToJSON = (
  data: DashboardData,
  filename = 'dashboard.json'
) => {
  const dataStr = JSON.stringify(data, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};

export const exportDashboardToCSV = (
  data: DashboardData,
  filename = 'dashboard.csv'
) => {
  let csv = 'Metric,Value,Change\n';

  data.stats.forEach(stat => {
    csv += `"${stat.label}","${stat.value}","${stat.change}%"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};
```

## Example 4: Create Real-Time Update Hook

```typescript
import { useEffect, useState } from 'react';
import { DashboardData } from '@/app/types/dashboard';

export const useDashboardRealTime = (refreshInterval = 30000) => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('/api/v1/dashboard/realtime');
        // const newData = await response.json();
        // setData(newData);
      } catch (error) {
        console.error('Failed to fetch real-time data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, refreshInterval);
    return () => clearInterval(interval);
  }, [refreshInterval]);

  return { data, loading };
};

// Usage:
// const { data, loading } = useDashboardRealTime(10000); // Update every 10s
```

## Example 5: Create Comparison Component

```typescript
interface ComparisonMetric {
  label: string;
  current: number;
  previous: number;
}

interface ComparisonChartProps {
  metrics: ComparisonMetric[];
  title: string;
}

const ComparisonChart: React.FC<ComparisonChartProps> = ({
  metrics,
  title,
}) => {
  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md'>
      <h2 className='text-lg font-bold mb-4'>{title}</h2>
      <div className='space-y-4'>
        {metrics.map(metric => (
          <div key={metric.label}>
            <p className='text-sm font-medium text-gray-900 dark:text-white mb-2'>
              {metric.label}
            </p>
            <div className='flex items-center gap-4'>
              <div className='flex-1 bg-blue-100 dark:bg-blue-900/30 h-8 rounded flex items-center px-2'>
                <span className='text-sm font-semibold text-blue-900 dark:text-blue-400'>
                  Current: {metric.current}
                </span>
              </div>
              <div className='flex-1 bg-gray-100 dark:bg-gray-700 h-8 rounded flex items-center px-2'>
                <span className='text-sm font-semibold text-gray-900 dark:text-gray-400'>
                  Previous: {metric.previous}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonChart;
```

## Example 6: Create Alert/Notification Component

```typescript
interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  const colors = {
    success:
      'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
    error:
      'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400',
    warning:
      'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400',
    info: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
  };

  return (
    <div className={`rounded-lg p-4 flex items-center justify-between ${colors[type]}`}>
      <span>{message}</span>
      {onClose && (
        <button onClick={onClose} className='text-lg font-bold'>
          ×
        </button>
      )}
    </div>
  );
};

export default Alert;
```

## Example 7: Add Filters to Dashboard

```typescript
import { useState } from 'react';

interface DashboardFiltersProps {
  onDateRangeChange: (startDate: string, endDate: string) => void;
  onStatusFilter: (status: string) => void;
}

const DashboardFilters: React.FC<DashboardFiltersProps> = ({
  onDateRangeChange,
  onStatusFilter,
}) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md flex gap-4 flex-wrap'>
      <input
        type='date'
        value={startDate}
        onChange={e => {
          setStartDate(e.target.value);
          onDateRangeChange(e.target.value, endDate);
        }}
        className='px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700'
      />
      <input
        type='date'
        value={endDate}
        onChange={e => {
          setEndDate(e.target.value);
          onDateRangeChange(startDate, e.target.value);
        }}
        className='px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700'
      />
      <select
        onChange={e => onStatusFilter(e.target.value)}
        className='px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700'
      >
        <option value=''>All Status</option>
        <option value='completed'>Completed</option>
        <option value='pending'>Pending</option>
        <option value='failed'>Failed</option>
      </select>
    </div>
  );
};

export default DashboardFilters;
```

## Best Practices

1. **Keep Components Modular**: Each component should have a single responsibility
2. **Use TypeScript**: Maintain type safety across extensions
3. **Follow Existing Patterns**: Use the same styling and structure as dashboard components
4. **Dark Mode Support**: Always include `dark:` variants for dark mode
5. **Responsive Design**: Test on mobile, tablet, and desktop
6. **Accessibility**: Include ARIA labels and semantic HTML
7. **No Hardcoding**: Use configuration files for colors, icons, and data

## Tips

- Use `dashboardUtils.ts` for formatting functions
- Use `dashboardConfig.ts` for configuration values
- Import types from `dashboard.ts`
- Use Iconify library for icons (solar collection)
- Follow Tailwind CSS conventions
- Test components in isolation before integration

---

For more information, see:
- [DASHBOARD_README.md](../../../DASHBOARD_README.md)
- [DASHBOARD_QUICKSTART.md](../../../DASHBOARD_QUICKSTART.md)
- [DASHBOARD_IMPLEMENTATION.md](../../../DASHBOARD_IMPLEMENTATION.md)
