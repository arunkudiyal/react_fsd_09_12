function Button(props) {
    // Outside return( JSX ) --> JS
    console.log(props)
    let btnColorClass = `btn btn-${props.color}`
    return (
        <div>
            {/* Here you can write JS*/}
            <button className={btnColorClass} > {props.text} </button>
        </div>
    )
}

Button.defaultProps = {
    text: 'Default Text',
    color: 'primary'
}
export default Button;

// function add(a, b) {
//     return 20 + 30
// }
// Where are the values of a & b going to come from ?
// Call the function --> sum = add(10, 20)