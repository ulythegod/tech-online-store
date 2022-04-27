import React, { useState } from 'react';
import styles from './productsSection.module.scss';
import ProductItem from '../../components/CatalogItem/ProductItem';
import SubCategories from './SubCategories';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { selectProductsByCategoryId } from '../../features/products/productsSlice';
import { selectCategoryById } from '../../features/categories/categoriesSlice';
import { ProductsSectionProps } from 'CustomTypes';

function ProductsSection(props: ProductsSectionProps) {
    const [activeSubCategory, setActiveSubCategory] = useState(0);
    function handleSubcategoryChange(event: any, categoryIdInArray: number) {
        event.preventDefault();

        setActiveSubCategory(categoryIdInArray);
    }

    const category = useSelector((state: RootState) => selectCategoryById(state, props.id));
    let subCategoriesList: any = '';
    let categorySearchingId: number = 0;

    if (category) {
        if (Object.keys(category).length > 0) {       
            if (category.subCategories.length > 0) {
                subCategoriesList = <SubCategories 
                    subCategories={category.subCategories}
                    activeSubCategory={activeSubCategory}
                    handleSubcategoryChange={handleSubcategoryChange}
                />;
            }
        }

        categorySearchingId = (category.subCategories.length > 0) ? category.subCategories[activeSubCategory].id : category.id;  
    }
       
    let products = useSelector((state: RootState) => selectProductsByCategoryId(state, [categorySearchingId]));
    if (products.length > 5) {
        products = products.slice(0, 5);
    } 
    let productsItems = products.map((product: any, id: number) => {        
        return (
            <ProductItem
                key={product.id}
                status='in-stock'
                productImage={product.photo[0].url}
                name={product.name}
                price={product.price}
                discount={product.price}
                reviewsCount={4}
                id={product.id}
            />
        )
    })

    return (
        <section className={styles["main-products-list-section"]}>
            <div className={styles["products-list"]}>
                {subCategoriesList}
                <div className={styles["products"]}>
                    <div className={styles["products-list-common"]}>
                        <img className={styles["section-image"]} src={props.banner} alt="custom-builds" />
                        <div className={styles["section-title"]}>
                            <span>{props.name}</span>
                            <Link to={`/catalog/${props.id}`}>See All Products</Link>
                        </div>
                    </div>
                    <div className={styles["items"]}>
                        {productsItems}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductsSection;
