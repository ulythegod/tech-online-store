import React, { useEffect } from "react";
import ProductsSection from 'components/CatalogSections/ProductsSection';

import { useSelector, useDispatch } from 'react-redux';
import { fetchPromotedCategories, selectAllPromotedCategories } from '../../features/promoted-categories/promotedCategoriesSlice';
import { RootState } from '../../store';

function PromotedCategories() {
    const dispatch = useDispatch();
    const categories = useSelector(selectAllPromotedCategories);

    const postStatus = useSelector((state: RootState) => state.promotedCategories.status);

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPromotedCategories());
        }
    }, [postStatus, dispatch]);    

    let categoriesSections: any[] = [];
    if (categories.length > 0) {
        categoriesSections = categories.map((category: any, id: number) => {                
            return (
                <ProductsSection
                    key={category.id}
                    id={category.id}
                    name={category.name}
                    banner={category.image.url}
                />
            )
        });
    }    

    return (
        <>
            {categoriesSections}
        </>
    );
}

export default PromotedCategories;