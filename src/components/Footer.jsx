import React from 'react'

export const Footer = () => {
  return (
    <div className='relative bottom-0  flex flex-col justify-center items-center py-4 md:py-8 bg-pink-400 hover:bg-pink-500'>
        <div className=' w-[90%] md:flex justify-center '>
            <p className='mx-3 text-center font-light text-white'>© 2023 Noam™. All Rights Reserved. </p>
            <p className='mx-3 text-center font-light text-white'> Powered By:<a href=""> Juanmacar</a></p>
        </div>
    </div>
  )
}
