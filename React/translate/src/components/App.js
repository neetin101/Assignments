import React, { useState } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";


const App = () => {

    const [language, setLanguage] = useState('english');
    const [bgCol, setBgCol] = useState('#000000');
    const [txtCol, setTxtCol] = useState('#ffffff');

    return (
        <div className="ui container">
            <div>
                Select a Language : 
                <i className="flag us" onClick={()=> setLanguage('english')} style={{ cursor: 'pointer' }} />
                <i className="flag nl" onClick={()=> setLanguage('hindi')} style={{ cursor: 'pointer' }} />
            </div>
            <div>
                Select Background color of button : 
                <input 
                    type='color' 
                    value={bgCol} 
                    onChange={e => setBgCol(e.target.value)}
                    style={{ cursor: 'pointer' }}
                />
            </div>
            <div>
                Select Text color of button : 
                <input 
                    type='color' 
                    value={txtCol} 
                    onChange={e => setTxtCol(e.target.value)}
                    style={{ cursor: 'pointer' }}
                />
            </div>
            <ColorContext.Provider value={{ bgCol, txtCol }}>
                <LanguageContext.Provider value={language}>
                    <UserCreate />
                </LanguageContext.Provider>
            </ColorContext.Provider>
        </div>
    );
};

export default App;