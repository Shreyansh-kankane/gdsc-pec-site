import React from 'react'
import ContributorsCard from '@/components/ContributorsCard'
import Image from 'next/image'
import { Fragment } from 'react'

import styles from '@/styles/teams.module.css'

export const metadata = {
  title: 'GDSC-PEC Teams',
  description: 'GDSC PEC Chandigarh, Executive Body, Core Team and Joint Heads',
}

export default function Teams(){
  const data = [
    { name: 'Vishvjeet Thakur', role: 'GDSC Lead', image: '/gentlemen.png' },
    { name: 'Arpit Singhal', role: 'Technical Lead', image: '/gentlemen.png' },
    { name: 'Vedansh Singh', role: 'PR Lead', image: '/gentlemen.png' },
    { name: 'bt21105089 Adarsh Mandloi', role: 'Logistics Head', image: '/gentlemen.png' },
    { name: 'Dhruv Goyal', role: 'Google Cloud Facilitator', image: '/gentlemen.png' },
    { name: 'Palak Bansal', role: 'Women in Tech Lead', image: '/gentlemen.png' },
    { name: 'bt22104008 Archie Garg', role: 'Joint Head', image: '/gentlemen.png' },
    { name: 'Armaan Singh Brar Brar', role: 'Joint Head', image: '/gentlemen.png' },
    { name: 'bt22105015 Arnav Vikas Garg', role: 'Joint Head', image: '/gentlemen.png' },
    { name: 'Ayush Kumar Kashyap', role: 'Joint Head', image: '/gentlemen.png' },
    { name: 'bt22104077 Hitesh Garg', role: 'Joint Head', image: '/gentlemen.png' },
    { name: 'bt22104089 Kunal Garg', role: 'Joint Head', image: '/gentlemen.png' },
    { name: 'bt22105007 Sanshray Mittu', role: 'Joint Head', image: '/gentlemen.png' },
    { name: 'bt22103041 Akanksha Narula', role: 'Joint Head', image: '/gentlemen.png' },
    { name: 'bt22106027 Vishwas Kisaniya', role: 'Joint Head', image: '/gentlemen.png' },
    { name: 'bt22105083 Ujjawal Sidana', role: 'Joint Head', image: '/gentlemen.png' },
    { name: 'bt22105020 Ribhav Aggarwal', role: 'Joint Head', image: '/gentlemen.png' },
    { name: 'bt22105086 Kunal Dhawan', role: 'Joint Head', image: '/gentlemen.png' },
    { name: 'bt22101031 Shivansh Srivastava', role: 'Joint Head', image: '/gentlemen.png' },
    { name: 'bt22105041 Rishit Sharma', role: 'Joint Head', image: '/gentlemen.png' },
    { name: 'bt22105102 Mayank Sajnani', role: 'Joint Head', image: '/gentlemen.png' },
    { name: 'bt22105111 Manjesh Chauhan', role: 'Joint Head', image: '/gentlemen.png' },
    { name: 'Dhruv Goyal', role: 'Website Developer', image: '/gentlemen.png' },
    { name: 'Shreyansh Kankane', role: 'Website Developer', image: '/gentlemen.png' },
    { name: 'Ujjawal Gupta', role: 'Website Developer', image: '/gentlemen.png' },
    { name: 'Apurav Goel', role: 'Website Developer', image: '/gentlemen.png' },
  ]
  return (
    <Fragment>
      <div className={styles.blob1}>
        {/* <!-- This SVG is from https://codepen.io/Ali_Farooq_/pen/gKOJqx --> */}
        <svg xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" className='h-40 w-40 md:h-[300px] sm:w-[300px] ' viewBox="0 0 310 350">
          <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
        </svg>
      </div>
      <div className={styles.blob2}>
        {/* <!-- This SVG is from https://codepen.io/Ali_Farooq_/pen/gKOJqx --> */}
        <svg xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" className='h-40 w-40 md:h-[300px] sm:w-[300px] ' viewBox="0 0 310 350">
          <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
        </svg>
      </div>
      <div className={styles.blob3}>
        {/* <!-- This SVG is from https://codepen.io/Ali_Farooq_/pen/gKOJqx --> */}
        <svg xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" className='h-40 w-40 md:h-[300px] sm:w-[300px] ' viewBox="0 0 310 350">
          <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
        </svg>
      </div>
      <div className={styles.blob4}>
        {/* <!-- This SVG is from https://codepen.io/Ali_Farooq_/pen/gKOJqx --> */}
        <svg xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" className='h-40 w-40 md:h-[300px] sm:w-[300px] ' viewBox="0 0 310 350">
          <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
        </svg>
      </div>
      <div className={styles.blob5}>
        {/* <!-- This SVG is from https://codepen.io/Ali_Farooq_/pen/gKOJqx --> */}
        <svg xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" className='h-40 w-40 md:h-[300px] sm:w-[300px] ' viewBox="0 0 310 350">
          <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
        </svg>
      </div>

      {/* hero content */}
      <div className='flex w-10/12 items-center justify-center mx-auto mt-[100px] max-md:flex-col max-md:w-full'>
        <div className='w-1/2 max-md:mb-4'>
          <h1 className='text-5xl my-2 max-md:text-2xl max-md:text-center font-bold'>Meet The Team</h1>
          <p className='text-base max-md:text-sm max-md:text-center md:w-9/12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga hic natus id iure nobis in distinctio alias ex dolorum culpa! A soluta vel illum id quidem porro, libero quas nesciunt.</p>
        </div>
        <div className='w-1/2 max-md:w-9/12 max-md:mt-10' style={{ boxShadow: '-20px -25px teal' }} >
          <Image src={'/assets/teams.png'} width={780} height={650} alt='' />
        </div>
      </div>

      {/* Teams */}
      <div className='flex flex-col items-center justify-center w-9/12 mx-auto'>
        <div className='text-3xl font-semibold mt-20 p-2' style={{ borderBottom: '7px dotted', borderImage: 'linear-gradient(to right, red 20%, green 20%, green 40%, blue 40%, blue 60%, maroon 60%, maroon 80%, chocolate 80%)', borderImageSlice: 1 }}>OUR TEAM</div>

        <div className='mt-12'>
          <p className='text-2xl text-center my-5 font-semibold'>GDSC LEAD</p>
          {data && (
            data.filter(object => (object.role === 'GDSC Lead')).map((obj, ind) => {
              const { name, role, image } = obj;
              return (<ContributorsCard key={ind} name={name} role={role} image={image} index={ind} />)
            })
          )}
        </div>

        <div className='mt-12 flex flex-col items-center justify-center'>
          <p className='text-2xl text-center my-5 font-semibold'>CORE TEAM</p>
          <div className='flex flex-wrap items-center justify-center'>
            {data && (
              data.filter(object => (object.role != 'GDSC Lead' && object.role != 'Joint Head' && object.role != 'Website Developer')).map((obj, ind) => {
                const { name, role, image } = obj;
                return (<ContributorsCard key={ind} name={name} role={role} image={image} index={ind} />)
              })
            )}
          </div>
        </div>


        <div className='mt-12 flex flex-col items-center justify-center'>
          <p className='text-2xl text-center my-5 font-semibold'>JOINT HEADS</p>
          <div className='flex flex-wrap items-center justify-center'>
            {data && (
              data.filter(object => (object.role === 'Joint Head')).map((obj, ind) => {
                const { name, role, image } = obj;
                return (<ContributorsCard key={ind} name={name} role={role} image={image} index={ind} />)
              })
            )}
          </div>
        </div>

        <div className='my-12 flex flex-col items-center justify-center'>
          <p className='text-2xl text-center my-5 font-semibold'>WEBSITE DEVELOPERS</p>
          <div className='flex flex-wrap items-center justify-center'>
            {data && (
              data.filter(object => (object.role === 'Website Developer')).map((obj, ind) => {
                const { name, role, image } = obj;
                return (<ContributorsCard key={ind} name={name} role={role} image={image} index={ind} />)
              })
            )}
          </div>
        </div>
      </div>
    </Fragment>
  )
}