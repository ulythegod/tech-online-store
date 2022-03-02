import React from 'react';
import { ReactComponent as ArrowRight } from '../images/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../images/arrow-left.svg';
import banner from '../images/banner.png';

class MainBanners extends React.Component {
    render(): React.ReactNode {
        return (
            <section className="main-banners-section">
                <button><ArrowRight /></button>
                <img src={banner} alt="banner main" />
                <button><ArrowLeft /></button>
            </section>
        );
    }
}

export default MainBanners;
