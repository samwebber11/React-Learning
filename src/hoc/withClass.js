import React,{Component} from 'react'

const wrapper = (WrappedComponent,className)=> {
    const Wrapping = class extends Component {
        render() {
            return (
            <div className = {className}>
               <WrappedComponent ref = {this.props.forwardRefs} {...this.props}/>
            </div>);
        }
    }
    return React.forwardRef((props,ref) => {
        return <Wrapping {...props} forwardRefs = {ref}/>
    });
}

export default wrapper;