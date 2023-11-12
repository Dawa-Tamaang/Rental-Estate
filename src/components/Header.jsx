import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <nav className="flex items-center justify-between py-5">
            <div className='flex gap-5 flex-wrap text-center'>
                <Link to='/'>
                    <h1 className="text-xl md:text-2xl font-bold">Rental Estate</h1>
                </Link>
                <form className='border border-solid border-gray-300 rounded-md flex items-center pr-4 pl-4 pb-2 pt-2'>
                    <input type="text" className='bg-transparent focus:outline-none w-28 sm:w-64 md:w-96 md:w-110 ' placeholder='Enter an address, town or property ID' />
                    <button className='pl-7'>
                        <FaSearch className='text-slate-600' />
                    </button>
                </form>
            </div>
            <div className='flex gap-5 flex-wrap text-center'>
                <ul className="flex items-center space-x-5 text-xs md:text-base">
                    <Link to='/for-buy'>
                        <li className='hover:text-yellow-400'>Buy</li>
                    </Link>
                    <Link to='/for-rent'>
                        <li className='hover:text-yellow-400'>Rent</li>
                    </Link>
                    <Link to='/agencies'>
                        <li className='hover:text-yellow-400'>Agencies</li>
                    </Link>
                    <Link to='/unit-converter'>
                    <li className='hover:text-yellow-400'>Unit Converter</li>
                    </Link>
                    <Link to='/for-nrn'>
                        <li className='hover:text-yellow-400 font-medium'>For NRNs</li>
                    </Link>
                </ul>
                <button className="bg-yellow-400 hover:bg-yellow-600 text-white px-5 py-2 rounded-xl text-xs md:text-base">Post Property Free</button>
                <button className="border border-solid border-gray-300 px-5 py-2 rounded-xl text-xs md:text-base">Login / Signup</button>
            </div>
        </nav>
    </header>
  )
}
