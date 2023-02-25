import { getCharacters } from '@/services/character.api'
import CharacterCard from '@/components/characters/CharacterCard'
import React from 'react'
import { useQuery } from 'react-query'
type PageProps = {
    page: number
}
export default async function CharactersList({ page }: PageProps) {
    const [error, data] = await getCharacters(1);
    // if (isLoading) return "Loading...";
    if (error) return <pre>Error Happened</pre>;
    return (
        <div className='flex flex-row flex-wrap'>
            {data && data.map((character, index) => (<CharacterCard key={index} character={character}/>))}
        </div>
    )
}
