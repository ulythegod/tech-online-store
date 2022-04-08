import React from 'react';
import styles from './productSection.module.scss';
import ProductImageBlock from './ProductImageBlock';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import PageTitle from 'components/PageTitle/PageTitle';
import ProductInfoBlock from './ProductInfoBlock';
import ProductDetailes from './ProductDetailes';
import ProductSpecs from './ProductSpecs';
import {Link} from 'react-router-dom';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { selectCategoryById } from '../../features/categories/categoriesSlice';

function ProductSection(props: any): any {    
    const productCategory: any = useSelector((state: RootState) => selectCategoryById(state, props.product.category.id));    
    
    return (
        <section className={`${styles["product-section"]}`}>
            <div className={`${styles["product-block"]}`}>
                <div className={`${styles["product-info-block"]}`}>
                    <Breadcrumbs 
                        category={productCategory}
                    />
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
                            <span><Link to="/contact-us">Contact Us</Link></span>
                        </p>
                        <span>SKU D5515AI</span>
                    </div>
                    <a className={`${styles["more-info-link"]}`} href="#">+ More information</a>
                 </div>
                {
                    (props.product.photo) &&
                    <ProductImageBlock 
                        image={props.product.photo[0].url}
                        name={props.product.name}
                    />
                }
                
            </div>
        </section>
    );
}

export default ProductSection;