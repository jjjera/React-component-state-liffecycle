import React, {Component} from 'react'

class Life extends Component {
    state = {
        name:"mary"
    }
    constructor(){
        super();
        this.state = {
            name:"john"
        };
        console.log('constructor')
    }
    componentWillMount(){
        if(window.innerWidth < 500){
            this.setState({innerWidth:window.innerWidth})
        }
        console.log('componentWillMount')

    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    changeState ()  {
this.setState({Name : "Jack"});
    }

    // componentWillUnmount(){
    //     this.setState({name:"robert"});
    // }
    render(){
        console.log('render');
        // // if(this.state.name === "robert"){
        // //     return ('</div>');
        // }
        return(
            <div>
            Name : {this.state.name}
           | innerWidth :{this.state.innerWidth}
           <button onClick={this.changeState.bind(this)}>Change State</button>
           {/* <button onClick={this.componentWillUnMount.bind(this)}>unmount</button> */}
            </div>
            
        )
        
    }
    
}

export default Life; 