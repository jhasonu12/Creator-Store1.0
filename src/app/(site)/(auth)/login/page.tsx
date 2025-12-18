'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (!email || !password) {
        setError('Please fill in all fields');
        setIsLoading(false);
        return;
      }

      // Store user data
      const userData = {
        id: Math.random().toString(36).substr(2, 9),
        name: email.split('@')[0],
        email,
        role: 'creator',
        loginTime: new Date().toISOString(),
      };

      // Set in localStorage AND cookies for middleware
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('isAuthenticated', 'true');
      
      // Set cookie for middleware to work
      document.cookie = `isAuthenticated=true; path=/; max-age=86400`;
      document.cookie = `user=${encodeURIComponent(JSON.stringify(userData))}; path=/; max-age=86400`;

      // Redirect to dashboard
      router.push('/admin/dashboard');
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 flex flex-col items-center justify-center p-3 py-6'>
      {/* Background animated blobs */}
      <div className='fixed inset-0 -z-10 overflow-hidden pointer-events-none'>
        <div className='absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob'></div>
        <div className='absolute top-40 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000'></div>
      </div>

      <div className='w-full max-w-md'>
        {/* Header - Logo & Title */}
        <div className='text-center mb-4'>
          <div className='inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg mb-2'>
            <span className='text-white font-bold text-lg'>CS</span>
          </div>
          <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>
            Creator Store
          </h1>
          <p className='text-sm text-gray-600 dark:text-gray-400'>
            Welcome back
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className='bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 space-y-3 animate-slideUp'>
          {/* Error Message */}
          {error && (
            <div className='flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg animate-slideDown'>
              <Icon icon='solar:danger-bold' className='w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0' />
              <p className='text-sm text-red-600 dark:text-red-400'>{error}</p>
            </div>
          )}

          {/* Email Field */}
          <div>
            <label className='block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1'>
              Email Address
            </label>
            <div className='relative'>
              <Icon icon='solar:mailbox-bold' className='absolute left-3 top-3 w-4 h-4 text-gray-400' />
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='you@example.com'
                className='w-full pl-9 pr-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className='block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1'>
              Password
            </label>
            <div className='relative'>
              <Icon icon='solar:lock-password-bold' className='absolute left-3 top-3 w-4 h-4 text-gray-400' />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='••••••••'
                className='w-full pl-9 pr-10 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
              >
                <Icon icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} className='w-4 h-4' />
              </button>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className='flex items-center justify-between text-xs'>
            <label className='flex items-center gap-2 cursor-pointer'>
              <input type='checkbox' className='w-4 h-4 rounded border-gray-300 accent-blue-600' />
              <span className='text-gray-700 dark:text-gray-300'>Remember me</span>
            </label>
            <Link href='/forgot-password' className='text-blue-600 dark:text-blue-400 hover:underline font-medium'>
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type='submit'
            disabled={isLoading}
            className='w-full py-2.5 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 flex items-center justify-center gap-2'
          >
            {isLoading ? (
              <>
                <Icon icon='eos-icons:loading' className='w-4 h-4' />
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <Icon icon='solar:login-2-bold' className='w-4 h-4' />
                <span>Login</span>
              </>
            )}
          </button>

          {/* Divider */}
          <div className='relative my-2'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-300 dark:border-gray-600'></div>
            </div>
            <div className='relative flex justify-center text-xs'>
              <span className='px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400'>
                Or with
              </span>
            </div>
          </div>

          {/* Social Login */}
          <div className='grid grid-cols-2 gap-2'>
            <button
              type='button'
              className='flex items-center justify-center gap-2 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-xs'
            >
              <Icon icon='mdi:google' className='w-4 h-4' />
              <span className='hidden sm:inline font-medium'>Google</span>
            </button>
            <button
              type='button'
              className='flex items-center justify-center gap-2 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-xs'
            >
              <Icon icon='mdi:github' className='w-4 h-4' />
              <span className='hidden sm:inline font-medium'>GitHub</span>
            </button>
          </div>

          {/* Signup Link */}
          <p className='text-center text-xs text-gray-600 dark:text-gray-400'>
            Don't have an account?{' '}
            <Link href='/signup' className='text-blue-600 dark:text-blue-400 font-semibold hover:underline'>
              Sign up
            </Link>
          </p>
        </form>

        {/* Demo Credentials */}
        <div className='mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg text-xs'>
          <p className='font-semibold text-blue-900 dark:text-blue-300 mb-1'>Demo:</p>
          <p className='text-blue-800 dark:text-blue-400'>Email: <code className='font-mono text-xs'>demo@example.com</code></p>
          <p className='text-blue-800 dark:text-blue-400'>Pass: <code className='font-mono text-xs'>demo123</code></p>
        </div>
      </div>
    </div>
  );
}
