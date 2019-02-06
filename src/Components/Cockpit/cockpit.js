import React,{Component} from 'react'
import classes  from './cockpit.css'
import Aux from '../../hoc/Aux'
import Wrapper from '../../hoc/withClass'

class Cockpit extends Component{

  componentWillMount()
  {
    console.log("Cokpit.js is in componentMount");
  }
  componentDidMount()
  {
    console.log("Cockpit.js mounted a component");
  }
  shouldComponentUpdate(nextProps,nextState)
  {
    console.log("Cockpit.js is going to update",nextProps,nextState);
    return nextProps.persons !== this.props.persons;
  }
  componentDidUpdate()
  {
    console.log("Cockpit.js just got updated");
  }
  componentWillUpdate()
  {
    console.log("Cockpit.js will be going to update");
  }
  componentWillReceiveProps(nextProps)
  {
    console.log("Cockpit.js is recieving props",nextProps);
  }
    render(){
    let buttonClass = classes.Button;
    if(this.props.show)
    {
        buttonClass = [classes.Button,classes.Red].join(' ');
    }
    const assignClass = [];
    if(this.props.persons.length <=2)
    {
        assignClass.push(classes.red);
    }
    if(this.props.persons.length <=1)
    {
        assignClass.push(classes.bold);
    }
    return (
    <Aux>
    <h1>{this.props.showTitle}</h1>
    <p className={assignClass.join(' ')} >
    I know how to work</p>
    <button
    className={buttonClass}
    // onClick={this.changeNameHandler.bind(this,'Kumar Sambhav')
    onClick = {this.props.toggle}>
    Switch some Name
    </button>
    <button onClick = {this.props.authentication}>Log In</button>
    </Aux>
    );
}
}

export default Wrapper(Cockpit,classes.Cockpit);