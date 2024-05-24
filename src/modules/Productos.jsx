import React from 'react'
import { Products } from '../components/Products'
import { productos as productoInicial } from '../js/productosNoam';

export const Productos = () => {



  return (
    <div className='flex  justify-center flex-wrap md:mt-[51px]'>
      <Products productos={productoInicial} />
    </div>
  )
}
