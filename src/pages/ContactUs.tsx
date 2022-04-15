import React from 'react';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import PageTitle from 'components/PageTitle/PageTitle';
import ContactUsForm from 'components/ContactUsForm/ContactUsForm';
import AdvantagesSection from 'components/AdvantagesSection/AdvantagesSection';

function ContactUs() {
    return (
        <>
            <section className="contact-us-section">
                <Breadcrumbs />
                <PageTitle
                    title='Contact Us'
                />
                <ContactUsForm />
            </section>
            <AdvantagesSection 
              isBackground={true}
            />
        </>
    );
}

export default ContactUs;