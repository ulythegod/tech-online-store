import React from 'react';
import { ReactComponent as ZipLogo } from '../images/zip-logo.svg';

class MainBanner extends React.Component {
    render(): React.ReactNode {
        return (
            <section className="main-banner-section">
                <p>
                    <ZipLogo />
                    <span>own it now, up to 6 months interest free <a href="#">learn more</a></span>
                </p>
            </section>
        );
    }
}

export default MainBanner;
