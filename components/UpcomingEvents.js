
import React from 'react'
import Image from 'next/image'

function UpcomingEvents(props) {

    const {title, description, date, venue,imageSrc,Organisers,status} = props.event;

    return (
            (<div className='flex relative flex-col gap-3 p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg w-full md:w-[40%] lg:w-[32%] bg-slate-50 '>
                <Image src={imageSrc} height={300} width={300} className='w-full'  alt=''/>
                <h3 className='text-center font-semibold text-2xl'>{title}</h3>
                <p className='text-slate-500'>{description}</p>
                <div className='leading-7'>
                    <p className='text-slate-500'>Date: {date}</p>
                    <p className='text-sky-600'>Venue: {venue}</p>
                    <p className='text-pink-600'>Organisers: {Organisers} </p>
                </div>
            </div>)
    )
}

export default UpcomingEvents