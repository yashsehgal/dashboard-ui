import React from 'react';

export default function HeroSection() {
    return (
        <div className="home_hero-section">
            <h1 className="hero-section-headline neutral-gray-800 m-top-20"
                style={{ 
                    fontSize: '60px',
                    marginTop: '3em'
                }}
            >
                A great <span className="color-blue-700">space</span> for <br />
                all of your projects 🌌
            </h1>
            <div className="button-list-wrapper m-top-6" 
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2.4em'
                }}
            >
                <button className="primary-btn">Create your first GitSpace</button>
                <button className="outline-btn">Get started with docs</button>
            </div>
        </div>
    )
}