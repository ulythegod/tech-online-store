import React from 'react';

class ProductDetailes extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <p className="product-detailes">
                <ul>
                    <li>Intel Core i7-10700F</li>
                    <li>Intel H410</li>
                    <li>WHITE</li>
                    <li>NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6</li>
                    <li>SO-DIMM 16GB (16GB x 1) DDR4 2666MHz</li>
                    <li>2 total slots (64GB Max)</li>
                    <li>512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM</li>
                    <li>Gaming Keyboard GK30 + Gaming Mouse GM11</li>
                    <li>3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)</li>
                    <li>Intel WGI219Vethernet (10/100/1000M)</li>
                    <li>AX200 (WIFI 6)+BT5.1</li>
                    <li>PSU 330W</li>
                    <li>Fan Cooler</li>
                </ul>
            </p>
        );
    }
}

export default ProductDetailes;