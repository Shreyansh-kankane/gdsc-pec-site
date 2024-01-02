
import React from 'react'
import Image from 'next/image'
import {TiTick} from 'react-icons/ti'
import {MdPendingActions} from 'react-icons/md'
import { FaRegTimesCircle } from 'react-icons/fa';



function ProposedEvents(props) {

    const {title, description, date, venue,imageSrc,organiser_1,organiser_2,status} = props.event;

    // const url = new URL(poster_link);

    // Remove the query parameter
    // url.search = '';

    // Get the modified URL
    // const modifiedImageUrl = url.toString();

    return (
        <div className='flex relative flex-col gap-3 p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg w-full md:w-[40%] lg:w-[32%] bg-slate-50 '>
            <div className={`absolute top-0 right-0 rounded-lg text-xl
                ${status === 'approved' && 'bg-green-200 text-green-600'}
                ${status === 'pending' && 'bg-yellow-200 text-yellow-600'}
                ${status === 'rejected' && 'bg-red-200 text-red-600'}
            `}> 
                <span> 
                    {status === 'approved' &&  <TiTick /> }
                    {status === 'pending' &&  <MdPendingActions /> }
                    {status === 'rejected' &&  <FaRegTimesCircle /> }
                </span>  
        </div>
            <Image src={imageSrc} height={300} width={300} className='w-full'  alt=''/>
            <h3 className='text-center font-semibold text-2xl'>{title}</h3>
            <p className='text-slate-500'>{description}</p>
            <div className='leading-7'>
                <p className='text-slate-500'>Date: {date}</p>
                <p className='text-sky-600'>Venue: {venue}</p>
                <p className='text-pink-600'>Organisers: {organiser_1 + ' ' }{organiser_2} </p>
            </div>
            <div className='flex justify-between'> 
                <div className='text-slate-700'>Request</div>
                {status === 'approved' ? (
                    <div className='bg-green-200 text-green-500'>Approved</div>
                ): (status === 'rejected' ? (<div className=' bg-red-200 text-red-500 '>Rejected</div>): (
                        <div className='bg-yellow-200 text-yellow-500'>Pending</div>
                    )
                )
            }
            </div>
        </div>
    )
}

export default ProposedEvents


{/* <div className='flex relative flex-col gap-3 p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg w-full md:w-[40%] lg:w-[32%] bg-slate-50 '>
            <div className={`absolute top-0 right-0 rounded-lg text-xl
                ${status === 'approved' && 'bg-green-200 text-green-600'}
                ${status === 'pending' && 'bg-yellow-200 text-yellow-600'}
                ${status === 'rejected' && 'bg-red-200 text-red-600'}
            `}> 
                <span> 
                    {status === 'approved' &&  <TiTick /> }
                    {status === 'pending' &&  <MdPendingActions /> }
                    {status === 'rejected' &&  <FaRegTimesCircle /> }
                </span>  
        </div>
            <Image src={imageSrc} height={300} width={300} className='w-full'  alt=''/>
            <h3 className='text-center font-semibold text-2xl'>{title}</h3>
            <p className='text-slate-500'>{description}</p>
            <div className='leading-7'>
                <p className='text-slate-500'>Date: {date}</p>
                <p className='text-sky-600'>Venue: {venue}</p>
                <p className='text-pink-600'>Organisers: {Organisers} </p>
            </div>
            <div className='flex justify-between'> 
                <div className='text-slate-700'>Request</div>
                {status === 'approved' ? (
                    <div className='bg-green-200 text-green-500'>Approved</div>
                ): (status === 'rejected' ? (<div className=' bg-red-200 text-red-500 '>Rejected</div>): (
                        <div className='bg-yellow-200 text-yellow-500'>Pending</div>
                    )
                )
            }
            </div>
        </div> */}