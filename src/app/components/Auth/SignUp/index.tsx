'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import SocialSignUp from '../SocialSignUp'
import Logo from '@/app/components/Layout/Header/Logo'
import { useState } from 'react'
import Loader from '@/app/components/Common/Loader'
import { Icon } from '@iconify/react/dist/iconify.js'

const SignUp = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agree: false
  })

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (!formData.agree) {
      toast.error('Please agree to the terms and privacy policy')
      return
    }

    setLoading(true)
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success('Successfully registered')
        setLoading(false)
        router.push('/signin')
      })
      .catch((err) => {
        toast.error(err.message)
        setLoading(false)
      })
  }

  return (
    <>
      {/* Animated Background */}
      <div className='fixed inset-0 -z-10 overflow-hidden'>
        {/* Gradient background */}
        <div className='absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/40 dark:to-slate-900'></div>
        
        {/* Animated blobs */}
        <div className='absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob dark:opacity-10'></div>
        <div className='absolute top-0 -left-4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 dark:opacity-10'></div>
        <div className='absolute -bottom-8 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 dark:opacity-10'></div>
      </div>

      {/* Content Container */}
      <div className='relative z-10 space-y-6 animate-fadeIn'>
        {/* Logo */}
        <div className='mb-8 text-center mx-auto inline-block max-w-[180px] animate-slideDown'>
          <div className='bg-white dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20'>
            <Logo />
          </div>
        </div>

        {/* Welcome Text */}
        <div className='text-center mb-8 animate-slideDown animation-delay-200'>
          <h1 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-2'>
            Join Creator Store
          </h1>
          <p className='text-gray-600 dark:text-gray-300 text-sm md:text-base'>
            Start building your digital storefront today
          </p>
        </div>

        {/* Social Sign Up */}
        <div className='animate-slideDown animation-delay-300'>
          <SocialSignUp />
        </div>

        {/* Divider */}
        <div className='flex items-center gap-3'>
          <div className='flex-1 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent'></div>
          <span className='text-gray-500 dark:text-gray-400 text-sm font-medium'>OR</span>
          <div className='flex-1 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent'></div>
        </div>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className='space-y-4 animate-slideDown animation-delay-400'>
          {/* Name Input */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
              Full Name
            </label>
            <div className='relative group'>
              <Icon 
                icon='solar:user-bold' 
                className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-500 dark:text-purple-400 group-focus-within:text-pink-500 transition-colors'
              />
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='John Doe'
                required
                className='w-full rounded-lg border border-purple-200 dark:border-purple-800/50 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm px-4 pl-11 py-3 text-base text-gray-900 dark:text-white outline-none transition placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 focus:bg-white dark:focus:bg-slate-800'
              />
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
              Email Address
            </label>
            <div className='relative group'>
              <Icon 
                icon='solar:mailbox-bold' 
                className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-500 dark:text-purple-400 group-focus-within:text-pink-500 transition-colors'
              />
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='you@example.com'
                required
                className='w-full rounded-lg border border-purple-200 dark:border-purple-800/50 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm px-4 pl-11 py-3 text-base text-gray-900 dark:text-white outline-none transition placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 focus:bg-white dark:focus:bg-slate-800'
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
              Password
            </label>
            <div className='relative group'>
              <Icon 
                icon='solar:lock-bold' 
                className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-500 dark:text-purple-400 group-focus-within:text-pink-500 transition-colors'
              />
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                value={formData.password}
                onChange={handleChange}
                placeholder='••••••••'
                required
                className='w-full rounded-lg border border-purple-200 dark:border-purple-800/50 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm px-4 pl-11 pr-12 py-3 text-base text-gray-900 dark:text-white outline-none transition placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 focus:bg-white dark:focus:bg-slate-800'
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-500 transition-colors'
              >
                <Icon 
                  icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} 
                  className='w-5 h-5'
                />
              </button>
            </div>
          </div>

          {/* Terms Agreement */}
          <label className='flex items-start gap-3 cursor-pointer group'>
            <input
              type='checkbox'
              name='agree'
              checked={formData.agree}
              onChange={handleChange}
              className='w-5 h-5 rounded border-2 border-purple-300 accent-purple-600 cursor-pointer mt-0.5 flex-shrink-0'
            />
            <span className='text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors'>
              I agree to the{' '}
              <a href='/#' className='text-purple-600 hover:text-pink-600 dark:text-purple-400 dark:hover:text-pink-400 font-medium'>
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href='/#' className='text-purple-600 hover:text-pink-600 dark:text-purple-400 dark:hover:text-pink-400 font-medium'>
                Terms of Service
              </a>
            </span>
          </label>

          {/* Sign Up Button */}
          <button
            type='submit'
            disabled={loading}
            className='w-full py-3 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/50 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 flex items-center justify-center gap-2'
          >
            {loading ? (
              <>
                <Loader />
                <span>Creating account...</span>
              </>
            ) : (
              <>
                <Icon icon='solar:user-check-bold' className='w-5 h-5' />
                <span>Create Account</span>
              </>
            )}
          </button>
        </form>

        {/* Sign In Link */}
        <div className='text-center pt-4 animate-slideDown animation-delay-500'>
          <p className='text-gray-600 dark:text-gray-400 text-sm md:text-base'>
            Already have an account?{' '}
            <Link href='/signin' className='font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity'>
              Sign In
            </Link>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-500 {
          animation-delay: 500ms;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </>
  )
}

export default SignUp
