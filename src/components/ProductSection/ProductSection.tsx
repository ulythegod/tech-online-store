import React from 'react';
import styles from './productSection.module.scss';
import ProductImageBlock from './ProductImageBlock';
import productImage from '../../images/detailed-product.png';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import PageTitle from 'components/PageTitle/PageTitle';
import ProductInfoBlock from './ProductInfoBlock';
import ProductDetailes from './ProductDetailes';
import ProductSpecs from './ProductSpecs';

function ProductSection(props: any): any {   
    return (
        <section className={`${styles["product-section"]}`}>
            <div className={`${styles["product-block"]}`}>
                <div className={`${styles["product-info-block"]}`}>
                    <Breadcrumbs />
                    <PageTitle
                        title={props.product.name}
                        isProductPage={true}
                    />
                    <a className={`${styles["review-link"]}`} href="#">Be the first to review this product</a>
                    {
                        (props.activeInfoBlock === 'ProductInfoBlock') ? <ProductInfoBlock /> :
                        (props.activeInfoBlock === 'ProductDetailes') ? <ProductDetailes details={props.product.details} /> :
                        (props.activeInfoBlock === 'ProductSpecs') ? <ProductSpecs details={props.product.specs} /> : ''
                    }                     
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
                    image={props.product.photo[0].url}
                    name={props.product.name}
                />
            </div>
        </section>
    );
}

export default ProductSection;