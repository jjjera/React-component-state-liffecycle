import React,  {Component} from 'react';
import Typetwo from './typeCompoTwo';

class Typeone extends Component {
    render(){
        return(
            
                <div className="TypeOne">
                <h1 className="heading">Creating Components using ES6 class.</h1>
                <p className="para">Here we use class class name and extend with Components , And also we use render!</p>
                <Typetwo/>
                </div>
            
        );
    }
}
export default Typeone;