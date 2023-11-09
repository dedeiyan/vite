import React from 'react'

function Banner() {
  return (
    <div className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap--28 item-center'>
        <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start item-center text-white'>
            <h1 className='text-[52px] font-semibold mb-8 leading-normal'>Hello <span className='text-primaryGreen'> World </span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eligendi pariatur exercitationem veniam, saepe placeat ipsam, possimus, fugiat voluptatibus explicabo adipisci laudantium ut distinctio? Nobis ipsa et sed quas sequi.</p>
            <div className='flex mt-8 gap-2'>
                <div className='flex items-center justify-center'>
                    <div className='flex space-x-2'>
<a href="" className=''></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner