import React from 'react';

const Volunteer = (props) => {
     return (
         <div className="container volunteer">
            <h2 className="title indigo-text text-darken-3">
                Volunteer at PCCSH
            </h2>
            <h3>Volunteer Recruitment</h3>
            <p>We are currently recruting volunteers to assist us in the following activities: </p>
            <ul className='browser-default'>
                <li>Information / referall</li>
                <li>Reception / Office</li>
                <li>Interpretation / translation</li>
                <li>Outreach</li>
                <li>Special events</li>
                <li>Computer / technical support</li>
            </ul>
         </div>
     )
}

export default Volunteer;