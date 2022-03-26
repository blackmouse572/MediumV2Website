import Link from 'next/link'
import React from 'react'
import Popup from 'reactjs-popup'
import SignInPopUpButton from './SignInPopUp/SignInPopUpButton'


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
                <button>About</button>
                <button>Contact</button>
                <button className="text-white bg-green-600 rounded-full px-4 py-1">Follow</button>
            </div>

        </div>
        <div className='flex items-center space-x-5'>
            <SignInPopUpButton/>
            <button className="text-green-600 border-green-600 border-2 rounded-full px-4 py-1">Get started</button>
        </div>
    </header>
  )
}

export default Navbar