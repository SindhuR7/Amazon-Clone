import React from 'react'

const Buy = ({des}) => {
  return (
    <>
    <div className='text-sm w-[300px] gap'>
    <p className=' text-[#656565] mb-5'>{des}, you agree to Amazon's <a className='text-[#2a8fd7] underline' href=''>Conditions of Use</a> and <a className='text-[#2a8fd7] underline' href=''>Privacy Notice</a></p>
    <p className='text-[#2a8fd7] hover:underline mb-5 hover:text-[#0f5b91] transition-all duration-500'><a href=''> Need help</a></p>
    <hr className='text-[#d9d9d9]' />
    <h2 className='text-[18px] font-semibold mt-5'>Buying for work</h2>
    <a className='text-[#2a8fd7] hover:underline hover:text-[#0f5b91] transition-all duration-500' href=''>Create a free Business Account</a>
    </div>
    </>
  )
}

export default Buy