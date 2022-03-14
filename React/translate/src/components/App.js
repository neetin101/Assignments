import React, { useState } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";

const App = () => {

    const [language, setLanguage] = useState('english');

    return (
        <div className="ui container">
            <div>
                Select a Language : 
                <i className="flag us" onClick={()=> setLanguage('english')} style={{ cursor: 'pointer' }} />
                <i className="flag nl" onClick={()=> setLanguage('hindi')} style={{ cursor: 'pointer' }} />
            </div>
            <LanguageContext.Provider value={language}>
                <UserCreate />
            </LanguageContext.Provider>
        </div>
    );
};

export default App;