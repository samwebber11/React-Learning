import React,{Component} from 'react';
import Person from './Persons/person'

class Person1 extends Component {
    render(){
    return this.props.persons.map((person,index) => {
        return <Person
        name = {person.name}
        age = {person.age}
        key = {person.id}
        click = {() => this.props.clicked(index)}
        changed = {(event) => this.props.changed(event,person.id)}
        />
    })
    }
}

export default Person1;