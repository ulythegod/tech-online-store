import React from "react";
import styles from './hoverMenu.module.scss';
import CompaniesSection from "components/CompaniesSection/CompaniesSection";
import ProductItem from "components/CatalogItem/ProductItem";
import MultilevelMenu from "../MultilevelMenu/MultilevelMenu";

import { useSelector } from "react-redux";
import { RootState } from "store";
import { selectProductsByCategoryId } from "features/products/productsSlice";
import { Category } from '../../CustomTypes';

type Props = {
    categoryId: number,
    subCategories: Category[]
}

function HoverMenu(props: Props) {
    let categoriesIds: number[] = [props.categoryId];

    props.subCategories.forEach((category: any) => {
        categoriesIds.push(category.id);
    });

    let categoryProducts: any[] = useSelector((state: RootState) => selectProductsByCategoryId(state, categoriesIds));
    if (categoryProducts.length > 4) {      
        categoryProducts = categoryProducts.slice(0, 4);
    }    

    const productsItems: any[] = categoryProducts.map((product: any, id: number) => {
        return (
            <ProductItem 
                key={product.id}
                status='in-stock'
                productImage={product.photo[0].url}
                name={product.name}
                price={product.price}
                discount={product.price}
                id={product.id}
                reviewsCount={4}
            />
        )
    })

    return (
        <div className={`${styles["hover-menu"]}`}>
            <div className={`${styles["menu-top-block"]}`}>
                <MultilevelMenu subCategories={props.subCategories} />
                <div className={`${styles["menu-products-list"]}`}>
                    {productsItems}
                </div>
            </div>
            <CompaniesSection 
                isInMenu={true}
            />
        </div>
    )
}

export default HoverMenu;