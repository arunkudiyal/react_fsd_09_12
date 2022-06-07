import { useState, useEffect } from 'react'
import './Footer.css'

const Footer = (props) => {
    const [someStateValue, setSomeStateValue] = useState('Some Other State Value')

    // This useEffect will be effective for every re-render
    // useEffect(() => {
    //     console.log('This Works!')
    // })

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

    //  Clean Up Functionalities / Disconnect from API / Disconnect from DB
    useEffect(() => {
        return () => { console.log(`[Footer.js] useEffect Cleanup Process`) }
    })

    return (
        <div>
            {
                props.showFooter ? <div className='container'>
                    <div className='parent-div'>
                        <p>{props.text}</p>
                        <button onClick={props.removeFooter} className='btn btn-warning'>Remove Footer</button>
                    </div>
                </div> : null}
        </div>
    )
}
export default Footer;