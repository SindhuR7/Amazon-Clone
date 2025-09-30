import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text,prop,onClick, to}) => {
  return (
    <>
    <button onClick={onClick}
     className={`h-[38px] w-[300px] flex justify-center items-center bg-[#ffd814] rounded-full ${prop} cursor-pointer hover:bg-[#f3cf1d] transition-all duration-200`}>
      <Link to={to}>{text}</Link></button>
    </>
  )
}

export default Button