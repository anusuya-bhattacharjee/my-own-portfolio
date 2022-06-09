import React from 'react';
import Contact from '../Contact/Contact';
import Intro from '../Intro/Intro';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div className="px-12">
            <Navbar></Navbar>
            <Intro></Intro>
            <Contact></Contact>
        </div>
    );
};

export default Home;