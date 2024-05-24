import React from 'react'
import frase from '../images/frase.png'
import { Products } from '../components/Products'

export const Inicio = () => {
    return (
        <div className='' >
            <section className='mx-[10%] py-5'>
                <img className='w-full hover:scale-105 duration-200' src={frase} alt="" />
            </section>
            <div className='flex justify-center flex-wrap'>
                <Products/>
            </div>
        </div>
    )
}
