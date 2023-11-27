import React from 'react'
import white from '../assets/white-img.png'


function FinalCall() {
  return (
    <>
        <div style={{ backgroundImage: `url(${white})` }} className="bg-no-repeat text-center h-screen bg-cover max-sm:bg-cover max-sm:bg-center max-sm:h-[50rem]">

<div className='flex flex-col justify-center items-center h-[100%] text-black max-sm:px-10 max-sm:py-36'>
<div className='text-7xl h-fit w-[40rem] max-sm:w-[100%] max-sm:text-4xl' style={{ overflow: 'hidden' }}>End with one final call to action</div>
<div className='mt-20 text-3xl w-[60%] max-sm:w-[90%] max-sm:text-xl max-sm:mt-10' style={{ overflow: 'hidden' }}>This is your last shot at converting someone. Remind them about the benefits of your offer and encourage them to act now.</div>
<button className='rounded-sm bg-[rgb(255,180,0)] px-7 py-1 font-bold text-black mt-10 max-sm:pb-3'>ORDER NOW</button>

</div>
</div>
    </>
  )
}

export default FinalCall