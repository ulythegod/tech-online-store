import React, { ReactElement, useRef, useState, useEffect } from 'react';
import styles from './newProductsSection.module.scss';
import TurnOverButton from '../Buttons/TurnOverButton';
import ProductItem from '../CatalogItem/ProductItem';
import debounce from 'lodash.debounce';

import { useSelector } from 'react-redux';
import { selectAllProducts } from '../../features/products/productsSlice';
import { RootState } from 'store';
import { Product } from 'CustomTypes';

function ProductSection(props: any): any {
    const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
    const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

    const itemsRef = useRef<HTMLDivElement>(null);

    const products: Product[] = useSelector((state: RootState) => selectAllProducts(state));

    const checkForScrollPosition = () => {        
        const {current} = itemsRef;

        if (current) {
            const {scrollLeft, scrollWidth, clientWidth} = current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
        }
    }

    const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 200);

    const scrollContainerBy = (distance: number) => {        
        return itemsRef.current?.scrollBy({left: distance, behavior: "smooth"});
    }

    useEffect(() => {
        const {current} = itemsRef;
        checkForScrollPosition();
        current?.addEventListener("scroll", debounceCheckForScrollPosition);

        return () => {
            current?.removeEventListener("scroll", debounceCheckForScrollPosition);
            debounceCheckForScrollPosition.cancel();
        }
    }, []);

    function handleScrollRight(event: any) {
        scrollContainerBy(210)
    }

    function handleScrollLeft(event: any) {
        scrollContainerBy(-210)
    }
    
    let productsItems: ReactElement<any, any>[] = products.map((product: Product) => {
        return (
            <ProductItem 
                key={product.id}
                id={product.id}
                status='check-availability'
                productImage={product.photo[0].url}
                name={product.name}
                price={Number(product.price)}
                discount={Number(product.price)}
                reviewsCount={4}
                isNewProducts={true}
            />
        )
    })

    return (
        <section className="new-products-section">
            <div className={styles["new-products"]}>
                <div className={styles["section-title"]}>
                    <h3>{props.name}</h3>
                    <a href="#">See All New Products</a>
                </div>
                <div className={styles["new-products-list"]}>
                    <div className={styles["items"]}> 
                        <div className={styles["items-overflow"]} ref={itemsRef}>
                            {productsItems}
                        </div>
                    </div>
                    <TurnOverButton
                        type="button-left"
                        buttonAction={handleScrollLeft}
                    />
                    <TurnOverButton
                        type="button-right"
                        buttonAction={handleScrollRight}
                    />
                </div>
                
            </div>
        </section>
    );
}

export default ProductSection;
