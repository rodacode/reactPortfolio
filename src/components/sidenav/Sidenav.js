import React from 'react';
import './sidenav.scss';

const Sidenav = (props) => {
    return (
        <div>
            <ul>
                <li>
                    <div className="menu-item-container">
                        <span className="menu-item">
                            All
                                        </span>
                    </div>
                </li>
                <li>
                    <div className="menu-item-container">

                        <span className="menu-item">
                            <i className="devicon-angularjs-plain"></i>Angular
                                        </span>
                    </div>
                </li>
                <li>
                    <div className="menu-item-container">
                        <span className="menu-item">
                            <i className="devicon-react-plain"></i>React
                                        </span>
                    </div>
                </li>
                <li>
                    <div className="menu-item-container">
                        <span className="menu-item">
                            <i className="devicon-vuejs-plain"></i>Vue js
                                        </span>
                    </div>
                </li>
                <li>
                    <div className="menu-item-container">
                        <span className="menu-item">
                            <i className="devicon-javascript-plain"></i>Javascript
                                        </span>
                    </div>
                </li>
                <li>
                    <div className="menu-item-container">
                        <span className="menu-item">
                            About
                                        </span>
                    </div>
                </li>
            </ul>
            <div className="explanation-menu">
                <p className="explanation">material switches & menu</p>
            </div>
        </div>
    );
}

export default Sidenav;