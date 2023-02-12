import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='p-5 bg-blue-500'>
        <Link href="/characters" className='px-2 py-1 bg-white text-blue-500 rounded-lg mr-2'>
            Characters
        </Link>
        <Link href="/characters/likes" className='px-2 py-1 bg-white text-blue-500 rounded-lg'>
            Liked
        </Link>
    </header>
  )
}
