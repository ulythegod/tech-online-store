import React from 'react';
import Breadcrumbs from 'components/CommonComponents/Breadcrumbs';
import PageTitle from 'components/CommonComponents/PageTitle';
import LoginForm from 'components/Register/LoginForm';
import LoginInfo from 'components/Register/LoginInfo';

class Register extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <section className="register-section">
                <Breadcrumbs />
                <PageTitle
                    title='Customer Login'
                />
                <div className="customer-login-block">
                    <LoginForm/>
                    <LoginInfo />
                </div>
            </section>
        );
    }
}

export default Register;