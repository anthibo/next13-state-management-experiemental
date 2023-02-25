import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

import { Character } from "@/types/character.type"

const endpoint = 'https://rickandmortyapi.com/graphql'


// TODO: clean error handling in this function
export const getCharacters = async (page: number): Promise<[any, Character[] | null]> => {
    const CHARACTERS_QUERY =
        `
           {
             characters(page: ${page}){
                results{
                id
                name
                status
                species
                image
                created
                }
            }
        }
            `
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: CHARACTERS_QUERY })
    })
    let error = null
    if (response.status >= 400) {
        error = await response.json();
        console.log(error)
        return [error, null]
    }
    const { data }: { data: {characters: { results: Character[] }} }
        = await response.json()
    return [null, data.characters.results]
}

export const apiSlice = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/graphql' }),
    endpoints: (builder) => ({
      getPokemonByName: builder.query<Character, string>({
        query: (name) => `pokemon/${name}`,
      }),
    }),
  })
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
//   export const { useGetPokemonByNameQuery } = apiSlice