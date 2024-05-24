import React from 'react'
import { productos } from '../js/productosNoam'

export const Productos = () => {



  return (
    <div className='flex  justify-center flex-wrap'>

      {
        productos.map(pro =>

          <div key={pro.id} className='flex flex-col items-center w-[45%] md:w-[25%] lg:w-[20%] m-1 lg:m-3 border-x-[1px] border-b-[1px] rounded-3xl border-t-[5px] border-pink-400'>
            <h1 className='text-center pt-3 lg:pt-5 '>{pro.nombre}</h1>
            <img className='w-[70%]' src={pro.img} alt={pro.nombre} />
            <h3 className='text-center'>{pro.precio} COP</h3>
          </div>
          
        )

      }
        
    </div>
  )
}
