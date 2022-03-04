import React from 'react';
import { ReactComponent as PaginationButton } from '../../images/pagiantion-button.svg';
import banner from '../../images/product-banner.png'
import BannerItem from './BannerItem';

class ProductBanners extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <section className="product-advantages-banners-section">
                <div className="product-advantages-banners">
                    <BannerItem
                        name='Outplay the Competittion'
                        description='Experience a 40% boost in computing from last generation. MSI Desktop 
                            equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing 
                            power to bring you an unparalleled gaming experience.
                            *Performance compared to i7-9700. Specs varies by model.'
                        image={banner}
                    />
                </div>
                <div className="banners-scrolling">
                    <a href="#"><PaginationButton /></a>
                    <a href="#"><PaginationButton /></a>
                    <a href="#"><PaginationButton /></a>
                </div>
            </section>
        );
    }
}

export default ProductBanners;