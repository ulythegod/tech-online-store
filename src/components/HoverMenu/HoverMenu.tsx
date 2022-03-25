import React from "react";
import styles from './hoverMenu.module.scss';
import CompaniesSection from "components/CompaniesSection/CompaniesSection";
import ProductItem from "components/CatalogItem/ProductItem";
import MultilevelMenu from "./MultilevelMenu";
import prodImg1 from '../../images/new-prod-img1.png';
import prodImg2 from '../../images/new-prod-img2.png';
import prodImg3 from '../../images/new-prod-img3.png';
import prodImg4 from '../../images/new-prod-img4.png';

function HoverMenu(props: any): any {
    return (
        <div className={`${styles["hover-menu"]}`}>
            <div className={`${styles["menu-top-block"]}`}>
                <MultilevelMenu />
                <div className={`${styles["menu-products-list"]}`}>
                    <ProductItem 
                        status='in-stock'
                        productImage={prodImg1}
                        name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                        price={499.00}
                        discount={499.00}
                        reviewsCount={4}
                    />
                    <ProductItem 
                        status='check-availability'
                        productImage={prodImg2}
                        name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                        price={499.00}
                        discount={499.00}
                        reviewsCount={4}
                    />
                    <ProductItem 
                        status='in-stock'
                        productImage={prodImg3}
                        name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                        price={499.00}
                        discount={499.00}
                        reviewsCount={4}
                    />
                    <ProductItem 
                        status='in-stock'
                        productImage={prodImg4}
                        name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                        price={499.00}
                        discount={499.00}
                        reviewsCount={4}
                    />
                </div>
            </div>
            <CompaniesSection 
                isInMenu={true}
            />
        </div>
    )
}

export default HoverMenu;