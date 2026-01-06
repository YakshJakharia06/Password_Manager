import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white flex justify-between px-5 py-10 h-15 items-center'>
      <div className="logo text-2xl font-bold ">
        Password-Manager
      </div>
      
      <button className='flex hover:cursor-pointer gap-2 justify-between items-center px-2 py-1 border-2 rounded-full'>
        <img className='invert w-10' src="/github.png" alt="" />
        <span className='not-md:pr-5'>GitHub</span>
      </button>
    </nav>
  )
}

export default Navbar