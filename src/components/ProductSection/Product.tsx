import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import AddToCart from "components/AddToCartBlock/AddToCart";
import ProductSection from "./ProductSection";
import AddToCartMenu from "components/AddToCartBlock/AddToCartMenu";
import AddToCartPrices from "components/AddToCartBlock/AddToCartPrices";

import { RootState } from '../../store';
import { fetchProductById, selectProduct } from '../../features/product/productSlice';
import { useDispatch, useSelector } from 'react-redux';

function Product(props: any): any {
    const {productId} = useParams();

    const dispatch = useDispatch();
    const product = useSelector((store: RootState) => selectProduct(store));

    const status = useSelector((store: RootState) => store.product.status);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProductById(Number(productId)));
        }
    }, [dispatch, status]);          

    const [activeInfoBlock, setActiveInfoBlock] = useState('ProductInfoBlock');
    function handleInfoBlockChange(e: any): void {
        let infoBlockCode = '';
        let linkParts = e.target.href.split("#");
        
        if (linkParts[1]) {
            infoBlockCode = linkParts[1];
        }
 
        setActiveInfoBlock(infoBlockCode);
    }

    return (
        <>
            <AddToCart 
                renderLeft={
                    <AddToCartMenu  
                        activeInfoBlock={activeInfoBlock}
                        handleInfoBlockChange={handleInfoBlockChange}
                    />
                }
                renderRight={
                    <AddToCartPrices 
                        productPrice={product.price}
                    />
                }
            />
            <ProductSection 
                activeInfoBlock={activeInfoBlock}
                product={product}
            />
        </>
    )
}

export default Product;