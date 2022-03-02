import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {

    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        }
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            });
            setResults(data.query.search);
        };

        if(debouncedTerm) {
            search();
        }
        
    }, [debouncedTerm]);


    const renderedResults = results.map(({ title, snippet, pageid }) => {
        return (
            <div key={pageid} className="item">
                <div className="right floated content">
                    <a 
                        className="ui button"
                        href={`https://en.wikipedia.org/?curid=${pageid}`} 
                        target='_blank'
                        rel="noreferrer"
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">{title}</div>
                    <span dangerouslySetInnerHTML={{ __html: snippet }}></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <form className="ui form">
                <div className="field">
                    <label>Enter Search Text :</label>
                    <input
                        className="input"
                        type='text'
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </form>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;