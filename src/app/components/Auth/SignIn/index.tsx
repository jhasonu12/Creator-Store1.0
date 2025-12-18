'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'
import SocialSignIn from '../SocialSignIn'
import Logo from '@/app/components/Layout/Header/Logo'
import Loader from '@/app/components/Common/Loader'
import { Icon } from '@iconify/react/dist/iconify.js'

const Signin = () => {
  const router = useRouter()

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    checkboxToggle: false,
  })
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const loginUser = (e: any) => {
    e.preventDefault()

    setLoading(true)
    signIn('credentials', { ...loginData, redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error(callback?.error)
          console.log(callback?.error)
          setLoading(false)
          return
        }

        if (callback?.ok && !callback?.error) {
          toast.success('Login successful')
          setLoading(false)
          router.push('/')
        }
      })
      .catch((err) => {
        setLoading(false)
        console.log(err.message)
        toast.error(err.message)
      })
  }

  return (
    <>
      {/* Animated Background */}
      <div className='fixed inset-0 -z-10 overflow-hidden'>
        {/* Gradient background */}
        <div className='absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/40 dark:to-slate-900'></div>
        
        {/* Animated blobs */}
        <div className='absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob dark:opacity-10'></div>
        <div className='absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 dark:opacity-10'></div>
        <div className='absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 dark:opacity-10'></div>
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
          <h1 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2'>
            Welcome Back
          </h1>
          <p className='text-gray-600 dark:text-gray-300 text-sm md:text-base'>
            Sign in to access your creator dashboard
          </p>
        </div>

        {/* Social Sign In */}
        <div className='animate-slideDown animation-delay-300'>
          <SocialSignIn />
        </div>

        {/* Divider */}
        <div className='flex items-center gap-3'>
          <div className='flex-1 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent'></div>
          <span className='text-gray-500 dark:text-gray-400 text-sm font-medium'>OR</span>
          <div className='flex-1 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent'></div>
        </div>

        {/* Sign In Form */}
        <form onSubmit={(e) => e.preventDefault()} className='space-y-4 animate-slideDown animation-delay-400'>
          {/* Email Input */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
              Email Address
            </label>
            <div className='relative group'>
              <Icon 
                icon='solar:mailbox-bold' 
                className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500 dark:text-blue-400 group-focus-within:text-purple-500 transition-colors'
              />
              <input
                type='email'
                placeholder='you@example.com'
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                className='w-full rounded-lg border border-blue-200 dark:border-blue-800/50 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm px-4 pl-11 py-3 text-base text-gray-900 dark:text-white outline-none transition placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:bg-white dark:focus:bg-slate-800'
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
                className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500 dark:text-blue-400 group-focus-within:text-purple-500 transition-colors'
              />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='••••••••'
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                className='w-full rounded-lg border border-blue-200 dark:border-blue-800/50 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm px-4 pl-11 pr-12 py-3 text-base text-gray-900 dark:text-white outline-none transition placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:bg-white dark:focus:bg-slate-800'
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500 transition-colors'
              >
                <Icon 
                  icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} 
                  className='w-5 h-5'
                />
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className='flex items-center justify-between'>
            <label className='flex items-center gap-2 cursor-pointer group'>
              <input
                type='checkbox'
                checked={loginData.checkboxToggle}
                onChange={(e) =>
                  setLoginData({ ...loginData, checkboxToggle: e.target.checked })
                }
                className='w-4 h-4 rounded border-2 border-blue-300 accent-blue-600 cursor-pointer'
              />
              <span className='text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors'>
                Remember me
              </span>
            </label>
            <Link
              href='/forgot-password'
              className='text-sm font-medium text-blue-600 hover:text-purple-600 dark:text-blue-400 dark:hover:text-purple-400 transition-colors'
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            onClick={loginUser}
            disabled={loading}
            type='submit'
            className='w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 flex items-center justify-center gap-2'
          >
            {loading ? (
              <>
                <Loader />
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <Icon icon='solar:login-2-bold' className='w-5 h-5' />
                <span>Sign In</span>
              </>
            )}
          </button>
        </form>

        {/* Sign Up Link */}
        <div className='text-center pt-4 animate-slideDown animation-delay-500'>
          <p className='text-gray-600 dark:text-gray-400 text-sm md:text-base'>
            Don&apos;t have an account?{' '}
            <Link href='/signup' className='font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity'>
              Sign Up
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

export default Signin
