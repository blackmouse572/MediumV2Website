import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <header className = 'flex justify-between max-w-7xl p-5 mx-auto'>
        <div className="flex items-center space-x-5">
            {/* Logo */}
            <Link href="/">
                <img className='w-44 object-contain cursor-pointer' src="https://links.papareact.com/yvf" alt="Medium V2 Logo"/>
            </Link>
            {/* Button */}
            <div className='hidden md:inline-flex items-center space-x-3'>
                <h3>About</h3>
                <h3>Contact</h3>
                <h3 className="text-white bg-green-600 rounded-full px-4 py-1">Follow</h3>
            </div>

        </div>
        <div className='flex items-center space-x-5'>
            <h3 className="text-green-600">Sign in</h3>
            <h3 className="text-green-600 border-green-600 border-2 rounded-full px-4 py-1">Get started</h3>
        </div>
    </header>
  )
}

export default Navbar