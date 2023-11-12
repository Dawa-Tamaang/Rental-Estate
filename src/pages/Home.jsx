import React from 'react'
import image from '../assets/images/homeimages/image6.jpg'

export default function Home() {
  return (
    <home>
        <div className="h-[500px] relative">
            <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded-md relative"
            />
            
                <div className="absolute bottom-5 w-full">
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
    </home>
  )
}
