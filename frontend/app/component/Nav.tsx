import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <div className='flex h-[5vh] w-[100vw] justify-center bg-white  text-black items-center '>
      <div className=" flex gap-7 ">
        <Link href="/" className=' hover:text-amber-600 ' >Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">contact</Link>
      </div>
    </div>
  );
}
    