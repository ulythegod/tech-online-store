import React from 'react';
import styles from './productDetailes.module.scss';

function ProductDetailes(props: any): any {   
    let details = props.details.map((detail: any, id: number) => {        
        return <li key={id}>{detail.detail}</li>;
    });    

    return (
        <div className={`${styles["product-detailes"]}`}>
            <ul>
                {details}
            </ul>
        </div>
    );
}

export default ProductDetailes;