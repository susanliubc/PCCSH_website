import React from 'react';

const Program = (props) => {
    return (
        <div className="container">
            <h2 className="title indigo-text text-darken-3">Service Programs</h2>
            <h3>At the hub, we provide the following service programs:</h3>
            <ul className='browser-default'>
                <li>Information and referral services</li>
                <li>Community outreach</li>
                <li>Space for service providers and grassroots agencies to deliver their services</li>
                <li>Volunteer recruitment and training</li>
                <li>Collaboration with mainstream service organizations to provide and promote the following services: </li>
                <ul className='browser-default'>
                    <li>Employment Information</li>
                    <li>Language training</li>
                    <li>Senior services</li>
                    <li>Youth programs</li>
                    <li>Early learning and parenting programs</li>
                    <li>vulunteer programs</li>
                    <li>Social and civic engagement</li>
                    <li>Community service and bus information dissemination</li>
                </ul>
            </ul>
        </div>
    )
}

export default Program;