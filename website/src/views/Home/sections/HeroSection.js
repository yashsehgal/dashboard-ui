import React from 'react';
import VirtualRoomImage from '../../../assets/illustration-large.jpg';

export default function HeroSection() {
    return (
        <div className="home_hero-section m-top-8" 
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <div className="content-cta-section">
                <h1 className="hero-section-headline neutral-gray-800"
                    style={{ 
                        fontSize: '60px'
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
            {/* image source by gitpod :D */}
            <div className="large-demo-image-wrapper">
                <img src={VirtualRoomImage} alt="virtual-room-graphic" className="" style={{ width: '520px' }} />
            </div>
        </div>
    )
}