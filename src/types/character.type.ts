
export type Character = {
  id: number,
  name: string,
  status: string,
  image: string,
}

export type CharacterState = {
    characters: Character[]
}

export type LikedCharactersState = {
  liked: Character[]
}
