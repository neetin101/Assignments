import './VideoItem.css';
import React from 'react';


const VideoItem = ({ video, onVideoSelect }) => {
    const {snippet} = video;
    return (
        <div className='video-item item' onClick={() => onVideoSelect(video) }>
            <img 
                src={snippet.thumbnails.medium.url} 
                alt={snippet.title}
                className='ui image' 
            />
            <div className='content'>
                <div className='header'>{snippet.title}</div>
                {/* <div className='description'>
                    {snippet.description}
                </div> */}
            </div>
        </div>
    );
};


// class VideoItem extends React.Component {
//     constructor(props) {
//         super(props);
//         this.videoRef = React.createRef();
//     }

//     componentDidMount() {
        
//     }

//     render() {
//         const {snippet} = this.props.video;
//         return (
//             <div className='video-item item' onClick={e => {
//                 console.log('title = ', snippet.title);
//                 this.props.onSelect(snippet.title);
//             }}>
//                 <img src={snippet.thumbnails.medium.url} alt="Video Here" className='ui image' />
//                 <div className='content'>
//                     <div className='header'>{snippet.title}</div>
//                     <div className='description'>
//                         {snippet.description}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

export default VideoItem;