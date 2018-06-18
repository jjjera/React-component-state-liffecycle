import React, {Component} from 'react';
import User from './calc';

class Details extends Component {
    State = {
        users : [
            {name:"John",age:20},
            {name:"Jin",age:30},
            {name:"Vein",age:40}
        ],
title:"Users list!"
};
makemeYoung = () => {
this.State.users.age -= 10;
}
    render(){
        return(
            <div>
                <h1>{this.State.title}</h1>
         <User age = {this.State.users[0].age}>{this.State.users[0].name}</User>
         <User age = {this.State.users[1].age}>{this.State.users[1].name}</User>
         <User age = {this.State.users[2].age}>{this.State.users[2].name}</User>
         <button onClick={this.makemeYoung} >Click me!</button>
            </div>
        )
    }
}
export default Details;