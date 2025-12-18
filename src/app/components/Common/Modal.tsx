'use client'

import React, { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  closeButton?: boolean;
}

/**
 * Reusable Modal Component
 * Provides consistent modal structure across the app
 */
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  closeButton = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const sizeStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-2xl',
  };

  return (
    <div
      className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className={`w-full ${sizeStyles[size]} bg-white dark:bg-gray-800 rounded-lg shadow-lg max-h-[90vh] overflow-y-auto`}
      >
        {/* Header */}
        {(title || closeButton) && (
          <div className='flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800'>
            <h2 className='text-xl font-bold text-gray-900 dark:text-white'>
              {title}
            </h2>
            {closeButton && (
              <button
                onClick={onClose}
                className='text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors'
                aria-label='Close modal'
              >
                <Icon icon='tabler:x' className='w-6 h-6' />
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className='p-6'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
