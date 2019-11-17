import React, { useState } from 'react';
import Header from '../components/header/Header';
import Gallery from '../components/gallery/Gallery';
import Switch from '@material-ui/core/Switch';

const Home = () => {
    return (
        <div className="container">
            <Header />
            <div className="explanation-switch">
                <span class="explanation-text">Explanation</span>
                <Switch></Switch>
            </div>
            <div class="explanation-state" v-if="getExplanation">
                <p>
                    <span class="explanation">Redux state managment - Pure React Hooks</span>
                </p>
            </div>
            <div class="explanation-component">
                <p class="explanation">Card component - Material UI</p>
            </div>
            <Gallery />
        </div>
    );
}

export default Home;