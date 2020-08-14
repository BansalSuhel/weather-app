import React from 'react';

import './Weather.css';

const Weather = React.memo(props => {
    const { weather } = props;

    const dateBuilder = (d) => {
       
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const day = days[d.getDay()];
        const date = d.getDate();
        const month = months[d.getMonth()];
        const year = d.getFullYear();

        return `${day}, ${date} ${month} ${year}`
    }
    return (
        <div className="weather-box">
            <h2 className="weather-box__city">{weather.name}, {weather.sys.country}</h2>
            <h4 className="weather-box__date">{dateBuilder(new Date())}</h4>
            <p className="weather-box__temp">{Math.round(weather.main.temp)}°C</p>
            <p className="weather-box__main">{weather.weather[0].main}</p>
        </div>
    )
});

export default Weather;