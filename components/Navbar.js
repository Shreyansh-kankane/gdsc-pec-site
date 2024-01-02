'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SignedOut, UserButton, SignedIn, useSession } from '@clerk/nextjs';
// import { checkUserRole } from '@/utils/userUtils';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"

import { useUserRole } from '@/middlewares/AdminMiddleware';


function Navbar() {

  const userRole = useUserRole();

  // const session = useSession(); 
  // const [userRole,setUserRole] = useState(null);
  // useEffect(() => {
  //   if (session.isLoaded) {
  //     const role = checkUserRole(session.session);
  //     setUserRole(role);
  //   }
  // }, [userRole,session.isLoaded,session.session]);

  const links = [
    { title: 'dashboard', url: '/eb', role: 'eb' },
    { title: 'dashboard', url: '/ob', role: 'ob'},
    {title:'leaderboard',url:'/leaderboard',role:null}
  ];  

  return (
    <div className="w-full h-[12vh] p-4 pb-2 shadow-md relative flex justify-between sm:justify-center z-10 bg-white">
      <div className="flex flex-wrap m-auto w-full lg:w-[80%] max-w-7xl justify-between items-center ml-3 mr-2">
        <Link href={'/'} >
          <div className='flex items-center gap-4'>
            <Image
              alt=""
              width="64"
              height="64"
              src='/assets/gdsc_logo.png'
            />
            <h2 className='text-slate-600 text-xl font-bold'>GDSC PEC</h2>
          </div>
        </Link>
        <div className='hidden md:block font-normal text-slate-600'>
          <ol className='flex flex-row list-none gap-7 p-2 items-center'>
            <li><Link href={'/'} >Home</Link></li>
            <li><Link href={'/progress'}>Progress</Link></li>
            <li><Link href={'/teams'} >Our teams</Link></li>
              <SignedIn>
                {links.map((link) =>
                  (link.role === userRole ) || !link.role ? (
                    <Link key={link.title} href={link.url}>
                      <div className='cursor-pointer hover:text-gray-900'>
                        {link.title}
                      </div>
                    </Link>
                  ) : null
                )}
                <div className=''>
                  <UserButton afterSignOutUrl='/' />
                </div>
              </SignedIn>
              <div className='flex flex-row'>
                <SignedOut>
                  <a href='/sign-in'>
                    <button className='text-white bg-blue-600 border-0 py-2 px-4 focus:outline-none hover:bg-blue-700 rounded-lg text-base mr-2'>
                      Login
                    </button>
                  </a>
                  <a href='/sign-up'>
                    <button className='bg-white text-blue-600 border py-2 px-3 focus:outline-none hover:bg-sky-100 rounded-lg  text-base'>
                      Sign Up
                    </button>
                  </a>
                </SignedOut>
              </div>
          </ol>
        </div>
        <div className='block md:hidden'>
          <Sheet>
            <SheetTrigger>
              <Image src={'/assets/hamburger.svg'} width="40"
              height="40" alt='' />
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-center items-center" >
              <SheetHeader >
                <SheetDescription className='flex flex-col justify-center items-center gap-5 text-gray-500 font-bold' >
                  <SheetClose asChild>
                    <Link href={'/'} >Home</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href={'/'} >Events</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href={'/'} >About</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href={'/teams'} >Our teams</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href={'https://www.gdsc-pec.vercel.app'} >Progress Report</Link>
                  </SheetClose>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}

export default Navbar
