import React from 'react';
import banner from '../../images/product-links.png';

class ProductLinks extends React.Component {
    render(): React.ReactNode {
        return (
            <section className="product-links">
                <div className="links">
                    <ul>
                        <li>
                            <a href="#">Product Support</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                        <li>
                            <a href="#">Our Buyer Guide</a>
                        </li>
                    </ul>
                </div>
                <img src={banner} alt="" />
            </section>
        );
    }
}

export default ProductLinks;
