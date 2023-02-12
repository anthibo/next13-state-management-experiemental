'use client'
import LikedCharacterCard from '@/components/characters/LikedCharacterCard'
import { useAppSelector } from '@/redux/store'
import React from 'react'

export default function LikesPage() {
  // get likesCharactersState here
  const likedCharacters = useAppSelector(state => state.likedCharacters.liked)
  return (
    // render likedCharacters
    <div className='flex flex-row flex-wrap'>
      {likedCharacters && likedCharacters.map((character, index) => (<LikedCharacterCard key={index} character={character} />))}
    </div>
  )
}
