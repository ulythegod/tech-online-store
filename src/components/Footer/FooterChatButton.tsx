import React from 'react';
import styles from './footerChatButton.module.scss';
import chatButton from '../../images/chat-button.png';

class FooterChatButton extends React.Component {
    render(): React.ReactNode {
        return (
            <button className={`${styles["chat-button"]}`}>
                <img src={chatButton} alt="" />
            </button>
        );
    }
}

export default FooterChatButton;
