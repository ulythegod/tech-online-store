import React from 'react';

class ProductSpecs extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <p className="product-detailes">
                <table>
                    <tr>
                        <td>CPU</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>Featured</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>I/O Ports</td>
                        <td>N/A</td>
                    </tr>
                </table>
            </p>
        );
    }
}

export default ProductSpecs;