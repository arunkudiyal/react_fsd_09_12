import { useState, useEffect } from 'react'
import './Footer.css'

const Footer = (props) => {
    const [someStateValue, setSomeStateValue] = useState('Some Other State Value')
    console.log(someStateValue)

    // API call only when the component is rendered for the first time
    useEffect(() => {
        console.log(`[Footer.js] useEffect - GET to a URL`)
        // AJAX Call / Side-effect
    }, [])

    useEffect(() => {
        console.log(`[Footer.js] useEffect`)
        // Some side-effects
        setTimeout(() => {
            alert('Data Sent to Database!')
        }, 2000)
    }, [props.personsList])

    var footer = (
        <div className='container'>
            <div className='parent-div'>
                <p>{props.text}</p>
                <button onClick={props.removeFooter} className='btn btn-primary'>Contact Us</button>
            </div>
        </div>
    )

    return (
        <div>
            {props.showFooter ? { footer } : null}
        </div>
    )
}
export default Footer;