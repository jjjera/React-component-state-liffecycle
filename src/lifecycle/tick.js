import React from 'react'; 

const Tick = (props) => {
    return(
        <div>
            <h1>Hello world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}</h2>
        </div>
    )
}

export default Tick;