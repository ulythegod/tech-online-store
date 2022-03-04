import React from 'react';
import { Link } from 'react-router-dom';
import RatingButton from './RatingButton';
import { ReactComponent as InStock } from '../../images/in-stock.svg';
import { ReactComponent as CheckAvailability } from '../../images/check-availability.svg';
import { ReactComponent as ProductMail } from '../../images/product-mail.svg';
import { ReactComponent as ProductRating } from '../../images/product-rating.svg';
import { ReactComponent as ProductFav } from '../../images/product-fav.svg';
import { ReactComponent as AddToCart } from '../../images/add-to-card-prod.svg';

interface CustomInputProps {
    status: string;
    productImage: string;
    model: string;
    name: string;
    price: number;
    discount: number;
    reviewsCount: number;
}

class CatlogItemHorizontal extends React.Component<CustomInputProps> {
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
                <div className="product-info">
                    <Link to="/product"><img src={this.props.productImage} alt="Product" /></Link>
                    <div className="about-product">
                        <span className="product-model">{this.props.model}</span>
                        <span className="product-title">
                            {this.props.name}
                        </span>
                        <div className="product-prices">
                            <span className="product-price">${this.props.price}</span>
                            <span className="product-discount">${this.props.discount}</span>
                        </div>
                    </div>
                    <div className="features">
                        <table>
                            <tr>
                                <td>CPU</td>
                                <td>N/A</td>
                            </tr>
                            <tr className="dark">
                                <td>Featured</td>
                                <td>N/A</td>
                            </tr>
                            <tr>
                                <td>I/O Ports</td>
                                <td>N/A</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="product-bottom">
                    <div className="product-rating">
                        <div>
                            <RatingButton />
                            <RatingButton />
                            <RatingButton />
                            <RatingButton />
                            <RatingButton />
                        </div>
                        <span>Reviews ({this.props.reviewsCount})</span>
                    </div>
                    <button>
                        <AddToCart />
                        Add To Cart
                    </button>
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
                </div>                        
            </div>
        );
    }
}

export default CatlogItemHorizontal;