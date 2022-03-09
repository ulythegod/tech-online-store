import React from 'react';
import styles from './mainProductsSection.module.scss';
import ProductItem from 'components/CatalogItem/ProductItem';
import prodImg from '../../images/new-prod-img1.png';
import sectionBanner from '../../images/msi-laptops.png';

interface CustomInputProps {
    name: string;
    sections: boolean;
}

class MainProductsSection extends React.Component<CustomInputProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <section className={`${styles["main-products-list-section"]}`}>
                <div className={`${styles["products-list"]}`}>
                    {
                        this.props.sections ? 
                            <ul className={`${styles["products-list-menu"]}`}>
                                <li><a className={`${styles["active"]}`} href="#">MSI GS Series</a></li>
                                <li><a href="#">MSI GT Series</a></li>
                                <li><a href="#">MSI GL Series</a></li>
                                <li><a href="#">MSI GE Series</a></li>
                            </ul> : 
                            ''
                    }
                    <div className={`${styles["products"]}`}>
                        <div className={`${styles["products-list-common"]}`}>
                            <img className={`${styles["section-image"]}`} src={sectionBanner} alt="custom-builds" />
                            <div className={`${styles["section-title"]}`}>
                                <span>{this.props.name}</span>
                                <a href="#">See All Products</a>
                            </div>
                        </div>
                        <ProductItem 
                            status='in-stock'
                            productImage={prodImg}
                            name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={499.00}
                            discount={499.00}
                            reviewsCount={4}
                        />
                        <ProductItem 
                            status='in-stock'
                            productImage={prodImg}
                            name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={499.00}
                            discount={499.00}
                            reviewsCount={4}
                        />
                        <ProductItem 
                            status='in-stock'
                            productImage={prodImg}
                            name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={499.00}
                            discount={499.00}
                            reviewsCount={4}
                        />
                        <ProductItem 
                            status='in-stock'
                            productImage={prodImg}
                            name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={499.00}
                            discount={499.00}
                            reviewsCount={4}
                        />
                        <ProductItem 
                            status='in-stock'
                            productImage={prodImg}
                            name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={499.00}
                            discount={499.00}
                            reviewsCount={4}
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default MainProductsSection;
