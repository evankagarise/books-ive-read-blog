import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='max-w-6xl mx-auto flex justify-between p-6 shadow-lg rounded-lg'>
        <h1 className='text-2xl'>Books Ive Read</h1>
        <ul className='flex gap-6 text-xl'>
            <Link href="https://evankagarise.com">
                Portfolio
            </Link>
            <Link href="https://github.com/evankagarise">
                Source
            </Link>
        </ul>
    </div>
  )
}

export default Nav