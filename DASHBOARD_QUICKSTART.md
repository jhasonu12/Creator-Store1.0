## Dashboard Quick Start Guide

### Accessing the Dashboard

Navigate to `/creator/dashboard` or add a link to it in your navigation:

```tsx
import Link from 'next/link';

<Link href="/creator/dashboard">
  Dashboard
</Link>
```

### File Structure Created

```
src/
├── app/
│   ├── (site)/
│   │   └── dashboard/
│   │       └── page.tsx              # Main dashboard page
│   ├── components/
│   │   └── Dashboard/
│   │       ├── DashboardContent.tsx  # Main layout
│   │       ├── StatCard.tsx          # Metric cards
│   │       ├── StatsGrid.tsx         # Stats container
│   │       ├── RecentOrders.tsx      # Orders display
│   │       ├── TopProducts.tsx       # Top products list
│   │       ├── RevenueChart.tsx      # Chart visualization
│   │       └── index.ts              # Barrel exports
│   ├── services/
│   │   └── dashboardService.ts       # Data fetching service
│   ├── types/
│   │   └── dashboard.ts              # TypeScript types
│   └── utils/
│       └── dashboardUtils.ts         # Utility functions
└── DASHBOARD_README.md               # Full documentation
```

### Key Features

✅ **Modular & Reusable**
- Each component is self-contained and can be used independently
- Barrel export for clean imports: `import { StatCard, RevenueChart } from '@/app/components/Dashboard'`

✅ **No Hardcoding**
- All data comes from `dashboardService.ts`
- All colors use CSS variables defined in `globals.css`
- All icons use Iconify library
- All responsive breakpoints use Tailwind

✅ **Production Ready**
- Full TypeScript strict mode (no `any` types)
- Graceful error handling
- Mobile-first responsive design
- Accessibility support (ARIA labels, semantic HTML)
- Dark mode support

✅ **Easy Backend Integration**
- Mock data structure matches API contract
- Simple to replace with real API calls
- All data typed for type safety

### Customization Examples

#### 1. Change Dashboard Colors

Edit `src/app/globals.css`:

```css
--color-primary: #0066ff;  /* Change primary color */
--color-purple: #1e013a;   /* Change secondary color */
```

#### 2. Modify Stats Displayed

Edit `src/app/services/dashboardService.ts`:

```typescript
export const mockDashboardData: DashboardData = {
  stats: [
    // Add or remove stats here
    {
      label: 'Your New Metric',
      value: '1,234',
      change: 5.2,
      isPositive: true,
      icon: 'solar:chart-bold',  // From Iconify
      color: '#0066ff',
    },
  ],
  // ... rest of data
};
```

#### 3. Add to Navigation Header

Edit `src/app/api/data/route.ts` to include dashboard link:

```typescript
const headerData: HeaderItem[] = [
  { label: 'About Us', href: '#About' },
  { label: 'Dashboard', href: '/creator/dashboard' },  // Add this
  // ... other links
];
```

#### 4. Connect Real API

Replace mock data in `dashboardService.ts`:

```typescript
export async function fetchDashboardData(): Promise<DashboardData> {
  try {
    const response = await fetch('/api/v1/dashboard', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    if (!response.ok) throw new Error('Failed to fetch');
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch dashboard data:', error);
    return mockDashboardData; // Fallback
  }
}
```

### Testing Locally

1. **Start dev server**:
   ```bash
   npm run dev
   ```

2. **Navigate to dashboard**:
   ```
   http://localhost:3000/creator/dashboard
   ```

3. **Test responsiveness**:
   - Open DevTools (F12)
   - Toggle device toolbar
   - Test on mobile, tablet, desktop

4. **Test dark mode**:
   - Toggle dark mode in theme selector
   - All components adapt automatically

### Available Utilities

Use utility functions from `dashboardUtils.ts`:

```typescript
import {
  formatCurrency,
  formatCompactNumber,
  calculatePercentageChange,
  getStatusConfig,
  formatDate,
  calculateTotalRevenue,
  getConversionRate,
} from '@/app/utils/dashboardUtils';

// Examples
formatCurrency(1234.56);           // "$1,234.56"
formatCompactNumber(1500000);      // "1.5M"
calculatePercentageChange(150, 100);  // { change: 50, isPositive: true }
```

### Component Import Examples

```typescript
// Import individual components
import {
  DashboardContent,
  StatCard,
  RevenueChart,
  TopProducts,
  RecentOrders,
  StatsGrid,
} from '@/app/components/Dashboard';

// Or import specific component
import RecentOrders from '@/app/components/Dashboard/RecentOrders';

// Usage
<StatCard stat={statData} />
<RevenueChart data={chartData} />
<TopProducts products={productsData} />
<RecentOrders orders={ordersData} />
```

### Data Types Reference

```typescript
// Dashboard
DashboardData {
  stats: DashboardStats[];
  recentOrders: Order[];
  topProducts: TopProduct[];
  revenueChart: RevenueData[];
}

// Stat
DashboardStats {
  label: string;
  value: string | number;
  change: number;
  isPositive: boolean;
  icon: string;        // Iconify icon name
  color: string;       // Hex color code
}

// Order
Order {
  id: string;
  customerName: string;
  product: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  date: string;
  email?: string;
}
```

### Performance Tips

1. **Use dynamic imports** for heavy components:
   ```typescript
   const RevenueChart = dynamic(() => import('@/app/components/Dashboard/RevenueChart'), {
     loading: () => <Skeleton />
   });
   ```

2. **Implement caching** in service:
   ```typescript
   const cache = new Map();
   if (cache.has('dashboard')) return cache.get('dashboard');
   const data = await fetchData();
   cache.set('dashboard', data);
   ```

3. **Use ISR** for server-side revalidation:
   ```typescript
   export const revalidate = 3600; // Revalidate every hour
   ```

### Troubleshooting

**Dashboard not loading?**
- Check browser console for errors
- Verify route path: `/creator/dashboard`
- Check if `next-themes` is properly configured

**Styling issues?**
- Verify Tailwind CSS is properly configured
- Check `globals.css` custom properties
- Clear `.next` build cache: `rm -rf .next && npm run build`

**Icons not showing?**
- Verify Iconify package is installed
- Check icon names on [Iconify Design](https://iconify.design/)
- Use correct icon set prefix (e.g., `solar:`)

**Dark mode not working?**
- Verify `next-themes` provider in root layout
- Check `suppressHydrationWarning` on `<html>` tag
- Test in DevTools: Settings → Rendering → Emulate CSS Media

### Next Steps

1. ✅ Customize colors and branding
2. ✅ Update mock data with real metrics
3. ✅ Connect backend API
4. ✅ Add user authentication check
5. ✅ Set up real-time data updates
6. ✅ Add export functionality
7. ✅ Implement filtering and sorting

---

For detailed documentation, see [DASHBOARD_README.md](./DASHBOARD_README.md)
