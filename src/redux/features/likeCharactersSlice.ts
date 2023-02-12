import { Character, LikedCharactersState } from '@/types/character.type';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// const xxx ={
//     id: 0,
//     name: '',
//     status: '',
//     species: '',
//     type: '',
//     gender: '',
//     origin: {
//         name: '',
//         url: ''
//     },
//     location: {
//         name: '',
//         url: ''
//     },
//     image: '',
//     episode: [],
//     url: '',
//     created: ''
// }
const initialState: LikedCharactersState = {
    liked: []
};

const LikedCharactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        likeCharacter: (state, action: PayloadAction<Character>) => {
            state.liked.push(action.payload)
        },
        unlikeCharacter: (state, action: PayloadAction<{ id: number }>) => {
            state.liked.filter(char => char.id !== action.payload.id)
        }
    },
});

export const { likeCharacter, unlikeCharacter } = LikedCharactersSlice.actions;
export default LikedCharactersSlice.reducer;
