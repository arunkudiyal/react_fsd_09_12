function Person(props) {
    // JavaScript
    return (
        <div className="container">
            <p className="lead">I am {props.name} and I am {props.age} years old! </p>
            {/* {props.children} */}
        </div>
    )
}
Person.defaultProps = {
    name: 'Dummy Name',
    age: 0
}
export default Person;