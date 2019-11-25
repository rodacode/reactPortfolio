import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import './header.scss';
import Sidenav from '../sidenav/Sidenav';
import { useSelector } from "react-redux";

const ExplanationHeader = () => {
        return (
                <div className="explanation-div">
                <p className="explanation">header component</p>
        </div>
        );
    }
const Header = (props) => {
        const [state, setState] = React.useState({
                top: false,
                left: false,
                bottom: false,
                right: false,
        });
        const explanation = useSelector(state => state.explanation);

        const toggleDrawer = (side, open) => event => {
                if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                        return;
                }

                setState({ ...state, [side]: open });
        };

        return (
                <div className="header">
                        <Button onClick={toggleDrawer('left', true)}><Icon>menu</Icon>
                        </Button>
                        <div className="name">
                                <h1 className="title">Nicolas Hardmeier</h1>
                                <h4 className="subtitle">Front-end Developer</h4>
                        </div>
                        <div className="social-links">
                                <ul>
                                        <li>
                                                <a href="https://github.com/nicohardmeier">
                                                        <i className="fa fa-github fa-2x"></i>
                                                </a>
                                        </li>
                                        <li>
                                                <a href="https://www.linkedin.com/in/nicolas-h-0812baa9/">
                                                        <i className="fa fa-linkedin fa-2x"></i>
                                                </a>
                                        </li>
                                </ul>
                        </div>
                        { explanation ? <ExplanationHeader/> : null }

                        <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                                <Sidenav/>
                        </Drawer>
                </div>

        );
}

export default Header;