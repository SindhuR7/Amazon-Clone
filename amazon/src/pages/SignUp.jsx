import React from 'react'
import Enter from '../components/Enter'
import Button from '../components/Button'
import Buy from '../components/Buy'
import img from '../assets/logo.png'
import Signfooter from '../components/Signfooter'

const SignUp = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-4 py-3 px-4">
        {/* Logo */}
        <div className="flex justify-center items-center">
          <img
            className="w-[100px] sm:w-[120px] cursor-pointer"
            src={img}
            alt="logo"
          />
          <p className="h-[35px] w-[28px] text-lg">.in</p>
        </div>

        {/* Form Container */}
        <div className="
          border border-[#d9d9d9] 
          px-6 py-5 
          rounded-xl 
          shadow-sm
        ">
          <h1 className="text-xl sm:text-2xl font-bold mb-5">
            Create Account
          </h1>

          <Enter label="Your Name" inpType="text" />
          <Enter label="Mobile Number" inpType="number" />
          <Enter label="Password" inpType="password" />

          <Button text="Verify Mobile Number" prop="mt-3 w-[300px] mb-3" />

          <Buy des="By creating an Account or logged in" exc="Sign In" more='Already have an Account? ' sign='/signIn' detail='Shop on Amazon Business' />
        </div>

        {/* Footer */}
        <div className="w-full max-w-md">
          <hr className="text-[#d9d9d9]" />
        </div>
        <Signfooter />
      </div>
    </>
  )
}

export default SignUp
