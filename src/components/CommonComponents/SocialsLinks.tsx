import React from 'react';
import { ReactComponent as FacebookIcon } from '../../images/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../images/instagram.svg';

class SocialsLinks extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <>
                <a href="#"><FacebookIcon /></a>
                <a href="#"><InstagramIcon /></a>
            </>
        );
    }
}

export default SocialsLinks;