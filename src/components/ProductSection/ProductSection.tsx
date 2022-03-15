import React from 'react';
import ProductImageBlock from './ProductImageBlock';
import ProductInfoBlock from './ProductInfoBlock';
import productImage from '../../images/product-banner.png';
import Breadcrumbs from 'components/CommonComponents/Breadcrumbs';
import PageTitle from 'components/CommonComponents/PageTitle';
import ProductDetailes from './ProductDetailes';
import ProductSpecs from './ProductSpecs';

class ProductSection extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <section className="product-section">
                <div className="product-info-block">
                    <Breadcrumbs />
                    <PageTitle
                        title="MSI MPG Trident 3"
                    />
                    <a href="#">Be the first to review this product</a>
                    <ProductInfoBlock 
                        name="MSI MPG Trident 3"
                        description={`
                            MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 
                            16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming 
                            Keyboard and Mouse 3 Years Warranty Gaming Desktop
                        `}
                        model="SKU D5515AI"
                    />                     
                    <div className="product-rest">
                        <p className="product-have-questions">
                            <span>Have a Question?</span>
                            <span><a href="#">Contact Us</a></span>
                        </p>
                        <span>SKU D5515AI</span>
                    </div>
                    <a href="#">+ More information</a>
                 </div>
                <ProductImageBlock 
                    image={productImage}
                    name="MSI MPG Trident 3"
                />
            </section>
        );
    }
}

export default ProductSection;