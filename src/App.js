import React, { Component } from 'react';
import './App.css';
import Person from './Persons/person'
// import Radium,{StyleRoot} from 'radium'

class App extends Component {
  state =  {
    persons :[
      {id:"res1",name:"sambhav",age:20},
      {id:"res2",name:"mann",age:21},
      {id:"res3",name:"random",age:23}
    ],
    otherState: "Hi i am also there",
    showPersons: false
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
    this.setState({
      showPersons:!show
    })
  }
  render() {
    const styling = {
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      padding:'8px',
      cursor:'pointer',
      border: '1px solid blue',
      // ':hover':{
      //   backgroundColor:'red',
      //   color:'white'
      // }
    };

    let persons = null;

    if(this.state.showPersons){
      persons =(
        <div>
         {
           this.state.persons.map((person,index) => {
            return <Person
            click = {()=> this.deleteNamehandler(index)}
            name = {person.name}
            age = {person.age}
            key = {person.id}
            changed = {(event) => this.changeEventHandler(event,person.id)}
            />
         })}
        </div>
      );
    }

    styling.color = 'red';
    // styling[':hover'] = {
    //   backgroundColor:'salmon',
    //   color:'white'
    // }
    const classes = [];
    if(this.state.persons.length <=2)
    {
      classes.push('red');
    }
    if(this.state.persons.length<=1)
    {
      classes.push('bold');
    }

    return (
      // <StyleRoot>
      <div className="App">
          <h1>Hello I am Sambhav</h1>
          <p className={classes.join(' ')}>I know how to work</p>
          <button
          style={styling}
          // onClick={this.changeNameHandler.bind(this,'Kumar Sambhav')
          onClick = {this.togglePersonHandler}
          >
          Switch some Name
          </button>
          {persons}
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work fine?'));
  }
}

export default App;
