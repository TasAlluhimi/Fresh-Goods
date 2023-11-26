import React from 'react'

function MyFooter() {
  return (
    <div>
        <div className='bg-[rgb(48,48,48)] flex justify-between items-center px-20 py-3 max-sm:flex-col max-sm:items-center max-sm:p-10 max-sm:gap-5'>
        <div className='text-4xl font-serif text-white'>Fresh<span className='font-bold'>Goods</span></div>
        <div className='text-white'>@ 2023 Tasneem. All rights reserved.</div>
        </div>
    </div>
  )
}

export default MyFooter