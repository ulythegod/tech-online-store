import React from 'react';

class LoginInfo extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="customer-login-info">
                <span>New Customer?</span>
                <span>Creating an account has many benefits:</span>
                <p>
                    <ul>
                        <li>Check out faster</li>
                        <li>Keep more than one address</li>
                        <li>Track orders and more</li>
                    </ul>
                </p>
                <button>Create An Account</button>
            </div>
        );
    }
}

export default LoginInfo;