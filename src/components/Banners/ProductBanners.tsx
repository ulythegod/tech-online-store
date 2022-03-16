import React from 'react';
import styles from './productBanners.module.scss';
import { ReactComponent as PaginationButton } from '../../images/pagiantion-button.svg';
import banner from '../../images/product-banner.png';
import ProductBannerItem from './ProductBannerItem';

class ProductBanners extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <section className={`${styles["product-advantages-banners-section"]}`}>
                <div className={`${styles["product-advantages-banners"]}`}>
                    <ProductBannerItem
                        name='Outplay the Competittion'
                        description={
                            <>
                                <p>Experience a 40% boost in computing from last generation. MSI Desktop 
                                equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing 
                                power to bring you an unparalleled gaming experience.</p>
                                <p>*Performance compared to i7-9700. Specs varies by model.</p>
                            </>
                        }
                        image={banner}
                    />
                </div>
                <div className={`${styles["banners-scrolling"]}`}>
                    <a href="#"><PaginationButton className={`${styles["filled"]}`} /></a>
                    <a href="#"><PaginationButton /></a>
                    <a href="#"><PaginationButton /></a>
                </div>
            </section>
        );
    }
}

export default ProductBanners;