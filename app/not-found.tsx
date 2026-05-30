import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <Image src="/adventure.svg" width={300} height={300} alt='404' />
        <h1 className='text-3xl font-bold'>404 - Page Not Found</h1>
        <p className='text-lg'>The page you are looking for does not exist.</p>
        <Link href='/' className='text-blue-500'>Go to Home</Link>
    </div>
  )
}

export default NotFound