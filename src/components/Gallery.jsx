import React from 'react'
import one from '../assets/1.avif'
import two from '../assets/2.avif'
import three from '../assets/3.avif'
import four from '../assets/4.avif'
import five from '../assets/5.avif'


const Gallery = () => {
    return (
        <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
            <h2 className='text-center text-gray-700'>Gallery</h2>
            <div className='grid sm:grid-cols-5 gap-4 '>
                <div className='sm:col-span-3 col-span-2 row-span-2'>
                    <img className='w-full h-full object-cover' src={one} alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src={two} alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src={three} alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src={four} alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src={five} alt="/" />
                </div>
                {/* <div className='sm:col-span-3 col-span-2 row-span-2'>
                    <img className='w-full h-full object-cover' src={one} alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src={two} alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src={three} alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src={four} alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src={five} alt="/" />
                </div> */}
            </div>
        </div>
    )
}

export default Gallery