import React from 'react';
import Slider from './Slider'
import funded from './images/funded.jpg';
import partner from './images/partner.jpg';

const Home = (props) => {
    return (
        <div className="container">
            <Slider />
            <h2 className="title center">Welcome to PCCSH website!</h2>
            <div>
                <img className="funded responsive-img center-block" src={funded} alt=""/>
            </div>
            <div>
                <img className="partner responsive-img center-block" src={partner} alt=""/>
            </div>
        </div>
    )
}

export default Home;