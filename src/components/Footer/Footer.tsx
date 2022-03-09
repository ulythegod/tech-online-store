import React from 'react';
import styles from './footer.module.scss';
import FooterSocials from './FooterSocials';
import FooterMenu from './FooterMenu';
import FooterSubscribeForm from './FooterSubscribeForm';
import FooterCards from './FooterCards';
import FooterChatButton from './FooterChatButton';

class Footer extends React.Component {
    render(): React.ReactNode {
        return (
            <footer className={`${styles["footer"]}`}>
                <FooterSubscribeForm />
                <FooterMenu />
                <div className="footer-bottom-section">
                    <FooterSocials />
                    <FooterCards />
                    <span>Copyright © 2020 Shop Pty. Ltd.</span>
                </div>
                <FooterChatButton />
            </footer>
        );
    }
}

export default Footer;
