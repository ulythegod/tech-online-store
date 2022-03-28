import React from 'react';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import PageTitle from 'components/PageTitle/PageTitle';
import LoginForm from 'components/LoginForm/LoginForm';
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