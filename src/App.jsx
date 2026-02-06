import React from 'react';
import './index.css';
import Hero from './components/Hero';
import Features from './components/Features';
import DownloadButtons from './components/DownloadButtons';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Hero />
            <Features />
            <DownloadButtons />
            <Footer />
        </div>
    );
}

export default App;
