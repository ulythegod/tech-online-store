import React from 'react';

class FooterSubscribeForm extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="subscribe-form-footer">
                <div className="form-description">
                    <span>Sign Up To Our Newsletter.</span>
                    <span>Be the first to hear about the latest offers.</span>
                </div>
                <form className="subscribe-form" action="#">
                    <input type="email" />
                    <button>Subscribe</button>
                </form>
            </div>
        );
    }
}

export default FooterSubscribeForm;
