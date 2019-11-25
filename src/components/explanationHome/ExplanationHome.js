import React from 'react';
import './explanationHome.scss';


const ExplanationHome = () => {
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