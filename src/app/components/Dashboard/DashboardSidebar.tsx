'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react/dist/iconify.js';

interface NavItem {
  label: string;
  href: string;
  icon: string;
  badge?: string;
  color?: string;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: 'solar:widget-2-bold', color: 'from-blue-600 to-blue-700' },
  { label: 'Store', href: '/admin/store', icon: 'solar:shop-2-bold', color: 'from-purple-600 to-pink-600' },
  { label: 'Products', href: '/admin/products', icon: 'solar:bag-2-bold', color: 'from-green-600 to-emerald-600' },
  { label: 'Orders', href: '/admin/orders', icon: 'solar:cart-3-bold', color: 'from-orange-600 to-red-600' },
  { label: 'Customers', href: '/admin/customers', icon: 'solar:user-circle-bold', color: 'from-cyan-600 to-blue-600' },
  { label: 'Analytics', href: '/admin/analytics', icon: 'solar:chart-bold', color: 'from-indigo-600 to-purple-600' },
  { label: 'Settings', href: '/admin/settings', icon: 'solar:settings-bold', color: 'from-gray-600 to-gray-700' },
];

/**
 * Dashboard Sidebar Component
 * Responsive navigation for dashboard with creative mobile bottom sheet
 */
const DashboardSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Listen for toggle event from header
  React.useEffect(() => {
    const handleToggle = () => {
      setIsOpen(prev => !prev);
    };
    window.addEventListener('toggleSidebar', handleToggle);
    return () => window.removeEventListener('toggleSidebar', handleToggle);
  }, []);

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <>

      {/* Backdrop for Mobile */}
      {isOpen && (
        <div
          className='lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-20 top-20'
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Desktop Sidebar */}
      <aside className='hidden lg:flex flex-col w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-[calc(100vh-5rem)] sticky top-20'>
        <nav className='flex-1 p-4 space-y-2 overflow-y-auto'>
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
                  active
                    ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent'
                }`}
              >
                <Icon icon={item.icon} className='w-5 h-5 flex-shrink-0' />
                <span className='font-semibold flex-1'>{item.label}</span>
                {item.badge && (
                  <span className='ml-auto bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full'>
                    {item.badge}
                  </span>
                )}
                {active && (
                  <div className='absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full'></div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Sidebar Footer */}
        <div className='p-4 border-t border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800'>
          <button className='w-full flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200'>
            <Icon icon='solar:logout-2-bold' className='w-5 h-5' />
            <span className='font-semibold'>Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Sheet Menu - Creative Design */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 rounded-t-3xl z-30 transition-all duration-500 transform ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        } shadow-2xl`}
        style={{
          maxHeight: '70vh',
          boxShadow: isOpen ? '0 -10px 40px rgba(0,0,0,0.2)' : 'none',
        }}
      >
        {/* Handle Bar */}
        <div className='flex justify-center pt-3 pb-2'>
          <div className='w-12 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full'></div>
        </div>

        {/* Header */}
        <div className='px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between'>
          <h3 className='text-lg font-bold text-gray-900 dark:text-white'>Navigation</h3>
          <button
            onClick={() => setIsOpen(false)}
            className='p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors'
          >
            <Icon icon='tabler:x' className='w-6 h-6 text-gray-700 dark:text-gray-300' />
          </button>
        </div>

        {/* Menu Items */}
        <nav className='px-6 py-4 space-y-3 overflow-y-auto max-h-[calc(70vh-140px)]'>
          {navItems.map((item, index) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                  active
                    ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg'
                    : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md'
                }`}
                style={{
                  animation: isOpen ? `slideIn 0.3s ease-out ${index * 50}ms forwards` : 'none',
                  opacity: 0,
                }}
              >
                <Icon icon={item.icon} className='w-6 h-6 flex-shrink-0' />
                <div className='flex-1'>
                  <p className='font-semibold'>{item.label}</p>
                </div>
                {item.badge && (
                  <span className='bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full'>
                    {item.badge}
                  </span>
                )}
                <Icon
                  icon='tabler:chevron-right'
                  className='w-5 h-5 opacity-50'
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Footer */}
        <div className='px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800'>
          <button className='w-full flex items-center gap-3 px-4 py-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors duration-200 font-semibold'>
            <Icon icon='solar:logout-2-bold' className='w-5 h-5' />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default DashboardSidebar;
