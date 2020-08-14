import React from 'react';

import './Form.css';


const Form = props => {
    const { query, setQuery, onInput} = props;

  
    return (
        <React.Fragment>
            <div className="heading-box">
                <h1>welcome to weather app</h1>
            </div>
            <form className="form">
                <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={onInput}
                    className="form__input"
                />
            </form>
        </React.Fragment>
    )
};

export default Form;