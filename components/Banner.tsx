import React from 'react'

function Banner() {
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto bg-yellow-400 border-neutral-400 border-y-2 py-10 lg:py-0">
        <div className="px-10 space-y-5">
            <h1 className="text-6xl max-w-xl font-serif">
                <span className='underline decoration-black font-medium'>
                    Medium
                </span> space to write, read, and connect
            </h1>
            <h3 className="max-w-xl">
                It&apos;s easy and free to post your thinking on any topic and connecting to millions of readers.
            </h3>
        </div>
        <div>
            <img className='hidden md:inline-flex h-32 lg:h-full' src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" alt = "Big M"/>
        </div>
    </div>
  )
}

export default Banner