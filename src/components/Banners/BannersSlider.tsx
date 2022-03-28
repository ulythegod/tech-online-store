import React from 'react';
import styles from './bannersSlider.module.scss';
import TurnOverButton from 'components/Buttons/TurnOverButton';
import banner from '../../images/banner.png';

function BannersSlider(props: any): any {
    return (
        <section className="main-banners-section">
            <div className={`${styles["main-banners"]}`}>
                <img className={`${styles["banner"]}`} src={banner} alt="banner main" />
                <TurnOverButton
                    type="button-left"
                />
                <TurnOverButton
                    type="button-right"
                />
            </div>
        </section>
    );
}

export default BannersSlider;
