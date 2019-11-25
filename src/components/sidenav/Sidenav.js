import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Switch from '@material-ui/core/Switch';
import './sidenav.scss';

const Sidenav = () => {
    const selectedTag = useSelector(state => state.selectedTag);
    const explanation = useSelector(state => state.explanation);
    const dispatch = useDispatch();
    const setTag = e => dispatch({ type: 'SET_TAG', payload: e.target.value })
    const ExplanationSidenav = () => {
        return (
            <div className="explanation__menu">
                <p className="explanation">material UI switches that filter the projects</p>
            </div>
        );
    }
    return (
        <div className="sidenav">
            { explanation ? <ExplanationSidenav/> : null }
            <p className="title">Projects:</p>
            <ul>
                <li>
                    <div className="menu-item-container">
                        <span className="sidenav__item">
                            All
                                        </span>      <Switch
                            checked={selectedTag === 'all'}
                            onChange={setTag}
                            value='all'
                            color="primary"
                        />
                    </div>
                </li>
                <li>
                    <div className="menu-item-container">
                        <span className="menu-item">
                            <i className="devicon-angularjs-plain"></i>Angular
                                        </span>
                        <Switch
                            checked={selectedTag === 'angular'}
                            onChange={setTag}
                            value="angular"
                            color="primary"
                        />
                    </div>
                </li>
                <li>
                    <div className="menu-item-container">
                        <span className="menu-item">
                            <i className="devicon-react-plain"></i>React
                                        </span>
                        <Switch
                            checked={selectedTag === 'react'}
                            onChange={setTag}
                            value="react"
                            color="primary"
                        />
                    </div>
                </li>
                <li>
                    <div className="menu-item-container">
                        <span className="menu-item">
                            <i className="devicon-vuejs-plain"></i>Vue js
                                        </span>
                        <Switch
                            checked={selectedTag === 'vue'}
                            onChange={setTag}
                            value="vue"
                            color="primary"
                        />
                    </div>
                </li>
                <li>
                    <div className="menu-item-container">
                        <span className="menu-item">
                            <i className="devicon-javascript-plain"></i>Javascript
                                        </span>
                        <Switch
                            checked={selectedTag === 'javascript'}
                            onChange={setTag}
                            value="javascript"
                            color="primary"
                        />
                    </div>
                </li>
                <li>
                    <div className="menu-item-container">
                        <span className="menu-item">
                            About
                                        </span>
                        <Switch
                            checked={selectedTag === 'about'}
                            onChange={setTag}
                            value="about"
                            color="primary"
                        />
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Sidenav;