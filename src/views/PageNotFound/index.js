import './style.views.page-not-found.css';
import React from 'react';
import { PrimaryButton, PrimaryButtonLarge } from '../../styled-components/widgets/Button';

export default function PageNotFound() {
    return (
        <div className="view page-not-found">
            <h1>404 Page not found!!</h1>
            <p>We think you've got a wrong link, go to the home page</p>
            <div className="button-wrapper" onClick={() => (window.location.href = '/')}
                style={{
                    width: 'fit-content',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    marginTop: '2.4em'
                }}
            >
                <PrimaryButtonLarge value="Go to home" />
            </div>
        </div>
    )
}