import React, { ReactElement, useState } from 'react';
import stylesModule from './topMenuBasket.module.scss';
import SmallBasketItem from './SmallBasketItem';
import StoreButton from 'components/Buttons/StoreButton';
import { usePopper } from 'react-popper';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { selectAllProductsIds } from 'features/product-card/productCardSlice';
import { selectProductsByIds } from 'features/products/productsSlice';
import { productRemoved } from 'features/product-card/productCardSlice';

import { ReactComponent as BasketLogo } from '../../images/basket.svg';
import { ReactComponent as PayPal } from '../../images/paypal.svg';
import { Product } from 'CustomTypes';

function TopMenuBasket() {
    const dispatch = useDispatch();
    const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
    const [arrowRef, setArrowRef] = useState<HTMLDivElement | null>(null);

    const { styles, attributes } = usePopper(
        referenceElement,
        popperElement,
        {
            modifiers: [
                {
                    name: 'arrow',
                    options: {
                        element: arrowRef,
                    },
                },
                {
                    name: 'offset',
                    options: {
                        offset: [-250, 0],
                    },
                },
                {
                    name: 'eventListeners',
                    options: {scroll: false}
                }
            ],
        }
    );

    const [isOpenBasket, setIsOpenBasket] = useState(false);

    async function handleOnMouseEnter(event: any) {
        event.preventDefault();
        event.stopPropagation();

        if (!isOpenBasket) {
            setIsOpenBasket(prevIsOpenBasket => !prevIsOpenBasket);
        }
    }

    function handleOnMouseLeave(event: any) {
        event.preventDefault();
        event.stopPropagation();
        

        if (isOpenBasket) {
            setIsOpenBasket(prevIsOpenBasket => !prevIsOpenBasket);
        }
    }

    function handleProductRemoved(event: any, productId: number) {        
        dispatch(productRemoved(productId))
    }

    const productsIds = useSelector((state: RootState) => selectAllProductsIds(state))

    let productsIdsWithoutDoubles: number[] = productsIds.filter((item, index) => {
        return productsIds.indexOf(item) === index
    });

    let idsCounts: number[] = productsIds.reduce(function(stack, value) {
        return stack[value] ? stack[value]++ : stack[value] = 1, stack;
    }, {});

    const products = useSelector((state: RootState) => selectProductsByIds(state, productsIdsWithoutDoubles));    
    let basketItems: ReactElement<any, any>[] = [];
    if (products.length) {
        basketItems =  products.map((product: Product, id: number) => {
            let productAmount: number = idsCounts[product.id];          

            return (
                <SmallBasketItem 
                    key={product.id}
                    amount={productAmount}
                    imagePath={product.photo[0].url}
                    name={product.name}
                    id={product.id}
                    handleProductRemoved={handleProductRemoved}
                />
            )
        })
    }
    
    const subtotalValues: number[] = products.map((product: Product, id: number) => {
        return Number(product.price) * idsCounts[product.id];
    });

    const subtotal: number = subtotalValues.reduce(
        (prevVal, currentVal) => prevVal + currentVal,
        0
    );    

    return (
        <>
            <div className={`${stylesModule["basket-top"]}`}
                onMouseEnter={(event: any) => handleOnMouseEnter(event)}
                onMouseLeave={(event: any) => handleOnMouseLeave(event)}
                ref={setReferenceElement}
            >
                <div className={`${stylesModule["basket-icon"]}`}>
                    <BasketLogo className={`${stylesModule["basket-logo"]}`} />
                    <span className={`${stylesModule["basket-amount"]}`}>{basketItems.length}</span>
                </div>
                <div
                    className={isOpenBasket ? `${stylesModule["appearing-block"]}` : `${stylesModule["hidden"]}`}
                    ref={setPopperElement}
                    style={styles.popper} 
                    {...attributes.popper}
                >
                    <div className={`${stylesModule["arrow"]}`} ref={setArrowRef}></div>
                    <div className={`${stylesModule["appearing-basket-top"]}`}>
                        <div className={`${stylesModule["inner-basket-top"]}`}>
                            <span className={`${stylesModule["basket-title"]}`}>My Cart</span>
                            <span className={`${stylesModule["basket-amount-title"]}`}>{basketItems.length} item in cart</span>
                            <StoreButton 
                                style="light-button"
                                content={"View or Edit Your Cart"}
                            />
                        </div>
                        <div className="basket-list">
                            {basketItems}
                        </div>
                        <div className={`${stylesModule["basket-bottom"]}`}>
                            <span className={`${stylesModule["subtotal"]}`}>Subtotal: <span>${subtotal}</span></span>
                            <StoreButton 
                                style="blue-button"
                                content={"Go to Checkout"}
                            />
                            <StoreButton 
                                style="yellow-button-header"
                                content={
                                    <>
                                        Check out with
                                        <PayPal />
                                    </>
                                }
                            />
                        </div>
                    </div>
                </div>          
            </div>
        </>
    );
}

export default TopMenuBasket;
