import React from 'react';

import './ErrorHandler.css';

const ErrorHandler = React.memo(props => {
    const {weather} = props;
    
     return(
         <div className="error-handler-div">
             <p className="error-message">{weather.message}</p>
         </div>
     )
});

export default ErrorHandler;