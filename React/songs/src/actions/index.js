// Action Creators return objects with 'type' and 'payload' property.
//  selectSong is an Action Creator

export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};