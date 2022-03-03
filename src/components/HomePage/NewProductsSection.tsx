import React from 'react';
import { ReactComponent as ArrowRight } from '../../images/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../../images/arrow-left.svg';
import ProductItem from 'components/CatalogItem/ProductItem';
import prodImg1 from '../../images/new-prod-img1.png';
import prodImg2 from '../../images/new-prod-img2.png';
import prodImg3 from '../../images/new-prod-img3.png';
import prodImg4 from '../../images/new-prod-img4.png';
import prodImg5 from '../../images/new-prod-img5.png';
import prodImg6 from '../../images/new-prod-img6.png';

interface CustomInputProps {
    name: string;
}

class ProductSection extends React.Component<CustomInputProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <section className="new-products-section">
                <div className="section-title">
                    <h3>{this.props.name}</h3>
                    <a href="#">See All New Products</a>
                </div>
                <div className="products">
                    <button><ArrowRight /></button>
                    <ProductItem 
                        status='in-stock'
                        productImage={prodImg1}
                        name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                        price={499.00}
                        discount={499.00}
                        reviewsCount={4}
                    />
                    <ProductItem 
                        status='check-availability'
                        productImage={prodImg2}
                        name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                        price={499.00}
                        discount={499.00}
                        reviewsCount={4}
                    />
                    <ProductItem 
                        status='in-stock'
                        productImage={prodImg3}
                        name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                        price={499.00}
                        discount={499.00}
                        reviewsCount={4}
                    />
                    <ProductItem 
                        status='in-stock'
                        productImage={prodImg4}
                        name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                        price={499.00}
                        discount={499.00}
                        reviewsCount={4}
                    />
                    <ProductItem 
                        status='in-stock'
                        productImage={prodImg5}
                        name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                        price={499.00}
                        discount={499.00}
                        reviewsCount={4}
                    />
                    <ProductItem 
                        status='in-stock'
                        productImage={prodImg6}
                        name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                        price={499.00}
                        discount={499.00}
                        reviewsCount={4}
                    />
                    <button><ArrowLeft /></button>
                </div>
            </section>
        );
    }
}

export default ProductSection;
