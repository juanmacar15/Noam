import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className=' flex justify-around'>
        <p className='mx-[10px] text-xl'>
          <NavLink className={({isActive}) => isActive ? 'border-b-4 border-pink-500 font-semibold' : null } to='/' >Inicio</NavLink>
          </p>
        <p className='mx-[10px] text-xl'>
        <NavLink className={({isActive}) => isActive ? 'border-b-4 border-pink-500 font-semibold' : null } to='/productos' >Productos</NavLink>
        </p>
        <p className='mx-[10px] text-xl'>
        <NavLink className={({isActive}) => isActive ? 'border-b-4 border-pink-500 font-semibold' : null } to='/categorias' >Categorias</NavLink>
        </p>
    </nav>
  )
}
