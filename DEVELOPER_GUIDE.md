# Developer Quick Reference - Creator Store

## Copy-Paste Components

### Primary Button
```tsx
<button className='py-3 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 active:scale-95'>
  Button Text
</button>
```

### Input Field with Icon
```tsx
<div className='relative group'>
  <Icon icon='solar:mailbox-bold' className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500 dark:text-blue-400 group-focus-within:text-purple-500 transition-colors' />
  <input type='email' placeholder='Email' className='w-full rounded-lg border border-blue-200 dark:border-blue-800/50 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm px-4 pl-11 py-3 text-base text-gray-900 dark:text-white outline-none transition placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:bg-white dark:focus:bg-slate-800' />
</div>
```

### Card Component
```tsx
<div className='bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 p-6 hover:shadow-lg transition-all'>
  {/* Content */}
</div>
```

### Animated Background
```tsx
<div className='fixed inset-0 -z-10 overflow-hidden'>
  <div className='absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/40 dark:to-slate-900'></div>
  <div className='absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob'></div>
  <div className='absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000'></div>
  <div className='absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000'></div>
</div>
```

## Color Quick Reference

| Use Case | Class |
|----------|-------|
| Primary Button | `from-blue-600 to-purple-600` |
| Accent Button | `from-purple-600 to-pink-600` |
| Success Badge | `bg-green-50 text-green-600` |
| Error Badge | `bg-red-50 text-red-600` |
| Input Border Focus | `focus:border-purple-500 focus:ring-purple-500/20` |
| Dark Background | `dark:bg-gray-800` |
| Dark Text | `dark:text-white` |

## Icon Quick Reference

| Icon | Code |
|------|------|
| Home | `solar:home-bold` |
| User | `solar:user-bold` |
| Email | `solar:mailbox-bold` |
| Lock | `solar:lock-bold` |
| Check | `solar:check-circle-bold` |
| Close | `solar:close-circle-bold` |
| Download | `solar:download-bold` |
| Upload | `solar:upload-bold` |
| Settings | `solar:settings-bold` |
| Logout | `solar:logout-2-bold` |
| Calendar | `solar:calendar-bold` |
| Clock | `solar:clock-circle-bold` |
| Eye | `solar:eye-bold` |
| Eye Closed | `solar:eye-closed-bold` |

## Animation Classes

| Animation | Duration | Usage |
|-----------|----------|-------|
| `animate-fadeIn` | 0.8s | Page entrance |
| `animate-slideDown` | 0.6s | Element entrance from top |
| `animate-slideUp` | 0.6s | Element entrance from bottom |
| `animate-blob` | 7s | Background floating |
| `animation-delay-200` | 200ms | Stagger delay |
| `animation-delay-300` | 300ms | Stagger delay |
| `animation-delay-400` | 400ms | Stagger delay |
| `animation-delay-500` | 500ms | Stagger delay |
| `animation-delay-2000` | 2s | Blob animation offset |
| `animation-delay-4000` | 4s | Blob animation offset |

## Responsive Classes

```
Mobile:  (no prefix)
Tablet:  md:
Desktop: lg:
XL:      xl:
```

## Dark Mode Pattern

```tsx
className='bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700'
```

## Common Imports

```tsx
import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
```

## File Structure

```
src/app/components/
├── Auth/                (login, signup)
├── Dashboard/           (dashboard components)
├── Common/              (DateRangePicker, etc)
├── Layout/              (header, footer)
└── Home/                (homepage sections)
```

## Testing URLs

```
Sign In:    http://localhost:3001/signin
Sign Up:    http://localhost:3001/signup
Dashboard:  http://localhost:3001/admin/dashboard
```

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run start    # Start production
```

## For Full Reference

See: `DESIGN_SYSTEM.md`
