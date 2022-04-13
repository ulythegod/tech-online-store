import React from 'react';
import styles from './newProductsSection.module.scss';
import TurnOverButton from 'components/Buttons/TurnOverButton';
import ProductItem from 'components/CatalogItem/ProductItem';

import { useSelector } from 'react-redux';
import { selectAllProducts } from 'features/products/productsSlice';
import { RootState } from 'store';
import { Product } from 'CustomTypes';

import prodImg1 from '../../images/new-prod-img1.png';
import prodImg2 from '../../images/new-prod-img2.png';
import prodImg3 from '../../images/new-prod-img3.png';
import prodImg4 from '../../images/new-prod-img4.png';
import prodImg5 from '../../images/new-prod-img5.png';
import prodImg6 from '../../images/new-prod-img6.png';

function ProductSection(props: any): any {
    const products: Product[] = useSelector((state: RootState) => selectAllProducts(state));    

    return (
        <section className="new-products-section">
            <div className={`${styles["new-products"]}`}>
                <div className={`${styles["section-title"]}`}>
                    <h3>{props.name}</h3>
                    <a href="#">See All New Products</a>
                </div>
                <div className={`${styles["new-products-list"]}`}>
                    <div className={`${styles["items"]}`}>           
                        <ProductItem 
                            id={1}
                            status='in-stock'
                            productImage={prodImg1}
                            name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={499.00}
                            discount={499.00}
                            reviewsCount={4}
                        />
                        <ProductItem 
                            id={2}
                            status='check-availability'
                            productImage={prodImg2}
                            name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={499.00}
                            discount={499.00}
                            reviewsCount={4}
                        />
                        <ProductItem 
                            id={3}
                            status='in-stock'
                            productImage={prodImg3}
                            name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={499.00}
                            discount={499.00}
                            reviewsCount={4}
                        />
                        <ProductItem 
                            id={4}
                            status='in-stock'
                            productImage={prodImg4}
                            name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={499.00}
                            discount={499.00}
                            reviewsCount={4}
                        />
                        <ProductItem 
                            id={5}
                            status='in-stock'
                            productImage={prodImg5}
                            name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={499.00}
                            discount={499.00}
                            reviewsCount={4}
                        />
                        <ProductItem 
                            id={6}
                            status='in-stock'
                            productImage={prodImg6}
                            name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                            price={499.00}
                            discount={499.00}
                            reviewsCount={4}
                        />
                    </div>
                    <TurnOverButton
                        type="button-left"
                    />
                    <TurnOverButton
                        type="button-right"
                    />
                </div>
                
            </div>
        </section>
    );
}

export default ProductSection;
