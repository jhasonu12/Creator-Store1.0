'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useNotificationStore } from '@/stores/notificationStore';

/**
 * Dashboard Layout Header
 * Shows logo, user info, settings, theme toggle, and notifications
 * Mobile: Includes sidebar toggle
 */
const DashboardHeader: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('auto');
  const [unreadCount, setUnreadCount] = useState(3);
  const addNotification = useNotificationStore((state) => state.addNotification);

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'auto' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  // Apply theme to document
  const applyTheme = (newTheme: 'light' | 'dark' | 'auto') => {
    const htmlElement = document.documentElement;

    if (newTheme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      htmlElement.classList.toggle('dark', prefersDark);
    } else {
      htmlElement.classList.toggle('dark', newTheme === 'dark');
    }

    localStorage.setItem('theme', newTheme);
  };

  // Toggle theme
  const toggleTheme = () => {
    const themes: ('light' | 'dark' | 'auto')[] = ['light', 'dark', 'auto'];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    
    setTheme(nextTheme);
    applyTheme(nextTheme);

    // Show notification
    const themeNames = { light: 'Light', dark: 'Dark', auto: 'Auto' };
    addNotification({
      type: 'info',
      title: 'Theme Changed',
      message: `Switched to ${themeNames[nextTheme]} mode`,
      duration: 3000,
    });
  };

  // Mock user data - replace with actual user context
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '👤',
    role: 'Creator',
  };

  // Dispatch event to toggle sidebar (works with DashboardSidebar)
  const toggleSidebar = () => {
    const event = new CustomEvent('toggleSidebar');
    window.dispatchEvent(event);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/login';
  };

  return (
    <header className='fixed top-0 z-40 w-full bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm'>
      <div className='h-20 px-4 md:px-8 flex items-center justify-between'>
        {/* Mobile Menu Toggle + Logo */}
        <div className='flex items-center gap-3'>
          {/* Logo & Branding */}
          <div className='flex items-center gap-2'>
            <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg'>
              CS
            </div>
            <div className='hidden sm:flex flex-col'>
              <h2 className='text-lg font-bold text-gray-900 dark:text-white'>
                Creator Store
              </h2>
              <p className='text-xs text-gray-500 dark:text-gray-400'>Dashboard</p>
            </div>
          </div>
        </div>

        {/* User Profile Section */}
        <div className='flex items-center gap-4'>
          {/* Notifications */}
          <button className='relative p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300 hover:scale-110 active:scale-95'
            title='Notifications'
            onClick={() => {
              setUnreadCount(0);
              addNotification({
                type: 'success',
                title: 'Orders',
                message: 'You have 5 new orders',
              });
            }}
          >
            <Icon icon='solar:bell-bold' className='w-6 h-6' />
            {unreadCount > 0 && (
              <span className='absolute top-1 right-1 w-5 h-5 bg-gradient-to-br from-red-500 to-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center'>
                {unreadCount}
              </span>
            )}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className='p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300 hover:scale-110 active:scale-95'
            title={`Theme: ${theme}`}
          >
            {theme === 'dark' ? (
              <Icon icon='solar:moon-bold' className='w-6 h-6 text-yellow-500' />
            ) : theme === 'light' ? (
              <Icon icon='solar:sun-bold' className='w-6 h-6 text-orange-500' />
            ) : (
              <Icon icon='solar:settings-bold' className='w-6 h-6' />
            )}
          </button>

          {/* User Profile Dropdown */}
          <div className='relative'>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className='flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors'
            >
              <div className='w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-sm font-bold shadow'>
                {user.avatar}
              </div>
              <div className='hidden md:flex flex-col text-left'>
                <p className='text-sm font-semibold text-gray-900 dark:text-white'>
                  {user.name}
                </p>
                <p className='text-xs text-gray-500 dark:text-gray-400'>
                  {user.role}
                </p>
              </div>
              <Icon
                icon={isProfileOpen ? 'tabler:chevron-up' : 'tabler:chevron-down'}
                className='w-4 h-4 text-gray-700 dark:text-gray-300'
              />
            </button>

            {/* Profile Dropdown Menu */}
            {isProfileOpen && (
              <div className='absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50 animate-slideDown'>
                {/* User Info */}
                <div className='px-4 py-3 border-b border-gray-200 dark:border-gray-700'>
                  <p className='font-semibold text-gray-900 dark:text-white'>
                    {user.name}
                  </p>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    {user.email}
                  </p>
                </div>

                {/* Menu Items */}
                <Link
                  href='/admin/profile'
                  className='flex items-center gap-3 px-4 py-2.5 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-colors'
                  onClick={() => setIsProfileOpen(false)}
                >
                  <Icon icon='solar:user-bold' className='w-5 h-5' />
                  <span>My Profile</span>
                </Link>

                <Link
                  href='/admin/settings'
                  className='flex items-center gap-3 px-4 py-2.5 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-colors'
                  onClick={() => setIsProfileOpen(false)}
                >
                  <Icon icon='solar:settings-bold' className='w-5 h-5' />
                  <span>Settings</span>
                </Link>

                <div className='border-t border-gray-200 dark:border-gray-700 mt-2 pt-2'>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsProfileOpen(false);
                    }}
                    className='w-full flex items-center gap-3 px-4 py-2.5 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors'
                  >
                    <Icon icon='solar:logout-2-bold' className='w-5 h-5' />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            className='lg:hidden p-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95'
            aria-label='Toggle sidebar'
          >
            <Icon icon='tabler:menu-2' className='w-6 h-6' />
          </button>
        </div>
      </div>

      {/* Backdrop for profile dropdown */}
      {isProfileOpen && (
        <div
          className='fixed inset-0 z-40'
          onClick={() => setIsProfileOpen(false)}
        />
      )}
    </header>
  );
};

export default DashboardHeader;
