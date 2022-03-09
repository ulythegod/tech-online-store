import React from 'react';
import styles from './mainBanner.module.scss';
import { ReactComponent as ZipLogo } from '../../images/zip-logo.svg';

class MainBanner extends React.Component {
    render(): React.ReactNode {
        return (
            <section className={`${styles["main-banner-section"]}`}>
                <p className={`${styles["main-banner"]}`}>
                    <ZipLogo className={`${styles["banner-logo"]}`} />
                    <span className={`${styles["banner-text"]}`}><span>own</span> it now, up to 6 months interest free <a href="#">learn more</a></span>
                </p>
            </section>
        );
    }
}

export default MainBanner;
