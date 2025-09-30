import React, { useState } from 'react'
import Enter from '../components/Enter'
import Button from '../components/Button'
import Buy from '../components/Buy'
import img from '../assets/logo.png'
import Signfooter from '../components/Signfooter'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  
  const navigate = useNavigate();

  // Form Input Checking
  const [form, setForm] = useState({
    name     : '',
    mobile   : "",
    password : '',
  })

  //Error Message
  const [error, setError] = useState("")

  const handleChanges = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  //Handle Submit
  const handleSubmit = () => {
    if(!form.name || !form.mobile || !form.password){
      setError("Please Enter in the fields!")
      return;
    }
    setError("")
  }

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

          <Enter label="Your Name" inpType="text" name='name'  onChange={handleChanges}/>
          <Enter label="Mobile Number" inpType="number" name='mobile' onChange={handleChanges}/>
          <Enter label="Password" inpType="password" name='password' onChange={handleChanges}/>

           {/* Error Message */}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <Button text="Verify Mobile Number" prop="mt-3 w-[300px] mb-3" onClick={handleSubmit}  to='/verify'/>

          <Buy des="By creating an Account or logged in" exc="Sign In" more='Already have an Account? ' sign='/' detail='Shop on Amazon Business' />
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
