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
                <p className="hero-section-description neutral-gray-500 m-top-3" style={{ fontSize: '20px' }}>
                    A great tool for teams and if you want to work in a team, <b className="color-green-900">virtaully</b>
                </p>
                <div className="button-list-wrapper m-top-6" 
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2.4em'
                    }}
                >
                    <button className="primary-btn">Create your first GitSpace</button>
                    <button className="text-btn">Get started with docs</button>
                </div>
            </div>
            {/* image source by gitpod :D */}
            <div className="large-demo-image-wrapper">
                <img src={VirtualRoomImage} alt="virtual-room-graphic" className="" style={{ width: '520px' }} />
            </div>
        </div>
    )
}