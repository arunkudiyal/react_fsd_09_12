function Person(props) {
    // JavaScript
    return (
        <div>
            <div className="container">
                <p className="lead">I am {props.name} and I am {props.age} years old! </p>
                <input onChange={props.changed} className="form-control" type="text" placeholder="Enter the name" />
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