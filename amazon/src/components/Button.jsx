import React from 'react'

const Button = ({text,prop}) => {
  return (
    <>
    <button className={`h-[38px] w-[300px] flex justify-center items-center bg-[#ffd814] rounded-full ${prop} cursor-pointer hover:bg-[#f3cf1d] transition-all duration-200`}>{text}</button>
    </>
  )
}

export default Button