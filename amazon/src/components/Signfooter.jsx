import React from 'react'

const Signfooter = () => {
  return (
    <div className='flex gap-3 flex-col text-sm'>
        <ul className='flex list-none gap-7'>
            <li><a className='text-[#2a8fd7] hover:underline hover:text-[#0f5b91] transition-all duration-500' href=''>Conditions of Use</a>  </li>
            <li><a className='text-[#2a8fd7] hover:underline hover:text-[#0f5b91] transition-all duration-500' href=''>Privacy Notice</a>  </li>
            <li><a className='text-[#2a8fd7] hover:underline hover:text-[#0f5b91] transition-all duration-500' href=''>Help</a>  </li>
        </ul>
        <p>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
    </div>
  )
}

export default Signfooter