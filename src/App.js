import React, { useState } from 'react';

const api = {
  key: "5b61ecf9427b501924b05ef656d7b9c8",
  base: "https://api.openweathermap.org/data/2.5/"
}

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const eventHandler = e => {
    if (e.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
        });
    }
  }

  const dateConverter = (d) => {
    const months = ['January', 'Ferburay', 'March', 'April', "May", 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let month = months[d.getMonth()];
    let day = days[d.getDay()];
    let fullYear = d.getFullYear();
    let date = d.getDate();

    return `${day} ${date} ${month} ${fullYear}`;

  }

  return (
    <div className={(typeof weather.main != 'undefined') ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={eventHandler}
          />
        </div>
        {(typeof weather.main != 'undefined') ? (<div>

          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateConverter(new Date())}</div>
          </div>

          <div className="weather-box">
            <div className="temp">{Math.round(weather.main.temp)}°c</div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>

        </div>) : null
        }
      </main>
    </div>
  );
}

export default App;