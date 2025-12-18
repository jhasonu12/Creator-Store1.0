'use client'

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

/**
 * Reusable Card Component
 * Base container for content with consistent styling
 */
const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hover = true,
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 ${
        hover ? 'hover:shadow-lg transition-shadow duration-300' : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
