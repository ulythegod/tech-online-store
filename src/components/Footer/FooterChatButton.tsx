import React from 'react';
import chatButton from '../../images/chat-button.png';

class FooterChatButton extends React.Component {
    render(): React.ReactNode {
        return (
            <button className="chat-button">
                <img src={chatButton} alt="" />
            </button>
        );
    }
}

export default FooterChatButton;
