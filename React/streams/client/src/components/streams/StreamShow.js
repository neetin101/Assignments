import React from "react";
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {

    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        this.props.fetchStream(id);
        this.buildPlayer();
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    componentDidUpdate() {
        this.buildPlayer();
    }

    buildPlayer() {
        if(this.player || !this.props.stream) {
            return;
        }

        const { id } = this.props.match.params;
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });

        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    render() {
        if(!this.props.stream) {
            return <div>Loading...</div>;
        }

        const { title, description } = this.props.stream;

        return (
            <div>
                <video ref={this.videoRef} style={{ border: '2px solid red', width: '100%' }} controls />
                <h1>{title}</h1>
                <h4>{description}</h4>
            </div>
        );
    }

}

// const StreamShow = props => {

//     const { id } = props.match.params;
//     const videoRef = useRef(null);
//     const [player, setPlayer] = useState(
//         flv.createPlayer({
//             type: 'flv',
//             url: `http://localhost:8000/live/${id}.flv`
//         })
//     );

//     useEffect(()=> {

//         props.fetchStream(id);

//         player.attachMediaElement(videoRef.current);
//         player.load();

//         // const fun = async () => {
//         //     await props.fetchStream(id);
//         //     console.log("REF = ", videoRef);
    
//         //     const player = flv.createPlayer({
//         //         type: 'flv',
//         //         url: `http://localhost:8000/live/${id}.flv`
//         //     });
    
//         // };
//         // fun();

//     }, []);


//     if(!props.stream) {
//         return <div>Loading...</div>;
//     }

//     const { title, description } = props.stream;

//     return (
//         <div>
//             <video ref={videoRef} style={{ border: '2px solid red', width: '100%' }} controls />
//             <h1>{title}</h1>
//             <h3>{description}</h3>
//         </div>
//     );
// };

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);