import React from 'react';
import loadImageFromImagekit from '../utils/ImagekitMediaImports';

// object stylings

const headerStyle = {
    // width: '94%',
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const headerLogoStyle = {
    width: '125px'
}

const headerOptionsList = {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '1.8em'
}

const headerOptions = [
    {
        'title': 'Screencasts'
    },
    {
        'title': 'GitHub'
    },
    {
        'title': 'Docs'
    },
    {
        'title': 'Login'
    }
]

export default function Header() {
    return (
        <div className="view header p-top-5" style={headerStyle}>
            <div className="header-logo-wrapper">
                <img 
                    src={loadImageFromImagekit('gitspace-logo-with-title-landscape', 'svg')} 
                    alt="gitspace-logo" 
                    className="gitspace-logo"
                    style={headerLogoStyle}
                />
            </div>
            <div className="header-options-list-wrapper">
                <ul className="header-options-list" style={headerOptionsList}>
                    {headerOptions.map((option, index) => (
                        <li className="header-option-item" key={index}>
                            <a className="header-option-link link neutral-gray-400">{option.title}</a>
                        </li>
                    ))}
                    <button className="primary-btn">Create your GitSpace</button>
                </ul>
            </div>
        </div>
    )
}