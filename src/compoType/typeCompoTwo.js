import React from 'react';

const Typetwo = (props) => {
    return(
        <div className="TypeTwo">
        <h1 className="headingOne">Create Component using Stateless function</h1>
        <p className="para1">no need of using class,extend and component and finally no render is  needed!</p>
        <div>{props.children}</div>
        </div>
    );
}
export default Typetwo;