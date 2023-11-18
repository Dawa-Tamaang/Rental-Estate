import React from 'react'
import { Link } from 'react-router-dom';
import Cover_Image from '../assets/images/coversignup.jpg'
import { FcGoogle } from "react-icons/fc";
export default function SignupPage() {
  return (
    <signuppage>
        <div className='max-w-screen-xl mx-auto flex items-start py-12'>
            <div className='relative w-1/2 h-[800px] flex flex-col'>  
                <div className='absolute inset-0 bg-black opacity-20 rounded-xl'></div>
                <img src={Cover_Image}  className="absolute w-full h-full object-cover mix-blend-overlay rounded-xl" alt="" />
                <div className='top-[20%] left-[10%] flex flex-col h-full items-start justify-start relative'>
                    <h1 className='text-4xl text-white font-bold my-4'>Turn Your Ideas into reality</h1>
                    <p className='text-xl text-white font-normal'>Start for free and get exciting offers from the community</p>
                </div>
            </div>
            <div className='w-1/2 h-full bg-white flex flex-col items-center gap-5 p-10  justify-between'>
                <h1 className='text-xl text-yellow-400 font-semibold'>Rental Estate</h1>
                <div className='w-full flex flex-col gap-3 max-w-[550px]'>
                    <div className='w-full flex flex-col items-center mb-2'>
                        <h3 className='text-3xl font-semibold mb-4'>Sign Up</h3>
                        <p className='tex-base mb-2'>Welcome back! Please enter your details.</p>
                    </div>
                    <div className='w-full flex flex-col'>
                        <input type="text" placeholder='Enter Your Full Name' 
                        className='w-full text-black py-2 my-2 bg-transparent border-b border-yellow-400 outline-none focus:outline-none' />
                        <input type="email" placeholder='Enter Your Email Address' 
                        className='w-full text-black py-2 my-2 bg-transparent border-b border-yellow-400 outline-none focus:outline-none' />
                        <input type="password" placeholder='Enter Your Mobile Number' 
                        className='w-full text-black py-2 my-2 bg-transparent border-b border-yellow-400 outline-none focus:outline-none' />
                        <input type="password" placeholder='Enter Your Password' 
                        className='w-full text-black py-2 my-2 bg-transparent border-b border-yellow-400 outline-none focus:outline-none' />
                    </div>
                    <div className='w-full flex flex-col gap-3 my-4'>
                        <button className='w-full text-white bg-yellow-400 rounded-md p-4 text-center flex items-center justify-center'>Sign Up</button>
                        <Link to='/login'>
                            <button className='w-full text-yellow-400 bg-white border-2 border-yellow-400 rounded-md p-4 text-center flex items-center justify-center'>Sign In</button>
                        </Link>
                        
                    </div>
                    <div className='w-full flex items-center justify-center relative py-2'>
                        <div className='w-full h-[1px] bg-black'></div>
                        <p className='text-lg absolute text-black/80 bg-white'>or</p>
                    </div>
                    <div className='w-full my-2 font-semibold bg-white border-2 border-yellow-400 rounded-md p-4 text-center flex items-center gap-2 justify-center'>
                        <FcGoogle/>
                        <Link to="/">
                        <h1 className='text-yellow-400'> Sign Up With Google</h1>
                        </Link>
                    </div>
                </div>
                <div className='w-full flex item-center justify-center'>
                    <p className='text-sm font-normal text-black'>If you have a account? 
                        <Link to='/login'>
                            <span className='font-semibold text-yellow-400 underline underline-offset-2 cursor-pointer'>Sign In </span>
                        </Link>
                    </p>
                </div>
            </div>  
        </div>
    </signuppage>
  )
}
