function Person(props) {
    return (
        <div className="container">
            <p>I am {props.name} and I am {props.age} years old! </p>
        </div>
    )
}
export default Person;