import React from 'react';
import styles from './productSpecs.module.scss';

function ProductSpecs(props: any): any {
    return (
        <div className={`${styles["features"]}`}>
            <table>
                <tbody>
                    <tr>
                        <td>CPU</td>
                        <td>N/A</td>
                    </tr>
                    <tr className={`${styles["dark"]}`}>
                        <td>Featured</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>I/O Ports</td>
                        <td>N/A</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ProductSpecs;