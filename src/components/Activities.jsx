import React from 'react'
import resort from "../assets/Resort.avif"
import cruises from "../assets/Cruises.avif"
import exerusions from "../assets/Exerusions.avif"
const Activities = () => {
    return (
        <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
            <div className='relative p-4'>
                <h3 className='absolute z-5 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
                <img className='w-full h-full object-cover border-4 border-white shadow-lg'  src={resort} alt="/" />
            </div>
            <div className='relative p-4'>
                <h3 className='absolute z-5 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Cruises</h3>
                <img className='w-full h-full object-cover border-4 border-white shadow-lg'   src={cruises} alt="/" />
            </div>
            <div className='relative p-4'>
                <h3 className='absolute z-5 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Exerusions</h3>
                <img className='w-full h-full object-cover border-4 border-white shadow-lg'   src={exerusions} alt="/" />
            </div>
        </div>
    )
}

export default Activities