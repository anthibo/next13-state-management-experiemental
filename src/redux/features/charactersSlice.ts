import { Character, CharacterState as CharactersState, LikedCharactersState } from '@/types/character.type';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: CharactersState = {
    characters: []
};

const CharactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    
  },
});

// export const { updateUsersCount, updatePlanType } = CharactersSlice.actions;
export default CharactersSlice.reducer;
