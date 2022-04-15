import React, { ReactElement, useState } from 'react';
import styles from './productInfoBlock.module.scss';
import color1 from '../../images/prod-color1.png';
import color2 from '../../images/prod-color2.png';
import color3 from '../../images/prod-color3.png';

type Props = {
    description?: ReactElement<any, any>
}

function ProductInfoBlock(props: Props) {
    const [activeColor, setActiveColor] = useState("black");

    function handleActiveColorChange(event: any) {
        if (event.target.id != activeColor) {
            setActiveColor(event.target.id);
        }        
    }

    return (
        <>
            <p className={styles["product-description"]}>
                {props.description}
            </p>
            <div className={styles["product-options"]}>
                <button
                    className={(activeColor === "black") ? styles["active"] : ``}
                    onClick={(event: any) => handleActiveColorChange(event)}
                >
                    <img src={color1} id='black' alt="black"/>
                </button>
                <button 
                    className={(activeColor === "yellow") ? styles["active"] : ``}
                    onClick={(event: any) => handleActiveColorChange(event)}
                >
                    <img src={color2} id='yellow' alt="yellow"/>
                </button>
                <button 
                    className={(activeColor === "grey") ? styles["active"] : ``}
                    onClick={(event: any) => handleActiveColorChange(event)}
                >
                    <img src={color3} id='grey' alt="grey"/>
                </button>
            </div>
        </>
    );
}

export default ProductInfoBlock;