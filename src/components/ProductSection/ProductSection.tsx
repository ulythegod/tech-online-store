import React from 'react';
import styles from './productSection.module.scss';
import ProductImageBlock from './ProductImageBlock';
import ProductInfoBlock from './ProductInfoBlock';
import productImage from '../../images/detailed-product.png';
import Breadcrumbs from 'components/CommonComponents/Breadcrumbs';
import PageTitle from 'components/CommonComponents/PageTitle';
import ProductDetailes from './ProductDetailes';
import ProductSpecs from './ProductSpecs';

class ProductSection extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <section className={`${styles["product-section"]}`}>
                <div className={`${styles["product-block"]}`}>
                    <div className={`${styles["product-info-block"]}`}>
                    <Breadcrumbs />
                    <PageTitle
                        title="MSI MPG Trident 3"
                        isProductPage={true}
                    />
                    <a className={`${styles["review-link"]}`} href="#">Be the first to review this product</a>
                    <ProductSpecs />                     
                    <div className={`${styles["product-rest"]}`}>
                        <p className={`${styles["product-have-questions"]}`}>
                            <span>Have a Question?</span>
                            <span><a href="#">Contact Us</a></span>
                        </p>
                        <span>SKU D5515AI</span>
                    </div>
                    <a className={`${styles["more-info-link"]}`} href="#">+ More information</a>
                     </div>
                    <ProductImageBlock 
                        image={productImage}
                        name="MSI MPG Trident 3"
                    />
                </div>
            </section>
        );
    }
}

export default ProductSection;