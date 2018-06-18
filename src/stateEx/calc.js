import React from 'react';

const User = (props) => {
    return(<div>{props.children } | {props.age} </div>)
}
export default User;