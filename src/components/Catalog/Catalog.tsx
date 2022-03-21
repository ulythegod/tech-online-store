import React from 'react';
import styles from './catalog.module.scss';
import ProductItem from 'components/CatalogItem/ProductItem';
import CatalogTopElements from './CatalogTopElements';
import CatalogSelectedFilters from './CatalogSelectedFilters';
import CatalogPagination from './CatalogPagination';
import CatalogFilter from 'components/CatalogFilter/CatalogFilter';
import CatalogDescription from './CatalogDescription';
import CatlogItemHorizontal from 'components/CatalogItem/CatlogItemHorizontal';
import prodImg from '../../images/new-prod-img1.png';
import prodImgHorizontal from '../../images/catalog2.png';

function Catalog(props: any): any {
    return (
        <section className={`${styles["catalog-section"]}`}>
            <div className={`${styles["catalog-block"]}`}>
                <CatalogFilter />
                <div className={`${styles["catalog"]}`}>
                    <CatalogTopElements />
                    <CatalogSelectedFilters />
                    <div className={`${styles["catalog-column-view"]}`}>
                        <CatlogItemHorizontal 
                            status='in-stock'
                            productImage={prodImgHorizontal}
                            model="SKU D5515AI"
                            name='MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop'
                            price={499.00}
                            discount={499.00}
                            reviewsCount={4}
                        />
                        <CatlogItemHorizontal 
                            status='in-stock'
                            productImage={prodImgHorizontal}
                            model="SKU D5515AI"
                            name='MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop'
                            price={499.00}
                            discount={499.00}
                            reviewsCount={4}
                        />
                        <CatlogItemHorizontal 
                            status='in-stock'
                            productImage={prodImgHorizontal}
                            model="SKU D5515AI"
                            name='MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop'
                            price={499.00}
                            discount={499.00}
                            reviewsCount={4}
                        />
                        <CatlogItemHorizontal 
                            status='in-stock'
                            productImage={prodImgHorizontal}
                            model="SKU D5515AI"
                            name='MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop'
                            price={499.00}
                            discount={499.00}
                            reviewsCount={4}
                        />
                    </div>
                    <CatalogPagination />
                    <CatalogDescription />
                </div>
            </div>
        </section>
    );
}

export default Catalog;