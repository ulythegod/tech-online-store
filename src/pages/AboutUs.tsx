import React from 'react';
import Breadcrumbs from 'components/CommonComponents/Breadcrumbs';
import PageTitle from 'components/CommonComponents/PageTitle';
import AboutUsLeft from 'components/AboutUs/AboutUsLeft';
import AboutUsRight from 'components/AboutUs/AboutUsRight';
import ReviewsSection from 'components/ReviewsSection/ReviewsSection';
import AdvantagesSection from 'components/AdvantagesSection/AdvantagesSection';
import au1 from '../images/about-us1.png';
import au2 from '../images/about-us2.png';
import aui1 from '../images/about-us-sign1.png';
import au3 from '../images/about-us3.png';
import aui2 from '../images/about-us-sign2.png';
import au4 from '../images/about-us4.png';
import au5 from '../images/about-us5.png';
import aui4 from '../images/about-us-sign4.png';

function AboutUs(props: any): any {
    return (
        <>
            <Breadcrumbs />
            <PageTitle
                title='About Us'
            />
            <AboutUsRight
                image={au1}
                title="A Family That Keeps On Growing"
                description={`
                    <p>
                        We always aim to please the home market, supplying 
                        great computers and hardware at great prices to 
                        non-corporate customers, through our large Melbourne 
                        CBD showroom and our online store.
                    </p>
                    <p>
                        Shop management approach fosters a strong customer 
                        service focus in our staff. We prefer to cultivate 
                        long-term client relationships rather than achieve 
                        quick sales, demonstrated in the measure of our 
                        long-term success.
                    </p>
                `}
            />
            <AboutUsLeft
                image={au2}
                title="shop.com"
                description={`
                    <p>
                        Shop is a proudly Australian owned, Melbourne based 
                        supplier of I.T. goods and services, operating since 
                        1991. Our client base encompasses individuals, small 
                        business, corporate and government organisations. We 
                        provide complete business IT solutions, centred on 
                        high quality hardware and exceptional customer service.
                    </p>
                `}
                icon={aui1}
            />
            <AboutUsRight
                image={au3}
                title="You're In Safe Hands"
                description={`
                    <p>
                        Experience a 40% boost in computing from last 
                        generation. MSI Desktop equips the 10th Gen. 
                        Intel® Core™ i7 processor with the upmost computing 
                        power to bring you an unparalleled gaming experience.
                    </p>
                    <p>
                        *Performance compared to i7-9700. Specs varies by model.
                    </p>
                `}
                icon={aui2}
            />
            <AboutUsLeft
                image={au4}
                title="The Highest Quality of Products"
                description={`
                    <p>
                        We guarantee the highest quality of the products we 
                        sell. Several decades of successful operation and 
                        millions of happy customers let us feel certain about 
                        that. Besides, all items we sell pass thorough quality 
                        control, so no characteristics mismatch can escape 
                        the eye of our professionals.
                    </p>
                `}
                icon={aui1}
            />
            <AboutUsRight
                image={au5}
                title="Delivery to All Regions"
                description={`
                    We deliver our goods all across Australia. No matter 
                    where you live, your order will be shipped in time and 
                    delivered right to your door or to any other location 
                    you have stated. The packages are handled with utmost 
                    care, so the ordered products will be handed to you 
                    safe and sound, just like you expect them to be.
                `}
                icon={aui4}
            />
            <ReviewsSection />
            <AdvantagesSection 
              isBackground={true}
            />
        </>
    );
}

export default AboutUs;