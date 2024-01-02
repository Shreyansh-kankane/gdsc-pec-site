'use client'
import React from 'react'
import UpcomingEvents from '@/components/UpcomingEvents'
import { useAuth } from '@clerk/nextjs'
import { useEffect,useState } from 'react';

import {getEvents} from '@/utils/supabaseRequest'


function page() {

  const {userId,getToken} = useAuth();
  const [loading,setLoading] = useState(true); 

  const [data,setData] = useState([]);

  useEffect(()=>{
    // const getData = async () => {
    //   const token = await getToken({template:"supabase"});
    //   const todos = await getEvents({userId,token});
    //   setData(todos);
    //   console.log(todos);
    // };
    // getData();
    // console.log("from approved",data)
    console.log(dummyData);
  },[]);

  const dummyData = [
    {
      title: 'Web Development',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis? Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      date: '12 Dec 2023',
      venue: 'CDGC Office',
      Organisers: 'GDSC PEC',
      imageSrc: '/assets/events/image-01.jpg',
      status: 'approved'
    },
    {
      title: 'Android Development',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis? Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      date: '12 Dec 2023',
      venue: 'CDGC Office',
      Organisers: 'GDSC PEC',
      imageSrc: '/assets/events/image-02.jpg',
      status: 'approved'
    },
]

// const dummyData = [...data]

  return (
    <section className='rounded-lg flex flex-col gap-2 md:flex-row flex-wrap w-full justify-normal pb-10 p-8'>
      {dummyData.map((event, index) => 
          event.status==='approved' && <UpcomingEvents key={index} event={event} />
        )
      }
    </section>
  )
}

export default page