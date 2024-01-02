'use client'

import React from 'react'
import ChartOne from '@/components/Chart.jsx'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'

export default function page() {

  return (
    <>
    <div className='flex lg:flex-row flex-col w-[90%] min-h-[50vh] justify-center items-center gap-2 m-4 mx-auto'>

        {/* profile */}
        <div className='flex flex-col w-full lg:w-2/3 bg-white border rounded-2xl'>

          {/* profile items */}
          <div className='flex flex-col md:flex-row items-center w-full p-4'>
            <div className='lg:w-[40%] w-[50%] flex justify-center items-center mb-4'>
              <img src={'/gentlemen.png'} alt='img' style={{height:'80%', borderRadius:'100%' }} />
            </div>
            <div className='ml-4 flex flex-col justify-center lg:items-start items-center leading-8'>
              <h1 className='text-3xl lg:text-4xl text-sky-400 text-center'>Welcome!</h1>
              <h1 className='text-5xl font-bold text-center'>
                <Typewriter
                  options={{cursor:''}}
                  onInit={(typewriter) => {
                  typewriter.typeString('Abhi')
                  .start()
                }}
              /></h1>
              <p className='text-lg text-slate-500'>GDSC Member</p>
            </div>
          </div>

          {/* wave */}
          <div className='w-full overflow-hidden'>
            <svg style={{width:'100%'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,224L30,234.7C60,245,120,267,180,240C240,213,300,139,360,117.3C420,96,480,128,540,128C600,128,660,96,720,122.7C780,149,840,235,900,245.3C960,256,1020,192,1080,186.7C1140,181,1200,235,1260,240C1320,245,1380,203,1410,181.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
          </div>
        </div>  

        {/* leader board */}
        <div className='flex flex-col w-full lg:w-1/3 h-[60vh] justify-center items-center gap-3 border shadow-lg bg-white rounded-xl'>
            <Image src={'/assets/gdsc_logo.png'} height={100} width={100} className='h-[105px] rounded-full border'/>
            <h1 className='text-4xl font-semibold text-center'>Your Points</h1>
            <h1 className='text-8xl font-bold text-sky-700 shadow-lg'>76</h1>
            <p className='text-sky-400 text-center'>Lorem ipsum dolor sit amet.</p>
        </div> 
    </div>


     <div className="flex flex-col w-[90%] min-h-[50vh] items-center justify-center mx-auto">
        <ChartOne />
      </div>
    </>
  )
}
