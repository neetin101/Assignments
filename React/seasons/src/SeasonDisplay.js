
const getSeason = lat => {
    const month = new Date().getMonth();

    if(month>2 && month<9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}



const SeasonDisplay = props=> {
    console.log(props.lat);

    const season = getSeason(props.lat);
    const text = season === 'winter' ? 'Burr, it\'s chilly' : 'Let\'s hit the beach !';

    return (
        <div>
            <h1>{text}</h1>
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