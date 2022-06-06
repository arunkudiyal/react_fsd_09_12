import { PureComponent } from 'react';
import './Person.css'

class Person extends PureComponent {
    static getDerivedStateFromProps = (props, state) => {
        console.log(`[Person.js] getDeriveredStateFromProps`)
        // console.log(props)
        // console.log(state)
        return state
    }

    // shouldComponentUpdate = (newProps, newState) => {
    //     console.log(`[Person.js] shouldComponentUpdate`)
    //     if (this.props.persons !== newProps.persons || this.props.clicked !== newProps.clicked || this.props.delete !== newProps.delete) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    getSnapshotBeforeUpdate(oldProps, oldState) {
        console.log(`[Person.js] getSnapshotBeforeUpdate`)
        const prevValues = [{ ...oldProps }, { ...oldState }]
        console.log(prevValues)
        return prevValues
    }

    componentDidUpdate = () => {
        console.log(`[Person.js] componentDidUpdate`)
    }

    // Clean Up Methods
    componentWillUnmount = () => {
        // Last minute functionalities which is to be performed when the component is destroyed.
        console.log(`[Persons.js] componentWillUnmount`)
    }

    render() {
        console.log(`[Person.js] rendering...`)
        const paraStyles = {
            color: 'red'
        }
        return (
            <div id='person'>
                <div className="container">
                    <p style={paraStyles} className="lead">I am {this.props.name} and I am {this.props.age} years old! </p>
                    <input onChange={this.props.changed} className="form-control" type="text" placeholder="Enter the name" /> <br />
                    <button onClick={this.props.delete} className='btn btn-warning' >Delete Person</button>
                </div>
                <br />
            </div>
        )
    }
}
export default Person;

// function Person(props) {
//     console.log(`[Person.js] rendering...`);
//     // JavaScript
//     const paraStyles = {
//         color: 'red'
//     }
//     return (
//         <div id='person'>
//             <div className="container">
//                 <p style={paraStyles} className="lead">I am {props.name} and I am {props.age} years old! </p>
//                 <input onChange={props.changed} className="form-control" type="text" placeholder="Enter the name" /> <br />
//                 <button onClick={props.delete} className='btn btn-warning' >Delete Person</button>
//             </div>
//             <br />
//         </div>
//     )
// }
// Person.defaultProps = {
//     name: 'Dummy Name',
//     age: 0
// }
// export default Person;