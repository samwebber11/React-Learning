import React, { Component } from 'react';
import classes from './App.css';
import PropTypes from 'prop-types'
// import Person from '../Components/Person/Persons/person'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import Persons from '../Components/Person/person'
import Cockpit from '../Components/Cockpit/cockpit'
import Aux from '../hoc/Aux'
import Wrapper from '../hoc/withClass'
// import Radium,{StyleRoot} from 'radium'

export const AuthContext = React.createContext(false);
class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      persons :[
        {id:"res1",name:"sambhav",age:20},
        {id:"res2",name:"mann",age:21},
        {id:"res3",name:"random",age:23}
      ],
      otherState: "Hi i am also there",
      showPersons: false,
      toggleState:0,
      authenticated:false,
    }
    console.log("App.js is in constructor");
  }

  componentWillMount()
  {
    console.log("App.js is in componentMount");
  }
  componentDidMount()
  {
    console.log("App.js mounted a component");
  }
  shouldComponentUpdate(nextProps,nextState)
  {
    console.log("App.js is going to update",nextProps,nextState);
    return nextState.persons !== this.state.persons ||
    nextState.otherState !== this.state.otherState ||
    nextState.showPersons !== this.state.showPersons;
  }
  componentDidUpdate()
  {
    console.log("App.js just got updated");
  }
  componentWillUpdate()
  {
    console.log("App.js will be going to update");
  }
  componentWillReceiveProps(nextProps)
  {
    console.log("App.js is recieving props",nextProps);
  }
  changeNameHandler = (nameChanger)=> {
    this.setState({
    persons :[
      {name:"sam",age:20},
      {name:nameChanger,age:25},
      {name:"random",age:23}
    ],
    })
  }
  changeEventHandler = (event,id) => {
    const person = this.state.persons.findIndex(p => {
      return p.id===id;
    });
      let person1 = {
        ...this.state.persons[person]
      }
      person1.name = event.target.value;
      const persons = [...this.state.persons];
      persons[person] = person1;
      this.setState({
        persons:persons
      });
  }

  deleteNamehandler = (index) => {
    const persons = [...this.state.persons]
    persons.splice(index,1);
    this.setState({
      persons:persons
    })
  }

  togglePersonHandler = () => {
    const show = this.state.showPersons;
    this.setState((prevState,props) => {
      return {
        showPersons:!show,
        toggleState:prevState.toggleState+1
      }
    })
  }

  authenticationUser = () => {
    console.log("Reached here");
    this.setState({
      authenticated:true
    })
  }
  render() {
    // const styling = {
    //   backgroundColor:'green',
    //   color:'white',
    //   font:'inherit',
    //   padding:'8px',
    //   cursor:'pointer',
    //   border: '1px solid blue',
    //   // ':hover':{
    //   //   backgroundColor:'red',
    //   //   color:'white'
    //   // }
    // };

    let persons = null;

    if(this.state.showPersons){
      persons =(
        <div>
          <Persons
          persons = {this.state.persons}
          clicked = {this.deleteNamehandler}
          changed = {this.changeEventHandler}

          />
        </div>
      );


    }

    // styling.color = 'red';
    // styling[':hover'] = {
    //   backgroundColor:'salmon',
    //   color:'white'
    // }
    return (
      // <StyleRoot>
      <Aux>
          <Cockpit
          showTitle = {this.props.title}
          show = {this.state.showPersons}
          persons = {this.state.persons}
          toggle = {this.togglePersonHandler}
          authentication = {this.authenticationUser}
          />
          <AuthContext.Provider value ={this.state.authenticated}>{persons}
          </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work fine?'));
  }

}

export default Wrapper(App,classes.App);
