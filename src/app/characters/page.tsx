import React from 'react'
import CharactersList from './CharactersList'

export default function CharactersPage() {
  return (
    <div>
        {/* @ts-ignore */}
        <CharactersList page={1}/>
    </div>
  )
}
