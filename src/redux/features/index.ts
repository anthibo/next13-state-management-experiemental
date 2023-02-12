import { combineReducers } from "redux";
import LikedCharactersReducer from './likeCharactersSlice'

export default combineReducers({
    likedCharacters: LikedCharactersReducer,
})