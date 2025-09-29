import React from 'react'

const Enter = () => {
  return (
    <>
    <div className='flex flex-col'>
        <label className='text-sm font-semibold mb-3' htmlFor="email">Email or mobile phone number</label>
        <input className='rounded-sm border-[1px] h-[40px] w-[300px] mb-4 active:border-[#3281b9] active:text-[#3281b900]' type="email" />
    </div>
    </>
  )
}

export default Enter