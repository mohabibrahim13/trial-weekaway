import React from 'react'
import contact from '../assets/Contact.avif'
const Contact = () => {
    return (
        <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
            <h2 className='text-center text-gray-700'>Send us a message</h2>
            <p className='text-center text-gray-700'>We 're standing by!</p>
            <div className='grid md:grid-cols-2'>
                <img className='' src={contact} alt="" />
                <form>
                    <div className='grid grid-cols-2'>
                        <input className='border m-2 p-2' type="text" placeholder='first' />
                        <input className='border m-2 p-2' type="text" placeholder='last' />
                        <input className='border m-2 p-2' type="email" placeholder='email' />
                        <input className='border m-2 p-2' type="phone" placeholder='phone' />
                        <input className='border m-2 p-2 col-span-2 ' type="text" placeholder='Address' />
                        <textarea placeholder='Text' className='border col-span-2 m-2 p-2' cols="30" rows="10"></textarea>
                        <button className='col-span-2 m-2'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact