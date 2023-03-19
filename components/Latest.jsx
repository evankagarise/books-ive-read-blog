import React from 'react'
import book1 from '@/assets/ftw.jpeg'
import book2 from '@/assets/sb.jpg'
import book3 from '@/assets/mnt.jpg'
import Image from 'next/image'
const Latest = () => {
  return (
    <div className='flex flex-col gap-6 max-w-6xl mx-auto items-center
    justify-center'>
        <h1 className='text-xl font-bold'>March 2023</h1>
        <div className='flex gap-6'>
            <div>
            <Image src={book1} className="w-[300px] height-[500px]" alt="four thousand weeks book" />
        </div>
        <div>
            <Image src={book2} className="w-[300px] height-[500px]" alt="four thousand weeks book" />
        </div>
        <div>
            <Image src={book3} className="w-[300px] height-[500px]" alt="four thousand weeks book" />
        </div>
        </div>
        
    </div>
  )
}

export default Latest