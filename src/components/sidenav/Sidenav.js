import React from 'react';
import Switch from '@material-ui/core/Switch';

import './sidenav.scss';

const Sidenav = (props) => {
    return (
        <div className="sidenav">
            <p className="title">Projects:</p>
            <ul>
                <li>
                    <div className="menu-item-container">
                        <span className="sidenav__item">
                            All
                                        </span>      <Switch
                            defaultChecked
                            value="checkedF"
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                    </div>
                </li>
                <li>
                    <div className="menu-item-container">
                        <span className="menu-item">
                            <i className="devicon-angularjs-plain"></i>Angular
                                        </span>
                        <Switch
                            defaultChecked
                            value="checkedF"
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                    </div>
                </li>
                <li>
                    <div className="menu-item-container">
                        <span className="menu-item">
                            <i className="devicon-react-plain"></i>React
                                        </span>
                        <Switch
                            defaultChecked
                            value="checkedF"
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                    </div>
                </li>
                <li>
                    <div className="menu-item-container">
                        <span className="menu-item">
                            <i className="devicon-vuejs-plain"></i>Vue js
                                        </span>
                        <Switch
                            defaultChecked
                            value="checkedF"
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                    </div>
                </li>
                <li>
                    <div className="menu-item-container">
                        <span className="menu-item">
                            <i className="devicon-javascript-plain"></i>Javascript
                                        </span>
                        <Switch
                            defaultChecked
                            value="checkedF"
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                    </div>
                </li>
                <li>
                    <div className="menu-item-container">
                        <span className="menu-item">
                            About
                                        </span>
                        <Switch
                            defaultChecked
                            value="checkedF"
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
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