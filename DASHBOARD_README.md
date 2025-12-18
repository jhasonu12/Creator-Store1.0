# Creator Dashboard

## Overview

The Creator Dashboard is a production-grade analytics and management interface inspired by Stan Store, designed for creators to manage their storefronts, track sales, monitor orders, and view performance metrics.

## Architecture

### Component Structure

```
src/app/components/Dashboard/
├── DashboardContent.tsx      # Main layout composer
├── StatCard.tsx              # Reusable stat card component
├── StatsGrid.tsx             # Responsive stats grid
├── RecentOrders.tsx          # Orders table/card view
├── TopProducts.tsx           # Top performing products
├── RevenueChart.tsx          # Revenue visualization
└── index.ts                  # Barrel export for easy imports
```

### Data Flow

```
Page (Server)
    ↓
fetchDashboardData() [Service]
    ↓
Mock/API Service
    ↓
DashboardContent (Client)
    ↓
Child Components (StatCard, RecentOrders, etc.)
```

### Type System

All dashboard data is typed through `src/app/types/dashboard.ts`:

```typescript
DashboardStats    // Individual metric
DashboardData     // Complete dashboard data
Product           // Product information
Order             // Order information
TopProduct        // Product metrics
RevenueData       // Chart data
```

## Features

### 1. **Stats Grid**
- 4 key metrics (Total Revenue, Sales, Active Products, Customers)
- Real-time trend indicators with up/down icons
- Color-coded cards with hover effects
- Responsive: 1 column (mobile) → 2 columns (tablet) → 4 columns (desktop)

### 2. **Revenue Chart**
- 12-month revenue visualization
- Interactive bars with tooltips
- Summary statistics (Total, Average, High, Low)
- Horizontal scroll on mobile

### 3. **Top Products**
- Ranked list of best-performing products
- Sales count and revenue for each
- Visual progress bars showing relative performance
- Quick view link to product details

### 4. **Recent Orders**
- Latest customer orders with full details
- Status indicators (Completed, Pending, Failed, Refunded)
- Mobile-friendly card layout
- Desktop table view with sorting capability

## Customization Guide

### Adding New Stats

Edit `src/app/services/dashboardService.ts`:

```typescript
{
  label: 'Your Metric',
  value: '1,234',
  change: 10.5,
  isPositive: true,
  icon: 'solar:your-icon-bold',
  color: '#0066ff',
}
```

Icons: Use [Iconify](https://iconify.design/) icons from the `solar` collection.

### Changing Colors

Colors are NOT hardcoded. They use:
1. **CSS custom properties** from `globals.css`
2. **Tailwind color classes** for consistency
3. **Dynamic icon colors** from the `color` property in stats

To customize globally, edit `src/app/globals.css`:

```css
--color-primary: #0066ff;    /* Primary accent */
--color-purple: #1e013a;     /* Secondary */
--color-success: #10b981;    /* Success state */
```

### Responsive Breakpoints

All components use Tailwind breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Dark Mode

All components support dark mode through `dark:` Tailwind classes. Theme is managed via `next-themes`.

## Production Checklist

✅ **No Hardcoding**
- All data comes from `dashboardService.ts`
- All colors defined in CSS variables
- All icons use Iconify library
- All metrics are configurable

✅ **Type Safety**
- Full TypeScript strict mode
- All data structures typed
- No `any` types

✅ **Responsive Design**
- Mobile-first approach
- Touch-friendly card layouts
- Horizontal scroll for charts
- Flexible grids

✅ **Accessibility**
- Semantic HTML
- ARIA labels for icons
- Proper contrast ratios
- Keyboard navigation support

✅ **Performance**
- Modular components (tree-shakeable)
- Client/Server separation
- No unnecessary re-renders
- Lightweight SVG charts

## API Integration

### Current State
Dashboard uses mock data from `src/app/services/dashboardService.ts`

### Backend Integration
When ready, replace in `dashboardService.ts`:

```typescript
// TODO: Replace with actual API call when backend is ready
const response = await fetch('/api/v1/dashboard');
const data = await response.json();
return data;
```

### Expected API Response Format

```json
{
  "success": true,
  "data": {
    "stats": [...],
    "recentOrders": [...],
    "topProducts": [...],
    "revenueChart": [...]
  },
  "error": null
}
```

## Styling

### Theme Configuration
- Uses Tailwind CSS 4
- Custom theme in `globals.css`
- Supports light/dark/auto modes
- Premium, minimal aesthetic

### Color Palette

From `globals.css`:
- **Primary**: `#0066ff` (Blue)
- **Purple**: `#1e013a`
- **Grey**: `#f4f5f6`
- **Border**: `#dbdbdb`
- **Dark Mode**: `#00224a`, `#02398a`

## Future Enhancements

### Phase 2
- [ ] Real-time updates via WebSocket
- [ ] Filtering by date range
- [ ] Export to CSV/PDF
- [ ] Custom dashboards (drag & drop)
- [ ] Alerts for significant changes

### Phase 3
- [ ] Advanced analytics
- [ ] Predictive analytics
- [ ] Competitor comparison
- [ ] Custom reports
- [ ] Scheduled email reports

## Reusable Components

These dashboard components can be reused elsewhere:

```typescript
// Import individual components
import { StatCard, RevenueChart, TopProducts } from '@/app/components/Dashboard';

// Use in other pages/sections
<StatCard stat={metricData} />
<RevenueChart data={chartData} />
```

## Error Handling

Dashboard includes graceful error handling:
- Data fetch failure → Shows error message with reload option
- Missing data → Displays placeholder
- Network issues → Fallback to mock data

## Testing

Components are designed to be test-friendly:
- Pure functions where possible
- Separated logic and presentation
- Mockable data structures
- Deterministic outputs

## Related Files

- **Route**: `/creator/dashboard`
- **Page Component**: `src/app/(site)/dashboard/page.tsx`
- **Types**: `src/app/types/dashboard.ts`
- **Service**: `src/app/services/dashboardService.ts`
- **Navigation**: Update `headerData` in `src/app/api/data/route.ts`

## Notes

- Dashboard respects existing design system
- Doesn't override or shadow header/footer
- Consistent with Creator World brand
- Ready for future store builder integration
- Modular structure allows easy extension
