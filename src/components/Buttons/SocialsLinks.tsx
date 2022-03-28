import React from 'react';
import { ReactComponent as FacebookIcon } from '../../images/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../images/instagram.svg';

function SocialsLinks(props: any): any {
    return (
        <>
            <a href="#"><FacebookIcon /></a>
            <a href="#"><InstagramIcon /></a>
        </>
    );
}

export default SocialsLinks;