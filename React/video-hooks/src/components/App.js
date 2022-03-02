import React, { useState, useEffect } from "react";
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from "../hooks/useVideos";
 
const defaultSearchText = 'children stories';

const App = () => {
    
    const [videos, search] = useVideos(defaultSearchText);
    const [selectedVideo, setSelectedVideo] = useState(null);
    
    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);
    

    // const onVideoSelect = async video => {
    //     await setSelectedVideo(video);          //  ------------------------------------------------     Why is this not working ????????     ------------------------------------------------
    //     console.log('selected = ', selectedVideo.snippet.title);
    // };

    return (
        <div className="ui container" style={{ marginTop: '10px' }} >
            <SearchBar onSubmit={search} defaultSearchText={defaultSearchText} />

            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList 
                            videos={videos} 
                            onVideoSelect={setSelectedVideo} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );


};

// class App extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { videos: [], selectedVideo: null};
//         this.defaultSearchText = 'children stories';

//         this.onSearchSubmit = this.onSearchSubmit.bind(this);
//         this.onVideoSelect = this.onVideoSelect.bind(this);
//     }

//     componentDidMount() {
//         this.onSearchSubmit(this.defaultSearchText);
//     }

//     async onSearchSubmit(term) {
//         // console.log("Searched = ", term);
//         const response = await youtube.get('/search', {
//             params: {
//                 q: term
//             } 
//         });
//         // console.log(response.data.items);

//         this.setState({ 
//             videos: response.data.items,
//             selectedVideo: response.data.items[0]
//          });

//         // console.log(this.state);

//     }

//     async onVideoSelect(video) {
//         await this.setState({ selectedVideo: video });
//         console.log('Selected = ', this.state.selectedVideo.snippet.title);
//     }

//     render() {
//         return (
//             <div className="ui container" style={{ marginTop: '10px' }} >
//                 <SearchBar onSubmit={this.onSearchSubmit} defaultSearchText={this.defaultSearchText} />

//                 <div className="ui grid">
//                     <div className="ui row">
//                         <div className="eleven wide column">
//                             <VideoDetail video={this.state.selectedVideo} />
//                         </div>
//                         <div className="five wide column">
//                             <VideoList 
//                                 videos={this.state.videos} 
//                                 onVideoSelect={this.onVideoSelect} 
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

export default App;