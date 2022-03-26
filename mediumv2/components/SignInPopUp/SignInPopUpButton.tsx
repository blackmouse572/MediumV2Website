import React from 'react'
import SignInPopUp from './SignInPopUp'

function SignInPopUpButton() {
    const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className='inline'>
        <button onClick={()=>setIsOpen(true)} className="text-green-600">
            Sign In
        </button>
        <SignInPopUp open={isOpen} onClose={()=>setIsOpen(false)}></SignInPopUp>
        
    </div>
  )
}

export default SignInPopUpButton