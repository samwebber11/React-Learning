import React,{Component} from 'react';
import classes from './person.css';
import Aux from '../../../hoc/Aux'
import Wrapper from '../../../hoc/withClass'
// import Radium from 'radium'

class Person extends Component {
render(){
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width:'450px'
    //     }
    // }
    return (
            <Aux>
            <p onClick = {this.props.click}>My name is {this.props.name} and my age is {this.props.age}</p>
            <p>{this.props.children}</p>
            <input type="text"
            onChange = {this.props.changed}
            placeholder="Enter your name here"
            value = {this.props.name}></input>
            {/* <p>{this.props.click}</p> */}
            </Aux>
    );
}
}

export default Wrapper(Person,classes.person);