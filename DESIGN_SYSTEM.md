# Creator Store Design System

## Overview

This document defines the consistent design system across the Creator Store platform. All UI components, animations, colors, and interactive elements follow these guidelines to maintain visual and functional consistency across the entire application.

## Color Palette

### Primary Colors
- **Blue**: `from-blue-600` → Used for primary actions and interactive elements
- **Purple**: `to-purple-600` → Used for accents and hover states
- **Pink**: `to-pink-600` → Used for secondary accents and CTAs

### Gradient System
All major interactive elements use gradient combinations:

```css
/* Primary Gradient (Buttons, CTAs) */
from-blue-600 to-purple-600

/* Extended Gradient (Headers, Special Sections) */
from-blue-500 via-purple-500 to-pink-500

/* Soft Gradient (Backgrounds) */
from-blue-50 via-purple-50 to-pink-50

/* Dark Gradient (Dark Mode) */
from-slate-900 via-purple-900/40 to-slate-900
```

### Semantic Colors
- **Success**: Green (`from-green-600`, `text-green-400`)
- **Warning**: Amber (`from-yellow-500`, `text-amber-400`)
- **Error/Danger**: Red (`from-red-600`, `text-red-400`)
- **Info**: Blue (`from-blue-500`, `text-blue-400`)

## Typography

### Font Sizes & Weights
```
h1: text-3xl md:text-4xl font-bold
h2: text-2xl md:text-3xl font-bold
h3: text-xl md:text-2xl font-semibold
h4: text-lg md:text-xl font-semibold
h5: text-base md:text-lg font-semibold
p: text-sm md:text-base
label: text-sm font-semibold
```

### Text Colors
- **Primary Text**: `text-gray-900` (light), `dark:text-white` (dark)
- **Secondary Text**: `text-gray-600` (light), `dark:text-gray-400` (dark)
- **Muted Text**: `text-gray-500` (light), `dark:text-gray-500` (dark)
- **Labels**: `text-gray-700` (light), `dark:text-gray-300` (dark)

## Spacing System

```
Padding/Margin Units:
px-2  = 8px
px-3  = 12px
px-4  = 16px
px-5  = 20px
px-6  = 24px

Gap Units:
gap-2 = 8px
gap-3 = 12px
gap-4 = 16px
gap-6 = 24px
```

## Border & Corners

### Border Radius
```
rounded-lg   = 8px (small components, inputs)
rounded-xl   = 12px (cards, buttons)
rounded-2xl  = 16px (major UI sections, modals)
rounded-full = 9999px (badges, avatars)
```

### Borders
- **Input Border**: `border-2 border-blue-200` (light), `dark:border-blue-800/50` (dark)
- **Card Border**: `border border-gray-100` (light), `dark:border-gray-700` (dark)
- **Focus Border**: `border-purple-500` or `border-pink-500`

## Shadows

### Shadow Levels
```
shadow-md       = Small elevation (cards)
shadow-lg       = Medium elevation (modals, dropdowns)
shadow-2xl      = Large elevation (floating panels)
shadow-blue-500/20   = Colored shadow (buttons on hover)
shadow-purple-500/50 = Colored shadow (accent elements)
```

### Usage
```tsx
/* Cards & Basic Elements */
shadow-md border border-gray-100

/* Interactive Elements on Hover */
hover:shadow-lg hover:shadow-purple-500/50

/* Elevated Panels */
shadow-2xl border border-gray-200
```

## Buttons

### Button Variants

#### Primary Button (Main CTA)
```tsx
className='py-3 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 active:scale-95'
```

#### Secondary Button
```tsx
className='py-2.5 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors'
```

#### Danger Button
```tsx
className='py-2.5 px-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg font-medium hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors'
```

### Button States
```
Normal: Base styling
Hover: scale-105 or shadow-lg
Active: scale-95 (pressed effect)
Disabled: opacity-50 cursor-not-allowed
Loading: opacity-75 + Loader component
```

## Input Fields

### Text Input
```tsx
className='w-full rounded-lg border border-blue-200 dark:border-blue-800/50 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm px-4 pl-11 py-3 text-base text-gray-900 dark:text-white outline-none transition placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:bg-white dark:focus:bg-slate-800'
```

### Input with Icon
```tsx
<div className='relative group'>
  <Icon icon='solar:mailbox-bold' className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500 dark:text-blue-400 group-focus-within:text-purple-500 transition-colors' />
  <input {...inputProps} className='... pl-11 ...' />
</div>
```

## Icons

### Icon System
- **Icon Library**: Iconify (`@iconify/react`)
- **Primary Icon Set**: `solar:*` (solid icons, colorful)
- **Secondary Icon Set**: `tabler:*` (outline icons, minimalist)

### Icon Sizing
```
Small:    w-4 h-4  (badges, inline text)
Regular:  w-5 h-5  (buttons, inputs)
Large:    w-6 h-6  (sections, headers)
XLarge:   w-8 h-8  (page headers)
```

### Icon Usage
```tsx
import { Icon } from '@iconify/react/dist/iconify.js';

// Primary icon (solid, colorful)
<Icon icon='solar:home-bold' className='w-5 h-5' />

// Secondary icon (outline)
<Icon icon='tabler:check' className='w-5 h-5' />

// Colored icon
<Icon icon='solar:lock-bold' className='w-5 h-5 text-blue-500' />
```

## Animations

### Keyframe Animations
```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }

/* Slide Down */
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-slideDown { animation: slideDown 0.6s ease-out forwards; }

/* Slide Up */
@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-slideUp { animation: slideUp 0.6s ease-out forwards; }

/* Blob (Floating Background) */
@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}
.animate-blob { animation: blob 7s infinite; }
```

### Animation Delays
```
animation-delay-200  = 200ms
animation-delay-300  = 300ms
animation-delay-400  = 400ms
animation-delay-500  = 500ms
animation-delay-2000 = 2s
animation-delay-4000 = 4s
```

### Common Animation Patterns

#### Staggered Fade In (Elements appearing one after another)
```tsx
<div className='animate-slideDown animation-delay-200'>...</div>
<div className='animate-slideDown animation-delay-300'>...</div>
<div className='animate-slideDown animation-delay-400'>...</div>
```

#### Floating Background Blobs
```tsx
<div className='absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob' />
<div className='absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000' />
```

## Cards

### Card Base
```tsx
className='bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 p-6 hover:shadow-lg transition-all'
```

### Card with Hover Effect
```tsx
className='bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 cursor-pointer overflow-hidden relative'
```

## Forms

### Form Layout
```tsx
<div className='space-y-4'>
  <div>
    <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
      Label
    </label>
    <input {...props} />
  </div>
</div>
```

### Form Validation
- **Error State**: `border-red-500 focus:ring-red-500/20`
- **Success State**: `border-green-500 focus:ring-green-500/20`
- **Warning State**: `border-yellow-500 focus:ring-yellow-500/20`

## Dark Mode

### Dark Mode Colors
- **Background**: `dark:bg-slate-900` (primary), `dark:bg-gray-800` (secondary)
- **Cards**: `dark:bg-gray-800`
- **Border**: `dark:border-gray-700`
- **Text**: `dark:text-white` (primary), `dark:text-gray-300` (secondary)

### Dark Mode Pattern
```tsx
className='bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700'
```

## Layout

### Container
```tsx
className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
```

### Responsive Grid
```tsx
/* 1 column mobile, 2 columns tablet, 3 columns desktop */
className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'

/* 1 column mobile, full desktop */
className='grid grid-cols-1 lg:grid-cols-3 gap-6'
```

### Spacing
```
Container padding: px-4 md:px-6 lg:px-8
Section gap: gap-4 md:gap-6 lg:gap-8
Vertical spacing: space-y-4 md:space-y-6
```

## Accessibility

### Focus States
All interactive elements must have visible focus states:
```tsx
focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800
```

### ARIA Labels
```tsx
<Icon icon='solar:close-circle-bold' aria-label='Close' className='w-5 h-5' />
<input aria-label='Email address' aria-describedby='email-error' />
```

### Contrast
- Text on background: Minimum 4.5:1 ratio (WCAG AA)
- Large text: Minimum 3:1 ratio
- Use `text-gray-900` on light backgrounds
- Use `text-white` on dark backgrounds

## Component Examples

### Date Range Picker (Colorful Variant)
```tsx
<DateRangePicker
  variant="colorful"
  label="Select Date Range"
  onDateChange={(start, end) => console.log(start, end)}
/>
```

### Stat Card
```tsx
<StatCard stat={{
  label: 'Total Sales',
  value: '$12,500',
  change: 12.5,
  isPositive: true,
  color: '#00FF00',
  icon: 'solar:chart-2-bold'
}} />
```

### Button Group
```tsx
<div className='flex gap-3'>
  <button className='...'>Primary</button>
  <button className='...'>Secondary</button>
</div>
```

## Migration Guide

### From Old Styling to New Design System

#### Old Button
```tsx
className='bg-darkmode w-full py-3 rounded-lg text-18 font-medium border text-white border-darkmode hover:text-darkmode hover:bg-transparent'
```

#### New Button
```tsx
className='w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all active:scale-95'
```

#### Old Input
```tsx
className='w-full rounded-md border border-dark_border/60 bg-transparent px-5 py-3 text-dark outline-hidden'
```

#### New Input
```tsx
className='w-full rounded-lg border border-blue-200 dark:border-blue-800/50 bg-white/50 dark:bg-slate-800/50 px-4 py-3 text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
```

## Best Practices

1. **Use Gradients Consistently**: Always use `from-blue-600 to-purple-600` for primary actions
2. **Maintain Spacing Ratio**: Keep padding/margin consistent with the spacing system
3. **Icon Consistency**: Use `solar:*` for primary actions, `tabler:*` for secondary
4. **Animation Timing**: Keep animations under 600ms for UI feedback
5. **Dark Mode Support**: Every color should have a `dark:` variant
6. **Accessibility First**: Always include focus states and ARIA labels
7. **Mobile First**: Design mobile experience first, then enhance for larger screens
8. **Component Reusability**: Build composable components that follow the design system

## Files Using This System

- `/src/app/components/Auth/SignIn/index.tsx`
- `/src/app/components/Auth/SignUp/index.tsx`
- `/src/app/components/Dashboard/StatCard.tsx`
- `/src/app/components/Dashboard/RevenueChart.tsx`
- `/src/app/components/Common/DateRangePicker.tsx`
- `/src/components/BeautifulDateRangePicker.tsx`

## Future Enhancements

- [ ] Add component library storybook
- [ ] Create CSS variable definitions for colors
- [ ] Build reusable component library
- [ ] Add animation library docs
- [ ] Create typography system guide
- [ ] Build theme customization dashboard
