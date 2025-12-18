'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Validation
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        setError('Please fill in all fields');
        setIsLoading(false);
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        setIsLoading(false);
        return;
      }

      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters');
        setIsLoading(false);
        return;
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Store user data in localStorage (for demo)
      const userData = {
        id: Math.random().toString(36).substr(2, 9),
        name: formData.name,
        email: formData.email,
        role: 'creator',
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('isAuthenticated', 'true');
      
      // Set cookie for middleware to work
      document.cookie = `isAuthenticated=true; path=/; max-age=86400`;
      document.cookie = `user=${encodeURIComponent(JSON.stringify(userData))}; path=/; max-age=86400`;

      // Redirect to dashboard
      router.push('/admin/dashboard');
    } catch (err) {
      setError('Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20 flex flex-col items-center justify-center p-3 py-6'>
      {/* Background animated blobs */}
      <div className='fixed inset-0 -z-10 overflow-hidden pointer-events-none'>
        <div className='absolute top-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob'></div>
        <div className='absolute top-40 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000'></div>
      </div>

      <div className='w-full max-w-md'>
        {/* Header - Logo & Title */}
        <div className='text-center mb-4'>
          <div className='inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg mb-2'>
            <span className='text-white font-bold text-lg'>CS</span>
          </div>
          <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>
            Creator Store
          </h1>
          <p className='text-sm text-gray-600 dark:text-gray-400'>
            Start your journey
          </p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSignup} className='bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 space-y-3 animate-slideUp'>
          {/* Error Message */}
          {error && (
            <div className='flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg animate-slideDown'>
              <Icon icon='solar:danger-bold' className='w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0' />
              <p className='text-sm text-red-600 dark:text-red-400'>{error}</p>
            </div>
          )}

          {/* Name Field */}
          <div>
            <label className='block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1'>
              Full Name
            </label>
            <div className='relative'>
              <Icon icon='solar:user-bold' className='absolute left-3 top-3 w-4 h-4 text-gray-400' />
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='John Doe'
                className='w-full pl-9 pr-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all'
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className='block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1'>
              Email Address
            </label>
            <div className='relative'>
              <Icon icon='solar:mailbox-bold' className='absolute left-3 top-3 w-4 h-4 text-gray-400' />
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='you@example.com'
                className='w-full pl-9 pr-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all'
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
                name='password'
                value={formData.password}
                onChange={handleChange}
                placeholder='••••••••'
                className='w-full pl-9 pr-10 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all'
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
              >
                <Icon icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} className='w-4 h-4' />
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className='block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1'>
              Confirm Password
            </label>
            <div className='relative'>
              <Icon icon='solar:lock-password-bold' className='absolute left-3 top-3 w-4 h-4 text-gray-400' />
              <input
                type={showConfirm ? 'text' : 'password'}
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder='••••••••'
                className='w-full pl-9 pr-10 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all'
              />
              <button
                type='button'
                onClick={() => setShowConfirm(!showConfirm)}
                className='absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
              >
                <Icon icon={showConfirm ? 'solar:eye-bold' : 'solar:eye-closed-bold'} className='w-4 h-4' />
              </button>
            </div>
          </div>

          {/* Terms */}
          <label className='flex items-start gap-2 cursor-pointer'>
            <input type='checkbox' className='w-4 h-4 rounded border-gray-300 accent-purple-600 mt-0.5' />
            <span className='text-xs text-gray-700 dark:text-gray-300'>
              I agree to the{' '}
              <Link href='/terms' className='text-purple-600 dark:text-purple-400 font-medium hover:underline'>
                Terms & Conditions
              </Link>
            </span>
          </label>

          {/* Signup Button */}
          <button
            type='submit'
            disabled={isLoading}
            className='w-full py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 flex items-center justify-center gap-2'
          >
            {isLoading ? (
              <>
                <Icon icon='eos-icons:loading' className='w-4 h-4' />
                <span>Creating account...</span>
              </>
            ) : (
              <>
                <Icon icon='solar:user-plus-bold' className='w-4 h-4' />
                <span>Create Account</span>
              </>
            )}
          </button>

          {/* Login Link */}
          <p className='text-center text-xs text-gray-600 dark:text-gray-400'>
            Already have an account?{' '}
            <Link href='/login' className='text-purple-600 dark:text-purple-400 font-semibold hover:underline'>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
