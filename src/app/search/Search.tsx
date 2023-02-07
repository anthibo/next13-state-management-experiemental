'use client'
import React, {FormEvent, useState} from 'react'
import { useRouter } from 'next/navigation'
export default function Search() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSearch = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch("")
        router.push(`search/${search}`)
    }
  return (
    <form onSubmit={handleSearch}>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type='submit' className='btn bg-blue-500 text-white rounded-lg'>
            Search
        </button>
    </form>
  )
}
