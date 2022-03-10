import React from 'react';
import styles from './footerSocials.module.scss';
import { ReactComponent as FacebookIcon } from '../../images/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../images/instagram.svg';

class FooterSocials extends React.Component {
    render(): React.ReactNode {
        return (
            <div className={`${styles["footer-socials"]}`}>
                <a href="#"><FacebookIcon /></a>
                <a href="#"><InstagramIcon /></a>
            </div>
        );
    }
}

export default FooterSocials;
