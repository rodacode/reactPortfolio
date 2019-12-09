import React, { useEffect } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import './header.scss';
import Sidenav from '../sidenav/Sidenav';
import { useSelector } from "react-redux";
import { TweenMax } from "gsap";
import CSSPlugin from 'gsap/CSSPlugin';
const C = CSSPlugin;  // here is the gotcha....

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

        const toggleDrawer = (side, open) => event => {
                if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                        return;
                }

                setState({ ...state, [side]: open });
        };

        const explanation = useSelector(state => state.explanation);
        useEffect(() => {
                TweenMax.from(
                        '.title', 2,
                        { opacity: 0, scale: 1.5, x: 500, ease: "back" }
                );
                TweenMax.from(
                        '.subtitle', 4,
                        { opacity: 0, scale: 0.5, ease: "back" }
                );
                TweenMax.from(
                        '.social__icons', 4,
                        { delay:2, x:400, ease: "back", rotation: 360, stagger: 0.20 }
                );
        }, []);
        return (
                <div className="header">
                        <Button onClick={toggleDrawer('left', true)}><Icon>menu</Icon>
                        </Button>
                        <div className="name">
                                <h1 className="title">Nicolas Hardmeier</h1>
                                <h4 className="subtitle">Front-end Developer</h4>
                        </div>
                        <div className="social__links">
                                <ul>
                                        <li>
                                                <a href="https://github.com/nicohardmeier">
                                                        <i className="social__icons fa fa-github fa-2x"></i>
                                                </a>
                                        </li>
                                        <li>
                                                <a href="https://www.linkedin.com/in/nicolas-h-0812baa9/">
                                                        <i className="social__icons fa fa-linkedin fa-2x"></i>
                                                </a>
                                        </li>
                                </ul>
                        </div>
                        {explanation ? <ExplanationHeader /> : null}

                        <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                                <Sidenav />
                        </Drawer>
                </div>

        );
}

export default Header;