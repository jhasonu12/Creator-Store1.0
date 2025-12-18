'use client'

import React from 'react';

interface Column {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface TableProps {
  columns: Column[];
  data: any[];
  className?: string;
  striped?: boolean;
}

/**
 * Reusable Table Component
 * Responsive table with customizable columns
 */
const Table: React.FC<TableProps> = ({
  columns,
  data,
  className = '',
  striped = true,
}) => {
  return (
    <div className='overflow-x-auto'>
      <table className={`w-full ${className}`}>
        <thead>
          <tr className='bg-gray-50 dark:bg-gray-700/50'>
            {columns.map((column) => (
              <th
                key={column.key}
                className='px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase'
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`border-t border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${
                striped && rowIndex % 2 === 0
                  ? 'bg-white dark:bg-gray-800'
                  : 'bg-gray-50 dark:bg-gray-700/30'
              }`}
            >
              {columns.map((column) => (
                <td
                  key={`${rowIndex}-${column.key}`}
                  className='px-6 py-4 text-sm text-gray-900 dark:text-gray-100'
                >
                  {column.render
                    ? column.render(row[column.key], row)
                    : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
