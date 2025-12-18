import React from 'react';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Creator Dashboard | Creator World',
  description: 'Manage your store, products, orders, and earnings in one place.',
};

/**
 * Legacy Dashboard Page
 * Redirects to /admin/dashboard
 */
export default function DashboardPage() {
  redirect('/admin/dashboard');
}
