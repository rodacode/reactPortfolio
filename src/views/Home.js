import React, { useState } from 'react';
import Header from '../components/header/Header';
import Gallery from '../components/gallery/Gallery';

const Home = () => {
    return (
        <div className="container">
            <Header />
            <Gallery />
        </div>
    );
}

export default Home;