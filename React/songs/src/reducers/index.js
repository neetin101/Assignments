import { combineReducers } from "redux";

//  Reducers take input as action and old data, and outputs the updated data

const songsReducer = () => {
    return [
        { title: 'Song #1', duration: '4:05' },
        { title: 'Song #2', duration: '5:06' },
        { title: 'Song #3', duration: '6:07' },
        { title: 'Song #4', duration: '7:08' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});