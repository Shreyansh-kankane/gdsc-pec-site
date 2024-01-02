
import React from 'react'
import Image from 'next/image'
import { TiTick } from 'react-icons/ti';
import { FaRegTimesCircle } from 'react-icons/fa';

function ApproveEvents(props) {

    const {title, description, date, venue,imageSrc,Organisers} = props.event;
  return (
    <div className='flex flex-col gap-3 p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg w-full md:w-[40%] lg:w-[32%] bg-slate-50 '>
        <Image src={imageSrc} height={300} width={300} className='w-full'  alt=''/>
        <h3 className='text-center font-semibold text-2xl'>{title}</h3>
        <p className='text-slate-500'>{description}</p>
        <div className='leading-7'>
          <p className='text-slate-500'>Date: {date}</p>
          <p className='text-sky-600'>Venue: {venue}</p>
          <p className='text-pink-600'>Organisers: {Organisers} </p>
        </div>
        <div className='flex justify-between'>
            <button className='p-3 flex items-center border rounded-md shadow-md hover:shadow-lg bg-green-200 text-green-600 hover:bg-green-300'>
                <span><TiTick /> </span>
                Approve</button>
            <button className='p-3 flex gap-1 items-center border rounded-md shadow-md hover:shadow-lg text-red-500  bg-red-200 hover:bg-red-300'>
                <span>{<FaRegTimesCircle /> }</span>
                Reject</button>
        </div>
    </div>
  )
}

export default ApproveEvents