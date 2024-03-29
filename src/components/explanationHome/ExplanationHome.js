import React, { useEffect } from 'react';
import './explanationHome.scss';
import { TweenMax } from "gsap";
import CSSPlugin from 'gsap/CSSPlugin';

const C = CSSPlugin;

const ExplanationHome = () => {
    useEffect(() => {
        TweenMax.from(
            '.explanationDiv',
            { duration: 18, opacity: 0, ease:'power4'}
        );

    }, []);
    return (
        <div className="explanationDiv">
            <div className="explanation__state">
                <p>
                    <span className="explanation">Redux state managment - React Hooks</span>
                </p>
            </div>
            <div className="explanation__gallery">
                <p className="explanation">Gallery component - Array of projects</p>
            </div>
            <div className="explanation__component">
                <p className="explanation">Card component - Material UI</p>
            </div>
        </div>
    );
}

export default ExplanationHome;