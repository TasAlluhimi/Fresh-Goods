import React from 'react'

function Offer(props) {
  return (
    <>
        <div className='w-[20rem] text-center flex flex-col items-center mb-20'>
            <img className='h-16' src={props.src} alt="" />
            <p className='mt-3 text-green-950 font-bold'>{props.title}</p>
            <p className='mt-3 text-green-950'>{props.des}</p>
        </div>
    </>
  )
}

export default Offer