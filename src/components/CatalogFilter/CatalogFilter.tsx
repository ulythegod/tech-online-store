import React, { useState } from 'react';
import styles from './catalogFilter.module.scss';
import FilterItem from './FilterItem';
import FilterBrands from './FilterBrands';
import CatalogFilterBanner from './CatalogFilterBanner';
import StoreButton from '../Buttons/StoreButton';
import banner from '../../images/filters-banner.png';
import color1 from '../../images/color1.png';
import color2 from '../../images/color2.png';
import WishList from 'components/WishList/WishList';
import CompareProducts from 'components/CompareProducts/CompareProducts';
import CatalogSelect from 'components/Catalog/CatalogSelect';

function CatalogFilter(props: any): any {
    const [isOpenFilter, setIsOpenFilter] = useState(false);

    function handleFilterOpen() {
        setIsOpenFilter(prevIsOpenFilter => !prevIsOpenFilter);
    }

    const positions: any[] = [
        { value: 'position', label: 'Position' },
        { value: 'position2', label: 'Position2' },
        { value: 'position3', label: 'Position3' }
    ];
    
    return (
        <>
            <div className={`${styles["filter-buttons-mobile"]}`}>
                <div className={`${styles["filter-btn-mobile"]}`}>
                    <button
                        onClick={handleFilterOpen}
                    >
                        Filter
                    </button>
                </div>
                <CatalogSelect 
                    options={positions}
                    selectLabel="Sort by"
                />
            </div>
            <div className={isOpenFilter ? `${styles["catalog-filter-block-mobile"]}` : `${styles["catalog-filter-block"]}`}>
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
                            items={false}
                        />
                    </ul>
                    <StoreButton
                        style='blue-button'
                        content={"Apply Filters (2)"}
                    />
                </div>
                <FilterBrands />
                <div className={`${styles["filters-rest"]}`}>
                    <CompareProducts />
                    <WishList />
                    <CatalogFilterBanner 
                        image={banner}
                        link='#'
                    />
                </div>
            </div>
        </>
    );
}

export default CatalogFilter;