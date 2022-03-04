import React from 'react';

class LoginForm extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="customer-login-form">
                <span>Registered Customers</span>
                <span>If you have an account, sign in with your email address.</span>
                <form action="#">
                    <div className="contact-us-form-item">
                        <label>
                            Email <span>*</span>
                            <input type="email" id="email" required value="Your Name"></input>
                        </label>
                    </div>
                    <div className="contact-us-form-item">
                        <label>
                            Your Phone Number
                            <input type="phone" id="phone" value="Your Phone Number"></input>
                        </label>
                    </div>
                    <div>
                        <button type="submit">Sign In</button>
                        <a href="#">Forgot Your Password?</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;