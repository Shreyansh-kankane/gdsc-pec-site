"use client"
import React from 'react'
import { faDiscord, faInstagram, faLinkedin, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/navigation';

function Footer() {
  const router = useRouter();
  return (
    <footer id='contact' className='flex flex-row justify-around items-center py-5 w-full'>
        <div className='flex flex-row gap-3 items-center'>
        <h1 className='font-bold'>Join Us:</h1>
        <div className='flex flex-row gap-3'>
            <FontAwesomeIcon icon={faDiscord} onClick={() => { router.push('https://discord.gg/zAjdjYc6yR') }} className='text-2xl' />
            <FontAwesomeIcon icon={faInstagram} onClick={() => { router.push('https://www.instagram.com/gdsc.pec/') }} className='text-2xl' />
            <FontAwesomeIcon icon={faLinkedin} onClick={() => { router.push('https://www.linkedin.com/company/gdsc-pec/') }} className='text-2xl' />
            <FontAwesomeIcon icon={faXTwitter} onClick={() => { router.push('https://twitter.com/GDSC_PEC') }} className='text-2xl' />
            <FontAwesomeIcon icon={faWhatsapp} onClick={() => { router.push('https://chat.whatsapp.com/HYKMH4FfA6B8iExIEuZV5P') }} className='text-2xl' />
        </div>
        </div>
    </footer>
  )
}

export default Footer