import React from 'react';
import './person.css';
import Radium from 'radium'

const person = (props)=>{
    const style = {
        '@media (min-width: 500px)': {
            width:'450px'
        }
    }
    return (
        <div className = "person" style = {style}>
            <p onClick = {props.click}>My name is {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text"
            onChange = {props.changed}
            placeholder="Enter your name here"
            value = {props.name}></input>
            {/* <p>{props.click}</p> */}
        </div>
    );
}

export default Radium(person);