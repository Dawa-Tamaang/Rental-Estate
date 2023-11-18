import React from 'react'
import {BsSuitHeart} from 'react-icons/bs'
import {IoBedOutline,IoLocationOutline} from 'react-icons/io5'
import {GiBathtub,GiHomeGarage} from 'react-icons/gi'
import {AiOutlineDoubleRight} from 'react-icons/ai'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import image from '../assets/images/homeimages/image6.jpg'
import homesale from '../assets/images/CategorySection/Home_Sale.png'
import homerent from '../assets/images/CategorySection/Home_Rent.png'
import homelist from '../assets/images/CategorySection/Home_Listed.png'
import house1 from '../assets/images/products/house1.jpg'
import house2 from '../assets/images/products/house2.jpg'
import house3 from '../assets/images/products/house3.jpg'
import house4 from '../assets/images/products/house4.jpg'
import house5 from '../assets/images/products/house5.jpg'
import house6 from '../assets/images/products/house6.jpg'
import house7 from '../assets/images/products/house12.jpg'
import house8 from '../assets/images/products/house13.jpg'
import house9 from '../assets/images/products/house14.jpg'
import ListingItems from '../components/ListingItems'
import CategorySlider from '../components/CategorySlider'

export default function Home() {
  return (
    <home >
        <div className="h-[500px] relative">
            <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded-md relative"
            />
        <div className="absolute bottom-5 w-full ">
            {/* <div className='w-11/12 xl:w-4/5 m-auto gap-11'>
                <div className='text-black font-bold text-3xl lg:text-6xl'>
                    Looking For A Property? <br />
                </div>
                <div className='text-white text-xs sm:text-sm'>
                    Search your dream home on Nepal’s largest property marketplace
                </div>
            </div> */}
                <div className=" bg-white w-11/12 xl:w-4/5 m-auto grid grid-cols-2 lg:flex justify-between items-center p-5 drop-shadow-2xl md:space-x-5 md:rounded-md">
                
                    <div className=" flex flex-col space-y-2 ">
                        <label htmlFor="location">Location</label>
                        <input type="text" placeholder="USA" className="outline-0 text-xs"/>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="property">property type</label>
                        <input type="text" placeholder="property" className="outline-0 text-xs"/>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="price">Max Price</label>
                        <input type="text" placeholder="$8,544" className="outline-0 text-xs"/>
                    </div>
                    <div>
                        <button className="bg-yellow-400 px-5 py-2 mt-5 md:mt-0 md:rounded-full">Search</button>
                    </div>
                </div>
            </div>
        </div>
        {/* listing our services for list, sale and rent start*/}
        <div className='max-w-screen-xl mx-auto py-10'>
            <div className='flex justify-center'>
                <div className='deals grid gap-16 2xl:grid-cols-3 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10'>
                    <div className=' deal h-[350px]'>
                        <div className='bg-white overflow-hidden items-center rounded-lg w-full sm:w-[330px]'>
                            <div className='relativex h-48'>
                                <img
                                src={homesale}
                                alt='listing cover'
                                className='w-full h-full object-cover rounded-t-xl'
                                />
                            </div>
                            <div className='p-3 flex flex-col gap-2 w-full items-center'>
                            <p className='font-bold truncate text-lg text-black'>
                                Buy a home
                            </p>
                            <p className='text-sm text-gray-600 line-clamp-3 text-center'>
                                with over 200 listing for sale available, xyz estate can match you with a property you will want 
                            </p>
                            <button className='bg-yellow-400 w-50 sm:w-80 text-white p-3 rounded-lg uppercase hover:opacity-95'>
                                Find a Home
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className=' deal h-[350px]'>
                        <div className='bg-white overflow-hidden items-center rounded-lg w-full sm:w-[330px]'>
                            <div className='relative h-48'>
                                <img
                                src={homerent}
                                alt='listing cover'
                                className='w-full h-full object-cover rounded-t-xl'
                                />
                            </div>
                            <div className='p-3 flex flex-col gap-2 w-full items-center'>
                            <p className='font-bold truncate text-lg text-black'>
                                Buy a Rent
                            </p>
                            <p className='text-sm text-gray-600 line-clamp-3 text-center'>
                                with over 200 listing for sale available, xyz estate can match you with a property you will want 
                            </p>
                            <button className='bg-yellow-400 w-50 sm:w-80 text-white p-3 rounded-lg uppercase hover:opacity-95'>
                                Find a Rent
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className='deal h-[350px]'>
                        <div className='bg-white overflow-hidden rounded-lg w-full sm:w-[330px]'>
                            <div className='relative h-48'>
                                <img
                                src={homelist}
                                alt='listing cover'
                                className='w-full h-full object-cover rounded-t-xl'
                                />
                            </div>
                            <div className='p-3 flex flex-col gap-2 w-full items-center'>
                            <p className='font-bold truncate text-lg text-black'>
                                Add Your Listing
                            </p>
                            <p className='text-sm text-gray-600 line-clamp-3 text-center'>
                                Reach the largest audience of home shoppers with free xyz estate listing or select best 
                            </p>
                            <button className='bg-yellow-400 w-50 sm:w-80 text-white p-3 rounded-lg uppercase hover:opacity-95'>
                                Post Property free
                            </button>
                            </div>
                        </div>
                    </div>               
                </div>
            </div>
        </div>
        {/* listing our services for list, sale and rent end*/}
        {/* Create Properties to Buy or Rent start*/}
        <CategorySlider/>

        {/* Create Properties to Buy or Rent end*/}

        {/* listing our services for list, sale and rent start*/}
        <div className='max-w-screen-xl mx-auto'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-4xl font-bold'>Premium Properties in Nepal</h1>
                    <p className='text-base font-normal '>Browse beautiful properties with all the comforts of home, plus more</p>
                </div>
                <div className='flex justify-center py-5'>
                    <button className='bg-yellow-200 px-5 py-2 rounded-md text-xl flex items-center space-x-2'><span>View More</span> <AiOutlineDoubleRight/></button>
                </div>
            </div>

            <div className="deals grid 2xl:grid-cols-3 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10">
                <ListingItems/>
                <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                    <div className='relative h-[60%]'>
                        <img src={house1} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                        <div className='absolute top-0 right-0 p-4'>
                            <BsSuitHeart size={"1.5rem"} className="text-white"/>
                        </div>
                    </div>
                    <div className='p-4 space-y-4'>
                    <div className='flex space-x-5 items-center'>
                        <div className='flex items-center space-x-1'>
                            <IoBedOutline/>
                            <p className='text-sm text-gray-400'>5 bed</p>
                        </div>
                        <div className='flex items-center space-x-1'>
                        <GiBathtub/>
                        <p className='text-sm text-gray-400'>3 bat</p>
                        </div>
                        <div className='flex items-center space-x-1'>
                        <GiHomeGarage/>
                            <p className='text-sm text-gray-400'>1 gar</p>
                        </div>
                    </div>
                    <h1 className='text-2xl font-semibold'>$110,000</h1>
                    <div className='flex items-center space-x-2'>
                    <IoLocationOutline/>
                    <p className='text-sm text-gray-600'>Kissimmee.Florida US</p>
                    </div>
                    </div>

                </div>
                <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                    <div className='relative h-[60%]'>
                    <img src={house2} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                    <div className='absolute top-0 right-0 p-4'>
                        <BsSuitHeart size={"1.5rem"} className="text-white"/>
                    </div>
                    </div>
                    <div className='p-4 space-y-4'>
                    <div className='flex space-x-5 items-center'>
                        <div className='flex items-center space-x-1'>
                            <IoBedOutline/>
                            <p className='text-sm text-gray-400'>5 bed</p>
                        </div>
                        <div className='flex items-center space-x-1'>
                        <GiBathtub/>
                        <p className='text-sm text-gray-400'>3 bat</p>
                        </div>
                        <div className='flex items-center space-x-1'>
                        <GiHomeGarage/>
                            <p className='text-sm text-gray-400'>1 gar</p>
                        </div>
                    </div>
                    <h1 className='text-2xl font-semibold'>$70,000</h1>
                    <div className='flex items-center space-x-2'>
                    <IoLocationOutline/>
                    <p className='text-sm text-gray-600'>Petra,Spain</p>
                    </div>
                    </div>

                </div>
                <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                    <div className='relative h-[60%]'>
                    <img src={house3} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                    <div className='absolute top-0 right-0 p-4'>
                        <BsSuitHeart size={"1.5rem"} className="text-white"/>
                    </div>
                    </div>
                    <div className='p-4 space-y-4'>
                    <div className='flex space-x-5 items-center'>
                        <div className='flex items-center space-x-1'>
                            <IoBedOutline/>
                            <p className='text-sm text-gray-400'>5 bed</p>
                        </div>
                        <div className='flex items-center space-x-1'>
                        <GiBathtub/>
                        <p className='text-sm text-gray-400'>3 bat</p>
                        </div>
                    
                    </div>
                    <h1 className='text-2xl font-semibold'>$42,000</h1>
                    <div className='flex items-center space-x-2'>
                    <IoLocationOutline/>
                    <p className='text-sm text-gray-600'>Ia Molas,Italy</p>
                    </div>
                    </div>

                </div>
            </div>
        </div>
        {/* listing our services for list, sale and rent end*/}

    </home>
  )
}
