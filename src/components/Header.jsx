import React from 'react'
import logo from '../images/logo.png'
import { Nav } from './Nav'


export const Header = () => {
    return (
        <header className='flex flex-col lg:flex-row lg:justify-around lg:items-center border-b-[1px] border-black'>
            <div className='  lg:w-1/6 p-2 bg-slate-500'>
                <img src={logo} alt="" />
            </div>
            <div className='flex justify-center lg px-[30%]'>
                <Nav />
            </div>
        </header>
    )
}
