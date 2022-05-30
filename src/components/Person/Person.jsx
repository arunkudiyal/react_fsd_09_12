import './Person.css'

function Person(props) {
    // JavaScript
    const paraStyles = {
        color: 'red'
    }
    return (
        <div id='person'>
            <div className="container">
                <p style={paraStyles} className="lead">I am {props.name} and I am {props.age} years old! </p>
                <input onChange={props.changed} className="form-control" type="text" placeholder="Enter the name" /> <br />
                <button onClick={props.delete} className='btn btn-warning' >Delete Person</button>
            </div>
            <br />
        </div>
    )
}
Person.defaultProps = {
    name: 'Dummy Name',
    age: 0
}
export default Person;