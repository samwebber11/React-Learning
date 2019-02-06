import React,{Component} from 'react';
import Person from './Persons/person'
import PropTypes from 'prop-types'

class Person1 extends Component {

    constructor(props)
    {
        super(props);
        console.log("Entering in the constructor");
        this.lastPerson = React.createRef();
    }

    componentDidMount(){
        console.log("Entering in the did mount component");
        this.lastPerson.current.focus();
    }

    render(){
    return this.props.persons.map((person,index) => {
        return <Person
        name = {person.name}
        age = {person.age}
        key = {person.id}
        position = {index}
        ref = {this.lastPerson}
        click = {() => this.props.clicked(index)}
        changed = {(event) => this.props.changed(event,person.id)}
        />
    })
    }
}
Person1.PropTypes = {
    clicked: PropTypes.func,
    changed: PropTypes.func ,
    persons:PropTypes.array
}

export default Person1;