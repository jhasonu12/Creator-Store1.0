# Reusable Components Usage Examples

## Quick Reference Guide

### 1. Card Component

```tsx
import { Card } from '@/app/components/Common';

// Basic card
<Card>
  <div className="p-6">Content here</div>
</Card>

// Clickable card
<Card onClick={() => navigate('/page')} hover={true}>
  <div className="p-6">Clickable content</div>
</Card>

// Custom styling
<Card className="bg-gradient-to-r from-blue-500 to-purple-600">
  <div className="p-6 text-white">Gradient card</div>
</Card>
```

---

### 2. Button Component

```tsx
import { Button } from '@/app/components/Common';
import { Icon } from '@iconify/react/dist/iconify.js';

// Primary button
<Button variant="primary">Click Me</Button>

// With icon
<Button variant="primary" icon={<Icon icon="solar:download-bold" />}>
  Download
</Button>

// All variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Delete</Button>

// All sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Loading state
<Button isLoading={true}>Loading...</Button>

// Full width
<Button fullWidth>Full Width Button</Button>

// Icon positioning
<Button icon={<Icon icon="solar:arrow-right-bold" />} iconPosition="right">
  Next
</Button>
```

---

### 3. Badge Component

```tsx
import { Badge } from '@/app/components/Common';

// All variants
<Badge variant="default">Default</Badge>
<Badge variant="success">Completed</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="danger">Failed</Badge>
<Badge variant="info">Information</Badge>

// In table/list
<div className="flex items-center gap-2">
  <Icon icon="solar:check-circle-bold" />
  <Badge variant="success">Order Complete</Badge>
</div>
```

---

### 4. Modal Component

```tsx
import { Modal } from '@/app/components/Common';
import { useState } from 'react';

export const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      
      <Modal 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Modal Title"
        size="md"
      >
        <div className="space-y-4">
          <p>Modal content goes here</p>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </div>
      </Modal>
    </>
  );
};
```

---

### 5. Table Component

```tsx
import { Table, Badge } from '@/app/components/Common';

export const OrdersTable = ({ orders }) => {
  const columns = [
    { 
      key: 'id', 
      label: 'Order ID' 
    },
    { 
      key: 'customer', 
      label: 'Customer' 
    },
    { 
      key: 'amount', 
      label: 'Amount',
      render: (value) => `$${value.toFixed(2)}`
    },
    { 
      key: 'status', 
      label: 'Status',
      render: (value) => (
        <Badge variant={value === 'completed' ? 'success' : 'warning'}>
          {value}
        </Badge>
      )
    }
  ];

  return <Table columns={columns} data={orders} striped />;
};
```

---

### 6. SectionHeading Component

```tsx
import { SectionHeading, Button } from '@/app/components/Common';

// Basic heading
<SectionHeading title="My Section" />

// With subtitle
<SectionHeading 
  title="Products"
  subtitle="Manage your store products"
/>

// With action button
<SectionHeading 
  title="Recent Orders"
  action={
    <Button size="sm" variant="outline">
      View All
    </Button>
  }
/>
```

---

### 7. DateRangePicker Component

```tsx
import { DateRangePicker } from '@/app/components/Common';

export const Dashboard = () => {
  const handleDateChange = (startDate, endDate) => {
    // Fetch data for the date range
    console.log('Date range:', startDate, endDate);
    // Call your API with new date range
  };

  return (
    <DateRangePicker 
      onDateChange={handleDateChange}
      label="Filter Dashboard"
    />
  );
};
```

---

## Complete Example: Dashboard Section

```tsx
'use client'

import React, { useState } from 'react';
import {
  Card,
  Button,
  Badge,
  SectionHeading,
  DateRangePicker
} from '@/app/components/Common';
import { Icon } from '@iconify/react/dist/iconify.js';

export const DashboardExample = () => {
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  const stats = [
    { label: 'Total Orders', value: 1250, change: 12, isPositive: true },
    { label: 'Revenue', value: '$45,000', change: 8, isPositive: true },
    { label: 'Customers', value: 320, change: -5, isPositive: false },
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <Card className="p-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back!</p>
          </div>
          <DateRangePicker onDateChange={(start, end) => setDateRange({start, end})} />
        </div>
      </Card>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-6">
            <div className="space-y-4">
              <p className="text-gray-600">{stat.label}</p>
              <div className="flex justify-between items-start">
                <p className="text-3xl font-bold">{stat.value}</p>
                <Badge variant={stat.isPositive ? 'success' : 'danger'}>
                  <Icon 
                    icon={stat.isPositive ? 'solar:arrow-up-bold' : 'solar:arrow-down-bold'}
                    className="w-3 h-3 mr-1"
                  />
                  {Math.abs(stat.change)}%
                </Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Content Section */}
      <Card>
        <SectionHeading 
          title="Recent Activity"
          action={
            <Button size="sm" variant="outline">
              <Icon icon="solar:arrow-right-bold" className="w-4 h-4" />
              View All
            </Button>
          }
        />
        <div className="p-6">
          <p className="text-gray-600">Your content here</p>
        </div>
      </Card>
    </div>
  );
};
```

---

## Component Props Reference

### Card Props
```tsx
interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;  // Default: true
}
```

### Button Props
```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'; // Default: 'primary'
  size?: 'sm' | 'md' | 'lg'; // Default: 'md'
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right'; // Default: 'left'
  fullWidth?: boolean;
}
```

### Badge Props
```tsx
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info'; // Default: 'default'
  className?: string;
}
```

### Modal Props
```tsx
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl'; // Default: 'md'
  closeButton?: boolean; // Default: true
}
```

### Table Props
```tsx
interface TableProps {
  columns: Column[];
  data: any[];
  className?: string;
  striped?: boolean; // Default: true
}

interface Column {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}
```

### SectionHeading Props
```tsx
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}
```

### DateRangePicker Props
```tsx
interface DateRangePickerProps {
  onDateChange?: (startDate: string, endDate: string) => void;
  label?: string; // Default: 'Select Date Range'
}
```

---

## Styling Classes

All components support Tailwind CSS dark mode:

```tsx
// Light mode colors
bg-white
text-gray-900
border-gray-200

// Dark mode colors (auto-applied)
dark:bg-gray-800
dark:text-white
dark:border-gray-700
```

---

## Common Patterns

### Form with Cards
```tsx
<Card className="p-8">
  <SectionHeading title="New Product" />
  <form className="space-y-4 mt-6">
    <input type="text" placeholder="Product name" />
    <textarea placeholder="Description" />
    <Button fullWidth>Create Product</Button>
  </form>
</Card>
```

### Status Display
```tsx
<div className="flex items-center gap-2">
  <div className="w-2 h-2 rounded-full bg-green-500" />
  <Badge variant="success">Active</Badge>
</div>
```

### Pagination
```tsx
<div className="flex justify-between items-center">
  <Button variant="outline" icon={<Icon icon="solar:arrow-left-bold" />}>
    Previous
  </Button>
  <span>Page 1 of 5</span>
  <Button variant="outline" iconPosition="right" icon={<Icon icon="solar:arrow-right-bold" />}>
    Next
  </Button>
</div>
```

---

## Tips & Best Practices

1. **Use components consistently** - Don't hardcode styles when a component exists
2. **Combine components** - Use Card + SectionHeading + Button together
3. **Leverage dark mode** - All components support it automatically
4. **Keep it simple** - Start with defaults, customize only when needed
5. **Extract logic** - Move state management to parent components
6. **Use barrel imports** - Import from `@/app/components/Common` for cleaner code
7. **Type safety** - Always pass proper TypeScript types to components
