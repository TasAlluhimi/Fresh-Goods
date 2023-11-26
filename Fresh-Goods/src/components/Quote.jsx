import React from 'react'
import grey from '../assets/grey-img.png'
import some1 from '../assets/some1.png'

function Quote() {
  return (
    <div>
        <div style={{ backgroundImage: `url(${grey})` }} className="bg-no-repeat  text-center h-screen bg-cover max-sm:bg-cover max-sm:bg-center max-sm:h-[50rem]">

<div className='flex flex-col justify-center items-center h-[100%] text-white max-sm:px-10  max-sm:w-[100%] max-sm:py-36'>
    <p className='text-xl font-bold font-sans' style={{ overflow: 'hidden' }}>What our customers say</p>
    <p className='text-yellow-500 font-bold text-4xl font-mono mt-10' style={{ overflow: 'hidden' }}>"</p>
    <p className='mt-9 text-4xl transform -skew-x-12 font-serif max-sm:text-lg' style={{ overflow: 'hidden' }}>Share a real testimonial that hits some of your benefits (but isn't too sales-y).</p>
    <img className='mt-16 max-sm:w-40' src={some1} alt="" />
    <p className='mt-3 font-bold max-sm:text-lg'style={{ overflow: 'hidden' }}>Real name</p>
    <p className='font-bold text-lg' style={{ overflow: 'hidden' }}>Location</p>
    <img className='w-16 max-sm:w-20' src="https://freesvg.org/img/16231558095-star-rating.png" alt="" />
</div>
</div>
    </div>
  )
}

export default Quote