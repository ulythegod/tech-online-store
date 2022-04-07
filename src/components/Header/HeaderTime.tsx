import React, { useState } from 'react';
import stylesModule from './headerTime.module.scss';
import HoverShopInfo from 'components/HoverShopInfo/HoverShopInfo';
import { usePopper } from 'react-popper';
import { ReactComponent as ArrowDown } from '../../images/arrow-down.svg';

function HeaderTime(props: any): any {
    const [isOpenShopInfo, setIsOpenShopInfo] = useState(false);

    function handleOpenShopInfo() {
        setIsOpenShopInfo(prevIsOpenShopInfo => !prevIsOpenShopInfo);
    }

    const [referenceElement, setReferenceElement] = useState<HTMLAnchorElement | null>(null);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
    const [arrowRef, setArrowRef] = useState<HTMLDivElement | null>(null);

    const { styles, attributes } = usePopper(
        referenceElement,
        popperElement,
        {
            placement: 'bottom-start',
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
                        offset: [-15, 12],
                    },
                },
            ],
        }
    );

    console.log(styles.popper);    
    
    return (
        <div className={`${stylesModule["header-time"]}`}>
            Mon-Thu:
            <span>9:00 AM - 5:30 PM</span>
            <a ref={setReferenceElement} onClick={handleOpenShopInfo} href="#" className={isOpenShopInfo ? `${stylesModule["arrow-down"]}` : ''}>
                <ArrowDown />
            </a>
            {isOpenShopInfo && 
                <div 
                    id="popper"
                    className={`${stylesModule["shop-info-block"]}`}
                    ref={setPopperElement}
                    style={styles.popper} 
                    {...attributes.popper}
                >
                    <div ref={setArrowRef} className={`${stylesModule["arrow"]}`}></div>
                    <HoverShopInfo />
                </div>
            }
        </div>
    );
}

export default HeaderTime;
