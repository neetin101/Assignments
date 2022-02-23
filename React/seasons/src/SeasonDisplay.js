import './SeasonDisplay.css';


const getSeason = lat => {
    const month = new Date().getMonth();

    if(month>2 && month<9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const seasonConfig = {
    summer : {
        text : 'Let\'s hit the beach !',
        iconName : 'sun'
    },
    winter : {
        text : 'Burr, it\'s chilly',
        iconName : 'snowflake'
    }
}



const SeasonDisplay = props=> {
    console.log(props.lat);

    const season = getSeason(props.lat);
    const {text, iconName} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${iconName} icon massive`} />
            <h1>{text}</h1>
            <i className={`icon-right ${iconName} icon massive`} />
        </div>
    );

    // if(season === 'summer') {
    //     return (
    //         <div>Summer there...go to beach !</div>
    //     );
    // } else if(season === 'winter'){
    //     return (
    //         <div>Winter is Here...!!!</div>
    //     );
    // } else {
    //     return (
    //         <div>Some error has occured...</div>
    //     );
    // }
};

export default SeasonDisplay;