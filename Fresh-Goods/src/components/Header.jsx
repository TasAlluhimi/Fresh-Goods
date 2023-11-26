import React from 'react'

function Header() {
  return (
    <div>
        <div className="bg-[url('https://lying-move-262.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F69d3b502-87ee-4689-8097-3171d8f07c07%2F55d7c998-fd67-4237-a21a-c7f9699e229a%2FScreen_Shot_2023-11-26_at_10.49.03_AM_cleanup.png?table=block&id=ed65f816-ff9e-43a2-a201-1c12a5fdd0dc&spaceId=69d3b502-87ee-4689-8097-3171d8f07c07&width=2000&userId=&cache=v2')] bg-no-repeat h-screen w-full max-sm:bg-cover max-sm:bg-center max-sm:h-[50rem]">

            <div className='h-[100%] w-[40rem] text-white py-20 px-20 max-sm:px-10  max-sm:w-[100%] max-sm:py-36'>
                <p className='text-4xl font-serif'>Fresh<span className='font-bold'>Goods</span></p>
                <p className='text-7xl mt-5 font-sans max-sm:text-5xl' style={{ overflow: 'hidden' }}>Concisely describe your product or service</p>
                <p className='mt-6'>No need to get clever. Tell People exactly what you're offering, then use this space to communicate your key value proposition.</p>
                <button className='rounded-sm bg-[rgb(255,180,0)] px-7 py-1 font-bold text-black mt-6'>ORDER NOW</button>
            </div>
        </div>
    </div>
  )
}

export default Header