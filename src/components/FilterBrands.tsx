import React from 'react';
import BrandsItem from './BrandsItem';
import img1 from '../images/brand1.png';
import img2 from '../images/brand2.png';
import img3 from '../images/brand3.png';
import img4 from '../images/brand4.png';
import img5 from '../images/brand5.png';
import img6 from '../images/brand6.png';

class FilterBrands extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="brands">
                <span>Brands</span>
                <button>All Brands</button>
                <ul>
                    <BrandsItem
                        name='brand'
                        image={img1}
                        link='#'
                    />
                    <BrandsItem
                        name='brand'
                        image={img2}
                        link='#'
                    />
                    <BrandsItem
                        name='brand'
                        image={img3}
                        link='#'
                    />
                    <BrandsItem
                        name='brand'
                        image={img4}
                        link='#'
                    />
                    <BrandsItem
                        name='brand'
                        image={img5}
                        link='#'
                    />
                    <BrandsItem
                        name='brand'
                        image={img6}
                        link='#'
                    />
                </ul>
            </div>
        );
    }
}

export default FilterBrands;