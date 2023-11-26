import React from 'react'

function Feature(props) {
  return (
    <div>
        <div className='w-[20rem] text-center flex flex-col items-center mb-20'>
            <img className='h-fit' src={props.src} alt="" />
            <p className='mt-3 text-green-950 font-bold'>{props.title}</p>
            <p className='mt-3 text-green-950'>{props.des}</p>
        </div>
    </div>
  )
}

export default Feature