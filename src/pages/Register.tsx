import React from 'react';
import Breadcrumbs from 'components/CommonComponents/Breadcrumbs';
import PageTitle from 'components/CommonComponents/PageTitle';
import LoginForm from 'components/LoginForm/LoginForm';
import LoginInfo from 'components/LoginForm/LoginInfo';
import AdvantagesSection from 'components/AdvantagesSection/AdvantagesSection';

function Register(props: any): any {
    return (
        <>
            <section className="register-section">
                <Breadcrumbs />
                <PageTitle
                    title='Customer Login'
                />
                <LoginForm/>
            </section>
            <AdvantagesSection 
              isBackground={true}
            />
        </>
    );
}

export default Register;