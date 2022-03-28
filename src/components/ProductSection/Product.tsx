import React, {useState} from "react";
import AddToCart from "components/AddToCartBlock/AddToCart";
import ProductSection from "./ProductSection";

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
                handleInfoBlockChange={handleInfoBlockChange}
                activeInfoBlock={activeInfoBlock}
            />
            <ProductSection 
                activeInfoBlock={activeInfoBlock}
            />
        </>
    )
}

export default Product;