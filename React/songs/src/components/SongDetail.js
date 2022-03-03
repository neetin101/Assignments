import React from "react";
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    // console.log(props);
    return ( song ? 
        <h1>
            Song Title: {song.title}
            <br />
            Song Duration: {song.duration}
        </h1> : <h1>Select a song</h1>
    );
};

const mapStateToProps = state => {
    return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);