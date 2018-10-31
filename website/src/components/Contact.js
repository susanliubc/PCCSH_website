import React from 'react';
import GoogleMap from './Googlemap';

const Contact = (props) => {
    return (
        <div className="container center-align">
            <h2 className="title indigo-text text-darken-3">Contact</h2>
            <h4 className="center">
                PCCSH is located at:
            </h4>
            <p className="center">3034 Palston Road, Suite M7</p>
            <p className="center">Mississauga, Ontario, L4Y 2Z6</p>

            <h5 className="phone center">Phone: 647-757-1238</h5>
            <h5 className="email center">Email: info@pccsh.net</h5>
            <GoogleMap />
        </div>
    )
}

export default Contact;