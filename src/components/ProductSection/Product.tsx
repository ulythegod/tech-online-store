import React, {useState} from "react";
import AddToCart from "components/AddToCartBlock/AddToCart";
import ProductSection from "./ProductSection";
import AddToCartMenu from "components/AddToCartBlock/AddToCartMenu";
import AddToCartPrices from "components/AddToCartBlock/AddToCartPrices";

function Product(props: any): any {
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
                renderRight={<AddToCartPrices />}
            />
            <ProductSection 
                activeInfoBlock={activeInfoBlock}
            />
        </>
    )
}

export default Product;