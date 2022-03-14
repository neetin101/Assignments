import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";


const Button = () => {


    const renderButtonText = value => value === 'english' ? 'Submit' : 'Voorleggen';

    const renderColoredButton = btnColor => (
        <button className={`ui button`} style={{color: btnColor.txtCol, backgroundColor: btnColor.bgCol}}>
            <LanguageContext.Consumer>
                {renderButtonText}
            </LanguageContext.Consumer>
        </button>
    );

    return (
        <ColorContext.Consumer>
            {renderColoredButton}
        </ColorContext.Consumer>
    );
};

// class Button extends React.Component {

//     render() {

//         const text = this.context === 'english' ? 'Submit' : 'Voorleggen';

//         return (
//             <button className="ui button pink">
//                 {text}
//             </button>
//         );
//     }
// }

export default Button;