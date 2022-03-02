import React from 'react';
import RatingButton from './RatingButton';
import { ReactComponent as InStock } from '../images/in-stock.svg';
import { ReactComponent as CheckAvailability } from '../images/check-availability.svg';
import { ReactComponent as AddToFav } from '../images/prod-add-fav.svg';
import { ReactComponent as AddToRating } from '../images/prod-add-rating.svg';
import { ReactComponent as AddToCart } from '../images/add-to-card-prod.svg';

interface CustomInputProps {
    status: string;
    productImage: string;
    name: string;
    price: number;
    discount: number;
    reviewsCount: number;
}

class ProductItem extends React.Component<CustomInputProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="product-preview">
                <p className="product-status">
                    {(this.props.status == "in-stock") ? <InStock /> : ""}
                    {(this.props.status == "in-stock") ? "in stock" : ""}
                    {(this.props.status == "check-availability") ? <CheckAvailability /> : ""}
                    {(this.props.status == "check-availability") ? "check availability" : ""}
                </p>
                <div className="product-buttons">
                    <button>
                        <AddToFav />
                    </button>
                    <button>
                        <AddToRating />
                    </button>
                </div>
                <img src={this.props.productImage} alt="Product" />
                <div className="product-rating">
                    <div>
                        <RatingButton />
                        <RatingButton />
                        <RatingButton />
                        <RatingButton />
                        <RatingButton />
                    </div>
                    <a href='#'>Reviews ({this.props.reviewsCount})</a>
                    <span className="product-title">{this.props.name}</span>
                    <span className="product-price">${this.props.price}</span>
                    <span className="product-discount">${this.props.discount}</span>
                </div>
                <button>
                    <AddToCart />
                    <span>Add To Cart</span>
                </button>
            </div>
        );
    }
}

export default ProductItem;
