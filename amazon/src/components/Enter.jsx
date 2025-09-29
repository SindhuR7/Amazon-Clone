import React from 'react'

const Enter = ({label, inpType,className, clas}) => {
  return (
    <>
    <div className='flex flex-col'>
        <label className={`text-sm font-semibold ${clas} `} htmlFor="email">{label}</label>
        <input className={`rounded-sm border-[1px] h-[40px] w-[300px] ${className} active:border-[#3281b9] active:text-[#3281b900]`} type={inpType} />
    </div>
    </>
  )
}

export default Enter