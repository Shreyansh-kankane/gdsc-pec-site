import React from 'react'
import Image from 'next/image'

const ContributorsCard = (props) => {
  const colorArray = ['#00A9FF', '#D80032', '#F4CE14', '#00A9FF', '#8EAC50', '#D80032'] // [blue,red,yellow,blue,green,red] box-shadow: ;
  return (
    <div className='flex flex-col items-center justify-center text-center bg-white' style={{ border: `4px solid ${colorArray[props.index % 6]}`, borderRadius: '25px', padding: '25px', margin: '18px', minWidth: '300px', boxShadow: `${colorArray[props.index % 6]} 0px 5px, ${colorArray[props.index % 6]}  0px 10px, ${colorArray[props.index % 6]}  0px 15px, ${colorArray[props.index % 6]}  0px 20px, rgba(240, 46, 170, 0.05) 0px 25px` }}>
      <Image src={`${props.image}`} height={200} width={200} alt='img' style={{ borderRadius: '100%', height: '150px', width: '150px' }} />
      <div className='mt-4 text-xl font-semibold' style={{ color: `${colorArray[props.index % 6]}` }}>{props.name}</div>
      <div className='mt-2 text-lg font-semibold' style={{ color: `${colorArray[props.index % 6]}` }}>{props.role}</div>
      <button className='my-2 text-white text-lg font-semibold' style={{ background: ` ${colorArray[props.index % 6]}`, padding: '7px 14px', borderRadius: '25px' }}>View profile</button>
    </div>
  )
}

export default ContributorsCard
