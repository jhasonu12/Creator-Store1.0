'use client'

import React, { useEffect } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useNotificationStore } from '@/stores/notificationStore';

export function ToastContainer() {
  const notifications = useNotificationStore((state) => state.notifications);
  const removeNotification = useNotificationStore((state) => state.removeNotification);

  return (
    <div className='fixed top-4 right-4 z-50 flex flex-col gap-3 pointer-events-none'>
      {notifications.map((notification) => (
        <Toast
          key={notification.id}
          notification={notification}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
    </div>
  );
}

interface ToastProps {
  notification: {
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    title: string;
    message: string;
  };
  onClose: () => void;
}

function Toast({ notification, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const colors = {
    success: {
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-200 dark:border-green-800',
      text: 'text-green-800 dark:text-green-400',
      icon: 'text-green-600 dark:text-green-400',
      iconName: 'solar:check-circle-bold',
    },
    error: {
      bg: 'bg-red-50 dark:bg-red-900/20',
      border: 'border-red-200 dark:border-red-800',
      text: 'text-red-800 dark:text-red-400',
      icon: 'text-red-600 dark:text-red-400',
      iconName: 'solar:close-circle-bold',
    },
    warning: {
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      border: 'border-yellow-200 dark:border-yellow-800',
      text: 'text-yellow-800 dark:text-yellow-400',
      icon: 'text-yellow-600 dark:text-yellow-400',
      iconName: 'solar:danger-bold',
    },
    info: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-800',
      text: 'text-blue-800 dark:text-blue-400',
      icon: 'text-blue-600 dark:text-blue-400',
      iconName: 'solar:info-circle-bold',
    },
  };

  const color = colors[notification.type];

  return (
    <div
      className={`flex items-start gap-4 p-4 ${color.bg} border ${color.border} rounded-lg shadow-lg pointer-events-auto animate-slideDown min-w-96`}
    >
      <Icon icon={color.iconName} className={`w-5 h-5 flex-shrink-0 mt-0.5 ${color.icon}`} />
      <div className='flex-1'>
        <h4 className={`font-semibold ${color.text}`}>{notification.title}</h4>
        <p className={`text-sm ${color.text} opacity-90`}>{notification.message}</p>
      </div>
      <button
        onClick={onClose}
        className={`flex-shrink-0 p-1 hover:bg-white/50 rounded transition-colors`}
      >
        <Icon icon='solar:close-circle-bold' className={`w-5 h-5 ${color.icon}`} />
      </button>
    </div>
  );
}
