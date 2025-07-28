import React from 'react'
import Logo from './Logo'
const Footer = () => {
  return (
    <footer className='flex justify-between text-amber-50 bg-slate-800 p-4 fixed bottom-0 w-full'>
        <img src="trlogo.jpg" className='ml-1 w-7 h-7 rounded-full hover:scale-110 ' alt="Tanish Rane" />
        <div className="end flex items-center gap-2">
            <div className='flex'>Created With</div>
            <img className='w-5 h-5 mt-1 hover:scale-120 transition-all duration-200' src="heart.webp" alt="" />
            <div>By Tanish Rane </div>
        </div>
    </footer>

  )
}

export default Footer
