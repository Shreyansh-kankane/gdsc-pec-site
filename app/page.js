import React, { Fragment } from 'react'
import Image from 'next/image'
import UpcomingEvents from '@/components/UpcomingEvents'


export default function Home() {

  const dummyData = [
    {
      title: 'Web Development',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis? Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      date: '12 Dec 2023',
      venue: 'CDGC Office',
      Organisers: 'GDSC PEC',
      imageSrc: '/assets/events/image-01.jpg'
    },
    {
      title: 'Machine Learning',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis? Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      date: '12 Dec 2023',
      venue: 'CDGC Office',
      Organisers: 'GDSC PEC',
      imageSrc: '/assets/events/image-02.jpg'
    },
    {
      title: 'Android Development',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis? Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      date: '12 Dec 2023',
      venue: 'CDGC Office',
      Organisers: 'GDSC PEC',
      imageSrc: '/assets/events/image-03.jpg'
    }
]

  return (
    <Fragment>
      {/* Hero */}
      <div className='flex flex-col justify-center p-4 md:pt-4 gap-1'>
        <div className='flex flex-row justify-center items-center max-md:flex-col max-md:justify-center max-md:items-center p-8 '>
          <div className='flex flex-col' >
            <div className='leading-3 mb-3'>
              <h1 className='text-3xl md:text-4xl text-blue-600 font-gfont'>Google Developer Student Club</h1>
            </div>
            <p>Google Developer Student Clubs are part of a global community of students, taken care of directly by Google. Technology has a great power to accomplish even the impossible-seeming tasks. This Club fosters the development culture among its members and aims to equip them with the power of innovative thinking and multidisciplinary tools and techniques. Google Developer Student Club, Punjab Engineering College aims to develop innovative solutions for various problems which persist in society and target the 17 sustainable development goals of the United Nations.</p>
          </div>
          <Image src={'/assets/hero.jpg'} height={900} width={900} alt='' className="md:w-72 md:h-72 lg:w-96 lg:h-96 xl:h-1/2 xl:w-1/2" />
        </div>

        {/* About */}
        <div className='flex flex-row justify-center text-center p-20 leading-8 bg-slate-100 rounded-xl'>
          <div className='flex flex-col gap-8'>
            <h2 className='text-4xl from-neutral-700 tracking-wide font-semibold'>About </h2>
            <div className='flex flex-col gap-3 text-lg' >
              <p className='font-semibold'>Welcome to the Google Developer Student Club, PEC!</p>
              <p>Google Developer Student Clubs are part of a global community of students, taken care of directly by Google</p>
              <p>Technology has a great power to accomplish even the impossible-seeming tasks. This Club fosters the development culture among its members and aims to equip them with the power of innovative thinking and multidisciplinary tools and techniques. </p>
              <p>Google Developer Student Club, Punjab Engineering College aims to develop innovative solutions for various problems which persist in society and target the 17 sustainable development goals of the United Nations.</p>
            </div>
          </div>
        </div>

        {/* Upcoming events */}

        <h2 className='my-4 font-gfont text-4xl from-neutral-700 text-center font-semibold'>Upcomming Events </h2>
        <section className='rounded-lg flex flex-col gap-2 md:flex-row flex-wrap w-full justify-normal pb-10 p-8'>
          {dummyData.map((event, index) => 
              <UpcomingEvents key={index} event={event} />
            )
          }
        </section>


        {/* GDSC vedio */}
        <section className='mt-8 flex flex-row flex-wrap-reverse md:flex-nowrap justify-center items-center gap-6 max-md:flex-col max-md:justify-center max-md:items-center p-8'>
          <div className='flex flex-col' >
            <div className='leading-3 mb-3'>
              <h1 className='text-3xl md:text-4xl font-gfont'>Google Developer Student Club</h1>
            </div>
            <p>Google Developer Student Clubs are part of a global community of students, taken care of directly by Google. This Club fosters the development culture among its members and aims to equip them with the power of innovative thinking and multidisciplinary tools and techniques. Google Developer Student Club, Punjab Engineering College aims to develop innovative solutions for various problems which persist in society and target the 17 sustainable development goals of the United Nations.</p>
          </div>
          <div className='flex flex-col h-full gap-2'>
            <iframe className='w-full h-[376px] md:w-[320px] lg:h-[460px] lg:w-[489px] xl:h-[500px] xl:w-[600px]' src="https://www.youtube.com/embed/vaWINqJ9j1s" title="Connect with passionate student developers from India - Google Developer Student Clubs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <div className='mt-2 bg-sky-100 text-blue-800 w-fit'><p>GOOGLE DEVELOPER STUDENT CLUBS</p></div>
            <h2 className='text-blue-500 text-3xl md:text-4xl tracking-tighter'>GDSC Spotlight: A conversation with GDSC lead, Dang Nguyen</h2>
          </div>
        </section>

        {/* Chapter Vedio */}
        <div className='mt-8 flex flex-col gap-4 justify-center p-8'>
          <h2 className='font-gfont text-4xl from-neutral-700'>Chapter Video</h2>
          <iframe className='w-full h-[576px]' src="https://www.youtube.com/embed/earTjC0iSjg" title="What are Google Developer Student Clubs?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
    </Fragment>
  )
}


