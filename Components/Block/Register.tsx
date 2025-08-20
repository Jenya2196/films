"use client";
import React from 'react'
import Input from '../Buttons/Input';
import Button from '../Buttons/Button';

type Props = {
    exit: () => void;
}

function Register({exit}: Props) {
  return (
    <div className='fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black/70 '>
        
        <div className='flex flex-col items-center justify-center gap-4 bg-black/70 p-3 rounded-lg border border-gray-500/50 w-[300px]'>
            <div className='cursor-pointer relative left-5/12' onClick={exit}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <label>
                <p className='pb-1'>User name:</p>
                <Input type="text" placeholder='Username' />
            </label>
            <label>
                <p className='pb-1'>Password:</p>
                <Input type="password"/>
            </label>
           
            <Button variant="default">Register</Button>
            
        </div>

    </div>
  )
}

export default Register