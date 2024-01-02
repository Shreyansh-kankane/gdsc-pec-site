

import React from 'react'
import ApproveEvents from '@/components/ApproveEvents'

function page() {

  const dummyData = [
    {
      title: 'Web Development',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis? Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      date: '12 Dec 2023',
      venue: 'CDGC Office',
      Organisers: 'GDSC PEC',
      imageSrc: '/assets/events/image-01.jpg',
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
    },
    {
      title: 'Android Development',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis? Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      date: '12 Dec 2023',
      venue: 'CDGC Office',
      Organisers: 'GDSC PEC',
      imageSrc: '/assets/events/image-03.jpg'
    },
]

  return (
    <section className='rounded-lg flex flex-col gap-2 md:flex-row flex-wrap w-full justify-normal pb-10 p-8'>
      {dummyData.map((event, index) => 
          <ApproveEvents key={index} event={event} />
        )
      }
    </section>
  )
}

export default page