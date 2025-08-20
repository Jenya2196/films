"use client"
import Link from 'next/link'
import React from 'react'
import Register from '../Block/Register'

type Props = {}

function Header({}: Props) {
    const [open, setOpen] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <div className='bg-white/10 w-full sticky top-0 left-0 z-10 backdrop-blur-sm '>
            <div className='flex items-center justify-between py-2 px-10 sm:px-20'>
                <div>
                    <Link href="/" className='flex items-center gap-2'>
                        <h1 className='text-2xl font-bold'>Films Treiler</h1>
                    </Link>
                </div>
                <div className='hidden lg:flex items-center gap-4 text-lg font-semibold '>
                    <Link href="/" className='hover:text-blue-500 transition-all duration-300 ease-in-out'>Новинки</Link>
                    <Link href="/popular" className='hover:text-blue-500 transition-all duration-300 ease-in-out'>Популярные</Link>
                    <Link href="/toprated" className='hover:text-blue-500 transition-all duration-300 ease-in-out'>Топ</Link>
                    <Link href="/treidingtoday" className='hover:text-blue-500 transition-all duration-300 ease-in-out'>Тренды дня</Link>
                    <Link href="/treidingthisweek" className='hover:text-blue-500 transition-all duration-300 ease-in-out'>Тренды недели</Link>
                </div>
                <div className='flex lg:hidden items-center gap-4 text-lg font-semibold'>
                    <div className="relative flex lg:hidden items-center gap-4 text-lg font-semibold">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="px-3 py-2 text-white rounded-md cursor-pointer"
                        >
                            Категории
                        </button>

                        {isMobileMenuOpen && (
                            <div className="absolute top-full mt-1 left-0 bg-black/80 shadow-md rounded-md w-48 z-50">
                                <ul className="flex flex-col">
                                    <li>
                                        <Link href="/"  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="block px-4 py-2 hover:bg-blue-500">Новинки</Link>
                                    </li>
                                    <li>
                                        <Link href="/popular" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="block px-4 py-2 hover:bg-blue-500">Популярные</Link>
                                    </li>
                                    <li>
                                        <Link href="/toprated" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="block px-4 py-2 hover:bg-blue-500">Топ</Link>
                                    </li>
                                    <li>
                                        <Link href="/treidingtoday" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="block px-4 py-2 hover:bg-blue-500">Тренды дня</Link>
                                    </li>
                                    <li>
                                        <Link href="/treidingthisweek" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="block px-4 py-2 hover:bg-blue-500">Тренды недели</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                        </div>
                </div>
                <div>
                    <div 
                        className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 ease-in-out cursor-pointer'
                        onClick={() => setOpen(true)}
                    >
                        Register
                    </div>
                    {open && <Register exit={()=>{setOpen(false)}}/>}
                </div>
            </div>
        </div>
    )
}

export default Header