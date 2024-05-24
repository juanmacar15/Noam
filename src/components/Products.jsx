import React from 'react'
import { productos } from '../js/productosNoam'

export const Products = () => {
  return (
    <>
        {
        productos.map(pro =>

          <div key={pro.id} className='flex flex-col items-center w-[40%] md:w-[25%] lg:w-[15%] m-4 md:m-8  rounded-3xl border-t-[5px] border-pink-400 shadow-2xl hover:shadow-pink-400'>
            <h1 className='text-center pt-3 lg:pt-5 '>{pro.nombre}</h1>
            <img className='w-[70%]' src={pro.img} alt={pro.nombre} />
            <h3 className='text-center'>{pro.precio} COP</h3>
          </div>
          
        )
      }
    </>
  )
}
