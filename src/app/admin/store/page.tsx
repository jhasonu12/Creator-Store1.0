'use client'

import React, { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import DashboardHeader from '@/app/components/Dashboard/DashboardHeader';

interface StoreProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  status: 'draft' | 'published';
  image: string;
  sales: number;
  color: string;
}

const mockProducts: StoreProduct[] = [
  {
    id: '1',
    name: 'Web Development Course',
    description: 'Learn modern web development',
    price: 49.99,
    category: 'Courses',
    status: 'published',
    image: '🚀',
    sales: 342,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: '2',
    name: 'Design System Template',
    description: 'Premium UI design templates',
    price: 29.99,
    category: 'Digital Products',
    status: 'published',
    image: '🎨',
    sales: 218,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: '3',
    name: 'Monthly Coaching',
    description: 'One-on-one mentoring sessions',
    price: 99.99,
    category: 'Services',
    status: 'published',
    image: '👨‍🏫',
    sales: 156,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: '4',
    name: 'Mobile App Starter',
    description: 'React Native boilerplate',
    price: 39.99,
    category: 'Digital Products',
    status: 'draft',
    image: '📱',
    sales: 89,
    color: 'from-orange-500 to-red-500',
  },
];

export default function StorePage() {
  const [products, setProducts] = useState<StoreProduct[]>(mockProducts);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['All', 'Courses', 'Digital Products', 'Services'];
  
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const totalRevenue = filteredProducts.reduce((sum, p) => sum + (p.price * p.sales), 0);
  const publishedCount = filteredProducts.filter(p => p.status === 'published').length;

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20'>
      <DashboardHeader />

      <div className='container mx-auto px-4 py-8'>
        {/* Page Header */}
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3'>
            <span className='inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600'>
              <Icon icon='solar:shop-2-bold' className='w-6 h-6 text-white' />
            </span>
            Store Management
          </h1>
          <p className='text-gray-600 dark:text-gray-400'>Manage and monitor all your products</p>
        </div>

        {/* Stats Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
          <div className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-gray-600 dark:text-gray-400 text-sm font-medium'>Total Products</p>
                <p className='text-4xl font-bold text-gray-900 dark:text-white mt-2'>{filteredProducts.length}</p>
              </div>
              <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center'>
                <Icon icon='solar:bag-3-bold' className='w-7 h-7 text-white' />
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-gray-600 dark:text-gray-400 text-sm font-medium'>Published</p>
                <p className='text-4xl font-bold text-gray-900 dark:text-white mt-2'>{publishedCount}</p>
              </div>
              <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center'>
                <Icon icon='solar:check-circle-bold' className='w-7 h-7 text-white' />
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-gray-600 dark:text-gray-400 text-sm font-medium'>Total Revenue</p>
                <p className='text-4xl font-bold text-gray-900 dark:text-white mt-2'>${totalRevenue.toFixed(0)}</p>
              </div>
              <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center'>
                <Icon icon='solar:dollar-bold' className='w-7 h-7 text-white' />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-8'>
          <div className='flex items-center justify-between flex-wrap gap-4'>
            {/* Category Filter */}
            <div className='flex items-center gap-3'>
              <span className='text-sm font-semibold text-gray-600 dark:text-gray-400'>Filter:</span>
              <div className='flex items-center gap-2 flex-wrap'>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === cat
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className='flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-1'>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white dark:bg-gray-600 shadow' : ''}`}
              >
                <Icon icon='solar:grid-bold' className={`w-5 h-5 ${viewMode === 'grid' ? 'text-purple-600' : 'text-gray-600 dark:text-gray-400'}`} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-white dark:bg-gray-600 shadow' : ''}`}
              >
                <Icon icon='solar:list-bold' className={`w-5 h-5 ${viewMode === 'list' ? 'text-purple-600' : 'text-gray-600 dark:text-gray-400'}`} />
              </button>
            </div>

            {/* Add Product Button */}
            <button className='flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all active:scale-95'>
              <Icon icon='solar:add-square-bold' className='w-5 h-5' />
              Add Product
            </button>
          </div>
        </div>

        {/* Products Grid/List */}
        {viewMode === 'grid' ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className='bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group'
              >
                {/* Product Image/Icon */}
                <div className={`h-40 bg-gradient-to-br ${product.color} flex items-center justify-center text-6xl relative overflow-hidden`}>
                  <div className='absolute inset-0 opacity-20 animate-blob'></div>
                  <span className='text-6xl relative z-10'>{product.image}</span>
                </div>

                {/* Status Badge */}
                <div className='absolute top-4 right-4'>
                  {product.status === 'published' ? (
                    <span className='inline-flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-semibold'>
                      <Icon icon='solar:check-circle-bold' className='w-4 h-4' />
                      Published
                    </span>
                  ) : (
                    <span className='inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-semibold'>
                      <Icon icon='solar:document-bold' className='w-4 h-4' />
                      Draft
                    </span>
                  )}
                </div>

                {/* Product Info */}
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors'>
                    {product.name}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400 text-sm mb-4'>{product.description}</p>

                  {/* Stats */}
                  <div className='flex items-center justify-between py-4 border-t border-gray-200 dark:border-gray-700'>
                    <div>
                      <p className='text-xs text-gray-500 dark:text-gray-400'>Price</p>
                      <p className='text-lg font-bold text-gray-900 dark:text-white'>${product.price}</p>
                    </div>
                    <div>
                      <p className='text-xs text-gray-500 dark:text-gray-400'>Sales</p>
                      <p className='text-lg font-bold text-gray-900 dark:text-white'>{product.sales}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className='flex items-center gap-2'>
                    <button className='flex-1 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg font-semibold hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors flex items-center justify-center gap-2'>
                      <Icon icon='solar:pen-2-bold' className='w-4 h-4' />
                      Edit
                    </button>
                    <button className='p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors'>
                      <Icon icon='solar:trash-bin-2-bold' className='w-4 h-4 text-red-600 dark:text-red-400' />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden'>
            {filteredProducts.map((product, idx) => (
              <div
                key={product.id}
                className={`flex items-center gap-6 p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${
                  idx !== filteredProducts.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''
                }`}
              >
                {/* Icon */}
                <div className={`h-16 w-16 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center text-3xl flex-shrink-0`}>
                  {product.image}
                </div>

                {/* Info */}
                <div className='flex-1'>
                  <div className='flex items-center gap-3 mb-1'>
                    <h3 className='text-lg font-bold text-gray-900 dark:text-white'>{product.name}</h3>
                    {product.status === 'published' ? (
                      <span className='inline-flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-semibold'>
                        <Icon icon='solar:check-circle-bold' className='w-3 h-3' />
                      </span>
                    ) : (
                      <span className='inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-semibold'>
                        Draft
                      </span>
                    )}
                  </div>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>{product.description}</p>
                </div>

                {/* Stats */}
                <div className='flex items-center gap-8'>
                  <div className='text-center'>
                    <p className='text-xs text-gray-500 dark:text-gray-400 mb-1'>Price</p>
                    <p className='text-lg font-bold text-gray-900 dark:text-white'>${product.price}</p>
                  </div>
                  <div className='text-center'>
                    <p className='text-xs text-gray-500 dark:text-gray-400 mb-1'>Sales</p>
                    <p className='text-lg font-bold text-gray-900 dark:text-white'>{product.sales}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className='flex items-center gap-2'>
                  <button className='p-2 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors'>
                    <Icon icon='solar:pen-2-bold' className='w-5 h-5 text-purple-600 dark:text-purple-400' />
                  </button>
                  <button className='p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors'>
                    <Icon icon='solar:trash-bin-2-bold' className='w-5 h-5 text-red-600 dark:text-red-400' />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
