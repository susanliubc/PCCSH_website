import React from 'react';
import board from './images/board.jpg';
import senior from './images/senior.jpg';
import youth from './images/youth.jpg';

const Slider =(props) => {
    return (
        <div className="slider">
             <ul className="slides">
                <li className="active">
                    <img className="responsive-img" src={board} alt=""/>>
                        <div className="caption">
                            <h3>PCCSH board</h3>
                        </div>
                </li>
                <li>
                    <img className="responsive-img" src={senior} alt=""/>
                        <div className="caption">
                            <h3>Senior</h3>
                        </div>
                </li>
                <li>
                    <img className="responsive-img" src={youth} alt=""/>
                        <div className="caption">
                            <h3>Youth</h3>
                        </div>
                </li>
            </ul>
        </div>

    )
}

export default Slider;