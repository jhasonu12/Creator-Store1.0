import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to admin dashboard - this is now a dashboard-specific repo
  redirect('/admin/dashboard');
}

