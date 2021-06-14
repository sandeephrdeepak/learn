import React from 'react'
import Formdemo from './Formdemo'

function Contact(props) {
    return (
        <div>
            <h1>This is Contact  Component {props.match.params.id} </h1>
            <Formdemo/>
        </div>
    )
}

export default Contact
