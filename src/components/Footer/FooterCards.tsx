import React from 'react';
import payPal from '../../images/paypal.png';
import visa from '../../images/visa.png';
import maestro from '../../images/maestro.png';
import discover from '../../images/discover.png';
import americanExpress from '../../images/american-express.png';

class FooterCards extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="footer-cards">
                <a href="#"><img src={payPal} alt="paypal" /></a>
                <a href="#"><img src={visa} alt="visa" /></a>
                <a href="#"><img src={maestro} alt="maestro" /></a>
                <a href="#"><img src={discover} alt="discover" /></a>
                <a href="#"><img src={americanExpress} alt="american-express" /></a>
            </div>
        );
    }
}

export default FooterCards;
