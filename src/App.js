import React, { useState } from 'react';

import Form from './components/Form';
import Weather from './components/Weather';
import ErrorHandler from './components/ErrorHandler';
import Spinner from './components/Spinner';

import './App.css';
import './components/Animation.css';


const api = {
  base: "https://api.openweathermap.org/data/2.5/",
  key: "5b61ecf9427b501924b05ef656d7b9c8"
}


const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [spinner, setSpinner] = useState(false);

  const inputHandler = evt => {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      setSpinner(true);
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setSpinner(false);
          setWeather(result);
          setQuery('');        
        });
    }
  }


  return (
    <div className="container">
      <Form query={query} setQuery={setQuery} onInput={inputHandler} setSpinner={setSpinner} />
      {spinner && <Spinner />}
      {(typeof weather.main !== "undefined") && <Weather weather={weather} />}
      {(typeof weather.message !== 'undefined') && <ErrorHandler weather={weather} />}
    </div>
  )
};

export default App;