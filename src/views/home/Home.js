import React from 'react';
import Header from '../../components/header/Header';
import Gallery from '../../components/gallery/Gallery';
import ExplanationHome from '../../components/explanationHome/ExplanationHome';

import Switch from '@material-ui/core/Switch';
import { useSelector, useDispatch } from "react-redux";
import './home.scss';

const Home = () => {
    const selectedTag = useSelector(state => state.selectedTag);
    const explanation = useSelector(state => state.explanation);

    const dispatch = useDispatch();
    return (
        <div className="home__container container">
            <Header />
            <div className="explanation-switch">
                <div> Selected Tag: <strong>{selectedTag}</strong></div>
                <span className="explanation-text">Turn on/off explanation: {explanation}</span>
                <Switch
                    checked={explanation === true}
                    onChange={() => dispatch({ type: 'TOGGLE_EXPLANATION' })}
                    color="primary" />
                    { explanation ? <span>ON</span> : <span>OFF</span>}
            </div>
            {explanation ? <ExplanationHome /> : null}
            <div className="gallery__container">
                <Gallery />
            </div>
        </div>
    );
}

export default Home;