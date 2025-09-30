import React from 'react'

const Enter = ({label, inpType,name, onChange }) => {
  return (
    <>
    <div className='flex flex-col'>
        <label className={`text-sm font-semibold  `} htmlFor="email">{label}</label>
        <input className={`rounded-sm border-[1px] h-[40px] w-[300px] active:border-[#3281b9] active:text-[#3281b900]`} type={inpType} name={name} onChange={onChange} />
    </div>
    </>
  )
}

export default Enter