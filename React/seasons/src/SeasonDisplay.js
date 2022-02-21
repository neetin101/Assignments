const SeasonDisplay = props=> {
    if(props.season === 'summer') {
        return (
            <div>Summer there...go to beach !</div>
        );
    } else if(props.season === 'winter'){
        return (
            <div>Winter is coming...!!!</div>
        );
    } else {
        return (
            <div>Some error has occured...</div>
        );
    }
};

export default SeasonDisplay;