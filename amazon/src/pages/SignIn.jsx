import React from 'react'
import Enter from '../components/Enter'
import Button from '../components/Button'
import Buy from '../components/Buy'
import img from '../assets/logo.png'
import Signfooter from '../components/Signfooter'

const SignIn = () => {
  return (
    <>
    <div className='flex justify-center items-center flex-col gap-4 py-3 '>
        {/* Image */}
        <div className='flex justify-center items-center'>
            <img className='w-[110px] h-[30px] cursor-pointer' src={img} alt="" />
            <p className='h-[35px] w-[28px]'>.in</p>
        </div>

        {/* Login Form */}
        <div className='h-[420px] w-[380px] border-[1px] px-[40px] py-4 rounded-xl border-[#d9d9d9]'>
            <h1 className='text-2xl font-bold mb-5'>Sign In</h1>
            <Enter/>
            <Button/>
            <Buy/>
        </div>

        {/* Footer */}
        <div className='w-screen'>
            <hr className='text-[#d9d9d9]' />
        </div>
        <Signfooter/>
    </div>
    </>
  )
}

export default SignIn