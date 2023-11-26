import React from 'react'
import w from '../assets/woman.png'

function More() {
  return (
    <>
        <div className='flex justify-center items-center my-24 flex-wrap'>
            <div className='h-fit max-sm:order-2 max-sm:mt-10'>
            <img src={w} alt="" />
            </div>
            
            <div className='w-[30%] p-2 h-fit max-sm:w-[80%] mt-5 max-sm:order-1'>
                <div className='text-5xl text-green-950' style={{ overflow: 'hidden' }}>Some more information about your business</div>
                <div className='mt-5 text-green-950'>Share a little bit about yourself as a business owner, or maybe describe what makes your product or service unique. Give visitors one more reason to care about yout offer and want to buy from you.</div>
            </div>
            
        </div>
    </>
  )
}

export default More