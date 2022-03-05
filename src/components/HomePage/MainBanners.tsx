import React from 'react';
import styles from './mainBanners.module.scss';
import TurnOverButton from 'components/CommonComponents/TurnOverButton';
import banner from '../../images/banner.png';

class MainBanners extends React.Component {
    render(): React.ReactNode {
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
}

export default MainBanners;
