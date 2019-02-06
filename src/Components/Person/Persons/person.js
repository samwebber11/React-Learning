import React,{Component} from 'react';
import classes from './person.css';
import Aux from '../../../hoc/Aux'
import Wrapper from '../../../hoc/withClass'
import {AuthContext} from '../../../containers/App'
// import Radium from 'radium'

class Person extends Component {

    constructor(props)
    {
        super(props);
        console.log("I m in Person constructor");
        this.inputGiven = React.createRef();
    }
    componentDidMount()
    {
        console.log("Component Will be Mounted");
        if(this.props.position === 0)
        {
            this.inputGiven.current.focus();
        }
    }
    focus() {
        this.inputGiven.current.focus();
    }
    render(){
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width:'450px'
    //     }
    // }
    return (
            <Aux>
            <AuthContext.Consumer>
            {auth => auth ? <p>I'm authenticated</p>:null}
            </AuthContext.Consumer>
            <p onClick = {this.props.click}>My name is {this.props.name} and my age is {this.props.age}</p>
            <p>{this.props.children}</p>
            <input type="text"
            ref = {this.inputGiven}
            onChange = {this.props.changed}
            placeholder="Enter your name here"
            value = {this.props.name}></input>
            {/* <p>{this.props.click}</p> */}
            </Aux>
    );
}
}


export default Wrapper(Person,classes.person);