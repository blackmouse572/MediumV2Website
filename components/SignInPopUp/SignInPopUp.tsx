import Link from 'next/link'
import React from 'react'

function SignInPopUp({ open, onClose }: { open: boolean, onClose: () => void }) {
  if (!open) return null
  return (

    <div>
      <div onClick={onClose} className='container-fluid bg-black bg-opacity-40 fixed top-0 right-0 left-0 bottom-0 backdrop-blur-sm'></div>

      <div className='bg-white space-y-5 py-7  px-5 drop-shadow-lg border-2  rounded-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-1/3 sm:w-1/2 w-3/4'>

        <form className='space-y-5'>
          <div>
            <h1 className='mx-auto text-yellow-500 text-3xl mb-4 font-bold'> LOGIN </h1>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between text-center space-y-2 md:space-x-10 md:space-y-0">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">

              <Link href="/" >
                <span className="font-medium text-yellow-600 hover:text-yellow-500">
                  Forgot your password?
                  </span>
              </Link>
            </div>
          </div>
          <div>

            <button
              type="submit"
              className="group relative w-full items-center flex justify-center 
              py-2 px-4 border border-transparent font-medium rounded-md 
              text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none 
              focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Login
              <span className='ml-1'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg></span>
            </button>
            
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignInPopUp