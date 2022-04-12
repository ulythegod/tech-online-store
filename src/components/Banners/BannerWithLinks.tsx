import React from 'react';
import styles from './bannerWithLinks.module.scss';
import banner from '../../images/product-links.png';

function ProductLinks() {
    const imageStyles = {
        background: `url(${banner}), #F5F7FF`,
    }

    return (
        <section className={`${styles["product-links-section"]}`}>
            <div className={`${styles["product-links-block"]}`}>
                <div className={`${styles["links"]}`}>
                    <ul>
                        <li>
                            <a href="#">Product Support</a>
                            <span>→</span>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                            <span>→</span>
                        </li>
                        <li>
                            <a href="#">Our Buyer Guide</a>
                            <span>→</span>
                        </li>
                    </ul>
                </div>
                <div className={`${styles["banner-image"]}`} style={imageStyles}></div>
            </div>
        </section>
    );
}

export default ProductLinks;
