import React from 'react';
import styles from './catalogFilter.module.scss';
import FilterItem from './FilterItem';
import FilterBrands from './FilterBrands';
import CatalogFilterBanner from './CatalogFilterBanner';
import StoreButton from '../CommonComponents/StoreButton';
import banner from '../../images/filters-banner.png';
import color1 from '../../images/color1.png';
import color2 from '../../images/color2.png';

function CatalogFilter(props: any): any {
    return (
        <div className={`${styles["catalog-filter-block"]}`}>
            <a className={`${styles["filter-title-link"]}`} href="#">Back</a>
            <div className={`${styles["filters"]}`}>
                <span>Filters</span>
                <StoreButton
                    style='grey-button'
                    content={"Clear Filter"}
                />
                <ul className={`${styles["filter-items"]}`}>
                    <FilterItem 
                        name='Category'
                        isOpened={true}
                        items={
                            <ul>
                                <li>
                                    <a href="#">CUSTOM PCS</a>
                                    <span>15</span>
                                </li>
                                <li>
                                    <a href="#">MSI ALL-IN-ONE PCS</a>
                                    <span>45</span>
                                </li>
                                <li>
                                    <a href="#">HP/COMPAQ PCS</a>
                                    <span>1</span>
                                </li>
                            </ul>
                        }
                    />
                    <FilterItem 
                        name='Price'
                        isOpened={true}
                        items={
                            <ul>
                                <li>
                                    <a href="#">$0.00 - $1,000.00</a>
                                    <span>19</span>
                                </li>
                                <li>
                                    <a href="#">$1,000.00 - $2,000.00</a>
                                    <span>21</span>
                                </li>
                                <li>
                                    <a href="#">$2,000.00 - $3,000.00</a>
                                    <span>9</span>
                                </li>
                                <li>
                                    <a href="#">$3,000.00 - $4,000.00</a>
                                    <span>6</span>
                                </li>
                                <li>
                                    <a href="#">$4,000.00 - $5,000.00</a>
                                    <span>3</span>
                                </li>
                                <li>
                                    <a href="#">$5,000.00 - $6,000.00</a>
                                    <span>1</span>
                                </li>
                                <li>
                                    <a href="#">$6,000.00 - $7,000.00</a>
                                    <span>1</span>
                                </li>
                                <li>
                                    <a href="#">$7,000.00 And Above</a>
                                    <span>1</span>
                                </li>
                            </ul>
                        }
                    />
                    <FilterItem 
                        name='Color'
                        isOpened={true}
                        items={
                            <ul>
                                <li>
                                    <a href="#"><img src={color1} alt="Black" /></a>
                                </li>
                                <li>
                                    <span><img src={color2} alt="Red" /></span>
                                </li>
                            </ul>
                        }
                        isIcons={true}
                    />
                    <FilterItem 
                        name='Filter Name'
                        isOpened={false}
                        items={false}
                    />
                </ul>
                <StoreButton
                    style='blue-button'
                    content={"Apply Filters (2)"}
                />
            </div>
            <FilterBrands />
            <div className={`${styles["compare-products"]}`}>
                <span>Compare Products</span>
                <p>You have no items to compare.</p>
            </div>
            <div className={`${styles["wish-list"]}`}>
                <span>My Wish List</span>
                <p>You have no items in your wish list.</p>
            </div>
            <CatalogFilterBanner 
                image={banner}
                link='#'
            />
        </div>
    );
}

export default CatalogFilter;