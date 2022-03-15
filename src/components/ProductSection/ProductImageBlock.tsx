import React from 'react';
import { ReactComponent as ZipLogo } from '../../images/zip-logo.svg';
import { ReactComponent as ProductMail } from '../../images/product-mail.svg';
import { ReactComponent as ProductRating } from '../../images/product-rating.svg';
import { ReactComponent as ProductFav } from '../../images/product-fav.svg';

interface ComponentProps {
    image: string;
    name: string;
}

class ProductImageBlock extends React.Component<ComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="product-image-block">
                <div className="product-buttons">
                    <button>
                        <ProductMail />
                    </button>
                    <button>
                        <ProductRating />
                    </button>
                    <button>
                        <ProductFav />
                    </button>
                </div>
                <img src={this.props.image} alt={this.props.name} />
                <div className="zip-info">
                    <ZipLogo />
                    <p>
                        own it now, up to 6 months interest free <a href="#">learn more</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default ProductImageBlock;