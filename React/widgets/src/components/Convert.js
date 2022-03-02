import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {

    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedText(text);
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        };

    }, [text]);



    // const manualAsyncFunction = async () => {
    //     const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
    //                                         params: {
    //                                             q: debouncedText,
    //                                             target: language.value,
    //                                             key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
    //                                         }
    //                                     });

    //     setTranslated(data.data.translations[0].translatedText);
    // };

    // useEffect(manualAsyncFunction, [language, debouncedText]);

    // Using above way gives the following WARNING message : "Effect callbacks are synchronous to prevent race conditions. Put the async function inside:"


    useEffect(() => {

        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                                params: {
                                    q: debouncedText,
                                    target: language.value,
                                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                                }
                            });
            
            setTranslated(data.data.translations[0].translatedText);
        };

        
        
        doTranslation();
 
    }, [language, debouncedText]);


    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
};

export default Convert;