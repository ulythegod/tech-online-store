import React from 'react';
import styles from './productInfoBlock.module.scss';
import color1 from '../../images/prod-color1.png';
import color2 from '../../images/prod-color2.png';
import color3 from '../../images/prod-color3.png';

function ProductInfoBlock(props: any): any {
    return (
        <>
            <p className={`${styles["product-description"]}`}>
                {props.description}
            </p>
            <div className={`${styles["product-options"]}`}>
                <button className={`${styles["active"]}`}><img src={color1} alt="black"/></button>
                <button><img src={color2} alt="yellow"/></button>
                <button><img src={color3} alt="grey"/></button>
            </div>
        </>
    );
}

export default ProductInfoBlock;