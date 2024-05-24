import React from 'react'
import logo from '../images/logo.png'
import { Nav } from './Nav'
import { NavLink } from 'react-router-dom'


export const Header = () => {
    return (
        <header className='flex flex-col lg:flex-row lg:justify-around lg:items-center mb-5 md:mb-8'>
            <div className='  lg:w-1/6 p-2 '>
                <NavLink to='/'>
                    <img src={logo} alt="" />
                </NavLink>
            </div>
            <div className='flex justify-center lg px-[30%]'>
                <Nav />
            </div>
        </header>
    )
}
